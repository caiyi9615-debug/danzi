// 2026 大学物理考试大纲复习计划覆盖脚本
// 覆盖旧计划：只展示大学物理大纲章节；按总计48小时复习预算排课；保留原页面结构、打卡方式和保存逻辑。

(function () {
  const PHYSICS_RESET_VERSION = "physics-zero-start-2026-06-27-v3-48-hour-budget";
  const PHYSICS_TOTAL_REVIEW_HOURS = 48;
  const DAILY_REVIEW_SECONDS = 4 * 60 * 60;
  const DAILY_REVIEW_BUDGET_SECONDS = {
    "2026-06-27": 12 * 60 * 60,
    "2026-06-28": 12 * 60 * 60
  };
  const PHYSICS_URL = "https://www.bilibili.com/video/BV1Rb411u7uk";
  const PHYSICS_DATES = [
    "2026-06-27","2026-06-28","2026-06-29","2026-06-30","2026-07-01","2026-07-02","2026-07-03","2026-07-04"
  ];

  function escText(value) { return String(value == null ? "" : value); }
  function formatSeconds(sec) {
    sec = Number(sec || 0);
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = Math.floor(sec % 60);
    if (h) return `${h}小时${m}分${s}秒`;
    return `${m}分${s}秒`;
  }
  function physicsCourse(options) {
    return {
      subject: "大学物理",
      title: options.title,
      chapter: options.chapter,
      knowledge: options.knowledge,
      durationSeconds: options.durationSeconds,
      actualSeconds: options.actualSeconds,
      practice: options.practice,
      url: options.url || PHYSICS_URL,
      source: "大学物理网课",
      optional: false
    };
  }
  function noteCourse(title, practice, actualMinutes) {
    return {
      subject: "大学物理",
      title,
      chapter: "大学物理",
      knowledge: title,
      durationSeconds: 0,
      actualSeconds: actualMinutes * 60,
      practice,
      source: "教材/笔记/基础练习",
      optional: false
    };
  }
  function day(options) {
    return {
      date: options.date,
      show: options.show,
      type: options.type || "学习日",
      cls: options.cls || "study",
      chapter: options.chapter,
      lessonNos: [],
      priority: options.priority || "S级",
      minutes: options.minutes,
      morning: options.morning,
      afternoon: options.afternoon,
      night1: options.night1,
      night2: options.night2,
      review: options.review,
      task: options.task,
      practice: options.practice,
      adjust: options.adjust || "只按大纲推进；第4章不安排；第3章只保留刚体定轴转动相关内容；不会的基础概念优先补会，不为赶进度跳课。",
      checks: options.checks || ["网课完成", "教材例题完成", "基础练习完成", "公式整理完成", "今日复盘完成"],
      courses: options.courses
    };
  }

  const PHYSICS_PLAN = [
    day({
      date: "2026-06-27", show: "6.27", minutes: 720,
      chapter: "大学物理从零开始：第1章 运动和力（上）",
      morning: "9:00—12:00 从大学物理网课第一节相关内容开始，连续大块时间学习第1章基础：矢量、位移、速度、加速度。",
      afternoon: "14:00—20:00 继续运动学微分/积分关系、直线运动、曲线运动、自然坐标系与牛顿定律；每看完一段立即整理公式并做基础例题。",
      night1: "22:30—次日1:30 做教材第1章对应基础例题、公式默写和当天复盘，不做综合题、真题或错题大整理。",
      night2: "复盘矢量、运动学公式、牛顿定律最基础概念。",
      review: "能说清位移、速度、加速度的微分/积分关系，能完成基础运动学例题。",
      task: "第1章运动和力：矢量标积/矢积、运动学基本量、微分积分关系、牛顿定律入门。",
      practice: "教材第1章基础例题3—5题；运动学公式整理；位移速度加速度关系基础题2—3题。",
      courses: [
        physicsCourse({chapter:"第1章 运动和力", knowledge:"矢量标积和矢积；质点运动学基础", title:"第1章 运动和力｜课时11 质点运动学", durationSeconds:1732, actualSeconds:45*60, practice:"整理矢量、位移、速度、加速度定义；完成基础概念题2—3题。"}),
        physicsCourse({chapter:"第1章 运动和力", knowledge:"位移、速度、加速度之间的微分关系和积分关系", title:"第1章 运动和力｜课时12 运动建模及解方程", durationSeconds:1420, actualSeconds:40*60, practice:"由加速度求速度、由速度求位移基础题2—3题。"}),
        physicsCourse({chapter:"第1章 运动和力", knowledge:"牛顿三大定律和常见力基础", title:"第1章 运动和力｜课时13 牛顿定律和常见力", durationSeconds:1050, actualSeconds:35*60, practice:"简单受力分析例题2题，不做综合动力学大题。"}),
        noteCourse("第1章公式整理与教材基础练习", "整理运动学公式15分钟；完成教材基础例题3—5题。", 40),
        noteCourse("9:00—12:00阶段整理", "补充矢量、运动学概念笔记，整理网课例题。", 60),
        noteCourse("14:00—20:00教材例题与基础练习", "完成直线/曲线运动、自然坐标系、牛顿定律基础题，不做综合卷。", 270),
        noteCourse("22:30—1:30公式默写与复盘", "默写第1章公式，标记仍不理解的概念，准备6月28日接续。", 110)
      ]
    }),
    day({
      date: "2026-06-28", show: "6.28", minutes: 720,
      chapter: "大学物理从零开始：第1章收尾 + 第2章动量定理起步",
      morning: "9:00—12:00 先20—30分钟回顾6月27日公式和例题，再继续第1章曲线运动、自然坐标系、相对运动。",
      afternoon: "14:00—20:00 第1章基础稳定后进入第2章，必须从动量定理、冲量、动量守恒开始，再推进动能定理和机械能守恒基础。",
      night1: "22:30—次日1:30 完成第1章和第2章对应基础题、公式整理与复盘，不安排模拟卷。",
      night2: "整理动量、冲量、动量守恒条件。",
      review: "确认6月28日自然衔接6月27日；没有跳到机械能守恒或角动量。",
      task: "第1章收尾；第2章从动量定理、动量守恒定律开始。",
      practice: "回顾题2—3题；曲线运动/牛顿定律基础题2—3题；动量定理基础例题2—3题。",
      courses: [
        noteCourse("6月27日内容回顾", "回顾矢量、运动学微积分关系、牛顿三定律和常见力。", 25),
        physicsCourse({chapter:"第1章 运动和力", knowledge:"曲线运动、自然坐标系、相对运动、牛顿定律应用", title:"第1章 运动和力｜课时13 牛顿定律和常见力（衔接复听重点段落）", durationSeconds:1050, actualSeconds:30*60, practice:"曲线运动/自然坐标系基础题2题；简单受力分析2题。"}),
        physicsCourse({chapter:"第2章 运动的守恒量和守恒定律", knowledge:"动量定理、冲量、动量守恒定律", title:"第2章 运动的守恒量和守恒定律｜课时15 动量和动量守恒", durationSeconds:2004, actualSeconds:50*60, practice:"整理动量、冲量、动量定理、动量守恒条件；基础例题2—3题。"}),
        physicsCourse({chapter:"第2章 运动的守恒量和守恒定律", knowledge:"转动惯量、力矩基础概念，为后续刚体定轴转动做铺垫", title:"第2章 运动的守恒量和守恒定律｜课时14 转动惯量和力矩及其作用", durationSeconds:1828, actualSeconds:45*60, practice:"只整理转动惯量、力矩基础概念；基础概念题2题。"}),
        noteCourse("14:00—20:00第2章基础例题", "整理动量定理、动能定理、功能原理和机械能守恒条件；完成基础题6—8题。", 240),
        noteCourse("22:30—1:30两章公式复盘", "按第1章到第2章顺序默写公式、回看典型例题、补齐薄弱概念。", 150)
      ]
    }),
    day({date:"2026-06-29", show:"6.29", minutes:230, chapter:"第2章 运动的守恒量和守恒定律（完整推进）", morning:"按大纲顺序学习动量定理、动量守恒后，进入动能定理。", afternoon:"学习功能原理和机械能守恒定律，只做对应典型例题。", night1:"完成动量、动能、机械能守恒基础题。", night2:"整理守恒条件和适用场景。", review:"能区分动量守恒和机械能守恒条件。", task:"第2章：动量定理、动量守恒、动能定理、功能原理、机械能守恒。", practice:"动量定理2题；动能定理2题；机械能守恒2题。", courses:[physicsCourse({chapter:"第2章 运动的守恒量和守恒定律", knowledge:"动能定理、功能原理、机械能守恒", title:"第2章 运动的守恒量和守恒定律｜动能定理与机械能守恒对应课时", durationSeconds:0, actualSeconds:60*60, practice:"动能定理和机械能守恒基础例题各2题。"}), noteCourse("第2章动量—机械能公式整理", "列出动量、冲量、功、动能、机械能守恒条件。", 50), noteCourse("第2章基础练习", "只做当天网课对应基础题，不做套卷。", 60), noteCourse("第2章错因轻量标注", "记录不会选守恒定律的题型。", 60)]}),
    day({date:"2026-06-30", show:"6.30", minutes:220, chapter:"第2章角动量收尾 + 第3章刚体定轴转动入门", morning:"先学习角动量定理、角动量守恒定律，完成第2章大纲内容。", afternoon:"进入第3章刚体部分，只学转动惯量和定轴转动定律。", night1:"做角动量、转动惯量、定轴转动基础题。", night2:"整理平动/转动类比表。", review:"不扩展第3章流体力学。", task:"第2章角动量；第3章刚体：转动惯量、定轴转动定律。", practice:"角动量基础题2题；转动惯量和转动定律基础题3题。", courses:[physicsCourse({chapter:"第2章 运动的守恒量和守恒定律", knowledge:"角动量定理、角动量守恒定律", title:"第2章 运动的守恒量和守恒定律｜角动量定理与角动量守恒对应课时", durationSeconds:0, actualSeconds:55*60, practice:"角动量定理/守恒基础题2—3题。"}), physicsCourse({chapter:"第3章 刚体和流体运动（仅刚体）", knowledge:"转动惯量、定轴转动定律及应用", title:"第3章 刚体和流体运动｜刚体定轴转动基础对应课时", durationSeconds:0, actualSeconds:55*60, practice:"转动惯量和转动定律基础例题3题。"}), noteCourse("平动—转动公式对照", "整理F=ma与M=Jβ、动量与角动量等对应关系。", 50), noteCourse("第3章刚体基础练习", "只做定轴转动基础题，不做流体题。", 60)]}),
    day({date:"2026-07-01", show:"7.1", minutes:210, chapter:"第3章刚体定轴转动（大纲内收尾）", morning:"学习定轴转动的动能定理。", afternoon:"学习定轴转动刚体的角动量和角动量守恒。", night1:"完成刚体定轴转动对应基础题。", night2:"整理第3章刚体大纲公式。", review:"确认第3章没有安排流体力学内容。", task:"第3章刚体：定轴转动动能定理、刚体角动量、角动量守恒。", practice:"转动动能定理2题；刚体角动量守恒2题。", courses:[physicsCourse({chapter:"第3章 刚体和流体运动（仅刚体）", knowledge:"定轴转动动能定理、刚体角动量、角动量守恒", title:"第3章 刚体和流体运动｜定轴转动动能与角动量对应课时", durationSeconds:0, actualSeconds:65*60, practice:"定轴转动动能和角动量守恒基础例题各2题。"}), noteCourse("第3章刚体公式整理", "整理转动惯量、力矩、转动定律、转动动能、角动量守恒。", 45), noteCourse("第3章刚体基础练习", "完成大纲内刚体题4—6题。", 70), noteCourse("第1—3章衔接复盘", "只复盘公式，不做套卷。", 30)]}),
    day({date:"2026-07-02", show:"7.2", minutes:190, chapter:"第5章 气体动理论", morning:"跳过大纲未列出的第4章，直接进入第5章气体动理论。", afternoon:"学习理想气体物态方程、理想气体内能。", night1:"做理想气体状态方程和内能基础题。", night2:"整理热学单位和公式。", review:"第4章未安排，符合大纲。", task:"第5章：理想气体物态方程、理想气体内能。", practice:"物态方程基础题3题；内能计算题2题。", courses:[physicsCourse({chapter:"第5章 气体动理论", knowledge:"理想气体物态方程、理想气体内能", title:"第5章 气体动理论｜理想气体物态方程与内能对应课时", durationSeconds:0, actualSeconds:60*60, practice:"物态方程和内能基础题5题。"}), noteCourse("第5章公式整理", "整理pV=νRT、温度、内能相关公式和适用条件。", 40), noteCourse("第5章基础练习", "完成教材对应基础例题和计算题。", 60), noteCourse("热学概念复盘", "区分状态量和过程量。", 30)]}),
    day({date:"2026-07-03", show:"7.3", minutes:210, chapter:"第6章 热力学基础（上）", morning:"学习热力学第一定律。", afternoon:"学习第一定律在理想气体准静态过程中的应用。", night1:"做等容、等压、等温、绝热过程基础题。", night2:"整理Q、W、ΔE符号规则。", review:"能判断过程并套第一定律。", task:"第6章：热力学第一定律及其在理想气体准静态过程中的应用。", practice:"准静态过程基础题4—6题。", courses:[physicsCourse({chapter:"第6章 热力学基础", knowledge:"热力学第一定律；理想气体准静态过程", title:"第6章 热力学基础｜热力学第一定律与准静态过程对应课时", durationSeconds:0, actualSeconds:65*60, practice:"等容/等压/等温/绝热过程基础题。"}), noteCourse("第6章过程公式整理", "整理Q、W、ΔE符号和各过程公式。", 45), noteCourse("第6章基础练习", "完成热力学第一定律对应题4—6题。", 70), noteCourse("第5—6章热学轻量复盘", "对比状态方程、内能和第一定律。", 30)]}),
    day({date:"2026-07-04", show:"7.4", minutes:240, type:"综合整理日", cls:"summary", chapter:"第7章 静止电荷的电场 + 大纲总复盘", morning:"学习第7章静电场：电场强度、电势计算、静电场高斯定律。", afternoon:"学习D、E、P关系和有电介质时的高斯定理；只做大纲内基础例题。", night1:"按第1、2、3、5、6、7章顺序整理最终公式表。", night2:"列出仍需二刷的薄弱知识点，不安排第4章和流体力学扩展。", review:"确认总计48小时预算内覆盖第1、2、3、5、6、7章；未安排第4章，未安排流体力学扩展内容。", task:"第7章静止电荷的电场：场强、电势、高斯定律、D/E/P、电介质高斯定理；大纲内总复盘。", practice:"场强/电势基础题各2题；高斯定律基础题2题；D/E/P和电介质概念题2—3题。", courses:[physicsCourse({chapter:"第7章 静止电荷的电场", knowledge:"电场强度、电势计算、静电场高斯定律", title:"第7章 静止电荷的电场｜场强、电势与高斯定律对应课时", durationSeconds:0, actualSeconds:70*60, practice:"场强、电势、高斯定律基础例题各2题。"}), physicsCourse({chapter:"第7章 静止电荷的电场", knowledge:"D、E、P关系；有电介质时的高斯定理", title:"第7章 静止电荷的电场｜电介质与高斯定理对应课时", durationSeconds:0, actualSeconds:50*60, practice:"D/E/P关系和电介质高斯定理基础题。"}), noteCourse("第7章公式整理", "整理E、V、高斯定律、D/E/P关系和介质中高斯定理。", 45), noteCourse("大纲内六章总复盘", "按第1、2、3、5、6、7章顺序回看公式和基础例题，不做整套模拟卷。", 75)]})
  ];

  function applyFortyEightHourBudget() {
    PHYSICS_PLAN.forEach((item) => {
      if (item.__budgetApplied) return;
      item.__budgetApplied = true;
      const currentSeconds = totalActualSeconds(item);
      const dayBudgetSeconds = DAILY_REVIEW_BUDGET_SECONDS[item.date] || DAILY_REVIEW_SECONDS;
      item.minutes = dayBudgetSeconds / 60;
      if (currentSeconds < dayBudgetSeconds) {
        const gapMinutes = Math.round((dayBudgetSeconds - currentSeconds) / 60);
        item.courses.push(noteCourse(
          "48小时总预算机动复盘",
          `补足当天复习预算：回看当天课时、重做基础例题、整理公式和不会的概念，共${gapMinutes}分钟。`,
          gapMinutes
        ));
      }
    });
  }

  function isReady() {
    return typeof PLAN !== "undefined" && Array.isArray(PLAN) && typeof render === "function" && typeof normalize === "function" && typeof load === "function" && typeof save === "function";
  }
  function courseKey(date, index) { return `course-${date}-${index}`; }
  function totalActualSeconds(day) {
    return (day.courses || []).reduce((sum, course) => sum + Number(course.actualSeconds || course.durationSeconds || 0), 0);
  }
  function courseDurationLine(course) {
    const original = Number(course.durationSeconds || 0);
    const actual = Number(course.actualSeconds || course.durationSeconds || 0);
    if (original && actual) return `视频原始时长：${formatSeconds(original)}｜预计实际学习：${formatSeconds(actual)}`;
    if (actual) return `预计实际学习：${formatSeconds(actual)}`;
    return "预计实际学习：按当天安排完成";
  }
  function resetPhysicsProgress() {
    const data = normalize(load());
    if (data.physicsResetVersion === PHYSICS_RESET_VERSION) return;
    data.physicsResetVersion = PHYSICS_RESET_VERSION;
    if (!data.videos) data.videos = {};
    if (!data.videoStart) data.videoStart = {};
    if (!data.checks) data.checks = {};
    PHYSICS_DATES.forEach((date) => {
      Object.keys(data.videos).forEach((key) => { if (key.indexOf(`course-${date}-`) === 0) delete data.videos[key]; });
      Object.keys(data.videoStart).forEach((key) => { if (key.indexOf(`course-${date}-`) === 0) delete data.videoStart[key]; });
      Object.keys(data.checks).forEach((key) => { if (key.indexOf(`${date}-`) === 0 || key.indexOf(date) >= 0) delete data.checks[key]; });
    });
    save(data);
  }
  function patchDurationText() {
    if (window.__physicsDurationPatchApplied) return;
    window.__physicsDurationPatchApplied = true;
    if (typeof getDayDurationText === "function") {
      const oldGetDayDurationText = getDayDurationText;
      getDayDurationText = function (day) {
        if (day && PHYSICS_DATES.includes(day.date)) return formatSeconds(totalActualSeconds(day));
        return oldGetDayDurationText(day);
      };
    }
  }
  function patchCourseHtml() {
    if (window.__physicsCourseHtmlPatchApplied || typeof courseHtml !== "function") return;
    window.__physicsCourseHtmlPatchApplied = true;
    const oldCourseHtml = courseHtml;
    courseHtml = function (day) {
      if (!day || !PHYSICS_DATES.includes(day.date)) return oldCourseHtml(day);
      const data = normalize(load());
      const courseItems = (day.courses || []).map((course, index) => {
        const id = courseKey(day.date, index);
        const done = !!data.videos[id];
        const practice = course.practice ? `<div class="lesson-meta">练习内容：${escText(course.practice)}</div>` : "";
        return `
          <div class="lesson-item">
            <div class="lesson-top">
              <div>
                <div class="lesson-name">${escText(course.chapter || course.subject)}：${escText(course.knowledge || course.title)}</div>
                <div class="lesson-meta">课时名称：${escText(course.title || "")}</div>
                <div class="lesson-meta">${courseDurationLine(course)}｜${escText(course.source || "大学物理网课")}</div>
                ${practice}
              </div>
              <span class="lesson-done ${done ? "ok" : ""}">${done ? "已完成" : "未完成"}</span>
            </div>
            <div class="lesson-actions">
              <button type="button" data-open-course="${day.date}|${index}">打开网课/教材</button>
              <button type="button" data-mark-course="${day.date}|${index}">我已看完</button>
              <button type="button" data-unmark-course="${day.date}|${index}">取消完成</button>
            </div>
          </div>`;
      }).join("");
      return `<div class="course-box"><div class="course-title">今日网课/教材</div><div class="notice">总复习预算：${PHYSICS_TOTAL_REVIEW_HOURS}小时｜今日预计总学习时长：${formatSeconds(totalActualSeconds(day))}</div><div class="lesson-list">${courseItems}</div></div>`;
    };
  }
  function patchCourseEvents() {
    if (window.__physicsCourseEventsPatchApplied) return;
    window.__physicsCourseEventsPatchApplied = true;
    document.addEventListener("click", function (event) {
      const openBtn = event.target.closest("[data-open-course]");
      const markBtn = event.target.closest("[data-mark-course]");
      const unmarkBtn = event.target.closest("[data-unmark-course]");
      const btn = openBtn || markBtn || unmarkBtn;
      if (!btn) return;
      const raw = btn.dataset.openCourse || btn.dataset.markCourse || btn.dataset.unmarkCourse;
      const [date, indexText] = raw.split("|");
      if (!PHYSICS_DATES.includes(date)) return;
      const index = Number(indexText);
      const day = PLAN.find((item) => item.date === date);
      const course = day && day.courses && day.courses[index];
      if (!course) return;
      if (openBtn) {
        if (course.url) window.open(course.url, "_blank", "noopener");
        else alert(`${course.subject || "复习"}：${course.title || "按当天安排完成"}`);
      }
      if (markBtn) {
        const data = normalize(load());
        data.videos = data.videos || {};
        data.videos[courseKey(date, index)] = true;
        save(data); render();
      }
      if (unmarkBtn) {
        const data = normalize(load());
        data.videos = data.videos || {};
        delete data.videos[courseKey(date, index)];
        save(data); render();
      }
    });
  }
  function patchPageCopy() {
    document.title = "大学物理考试大纲复习打卡站";
    const h1 = document.querySelector("h1");
    if (h1) h1.textContent = "大学物理考试大纲复习打卡站";
    const heroP = document.querySelector(".hero p");
    if (heroP) heroP.textContent = "目标：从2026年6月27日开始，在总计48小时复习预算内按考试大纲顺序复习大学物理第1、2、3、5、6、7章；6月27日和6月28日按9:00—12:00、14:00—20:00、22:30—1:30各12小时安排，共24小时；不安排第4章，不扩展流体力学。";
  }
  function applyPhysicsPlan() {
    if (!isReady()) return;
    applyFortyEightHourBudget();
    PLAN.length = 0;
    PHYSICS_PLAN.forEach((item) => PLAN.push(item));
    resetPhysicsProgress();
    patchDurationText();
    patchCourseHtml();
    patchCourseEvents();
    patchPageCopy();
    render();
  }
  if (isReady()) applyPhysicsPlan();
  else window.addEventListener("load", applyPhysicsPlan, { once: true });
})();
