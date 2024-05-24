import{p as W,k as P,s as U,o as G,n as w,a as x,m as T,r as l,t as z,_ as J,I as H,E as _,a4 as E,G as O,a5 as K,D as j,Z as D,a6 as Q,a7 as X,A as Y,a8 as N}from"./index-CrSqH__w.js";var[ee,te]=W({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[se,q]=W({strict:!1,name:"FormControlContext"});function ne(e){const{id:s,isRequired:n,isInvalid:r,isDisabled:t,isReadOnly:o,...a}=e,u=l.useId(),i=s||`field-${u}`,f=`${i}-label`,b=`${i}-feedback`,c=`${i}-helptext`,[g,p]=l.useState(!1),[F,h]=l.useState(!1),[m,I]=l.useState(!1),A=l.useCallback((d={},v=null)=>({id:c,...d,ref:H(v,C=>{C&&h(!0)})}),[c]),k=l.useCallback((d={},v=null)=>({...d,ref:v,"data-focus":_(m),"data-disabled":_(t),"data-invalid":_(r),"data-readonly":_(o),id:d.id!==void 0?d.id:f,htmlFor:d.htmlFor!==void 0?d.htmlFor:i}),[i,t,m,r,o,f]),y=l.useCallback((d={},v=null)=>({id:b,...d,ref:H(v,C=>{C&&p(!0)}),"aria-live":"polite"}),[b]),S=l.useCallback((d={},v=null)=>({...d,...a,ref:v,role:"group"}),[a]),R=l.useCallback((d={},v=null)=>({...d,ref:v,role:"presentation","aria-hidden":!0,children:d.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!o,isDisabled:!!t,isFocused:!!m,onFocus:()=>I(!0),onBlur:()=>I(!1),hasFeedbackText:g,setHasFeedbackText:p,hasHelpText:F,setHasHelpText:h,id:i,labelId:f,feedbackId:b,helpTextId:c,htmlProps:a,getHelpTextProps:A,getErrorMessageProps:y,getRootProps:S,getLabelProps:k,getRequiredIndicatorProps:R}}var re=P(function(s,n){const r=U("Form",s),t=G(s),{getRootProps:o,htmlProps:a,...u}=ne(t),i=w("chakra-form-control",s.className);return x.jsx(se,{value:u,children:x.jsx(ee,{value:r,children:x.jsx(T.div,{...o({},n),className:i,__css:r.container})})})});re.displayName="FormControl";var oe=P(function(s,n){const r=q(),t=te(),o=w("chakra-form__helper-text",s.className);return x.jsx(T.div,{...r==null?void 0:r.getHelpTextProps(s,n),__css:t.helperText,className:o})});oe.displayName="FormHelperText";function Ce(e){const{isDisabled:s,isInvalid:n,isReadOnly:r,isRequired:t,...o}=ae(e);return{...o,disabled:s,readOnly:r,required:t,"aria-invalid":E(n),"aria-required":E(t),"aria-readonly":E(r)}}function ae(e){var s,n,r;const t=q(),{id:o,disabled:a,readOnly:u,required:i,isRequired:f,isInvalid:b,isReadOnly:c,isDisabled:g,onFocus:p,onBlur:F,...h}=e,m=e["aria-describedby"]?[e["aria-describedby"]]:[];return t!=null&&t.hasFeedbackText&&(t!=null&&t.isInvalid)&&m.push(t.feedbackId),t!=null&&t.hasHelpText&&m.push(t.helpTextId),{...h,"aria-describedby":m.join(" ")||void 0,id:o??(t==null?void 0:t.id),isDisabled:(s=a??g)!=null?s:t==null?void 0:t.isDisabled,isReadOnly:(n=u??c)!=null?n:t==null?void 0:t.isReadOnly,isRequired:(r=i??f)!=null?r:t==null?void 0:t.isRequired,isInvalid:b??(t==null?void 0:t.isInvalid),onFocus:O(t==null?void 0:t.onFocus,p),onBlur:O(t==null?void 0:t.onBlur,F)}}var L=e=>e.hasAttribute("tabindex"),ie=e=>L(e)&&e.tabIndex===-1;function le(e){return!!e.getAttribute("disabled")||!!e.getAttribute("aria-disabled")}function B(e){return e.parentElement&&B(e.parentElement)?!0:e.hidden}function ue(e){const s=e.getAttribute("contenteditable");return s!=="false"&&s!=null}function M(e){if(!N(e)||B(e)||le(e))return!1;const{localName:s}=e;if(["input","select","textarea","button"].indexOf(s)>=0)return!0;const r={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return s in r?r[s]():ue(e)?!0:L(e)}function de(e){return e?N(e)&&M(e)&&!ie(e):!1}var ce=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],fe=ce.join(),be=e=>e.offsetWidth>0&&e.offsetHeight>0;function me(e){const s=Array.from(e.querySelectorAll(fe));return s.unshift(e),s.filter(n=>M(n)&&be(n))}var $=e=>x.jsx(T.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});$.displayName="StackItem";function ve(e){const{spacing:s,direction:n}=e,r={column:{my:s,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:s,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:s,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:s,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":K(n,t=>r[t])}}var he=P((e,s)=>{const{isInline:n,direction:r,align:t,justify:o,spacing:a="0.5rem",wrap:u,children:i,divider:f,className:b,shouldWrapChildren:c,...g}=e,p=n?"row":r??"column",F=l.useMemo(()=>ve({spacing:a,direction:p}),[a,p]),h=!!f,m=!c&&!h,I=l.useMemo(()=>{const k=z(i);return m?k:k.map((y,S)=>{const R=typeof y.key<"u"?y.key:S,d=S+1===k.length,C=c?x.jsx($,{children:y},R):y;if(!h)return C;const V=l.cloneElement(f,{__css:F}),Z=d?null:V;return x.jsxs(l.Fragment,{children:[C,Z]},R)})},[f,F,h,m,c,i]),A=w("chakra-stack",b);return x.jsx(T.div,{ref:s,display:"flex",alignItems:t,justifyContent:o,flexDirection:p,flexWrap:u,gap:h?void 0:a,className:A,...g,children:I})});he.displayName="Stack";function pe(e){const s=e.current;if(!s)return!1;const n=X(s);return!n||s.contains(n)?!1:!!de(n)}function ge(e,s){const{shouldFocus:n,visible:r,focusRef:t}=s,o=n&&!r;j(()=>{if(!o||pe(e))return;const a=(t==null?void 0:t.current)||e.current;let u;if(a)return u=requestAnimationFrame(()=>{a.focus({preventScroll:!0})}),()=>{cancelAnimationFrame(u)}},[o,e,t])}var xe={preventScroll:!0,shouldFocus:!1};function ke(e,s=xe){const{focusRef:n,preventScroll:r,shouldFocus:t,visible:o}=s,a=Fe(e)?e.current:e,u=t&&o,i=l.useRef(u),f=l.useRef(o);Y(()=>{!f.current&&o&&(i.current=u),f.current=o},[o,u]);const b=l.useCallback(()=>{if(!(!o||!a||!i.current)&&(i.current=!1,!a.contains(document.activeElement)))if(n!=null&&n.current)requestAnimationFrame(()=>{var c;(c=n.current)==null||c.focus({preventScroll:r})});else{const c=me(a);c.length>0&&requestAnimationFrame(()=>{c[0].focus({preventScroll:r})})}},[o,r,a,n]);j(()=>{b()},[b]),D(a,"transitionend",b)}function Fe(e){return"current"in e}function Ie(e){const{isOpen:s,ref:n}=e,[r,t]=l.useState(s),[o,a]=l.useState(!1);return l.useEffect(()=>{o||(t(s),a(!0))},[s,o,r]),D(()=>n.current,"animationend",()=>{t(s)}),{present:!(s?!1:!r),onComplete(){var i;const f=Q(n.current),b=new f.CustomEvent("animationend",{bubbles:!0});(i=n.current)==null||i.dispatchEvent(b)}}}var Se=J({displayName:"WarningTwoIcon",d:"M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"});export{re as F,he as S,Se as W,te as a,ae as b,Ie as c,ge as d,ke as e,Ce as f,q as u};