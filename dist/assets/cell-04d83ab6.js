import{ao as d,bl as s,j as o}from"./index-20ecac54.js";const f=d.memo(function(r){let{name:m,id:l,SVs:e,children:n}=s(r);if(e.hidden)return null;let t={style:{padding:"3px 10px"}};e.colSpan!==1&&(t.colSpan=e.colSpan),e.halign!==null&&(t.style.textAlign=e.halign),e.bottom!=="none"&&(t.style.borderBottomStyle="solid",e.bottom==="minor"?t.style.borderBottomWidth="thin":e.bottom==="medium"?t.style.borderBottomWidth="medium":t.style.borderBottomWidth="thick"),e.right!=="none"&&(t.style.borderRightStyle="solid",e.right==="minor"?t.style.borderRightWidth="thin":e.right==="medium"?t.style.borderRightWidth="medium":t.style.borderRightWidth="thick");let i=n;return i.length===0&&(i=String(e.text)),e.inHeader?o("th",{id:l,...t,children:i}):o("td",{id:l,...t,children:i})});export{f as default};
