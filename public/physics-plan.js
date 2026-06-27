// 6.27—6.28 大学物理从零学习冲刺计划
// 使用新网课：《大学物理速成（非物理系）》 BV1G4wqz7EpN
window.CIRCUIT_LESSON_TITLES={};
const PHYSICS_PLAN_VERSION="physics-new-bili-cram-20260627";
const PHYSICS_BVID="BV1G4wqz7EpN";
const PHYSICS_URL=`https://www.bilibili.com/video/${PHYSICS_BVID}`;
function sec(h=0,m=0,s=0){return h*3600+m*60+s;}
function fmt(sec){sec=Number(sec||0);const h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60),s=Math.floor(sec%60);return h?`${h}小时${m}分${s}秒`:`${m}分${s}秒`;}
function page(part,title,durationSeconds){return {part,title,durationSeconds,bvid:PHYSICS_BVID,cid:null,url:`${PHYSICS_URL}?p=${part}`};}
const PHYSICS_CATALOG=[
  page(1,"课程简介",sec(0,5,19)),
  page(2,"第1章 质点运动学 核心",sec(0,35,15)),page(3,"第1章 拓展",sec(0,14,43)),page(4,"第1章 习题",sec(0,20,44)),
  page(5,"第2章 质点动力学（上） 核心",sec(0,32,40)),page(6,"第2章 拓展",sec(0,33,6)),page(7,"第2章 习题",sec(0,27,35)),
  page(8,"第3章 质点动力学（下） 核心",sec(0,45,3)),page(9,"第3章 拓展",sec(0,7,51)),page(10,"第3章 习题",sec(0,24,27)),
  page(11,"第4章 刚体定轴转动 核心",sec(0,41,51)),page(12,"第4章 拓展",sec(0,19,59)),page(13,"第4章 习题",sec(0,30,39)),
  page(14,"第5章 机械振动 核心",sec(0,39,45)),page(15,"第5章 拓展",sec(0,12,8)),page(16,"第5章 习题",sec(0,24,0)),
  page(17,"第6章 机械波 核心",sec(0,53,47)),page(18,"第6章 拓展",sec(0,23,21)),page(19,"第6章 习题",sec(0,33,5)),
  page(20,"第7章 静电场 核心",sec(1,1,17)),page(21,"第7章 拓展",sec(0,10,42)),page(22,"第7章 习题",sec(0,36,38)),
  page(23,"第8章 电势 核心",sec(0,31,25)),page(24,"第8章 拓展",sec(0,7,40)),page(25,"第8章 习题",sec(0,19,52)),
  page(26,"第9章 电场中的导体与电介质 核心",sec(0,50,10)),page(27,"第9章 拓展",sec(0,15,4)),page(28,"第9章 习题",sec(0,25,19)),
  page(29,"第10章 稳恒电流的磁场 核心",sec(0,47,4)),page(30,"第10章 拓展",sec(0,15,52)),page(31,"第10章 习题",sec(0,25,41)),
  page(32,"第11章 磁力与磁介质 核心",sec(0,31,12)),page(33,"第11章 拓展",sec(0,4,18)),page(34,"第11章 习题",sec(0,11,38)),
  page(35,"第12章 电磁感应 核心",sec(0,51,41)),page(36,"第12章 拓展",sec(0,7,7)),page(37,"第12章 习题",sec(0,22,35)),
  page(38,"第13章 分子动理论 核心",sec(0,41,36)),page(39,"第13章 拓展",sec(0,9,53)),page(40,"第13章 习题",sec(0,19,28)),
  page(41,"第14章 热力学定律 核心",sec(0,53,2)),page(42,"第14章 拓展",sec(0,7,9)),page(43,"第14章 习题",sec(0,20,53)),
  page(44,"第15章 光的干涉 核心",sec(0,45,31)),page(45,"第15章 拓展",sec(0,19,51)),page(46,"第15章 习题",sec(0,24,15)),
  page(47,"第16章 光的衍射和偏振 核心",sec(0,27,50)),page(48,"第16章 拓展",sec(0,2,23)),page(49,"第16章 习题",sec(0,9,41)),
  page(50,"第17章 狭义相对论 核心",sec(0,51,2)),page(51,"第17章 拓展",sec(0,3,51)),page(52,"第17章 习题",sec(0,27,54)),
  page(53,"第18章 量子物理基础 核心",sec(0,36,53)),page(54,"第18章 拓展",sec(0,8,37)),page(55,"第18章 习题",sec(0,12,46))
];
function parts(...nums){return nums.map(n=>PHYSICS_CATALOG.find(p=>p.part===n));}
function sumPages(list){return list.reduce((s,p)=>s+Number(p.durationSeconds||0),0);}
function task({label,start,end,hours,outline,pages=[],speed=1.5,notePractice}){
  const originalSeconds=sumPages(pages);
  const watchSeconds=Math.ceil(originalSeconds/speed);
  const totalSeconds=Math.round(hours*3600);
  return {label,start,end,hours,outline,pages,speed,originalSeconds,watchSeconds,notePracticeSeconds:notePractice??Math.max(0,totalSeconds-watchSeconds),totalSeconds};
}
const DAY_627_TASKS=[
  task({label:"第1章质点运动学从零学习",start:"09:00",end:"12:00",hours:3,pages:parts(2,3,4),outline:"观看核心课程；整理矢量、位移/速度/加速度、微分积分关系、直线/曲线运动模型；完成对应习题。"}),
  task({label:"第2章质点动力学（上）从零学习",start:"14:00",end:"16:00",hours:2,pages:parts(5,6,7),outline:"观看核心课程；整理牛顿定律、受力分析与基本模型；完成对应习题。"}),
  task({label:"第3章质点动力学（下）从零学习",start:"16:00",end:"18:00",hours:2,pages:parts(8,9,10),outline:"观看核心课程；整理动量、动能、功、机械能、角动量相关模型；完成对应习题。"}),
  task({label:"守恒定律模型与解题步骤训练",start:"18:00",end:"20:00",hours:2,pages:[],outline:"总结动量定理、动量守恒、动能定理、功能原理、机械能守恒、角动量定理和角动量守恒的解题步骤。"}),
  task({label:"第4章刚体定轴转动从零学习",start:"22:30",end:"次日01:30",hours:3,pages:parts(11,13),outline:"观看核心与习题课程；整理转动惯量、定轴转动定律、转动动能、刚体角动量、角动量守恒；完成典型题。"})
];
const DAY_628_TASKS=[
  task({label:"第13章分子动理论从零学习",start:"09:00",end:"10:30",hours:1.5,pages:parts(38,39,40),outline:"观看核心课程；整理理想气体物态方程、理想气体内能；完成基础计算题。"}),
  task({label:"第14章热力学定律从零学习",start:"10:30",end:"12:00",hours:1.5,pages:parts(41,42,43),outline:"观看核心课程；整理热力学第一定律、准静态过程、熵增加原理；完成对应习题。"}),
  task({label:"第7章静电场从零学习",start:"14:00",end:"15:30",hours:1.5,pages:parts(20,21,22),outline:"观看核心课程；整理电场强度、场强叠加、高斯定律和对称性分析；完成对应习题。"}),
  task({label:"第8章电势从零学习",start:"15:30",end:"16:45",hours:1.25,pages:parts(23,24,25),outline:"观看核心课程；整理电势、电势差、电势计算与典型题步骤。"}),
  task({label:"第9章电场中的导体与电介质从零学习",start:"16:45",end:"18:30",hours:1.75,pages:parts(26,27,28),outline:"观看核心课程；整理D/E/P关系、有电介质时的高斯定理、导体静电平衡模型；完成对应习题。"}),
  task({label:"电场章节模型与典型题训练",start:"18:30",end:"20:00",hours:1.5,pages:[],outline:"总结场强、电势、高斯定律、介质高斯定理的选模型步骤，完成综合题。"}),
  task({label:"六个考试章节公式与模型总整理",start:"22:30",end:"次日00:00",hours:1.5,pages:[],outline:"整理第1、2、3、刚体、第13、14、第7、8、9章公式表与常用模型。"}),
  task({label:"考前核心题型训练",start:"次日00:00",end:"次日01:30",hours:1.5,pages:[],outline:"完成运动学、牛顿定律、守恒、刚体、热学、电场强度/电势/高斯定律核心题型训练。"})
];
function taskText(t){
  const video=t.pages.length?`网课：${t.pages.map(p=>`P${p.part} ${p.title}`).join("；")}。原视频${fmt(t.originalSeconds)}，建议${t.speed}倍速观看约${fmt(t.watchSeconds)}，整理公式/模型与做题${fmt(t.notePracticeSeconds)}，本任务总计${fmt(t.totalSeconds)}。`:"无新视频；用于整理公式、模型和完成核心题型训练。";
  return `${t.start}—${t.end}（${fmt(t.totalSeconds)}）：${t.label}。${video}${t.outline}`;
}
function makeDay(date,show,type,chapter,tasks,completedChapters){
  return {date,show,type,cls:"study",chapter,lessonNos:[],priority:"S级",plannedHours:12,fitness:false,
    timeBlocks:[
      {label:"上午 09:00—12:00（3小时）",detail:tasks.filter(t=>t.start>="09:00"&&t.end<="12:00").map(taskText).join("\n")},
      {label:"下午 14:00—20:00（6小时）",detail:tasks.filter(t=>t.start>="14:00"&&t.end<="20:00").map(taskText).join("\n")},
      {label:"晚上 22:30—次日01:30（3小时）",detail:tasks.filter(t=>t.start==="22:30"||t.start.startsWith("次日")).map(taskText).join("\n")}
    ],
    morning:tasks.filter(t=>t.start>="09:00"&&t.end<="12:00").map(taskText).join("\n"),
    afternoon:tasks.filter(t=>t.start>="14:00"&&t.end<="20:00").map(taskText).join("\n"),
    night1:tasks.filter(t=>t.start==="22:30"||t.start.startsWith("次日")).map(taskText).join("\n"),
    night2:"不安排额外任务。",
    task:"从零学习大学物理考试范围；观看核心课程，整理公式与模型，完成对应习题，总结解题步骤。",
    practice:"核心课程 + 习题课程 + 公式模型整理 + 典型题训练。",
    review:"总结当天公式、模型和解题步骤。",
    reviewLabel:"01:30 总结解题步骤",
    adjust:"不得延后到6月29日；如果时间紧，优先保考试范围内核心课、习题课和公式模型。",
    checks:tasks.map(t=>`${t.start}—${t.end} ${t.label}完成`),
    checkHours:tasks.map(t=>t.hours),
    completedChapters,
    physicsTasks:tasks,
    courses:tasks.flatMap(t=>t.pages.map((p,idx)=>({subject:"大学物理",title:`${t.label}｜${p.title}`,url:p.url,durationSeconds:p.durationSeconds,source:"bilibili",part:p.part,cid:p.cid,taskLabel:t.label,speed:t.speed,watchSeconds:Math.ceil(p.durationSeconds/t.speed),outline:t.outline})))
  };
}
window.CIRCUIT_PLAN=[
  makeDay("2026-06-27","6.27","从零学习第1天","大学物理：力学从零学习（第1、2、3章 + 刚体）",DAY_627_TASKS,["第1章 质点运动学","第2/3章 质点动力学","刚体定轴转动"]),
  makeDay("2026-06-28","6.28","从零学习第2天","大学物理：热学与静电场从零学习 + 题型训练",DAY_628_TASKS,["第13章 分子动理论","第14章 热力学定律","第7章 静电场","第8章 电势","第9章 电场中的导体与电介质","总公式与核心题型"])
];
(function(){
  function ready(){return typeof PLAN!=="undefined"&&Array.isArray(PLAN)&&typeof render==="function"&&typeof normalize==="function";}
  function courseKey(date,index){return `${PHYSICS_PLAN_VERSION}-course-${date}-${index}`;}
  function dayVideoSeconds(day){return (day.courses||[]).reduce((s,c)=>s+Number(c.durationSeconds||0),0);}
  function totalVideoSeconds(){return PLAN.reduce((s,d)=>s+dayVideoSeconds(d),0);}
  function watchedVideoSeconds(data){return PLAN.reduce((sum,day)=>sum+(day.courses||[]).reduce((s,c,i)=>s+(data.videos[courseKey(day.date,i)]?Number(c.durationSeconds||0):0),0),0);}
  function completedHours(data){return PLAN.reduce((sum,day)=>sum+(day.checks||[]).reduce((s,_,idx)=>s+(data.checks[taskKey(day.date,idx)]?Number((day.checkHours||[])[idx]||0):0),0),0);}
  function resetOldPhysicsState(){const data=normalize(load());if(data.physicsPlanVersion===PHYSICS_PLAN_VERSION)return;["2026-06-27","2026-06-28"].forEach(date=>Object.keys(data.checks||{}).forEach(k=>{if(k.startsWith(date+"-"))delete data.checks[k];}));Object.keys(data.videos||{}).forEach(k=>{if(k.includes("2026-06-27")||k.includes("2026-06-28"))delete data.videos[k];});data.physicsPlanVersion=PHYSICS_PLAN_VERSION;save(data);}
  function renderPhysicsSummary(){const data=normalize(load());const learned=completedHours(data);const rate=Math.round(learned/24*100);const done=PLAN.flatMap(day=>(day.checks||[]).every((_,idx)=>data.checks[taskKey(day.date,idx)])?day.completedChapters:[]);const all=PLAN.flatMap(d=>d.completedChapters);const undone=all.filter(x=>!done.includes(x));const html=`<section class="panel" id="physicsSummary"><h2>大学物理两天从零学习计划 <span style="float:right">${rate}%</span></h2><div class="notice">课程：《大学物理速成（非物理系）》｜BV号：${PHYSICS_BVID}｜只安排6月27日、6月28日｜每天12小时｜两天合计24小时｜已学习${learned.toFixed(1).replace(/\.0$/,"")}小时｜剩余${Math.max(0,24-learned).toFixed(1).replace(/\.0$/,"")}小时</div><div class="key-points"><div>上午09:00—12:00</div><div>下午14:00—20:00</div><div>晚上22:30—次日01:30</div><div>考试范围优先核心+习题</div></div><div class="notice"><b>已完成章节：</b>${done.length?done.join("、"):"暂无（从零开始）"}<br><b>未完成章节：</b>${undone.length?undone.join("、"):"全部完成"}<br><b>视频总原时长：</b>${fmt(totalVideoSeconds())}；页面会显示每个分P的P序号、标题、真实时长和跳转链接。</div></section>`;const old=document.getElementById("physicsSummary");if(old)old.outerHTML=html;else{const cloud=document.querySelector(".cloud-sync-panel");if(cloud)cloud.insertAdjacentHTML("beforebegin",html);}if(els.progressLabel)els.progressLabel.textContent=rate+"%";if(els.progressBar)els.progressBar.style.width=rate+"%";if(els.leftVideo)els.leftVideo.textContent=fmt(Math.max(0,totalVideoSeconds()-watchedVideoSeconds(data)));}
  function apply(){if(!ready())return false;document.title="6.27—6.28 大学物理从零学习计划";const h1=document.querySelector(".hero h1");if(h1)h1.textContent="6.27—6.28 大学物理从零学习计划";const hero=document.querySelector(".hero p");if(hero)hero.textContent="使用新网课《大学物理速成（非物理系）》BV1G4wqz7EpN；两天24小时只学习当前考试范围，不把任务延后到6月29日。";const chips=document.querySelector(".chips");if(chips)chips.innerHTML='<span class="chip">6.27：12小时力学</span><span class="chip">6.28：12小时热学+静电场</span><span class="chip">09:00—12:00</span><span class="chip">14:00—20:00</span><span class="chip">22:30—次日01:30</span>';PLAN.splice(0,PLAN.length,...window.CIRCUIT_PLAN);resetOldPhysicsState();if(!window.__newPhysicsPlanApplied){window.__newPhysicsPlanApplied=true;const baseRender=render;render=function(){baseRender();renderPhysicsSummary();};getDayDurationText=function(day){return `计划${day.plannedHours}小时｜视频原时长${fmt(dayVideoSeconds(day))}`;};getTotalRealSeconds=function(){return totalVideoSeconds();};getRemainingRealSeconds=function(){return Math.max(0,totalVideoSeconds()-watchedVideoSeconds(normalize(load())));};refreshRealDurationTexts=function(){document.querySelectorAll("[data-day-duration]").forEach(el=>{const day=PLAN.find(x=>x.date===el.getAttribute("data-day-duration"));if(day)el.textContent=getDayDurationText(day);});if(els.leftVideo)els.leftVideo.textContent=fmt(getRemainingRealSeconds());};courseHtml=function(day){if(!day.courses||!day.courses.length)return"";const data=normalize(load());const items=day.courses.map((course,index)=>{const id=courseKey(day.date,index),done=!!data.videos[id];return `<div class="lesson-item"><div class="lesson-top"><div><div class="lesson-name">${esc(course.subject)}｜P${course.part} ${esc(course.title)}</div><div class="lesson-meta">原视频时长：${fmt(course.durationSeconds)}｜建议${course.speed}倍速约${fmt(course.watchSeconds)}｜cid：${course.cid||"接口读取后更新"}｜任务：${esc(course.taskLabel)}</div><div class="lesson-meta">${esc(course.outline||"")}</div></div><span class="lesson-done ${done?"ok":""}">${done?"已完成":"未完成"}</span></div><div class="lesson-actions"><button type="button" data-open-course="${day.date}|${index}">打开网课</button><button type="button" data-mark-course="${day.date}|${index}">我已看完</button></div></div>`;}).join("");return `<div class="course-box"><div class="course-title">今日新网课</div><div class="notice">今日视频原时长：${fmt(dayVideoSeconds(day))}；核心内容优先，习题配套完成，拓展只安排在考试范围内。</div><div class="lesson-list">${items}</div></div>`;};document.addEventListener("click",event=>{const openBtn=event.target.closest("[data-open-course]");if(openBtn){const [date,indexText]=openBtn.dataset.openCourse.split("|");const day=PLAN.find(x=>x.date===date);const course=day&&day.courses&&day.courses[Number(indexText)];if(course&&course.url)window.open(course.url,"_blank","noopener");}const markBtn=event.target.closest("[data-mark-course]");if(markBtn){const [date,indexText]=markBtn.dataset.markCourse.split("|");const data=normalize(load());data.videos[courseKey(date,indexText)]=true;save(data);render();}});fetch("/api/physics/pages").then(r=>r.ok?r.json():null).then(d=>{if(!d||!d.success||!d.pages)return;d.pages.forEach(apiPage=>{const local=PHYSICS_CATALOG.find(p=>p.part===Number(apiPage.page));if(local){local.title=apiPage.part||local.title;local.durationSeconds=Number(apiPage.duration||local.durationSeconds);local.cid=apiPage.cid||local.cid;local.url=`${PHYSICS_URL}?p=${local.part}`;}});render();}).catch(()=>{});}render();return true;}
  let tries=0;function boot(){if(apply())return;tries+=1;if(tries<40)setTimeout(boot,50);else console.warn("大学物理新网课计划未能加载：页面基础脚本尚未就绪");}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();
})();
