import{v as g,e as a,s,q as l,a6 as m,j as L,aR as y,g as I,w as v,bi as C}from"./index-2f97b159.js";function A(){const t=g(),o=a(s("pageId")),n=a(s("doenetId")),i=a(l),d=a(m);async function c(){let r={doenetML:d,pageId:o,courseId:i,saveAsCid:!0};const{data:e}=await I.post("/api/saveDoenetML.php",r);if(!e.success){console.error(e.message),t(e.message,v.ERROR);return}let p=e.cid,u=`<copy uri="doenet:doenetId=${n}&pageId=${o}&cid=${p}" />`;C(u)}return L(y,{width:"menu",dataTest:"Copy Page Link",value:"Copy Page Link",onClick:c})}export{A as default};