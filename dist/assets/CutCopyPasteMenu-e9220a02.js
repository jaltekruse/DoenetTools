import{e,s as p,ab as b,v as I,b4 as f,b5 as h,z as k,j as t,F as j,a as F,aR as u,w as o}from"./index-f8d734dc.js";import{A as g}from"./ActionButtonGroup-e8ceeddc.js";function O(){const n=e(p("courseId")),{copyItems:w,cutItems:i,pasteItems:r}=b(n),a=I();let d=e(f),m=e(h),C=e(k),l=!0,c=!0;return d.length==0&&m.length==0&&(c=!1),C.length==0&&(l=!1),t(j,{children:F(g,{width:"menu",children:[t(u,{width:"menu",value:"Cut",disabled:!l,onClick:()=>{i({successCallback:()=>{},failureCallback:s=>{a(s,o.INFO)}})}}),t(u,{width:"menu",value:"Paste",disabled:!c,onClick:()=>{r({successCallback:()=>{},failureCallback:s=>{a(s,o.INFO)}})}})]})})}export{O as default};
