import{R as x,u as y,r as V,a as t,V as R}from"./index-DVZ7nus4.js";const S=x.memo(function(g){let{name:C,id:s,SVs:i,children:n,actions:a,callAction:r}=y(g),c=e=>{r({action:a.recordVisibilityChange,args:{isVisible:e}})};if(V.useEffect(()=>()=>{r({action:a.recordVisibilityChange,args:{isVisible:!1}})},[]),i.hidden)return null;let l=[];const m=i.margins[0],f=i.margins[1],u=n.length;for(let[e,d]of n.entries()){let p=i.widths[e],h=m,o=f;e>0&&(h+=i.gapWidth/2),e<u-1&&(o+=i.gapWidth/2),l.push(t.jsx("span",{style:{marginLeft:`${h}%`,marginRight:`${o}%`,width:`${p}%`},children:d},d.key))}return t.jsx(R,{partialVisibility:!0,onChange:c,children:t.jsxs("div",{id:s,style:{display:"flex",maxWidth:"850px",margin:"12px 0"},children:[t.jsx("a",{name:s}),l]})})});export{S as default};
