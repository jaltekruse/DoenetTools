import{e as d,s as f,r as s,f as p,u as m,j as l,F as g,D as v,g as w}from"./index-20ecac54.js";function h(y){const t=d(f("doenetId")),[i,o]=s.useState(null),[r,a]=s.useState(null);let n=p(),c=m();return s.useEffect(()=>{const u=document.title;return(async()=>{let e=await w.get("/api/getCidForAssignment.php",{params:{doenetId:t,latestAttemptOverrides:!1,publicOnly:!0}});!e.data.success||!e.data.cid?(o(null),e.data.cid?a(`Error loading activity: ${e.data.message}`):a("Error loading activity: public content not found")):(o(e.data.cid),a(null),document.title=`${e.data.label} - Doenet`)})().catch(console.error),()=>{document.title=u}},t),r?l("h1",{children:r}):i?l(g,{children:l(v,{cid:i,activityId:t,flags:{showCorrectness:!0,readOnly:!1,solutionDisplayMode:"button",showFeedback:!0,showHints:!0,autoSubmit:!1,allowLoadState:!1,allowSaveState:!1,allowLocalState:!1,allowSaveSubmissions:!1,allowSaveEvents:!1},idsIncludeActivityId:!1,paginate:!0,location:c,navigate:n,linkSettings:{viewURL:"/public?",editURL:"/public?tool=editor",useQueryParameters:!0}},`activityViewer${t}`)}):null}export{h as default};
