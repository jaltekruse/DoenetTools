import{ao as p,bl as y,r as g,j as e,bn as f,a as r}from"./index-2f97b159.js";import{s as c}from"./css-14ccef8c.js";const j=p.memo(function(d){let{name:C,id:s,SVs:t,children:V,actions:n,callAction:l}=y(d),m=i=>{l({action:n.recordVisibilityChange,args:{isVisible:i}})};if(g.useEffect(()=>()=>{l({action:n.recordVisibilityChange,args:{isVisible:!1}})},[]),t.hidden)return null;const u={width:c(t.width),height:c(t.height),borderCollapse:"collapse",borderColor:"black",borderRadius:"var(--mainBorderRadius)"};let o=["mean","stdev","variance","stderr","count","minimum","quartile1","median","quartile3","maximum","range","sum"].filter(i=>i in t.summaryStatistics),h=e("tr",{children:o.map((i,a)=>e("th",{children:i},a))}),b=e("tr",{children:o.map((i,a)=>e("td",{children:t.summaryStatistics[i]},a))});return e(f,{partialVisibility:!0,onChange:m,children:r("div",{style:{margin:"12px 0"},children:[e("a",{name:s}),r("p",{children:["Summary statistics of ",t.columnName]}),e("table",{id:s,style:u,children:r("tbody",{children:[h,b]})})]})})});export{j as default};