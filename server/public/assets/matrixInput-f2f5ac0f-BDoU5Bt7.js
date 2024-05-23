import{q as j,R as b,u as k,r as R,a as e,ao as C,ap as m,F as p,f as A,b as _,c as B,d as I}from"./index-CrSqH__w.js";const S=j.div`
    position: relative;
    margin: 6px;
    display: inline-block;
    vertical-align: middle;
    width: auto;

    :before {
        content: "";
        position: absolute;
        left: -6px;
        top: -6px;
        border: var(--mainBorder);
        border-right: 0px;
        width: 6px;
        height: 100%;
        padding-top: 6px;
        padding-bottom: 3px;
    }

    :after {
        content: "";
        position: absolute;
        right: -6px;
        top: -6px;
        border: var(--mainBorder);
        border-left: 0px;
        width: 6px;
        height: 100%;
        padding-top: 6px;
        padding-bottom: 3px;
    }
`,c=j.button`
    position: relative;
    width: 24px;
    height: 24px;
    display: inline-block;
    color: white;
    background-color: var(--mainBlue);
    /* border: var(--mainBorder); */
    padding: 2px;
    border: none;
    border-radius: var(--mainBorderRadius);
    margin: 0px 4px 4px 0px;

    &:hover {
        background-color: var(--lightBlue);
        color: black;
    }
`,F=b.memo(function(w){let{name:E,id:n,SVs:t,actions:a,children:y,callAction:s}=k(w),l=R.useRef(null);function v(){l.current="unvalidated",(t.valueHasBeenValidated||t.numAttemptsLeft<1)&&(t.creditAchieved===1?l.current="correct":t.creditAchieved===0?l.current="incorrect":l.current="partialcorrect")}if(t.hidden)return null;v();let x=t.disabled;getComputedStyle(document.documentElement).getPropertyValue("--mainGray");let r={cursor:"pointer",padding:"1px 6px 1px 6px"},i=null;if(t.includeCheckWork&&!t.suppressCheckwork){if(l.current==="unvalidated")x&&(r.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGray")),i=e.jsx(c,{id:n+"_submit",tabIndex:"0",disabled:x,style:r,onClick:()=>s({action:a.submitAnswer}),onKeyPress:o=>{o.key==="Enter"&&s({action:a.submitAnswer})},children:e.jsx(p,{icon:A,transform:{rotate:90}})});else if(t.showCorrectness)if(l.current==="correct")r.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGreen"),i=e.jsx(c,{id:n+"_correct",style:r,children:e.jsx(p,{icon:_})});else if(l.current==="partialcorrect"){let u=`${Math.round(t.creditAchieved*100)} %`;r.width="44px",r.backgroundColor="#efab34",i=e.jsx(c,{id:n+"_partial",style:r,children:u})}else r.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainRed"),i=e.jsx(c,{id:n+"_incorrect",style:r,children:e.jsx(p,{icon:B})});else r.backgroundColor="rgb(74, 3, 217)",r.padding="1px 8px 1px 4px",i=e.jsx(c,{id:n+"_saved",style:r,children:e.jsx(p,{icon:I})});t.numAttemptsLeft<0?i=e.jsxs(e.Fragment,{children:[i,e.jsx("span",{children:"(no attempts remaining)"})]}):t.numAttemptsLeft==1?i=e.jsxs(e.Fragment,{children:[i,e.jsx("span",{children:"(1 attempt remaining)"})]}):t.numAttemptsLeft<1/0&&(i=e.jsxs(e.Fragment,{children:[i,e.jsxs("span",{children:["(",t.numAttemptsLeft," attempts remaining)"]})]}))}let h=[];for(let o=0;o<t.numRows;o++){let u=[];for(let d=0;d<t.numColumns;d++)u.push(e.jsx("td",{className:"matrixCell",id:n+"_component_"+o+"_"+d,children:y[o*t.numColumns+d]},d));h.push(e.jsx("tr",{children:u},o))}let g=null;t.showSizeControls&&(g=e.jsx("span",{style:{margin:"0px 4px 4px 0px"},children:e.jsxs(C,{children:[e.jsx(m,{id:n+"_rowDecrement",value:"r-",onClick:()=>s({action:a.updateNumRows,args:{numRows:t.numRows-1}}),disabled:t.numRows<2,children:"r-"}),e.jsx(m,{id:n+"_rowIncrement",value:"r+",onClick:()=>s({action:a.updateNumRows,args:{numRows:t.numRows+1}}),children:"r+"})]})}));let f=null;return t.showSizeControls&&(f=e.jsx("span",{style:{margin:"0px 4px 4px 0px"},children:e.jsxs(C,{children:[e.jsx(m,{id:n+"_columnDecrement",value:"c-",onClick:()=>s({action:a.updateNumColumns,args:{numColumns:t.numColumns-1}}),disabled:t.numColumns<2,children:"c-"}),e.jsx(m,{id:n+"_columnIncrement",value:"c+",onClick:()=>s({action:a.updateNumColumns,args:{numColumns:t.numColumns+1}}),children:"c+"})]})})),e.jsxs(b.Fragment,{children:[e.jsx("a",{name:n}),e.jsxs("div",{style:{display:"inline-flex",margin:"0px 4px 4px 4px"},children:[e.jsx(S,{className:"matrixInputSurroundingBox",id:n,children:e.jsx("table",{children:e.jsx("tbody",{children:h})})}),e.jsx("div",{style:{marginRight:"4px"}}),g,f,i]})]})});export{F as default};
