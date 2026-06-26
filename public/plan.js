// 2026-06-27—2026-06-28 大学物理从零开始复习计划覆盖脚本
// 作用：在不改变原网站结构、视觉风格、打卡方式和保存逻辑的前提下，重排 6/27、6/28 大学物理计划。

(function () {
  const PHYSICS_RESET_VERSION = "physics-zero-start-2026-06-27-v1";

  const PHYSICS_URL =
    "https://www.bilibili.com/video/BV1Rb411u7uk";

  function escText(value) {
    return String(value == null ? "" : value);
  }

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

  function noteCourse(subject, title, practice, actualMinutes) {
    return {
      subject,
      title,
      chapter: subject,
      knowledge: title,
      durationSeconds: 0,
      actualSeconds: actualMinutes ? actualMinutes * 60 : 0,
      practice: practice || "",
      source: "复习整理",
      optional: false
    };
  }

  const JUNE_27 = {
    date: "2026-06-27",
    show: "6.27",
    type: "学习日",
    cls: "study",
    chapter: "大学物理从零开始：第1章 运动和力（上）",
    lessonNos: [],
    priority: "S级",
    minutes: 220,
    morning:
      "大学物理从零开始学习：先观看第1章运动和力的最基础课时，重点掌握矢量、位移、速度、加速度以及微分/积分关系。网课安排为连续大块时间，不拆成碎片。",
    afternoon:
      "继续第1章运动学基础：直线运动、曲线运动基本描述、自然坐标系入门。每看完一部分网课后，立刻整理对应公式并做基础例题。",
    night1:
      "完成当天对应基础练习：运动学公式整理、位移速度加速度关系题、曲线运动基础题。不做综合卷、不做真题套卷。",
    night2:
      "轻量整理：把今天第1章公式、典型例题步骤和不懂的概念写入错题/笔记，准备6月28日继续衔接。",
    review:
      "确认自己能说清位移、速度、加速度的微分和积分关系，能区分直线运动、曲线运动和自然坐标系中的基本量。",
    task:
      "大学物理从零开始学习第1章运动和力：矢量基础、运动学基本量、微积分关系、直线/曲线运动基础。",
    practice:
      "整理运动学公式15分钟；完成教材第1章基础例题3—5题；完成位移、速度、加速度关系基础题2—3题。",
    adjust:
      "如果运动学公式理解不稳，不继续往后赶进度；优先保证第1章基础概念、公式和典型例题真正会用。",
    checks: [
      "大学物理网课第1部分完成",
      "大学物理网课第2部分完成",
      "教材例题/基础练习完成",
      "今日公式整理完成",
      "今日复盘完成"
    ],
    courses: [
      physicsCourse({
        chapter: "第1章 运动和力",
        knowledge: "矢量基础；位移、速度、加速度的基本概念；运动学入门",
        title: "第1章 运动和力｜课时11 质点运动学",
        durationSeconds: 1732,
        actualSeconds: 45 * 60,
        practice:
          "整理矢量、位移、速度、加速度定义；完成教材第1章最基础概念题和例题2—3题。"
      }),
      physicsCourse({
        chapter: "第1章 运动和力",
        knowledge: "位移、速度、加速度之间的微分关系和积分关系",
        title: "第1章 运动和力｜课时12 运动建模及解方程",
        durationSeconds: 1420,
        actualSeconds: 40 * 60,
        practice:
          "整理运动学微分/积分公式；完成由加速度求速度、由速度求位移的基础题2—3题。"
      }),
      physicsCourse({
        chapter: "第1章 运动和力",
        knowledge: "牛顿三大定律、常见力、基础受力分析",
        title: "第1章 运动和力｜课时13 牛顿定律和常见力",
        durationSeconds: 1050,
        actualSeconds: 35 * 60,
        practice:
          "整理牛顿三定律和常见力；完成简单受力分析例题2题，不做综合动力学大题。"
      }),
      noteCourse(
        "大学物理",
        "第1章公式整理与教材基础练习",
        "整理运动学公式15分钟；完成教材第1章基础例题3—5题。",
        40
      ),
      noteCourse(
        "低强度补充",
        "高数/线代公式轻量浏览",
        "只做20分钟低强度公式浏览，不挤占大学物理大块学习时间。",
        20
      )
    ]
  };

  const JUNE_28 = {
    date: "2026-06-28",
    show: "6.28",
    type: "学习日",
    cls: "study",
    chapter: "大学物理从零开始：第1章收尾 + 第2章动量定理起步",
    lessonNos: [],
    priority: "S级",
    minutes: 215,
    morning:
      "先用20—30分钟回顾6月27日内容：矢量、运动学公式、位移速度加速度微积分关系、牛顿定律和常见力。随后从6月27日结束位置自然继续，不重复、不跳课。",
    afternoon:
      "完成第1章尚未掌握的曲线运动、自然坐标系、相对运动基础；第1章基础稳定后，再开始第2章，必须从动量定理和动量守恒开始。",
    night1:
      "围绕当天网课做基础题和典型例题：第1章运动学/牛顿定律基础题，第2章动量定理入门题。不安排整套模拟卷。",
    night2:
      "整理第1章与第2章开头公式：动量、冲量、动量定理、动量守恒条件。只做轻量复盘，不做大规模错题整理。",
    review:
      "确认6月28日能自然衔接6月27日；第2章从动量定理开始，没有跳到机械能守恒或角动量。",
    task:
      "回顾6月27日内容，完成第1章基础衔接；开始第2章运动的守恒量和守恒定律，从动量定理、动量守恒定律开始。",
    practice:
      "回顾题2—3题；第1章曲线运动/牛顿定律基础题2—3题；第2章动量定理和动量守恒基础例题2—3题。",
    adjust:
      "如果第1章仍不稳，6月28日优先补第1章，不为了赶进度强行推进机械能或角动量。",
    checks: [
      "6月27日内容回顾完成",
      "第1章后续基础内容完成",
      "第2章动量部分网课完成",
      "对应基础练习完成",
      "今日复盘完成"
    ],
    courses: [
      noteCourse(
        "大学物理",
        "6月27日内容回顾：运动学公式、牛顿定律、常见力",
        "用20—30分钟回顾矢量、运动学微积分关系、牛顿三定律和常见力。",
        25
      ),
      physicsCourse({
        chapter: "第1章 运动和力",
        knowledge: "曲线运动描述、自然坐标系、相对运动、牛顿定律应用",
        title: "第1章 运动和力｜课时13 牛顿定律和常见力（衔接复听重点段落）",
        durationSeconds: 1050,
        actualSeconds: 30 * 60,
        practice:
          "完成曲线运动/自然坐标系基础题2题；完成简单受力分析和牛顿定律应用题2题。"
      }),
      physicsCourse({
        chapter: "第2章 运动的守恒量和守恒定律",
        knowledge: "动量定理、冲量、动量守恒定律",
        title: "第2章 运动的守恒量和守恒定律｜课时15 动量和动量守恒",
        durationSeconds: 2004,
        actualSeconds: 50 * 60,
        practice:
          "整理动量、冲量、动量定理、动量守恒条件；完成动量定理基础例题2—3题。"
      }),
      physicsCourse({
        chapter: "第2章 运动的守恒量和守恒定律",
        knowledge: "转动惯量、力矩基础概念，为后续刚体定轴转动做铺垫",
        title: "第2章 运动的守恒量和守恒定律｜课时14 转动惯量和力矩及其作用",
        durationSeconds: 1828,
        actualSeconds: 45 * 60,
        practice:
          "只整理转动惯量、力矩的基础概念和公式；完成基础概念题2题，不做综合刚体大题。"
      }),
      noteCourse(
        "大学物理",
        "第1章—第2章开头公式整理与基础练习",
        "整理第1章运动学/牛顿定律公式，第2章动量定理和动量守恒条件；完成基础题3—5题。",
        45
      ),
      noteCourse(
        "低强度补充",
        "线代公式轻量浏览",
        "只做20分钟低强度公式浏览，不挤占大学物理连续学习时间。",
        20
      )
    ]
  };

  function isReady() {
    return (
      typeof PLAN !== "undefined" &&
      Array.isArray(PLAN) &&
      typeof render === "function" &&
      typeof normalize === "function" &&
      typeof load === "function" &&
      typeof save === "function"
    );
  }

  function replaceOrInsertDay(newDay) {
    const index = PLAN.findIndex((day) => day.date === newDay.date);
    if (index >= 0) {
      PLAN.splice(index, 1, newDay);
      return;
    }

    const insertAt = PLAN.findIndex((day) => day.date > newDay.date);
    if (insertAt >= 0) {
      PLAN.splice(insertAt, 0, newDay);
    } else {
      PLAN.push(newDay);
    }
  }

  function courseKey(date, index) {
    return `course-${date}-${index}`;
  }

  function totalActualSeconds(day) {
    return (day.courses || []).reduce((sum, course) => {
      return sum + Number(course.actualSeconds || course.durationSeconds || 0);
    }, 0);
  }

  function courseDurationLine(course) {
    const original = Number(course.durationSeconds || 0);
    const actual = Number(course.actualSeconds || course.durationSeconds || 0);

    if (original && actual) {
      return `视频原始时长：${formatSeconds(original)}｜预计实际学习：${formatSeconds(actual)}`;
    }

    if (actual) {
      return `预计实际学习：${formatSeconds(actual)}`;
    }

    return "预计实际学习：按当天安排完成";
  }

  function resetPhysicsProgressForTwoDays() {
    const data = normalize(load());

    if (data.physicsResetVersion === PHYSICS_RESET_VERSION) {
      return;
    }

    data.physicsResetVersion = PHYSICS_RESET_VERSION;

    if (!data.videos) data.videos = {};
    if (!data.videoStart) data.videoStart = {};
    if (!data.checks) data.checks = {};

    ["2026-06-27", "2026-06-28"].forEach((date) => {
      Object.keys(data.videos).forEach((key) => {
        if (key.indexOf(`course-${date}-`) === 0) {
          delete data.videos[key];
        }
      });

      Object.keys(data.videoStart).forEach((key) => {
        if (key.indexOf(`course-${date}-`) === 0) {
          delete data.videoStart[key];
        }
      });

      Object.keys(data.checks).forEach((key) => {
        if (key.indexOf(`${date}-`) === 0 || key.indexOf(date) >= 0) {
          delete data.checks[key];
        }
      });
    });

    save(data);
  }

  function patchDurationText() {
    if (window.__physicsZeroDurationPatchApplied) return;
    window.__physicsZeroDurationPatchApplied = true;

    if (typeof getDayDurationText === "function") {
      const oldGetDayDurationText = getDayDurationText;

      getDayDurationText = function (day) {
        if (day && (day.date === "2026-06-27" || day.date === "2026-06-28")) {
          return formatSeconds(totalActualSeconds(day));
        }

        return oldGetDayDurationText(day);
      };
    }
  }

  function patchCourseHtml() {
    if (window.__physicsZeroCourseHtmlPatchApplied) return;
    window.__physicsZeroCourseHtmlPatchApplied = true;

    if (typeof courseHtml !== "function") return;

    const oldCourseHtml = courseHtml;

    courseHtml = function (day) {
      if (!day || (day.date !== "2026-06-27" && day.date !== "2026-06-28")) {
        return oldCourseHtml(day);
      }

      const data = normalize(load());
      const courses = day.courses || [];

      const courseItems = courses
        .map((course, index) => {
          const id = courseKey(day.date, index);
          const done = !!data.videos[id];
          const source = course.source || "大学物理网课";
          const practice = course.practice
            ? `<div class="lesson-meta">练习内容：${escText(course.practice)}</div>`
            : "";

          return `
            <div class="lesson-item">
              <div class="lesson-top">
                <div>
                  <div class="lesson-name">${escText(course.chapter || course.subject)}：${escText(course.knowledge || course.title)}</div>
                  <div class="lesson-meta">课时名称：${escText(course.title || "")}</div>
                  <div class="lesson-meta">${courseDurationLine(course)}｜${escText(source)}</div>
                  ${practice}
                </div>
                <span class="lesson-done ${done ? "ok" : ""}">${done ? "已完成" : "未完成"}</span>
              </div>
              <div class="lesson-actions">
                <button type="button" data-open-course="${day.date}|${index}">打开网课/教材</button>
                <button type="button" data-mark-course="${day.date}|${index}">我已看完</button>
                <button type="button" data-unmark-course="${day.date}|${index}">取消完成</button>
              </div>
            </div>
          `;
        })
        .join("");

      return `
        <div class="course-box">
          <div class="course-title">今日网课/教材</div>
          <div class="notice">今日预计总学习时长：${formatSeconds(totalActualSeconds(day))}</div>
          <div class="lesson-list">${courseItems}</div>
        </div>
      `;
    };
  }

  function patchCourseEvents() {
    if (window.__physicsZeroCourseEventsPatchApplied) return;
    window.__physicsZeroCourseEventsPatchApplied = true;

    document.addEventListener("click", function (event) {
      const openBtn = event.target.closest("[data-open-course]");
      if (openBtn) {
        const parts = openBtn.dataset.openCourse.split("|");
        const date = parts[0];
        const index = Number(parts[1]);

        if (date !== "2026-06-27" && date !== "2026-06-28") {
          return;
        }

        const day = PLAN.find((item) => item.date === date);
        const course = day && day.courses && day.courses[index];

        if (!course) return;

        if (course.url) {
          window.open(course.url, "_blank", "noopener");
        } else {
          alert(`${course.subject || "复习"}：${course.title || "按当天安排完成"}`);
        }
      }

      const markBtn = event.target.closest("[data-mark-course]");
      if (markBtn) {
        const parts = markBtn.dataset.markCourse.split("|");
        const date = parts[0];
        const index = Number(parts[1]);

        if (date !== "2026-06-27" && date !== "2026-06-28") {
          return;
        }

        const data = normalize(load());
        if (!data.videos) data.videos = {};
        data.videos[courseKey(date, index)] = true;
        save(data);
        render();
      }

      const unmarkBtn = event.target.closest("[data-unmark-course]");
      if (unmarkBtn) {
        const parts = unmarkBtn.dataset.unmarkCourse.split("|");
        const date = parts[0];
        const index = Number(parts[1]);

        if (date !== "2026-06-27" && date !== "2026-06-28") {
          return;
        }

        const data = normalize(load());
        if (!data.videos) data.videos = {};
        delete data.videos[courseKey(date, index)];
        save(data);
        render();
      }
    });
  }

  function applyPhysicsPlan() {
    if (!isReady()) return;

    replaceOrInsertDay(JUNE_27);
    replaceOrInsertDay(JUNE_28);

    resetPhysicsProgressForTwoDays();
    patchDurationText();
    patchCourseHtml();
    patchCourseEvents();

    render();
  }

  if (isReady()) {
    applyPhysicsPlan();
  } else {
    window.addEventListener("load", applyPhysicsPlan, { once: true });
  }
})();
