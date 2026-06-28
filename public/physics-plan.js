// 6.27—6.28 大学物理从零学习冲刺计划
// 使用新网课：《大学物理速成（非物理系）》 BV1G4wqz7EpN
window.CIRCUIT_LESSON_TITLES = {};
const PHYSICS_PLAN_VERSION = 3;
const PHYSICS_STORAGE_KEY = "physicsPlanV3";
const PHYSICS_BVID = "BV1G4wqz7EpN";
const PHYSICS_URL = `https://www.bilibili.com/video/${PHYSICS_BVID}`;

function sec(h = 0, m = 0, s = 0) { return h * 3600 + m * 60 + s; }
function fmt(seconds) {
  seconds = Math.max(0, Math.round(Number(seconds) || 0));
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h) return `${h}小时${m}分${s}秒`;
  if (m) return `${m}分${s}秒`;
  return `${s}秒`;
}
function fmtCompact(seconds) {
  seconds = Math.max(0, Math.round(Number(seconds) || 0));
  const h = Math.floor(seconds / 3600);
  const m = Math.round((seconds % 3600) / 60);
  return h ? `${h}小时${m}分` : `${m}分`;
}
function page(part, title, durationSeconds, cid = null) {
  return { part, title, durationSeconds, bvid: PHYSICS_BVID, cid, url: `${PHYSICS_URL}?p=${part}` };
}

const PHYSICS_CATALOG = [
  page(1, "课程简介", sec(0, 5, 19)),
  page(2, "第1章 质点运动学 核心", sec(0, 35, 15)), page(3, "第1章 拓展", sec(0, 14, 43)), page(4, "第1章 习题", sec(0, 20, 44)),
  page(5, "第2章 质点动力学（上） 核心", sec(0, 32, 40)), page(6, "第2章 拓展", sec(0, 33, 6)), page(7, "第2章 习题", sec(0, 27, 35)),
  page(8, "第3章 质点动力学（下） 核心", sec(0, 45, 3)), page(9, "第3章 拓展", sec(0, 7, 51)), page(10, "第3章 习题", sec(0, 24, 27)),
  page(11, "第4章 刚体定轴转动 核心", sec(0, 41, 51)), page(12, "第4章 拓展", sec(0, 19, 59)), page(13, "第4章 习题", sec(0, 30, 39)),
  page(14, "第5章 机械振动 核心", sec(0, 39, 45)), page(15, "第5章 拓展", sec(0, 12, 8)), page(16, "第5章 习题", sec(0, 24, 0)),
  page(17, "第6章 机械波 核心", sec(0, 53, 47)), page(18, "第6章 拓展", sec(0, 23, 21)), page(19, "第6章 习题", sec(0, 33, 5)),
  page(20, "第7章 静电场 核心", sec(1, 1, 17)), page(21, "第7章 拓展", sec(0, 10, 42)), page(22, "第7章 习题", sec(0, 36, 38)),
  page(23, "第8章 电势 核心", sec(0, 31, 25)), page(24, "第8章 拓展", sec(0, 7, 40)), page(25, "第8章 习题", sec(0, 19, 52)),
  page(26, "第9章 电场中的导体与电介质 核心", sec(0, 50, 10)), page(27, "第9章 拓展", sec(0, 15, 4)), page(28, "第9章 习题", sec(0, 25, 19)),
  page(29, "第10章 稳恒电流的磁场 核心", sec(0, 47, 4)), page(30, "第10章 拓展", sec(0, 15, 52)), page(31, "第10章 习题", sec(0, 25, 41)),
  page(32, "第11章 磁力与磁介质 核心", sec(0, 31, 12)), page(33, "第11章 拓展", sec(0, 4, 18)), page(34, "第11章 习题", sec(0, 11, 38)),
  page(35, "第12章 电磁感应 核心", sec(0, 51, 41)), page(36, "第12章 拓展", sec(0, 7, 7)), page(37, "第12章 习题", sec(0, 22, 35)),
  page(38, "第13章 分子动理论 核心", sec(0, 41, 36)), page(39, "第13章 拓展", sec(0, 9, 53)), page(40, "第13章 习题", sec(0, 19, 28)),
  page(41, "第14章 热力学定律 核心", sec(0, 53, 2)), page(42, "第14章 拓展", sec(0, 7, 9)), page(43, "第14章 习题", sec(0, 20, 53)),
  page(44, "第15章 光的干涉 核心", sec(0, 45, 31)), page(45, "第15章 拓展", sec(0, 19, 51)), page(46, "第15章 习题", sec(0, 24, 15)),
  page(47, "第16章 光的衍射和偏振 核心", sec(0, 27, 50)), page(48, "第16章 拓展", sec(0, 2, 23)), page(49, "第16章 习题", sec(0, 9, 41)),
  page(50, "第17章 狭义相对论 核心", sec(0, 51, 2)), page(51, "第17章 拓展", sec(0, 3, 51)), page(52, "第17章 习题", sec(0, 27, 54)),
  page(53, "第18章 量子物理基础 核心", sec(0, 36, 53)), page(54, "第18章 拓展", sec(0, 8, 37)), page(55, "第18章 习题", sec(0, 12, 46))
];
function catalogParts(...nums) { return nums.map(n => PHYSICS_CATALOG.find(p => p.part === n)).filter(Boolean); }
function makeVideoParts(nums, playbackRate) {
  return catalogParts(...nums).map(p => ({ ...p, playbackRate, completed: false }));
}
function sumWatch(videoParts) {
  return videoParts.reduce((sum, v) => sum + Math.ceil((Number(v.durationSeconds) || 0) / (Number(v.playbackRate) > 0 ? Number(v.playbackRate) : 1)), 0);
}
function task({ id, period, start, end, durationSeconds, title, summary, videoParts = [], practiceSteps = [], focus = [] }) {
  return {
    id, period, start, end, durationSeconds, title, summary, videoParts,
    practiceDurationSeconds: Math.max(0, durationSeconds - sumWatch(videoParts)),
    practiceCompleted: false,
    completed: false,
    practiceSteps,
    focus
  };
}

const DAY_627_TASKS = [
  task({ id: "2026-06-27-task-1", period: "morning", start: "09:00", end: "12:00", durationSeconds: sec(3), title: "第1章质点运动学从零学习", summary: "P2核心 · P3拓展 · P4习题", videoParts: makeVideoParts([2, 3, 4], 1.5), practiceSteps: ["观看核心、拓展和习题", "整理位移、速度、加速度", "总结微分和积分关系", "总结直线和曲线运动", "完成对应习题"], focus: ["位移、速度、加速度", "自然坐标", "相对运动", "运动学两类问题"] }),
  task({ id: "2026-06-27-task-2", period: "afternoon", start: "14:00", end: "16:00", durationSeconds: sec(2), title: "第2章质点动力学（上）从零学习", summary: "P5核心 · P6拓展 · P7习题", videoParts: makeVideoParts([5, 6, 7], 1.5), practiceSteps: ["观看核心、拓展和习题", "整理牛顿三定律", "总结受力图步骤", "练习动力学模型", "完成题目"], focus: ["牛顿三定律", "受力分析", "常见力", "非惯性系和惯性力"] }),
  task({ id: "2026-06-27-task-3", period: "afternoon", start: "16:00", end: "18:00", durationSeconds: sec(2), title: "第3章质点动力学（下）从零学习", summary: "P8核心 · P9拓展 · P10习题", videoParts: makeVideoParts([8, 9, 10], 1.5), practiceSteps: ["观看核心、拓展和习题", "整理动量、动能、功和机械能", "总结守恒条件", "完成典型训练"], focus: ["动量定理", "动能定理", "功能原理", "机械能守恒", "碰撞和质心"] }),
  task({ id: "2026-06-27-task-4", period: "afternoon", start: "18:00", end: "20:00", durationSeconds: sec(2), title: "守恒定律模型与解题步骤训练", summary: "公式整理 · 典型题训练", practiceSteps: ["整理动量定理和动量守恒适用条件", "整理动能定理、功能原理和机械能守恒", "整理角动量定理和角动量守恒", "完成典型题并写出解题步骤"], focus: ["守恒条件判断", "受力/过程图", "方程模板"] }),
  task({ id: "2026-06-27-task-5", period: "night", start: "22:30", end: "次日01:30", durationSeconds: sec(3), title: "第4章刚体定轴转动从零学习", summary: "P11核心 · P12拓展 · P13习题", videoParts: makeVideoParts([11, 12, 13], 1.5), practiceSteps: ["22:30—23:20：观看核心课和习题课", "23:20—00:05：整理转动惯量、力矩、定轴转动定律", "00:05—00:50：完成典型例题和习题", "00:50—01:30：总结转动动能、角动量和守恒模型"], focus: ["转动惯量", "力矩", "定轴转动定律", "转动动能", "角动量守恒"] })
];
const DAY_628_TASKS = [
  task({ id: "2026-06-28-task-1", period: "morning", start: "09:00", end: "10:30", durationSeconds: sec(1, 30), title: "第13章分子动理论从零学习", summary: "P38核心 · P39拓展 · P40习题", videoParts: makeVideoParts([38, 39, 40], 2), practiceSteps: ["09:00—09:48：观看核心、拓展和习题视频", "09:48—10:10：整理状态方程、内能和自由度", "10:10—10:30：练习速率分布和能量均分题目"], focus: ["理想气体物态方程", "内能", "能量均分", "速率分布", "平均自由程"] }),
  task({ id: "2026-06-28-task-2", period: "morning", start: "10:30", end: "12:00", durationSeconds: sec(1, 30), title: "第14章热力学定律从零学习", summary: "P41核心 · P42拓展 · P43习题", videoParts: makeVideoParts([41, 42, 43], 1.5), practiceSteps: ["10:30—11:24：观看课程视频", "11:24—11:45：整理热力学第一定律和常见过程公式", "11:45—12:00：完成熵增加和过程判断题"], focus: ["热力学第一定律", "准静态过程", "循环和卡诺循环", "熵增加原理"] }),
  task({ id: "2026-06-28-task-3", period: "afternoon", start: "14:00", end: "15:30", durationSeconds: sec(1, 30), title: "第7章静电场从零学习", summary: "P20核心 · P21拓展 · P22习题", videoParts: makeVideoParts([20, 21, 22], 2), practiceSteps: ["观看静电场核心、拓展和习题", "整理库仑定律、电场强度和叠加原理", "练习高斯定律和对称性分析"], focus: ["库仑定律", "电场强度", "高斯定律", "环路定理"] }),
  task({ id: "2026-06-28-task-4", period: "afternoon", start: "15:30", end: "16:45", durationSeconds: sec(1, 15), title: "第8章电势从零学习", summary: "P23核心 · P24拓展 · P25习题", videoParts: makeVideoParts([23, 24, 25], 1.5), practiceSteps: ["观看电势核心、拓展和习题", "整理电势、电势差和等势面", "总结电场强度与电势梯度关系"], focus: ["电势计算", "等势面", "电势梯度", "典型积分路径"] }),
  task({ id: "2026-06-28-task-5", period: "afternoon", start: "16:45", end: "18:30", durationSeconds: sec(1, 45), title: "第9章电场中的导体与电介质从零学习", summary: "P26核心 · P27拓展 · P28习题", videoParts: makeVideoParts([26, 27, 28], 1.5), practiceSteps: ["观看导体与电介质核心、拓展和习题", "整理导体静电平衡、电容和电介质极化", "总结D、E、P关系与有介质时的高斯定理"], focus: ["导体静电平衡", "电容器", "电介质极化", "静电场能量"] }),
  task({ id: "2026-06-28-task-6", period: "afternoon", start: "18:30", end: "20:00", durationSeconds: sec(1, 30), title: "电场章节模型与典型题训练", summary: "公式整理 · 典型题训练", practiceSteps: ["18:30—19:00：整理电场强度、电势和高斯定律", "19:00—19:35：完成导体、电容和电介质题型", "19:35—20:00：总结D、E、P关系和静电场能量"], focus: ["选模型", "列方程", "高斯面选择", "介质关系"] }),
  task({ id: "2026-06-28-task-7", period: "night", start: "22:30", end: "次日00:00", durationSeconds: sec(1, 30), title: "六个考试章节公式与模型总整理", summary: "公式总表 · 模型总表", practiceSteps: ["整理第1章公式", "整理第2章公式", "整理刚体定轴转动公式", "整理第13、14章热学公式", "整理静电场、电势、导体与电介质公式"], focus: ["六个考试章节", "公式条件", "题型入口"] }),
  task({ id: "2026-06-28-task-8", period: "night", start: "次日00:00", end: "次日01:30", durationSeconds: sec(1, 30), title: "考前核心题型训练", summary: "六类核心题型", practiceSteps: ["运动学题", "牛顿定律题", "动量和能量守恒题", "刚体定轴转动题", "热力学过程题", "场强、电势和高斯定律题"], focus: ["步骤模板", "易错条件", "最后检查"] })
];

function makeDay(date, show, type, chapter, subtitle, tasks, completedChapters) {
  return {
    date, show, type, cls: "study", chapter, subtitle, lessonNos: [], priority: "S级", plannedHours: 12, fitness: false,
    timeBlocks: [
      { label: "上午 09:00—12:00（3小时）", detail: "大学物理从零学习大块时间" },
      { label: "下午 14:00—20:00（6小时）", detail: "大学物理从零学习大块时间" },
      { label: "晚上 22:30—次日01:30（3小时）", detail: "大学物理从零学习大块时间" }
    ],
    morning: "09:00—12:00 大学物理从零学习", afternoon: "14:00—20:00 大学物理从零学习", night1: "22:30—次日01:30 大学物理从零学习", night2: "不安排额外任务。",
    task: "从零学习大学物理考试范围；观看核心课程，整理公式与模型，完成对应习题，总结解题步骤。",
    practice: "视频课程 + 公式模型整理 + 典型题训练。",
    review: "完成本日任务后总结公式、模型和解题步骤。",
    reviewLabel: "01:30 今日收束", adjust: "两天合计24小时，不把任务延后到6月29日。",
    checks: tasks.map(t => `${t.start}—${t.end} ${t.title}`), checkHours: tasks.map(t => t.durationSeconds / 3600), completedChapters, physicsTasks: tasks,
    courses: tasks.flatMap(t => t.videoParts.map(v => ({ subject: "大学物理", title: `${t.title}｜${v.title}`, url: v.url, durationSeconds: v.durationSeconds, source: "bilibili", part: v.part, cid: v.cid, playbackRate: v.playbackRate })))
  };
}
window.CIRCUIT_PLAN = [
  makeDay("2026-06-27", "6.27", "从零学习第1天", "大学物理：力学与刚体从零学习", "运动学 · 动力学 · 守恒定律 · 刚体定轴转动", DAY_627_TASKS, ["第1章 质点运动学", "第2章 质点动力学（上）", "第3章 质点动力学（下）", "第4章 刚体定轴转动"]),
  makeDay("2026-06-28", "6.28", "从零学习第2天", "大学物理：热学与静电场从零学习", "分子动理论 · 热力学 · 静电场 · 电势 · 导体与电介质", DAY_628_TASKS, ["第13章 分子动理论", "第14章 热力学定律", "第7章 静电场", "第8章 电势", "第9章 电场中的导体与电介质", "总公式与核心题型"])
];

(function () {
  function ready() { return typeof PLAN !== "undefined" && Array.isArray(PLAN) && typeof render === "function" && typeof normalize === "function"; }
  function defaultPhysicsState() {
    return { version: PHYSICS_PLAN_VERSION, selectedDay: todayInRange(), displayMode: "compact", collapsedGroups: {}, tasks: {} };
  }
  function todayInRange() {
    const today = typeof getTodayString === "function" ? getTodayString() : "";
    return ["2026-06-27", "2026-06-28"].includes(today) ? today : (localStorage.getItem("physics_selected_day") || "2026-06-27");
  }
  function loadPhysicsState() {
    let state = null;
    try { state = JSON.parse(localStorage.getItem(PHYSICS_STORAGE_KEY) || "null"); } catch { state = null; }
    if (!state || state.version !== PHYSICS_PLAN_VERSION || typeof state !== "object") state = defaultPhysicsState();
    state.tasks = state.tasks && typeof state.tasks === "object" ? state.tasks : {};
    state.collapsedGroups = state.collapsedGroups && typeof state.collapsedGroups === "object" ? state.collapsedGroups : {};
    state.selectedDay = ["2026-06-27", "2026-06-28"].includes(state.selectedDay) ? state.selectedDay : todayInRange();
    state.displayMode = state.displayMode === "detail" ? "detail" : "compact";
    return state;
  }
  function savePhysicsState(state) {
    localStorage.setItem(PHYSICS_STORAGE_KEY, JSON.stringify(state));
    localStorage.setItem("physics_selected_day", state.selectedDay);
  }
  function taskState(state, task) {
    const current = state.tasks[task.id] || {};
    current.videos = current.videos && typeof current.videos === "object" ? current.videos : {};
    current.practiceCompleted = current.practiceCompleted === true;
    current.completed = current.completed === true;
    return current;
  }
  function isVideoDone(state, task, video) { return taskState(state, task).videos[`P${video.part}`] === true; }
  function isPracticeDone(state, task) { return taskState(state, task).practiceCompleted === true; }
  function isTaskDone(state, task) {
    const ts = taskState(state, task);
    const videosDone = task.videoParts.every(video => ts.videos[`P${video.part}`] === true);
    return ts.completed === true || (videosDone && ts.practiceCompleted === true);
  }
  function nextVideo(state, task) { return task.videoParts.find(video => !isVideoDone(state, task, video)); }
  function videoCounts(state, task) { return { done: task.videoParts.filter(video => isVideoDone(state, task, video)).length, total: task.videoParts.length }; }
  function allTasks() { return PLAN.flatMap(day => day.physicsTasks || []); }
  function calculatePhysicsStatistics(tasks, state) {
    let totalOriginalVideoSeconds = 0, remainingOriginalVideoSeconds = 0;
    let totalWatchSeconds = 0, remainingWatchSeconds = 0;
    let totalPracticeSeconds = 0, remainingPracticeSeconds = 0;
    for (const task of tasks) {
      for (const video of Array.isArray(task.videoParts) ? task.videoParts : []) {
        const duration = Number(video.durationSeconds) || 0;
        const rate = Number(video.playbackRate) > 0 ? Number(video.playbackRate) : 1;
        const watchSeconds = Math.ceil(duration / rate);
        totalOriginalVideoSeconds += duration;
        totalWatchSeconds += watchSeconds;
        if (!isVideoDone(state, task, video)) {
          remainingOriginalVideoSeconds += duration;
          remainingWatchSeconds += watchSeconds;
        }
      }
      const practiceDuration = Number(task.practiceDurationSeconds) || 0;
      totalPracticeSeconds += practiceDuration;
      if (!isPracticeDone(state, task)) remainingPracticeSeconds += practiceDuration;
    }
    const totalPlanSeconds = totalWatchSeconds + totalPracticeSeconds;
    const remainingPlanSeconds = Math.max(0, remainingWatchSeconds + remainingPracticeSeconds);
    const completedPlanSeconds = Math.max(0, totalPlanSeconds - remainingPlanSeconds);
    const completionRate = totalPlanSeconds > 0 ? Math.min(1, Math.max(0, completedPlanSeconds / totalPlanSeconds)) : 0;
    return { totalOriginalVideoSeconds, remainingOriginalVideoSeconds, totalWatchSeconds, remainingWatchSeconds, totalPracticeSeconds, remainingPracticeSeconds, totalPlanSeconds, remainingPlanSeconds, completedPlanSeconds, completionRate };
  }
  window.calculatePhysicsStatistics = calculatePhysicsStatistics;
  function periodLabel(period) {
    if (period === "morning") return "上午09:00—12:00 · 3小时";
    if (period === "afternoon") return "下午14:00—20:00 · 6小时";
    return "晚上22:30—次日01:30 · 3小时";
  }
  function dayTasks(date) { return (PLAN.find(day => day.date === date) || {}).physicsTasks || []; }
  function periodTasks(day, period) { return (day.physicsTasks || []).filter(task => task.period === period); }
  function completedTaskCount(state, day) { return (day.physicsTasks || []).filter(task => isTaskDone(state, task)).length; }
  function safeEsc(value) { return typeof esc === "function" ? esc(value) : String(value ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c])); }
  function injectPhysicsStyles() {
    if (document.getElementById("physicsTaskStyles")) return;
    const style = document.createElement("style");
    style.id = "physicsTaskStyles";
    style.textContent = `
      .physics-shell{max-width:1050px;margin:0 auto}.physics-tabs{display:flex;gap:10px;flex-wrap:wrap;margin:12px 0}.physics-tab{min-height:38px;border-radius:999px;padding:8px 16px;font-weight:950}.physics-tab.active{background:linear-gradient(90deg,var(--blue2),var(--cyan));color:#fff;border-color:transparent}.physics-mode{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:8px 0}.physics-mode button.active{background:#1d4ed8;color:#fff}.physics-summary{background:#f8fbff;border:1px solid #bfdbfe;border-radius:18px;padding:12px 14px;margin:10px 0;box-shadow:0 8px 22px rgba(15,63,134,.05)}.physics-summary h2{margin:0 0 6px;font-size:18px;color:#0f3f86}.physics-summary-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.physics-stat{background:#fff;border:1px solid #dbeafe;border-radius:13px;padding:8px;font-size:12px;color:#475569}.physics-stat b{display:block;color:#0f3f86;font-size:14px}.physics-actions-top{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}.physics-period{border:1px solid #dbeafe;border-radius:16px;background:#f8fbff;margin-top:10px;overflow:hidden}.physics-period-title{width:100%;border:0;background:#eff6ff;color:#0f3f86;font-weight:950;display:flex;justify-content:space-between;gap:10px;padding:10px 12px;cursor:pointer}.physics-period.done .physics-period-title{background:#ecfdf5;color:#047857}.physics-period-body{display:grid;gap:8px;padding:10px}.physics-period.collapsed .physics-period-body{display:none}.physics-task-card{background:#fff;border:1px solid #dbeafe;border-radius:14px;padding:10px 11px;min-height:88px;box-shadow:0 6px 14px rgba(15,63,134,.04)}.physics-task-card.current{border-left:5px solid #2563eb}.physics-task-card.next{border-left:5px solid #06b6d4}.physics-task-card.done{background:#f8fffb;border-color:#bbf7d0}.physics-task-top{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:10px;align-items:start}.physics-time{font-weight:950;color:#075ac2;white-space:nowrap}.physics-title{font-weight:950;color:#102a56;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.physics-duration{font-size:12px;color:#475569;white-space:nowrap}.physics-brief{display:flex;gap:8px;align-items:center;min-width:0;margin-top:7px;color:#475569;font-size:13px}.physics-brief span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.physics-status{font-weight:900;color:#1d4ed8}.physics-task-actions{display:flex;gap:7px;flex-wrap:wrap;margin-top:9px}.physics-task-actions button{min-height:32px;border-radius:10px;padding:6px 10px;font-size:12px}.physics-drawer-backdrop{position:fixed;inset:0;background:rgba(15,23,42,.32);z-index:80;display:none}.physics-drawer-backdrop.open{display:block}.physics-drawer{position:fixed;right:0;top:0;height:100vh;width:min(520px,92vw);background:#fff;z-index:81;box-shadow:-20px 0 40px rgba(15,23,42,.18);transform:translateX(110%);transition:.2s transform;overflow:auto;padding:18px}.physics-drawer.open{transform:translateX(0)}.physics-drawer-head{display:flex;justify-content:space-between;gap:12px;align-items:start;border-bottom:1px solid #dbeafe;padding-bottom:10px;margin-bottom:10px}.physics-video-row{border:1px solid #dbeafe;border-radius:13px;padding:9px;margin-top:8px;display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:8px;align-items:center}.physics-video-row.done{background:#f0fdf4;border-color:#bbf7d0}.physics-video-title{font-weight:900;color:#0f3f86}.physics-video-meta{font-size:12px;color:#64748b;margin-top:2px}.physics-steps{background:#fffaf0;border:1px solid #fdecc8;border-radius:13px;padding:10px;margin-top:10px}.physics-steps li{margin:4px 0}.physics-hidden-day{display:none!important}.physics-active-day{display:block!important}.physics-active-day .day-date-panel,.physics-active-day .day-check-panel,.physics-active-day .fitness-card,.physics-active-day .section-title:nth-of-type(1),.physics-active-day .task,.physics-active-day .adjust{display:none!important}.physics-active-day .day-main{grid-column:1/-1}.physics-active-day .time-grid{display:block}.physics-active-day .day-main>h2{margin-bottom:0}.physics-active-day .day-main>h2::after{content:attr(data-subtitle);display:block;font-size:13px;color:#64748b;margin-top:4px;font-weight:700}.physics-zero-hide{display:none!important}
      @media(max-width:760px){.physics-summary-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.physics-task-top{grid-template-columns:1fr}.physics-time,.physics-duration{white-space:normal}.physics-brief{white-space:nowrap;overflow:hidden}.physics-task-actions{display:grid;grid-template-columns:1fr 1fr}.physics-task-actions button{width:100%}.physics-drawer{width:100vw}.physics-video-row{grid-template-columns:1fr}.physics-active-day{border-radius:0}.physics-task-card{min-height:100px}.physics-summary{padding:10px}}
    `;
    document.head.appendChild(style);
  }
  function currentTaskMeta(task) {
    const now = new Date();
    const [datePart] = task.id.split("-task-");
    const base = new Date(`${datePart}T00:00:00`);
    const parse = value => {
      const nextDay = value.startsWith("次日");
      const time = value.replace("次日", "");
      const [h, m] = time.split(":").map(Number);
      const d = new Date(base);
      if (nextDay) d.setDate(d.getDate() + 1);
      d.setHours(h, m, 0, 0);
      return d;
    };
    const start = parse(task.start);
    const end = parse(task.end);
    return { current: now >= start && now < end, future: now < start, past: now >= end };
  }
  function taskStatusText(state, task) {
    const counts = videoCounts(state, task);
    if (isTaskDone(state, task)) return "任务已完成 ✓";
    if (counts.total && counts.done === counts.total && !isPracticeDone(state, task)) return `视频${counts.done}/${counts.total} · 练习未完成`;
    if (counts.total) return `视频${counts.done}/${counts.total}`;
    return isPracticeDone(state, task) ? "练习已完成 ✓" : "练习未完成";
  }
  function continueLabel(state, task) {
    if (!task.videoParts.length) return isTaskDone(state, task) ? "已完成 ✓" : (isPracticeDone(state, task) ? "继续任务" : "开始任务");
    const next = nextVideo(state, task);
    if (!next) return "视频已全部完成 ✓";
    return task.videoParts.every(video => !isVideoDone(state, task, video)) ? `从P${next.part}开始` : `继续P${next.part}`;
  }
  function taskCard(day, task, index, state) {
    const counts = videoCounts(state, task);
    const next = nextVideo(state, task);
    const meta = currentTaskMeta(task);
    const classes = ["physics-task-card", isTaskDone(state, task) ? "done" : "", meta.current ? "current" : "", !meta.current && meta.future ? "next" : ""].filter(Boolean).join(" ");
    const videoSummary = counts.total ? `${task.summary} · ${counts.done}/${counts.total}` : task.summary;
    return `<article class="${classes}" data-physics-task-card="${safeEsc(task.id)}"><div class="physics-task-top"><div class="physics-time">${safeEsc(task.start)}—${safeEsc(task.end)}</div><div><div class="physics-title">${safeEsc(task.title)}</div><div class="physics-brief"><span>${safeEsc(videoSummary)}</span><span class="physics-status">${safeEsc(taskStatusText(state, task))}</span></div></div><div class="physics-duration">${fmtCompact(task.durationSeconds)}</div></div><div class="physics-task-actions">${next ? `<button type="button" class="primary" data-physics-continue="${safeEsc(task.id)}">${safeEsc(continueLabel(state, task))}</button>` : `<button type="button" disabled>${safeEsc(continueLabel(state, task))}</button>`}<button type="button" data-physics-detail="${safeEsc(task.id)}">详情</button><button type="button" data-physics-practice="${safeEsc(task.id)}">${isPracticeDone(state, task) ? "取消练习" : "练习完成"}</button><button type="button" data-physics-task-done="${safeEsc(task.id)}">${isTaskDone(state, task) ? "取消完成" : "标记完成"}</button><button type="button" data-edit-task="${day.date}|study|${index}">编辑</button><button type="button" data-delete-task="${day.date}|study|${index}">删除</button></div></article>`;
  }
  function groupDefaultCollapsed(state, day, period) {
    const key = `${day.date}-${period}`;
    if (typeof state.collapsedGroups[key] === "boolean") return state.collapsedGroups[key];
    const tasks = periodTasks(day, period);
    return tasks.length > 0 && tasks.every(task => isTaskDone(state, task)) && !tasks.some(task => currentTaskMeta(task).current);
  }
  function physicsTimeGridHtml(day) {
    if (!Array.isArray(day.physicsTasks)) return timeGridHtml(day);
    const state = loadPhysicsState();
    return `<div class="physics-shell">${["morning", "afternoon", "night"].map(period => {
      const tasks = periodTasks(day, period);
      const done = tasks.length && tasks.every(task => isTaskDone(state, task));
      const collapsed = groupDefaultCollapsed(state, day, period);
      return `<section class="physics-period ${done ? "done" : ""} ${collapsed ? "collapsed" : ""}" data-period-group="${day.date}-${period}"><button type="button" class="physics-period-title" data-toggle-period="${day.date}-${period}"><span>${done ? "✓ " : "▼ "}${periodLabel(period)}</span><span>${done ? "已完成" : `${tasks.length}项`}</span></button><div class="physics-period-body">${tasks.map((t, i) => taskCard(day, t, day.physicsTasks.indexOf(t), state)).join("")}</div></section>`;
    }).join("")}</div>`;
  }
  function renderTabsAndSummary() {
    const state = loadPhysicsState();
    const selected = state.selectedDay;
    const selectedDay = PLAN.find(day => day.date === selected) || PLAN[0];
    const dayStats = calculatePhysicsStatistics(dayTasks(selected), state);
    const allStats = calculatePhysicsStatistics(allTasks(), state);
    const tabHtml = `<div class="physics-tabs" id="physicsDateTabs">${PLAN.map(day => `<button type="button" class="physics-tab ${day.date === selected ? "active" : ""}" data-physics-tab="${day.date}">${day.show} ${completedTaskCount(state, day)}/${(day.physicsTasks || []).length}</button>`).join("")}</div>`;
    const summaryHtml = `<section class="physics-summary" id="physicsSummary"><h2>${safeEsc(selectedDay.show)} · ${safeEsc(selectedDay.chapter)} <span style="float:right">${Math.round(allStats.completionRate * 100)}%</span></h2><div class="physics-summary-grid"><div class="physics-stat"><b>${completedTaskCount(state, selectedDay)}/${selectedDay.physicsTasks.length}项完成</b>今日进度</div><div class="physics-stat"><b>${fmt(dayStats.remainingWatchSeconds)}</b>网课剩余（倍速后）</div><div class="physics-stat"><b>${fmt(dayStats.remainingPracticeSeconds)}</b>整理/做题剩余</div><div class="physics-stat"><b>${fmt(allStats.remainingPlanSeconds)}</b>两天总剩余</div></div><div class="physics-actions-top"><button type="button" data-locate-physics-current>定位当前任务</button><button type="button" data-physics-complete-day="${selected}">今日全部打卡</button><button type="button" data-physics-clear-day="${selected}">清空当天打卡</button><button type="button" data-export>导出打卡数据</button><button type="button" onclick="window.print()">打印/导出PDF</button></div></section><div class="physics-mode" id="physicsMode"><span>显示模式：</span><button type="button" class="${state.displayMode === "compact" ? "active" : ""}" data-physics-mode="compact">紧凑</button><button type="button" class="${state.displayMode === "detail" ? "active" : ""}" data-physics-mode="detail">详细</button><span>总可用时间：24小时｜6.27：12小时｜6.28：12小时</span></div>`;
    const existingTabs = document.getElementById("physicsDateTabs");
    if (existingTabs) existingTabs.outerHTML = tabHtml; else if (els.dayList) els.dayList.insertAdjacentHTML("beforebegin", tabHtml);
    const existingSummary = document.getElementById("physicsSummary");
    if (existingSummary) existingSummary.outerHTML = summaryHtml.match(/<section[\s\S]*?<\/section>/)[0]; else document.getElementById("physicsDateTabs").insertAdjacentHTML("afterend", summaryHtml.match(/<section[\s\S]*?<\/section>/)[0]);
    const existingMode = document.getElementById("physicsMode");
    const modeHtml = summaryHtml.match(/<div class="physics-mode"[\s\S]*?<\/div>$/)[0];
    if (existingMode) existingMode.outerHTML = modeHtml; else document.getElementById("physicsSummary").insertAdjacentHTML("afterend", modeHtml);
    PLAN.forEach(day => {
      const card = document.getElementById("day-" + day.date);
      if (!card) return;
      if (day.date !== selected) {
        card.remove();
        return;
      }
      card.classList.add("physics-active-day");
      const h2 = card.querySelector(".day-main>h2");
      if (h2) h2.setAttribute("data-subtitle", day.subtitle || "");
    });
    if (els.progressLabel) els.progressLabel.textContent = `${Math.round(allStats.completionRate * 100)}%`;
    if (els.progressBar) els.progressBar.style.width = `${Math.round(allStats.completionRate * 100)}%`;
    if (els.leftVideo) els.leftVideo.textContent = fmt(allStats.remainingWatchSeconds);
  }
  function openDrawer(taskId) {
    const state = loadPhysicsState();
    const task = allTasks().find(t => t.id === taskId);
    if (!task) return;
    const stats = calculatePhysicsStatistics([task], state);
    const counts = videoCounts(state, task);
    let backdrop = document.getElementById("physicsDrawerBackdrop");
    let drawer = document.getElementById("physicsDrawer");
    if (!backdrop) { backdrop = document.createElement("div"); backdrop.id = "physicsDrawerBackdrop"; backdrop.className = "physics-drawer-backdrop"; document.body.appendChild(backdrop); }
    if (!drawer) { drawer = document.createElement("aside"); drawer.id = "physicsDrawer"; drawer.className = "physics-drawer"; document.body.appendChild(drawer); }
    drawer.innerHTML = `<div class="physics-drawer-head"><div><h2>${safeEsc(task.title)}</h2><div>${safeEsc(task.start)}—${safeEsc(task.end)}｜任务总时长 ${fmt(task.durationSeconds)}</div></div><button type="button" data-close-physics-drawer>关闭</button></div><div class="physics-stat"><b>课程视频 ${counts.done}/${counts.total}完成</b>${counts.total ? `原视频剩余 ${fmt(stats.remainingOriginalVideoSeconds)}｜倍速后剩余 ${fmt(stats.remainingWatchSeconds)}` : "无视频任务，只统计整理/做题时间"}</div>${task.videoParts.length ? task.videoParts.map(video => { const done = isVideoDone(state, task, video); const rate = Number(video.playbackRate) > 0 ? Number(video.playbackRate) : 1; return `<div class="physics-video-row ${done ? "done" : ""}"><input type="checkbox" data-physics-video="${safeEsc(task.id)}|${video.part}" ${done ? "checked" : ""}><div><div class="physics-video-title">P${video.part} ${safeEsc(video.title)}</div><div class="physics-video-meta">真实时长 ${fmt(video.durationSeconds)} · ${rate}倍约${fmt(Math.ceil(video.durationSeconds / rate))} · cid ${video.cid || "接口读取中"}</div></div><a class="button" href="${safeEsc(video.url)}" target="_blank" rel="noopener noreferrer">打开P${video.part}</a></div>`; }).join("") : ""}<div class="physics-steps"><b>整理和练习：${fmt(task.practiceDurationSeconds)}｜${isPracticeDone(state, task) ? "已完成" : "未完成"}</b><ol>${task.practiceSteps.map(step => `<li>${safeEsc(step)}</li>`).join("")}</ol><b>学习重点</b><ul>${task.focus.map(item => `<li>${safeEsc(item)}</li>`).join("")}</ul></div><div class="physics-task-actions"><button type="button" data-physics-practice="${safeEsc(task.id)}">${isPracticeDone(state, task) ? "取消练习" : "练习完成"}</button><button type="button" data-physics-task-done="${safeEsc(task.id)}">${isTaskDone(state, task) ? "取消完成" : "标记完成"}</button></div>`;
    backdrop.classList.add("open"); drawer.classList.add("open");
  }
  function closeDrawer() { document.getElementById("physicsDrawerBackdrop")?.classList.remove("open"); document.getElementById("physicsDrawer")?.classList.remove("open"); }
  function updateBaseChecksFromPhysics(state) {
    const data = normalize(load());
    data.physicsPlanVersion = PHYSICS_PLAN_VERSION;
    for (const day of PLAN) {
      (day.physicsTasks || []).forEach((task, index) => { data.checks[taskKey(day.date, index)] = isTaskDone(state, task); });
    }
    save(data);
  }
  function mutateTask(taskId, updater) {
    const state = loadPhysicsState();
    const task = allTasks().find(t => t.id === taskId);
    if (!task) return;
    const current = taskState(state, task);
    state.tasks[task.id] = current;
    updater(current, task, state);
    savePhysicsState(state);
    updateBaseChecksFromPhysics(state);
    render();
    if (document.getElementById("physicsDrawer")?.classList.contains("open")) openDrawer(taskId);
  }
  function markWholeTask(taskId) {
    mutateTask(taskId, (current, task) => {
      if (isTaskDone(loadPhysicsState(), task) || current.completed) {
        current.completed = false;
        current.practiceCompleted = false;
        return;
      }
      const undoneVideos = task.videoParts.filter(video => current.videos[`P${video.part}`] !== true);
      if (undoneVideos.length) {
        const markAll = confirm(`该任务还有${undoneVideos.length}个视频未完成。\n点击“确定”将任务全部标记完成；点击“取消”仅完成整理/做题。`);
        current.practiceCompleted = true;
        if (markAll) {
          undoneVideos.forEach(video => { current.videos[`P${video.part}`] = true; });
          current.completed = true;
        }
      } else {
        current.practiceCompleted = true;
        current.completed = true;
      }
    });
  }
  function completeDay(date) {
    const state = loadPhysicsState();
    for (const task of dayTasks(date)) {
      const current = taskState(state, task);
      task.videoParts.forEach(video => { current.videos[`P${video.part}`] = true; });
      current.practiceCompleted = true;
      current.completed = true;
      state.tasks[task.id] = current;
    }
    savePhysicsState(state); updateBaseChecksFromPhysics(state); render();
  }
  function clearDay(date) {
    if (!confirm("确认清空当天大学物理打卡？不会删除其他科目历史数据。")) return;
    const state = loadPhysicsState();
    for (const task of dayTasks(date)) delete state.tasks[task.id];
    savePhysicsState(state); updateBaseChecksFromPhysics(state); render();
  }
  function bindPhysicsEventsOnce() {
    if (window.__physicsEventsBound) return;
    window.__physicsEventsBound = true;
    document.addEventListener("click", event => {
      const tab = event.target.closest("[data-physics-tab]");
      if (tab) { const state = loadPhysicsState(); state.selectedDay = tab.dataset.physicsTab; savePhysicsState(state); render(); return; }
      const mode = event.target.closest("[data-physics-mode]");
      if (mode) { const state = loadPhysicsState(); state.displayMode = mode.dataset.physicsMode; savePhysicsState(state); render(); return; }
      const toggle = event.target.closest("[data-toggle-period]");
      if (toggle) { const state = loadPhysicsState(); const key = toggle.dataset.togglePeriod; state.collapsedGroups[key] = !state.collapsedGroups[key]; savePhysicsState(state); render(); return; }
      const detail = event.target.closest("[data-physics-detail]");
      if (detail) { openDrawer(detail.dataset.physicsDetail); return; }
      const close = event.target.closest("[data-close-physics-drawer]") || event.target.closest("#physicsDrawerBackdrop");
      if (close) { closeDrawer(); return; }
      const cont = event.target.closest("[data-physics-continue]");
      if (cont) { const state = loadPhysicsState(); const task = allTasks().find(t => t.id === cont.dataset.physicsContinue); const video = task && nextVideo(state, task); if (video) window.open(video.url, "_blank", "noopener,noreferrer"); return; }
      const videoCheck = event.target.closest("[data-physics-video]");
      if (videoCheck) { const [taskId, part] = videoCheck.dataset.physicsVideo.split("|"); mutateTask(taskId, current => { current.videos[`P${part}`] = videoCheck.checked; current.completed = false; }); return; }
      const practice = event.target.closest("[data-physics-practice]");
      if (practice) { mutateTask(practice.dataset.physicsPractice, current => { current.practiceCompleted = !current.practiceCompleted; if (!current.practiceCompleted) current.completed = false; }); return; }
      const done = event.target.closest("[data-physics-task-done]");
      if (done) { markWholeTask(done.dataset.physicsTaskDone); return; }
      const complete = event.target.closest("[data-physics-complete-day]");
      if (complete) { completeDay(complete.dataset.physicsCompleteDay); return; }
      const clear = event.target.closest("[data-physics-clear-day]");
      if (clear) { clearDay(clear.dataset.physicsClearDay); return; }
      const exportBtn = event.target.closest("[data-export]");
      if (exportBtn) { exportData(); return; }
      const locate = event.target.closest("[data-locate-physics-current]");
      if (locate) { const card = document.querySelector(".physics-task-card.current") || document.querySelector(".physics-task-card.next"); if (card) card.scrollIntoView({ behavior: "smooth", block: "center" }); return; }
    });
  }
  function resetOldPhysicsState() {
    const data = normalize(load());
    if (data.physicsPlanVersion === PHYSICS_PLAN_VERSION) return;
    ["2026-06-27", "2026-06-28"].forEach(date => Object.keys(data.checks || {}).forEach(k => { if (k.startsWith(date + "-")) delete data.checks[k]; }));
    Object.keys(data.videos || {}).forEach(k => { if (k.includes("2026-06-27") || k.includes("2026-06-28") || k.includes("physics")) delete data.videos[k]; });
    data.physicsPlanVersion = PHYSICS_PLAN_VERSION;
    save(data);
  }
  function apply() {
    if (!ready()) return false;
    document.title = "6.27—6.28 大学物理从零学习计划";
    const h1 = document.querySelector(".hero h1"); if (h1) h1.textContent = "6.27—6.28 大学物理从零学习计划";
    const hero = document.querySelector(".hero p"); if (hero) hero.textContent = "使用新网课《大学物理速成（非物理系）》BV1G4wqz7EpN；两天24小时完成考试范围内核心课程、公式模型和题型训练。";
    const chips = document.querySelector(".chips"); if (chips) chips.innerHTML = '<span class="chip">剩余学习天数：2天</span><span class="chip">总可用时间：24小时</span><span class="chip">6.27：12小时</span><span class="chip">6.28：12小时</span>';
    PLAN.splice(0, PLAN.length, ...window.CIRCUIT_PLAN);
    resetOldPhysicsState();
    if (!window.__newPhysicsPlanApplied) {
      window.__newPhysicsPlanApplied = true;
      injectPhysicsStyles();
      timeGridHtml = physicsTimeGridHtml;
      const baseRender = render;
      render = function () { baseRender(); renderTabsAndSummary(); };
      getDayDurationText = function (day) { const state = loadPhysicsState(); const stats = calculatePhysicsStatistics(day.physicsTasks || [], state); return `计划${day.plannedHours}小时｜剩余${fmt(stats.remainingPlanSeconds)}`; };
      getTotalRealSeconds = function () { return calculatePhysicsStatistics(allTasks(), loadPhysicsState()).totalWatchSeconds; };
      getRemainingRealSeconds = function () { return calculatePhysicsStatistics(allTasks(), loadPhysicsState()).remainingWatchSeconds; };
      refreshRealDurationTexts = function () { document.querySelectorAll("[data-day-duration]").forEach(el => { const day = PLAN.find(x => x.date === el.getAttribute("data-day-duration")); if (day) el.textContent = getDayDurationText(day); }); if (els.leftVideo) els.leftVideo.textContent = fmt(getRemainingRealSeconds()); };
      courseHtml = function () { return ""; };
      checkToday = function () {
        const state = loadPhysicsState();
        completeDay(state.selectedDay);
      };
      resetAll = function () {
        if (!confirm("确定清空大学物理两天计划的打卡记录吗？不会删除其他科目历史数据。")) return;
        localStorage.removeItem(PHYSICS_STORAGE_KEY);
        const data = normalize(load());
        ["2026-06-27", "2026-06-28"].forEach(date => Object.keys(data.checks || {}).forEach(key => { if (key.startsWith(date + "-")) delete data.checks[key]; }));
        data.physicsPlanVersion = PHYSICS_PLAN_VERSION;
        save(data);
        render();
      };
      bindPhysicsEventsOnce();
      fetch("/api/physics/pages").then(r => r.ok ? r.json() : null).then(d => {
        if (!d || !d.success || !Array.isArray(d.pages)) return;
        d.pages.forEach(apiPage => { const local = PHYSICS_CATALOG.find(p => p.part === Number(apiPage.page)); if (local) { local.title = apiPage.part || local.title; local.durationSeconds = Number(apiPage.duration || local.durationSeconds); local.cid = apiPage.cid || local.cid; local.url = `${PHYSICS_URL}?p=${local.part}`; } });
        render();
      }).catch(() => {});
    }
    render();
    return true;
  }
  let tries = 0;
  function boot() { if (apply()) return; tries += 1; if (tries < 40) setTimeout(boot, 50); else console.warn("大学物理新网课计划未能加载：页面基础脚本尚未就绪"); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
