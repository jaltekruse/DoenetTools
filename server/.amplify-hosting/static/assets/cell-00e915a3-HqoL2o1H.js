import{R as d,u as s,a as n}from"./index-DVZ7nus4.js";import{a as m}from"./composites-36499901-DrvBvLfT.js";const f=d.memo(function(r){let{name:h,id:l,SVs:e,children:i}=s(r);if(e.hidden)return null;let t={style:{padding:"3px 10px"}};e.colSpan!==1&&(t.colSpan=e.colSpan),e.halign!==null&&(t.style.textAlign=e.halign),e.bottom!=="none"&&(t.style.borderBottomStyle="solid",e.bottom==="minor"?t.style.borderBottomWidth="thin":e.bottom==="medium"?t.style.borderBottomWidth="medium":t.style.borderBottomWidth="thick"),e.right!=="none"&&(t.style.borderRightStyle="solid",e.right==="minor"?t.style.borderRightWidth="thin":e.right==="medium"?t.style.borderRightWidth="medium":t.style.borderRightWidth="thick"),e._compositeReplacementActiveRange&&(i=m({children:i,compositeReplacementActiveRange:e._compositeReplacementActiveRange,startInd:0,endInd:i.length-1}));let o=i;return o.length===0&&(o=e.text),e.inHeader?n.jsx("th",{id:l,...t,children:o}):n.jsx("td",{id:l,...t,children:o})});export{f as default};