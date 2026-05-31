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


function replaceConstPlan(html) {
  const marker = "const PLAN=";
  const start = html.indexOf(marker);
  if (start === -1) return html;
  const arrayStart = html.indexOf("[", start);
  if (arrayStart === -1) return html;
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = arrayStart; i < html.length; i += 1) {
    const ch = html[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === "\\") escaped = true;
      else if (ch === '"') inString = false;
    } else {
      if (ch === '"') inString = true;
      else if (ch === "[") depth += 1;
      else if (ch === "]") {
        depth -= 1;
        if (depth === 0) {
          const semicolon = html.indexOf(";", i);
          if (semicolon === -1) return html;
          return html.slice(0, start) +
            "let PLAN=" + html.slice(arrayStart, semicolon + 1) +
            "\nif(Array.isArray(window.CIRCUIT_PLAN)&&window.CIRCUIT_PLAN.length) PLAN=window.CIRCUIT_PLAN;" +
            html.slice(semicolon + 1);
        }
      }
    }
  }
  return html;
}

function buildIndexHtml() {
  let html = fs.readFileSync(path.join(__dirname, "public", "index.html"), "utf8");
  html = html
    .replace("<title>电路原理复习站｜每日复习+健身日程</title>", "<title>5.31—6.10 电路原理邱关源版第1—9章复习打卡网站</title>")
    .replace("<h1>每日复习 + 健身日程表｜电路原理版</h1>", "<h1>5.31—6.10 电路原理邱关源版第1—9章复习打卡网站</h1>")
    .replace("目标：每天复习 6—7.5 小时 + 健身减肥 + 午睡 + 晚上休闲 + 23:30睡觉。电路原理按邱关源1—8章安排，蜂考网课只学到课时11，P2讲义领取已自动跳过。", "目标：2026-05-31 到 2026-06-10 复习邱关源《电路原理》第1—9章；每天保持复习、健身、午睡、晚上休闲与 23:30 睡觉，网课自动跳过讲义领取。")
    .replace("<script>\nconst STORAGE_KEY", "<script src=\"/plan.js\"></script>\n<script>\nconst STORAGE_KEY")
    .replace("const LESSON_TITLES=", "let LESSON_TITLES=")
    .replace("};\n\nconst PLAN=", "};\nif(window.CIRCUIT_LESSON_TITLES&&Object.keys(window.CIRCUIT_LESSON_TITLES).length) LESSON_TITLES=window.CIRCUIT_LESSON_TITLES;\n\nconst PLAN=")
    .replace("正在获取真实时长", "读取中")
    .replace("<div class=\"lesson-meta\">${getLessonDurationText(no)}｜", "<div class=\"lesson-meta\">真实时长：${getLessonDurationText(no)}｜")
    .replace(">打开课程</button>", ">去B站观看</button>")
    .replace(">标记完成</button>", ">我已看完</button>")
    .replace("<div class=\"course-title\">网课安排</div>", "<div class=\"course-title\">今日网课</div>");
  return replaceConstPlan(html);
}

function sendIndex(req, res) {
  res.type("html").send(buildIndexHtml());
}

app.get("/", sendIndex);
app.get("*", sendIndex);
app.listen(PORT, () => console.log("circuit daily schedule site running on " + PORT));
