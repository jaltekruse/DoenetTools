import{aw as c,bn as h,r as m,j as r,a as p}from"./index-6c514841.js";import{s}from"./css-14ccef8c.js";import{V as u}from"./visibility-sensor-e86706d4.js";const C=c.memo(function(l){let{name:y,id:t,SVs:e,children:n,actions:a,callAction:o}=h(l),d=b=>{o({action:a.recordVisibilityChange,args:{isVisible:b}})};if(m.useEffect(()=>()=>{o({action:a.recordVisibilityChange,args:{isVisible:!1}})},[]),e.hidden)return null;const i={width:s(e.width),height:s(e.height),borderCollapse:"collapse",borderColor:"var(--canvastext)",borderRadius:"var(--mainBorderRadius)",tableLayout:"fixed"};return e.top!=="none"&&(i.borderTopStyle="solid",e.top==="minor"?i.borderTopWidth="thin":e.top==="medium"?i.borderTopWidth="medium":i.borderTopWidth="thick"),r(u,{partialVisibility:!0,onChange:d,children:p("div",{style:{margin:"12px 0"},children:[r("a",{name:t}),r("table",{id:t,style:i,children:r("tbody",{children:n})})]})})});export{C as default};