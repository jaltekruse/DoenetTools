import{ao as c,bl as h,r as u,j as r,bn as m,a as p}from"./index-f8d734dc.js";import{s}from"./css-14ccef8c.js";const C=c.memo(function(l){let{name:y,id:t,SVs:e,children:n,actions:a,callAction:o}=h(l),d=b=>{o({action:a.recordVisibilityChange,args:{isVisible:b}})};if(u.useEffect(()=>()=>{o({action:a.recordVisibilityChange,args:{isVisible:!1}})},[]),e.hidden)return null;const i={width:s(e.width),height:s(e.height),borderCollapse:"collapse",borderColor:"var(--canvastext)",borderRadius:"var(--mainBorderRadius)",tableLayout:"fixed"};return e.top!=="none"&&(i.borderTopStyle="solid",e.top==="minor"?i.borderTopWidth="thin":e.top==="medium"?i.borderTopWidth="medium":i.borderTopWidth="thick"),r(m,{partialVisibility:!0,onChange:d,children:p("div",{style:{margin:"12px 0"},children:[r("a",{name:t}),r("table",{id:t,style:i,children:r("tbody",{children:n})})]})})});export{C as default};
