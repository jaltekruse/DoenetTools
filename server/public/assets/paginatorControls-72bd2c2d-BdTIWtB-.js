import{R as l,u as o,a as n,h as s}from"./index-DVZ7nus4.js";const g=l.memo(function(t){let{name:u,id:a,SVs:e,actions:i,callAction:r}=o(t,!1);return e.hidden?null:n.jsxs("p",{id:a,children:[n.jsx("a",{name:a}),n.jsx("div",{id:a,margin:"12px 0",style:{display:"inline-block"},children:n.jsx(s,{id:a+"_previous",onClick:()=>{r({action:i.setPage,args:{number:e.currentPage-1}})},disabled:e.disabledDirectly||!(e.currentPage>1),value:e.previousLabel})})," "+e.pageLabel," ",e.currentPage," of ",e.numPages+" ",n.jsx("div",{id:a,margin:"12px 0",style:{display:"inline-block"},children:n.jsx(s,{id:a+"_next",onClick:()=>{r({action:i.setPage,args:{number:e.currentPage+1}})},disabled:e.disabledDirectly||!(e.currentPage<e.numPages),value:e.nextLabel})})]})});export{g as default};
