import{q as g,R as C,u as k,a as e,F as a,f as j,b as y,c as A,d as v}from"./index-CrSqH__w.js";const o=g.button`
    position: relative;
    height: 24px;
    display: inline-block;
    color: white;
    background-color: var(--mainBlue);
    padding: 2px;
    /* border: var(--mainBorder); */
    border: none;
    border-radius: var(--mainBorderRadius);
    margin: 0px 4px 4px 0px;

    &:hover {
        background-color: var(--lightBlue);
        color: black;
    }
`,S=C.memo(function(x){let{name:L,id:s,SVs:t,actions:d,children:h,callAction:m}=k(x);if(t.hidden)return null;let u=t.disabled,l=()=>m({action:d.submitAnswer});t.submitAllAnswersAtAncestor&&(l=()=>m({action:d.submitAllAnswers}));let c=null;if(t.inputChildren.length>0){let i=t.inputChildren.map(n=>n.componentName);c=h.filter(n=>n&&typeof n!="string"&&i.includes(n.props.componentInstructions.componentName))}if(!t.delegateCheckWork&&!t.suppressCheckwork){let i="unvalidated";(t.justSubmitted||t.numAttemptsLeft<1)&&(t.creditAchieved===1?i="correct":t.creditAchieved===0?i="incorrect":i="partialcorrect");let n={cursor:"pointer",padding:"1px 6px 1px 6px"};u&&(n.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGray"));let p=t.submitLabel;t.showCorrectness||(p=t.submitLabelNoCorrectness);let r=e.jsxs(o,{id:s+"_submit",tabIndex:"0",disabled:u,style:n,onClick:l,onKeyPress:f=>{f.key==="Enter"&&l()},children:[e.jsx(a,{style:{},icon:j,transform:{rotate:90}})," ",p]});if(t.showCorrectness){if(i==="correct")n.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGreen"),r=e.jsxs(o,{id:s+"_correct",style:n,children:[e.jsx(a,{icon:y}),"  Correct"]});else if(i==="incorrect")n.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainRed"),r=e.jsxs(o,{id:s+"_incorrect",style:n,children:[e.jsx(a,{icon:A}),"  Incorrect"]});else if(i==="partialcorrect"){n.backgroundColor="#efab34";let b=`${Math.round(t.creditAchieved*100)}% Correct`;r=e.jsx(o,{id:s+"_partial",style:n,children:b})}}else i!=="unvalidated"&&(n.backgroundColor="rgb(74, 3, 217)",r=e.jsxs(o,{id:s+"_saved",style:n,children:[e.jsx(a,{icon:v}),"  Response Saved"]}));return t.numAttemptsLeft<0?r=e.jsxs(e.Fragment,{children:[r,e.jsx("span",{children:"(no attempts remaining)"})]}):t.numAttemptsLeft==1?r=e.jsxs(e.Fragment,{children:[r,e.jsx("span",{children:"(1 attempt remaining)"})]}):Number.isFinite(t.numAttemptsLeft)&&(r=e.jsxs(e.Fragment,{children:[r,e.jsxs("span",{children:["(",t.numAttemptsLeft," attempts remaining)"]})]})),e.jsxs("span",{id:s,style:{marginBottom:"4px"},children:[e.jsx("a",{name:s}),c,r]})}else return e.jsxs("span",{id:s,style:{marginBottom:"4px"},children:[e.jsx("a",{name:s}),c]})});export{S as default};
