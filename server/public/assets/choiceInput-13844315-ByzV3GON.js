import{q as W,R as _,u as T,r as I,e as H,g as O,a as e,M as G,F as x,f as w,b as L,c as N,d as F}from"./index-DVZ7nus4.js";const u=W.button`
    position: relative;
    /* width: 24px; */
    height: 24px;
    color: #ffffff;
    background-color: var(--mainBlue);
    display: inline-block;
    text-align: center;
    padding: 2px;
    z-index: 0;
    /* border: var(--mainBorder); */
    border: none;
    border-radius: var(--mainBorderRadius);
    margin: 0px 4px 4px 0px;

    &:hover {
        background-color: var(--lightBlue);
        color: black;
    }
`,q=_.memo(function R(D){let{name:U,id:s,SVs:t,actions:b,children:V,sourceOfUpdate:$,ignoreUpdate:E,rendererName:B,callAction:g}=T(D);R.baseStateVariable="selectedIndices";const[f,A]=I.useState(t.selectedIndices),M=H(O(B));let y=I.useRef(null);!E&&y.current!==t.selectedIndices?(A(t.selectedIndices),y.current=t.selectedIndices):y.current=null;let d="unvalidated";(t.valueHasBeenValidated||t.numAttemptsLeft<1)&&(t.creditAchieved===1?d="correct":t.creditAchieved===0?d="incorrect":d="partialcorrect");function S(i){let n=[];if(t.inline)i.target.value&&(n=Array.from(i.target.selectedOptions,l=>Number(l.value)));else if(t.selectMultiple){n=[...f];let l=Number(i.target.value);if(i.target.checked)n.includes(l)||(n.push(l),n.sort((a,c)=>a-c));else{let a=n.indexOf(l);a!==-1&&n.splice(a,1)}}else n=[Number(i.target.value)];(f.length!==n.length||f.some((l,a)=>l!=n[a]))&&(A(n),y.current=t.selectedIndices,M(l=>{let a={...l};return a.ignoreUpdate=!0,a}),g({action:b.updateSelectedIndices,args:{selectedIndices:n},baseVariableValue:n}))}if(t.hidden)return null;let m=t.disabled,C=t.label;if(t.labelHasLatex&&(C=e.jsx(G,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:C})),t.inline){let i={cursor:"pointer",padding:"1px 6px 1px 6px",width:"24px"},n=null;if(t.includeCheckWork&&!t.suppressCheckwork){if(d==="unvalidated")m&&(i.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGray")),n=e.jsx(u,{id:s+"_submit",disabled:m,tabIndex:"0",style:i,onClick:()=>g({action:b.submitAnswer}),onKeyPress:p=>{p.key==="Enter"&&g({action:b.submitAnswer})},children:e.jsx(x,{style:{},icon:w,transform:{rotate:90}})});else if(t.showCorrectness)if(d==="correct")i.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGreen"),n=e.jsx(u,{id:s+"_correct",style:i,children:e.jsx(x,{icon:L})});else if(d==="partialcorrect"){let o=`${Math.round(t.creditAchieved*100)} %`;i.width="44px",i.backgroundColor="#efab34",n=e.jsx(u,{id:s+"_partial",style:i,children:o})}else i.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainRed"),n=e.jsx(u,{id:s+"_incorrect",style:i,children:e.jsx(x,{icon:N})});else i.backgroundColor="rgb(74, 3, 217)",i.padding="1px 8px 1px 4px",n=e.jsx(u,{id:s+"_saved",style:i,children:e.jsx(x,{icon:F})});t.numAttemptsLeft<0?n=e.jsxs(e.Fragment,{children:[n,e.jsx("span",{children:"(no attempts remaining)"})]}):t.numAttemptsLeft==1?n=e.jsxs(e.Fragment,{children:[n,e.jsx("span",{children:"(1 attempt remaining)"})]}):Number.isFinite(t.numAttemptsLeft)&&(n=e.jsxs(e.Fragment,{children:[n,e.jsxs("span",{children:["(",t.numAttemptsLeft," attempts remaining)"]})]}))}let l=t,a=t.choiceTexts.map(function(p,o){return l.choicesHidden[o]?null:e.jsx("option",{value:o+1,disabled:l.choicesDisabled[o],children:p},o+1)}),c=f;return c===void 0?c="":t.selectMultiple||(c=c[0],c===void 0&&(c="")),e.jsxs(_.Fragment,{children:[e.jsx("a",{name:s}),e.jsxs("label",{style:{display:"inline-flex",maxWidth:"100%"},id:s+"-label",children:[C,e.jsxs("select",{className:"custom-select",id:s,onChange:S,value:c,disabled:m,multiple:t.selectMultiple,children:[e.jsx("option",{hidden:!0,value:"",children:t.placeHolder}),a]})]}),n]})}else{let i={height:"24px",display:"inline-block",padding:"1px 6px 1px 6px",cursor:"pointer"},n=null;if(t.includeCheckWork&&!t.suppressCheckwork)if(d==="unvalidated"){let h=t.submitLabel;t.showCorrectness||(h=t.submitLabelNoCorrectness),m&&(i.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGray")),n=e.jsxs(u,{id:s+"_submit",tabIndex:"0",disabled:m,style:i,onClick:()=>g({action:b.submitAnswer}),onKeyPress:r=>{r.key==="Enter"&&g({action:b.submitAnswer})},children:[e.jsx(x,{style:{},icon:w,transform:{rotate:90}})," ",h]})}else if(t.showCorrectness){if(d==="correct")i.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGreen"),n=e.jsxs(u,{id:s+"_correct",style:i,children:[e.jsx(x,{icon:L}),"  Correct"]});else if(d==="incorrect")i.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainRed"),n=e.jsxs(u,{id:s+"_incorrect",style:i,children:[e.jsx(x,{icon:N}),"  Incorrect"]});else if(d==="partialcorrect"){i.backgroundColor="#efab34";let r=`${Math.round(t.creditAchieved*100)}% Correct`;n=e.jsx(u,{id:s+"_partial",style:i,children:r})}}else i.backgroundColor="rgb(74, 3, 217)",n=e.jsxs(u,{id:s+"_saved",style:i,children:[e.jsx(x,{icon:F}),"  Response Saved"]});t.numAttemptsLeft<0?n=e.jsxs(e.Fragment,{children:[n,e.jsx("span",{children:"(no attempts remaining)"})]}):t.numAttemptsLeft==1?n=e.jsxs(e.Fragment,{children:[n,e.jsx("span",{children:"(1 attempt remaining)"})]}):Number.isFinite(t.numAttemptsLeft)&&(n=e.jsxs(e.Fragment,{children:[n,e.jsxs("span",{children:["(",t.numAttemptsLeft," attempts remaining)"]})]}));let l=s,a={listStyleType:"none"},c=l+"_choice",p="radio";t.selectMultiple&&(p="checkbox");let o=t,P=t.choiceOrder.map(h=>V[h-1]).map(function(h,r){if(o.choicesHidden[r])return null;if(p=="radio"){let v=m||o.choicesDisabled[r],k="radio-container",j="radio-checkmark";return v&&(k+=" radio-container-disabled",j+=" radio-checkmark-disabled"),e.jsxs("label",{className:k,children:[e.jsx("input",{type:"radio",id:c+(r+1)+"_input",name:l,value:r+1,checked:f.includes(r+1),onChange:S,disabled:v}),e.jsx("span",{className:j}),e.jsx("label",{htmlFor:c+(r+1)+"_input",style:{marginLeft:"2px"},children:h})]},l+"_choice"+(r+1))}else if(p=="checkbox"){let v=m||o.choicesDisabled[r],k="checkbox-container",j="checkbox-checkmark";return v&&(k+=" checkbox-container-disabled",j+=" checkbox-checkmark-disabled"),e.jsxs("label",{className:k,children:[e.jsx("input",{type:"checkbox",id:c+(r+1)+"_input",name:l,value:r+1,checked:f.includes(r+1),onChange:S,disabled:m||o.choicesDisabled[r]}),e.jsx("span",{className:j}),e.jsx("label",{htmlFor:c+(r+1)+"_input",style:{marginLeft:"2px"},children:h})]},l+"_choice"+(r+1))}});return e.jsxs("div",{id:l+"-label",children:[C,e.jsxs("ol",{id:l,style:a,children:[e.jsx("a",{name:s}),P]}),n]})}});export{q as default};
