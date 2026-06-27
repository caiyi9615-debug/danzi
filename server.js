const express = require("express");
const path = require("path");
const crypto = require("crypto");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

const SUPABASE_URL = (process.env.SUPABASE_URL || "").replace(/\/+$/, "");
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const BILI_CACHE_TTL_MS = 6 * 60 * 60 * 1000;
let biliPagesCache = null;
let biliPagesCacheAt = 0;
let physicsPagesCache = null;
let physicsPagesCacheAt = 0;

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public"), { index: false }));

function hashKey(k) {
  return crypto.createHash("sha256").update(String(k || "")).digest("hex");
}

async function supabaseRequest(endpoint, options = {}) {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("服务器还没有配置 Supabase 环境变量");
  }
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${endpoint}`, {
    ...options,
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });
  const text = await res.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  if (!res.ok) throw new Error((data && data.message) || text || `HTTP ${res.status}`);
  return data;
}

app.post("/api/sync/pull", async (req, res) => {
  try {
    const syncKey = String(req.body.syncKey || "").trim();
    if (!syncKey) return res.status(400).json({ success: false, message: "缺少同步码" });
    const data = await supabaseRequest(
      `circuit_study_state?sync_key_hash=eq.${encodeURIComponent(hashKey(syncKey))}&select=state,updated_at&limit=1`,
      { method: "GET" }
    );
    const row = Array.isArray(data) && data.length ? data[0] : null;
    res.json({ success: true, state: row ? row.state : null, updated_at: row ? row.updated_at : null });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message || "读取失败" });
  }
});

app.post("/api/sync/push", async (req, res) => {
  try {
    const syncKey = String(req.body.syncKey || "").trim();
    const state = req.body.state;
    if (!syncKey) return res.status(400).json({ success: false, message: "缺少同步码" });
    if (!state || typeof state !== "object") return res.status(400).json({ success: false, message: "缺少打卡数据" });
    await supabaseRequest("circuit_study_state?on_conflict=sync_key_hash", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify({ sync_key_hash: hashKey(syncKey), state, updated_at: new Date().toISOString() })
    });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message || "上传失败" });
  }
});


const BILI_BVID = "BV1wffvY4EZC";

function mapLessonNoFromPage(pageNumber) {
  // P2 是讲义领取，不算正式课时：
  // 课时01 -> P1; 课时02 -> P3; 课时03 -> P4 ... 课时13 -> P14
  if (pageNumber === 2) return null;
  if (pageNumber === 1) return 1;
  if (pageNumber >= 3 && pageNumber <= 14) return pageNumber - 1;
  return null;
}

app.get("/api/bili/pages", async (req, res) => {
  try {
    if (biliPagesCache && Date.now() - biliPagesCacheAt < BILI_CACHE_TTL_MS) {
      return res.json(biliPagesCache);
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const url = `https://api.bilibili.com/x/web-interface/view?bvid=${BILI_BVID}`;
    const r = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Referer": `https://www.bilibili.com/video/${BILI_BVID}/`
      }
    });
    clearTimeout(timeout);
    const d = await r.json();

    if (!r.ok || d.code !== 0) {
      throw new Error(d.message || "B站接口返回异常");
    }

    const lessonDurations = {};
    const lessonPages = {};

    (d.data.pages || []).forEach(p => {
      const lessonNo = mapLessonNoFromPage(Number(p.page));
      if (!lessonNo || lessonNo > 13) return;
      lessonDurations[lessonNo] = Number(p.duration || 0);
      lessonPages[lessonNo] = {
        page: p.page,
        part: p.part,
        duration: p.duration
      };
    });

    biliPagesCache = {
      success: true,
      bvid: BILI_BVID,
      lessonDurations,
      lessonPages
    };
    biliPagesCacheAt = Date.now();
    res.json(biliPagesCache);
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.name === "AbortError" ? "获取B站分P信息超时" : (e.message || "获取B站分P信息失败")
    });
  }
});


const PHYSICS_BVID = "BV1G4wqz7EpN";

app.get("/api/physics/pages", async (req, res) => {
  try {
    if (physicsPagesCache && Date.now() - physicsPagesCacheAt < BILI_CACHE_TTL_MS) {
      return res.json(physicsPagesCache);
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const url = `https://api.bilibili.com/x/web-interface/view?bvid=${PHYSICS_BVID}`;
    const r = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Referer": `https://www.bilibili.com/video/${PHYSICS_BVID}/`
      }
    });
    clearTimeout(timeout);
    const d = await r.json();

    if (!r.ok || d.code !== 0) {
      throw new Error(d.message || "B站接口返回异常");
    }

    const pages = (d.data.pages || []).map(p => ({
      page: Number(p.page),
      part: p.part,
      cid: p.cid,
      duration: Number(p.duration || 0),
      url: `https://www.bilibili.com/video/${PHYSICS_BVID}?p=${Number(p.page)}`
    }));

    physicsPagesCache = {
      success: true,
      bvid: PHYSICS_BVID,
      title: d.data.title,
      pages
    };
    physicsPagesCacheAt = Date.now();
    res.json(physicsPagesCache);
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.name === "AbortError" ? "获取大学物理B站分P信息超时" : (e.message || "获取大学物理B站分P信息失败")
    });
  }
});


app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.listen(PORT, () => console.log("circuit daily schedule site running on " + PORT));
