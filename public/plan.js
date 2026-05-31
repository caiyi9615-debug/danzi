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
    "chapter": "电路 + 高数下",
    "lessonNos": [
      1,
      2
    ],
    "priority": "S级",
    "morning": "电路第1章：电路模型、电压电流参考方向、KCL/KVL。",
    "afternoon": "电路第2章：电阻等效、串并联、基础题。",
    "night1": "高数下模块一前半：向量概念、数量积、向量积、平面/直线方程。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘电路参考方向、KCL/KVL、电阻等效；整理高数下向量和平面直线公式。",
    "task": "两门主科：电路 + 高数下；电路为主线。",
    "practice": "电路第1—2章基础题 + 高数下空间解析几何入门。",
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
    "chapter": "电路 + 线代",
    "lessonNos": [
      3,
      4
    ],
    "priority": "S级",
    "morning": "电阻电路一般分析：支路电流法、节点法。",
    "afternoon": "网孔法、含源电路基础题。",
    "night1": "线代第一讲：行列式。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘电路一般分析列方程步骤和行列式计算。",
    "task": "两门主科：电路 + 线代；电路为主线。",
    "practice": "节点法/网孔法题 + 行列式基础题。",
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
    "chapter": "电路 + 大物",
    "lessonNos": [
      5,
      6
    ],
    "priority": "S级",
    "morning": "电路定理：叠加定理、戴维南、诺顿。",
    "afternoon": "电路定理典型题整理。",
    "night1": "大物第1章：质点运动学、运动建模、牛顿定律。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘电路定理解题模板和大物第1章公式。",
    "task": "两门主科：电路 + 大物；电路为主线。",
    "practice": "戴维南/诺顿典型题 + 大物第1章基础题。",
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
    "chapter": "电路 + 高数下",
    "lessonNos": [
      7
    ],
    "priority": "S级",
    "morning": "含受控源电路、运放基础。",
    "afternoon": "受控源题型、等效电路题。",
    "night1": "高数下模块一后半：空间位置关系、曲面及其方程。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘受控源、运放虚短虚断和空间曲面公式。",
    "task": "两门主科：电路 + 高数下；电路为主线。",
    "practice": "受控源/运放基础题 + 空间解析几何题。",
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
    "chapter": "电路 + 线代",
    "lessonNos": [
      8,
      9
    ],
    "priority": "S级",
    "morning": "储能元件、电容电感、换路定律。",
    "afternoon": "一阶电路零输入/零状态基础。",
    "night1": "线代逆矩阵和矩阵方程。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘换路定律、一阶电路初始值和逆矩阵方法。",
    "task": "两门主科：电路 + 线代；电路为主线。",
    "practice": "储能元件/一阶电路基础题 + 逆矩阵题。",
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
    "chapter": "电路 + 大物",
    "lessonNos": [
      11,
      12
    ],
    "priority": "S级",
    "morning": "正弦稳态入门：相量法、复数计算。",
    "afternoon": "阻抗、导纳、正弦稳态基础题。",
    "night1": "大物第2章前半：转动惯量、动量、动量守恒。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘相量互化、复数计算、动量守恒。",
    "task": "两门主科：电路 + 大物；电路为主线。",
    "practice": "相量/阻抗导纳基础题 + 大物动量守恒题。",
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
    "type": "学习日",
    "cls": "study",
    "chapter": "电路 + 高数下",
    "lessonNos": [
      13
    ],
    "priority": "S级",
    "morning": "正弦稳态功率、有效值、相位关系。",
    "afternoon": "正弦稳态综合题。",
    "night1": "高数下模块二前半：多元函数、偏导数、全微分。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘正弦稳态功率和多元函数微分基础。",
    "task": "两门主科：电路 + 高数下；电路为主线。",
    "practice": "正弦稳态综合题 + 偏导数/全微分题。",
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
    "type": "学习日",
    "cls": "study",
    "chapter": "电路 + 线代",
    "lessonNos": [
      10
    ],
    "priority": "S级",
    "morning": "一阶电路 + 相量法混合练习。",
    "afternoon": "第1—9章错题整理。",
    "night1": "线代齐次线性方程组、非齐次线性方程组、向量线性表示。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘一阶电路、相量法和线性方程组。",
    "task": "两门主科：电路 + 线代；电路为主线。",
    "practice": "电路混合题/错题整理 + 线性方程组题。",
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
    "type": "学习日",
    "cls": "study",
    "chapter": "电路 + 大物",
    "lessonNos": [],
    "priority": "S级",
    "morning": "电路第1—9章公式总整理。",
    "afternoon": "电路典型大题步骤模板。",
    "night1": "大物第2章后半：角动量、角动量守恒、功和能。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘电路第1—9章公式和大物守恒定律。",
    "task": "两门主科：电路 + 大物；电路为主线。",
    "practice": "电路公式/大题模板 + 大物角动量与能量题。",
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
    "type": "学习日",
    "cls": "study",
    "chapter": "电路 + 高数下",
    "lessonNos": [],
    "priority": "S级",
    "morning": "电路阶段测试/综合刷题。",
    "afternoon": "订正测试，补弱项。",
    "night1": "高数下模块二后半：复合函数求导、隐函数求导、方向导数、极值。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘电路弱项和高数下模块二后半公式。",
    "task": "两门主科：电路 + 高数下；电路阶段测试为主线。",
    "practice": "电路综合题订正 + 多元复合/隐函数/极值题。",
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
    "morning": "高数下模块三：二重积分计算题型1—6。",
    "afternoon": "二重积分题型7与应用。",
    "night1": "线代极大无关组 + 特征值特征向量。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "两门主科：高数下 + 线代。",
    "practice": "二重积分计算与应用 + 极大无关组/特征值题。",
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
    "chapter": "高数下 + 大物",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "高数下模块四：三重积分计算。",
    "afternoon": "三重积分应用。",
    "night1": "大物第3章：刚体定轴转动核心、拓展、习题。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "两门主科：高数下 + 大物。",
    "practice": "三重积分题 + 刚体定轴转动题。",
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
    "morning": "高数下模块五：曲线积分。",
    "afternoon": "曲线积分应用、路径无关条件。",
    "night1": "线代相似对角化、正交替换、二次型。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "两门主科：高数下 + 线代。",
    "practice": "曲线积分题 + 相似对角化/正交/二次型题。",
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
    "chapter": "大物 + 高数上补漏",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "大物第4章：狭义相对论核心。",
    "afternoon": "狭义相对论拓展、习题。",
    "night1": "高数上补漏：极限、导数、积分基础，轻量即可。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "两门主科：大物 + 高数上补漏。",
    "practice": "狭义相对论题 + 高数上基础轻量补漏。",
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
    "morning": "高数下模块六：曲面积分。",
    "afternoon": "曲面积分应用、散度旋度。",
    "night1": "线代基、维数、坐标 + 小知识集锦行列式。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "两门主科：高数下 + 线代。",
    "practice": "曲面积分题 + 基/维数/坐标/行列式小知识。",
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
    "chapter": "大物 + 高数下",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "大物第5章气体动理论 + 第6章热力学基础。",
    "afternoon": "热力学典型题、公式整理。",
    "night1": "高数下模块七：级数概念、正项级数、傅里叶级数。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "两门主科：大物 + 高数下。",
    "practice": "热学公式题 + 无穷级数题。",
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
    "chapter": "线代 + 大物",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "线代小知识集锦：矩阵、向量组、线性方程组。",
    "afternoon": "线代特征值、相似、正交、二次型小知识。",
    "night1": "大物第1—6章框架回顾，整理公式表。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "两门主科：线代 + 大物。",
    "practice": "线代小知识集锦 + 大物第1—6章公式表。",
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
    "chapter": "赶路轻量日",
    "lessonNos": [],
    "priority": "轻量",
    "morning": "上午/路上：高数公式浏览。",
    "afternoon": "赶路休息。",
    "night1": "线代错题、大物公式轻量浏览。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "赶路轻量日，不安排正式网课，不强制健身。",
    "practice": "高数公式浏览；线代错题、大物公式轻量浏览。",
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
    "chapter": "陪伴日",
    "lessonNos": [],
    "priority": "休息",
    "morning": "陪伴日，不安排正式学习。",
    "afternoon": "陪伴日，不安排正式学习。",
    "night1": "可选：睡前10分钟公式表/错题本。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
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
    "chapter": "陪伴日",
    "lessonNos": [],
    "priority": "休息",
    "morning": "陪伴日，不安排正式学习。",
    "afternoon": "陪伴日，不安排正式学习。",
    "night1": "可选：睡前10分钟公式表/错题本。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
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
    "chapter": "陪伴日",
    "lessonNos": [],
    "priority": "休息",
    "morning": "陪伴日，不安排正式学习。",
    "afternoon": "陪伴日，不安排正式学习。",
    "night1": "晚上可简单确认电路冲刺资料。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "陪伴日，不安排正式学习。",
    "practice": "可选：睡前10分钟公式表/错题本；简单确认电路冲刺资料。",
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
    "chapter": "电路 + 高数轻量",
    "lessonNos": [],
    "priority": "S级",
    "morning": "电路试卷1。",
    "afternoon": "订正试卷，整理错题。",
    "night1": "高数公式轻复盘，不超过40分钟。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "电路考前冲刺 + 高数轻量复盘。",
    "practice": "电路试卷1 + 高数公式轻复盘。",
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
    "chapter": "电路冲刺",
    "lessonNos": [],
    "priority": "S级",
    "morning": "电路试卷2。",
    "afternoon": "订正试卷。",
    "night1": "只看电路公式、错题、大题步骤。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "电路考前冲刺，不安排其他重任务。",
    "practice": "电路试卷2 + 电路公式/错题/大题步骤。",
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
    "chapter": "电路考试 + 大物轻量",
    "lessonNos": [],
    "priority": "考试",
    "morning": "9:00—11:00 电路原理考试。",
    "afternoon": "休息。",
    "night1": "大物轻量切换：第7章静电场框架。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "上午电路原理考试，晚上大物轻量切换。",
    "practice": "考试后休息；大物第7章框架轻量浏览。",
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
    "chapter": "大物 + 高数",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "大物第7章：静止电荷的电场。",
    "afternoon": "大物第8章：恒定电流的磁场。",
    "night1": "高数下薄弱模块回看，二重积分/三重积分/级数任选。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "两门主科：大物 + 高数。",
    "practice": "大物第7—8章 + 高数下薄弱模块。",
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
    "chapter": "大物 + 线代",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "大物试卷1。",
    "afternoon": "订正试卷，整理大物公式。",
    "night1": "线代公式复盘：行列式、矩阵、方程组。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "两门主科：大物 + 线代。",
    "practice": "大物试卷1 + 线代公式复盘。",
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
    "chapter": "大物 + 高数",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "大物试卷2。",
    "afternoon": "订正试卷，整理错题。",
    "night1": "高数错题复盘，重点看积分、级数、空间解析几何。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "两门主科：大物 + 高数。",
    "practice": "大物试卷2 + 高数错题复盘。",
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
    "chapter": "线代 + 大物",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "线代试卷1。",
    "afternoon": "订正试卷。",
    "night1": "大物考前公式清单：第1、2、5、6、7、8章。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "两门主科：线代 + 大物。",
    "practice": "线代试卷1 + 大物考前公式清单。",
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
    "chapter": "线代 + 大物",
    "lessonNos": [],
    "priority": "A 级",
    "morning": "线代试卷2。",
    "afternoon": "订正试卷。",
    "night1": "大物最后回看：公式、错题、典型题步骤。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "两门主科：线代 + 大物。",
    "practice": "线代试卷2 + 大物最后回看。",
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
    "morning": "高数试卷1。",
    "afternoon": "订正试卷。",
    "night1": "线代考前公式、错题模板。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "两门主科：高数 + 线代。",
    "practice": "高数试卷1 + 线代考前公式错题模板。",
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
    "chapter": "大物考试 + 线代考试",
    "lessonNos": [],
    "priority": "考试",
    "morning": "大学物理考试。",
    "afternoon": "休息 + 线代公式复盘。",
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
    "chapter": "高数冲刺",
    "lessonNos": [],
    "priority": "S级",
    "morning": "高数试卷2。",
    "afternoon": "订正试卷。",
    "night1": "高数错题、公式、常见题型步骤。",
    "night2": "整理当天错题和明日优先级，不额外加重任务。",
    "review": "复盘当天两门主科的公式、错题和步骤模板。",
    "task": "高数冲刺，不安排其他科目。",
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
  const GAOSHU_URL="https://pc.vkbrother.com/#/layout/player?courseId=1719375269467_777d4890-8beb-4875-8569-9c031fc2e2b9";
  const LINEAR_URL="https://pc.vkbrother.com/#/layout/player?courseId=822&date=1780211240256";
  const PHYSICS_URL="https://www.bilibili.com/cheese/play/ss655321602?bsource=link_copy";
  const PHYSICS_EXTRA_URL="https://www.bilibili.com/video/BV1G4wqz7EpN/?share_source=copy_web&vd_source=ec2f99ae8aa5b390c958387df1b0d10b";
  const TEXTBOOK_SOURCE="textbook";

  function course(subject,title,durationSeconds,url,source="bilibili",kind="网课辅助",optional=false){
    return {subject,title,url:url||"",durationSeconds:durationSeconds ?? null,source,kind,optional};
  }
  function noteCourse(subject,title,kind="轻量复盘",optional=true){
    return course(subject,title,null,"",TEXTBOOK_SOURCE,kind,optional);
  }

  const GAOSHU={
    m1:[
      course("高数下","模块一｜【考点1-2】向量的概念、数量和向量积",2035,GAOSHU_URL,"j榜时代"),
      course("高数下","模块一｜【考点3-4】平面方程直线方程",1953,GAOSHU_URL,"j榜时代"),
      course("高数下","模块一｜【考点5】空间中位置关系的判断",2133,GAOSHU_URL,"j榜时代"),
      course("高数下","模块一｜【考点6】曲面及其方程",1444,GAOSHU_URL,"j榜时代")
    ],
    m2a:[
      course("高数下","模块二｜【考点1】多元函数的基本概念【考点2】偏导数",3218,GAOSHU_URL,"j榜时代"),
      course("高数下","模块二｜【考点3】全微分",1887,GAOSHU_URL,"j榜时代"),
      course("高数下","模块二｜【考点4】多元复合函数的求导【考点5】隐函数的求导",3369,GAOSHU_URL,"j榜时代")
    ],
    m2b:[
      course("高数下","模块二｜【考点6】多元函数微分学的几何应用",923,GAOSHU_URL,"j榜时代"),
      course("高数下","模块二｜【考点7】方向导数与梯度",1398,GAOSHU_URL,"j榜时代"),
      course("高数下","模块二｜【考点8】多元函数的极值及其求法",2325,GAOSHU_URL,"j榜时代")
    ],
    m3calc:[
      course("高数下","模块三｜【考点1】二重积分的计算 题型1-题型3",2063,GAOSHU_URL,"j榜时代"),
      course("高数下","模块三｜【考点1】二重积分的计算 题型4-题型6",3017,GAOSHU_URL,"j榜时代"),
      course("高数下","模块三｜【考点1】二重积分的计算 题型7",831,GAOSHU_URL,"j榜时代")
    ],
    m3app:[
      course("高数下","模块三｜【考点2】二重积分的应用 题型1",313,GAOSHU_URL,"j榜时代"),
      course("高数下","模块三｜【考点2】二重积分的应用 题型2-题型3",582,GAOSHU_URL,"j榜时代")
    ],
    m4:[
      course("高数下","模块四｜【考点1】三重积分的计算 题型1-题型4例1",4121,GAOSHU_URL,"j榜时代"),
      course("高数下","模块四｜【考点1】三重积分的计算 题型4例2",594,GAOSHU_URL,"j榜时代"),
      course("高数下","模块四｜【考点2】三重积分的应用",1229,GAOSHU_URL,"j榜时代")
    ],
    m5:[
      course("高数下","模块五｜【考点1】对弧长的曲线积分（第一类曲线积分）的计算",2620,GAOSHU_URL,"j榜时代"),
      course("高数下","模块五｜【考点2】对坐标的曲线积分（第二类曲线积分）的计算 题型1",1762,GAOSHU_URL,"j榜时代"),
      course("高数下","模块五｜【考点2】对坐标的曲线积分（第二类曲线积分）的计算 题型2",1131,GAOSHU_URL,"j榜时代"),
      course("高数下","模块五｜【考点2】对坐标的曲线积分（第二类曲线积分）的计算 题型3-题型4",1890,GAOSHU_URL,"j榜时代"),
      course("高数下","模块五｜【考点3】曲线积分与路径无关的条件",414,GAOSHU_URL,"j榜时代"),
      course("高数下","模块五｜【考点4】曲线积分的应用",1713,GAOSHU_URL,"j榜时代")
    ],
    m6:[
      course("高数下","模块六｜【考点1】对面积的曲面积分（第一类曲面积分）的计算 题型1",919,GAOSHU_URL,"j榜时代"),
      course("高数下","模块六｜【考点1】对面积的曲面积分（第一类曲面积分）的计算 题型2",1331,GAOSHU_URL,"j榜时代"),
      course("高数下","模块六｜【考点2】对坐标的曲面积分（第二类曲面积分）的计算 题型1",1372,GAOSHU_URL,"j榜时代"),
      course("高数下","模块六｜【考点2】对坐标的曲面积分（第二类曲面积分）的计算 题型2",1320,GAOSHU_URL,"j榜时代"),
      course("高数下","模块六｜【考点3】曲面积分的应用【考点4】散度和旋度的计算",1030,GAOSHU_URL,"j榜时代")
    ],
    m7:[
      course("高数下","模块七｜【考点1】题型1 级数的概念与性质",1078,GAOSHU_URL,"j榜时代"),
      course("高数下","模块七｜【考点1】题型2 正项级数敛散性的判定",2433,GAOSHU_URL,"j榜时代"),
      course("高数下","模块七｜【考点1】题型3【考点2】幂级数",5210,GAOSHU_URL,"j榜时代"),
      course("高数下","模块七｜【考点3】傅里叶级数",848,GAOSHU_URL,"j榜时代")
    ],
    extra:[course("高数下","补充内容【选听】微分方程【上册没学过这部分内容的同学选修】",1988,GAOSHU_URL,"j榜时代","选听",true)]
  };

  const LINEAR={
    det:[course("线代","第一讲 行列式",3226,LINEAR_URL,"j榜时代")],
    inv:[course("线代","逆矩阵和矩阵方程",3418,LINEAR_URL,"j榜时代")],
    eq:[course("线代","齐次线性方程组",1953,LINEAR_URL,"j榜时代"),course("线代","非齐次线性方程组",1847,LINEAR_URL,"j榜时代")],
    vector:[course("线代","向量的线性表示",948,LINEAR_URL,"j榜时代"),course("线代","极大无关组",1134,LINEAR_URL,"j榜时代")],
    eigen:[course("线代","求特征值特征向量",1495,LINEAR_URL,"j榜时代"),course("线代","相似对角化",2082,LINEAR_URL,"j榜时代"),course("线代","正交替换",1731,LINEAR_URL,"j榜时代"),course("线代","二次型",1401,LINEAR_URL,"j榜时代")],
    basis:[course("线代","基 维数 坐标",925,LINEAR_URL,"j榜时代")],
    tips:[
      course("线代","12 小知识集锦-行列式",1390,LINEAR_URL,"j榜时代"),
      course("线代","13 小知识集锦-矩阵",3702,LINEAR_URL,"j榜时代"),
      course("线代","14 小知识集锦-向量组",2069,LINEAR_URL,"j榜时代"),
      course("线代","15 小知识集锦-线性方程组",3015,LINEAR_URL,"j榜时代"),
      course("线代","16 小知识集锦-特征值和特征向量的定义、求法及性质",1661,LINEAR_URL,"j榜时代"),
      course("线代","17 小知识集锦-相似矩阵的定义及性质、可对角化定义及条件",1050,LINEAR_URL,"j榜时代"),
      course("线代","18 小知识集锦-正交矩阵",814,LINEAR_URL,"j榜时代"),
      course("线代","19 小知识集锦-二次型及其矩阵",372,LINEAR_URL,"j榜时代"),
      course("线代","20 小知识集锦-矩阵合同、正定矩阵",2013,LINEAR_URL,"j榜时代")
    ]
  };

  const PHYSICS={
    ch1:[course("大学物理","第1章 运动和力｜课时11 质点运动学",1732,PHYSICS_URL),course("大学物理","第1章 运动和力｜课时12 运动建模及解方程",1420,PHYSICS_URL),course("大学物理","第1章 运动和力｜课时13 牛顿定律和常见力",1050,PHYSICS_URL)],
    ch2:[course("大学物理","第2章 运动的守恒量和守恒定律｜课时14 转动惯量和力矩及其作用",1828,PHYSICS_URL),course("大学物理","第2章 运动的守恒量和守恒定律｜课时15 动量和动量守恒",2004,PHYSICS_URL),course("大学物理","第2章 运动的守恒量和守恒定律｜课时16 角动量和角动量守恒",1123,PHYSICS_URL),course("大学物理","第2章 运动的守恒量和守恒定律｜课时17 做功和能量守恒",1238,PHYSICS_URL)],
    ch3:[course("大学物理","第3章 刚体定轴转动｜第4章 刚体定轴转动 核心",2511,PHYSICS_EXTRA_URL),course("大学物理","第3章 刚体定轴转动｜第4章 拓展",1199,PHYSICS_EXTRA_URL),course("大学物理","第3章 刚体定轴转动｜第4章 习题",1839,PHYSICS_EXTRA_URL)],
    ch4:[course("大学物理","第4章 狭义相对论｜第17章 狭义相对论 核心",3019,PHYSICS_EXTRA_URL),course("大学物理","第4章 狭义相对论｜第17章 拓展",231,PHYSICS_EXTRA_URL),course("大学物理","第4章 狭义相对论｜第17章 习题",1674,PHYSICS_EXTRA_URL)],
    ch5:[course("大学物理","第5章 气体动理论｜课时22 气体与动力学",1014,PHYSICS_URL),course("大学物理","第5章 气体动理论｜课时23 气体动理论二",1049,PHYSICS_URL)],
    ch6:[course("大学物理","第6章 热力学基础｜课时24 热力学第一定律",1598,PHYSICS_URL),course("大学物理","第6章 热力学基础｜课时25 热力学第一定律习题课",538,PHYSICS_URL),course("大学物理","第6章 热力学基础｜课时26 热力学第二定律及热循环效率",930,PHYSICS_URL)],
    ch7:[course("大学物理","第7章 静止电荷的电场｜课时1 电场强度",1438,PHYSICS_URL),course("大学物理","第7章 静止电荷的电场｜课时2 电场通量和高斯定理",1433,PHYSICS_URL),course("大学物理","第7章 静止电荷的电场｜课时3 电势和电势能",1242,PHYSICS_URL),course("大学物理","第7章 静止电荷的电场｜课时4 导体和静电平衡",1562,PHYSICS_URL),course("大学物理","第7章 静止电荷的电场｜课时5 电容器和电解质、电容能量、电场能量",1638,PHYSICS_URL)],
    ch8:[course("大学物理","第8章 恒定电流的磁场｜课时6 磁场强度安培环路定理",1559,PHYSICS_URL),course("大学物理","第8章 恒定电流的磁场｜课时7 安培力、磁矩、磁力矩",1913,PHYSICS_URL),course("大学物理","第8章 恒定电流的磁场｜课时8 磁通量、感生电动势、磁场高斯定理",1451,PHYSICS_URL),course("大学物理","第8章 恒定电流的磁场｜课时9 动生电动势定稿版本",876,PHYSICS_URL)]
  };

  function copy(list){ return list.map(item=>({...item})); }
  function join(...groups){ return groups.flatMap(copy); }

  function hydrateCourseLists(){
    const byDate=Object.fromEntries((window.CIRCUIT_PLAN||[]).map(day=>[day.date,day]));
    const assignments={
      "2026-06-01":join(GAOSHU.m1.slice(0,2)),
      "2026-06-02":join(LINEAR.det),
      "2026-06-03":join(PHYSICS.ch1),
      "2026-06-04":join(GAOSHU.m1.slice(2,4)),
      "2026-06-05":join(LINEAR.inv),
      "2026-06-06":join(PHYSICS.ch2.slice(0,2)),
      "2026-06-07":join(GAOSHU.m2a.slice(0,2)),
      "2026-06-08":join(LINEAR.eq,LINEAR.vector.slice(0,1)),
      "2026-06-09":join(PHYSICS.ch2.slice(2,4)),
      "2026-06-10":join(GAOSHU.m2a.slice(2,3),GAOSHU.m2b),
      "2026-06-11":join(GAOSHU.m3calc,GAOSHU.m3app,LINEAR.vector.slice(1,2),LINEAR.eigen.slice(0,1)),
      "2026-06-12":join(GAOSHU.m4,PHYSICS.ch3),
      "2026-06-13":join(GAOSHU.m5.slice(0,5),LINEAR.eigen.slice(1,4)),
      "2026-06-14":join(PHYSICS.ch4,[noteCourse("高数上补漏","极限、导数、积分基础（可选）","可选补漏",true)]),
      "2026-06-15":join(GAOSHU.m6,LINEAR.basis,LINEAR.tips.slice(0,1)),
      "2026-06-16":join(PHYSICS.ch5,PHYSICS.ch6,GAOSHU.m7.slice(0,3)),
      "2026-06-17":join(LINEAR.tips.slice(1,8),[noteCourse("大学物理","第1—6章框架回顾，整理公式表","轻量复盘",true)]),
      "2026-06-18":[noteCourse("高数下","公式浏览（轻量）"),noteCourse("线代","错题浏览（轻量）"),noteCourse("大学物理","公式轻量浏览","轻量复盘",true)],
      "2026-06-19":[noteCourse("可选轻量","睡前10分钟公式表/错题本","可选",true)],
      "2026-06-20":[noteCourse("可选轻量","睡前10分钟公式表/错题本","可选",true)],
      "2026-06-21":[noteCourse("可选轻量","睡前10分钟公式表/错题本；简单确认电路冲刺资料","可选",true)],
      "2026-06-22":[noteCourse("电路","电路试卷1","试卷",false),noteCourse("高数","公式轻复盘（不超过40分钟）","轻量复盘",true)],
      "2026-06-23":[noteCourse("电路","电路试卷2 + 公式错题大题步骤","冲刺",false)],
      "2026-06-24":[noteCourse("电路","9:00—11:00 电路原理考试","考试",false),noteCourse("大学物理","第7章静电场框架轻量切换","教材预习",true)],
      "2026-06-25":join(PHYSICS.ch7,PHYSICS.ch8,[noteCourse("高数下","薄弱模块回看：二重积分/三重积分/级数任选","轻量复盘",true)]),
      "2026-06-26":[noteCourse("大学物理","试卷1 + 订正公式整理","试卷",false),noteCourse("线代","公式复盘：行列式、矩阵、方程组","轻量复盘",true)],
      "2026-06-27":[noteCourse("大学物理","试卷2 + 订正错题","试卷",false),noteCourse("高数","错题复盘：积分、级数、空间解析几何","轻量复盘",true)],
      "2026-06-28":[noteCourse("线代","试卷1","试卷",false),noteCourse("大学物理","考前公式清单：第1、2、5、6、7、8章","轻量复盘",true)],
      "2026-06-29":[noteCourse("线代","试卷2","试卷",false),noteCourse("大学物理","最后回看：公式、错题、典型题步骤","轻量复盘",true)],
      "2026-06-30":[noteCourse("高数","试卷1","试卷",false),noteCourse("线代","考前公式、错题模板","轻量复盘",true)],
      "2026-07-01":[noteCourse("大学物理","上午大学物理考试","考试",false),noteCourse("线代","下午公式复盘 + 晚上线性代数考试","考试",false)],
      "2026-07-02":[noteCourse("高数","试卷2 + 错题公式常见题型步骤","冲刺",false)],
      "2026-07-03":[noteCourse("高数","上午高等数学考试","考试",false)]
    };
    Object.entries(assignments).forEach(([date,courses])=>{
      if(byDate[date]) byDate[date].courses=courses.map((item,index)=>({...item,id:`${date}-course-${index}`}));
    });
  }

  function ready(){
    return typeof PLAN !== "undefined" && Array.isArray(PLAN) &&
      typeof LESSON_TITLES !== "undefined" &&
      typeof render === "function" && typeof normalize === "function";
  }
  function courseKey(date,index){ return `course-${date}-${index}`; }
  function secondsOfCourse(course){ return Number(course&&course.durationSeconds ? course.durationSeconds : 0); }
  function dayCourseSeconds(day){ return (day.courses||[]).reduce((sum,course)=>sum+secondsOfCourse(course),0); }
  function lessonSeconds(no){ return Number(BILI_DURATIONS && BILI_DURATIONS[no] ? BILI_DURATIONS[no] : 0); }
  function dayLessonSeconds(day){ return (day.lessonNos||[]).reduce((sum,no)=>sum+lessonSeconds(no),0); }
  function plainDuration(sec){
    sec=Number(sec||0);
    const h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60),s=Math.floor(sec%60);
    if(h) return `${h}小时${m}分${s}秒`;
    return `${m}分${s}秒`;
  }
  function courseDurationText(course){
    const sec=secondsOfCourse(course);
    return sec?plainDuration(sec):"未录入";
  }
  function dayTotalSeconds(day){ return dayLessonSeconds(day)+dayCourseSeconds(day); }
  function watchedSeconds(data){
    const seenLessons=new Set();
    return PLAN.reduce((sum,day)=>{
      (day.lessonNos||[]).forEach(no=>{
        if(!seenLessons.has(no)&&data.videos[lessonId(no)]){
          seenLessons.add(no);
          sum+=lessonSeconds(no);
        }
      });
      (day.courses||[]).forEach((course,index)=>{ if(data.videos[courseKey(day.date,index)]) sum+=secondsOfCourse(course); });
      return sum;
    },0);
  }
  function allCourseSeconds(){
    return PLAN.reduce((sum,day)=>sum+dayCourseSeconds(day),0);
  }
  function allLessonSeconds(){
    const seen=new Set();
    return PLAN.reduce((sum,day)=>{
      (day.lessonNos||[]).forEach(no=>{
        if(!seen.has(no)){ seen.add(no); sum+=lessonSeconds(no); }
      });
      return sum;
    },0);
  }

  function apply(){
    if(!ready()) return;
    hydrateCourseLists();
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

    if(!window.__extendedDurationFnsApplied){
      window.__extendedDurationFnsApplied=true;
      getDayDurationText=function(day){
        const sec=dayTotalSeconds(day);
        if(sec) return plainDuration(sec);
        if(day.lessonNos&&day.lessonNos.length&&!biliDurationsLoaded) return "读取中";
        return "0分0秒";
      };
      getTotalRealSeconds=function(){ return allLessonSeconds()+allCourseSeconds(); };
      getRemainingRealSeconds=function(){
        const data=normalize(load());
        return Math.max(0,getTotalRealSeconds()-watchedSeconds(data));
      };
      refreshRealDurationTexts=function(){
        document.querySelectorAll("[data-day-duration]").forEach(el=>{
          const day=PLAN.find(x=>x.date===el.getAttribute("data-day-duration"));
          if(day) el.textContent="网课："+getDayDurationText(day);
        });
        if(els.leftVideo) els.leftVideo.textContent=getTotalRealSeconds()?plainDuration(getRemainingRealSeconds()):"读取中";
      };
    }

    if(typeof courseHtml === "function" && !window.__extendedCourseHtmlApplied){
      window.__extendedCourseHtmlApplied=true;
      courseHtml=function(day){
        const hasLessons=day.lessonNos&&day.lessonNos.length;
        const hasCourses=day.courses&&day.courses.length;
        if(!hasLessons&&!hasCourses) return "";
        const data=normalize(load());
        const lessonItems=(day.lessonNos||[]).map(no=>{
          const id=lessonId(no),done=!!data.videos[id],started=data.videoStart[id]?"已开始计时":"未开始";
          return `<div class="lesson-item"><div class="lesson-top"><div><div class="lesson-name">电路｜课时${String(no).padStart(2,"0")} ${esc(lessonTitle(no))}</div><div class="lesson-meta">时长：${getLessonDurationText(no)}｜bilibili｜${started}｜达到约90%时长可自动打卡</div></div><span class="lesson-done ${done?"ok":""}">${done?"已完成":"未完成"}</span></div><div class="lesson-actions"><button type="button" data-open-lesson="${day.date}|${no}">去B站观看</button><button type="button" data-mark-lesson="${day.date}|${no}">我已看完</button></div></div>`;
        }).join("");
        const courseItems=(day.courses||[]).map((course,index)=>{
          const id=courseKey(day.date,index);
          const done=!!data.videos[id];
          const optional=course.optional?"｜可选":"";
          const source=course.source||"textbook";
          return `<div class="lesson-item"><div class="lesson-top"><div><div class="lesson-name">${esc(course.subject||"复习")}｜${esc(course.title||"")}</div><div class="lesson-meta">时长：${courseDurationText(course)}｜${esc(source)}${optional}</div></div><span class="lesson-done ${done?"ok":""}">${done?"已完成":"未完成"}</span></div><div class="lesson-actions"><button type="button" data-open-course="${day.date}|${index}">打开网课/教材</button><button type="button" data-mark-course="${day.date}|${index}">我已看完</button></div></div>`;
        }).join("");
        return `<div class="course-box"><div class="course-title">今日网课/教材</div><div class="notice">今日网课合计：${getDayDurationText(day)}</div><div class="lesson-list">${lessonItems}${courseItems}</div></div>`;
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
          data.videos[courseKey(date,indexText)]=true;
          const lessonDone=!(day.lessonNos&&day.lessonNos.length)||day.lessonNos.every(no=>data.videos[lessonId(no)]);
          const courseDone=day.courses.every((_,idx)=>data.videos[courseKey(date,idx)]);
          if(lessonDone&&courseDone&&day.checks&&day.checks.length) data.checks[taskKey(date,0)]=true;
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
