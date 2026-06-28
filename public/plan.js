// 6.27—6.28 大学物理两天冲刺计划数据
// 只覆盖运行时计划，不重做 UI，不删除原有打卡/导出/云同步/localStorage 功能。
window.CIRCUIT_LESSON_TITLES={};

const PHYSICS_PLAN_VERSION="physics-cram-20260627-v2";
const PHYSICS_URL="https://www.bilibili.com/cheese/play/ss655321602?bsource=link_copy";
const PHYSICS_EXTRA_URL="https://www.bilibili.com/video/BV1G4wqz7EpN/?share_source=copy_web&vd_source=ec2f99ae8aa5b390c958387df1b0d10b";

function seconds(h=0,m=0,s=0){return h*3600+m*60+s;}
function durationText(sec){
  sec=Number(sec||0);
  const h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60),s=Math.floor(sec%60);
  if(h) return `${h}小时${m}分${s}秒`;
  return `${m}分${s}秒`;
}
function cramCourse({subject="大学物理",title,lessons,url=PHYSICS_URL,source="bilibili",durationSeconds,speed=1.5,watchSeconds,noteSeconds=0,practiceSeconds=0,totalSeconds,outline}){
  const expectedWatch=Math.ceil(Number(durationSeconds||0)/speed);
  return {
    subject,
    title,
    lessons,
    url,
    source,
    durationSeconds:Number(durationSeconds||0),
    speed,
    watchSeconds:Number(watchSeconds||expectedWatch),
    noteSeconds:Number(noteSeconds||0),
    practiceSeconds:Number(practiceSeconds||0),
    totalSeconds:Number(totalSeconds||expectedWatch+noteSeconds+practiceSeconds),
    outline
  };
}

const COURSES={
  ch1Front:cramCourse({
    title:"第1章运动学网课与例题｜矢量、位移/速度/加速度、直线/曲线运动",
    lessons:"课时11 质点运动学 + 课时12 运动建模及解方程",
    durationSeconds:seconds(0,52,32),
    speed:1.5,
    watchSeconds:seconds(0,35,1),
    noteSeconds:seconds(1,9,59),
    practiceSeconds:seconds(1,15,0),
    totalSeconds:seconds(3,0,0),
    outline:"矢量标积/矢积；位移、速度、加速度微积分关系；运动学题；曲线运动描述。"
  }),
  ch1Back:cramCourse({
    title:"第1章牛顿定律网课与例题｜自然坐标系、相对运动、牛顿三定律",
    lessons:"课时13 牛顿定律和常见力",
    durationSeconds:seconds(0,17,30),
    speed:1.5,
    watchSeconds:seconds(0,11,40),
    noteSeconds:seconds(0,18,20),
    practiceSeconds:seconds(0,30,0),
    totalSeconds:seconds(1,0,0),
    outline:"自然坐标系；相对运动；牛顿三大定律应用。"
  }),
  ch2:cramCourse({
    title:"第2章动量、能量和角动量守恒",
    lessons:"课时14 转动惯量和力矩及其作用 + 课时15 动量和动量守恒 + 课时16 角动量和角动量守恒 + 课时17 做功和能量守恒",
    durationSeconds:seconds(1,43,13),
    speed:1.5,
    watchSeconds:seconds(1,8,49),
    noteSeconds:seconds(1,21,11),
    practiceSeconds:seconds(1,30,0),
    totalSeconds:seconds(4,0,0),
    outline:"动量定理/守恒；动能定理；功能原理；机械能守恒；角动量定理/守恒。"
  }),
  ch3:cramCourse({
    title:"第3章刚体定轴转动",
    lessons:"补充视频刚体定轴转动核心 + 拓展 + 习题",
    url:PHYSICS_EXTRA_URL,
    durationSeconds:seconds(1,32,29),
    speed:1.5,
    watchSeconds:seconds(1,1,39),
    noteSeconds:seconds(0,43,21),
    practiceSeconds:seconds(1,15,0),
    totalSeconds:seconds(3,0,0),
    outline:"只保留考试要求刚体内容：转动惯量、定轴转动定律、转动动能、刚体角动量、角动量守恒。"
  }),
  ch5:cramCourse({
    title:"第5章气体动理论",
    lessons:"课时22 气体与动力学 + 课时23 气体动理论二",
    durationSeconds:seconds(0,34,23),
    speed:1.5,
    watchSeconds:seconds(0,22,56),
    noteSeconds:seconds(0,22,4),
    practiceSeconds:seconds(0,45,0),
    totalSeconds:seconds(1,30,0),
    outline:"理想气体物态方程；理想气体内能；基础计算题。"
  }),
  ch6Start:cramCourse({
    title:"第6章热力学第一定律入门",
    lessons:"课时24 热力学第一定律",
    durationSeconds:seconds(0,26,38),
    speed:1.5,
    watchSeconds:seconds(0,17,46),
    noteSeconds:seconds(0,27,14),
    practiceSeconds:seconds(0,45,0),
    totalSeconds:seconds(1,30,0),
    outline:"热力学第一定律；功、热量、内能变化；基础过程判断。"
  }),
  ch6Finish:cramCourse({
    title:"第6章准静态过程与熵增加",
    lessons:"课时25 热力学第一定律习题课 + 课时26 热力学第二定律及热循环效率",
    durationSeconds:seconds(0,24,28),
    speed:1.5,
    watchSeconds:seconds(0,16,19),
    noteSeconds:seconds(0,28,41),
    practiceSeconds:seconds(0,45,0),
    totalSeconds:seconds(1,30,0),
    outline:"等体、等压、等温、绝热过程；熵增加原理；典型计算题。"
  }),
  ch7:cramCourse({
    title:"第7章静止电荷的电场",
    lessons:"课时1 电场强度 + 课时2 电场通量和高斯定理 + 课时3 电势和电势能 + 课时4 导体和静电平衡 + 课时5 电容器和电解质、电容能量、电场能量",
    durationSeconds:seconds(2,1,53),
    speed:1.5,
    watchSeconds:seconds(1,21,16),
    noteSeconds:seconds(1,38,44),
    practiceSeconds:seconds(1,30,0),
    totalSeconds:seconds(4,30,0),
    outline:"电场强度；场强叠加；电势/电势差；高斯定律；D/E/P关系；有电介质时的高斯定理。"
  })
};

window.CIRCUIT_PLAN=[
  {
    date:"2026-06-27",show:"6.27",type:"大物冲刺第1天",cls:"study",chapter:"大学物理：第1—3章力学冲刺",lessonNos:[],priority:"S级",plannedHours:12,fitness:false,
    timeBlocks:[
      {label:"上午 09:00—12:00（3小时）",detail:"第1章前半：矢量标积/矢积；位移、速度、加速度微积分关系；直线运动基本题型；曲线运动基本描述。看第1章运动学相关网课，整理公式并做基础题。"},
      {label:"下午 14:00—20:00（6小时）",detail:"14:00—15:00 完成第1章后半：自然坐标系、相对运动、牛顿三大定律应用；15:00—19:00 完成第2章：动量、能量、机械能、角动量守恒；19:00—20:00 整理第1、2章公式和核心题型。"},
      {label:"晚上 22:30—次日01:30（3小时）",detail:"完成第3章刚体部分：转动惯量、定轴转动定律、转动动能、刚体角动量、角动量守恒和典型题。6月27日结束时力学部分必须全部完成。"}
    ],
    morning:"09:00—12:00：第1章前半。",afternoon:"14:00—20:00：第1章后半 + 第2章 + 第1、2章整理。",night1:"22:30—01:30：第3章刚体。",night2:"不安排额外学习。",
    task:"12小时完成力学部分：第1章运动和力、第2章守恒量和守恒定律、第3章刚体定轴转动。",
    practice:"运动学题、牛顿定律题、动量/能量/角动量守恒题、刚体定轴转动题。",
    review:"第1—3章公式、守恒条件、刚体定轴转动题型清单。",
    reviewLabel:"01:30 收尾复盘",
    adjust:"不把第3章留到6月28日；如果时间紧，优先保运动学公式、守恒定律适用条件和刚体定轴转动公式。",
    checks:["09:00—12:00 第1章前半完成","14:00—15:00 第1章后半完成","15:00—19:00 第2章完成","19:00—20:00 第1、2章公式整理完成","22:30—01:30 第3章刚体完成"],
    checkHours:[3,1,4,1,3],
    completedChapters:["第1章 运动和力","第2章 运动的守恒量和守恒定律","第3章 刚体部分"],
    courses:[COURSES.ch1Front,COURSES.ch1Back,COURSES.ch2,COURSES.ch3]
  },
  {
    date:"2026-06-28",show:"6.28",type:"大物冲刺第2天",cls:"study",chapter:"大学物理：第5—7章热学/电场 + 总复习",lessonNos:[],priority:"S级",plannedHours:12,fitness:false,
    timeBlocks:[
      {label:"上午 09:00—12:00（3小时）",detail:"09:00—10:30 完成第5章：理想气体物态方程、理想气体内能和基础计算题；10:30—12:00 开始第6章：热力学第一定律，功、热量、内能变化关系，基础过程判断。"},
      {label:"下午 14:00—20:00（6小时）",detail:"14:00—15:30 完成第6章：理想气体准静态过程、等体/等压/等温/绝热过程、熵增加原理和典型计算题；15:30—20:00 完成第7章静止电荷的电场：场强、电势、高斯定律、D/E/P关系、电介质高斯定理及典型题。"},
      {label:"晚上 22:30—次日01:30（3小时）",detail:"22:30—00:00 六章公式总复习；00:00—01:30 考前核心题型训练：运动学、牛顿定律、动量/能量守恒、刚体、热力学过程、场强/电势/高斯定律。01:30结束时全部考试范围完成。"}
    ],
    morning:"09:00—12:00：第5章 + 第6章开头。",afternoon:"14:00—20:00：第6章完成 + 第7章。",night1:"22:30—01:30：公式总复习 + 核心题型训练。",night2:"不安排额外学习。",
    task:"12小时完成热学、电场和总复习：第5章、第6章、第7章、六章公式回顾和核心题型训练。",
    practice:"气体动理论题、热力学过程题、场强/电势/高斯定律题、六章综合核心题型。",
    review:"第1、2、3、5、6、7章公式表和考前题型步骤。",
    reviewLabel:"01:30 最终复盘",
    adjust:"不延续到6月29日；如果时间紧，优先保热力学第一定律应用、熵增加判断、高斯定律和电势计算。",
    checks:["09:00—10:30 第5章完成","10:30—12:00 第6章入门完成","14:00—15:30 第6章完成","15:30—20:00 第7章完成","22:30—00:00 六章公式总复习完成","00:00—01:30 核心题型训练完成"],
    checkHours:[1.5,1.5,1.5,4.5,1.5,1.5],
    completedChapters:["第5章 气体动理论","第6章 热力学基础","第7章 静止电荷的电场","六章公式总复习","考前核心题型训练"],
    courses:[COURSES.ch5,COURSES.ch6Start,COURSES.ch6Finish,COURSES.ch7]
  }
];

(function(){
  function ready(){return typeof PLAN!=="undefined"&&Array.isArray(PLAN)&&typeof render==="function"&&typeof normalize==="function";}
  function courseKey(date,index){return `${PHYSICS_PLAN_VERSION}-course-${date}-${index}`;}
  function courseDurationText(course){return course&&course.durationSeconds?durationText(course.durationSeconds):"未录入";}
  function courseWatchText(course){return course&&course.watchSeconds?durationText(course.watchSeconds):"未录入";}
  function courseTotalText(course){return course&&course.totalSeconds?durationText(course.totalSeconds):"未录入";}
  function dayCourseSeconds(day){return (day.courses||[]).reduce((sum,c)=>sum+Number(c.durationSeconds||0),0);}
  function dayPlannedSeconds(day){return Number(day.plannedHours||0)*3600;}
  function allPlannedHours(){return PLAN.reduce((sum,day)=>sum+Number(day.plannedHours||0),0);}
  function completedHours(data){
    return PLAN.reduce((sum,day)=>sum+(day.checks||[]).reduce((s,_,idx)=>s+(data.checks[taskKey(day.date,idx)]?Number((day.checkHours||[])[idx]||0):0),0),0);
  }
  function completedChapterList(data){
    return PLAN.flatMap(day=>{
      const done=(day.checks||[]).every((_,idx)=>data.checks[taskKey(day.date,idx)]);
      return done?(day.completedChapters||[]):[];
    });
  }
  function allChapterList(){return ["第1章 运动和力","第2章 运动的守恒量和守恒定律","第3章 刚体部分","第5章 气体动理论","第6章 热力学基础","第7章 静止电荷的电场","六章公式总复习","考前核心题型训练"];}
  function resetOldPhysicsState(){
    const data=normalize(load());
    if(data.physicsPlanVersion===PHYSICS_PLAN_VERSION) return;
    ["2026-06-27","2026-06-28"].forEach(date=>{
      Object.keys(data.checks||{}).forEach(k=>{if(k.startsWith(date+"-")) delete data.checks[k];});
    });
    Object.keys(data.videos||{}).forEach(k=>{if(k.includes("2026-06-27")||k.includes("2026-06-28")) delete data.videos[k];});
    data.physicsPlanVersion=PHYSICS_PLAN_VERSION;
    save(data);
  }
  function renderPhysicsSummary(){
    const data=normalize(load());
    const learned=completedHours(data);
    const total=24;
    const remaining=Math.max(0,total-learned);
    const doneChapters=completedChapterList(data);
    const allChapters=allChapterList();
    const undone=allChapters.filter(ch=>!doneChapters.includes(ch));
    const rate=Math.round((learned/total)*100);
    const html=`<section class="panel" id="physicsCramSummary"><h2>两天大物冲刺总览 <span style="float:right">${rate}%</span></h2><div class="notice">剩余学习天数：2天｜总可用时间：24小时｜6月27日计划时长：12小时｜6月28日计划时长：12小时｜已学习时间：${learned.toFixed(1).replace(/\.0$/,"")}小时｜剩余学习时间：${remaining.toFixed(1).replace(/\.0$/,"")}小时</div><div class="key-points"><div>当前总体进度：${rate}%</div><div>大纲范围：第1、2、3、5、6、7章</div><div>只保留本次考试大纲范围</div><div>6月28日01:30前完成全部范围</div></div><div class="notice"><b>已完成章节：</b>${doneChapters.length?doneChapters.join("、"):"暂无（6月27日从0开始）"}<br><b>未完成章节：</b>${undone.length?undone.join("、"):"全部完成"}<br><b>进度节点：</b>6.27上午约12%—15%；6.27下午约35%；6.27晚上约50%；6.28上午约60%；6.28下午约85%；6.28晚上100%。</div></section>`;
    const existing=document.getElementById("physicsCramSummary");
    if(existing) existing.outerHTML=html;
    else {
      const cloud=document.querySelector(".cloud-sync-panel");
      if(cloud) cloud.insertAdjacentHTML("beforebegin",html);
    }
    if(els.leftVideo) els.leftVideo.textContent=durationText(Math.max(0,PLAN.reduce((s,d)=>s+dayCourseSeconds(d),0)-watchedSeconds(data)));
    if(els.progressLabel) els.progressLabel.textContent=rate+"%";
    if(els.progressBar) els.progressBar.style.width=rate+"%";
    if(els.todayTip) els.todayTip.textContent="两天总可用时间24小时；6月27日完成第1—3章，6月28日完成第5—7章、公式总复习和核心题型训练。";
  }
  function watchedSeconds(data){return PLAN.reduce((sum,day)=>sum+(day.courses||[]).reduce((s,c,idx)=>s+(data.videos[courseKey(day.date,idx)]?Number(c.durationSeconds||0):0),0),0);}
  function apply(){
    if(!ready()) return false;
    document.title="6.27—6.28 大学物理24小时冲刺打卡网站";
    const h1=document.querySelector(".hero h1"); if(h1) h1.textContent="6.27—6.28 大学物理24小时冲刺打卡网站";
    const heroText=document.querySelector(".hero p"); if(heroText) heroText.textContent="目标：6月27日从0开始，两天24小时完成大学物理第1、2、3、5、6、7章考试大纲；不延续到6月29日以后。";
    const chips=document.querySelector(".chips"); if(chips) chips.innerHTML='<span class="chip">剩余学习天数：2天</span><span class="chip">总可用时间：24小时</span><span class="chip">6.27：12小时力学</span><span class="chip">6.28：12小时热学+电场+总复习</span><span class="chip">大物进度从0开始</span>';
    PLAN.splice(0,PLAN.length,...window.CIRCUIT_PLAN);
    resetOldPhysicsState();
    if(!window.__physicsCramApplied){
      window.__physicsCramApplied=true;
      const baseRender=render;
      render=function(){baseRender();renderPhysicsSummary();};
      getDayDurationText=function(day){return `计划${Number(day.plannedHours||0)}小时｜网课原时长${durationText(dayCourseSeconds(day))}`;};
      getTotalRealSeconds=function(){return PLAN.reduce((s,d)=>s+dayCourseSeconds(d),0);};
      getRemainingRealSeconds=function(){return Math.max(0,getTotalRealSeconds()-watchedSeconds(normalize(load())));};
      refreshRealDurationTexts=function(){document.querySelectorAll("[data-day-duration]").forEach(el=>{const day=PLAN.find(x=>x.date===el.getAttribute("data-day-duration"));if(day)el.textContent=getDayDurationText(day);});if(els.leftVideo)els.leftVideo.textContent=durationText(getRemainingRealSeconds());};
      courseHtml=function(day){
        if(!day.courses||!day.courses.length) return "";
        const data=normalize(load());
        const items=day.courses.map((course,index)=>{
          const id=courseKey(day.date,index),done=!!data.videos[id];
          return `<div class="lesson-item"><div class="lesson-top"><div><div class="lesson-name">${esc(course.subject)}｜${esc(course.title)}</div><div class="lesson-meta">对应课时：${esc(course.lessons)}｜原视频时长：${courseDurationText(course)}｜建议${course.speed}倍速：${courseWatchText(course)}｜笔记：${durationText(course.noteSeconds)}｜做题：${durationText(course.practiceSeconds)}｜总预计：${courseTotalText(course)}</div><div class="lesson-meta">大纲对应：${esc(course.outline||"")}</div></div><span class="lesson-done ${done?"ok":""}">${done?"已完成":"未完成"}</span></div><div class="lesson-actions"><button type="button" data-open-course="${day.date}|${index}">打开网课/教材</button><button type="button" data-mark-course="${day.date}|${index}">我已看完</button></div></div>`;
        }).join("");
        return `<div class="course-box"><div class="course-title">今日网课/教材</div><div class="notice">今日网课原时长合计：${durationText(dayCourseSeconds(day))}；倍速观看、笔记和做题已纳入当天${day.plannedHours}小时计划。</div><div class="lesson-list">${items}</div></div>`;
      };
      document.addEventListener("click",event=>{
        const openBtn=event.target.closest("[data-open-course]");
        if(openBtn){const [date,indexText]=openBtn.dataset.openCourse.split("|");const day=PLAN.find(x=>x.date===date);const course=day&&day.courses&&day.courses[Number(indexText)];if(course&&course.url) window.open(course.url,"_blank","noopener");}
        const markBtn=event.target.closest("[data-mark-course]");
        if(markBtn){const [date,indexText]=markBtn.dataset.markCourse.split("|");const data=normalize(load());data.videos[courseKey(date,indexText)]=true;save(data);render();}
      });
    }
    render();
    return true;
  }
  let attempts=0;
  function boot(){if(apply())return;attempts+=1;if(attempts<40)setTimeout(boot,50);else console.warn("大学物理两天冲刺计划未能加载：页面基础脚本尚未就绪");}
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",boot); else boot();
})();
