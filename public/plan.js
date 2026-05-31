// 5.31—7.3 期末复习计划数据（5.31—6.10 电路计划保持不动）
// 单独放在 plan.js，减少 public/index.html 的合并冲突面积。
window.CIRCUIT_LESSON_TITLES={
  1:"电路模型和电路定律",
  2:"电阻电路的等效变换",
  3:"电阻电路的一般分析（一）",
  4:"电阻电路的一般分析（二）",
  5:"电路定理（一）",
  6:"电路定理（二）",
  7:"含有理想运放的电阻电路",
  8:"储能元件",
  9:"一阶电路与二阶电路的时域分析（一）",
  10:"一阶电路与二阶电路的时域分析（二）",
  11:"向量法",
  12:"正弦稳态电路的分析（一）",
  13:"正弦稳态电路的分析（二）"
};

window.CIRCUIT_PLAN=[
  {
    "date": "2026-05-31",
    "show": "5.31",
    "type": "学习日",
    "cls": "study",
    "chapter": "第1—2章：电路模型和电路定律 + 电阻电路等效变换",
    "lessonNos": [
      1,
      2
    ],
    "priority": "S级",
    "morning": "看课时01、02，重点参考方向、功率正负、KCL/KVL、源变换。",
    "afternoon": "整理第1—2章公式和步骤，做基础例题。",
    "night1": "刷第1—2章基础题并整理错题。",
    "night2": "回看错题，补齐参考方向、功率正负、KCL/KVL、源变换的薄弱点。",
    "review": "今日复盘第1—2章公式、步骤和错题。",
    "task": "完成第1—2章复习：电路模型和电路定律 + 电阻电路等效变换。",
    "practice": "第1—2章基础题、公式步骤整理、错题整理。",
    "adjust": "如果时间不够，优先保参考方向、功率正负、KCL/KVL、源变换。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0
  },
  {
    "date": "2026-06-01",
    "show": "6.1",
    "type": "学习日",
    "cls": "study",
    "chapter": "第3章：电阻电路的一般分析",
    "lessonNos": [
      3,
      4
    ],
    "priority": "S级",
    "morning": "看节点电压法、网孔电流法相关内容。",
    "afternoon": "整理节点法和网孔法列方程步骤。",
    "night1": "刷节点法、网孔法题。",
    "night2": "订正节点法、网孔法错题，归纳列方程易错点。",
    "review": "今日复盘节点法、网孔法适用场景和列方程步骤。",
    "task": "掌握第3章电阻电路的一般分析。",
    "practice": "节点法、网孔法题，重点训练列方程。",
    "adjust": "如果列方程卡住，先回到KCL/KVL和参考方向。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0
  },
  {
    "date": "2026-06-02",
    "show": "6.2",
    "type": "学习日",
    "cls": "study",
    "chapter": "第4章：电路定理",
    "lessonNos": [
      5,
      6
    ],
    "priority": "S级",
    "morning": "看叠加定理、戴维南、诺顿、最大功率传输。",
    "afternoon": "整理戴维南解题模板。",
    "night1": "刷戴维南/诺顿题。",
    "night2": "订正电路定理错题，补叠加定理和最大功率传输公式。",
    "review": "今日复盘戴维南/诺顿解题模板和等效电阻求法。",
    "task": "掌握第4章电路定理。",
    "practice": "戴维南/诺顿题，叠加定理和最大功率传输基础题。",
    "adjust": "如果时间紧，优先戴维南、诺顿和最大功率传输。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0
  },
  {
    "date": "2026-06-03",
    "show": "6.3",
    "type": "学习日",
    "cls": "study",
    "chapter": "第5—6章：含有理想运放的电阻电路 + 储能元件",
    "lessonNos": [
      7,
      8
    ],
    "priority": "A级",
    "morning": "看理想运放、虚短虚断、电容电感、储能元件。",
    "afternoon": "整理虚短虚断、电容电压连续、电感电流连续。",
    "night1": "做运放基础题和初始值判断题。",
    "night2": "订正运放和储能元件题，整理判断条件。",
    "review": "今日复盘虚短虚断、电容电压连续、电感电流连续。",
    "task": "掌握第5—6章：理想运放电阻电路与储能元件。",
    "practice": "运放基础题、初始值判断题。",
    "adjust": "运放先抓虚短虚断，储能元件先抓连续性。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0
  },
  {
    "date": "2026-06-04",
    "show": "6.4",
    "type": "学习日",
    "cls": "study",
    "chapter": "第7章：一阶电路与二阶电路的时域分析",
    "lessonNos": [
      9,
      10
    ],
    "priority": "S级",
    "morning": "看一阶/二阶电路时域分析，重点一阶三要素法。",
    "afternoon": "整理初始值、稳态值、时间常数。",
    "night1": "刷RC/RL一阶电路题，二阶只看基础。",
    "night2": "订正一阶电路题，背三要素法步骤。",
    "review": "今日复盘初始值、稳态值、时间常数和三要素法。",
    "task": "掌握第7章一阶电路与二阶电路时域分析。",
    "practice": "RC/RL一阶电路题，二阶基础题。",
    "adjust": "二阶只看基础，优先把一阶三要素法做熟。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0
  },
  {
    "date": "2026-06-05",
    "show": "6.5",
    "type": "学习日",
    "cls": "study",
    "chapter": "第8章：向量法/相量法",
    "lessonNos": [
      11
    ],
    "priority": "A级",
    "morning": "看向量法/相量法，重点正弦量表示、相量表示、阻抗和导纳。",
    "afternoon": "整理相量互化、复数运算、阻抗导纳公式。",
    "night1": "做相量互化和阻抗计算题。",
    "night2": "订正相量和复数计算错题，补阻抗导纳公式。",
    "review": "今日复盘相量互化、复数运算、阻抗和导纳。",
    "task": "掌握第8章向量法/相量法。",
    "practice": "相量互化题、阻抗导纳计算题。",
    "adjust": "复数计算慢就先保证格式和相位不要错。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0
  },
  {
    "date": "2026-06-06",
    "show": "6.6",
    "type": "学习日",
    "cls": "study",
    "chapter": "第9章：正弦稳态电路分析",
    "lessonNos": [
      12,
      13
    ],
    "priority": "S级",
    "morning": "看正弦稳态电路分析，重点用相量法列方程、求电压电流。",
    "afternoon": "整理正弦稳态分析步骤，做基础例题。",
    "night1": "刷正弦稳态电路题，注意复数计算和相位。",
    "night2": "订正正弦稳态题，整理列方程模板。",
    "review": "今日复盘正弦稳态分析步骤、复数计算和相位。",
    "task": "掌握第9章正弦稳态电路分析。",
    "practice": "正弦稳态电路题，相量法列方程题。",
    "adjust": "先用相量法把方程列对，再检查复数和相位。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0
  },
  {
    "date": "2026-06-07",
    "show": "6.7",
    "type": "刷题日",
    "cls": "practice",
    "chapter": "第1—4章综合刷题",
    "lessonNos": [],
    "priority": "S级",
    "morning": "做第1—4章综合题：KCL/KVL、源变换、节点法、戴维南。",
    "afternoon": "订正错题，重点补节点法和戴维南。",
    "night1": "背第1—4章公式和大题步骤模板。",
    "night2": "整理第1—4章错题清单，标注二刷题。",
    "review": "今日复盘第1—4章公式、错题和大题模板。",
    "task": "不看新课，完成第1—4章综合刷题。",
    "practice": "KCL/KVL、源变换、节点法、戴维南综合题。",
    "adjust": "如果题量太大，优先节点法和戴维南。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0
  },
  {
    "date": "2026-06-08",
    "show": "6.8",
    "type": "刷题日",
    "cls": "practice",
    "chapter": "第5—7章综合刷题",
    "lessonNos": [],
    "priority": "S级",
    "morning": "做运放、储能元件、一阶电路题。",
    "afternoon": "订正错题，重点补初始值判断和三要素法。",
    "night1": "背运放、储能、一阶电路公式。",
    "night2": "整理第5—7章错题清单，标注三要素法薄弱点。",
    "review": "今日复盘运放、储能、一阶电路公式和错题。",
    "task": "不看新课，完成第5—7章综合刷题。",
    "practice": "运放、储能元件、一阶电路题。",
    "adjust": "优先初始值判断和一阶三要素法。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0
  },
  {
    "date": "2026-06-09",
    "show": "6.9",
    "type": "刷题日",
    "cls": "practice",
    "chapter": "第8—9章综合刷题",
    "lessonNos": [],
    "priority": "S级",
    "morning": "做相量法、正弦稳态电路分析题。",
    "afternoon": "订正错题，补复数计算和列方程。",
    "night1": "整理交流电路公式和步骤。",
    "night2": "回看第8—9章错题，重点检查相位和复数运算。",
    "review": "今日复盘交流电路公式、步骤和错题。",
    "task": "不看新课，完成第8—9章综合刷题。",
    "practice": "相量法、正弦稳态电路分析题。",
    "adjust": "复数计算和列方程是优先补的两个点。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0
  },
  {
    "date": "2026-06-10",
    "show": "6.10",
    "type": "总复盘",
    "cls": "practice",
    "chapter": "第1—9章总复盘",
    "lessonNos": [],
    "priority": "S级",
    "morning": "按章节快速复盘公式和方法，做一套综合题。",
    "afternoon": "改综合题，查漏补缺。",
    "night1": "只看错题、公式、步骤模板，不学新内容。",
    "night2": "把最后还会错的点写成考前提醒清单。",
    "review": "今日总复盘第1—9章错题、公式、步骤模板。",
    "task": "不看新课，完成第1—9章总复盘。",
    "practice": "一套综合题 + 错题、公式、步骤模板。",
    "adjust": "不再学新内容，只补错题、公式和步骤模板。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0
  },
  {
    "date": "2026-06-11",
    "show": "6.11",
    "type": "学习日",
    "cls": "study",
    "chapter": "高数下 + 线代",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "高数下模块一：向量代数与空间解析几何前半。",
    "afternoon": "高数下模块一后半：平面方程、直线方程、空间位置关系。",
    "night1": "线代模块一：第一讲 行列式。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "两门主科：高数下 + 线代。",
    "practice": "高数下空间解析几何例题 + 线代行列式基础题。",
    "adjust": "每天最多突出两门主科，其他内容只做轻量复盘。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "高数下",
        "title": "模块一：向量代数与空间解析几何",
        "kind": "网课辅助",
        "optional": false
      },
      {
        "subject": "线代",
        "title": "模块一：第一讲 行列式",
        "kind": "网课辅助",
        "optional": false
      }
    ]
  },
  {
    "date": "2026-06-12",
    "show": "6.12",
    "type": "学习日",
    "cls": "study",
    "chapter": "高数下 + 线代",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "高数下模块二：多元函数基本概念、偏导数、全微分。",
    "afternoon": "高数下模块二：复合函数求导、隐函数求导。",
    "night1": "线代模块二：逆矩阵和矩阵方程。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "两门主科：高数下 + 线代。",
    "practice": "偏导/全微分/隐函数求导题 + 逆矩阵和矩阵方程题。",
    "adjust": "每天最多突出两门主科，其他内容只做轻量复盘。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "高数下",
        "title": "模块二：多元函数微分学",
        "kind": "网课辅助",
        "optional": false
      },
      {
        "subject": "线代",
        "title": "模块二：逆矩阵和矩阵方程",
        "kind": "网课辅助",
        "optional": false
      }
    ]
  },
  {
    "date": "2026-06-13",
    "show": "6.13",
    "type": "学习日",
    "cls": "study",
    "chapter": "高数下 + 线代",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "高数下模块二：几何应用、方向导数与梯度、极值。",
    "afternoon": "高数下模块三：二重积分计算。",
    "night1": "线代模块三：齐次线性方程组、非齐次线性方程组。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "两门主科：高数下 + 线代。",
    "practice": "多元函数应用/二重积分计算 + 线性方程组题。",
    "adjust": "每天最多突出两门主科，其他内容只做轻量复盘。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "高数下",
        "title": "模块二后半 + 模块三：二重积分计算",
        "kind": "网课辅助",
        "optional": false
      },
      {
        "subject": "线代",
        "title": "模块三：线性方程组",
        "kind": "网课辅助",
        "optional": false
      }
    ]
  },
  {
    "date": "2026-06-14",
    "show": "6.14",
    "type": "学习日",
    "cls": "study",
    "chapter": "高数下 + 高数上补漏",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "高数下模块三：二重积分应用。",
    "afternoon": "高数下模块四：三重积分计算与应用。",
    "night1": "高数上可选补漏：主要补极限、导数、积分基础，不强制。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "主科高数下；高数上只做可选补漏。",
    "practice": "二重/三重积分题；高数上薄弱点可选回看。",
    "adjust": "每天最多突出两门主科，其他内容只做轻量复盘。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "高数下",
        "title": "模块三应用 + 模块四：三重积分",
        "kind": "网课辅助",
        "optional": false
      },
      {
        "subject": "高数上补漏",
        "title": "极限、导数、积分基础（可选）",
        "kind": "可选补漏",
        "optional": true
      }
    ]
  },
  {
    "date": "2026-06-15",
    "show": "6.15",
    "type": "学习日",
    "cls": "study",
    "chapter": "高数下 + 线代",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "高数下模块五：曲线积分。",
    "afternoon": "高数下模块六：曲面积分。",
    "night1": "线代模块三向量线性表示 + 模块四极大无关组。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "两门主科：高数下 + 线代。",
    "practice": "曲线/曲面积分基础题 + 向量组线性相关题。",
    "adjust": "每天最多突出两门主科，其他内容只做轻量复盘。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "高数下",
        "title": "模块五曲线积分 + 模块六曲面积分",
        "kind": "网课辅助",
        "optional": false
      },
      {
        "subject": "线代",
        "title": "模块三向量线性表示 + 模块四极大无关组",
        "kind": "网课辅助",
        "optional": false
      }
    ]
  },
  {
    "date": "2026-06-16",
    "show": "6.16",
    "type": "学习日",
    "cls": "study",
    "chapter": "高数下 + 线代",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "高数下模块七：无穷级数。",
    "afternoon": "高数下整体公式整理。",
    "night1": "线代模块五特征值、特征向量、相似对角化、正交替换；模块六二次型。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "两门主科：高数下 + 线代。",
    "practice": "无穷级数题 + 高数下公式表 + 特征值/二次型题。",
    "adjust": "每天最多突出两门主科，其他内容只做轻量复盘。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "高数下",
        "title": "模块七：无穷级数 + 总公式整理",
        "kind": "网课辅助",
        "optional": false
      },
      {
        "subject": "线代",
        "title": "模块五特征值/相似对角化 + 模块六二次型",
        "kind": "网课辅助",
        "optional": false
      }
    ]
  },
  {
    "date": "2026-06-17",
    "show": "6.17",
    "type": "学习日",
    "cls": "study",
    "chapter": "大学物理 + 线代",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "大物第1章：运动和力。",
    "afternoon": "大物第2章：运动的守恒量和守恒定律。",
    "night1": "线代模块七基、维数、坐标 + 模块八小知识集锦快速补漏。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "两门主科：大学物理 + 线代。",
    "practice": "大物按教材第1—2章整理公式；线代模块七八轻量补漏。",
    "adjust": "每天最多突出两门主科，其他内容只做轻量复盘。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "大学物理",
        "title": "教材第1章 运动和力 + 第2章 守恒定律",
        "kind": "教材配套网课",
        "optional": false
      },
      {
        "subject": "线代",
        "title": "模块七基/维数/坐标 + 模块八小知识集锦",
        "kind": "网课辅助",
        "optional": false
      }
    ]
  },
  {
    "date": "2026-06-18",
    "show": "6.18",
    "type": "赶路日",
    "cls": "practice",
    "chapter": "赶路日：高数下 + 线代轻量",
    "lessonNos": [],
    "priority": "轻量",
    "morning": "赶路，不安排正式网课；只浏览高数下公式表。",
    "afternoon": "路上或到达后休息；可浏览线代错题。",
    "night1": "不强制学习；睡前最多看10分钟公式/错题。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "赶路日，只安排轻量任务。",
    "practice": "高数下公式表浏览；线代错题浏览。",
    "adjust": "赶路优先休息，不安排正式网课，不强制健身。",
    "checks": [
      "轻量浏览完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "高数下",
        "title": "公式表浏览（轻量）",
        "kind": "轻量复盘",
        "optional": true
      },
      {
        "subject": "线代",
        "title": "错题浏览（轻量）",
        "kind": "轻量复盘",
        "optional": true
      }
    ]
  },
  {
    "date": "2026-06-19",
    "show": "6.19",
    "type": "陪伴日",
    "cls": "practice",
    "chapter": "陪伴日：不安排正式学习",
    "lessonNos": [],
    "priority": "休息",
    "morning": "陪伴日，不安排正式学习。",
    "afternoon": "陪伴日，不安排正式学习。",
    "night1": "可选：睡前10分钟公式表/错题本。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "陪伴日，不安排正式学习。",
    "practice": "只保留可选轻量任务：睡前10分钟公式表/错题本。",
    "adjust": "不要强制打卡，不强制健身。",
    "checks": [],
    "minutes": 0,
    "courses": [
      {
        "subject": "可选轻量",
        "title": "睡前10分钟公式表/错题本",
        "kind": "可选",
        "optional": true
      }
    ]
  },
  {
    "date": "2026-06-20",
    "show": "6.20",
    "type": "陪伴日",
    "cls": "practice",
    "chapter": "陪伴日：不安排正式学习",
    "lessonNos": [],
    "priority": "休息",
    "morning": "陪伴日，不安排正式学习。",
    "afternoon": "陪伴日，不安排正式学习。",
    "night1": "可选：睡前10分钟公式表/错题本。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "陪伴日，不安排正式学习。",
    "practice": "只保留可选轻量任务：睡前10分钟公式表/错题本。",
    "adjust": "不要强制打卡，不强制健身。",
    "checks": [],
    "minutes": 0,
    "courses": [
      {
        "subject": "可选轻量",
        "title": "睡前10分钟公式表/错题本",
        "kind": "可选",
        "optional": true
      }
    ]
  },
  {
    "date": "2026-06-21",
    "show": "6.21",
    "type": "陪伴日",
    "cls": "practice",
    "chapter": "陪伴日：不安排正式学习",
    "lessonNos": [],
    "priority": "休息",
    "morning": "陪伴日，不安排正式学习。",
    "afternoon": "陪伴日，不安排正式学习。",
    "night1": "可选：睡前10分钟公式表/错题本。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "陪伴日，不安排正式学习。",
    "practice": "只保留可选轻量任务：睡前10分钟公式表/错题本。",
    "adjust": "不要强制打卡，不强制健身。",
    "checks": [],
    "minutes": 0,
    "courses": [
      {
        "subject": "可选轻量",
        "title": "睡前10分钟公式表/错题本",
        "kind": "可选",
        "optional": true
      }
    ]
  },
  {
    "date": "2026-06-22",
    "show": "6.22",
    "type": "冲刺日",
    "cls": "study",
    "chapter": "电路 + 高数",
    "lessonNos": [],
    "priority": "S级",
    "morning": "电路试卷日1：做一套电路试卷。",
    "afternoon": "订正电路试卷，整理错题与公式。",
    "night1": "高数下公式轻复盘，不超过40分钟。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "电路考前冲刺 + 高数轻复盘。",
    "practice": "电路试卷1套 + 高数下公式轻复盘。",
    "adjust": "每天最多突出两门主科，其他内容只做轻量复盘。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "电路",
        "title": "电路试卷日1",
        "kind": "网课辅助",
        "optional": false
      },
      {
        "subject": "高数下",
        "title": "公式轻复盘（不超过40分钟）",
        "kind": "轻量复盘",
        "optional": true
      }
    ]
  },
  {
    "date": "2026-06-23",
    "show": "6.23",
    "type": "冲刺日",
    "cls": "study",
    "chapter": "电路 + 线代",
    "lessonNos": [],
    "priority": "S级",
    "morning": "电路试卷日2：做第二套电路试卷。",
    "afternoon": "订正电路试卷，补最后薄弱点。",
    "night1": "线代公式轻复盘，不超过40分钟。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "电路考前冲刺 + 线代轻复盘。",
    "practice": "电路试卷1套 + 线代公式轻复盘。",
    "adjust": "每天最多突出两门主科，其他内容只做轻量复盘。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "电路",
        "title": "电路试卷日2",
        "kind": "网课辅助",
        "optional": false
      },
      {
        "subject": "线代",
        "title": "公式轻复盘（不超过40分钟）",
        "kind": "轻量复盘",
        "optional": true
      }
    ]
  },
  {
    "date": "2026-06-24",
    "show": "6.24",
    "type": "考试日",
    "cls": "practice",
    "chapter": "电路考试 + 大物轻量切换",
    "lessonNos": [],
    "priority": "考试",
    "morning": "电路考试。",
    "afternoon": "休息，恢复状态。",
    "night1": "大学物理第5章气体动理论轻量切换。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "电路考试日，不算两门正式学习日。",
    "practice": "晚上只做大物第5章轻量切换。",
    "adjust": "上午考试，下午休息，晚上轻量切换即可。",
    "checks": [
      "电路考试完成",
      "大物轻量切换完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "电路",
        "title": "上午电路考试",
        "kind": "考试",
        "optional": false
      },
      {
        "subject": "大学物理",
        "title": "第5章 气体动理论轻量切换",
        "kind": "教材配套网课",
        "optional": true
      }
    ]
  },
  {
    "date": "2026-06-25",
    "show": "6.25",
    "type": "学习日",
    "cls": "study",
    "chapter": "大学物理 + 高数",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "大物第5章气体动理论 + 第6章热力学基础。",
    "afternoon": "大物第7章静止电荷的电场。",
    "night1": "高数下薄弱模块回看或公式整理。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "两门主科：大学物理 + 高数。",
    "practice": "大物按教材第5—7章复习；高数下薄弱模块轻复盘。",
    "adjust": "每天最多突出两门主科，其他内容只做轻量复盘。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "大学物理",
        "title": "教材第5章气体动理论 + 第6章热力学基础 + 第7章静电场",
        "kind": "教材配套网课",
        "optional": false
      },
      {
        "subject": "高数下",
        "title": "薄弱模块回看或公式整理",
        "kind": "轻量复盘",
        "optional": true
      }
    ]
  },
  {
    "date": "2026-06-26",
    "show": "6.26",
    "type": "学习日",
    "cls": "study",
    "chapter": "大学物理 + 线代",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "大物第8章恒定电流的磁场。",
    "afternoon": "大学物理试卷日1：做一套试卷。",
    "night1": "线代模块五、六回看或公式复盘。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "两门主科：大学物理 + 线代。",
    "practice": "大物第8章 + 大物试卷1套；线代模块五六轻复盘。",
    "adjust": "每天最多突出两门主科，其他内容只做轻量复盘。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "大学物理",
        "title": "教材第8章恒定电流的磁场 + 试卷日1",
        "kind": "教材配套网课",
        "optional": false
      },
      {
        "subject": "线代",
        "title": "模块五、六回看或公式复盘",
        "kind": "轻量复盘",
        "optional": true
      }
    ]
  },
  {
    "date": "2026-06-27",
    "show": "6.27",
    "type": "学习日",
    "cls": "study",
    "chapter": "大学物理 + 高数",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "大学物理试卷日2：做第二套试卷。",
    "afternoon": "订正试卷，整理公式表。",
    "night1": "高数下错题和公式轻复盘。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "两门主科：大学物理 + 高数。",
    "practice": "大物试卷2 + 公式表；高数下错题/公式轻复盘。",
    "adjust": "每天最多突出两门主科，其他内容只做轻量复盘。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "大学物理",
        "title": "试卷日2 + 订正 + 公式表",
        "kind": "教材配套网课",
        "optional": false
      },
      {
        "subject": "高数下",
        "title": "错题和公式轻复盘",
        "kind": "轻量复盘",
        "optional": true
      }
    ]
  },
  {
    "date": "2026-06-28",
    "show": "6.28",
    "type": "学习日",
    "cls": "study",
    "chapter": "线代 + 大学物理",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "线代试卷日1：做一套线代试卷。",
    "afternoon": "订正线代试卷。",
    "night1": "大物考前公式和错题清单。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "两门主科：线代 + 大学物理。",
    "practice": "线代试卷1套；大物公式错题清单。",
    "adjust": "每天最多突出两门主科，其他内容只做轻量复盘。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "线代",
        "title": "试卷日1",
        "kind": "网课辅助",
        "optional": false
      },
      {
        "subject": "大学物理",
        "title": "考前公式和错题清单",
        "kind": "轻量复盘",
        "optional": true
      }
    ]
  },
  {
    "date": "2026-06-29",
    "show": "6.29",
    "type": "学习日",
    "cls": "study",
    "chapter": "线代 + 大学物理",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "线代试卷日2：做第二套线代试卷。",
    "afternoon": "订正线代试卷。",
    "night1": "大物考前重点回看：第1、2、5、6、7、8章公式。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "两门主科：线代 + 大学物理。",
    "practice": "线代试卷2；大物重点章公式回看。",
    "adjust": "每天最多突出两门主科，其他内容只做轻量复盘。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "线代",
        "title": "试卷日2",
        "kind": "网课辅助",
        "optional": false
      },
      {
        "subject": "大学物理",
        "title": "第1、2、5、6、7、8章公式重点回看",
        "kind": "轻量复盘",
        "optional": true
      }
    ]
  },
  {
    "date": "2026-06-30",
    "show": "6.30",
    "type": "学习日",
    "cls": "study",
    "chapter": "高数 + 线代",
    "lessonNos": [],
    "priority": "S级",
    "morning": "高数试卷日1：做一套高数试卷。",
    "afternoon": "订正高数试卷。",
    "night1": "线代考前公式和错题模板。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "两门主科：高数 + 线代。",
    "practice": "高数试卷1套；线代公式和错题模板。",
    "adjust": "每天最多突出两门主科，其他内容只做轻量复盘。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "高数下",
        "title": "高数试卷日1",
        "kind": "网课辅助",
        "optional": false
      },
      {
        "subject": "线代",
        "title": "考前公式和错题模板",
        "kind": "轻量复盘",
        "optional": true
      }
    ]
  },
  {
    "date": "2026-07-01",
    "show": "7.1",
    "type": "考试日",
    "cls": "practice",
    "chapter": "大学物理考试 + 线代考试",
    "lessonNos": [],
    "priority": "考试",
    "morning": "大学物理考试。",
    "afternoon": "休息 + 线代考前公式复盘。",
    "night1": "线性代数考试。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "考试日：上午大物，晚上线代，不安排其他重任务。",
    "practice": "只做考试和线代考前公式复盘。",
    "adjust": "不要安排其他重任务。",
    "checks": [
      "大学物理考试完成",
      "线代公式复盘完成",
      "线性代数考试完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "大学物理",
        "title": "上午大学物理考试",
        "kind": "考试",
        "optional": false
      },
      {
        "subject": "线代",
        "title": "下午公式复盘 + 晚上线性代数考试",
        "kind": "考试",
        "optional": false
      }
    ]
  },
  {
    "date": "2026-07-02",
    "show": "7.2",
    "type": "学习日",
    "cls": "study",
    "chapter": "高数",
    "lessonNos": [],
    "priority": "S级",
    "morning": "高数试卷日2：做第二套高数试卷。",
    "afternoon": "订正高数试卷。",
    "night1": "只看高数错题、公式、常见题型步骤。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "可选复盘，不强制打卡。",
    "task": "高数单科冲刺，不安排其他科目。",
    "practice": "高数试卷2 + 错题、公式、常见题型步骤。",
    "adjust": "只看高数，不安排其他科目。",
    "checks": [
      "上午任务完成",
      "下午任务完成",
      "晚上任务完成",
      "健身+爬坡有氧完成",
      "今日复盘完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "高数下",
        "title": "高数试卷日2 + 考前错题公式",
        "kind": "冲刺",
        "optional": false
      }
    ]
  },
  {
    "date": "2026-07-03",
    "show": "7.3",
    "type": "考试日",
    "cls": "practice",
    "chapter": "高等数学考试",
    "lessonNos": [],
    "priority": "考试",
    "morning": "高等数学考试。",
    "afternoon": "考试后休息。",
    "night1": "考试后休息，不安排学习。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "上午高等数学考试。",
    "practice": "完成考试即可。",
    "adjust": "上午考试，考后休息。",
    "checks": [
      "高等数学考试完成"
    ],
    "minutes": 0,
    "courses": [
      {
        "subject": "高数",
        "title": "上午高等数学考试",
        "kind": "考试",
        "optional": false
      }
    ]
  }
];

(function applyExtendedPlan(){
  function ready(){
    return typeof PLAN !== "undefined" && Array.isArray(PLAN) &&
      typeof LESSON_TITLES !== "undefined" &&
      typeof render === "function" && typeof normalize === "function";
  }
  function apply(){
    if(!ready()) return;
    document.title="5.31—7.3 期末复习打卡网站";
    const h1=document.querySelector(".hero h1");
    if(h1) h1.textContent="5.31—7.3 期末复习打卡网站";
    const heroText=document.querySelector(".hero p");
    if(heroText) heroText.textContent="目标：5.31—6.10 电路原理计划不动；6.11—7.3 按每天最多两门主科推进高数、线代、大物和电路冲刺。";
    const chips=document.querySelector(".chips");
    if(chips) chips.innerHTML='<span class="chip">每天最多两门主科</span><span class="chip">6.18 赶路轻量</span><span class="chip">6.19—6.21 陪伴日</span><span class="chip">6.22—6.24 电路冲刺</span><span class="chip">7.1 大物+线代考试</span><span class="chip">7.3 高数考试</span>';

    Object.keys(LESSON_TITLES).forEach(k=>delete LESSON_TITLES[k]);
    Object.assign(LESSON_TITLES, window.CIRCUIT_LESSON_TITLES||{});
    PLAN.splice(0, PLAN.length, ...(window.CIRCUIT_PLAN||[]));

    if(typeof courseHtml === "function" && !window.__extendedCourseHtmlApplied){
      window.__extendedCourseHtmlApplied=true;
      const originalCourseHtml=courseHtml;
      courseHtml=function(day){
        if(day.courses&&day.courses.length){
          const data=normalize(load());
          const items=day.courses.map((course,index)=>{
            const id=`course-${day.date}-${index}`;
            const done=!!data.videos[id];
            const optional=course.optional?"｜可选":"";
            const kind=course.kind||"网课/教材";
            return `<div class="lesson-item"><div class="lesson-top"><div><div class="lesson-name">${esc(course.subject||"复习")}：${esc(course.title||"")}</div><div class="lesson-meta">${esc(kind)}${optional}｜按当天两门主科安排</div></div><span class="lesson-done ${done?"ok":""}">${done?"已完成":"未完成"}</span></div><div class="lesson-actions"><button type="button" data-open-course="${day.date}|${index}">查看网课/教材</button><button type="button" data-mark-course="${day.date}|${index}">我已看完</button></div></div>`;
          }).join("");
          return `<div class="course-box"><div class="course-title">今日网课/教材</div><div class="lesson-list">${items}</div></div>`;
        }
        return originalCourseHtml(day);
      };
    }

    if(typeof getDayDurationText === "function" && !window.__extendedDurationTextApplied){
      window.__extendedDurationTextApplied=true;
      const originalGetDayDurationText=getDayDurationText;
      getDayDurationText=function(day){
        if(day.courses&&day.courses.length&&!day.lessonNos?.length) return "按当天安排";
        return originalGetDayDurationText(day);
      };
    }

    if(!window.__extendedCourseEventsApplied){
      window.__extendedCourseEventsApplied=true;
      document.addEventListener("click",event=>{
        const openBtn=event.target.closest("[data-open-course]");
        if(openBtn){
          const [date,indexText]=openBtn.dataset.openCourse.split("|");
          const day=PLAN.find(x=>x.date===date);
          const course=day&&day.courses&&day.courses[Number(indexText)];
          if(!course) return;
          if(course.url) window.open(course.url,"_blank","noopener");
          else alert((course.subject||"复习")+"："+(course.title||"按当天安排复习"));
        }
        const markBtn=event.target.closest("[data-mark-course]");
        if(markBtn){
          const [date,indexText]=markBtn.dataset.markCourse.split("|");
          const day=PLAN.find(x=>x.date===date);
          if(!day||!day.courses) return;
          const data=normalize(load());
          data.videos[`course-${date}-${indexText}`]=true;
          if(day.courses.every((_,idx)=>data.videos[`course-${date}-${idx}`])&&day.checks&&day.checks.length){
            data.checks[taskKey(date,0)]=true;
          }
          save(data);
          render();
        }
      });
    }
    render();
    if(typeof fetchRealDurations === "function") fetchRealDurations();
  }
  if(ready()) apply();
  else window.addEventListener("load",apply,{once:true});
})();
