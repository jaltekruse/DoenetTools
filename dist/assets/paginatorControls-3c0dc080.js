import{ao as s,bl as o,a as c,j as n,B as l}from"./index-f8d734dc.js";const b=s.memo(function(t){let{name:u,id:a,SVs:e,actions:i,callAction:r}=o(t,!1);return e.hidden?null:c("p",{id:a,children:[n("a",{name:a}),n("div",{id:a,margin:"12px 0",style:{display:"inline-block"},children:n(l,{id:a+"_previous",onClick:()=>{r({action:i.setPage,args:{number:e.currentPage-1}})},disabled:e.disabledDirectly||!(e.currentPage>1),value:e.previousLabel})})," "+e.pageLabel," ",e.currentPage," of ",e.numPages+" ",n("div",{id:a,margin:"12px 0",style:{display:"inline-block"},children:n(l,{id:a+"_next",onClick:()=>{r({action:i.setPage,args:{number:e.currentPage+1}})},disabled:e.disabledDirectly||!(e.currentPage<e.numPages),value:e.nextLabel})})]})});export{b as default};
