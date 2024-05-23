import{q as f,R,u as y,r as h,a as o,V as v,F as u,at as m}from"./index-CrSqH__w.js";import{a as k}from"./composites-45ca3f18-Kun0wLiJ.js";const S=f.span`
    // display: block;
    // margin: SVs.open ? 12px 4px 0px 4px : 12px 4px 12px 4px;
    // padding: 6px;
    // border: 2px solid black;
    // border-top-left-radius: 5px;
    // border-top-right-radius: 5px;
    // border-bottom-left-radius: SVs.open ? 0px : 5px;
    // border-bottom-right-radius: SVs.open ? 0px : 5px;
    // background-color: var(--mainGray);
    // cursor: pointer;
    &: focus {
        outline: 2px solid var(--canvastext);
        outline-offset: 2px;
    }
`,A=R.memo(function(b){let{name:V,id:s,SVs:e,children:a,actions:i,callAction:t}=y(b),g=n=>{t({action:i.recordVisibilityChange,args:{isVisible:n}})};h.useEffect(()=>()=>{t({action:i.recordVisibilityChange,args:{isVisible:!1}})},[]);let d="open";if(e.hidden)return null;let p,c=null,x={display:"none"},r,l;return e.open?(e._compositeReplacementActiveRange&&(a=k({children:a,compositeReplacementActiveRange:e._compositeReplacementActiveRange,startInd:0,endInd:a.length-1})),p=o.jsx(u,{icon:m}),d="close",c=a,x={display:"block",margin:"0px 4px 12px 4px",padding:"6px",border:"2px solid var(--canvastext)",borderTop:"0px",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px",backgroundColor:"var(--canvas)"},l=n=>{n.key==="Enter"&&t({action:i.closeSolution})},e.canBeClosed?r=()=>{t({action:i.closeSolution})}:r=()=>{}):(p=o.jsx(u,{icon:m,rotation:90}),r=()=>{t({action:i.revealSolution})},l=n=>{n.key==="Enter"&&t({action:i.revealSolution})}),o.jsx(v,{partialVisibility:!0,onChange:g,children:o.jsxs("aside",{id:s,style:{margin:"12px 0"},children:[o.jsx("a",{name:s}),o.jsxs(S,{style:{display:"block",margin:e.open?"12px 4px 0px 4px":"12px 4px 12px 4px",padding:"6px",border:"2px solid var(--canvastext)",borderTopLeftRadius:"5px",borderTopRightRadius:"5px",borderBottomLeftRadius:e.open?"0px":"5px",borderBottomRightRadius:e.open?"0px":"5px",backgroundColor:"var(--mainGray)",cursor:"pointer"},tabIndex:"0",id:s+"_button",onClick:r,onKeyDown:l,children:[p," ",e.sectionName," ",e.message," (click to"," ",d,")"]}),o.jsx("span",{style:x,children:c})]})})});export{A as default};
