import{e as l,s,R as n,p as i,g as r,ag as t}from"./index-20ecac54.js";function m(){const o=l(s("doenetId")),a=n(i);return r.get("/api/umn/shibToJWT.php",{params:{doenetId:o}}).then(({data:e})=>{if(console.log("data",e),e.success){if(!e.isEnrolled)return console.log("ERROR!"),null;e.needToClearOutPreviousUser?(localStorage.clear(),t().then(()=>{a({page:"placementexam",tool:"exam",view:"",params:{doenetId:o}})})):a({page:"placementexam",tool:"exam",view:"",params:{doenetId:o}})}}),null}export{m as default};
