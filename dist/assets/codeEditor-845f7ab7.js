import{av as C,bn as T,r as l,a as s,F as S,j as a}from"./index-7c464f87.js";import{s as n}from"./css-14ccef8c.js";import{C as W}from"./CodeMirror-af38c63b.js";import{V as B}from"./visibility-sensor-82f19459.js";const H=C.memo(function(p){let{name:j,id:d,SVs:e,children:g,actions:i,callAction:r}=T(p),u=l.useRef(e.immediateValue),t=l.useRef(null),y=l.useRef(null),c=l.useRef(e.immediateValue),x={...e.height},m={...e.height};e.showResults&&(m.size*=1-e.viewerRatio);let R=o=>{r({action:i.recordVisibilityChange,args:{isVisible:o}})};if(l.useEffect(()=>()=>{r({action:i.recordVisibilityChange,args:{isVisible:!1}}),t.current!==null&&(clearTimeout(t.current),r({action:i.updateValue}))},[]),e.hidden)return null;const h=d+"_editor";e.immediateValue!==u.current&&(u.current=e.immediateValue,c.current=e.immediateValue);let f=null,w=e.width,V=e.width,b={width:n(w),height:n(m),maxWidth:"100%",padding:"0px",overflowX:"hidden",overflowY:"scroll"};e.showResults&&(f=s(S,{children:[a("hr",{style:{width:n(V),maxWidth:"100%"}}),a("div",{children:g})]}));let v=a("div",{id:h,style:b,children:a(W,{editorRef:y,setInternalValue:c.current,readOnly:e.disabled,onBlur:()=>{clearTimeout(t.current),r({action:i.updateValue}),t.current=null},onFocus:()=>{},onBeforeChange:o=>{u.current=o,r({action:i.updateImmediateValue,args:{text:o}}),clearTimeout(t.current),t.current=setTimeout(function(){r({action:i.updateValue}),t.current=null},3e3)}})},h);return a(B,{partialVisibility:!0,onChange:R,children:s("div",{style:{margin:"12px 0"},children:[a("a",{name:d}),s("div",{style:{padding:"0",border:"var(--mainBorder)",borderRadius:"var(--mainBorderRadius)",height:n(x),width:n(V),maxWidth:"100%",display:"flex",flexDirection:"column"},id:d,children:[v,f]})]})})});export{H as default};