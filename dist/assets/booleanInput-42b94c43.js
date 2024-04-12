import{ao as ee,bl as fe,r as i,R as pe,bs as he,bo as te,bt as re,j as o,H as X,bq as me,$ as be,aP as xe,br as ve,a as C,F as Y,h as ge,bm as Ce}from"./index-f8d734dc.js";import{T as ye}from"./ToggleButton-3f029102.js";import{BoardContext as ke}from"./graph-eb7e5c8e.js";import"./css-14ccef8c.js";const P=ge.button`
  position: relative;
  width: 24px;
  height: 24px;
  color: #ffffff;
  background-color: var(--mainBlue);
  display: inline-block;
  /* text-align: center; */
  padding: 2px;
  /* z-index: 0; */
  /* border: var(--mainBorder); */
  border: none;
  border-radius: var(--mainBorderRadius);
  margin: 0px 4px 4px 0px;

  &:hover {
    background-color: var(--lightBlue);
    color: black;
  }
`,we=ee.memo(function H(W){let{name:Re,id:f,SVs:e,actions:v,ignoreUpdate:ne,rendererName:oe,callAction:g}=fe(W);H.baseStateVariable="value",H.ignoreActionsWithoutCore=r=>r==="moveInput";const[y,z]=i.useState(e.value);let $=i.useRef(null);$.current=y;const ae=pe(he(oe));let S=i.useRef(null),t=i.useRef(null),w=i.useRef(null),B=i.useRef(null);const c=i.useContext(ke);let R=i.useRef(!1),E=i.useRef(!1),p=i.useRef(!1),h=i.useRef(null),m=i.useRef(null),K=i.useRef(null),L=i.useRef(null),G=i.useRef(!1),A=i.useRef(!1);G.current=e.fixed,A.current=!e.draggable||e.fixLocation||e.fixed,i.useEffect(()=>()=>{t.current!==null&&ce()},[]),!ne&&S.current!==e.value?(z(e.value),S.current=e.value):S.current=null;function F(r){let n=!$.current;z(n),S.current=e.value,ae(d=>{let b={...d};return b.ignoreUpdate=!0,b}),g({action:v.updateBoolean,args:{boolean:n},baseVariableValue:n})}function ie(){let r={visible:!e.hidden,fixed:G.current,disabled:e.disabled,checked:y,useMathJax:e.labelHasLatex,strokeColor:"var(--canvastext)",highlightStrokeColor:"var(--canvastext)",highlight:!A.current,parse:!1},n;try{let a=te.fromAst(e.anchor),x=[a.get_component(0).evaluate_to_constant(),a.get_component(1).evaluate_to_constant()];Number.isFinite(x[0])||(x[0]=0,r.visible=!1),Number.isFinite(x[1])||(x[1]=0,r.visible=!1),n=c.create("point",x,{visible:!1})}catch{r.visible=!1,n=c.create("point",[0,0],{visible:!1});return}r.anchor=n;let{anchorx:d,anchory:b}=re(e.positionFromAnchor);r.anchorx=d,r.anchory=b,B.current=[d,b];let l=c.create("checkbox",[0,0,e.label],r);l.rendNodeCheckbox.addEventListener("change",F),l.isDraggable=!A.current,l.on("down",function(a){R.current=[a.x,a.y],E.current=[...n.coords.scrCoords],p.current=!1}),l.on("hit",function(a){p.current=!1}),l.on("up",function(a){p.current&&(g({action:v.moveInput,args:{x:h.current,y:m.current}}),p.current=!1)}),l.on("keyfocusout",function(a){p.current&&(g({action:v.moveInput,args:{x:h.current,y:m.current}}),p.current=!1)}),l.on("drag",function(a){let x=a.type==="pointermove";(!x||Math.abs(a.x-R.current[0])>.1||Math.abs(a.y-R.current[1])>.1)&&(p.current=!0);let[j,U,D,M]=c.getBoundingBox(),O=l.size[0]/c.unitX,T=l.size[1]/c.unitY,q=B.current[0],Q=B.current[1],N=0;q==="middle"?N=-O/2:q==="right"&&(N=-O);let V=0;Q==="middle"?V=-T/2:Q==="top"&&(V=-T);let le=j+.04*(D-j)-N-O,ue=D-.04*(D-j)-N,se=M+.04*(U-M)-V-T,de=U-.04*(U-M)-V;if(x){var Z=c.origin.scrCoords;h.current=(E.current[1]+a.x-R.current[0]-Z[1])/c.unitX,m.current=(Z[2]-(E.current[2]+a.y-R.current[1]))/c.unitY}else h.current=n.X()+l.relativeCoords.usrCoords[1],m.current=n.Y()+l.relativeCoords.usrCoords[2];h.current=Math.min(ue,Math.max(le,h.current)),m.current=Math.min(de,Math.max(se,m.current)),g({action:v.moveInput,args:{x:h.current,y:m.current,transient:!0,skippable:!0}}),l.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,[0,0]),n.coords.setCoordinates(JXG.COORDS_BY_USER,K.current)}),l.on("keydown",function(a){a.key==="Enter"&&p.current&&(g({action:v.moveInput,args:{x:h.current,y:m.current}}),p.current=!1)}),t.current=l,w.current=n,L.current=e.positionFromAnchor,e.labelHasLatex&&setTimeout(()=>{t.current&&(t.current.needsUpdate=!0,t.current.setText(e.label),t.current.update(),c==null||c.updateRenderer())},1e3)}function ce(){t.current.rendNodeCheckbox.removeEventListener("change",F),t.current.off("drag"),t.current.off("down"),t.current.off("hit"),t.current.off("up"),t.current.off("keyfocusout"),t.current.off("keydown"),c.removeObject(t.current),t.current=null}if(c){let r;try{let n=te.fromAst(e.anchor);r=[n.get_component(0).evaluate_to_constant(),n.get_component(1).evaluate_to_constant()]}catch{r=[NaN,NaN]}if(K.current=r,t.current===null)ie();else{t.current.Value()!==y&&t.current.setAttribute({checked:y}),t.current.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,[0,0]),w.current.coords.setCoordinates(JXG.COORDS_BY_USER,r),t.current.setText(e.label);let n=!e.hidden;if(Number.isFinite(r[0])&&Number.isFinite(r[1])){let d=t.current.visProp.visible!==n;t.current.visProp.visible=n,t.current.visPropCalc.visible=n,d&&t.current.setAttribute({visible:n})}else t.current.visProp.visible=!1,t.current.visPropCalc.visible=!1;if(t.current.visProp.disabled!==e.disabled&&(t.current.visProp.disabled=e.disabled,t.current.setAttribute({disabled:e.disabled})),t.current.visProp.highlight=!A.current,t.current.visProp.fixed=G.current,t.current.isDraggable=!A.current,t.current.needsUpdate=!0,e.positionFromAnchor!==L.current){let{anchorx:d,anchory:b}=re(e.positionFromAnchor);t.current.visProp.anchorx=d,t.current.visProp.anchory=b,B.current=[d,b],L.current=e.positionFromAnchor,t.current.fullUpdate()}else t.current.update();w.current.needsUpdate=!0,w.current.update(),c.updateRenderer()}return o("a",{name:f})}if(e.hidden)return null;let _=e.disabled;const I=f+"_input";let u={cursor:"pointer",padding:"1px 6px 1px 6px"},s=null;if(W.icon,e.includeCheckWork&&!e.suppressCheckwork){let r="unvalidated";if(e.valueHasBeenValidated&&(e.creditAchieved===1?r="correct":e.creditAchieved===0?r="incorrect":r="partialcorrect"),r==="unvalidated")_&&(u.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGray"),u.cursor="not-allowed"),s=o(P,{id:f+"_submit",tabIndex:"0",disabled:_,style:u,onClick:()=>g({action:v.submitAnswer}),onKeyPress:n=>{n.key==="Enter"&&g({action:v.submitAnswer})},children:o(X,{style:{},icon:me,transform:{rotate:90}})});else if(e.showCorrectness)if(r==="correct")u.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGreen"),s=o(P,{id:f+"_correct",style:u,children:o(X,{icon:be})});else if(r==="partialcorrect"){let d=`${Math.round(e.creditAchieved*100)} %`;u.width="44px",u.backgroundColor="#efab34",s=o(P,{id:f+"_partial",style:u,children:d})}else u.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainRed"),s=o(P,{id:f+"_incorrect",style:u,children:o(X,{icon:xe})});else u.backgroundColor="rgb(74, 3, 217)",u.padding="1px 8px 1px 4px",s=o(P,{id:f+"_saved",style:u,children:o(X,{icon:ve})});e.numAttemptsLeft<0?s=C(Y,{children:[s,o("span",{children:"(no attempts remaining)"})]}):e.numAttemptsLeft==1?s=C(Y,{children:[s,o("span",{children:"(1 attempt remaining)"})]}):Number.isFinite(e.numAttemptsLeft)&&(s=C(Y,{children:[s,C("span",{children:["(",e.numAttemptsLeft," attempts remaining)"]})]}))}let J,k=e.label;if(e.labelHasLatex&&(k=o(Ce.MathJax,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:k})),e.asToggleButton)J=o(ye,{id:I,isSelected:y,onClick:F,value:k,disabled:_},I);else{let r="container",n="checkmark";_&&(r+=" container-disabled",n+=" checkmark-disabled"),J=C("label",{className:r,children:[o("input",{type:"checkbox",id:I,checked:y,onChange:F,disabled:_},I),o("span",{className:n}),k!=""?o("span",{style:{marginLeft:"2px"},children:k}):o("span",{children:k})]})}return C(ee.Fragment,{children:[C("span",{id:f,children:[o("a",{name:f}),J]}),s]})});export{we as default};
