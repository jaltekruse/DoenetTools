import{q as h,R as b,u as g,r as m,P as f,aq as k,a as t}from"./index-DVZ7nus4.js";const s=h.button`
    position: relative;
    height: 24px;
    display: inline-block;
    color: white;
    color: ${a=>a.disabled?"var(--canvastext)":"var(--canvas)"};
    background-color: ${a=>a.disabled?"var(--mainGray)":"var(--mainBlue)"};

    padding: 2px;
    border: none;
    border-radius: var(--mainBorderRadius);
    cursor: pointer;
    cursor: ${a=>a.disabled?"not-allowed":"pointer"};
    padding: 1px 6px 1px 6px;

    &:hover {
        background-color: ${a=>a.disabled?"var(--mainGray)":"var(--lightBlue)"};
        color: ${a=>a.disabled?"var(--canvastext)":"var(--canvas)"};
    }

    &:focus {
        outline: 2px solid var(--mainBlue);
        outline-offset: 2px;
    }
`,C=b.memo(function(d){let{name:R,id:r,SVs:e,children:o}=g(d),{location:c={},navigate:u,linkSettings:x,scrollableContainer:j}=m.useContext(f)||{},p=c.search||"";if(e.hidden)return null;let n=o;o.length===0&&(n=e.linkText);let{targetForATag:i,url:l,haveValidTarget:v,externalUri:B}=k({cid:e.cid,activityId:e.activityId,variantIndex:e.variantIndex,edit:e.edit,hash:e.hash,page:e.page,givenUri:e.uri,targetName:e.targetName,linkSettings:x,search:p,id:r});return e.createButton?i==="_blank"?t.jsxs("span",{id:r,children:[t.jsx("a",{name:r}),t.jsx(s,{id:r+"_button",onClick:()=>window.open(l,i),disabled:e.disabled,children:e.linkText})]}):t.jsxs("span",{id:r,children:[t.jsx("a",{name:r}),t.jsx(s,{id:r+"_button",onClick:()=>u(l),disabled:e.disabled,children:e.linkText})]}):v?t.jsx("a",{style:{color:"var(--mainBlue)",borderRadius:"5px"},target:i,id:r,name:r,href:l,children:n}):t.jsx("span",{id:r,children:n})});export{C as default};
