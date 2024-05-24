import{q as r,R as p,u as x,r as m,a as e,V as b,F as u}from"./index-CrSqH__w.js";import{f}from"./index-999c2cad-BYY6JjWU.js";import{a as g}from"./composites-45ca3f18-Kun0wLiJ.js";const v=r.aside`
    background-color: var(--canvas);
    margin: 0px 4px 12px 4px;
    padding: 1em;
    border: 2px solid var(--canvastext);
    border-top: 0px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    //   &: focus {
    //   outline: 2px solid var(--canvastext);
    //   outline-offset: 2px;
    //  }
`,h=r.span`
    display: block;
    margin: 12px 4px 0px 4px;
    padding: 6px;
    border: 2px solid var(--canvastext);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: var(--mainGray);
    &: focus {
        outline: 2px solid var(--canvastext);
        outline-offset: 2px;
    }
`,C=p.memo(function(s){let{name:y,id:i,SVs:a,children:t,actions:o,callAction:n}=x(s),c=l=>{n({action:o.recordVisibilityChange,args:{isVisible:l}})};if(m.useEffect(()=>()=>{n({action:o.recordVisibilityChange,args:{isVisible:!1}})},[]),a.hidden)return null;let d=e.jsx(u,{icon:f});return a._compositeReplacementActiveRange&&(t=g({children:t,compositeReplacementActiveRange:a._compositeReplacementActiveRange,startInd:0,endInd:t.length-1})),e.jsx(b,{partialVisibility:!0,onChange:c,children:e.jsxs(e.Fragment,{children:[e.jsxs(h,{tabIndex:"0",children:[d," Feedback"]}),e.jsxs(v,{id:i,children:[e.jsx("a",{name:i}),a.feedbackText,t]})]})})});export{C as default};
