import{ao as k,bl as v,r as C,j as n,bn as R,a as m,h as H,H as h,bH as V}from"./index-f8d734dc.js";import{b as B}from"./index-47ca4f11.js";const L=H.span`
  &: focus {
    outline: 2px solid var(--canvastext);
    outline-offset: 2px;
  }
`,w=k.memo(function(g){var f;let{name:E,id:s,SVs:e,children:a,actions:t,callAction:o}=v(g),y=i=>{o({action:t.recordVisibilityChange,args:{isVisible:i}})};if(C.useEffect(()=>()=>{o({action:t.recordVisibilityChange,args:{isVisible:!1}})},[]),!e.showHints)return null;let r;if(e.titleChildName){for(let[i,l]of a.entries())if(((f=l==null?void 0:l.props)==null?void 0:f.componentInstructions.componentName)===e.titleChildName){r=a[i],a.splice(i,1);break}}r||(r=e.title);let p=n(h,{icon:V}),c=null,d={display:"none"},x=()=>{o({action:t.revealHint})},b=i=>{i.key==="Enter"&&o({action:t.revealHint})},u="open";return e.open&&(u="close",p=n(h,{icon:B}),c=a,d={display:"block",margin:"0px 4px 12px 4px",padding:"6px",border:"2px solid var(--canvastext)",borderTop:"0px",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px",backgroundColor:"var(--canvas)"},b=i=>{i.key==="Enter"&&o({action:t.closeHint})},x=()=>{o({action:t.closeHint})}),n(R,{partialVisibility:!0,onChange:y,children:m("aside",{id:s,children:[n("a",{name:s}),m(L,{style:{display:"block",margin:e.open?"12px 4px 0px 4px":"12px 4px 12px 4px",padding:"6px",border:"2px solid var(--canvastext)",borderTopLeftRadius:"5px",borderTopRightRadius:"5px",borderBottomLeftRadius:e.open?"0px":"5px",borderBottomRightRadius:e.open?"0px":"5px",backgroundColor:"var(--mainGray)",cursor:"pointer"},tabIndex:"0","data-test":"hint-heading",onClick:x,onKeyDown:b,children:[" ",p," ",r," (click to ",u,")"]}),n("span",{style:d,children:c})]},s)})});export{w as default};
