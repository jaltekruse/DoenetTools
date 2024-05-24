import{q as A,R as le,u as ae,r as O,e as ne,g as re,a as l,ao as q,ap as R,M as H,C as se}from"./index-DVZ7nus4.js";let I=(a,u)=>se.round_numbers_to_decimals(a,u).tree;const K=A.div`
    width: fit-content;
    height: ${a=>a.labeled&&a.noTicked?"60px":a.labeled?"80px":a.noTicked?"40px":"60px"};
    margin-bottom: 12px;
    &:focus {
        outline: 0;
    }
`,J=A.div`
    padding-top: 10px;
    height: 50px;
`,Q=A.div`
    position: relative;
    border-radius: 3px;
    background-color: var(--canvastext);
    height: 2px;
    width: ${a=>a.width};
    user-select: none;
`,C=A.p`
    display: inline;
    user-select: none;
`,Y=A.div`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    position: relative;
    top: -4px;
    opacity: 1;
    background: ${a=>a.disabled?"var(--mainGray)":"var(--mainBlue)"}; // var(--mainBlue)?
    cursor: pointer;
`,T=A.div`
    position: absolute;
    border-left: 2px solid var(--mainGray);
    height: 10px;
    top: 1px;
    z-index: -2;
    left: ${a=>a.x};
    user-select: none;
`,$=A.p`
    position: absolute;
    left: ${a=>a.x};
    color: var(--canvastext);
    font-size: 12px;
    top: 1px;
    user-select: none;
`;function Z(a,u,b,t){let e,s=Math.max(Math.abs(t.firstItem),Math.abs(t.lastItem)),d=Math.round(Math.log(s)/Math.log(10));s===0&&(d=1);let L=5-d;if(a.length===0){let r=[I(t.firstItem,L),I(t.lastItem,L)],n=Math.min(t.numItems,100),x=Math.floor(t.numItems/n);for(let h=1;h<n;h++)r.push(I(t.from+t.step*h*x,L));e=F(r)}else{let r=a.map(n=>I(n,L));e=F(r)}const M=t.numItems;if(t.width.size>e*M)if(a.length===0){let r=[],n=[],x=Math.max(Math.abs(t.firstItem),Math.abs(t.lastItem)),h=Math.round(Math.log(x)/Math.log(10));x===0&&(h=1);let v=5-h;for(let p=0;p<t.numItems;p++){let w=I(t.from+t.step*p,v);r.push(l.jsx(T,{x:`${p*u}px`},w)),n.push(l.jsx($,{x:`${p*u-3}px`,children:w},w))}return[r,n]}else return[a.map((r,n)=>l.jsx(T,{x:`${n*u}px`},r)),a.map((r,n)=>l.jsx($,{x:`${n*u-3}px`,children:r},r))];else if(t.width.size<e){let r=[...a];if(a.length===0)for(let n=0;n<Math.min(3,t.numItems);n++)r.push(t.from+t.step*n);return[r.map((n,x)=>x==0?l.jsx(T,{x:`${x*u}px`},n):""),r.map((n,x)=>{if(x==0)return l.jsx($,{x:`${x*u-3}px`,children:n},n);if(x==2)return l.jsx($,{x:`${x*u-3}px`,children:"..."},n)})]}else if(t.width.size<e*M){let r,n;if(a.length===0){let x=Math.floor(t.width.size/e),h=t.lastItem-t.firstItem,v=h/(x+1),p=Math.max(Math.abs(t.firstItem),Math.abs(t.lastItem)),w=Math.round(Math.log(p)/Math.log(10)),k=1-w,f=Math.max(I(v,k),10**-k),j=Math.floor(h/f)+1,y=5-w;n=[...Array(j).keys()].map(D=>t.from+f*D),r=n.map(D=>Math.round((D-t.from)/t.step)),n=n.map(D=>I(D,y))}else{let x=Math.max(2,Math.floor(t.width.size/e)),h=Math.ceil((t.numItems-1)/(x-1)-1e-10),v=Math.floor((t.numItems-1)/h+1e-10)+1;r=[...Array(v).keys()].map(f=>Math.round(h*f));let p=Math.max(Math.abs(t.firstItem),Math.abs(t.lastItem)),k=2-Math.round(Math.log(p)/Math.log(10));n=r.map(f=>I(a[f],k))}return[r.map((x,h)=>l.jsx(T,{x:`${x*u}px`},n[h])),r.map((x,h)=>l.jsx($,{x:`${x*u}px`,children:n[h]},n[h]))]}else return[a.map(r=>l.jsx(T,{x:`${(r-b)*u}px`},r)),a.map(r=>l.jsx($,{x:`${(r-b)*u-3}px`,children:r},r))]}function F(a){return a.reduce(function(b,t){return b>t.toString().length?b:t.toString().length})*12}function _(a,u,b){let t=F(a);const e=Object.keys(a).length;if(b.width.size>t*e)return[a.map((s,d)=>l.jsx(T,{x:`${d*u}px`},s)),a.map((s,d)=>l.jsx($,{x:`${d*u-3}px`,children:s},s))];if(b.width.size<t)return[a.map((s,d)=>d==0?l.jsx(T,{x:`${d*u}px`},s):""),a.map((s,d)=>{if(d==0)return l.jsx($,{x:`${d*u-3}px`,children:s},s);if(d==2)return l.jsx($,{x:`${d*u-3}px`,children:"..."},s)})];if(b.width.size<t*e)return[a.map((s,d)=>l.jsx(T,{x:`${d*u}px`},s)),a.map((s,d)=>d==0||e===d+1?l.jsx($,{x:`${d*u-3}px`,children:s},s):l.jsx($,{x:`${d*u-3}px`,children:s.length<3?s:s.substr(0,3)+"..."},s))]}function S(a,u,b){return b+a/u}function N(a,u,b){let t=Math.max(0,Math.min(b.numItems-1,Math.round(a-b.firstItem))),e;return u.length===0?e=b.from+b.step*t:e=u[t],[e,t]}const ue=le.memo(function a(u){let{name:b,id:t,SVs:e,actions:s,ignoreUpdate:d,rendererName:L,callAction:M}=ae(u);a.baseStateVariable="index";const r=O.useRef(null),n=ne(re(L)),[x,h]=O.useState(0),v=O.useRef(!1),[p,w]=O.useState(0),k=e.type==="text"?0:e.firstItem;let f=e.width.size/(e.numItems-1);const[j,y]=O.useState(0);if(O.useEffect(()=>{if(r.current){const c=r.current.getBoundingClientRect();w(c.left)}},[]),O.useEffect(()=>{!v.current&&!d&&(y(e.index),e.type!=="text"?h(e.index/(e.numItems-1)*e.width.size):h(e.index*f))},[e.index]),e.hidden)return null;if(e.disabled){let c="";e.showControls?c=l.jsxs(q,{style:{marginBottom:"12px"},children:[l.jsx(R,{value:"Prev",onClick:g=>X(),disabled:!0}),l.jsx(R,{value:"Next",onClick:g=>U(),disabled:!0})]}):c=null;let i="";e.type==="text"?i=_(e.items,f,e):i=Z(e.items,f,k,e);let m="";e.showTicks===!1?m=null:m=i;let o=null;if(e.label){let g=e.label;e.labelHasLatex&&(g=l.jsx(H,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:g})),e.showValue?o=l.jsxs(C,{children:[g," = "+e.valueForDisplay]}):o=l.jsx(C,{children:g})}else!e.label&&e.showValue?o=l.jsx(C,{children:e.valueForDisplay}):o=null;return l.jsxs(K,{labeled:e.showControls||e.label,noTicked:e.showTicks===!1,ref:r,children:[l.jsx("div",{id:`${t}-label`,style:{height:e.label||e.showValue?"20px":"0px"},children:o}),l.jsx(J,{children:l.jsxs(Q,{width:`${e.width.size}px`,id:t,children:[l.jsx(Y,{disabled:!0,style:{left:`${x-4}px`},id:`${t}-handle`}),m]})}),l.jsx("div",{style:{height:e.showControls?"20px":"0px"},children:c})]})}function D(c){if(v.current=!0,document.addEventListener("mousemove",W),document.addEventListener("mouseup",V),h(c.nativeEvent.clientX-p),e.type!=="text"){let i=S(c.nativeEvent.clientX-p,f,k),m=N(i,e.items,e);y(m[1]),n(o=>{let g={...o};return g.ignoreUpdate=!0,g}),M({action:s.changeValue,args:{value:m[0],transient:!0},baseVariableValue:m[1]})}else{let i=Math.round((c.nativeEvent.clientX-p)/f);y(i),n(m=>{let o={...m};return o.ignoreUpdate=!0,o}),M({action:s.changeValue,args:{value:e.items[i],transient:!0},baseVariableValue:i})}}function V(c){if(document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",V),!!v.current)if(v.current=!1,e.type!=="text"){let m=function(g,E,te){return te+g/E}(c.clientX-p,f,k),o=N(m,e.items,e);y(o[1]),h(o[1]*f),n(g=>{let E={...g};return E.ignoreUpdate=!0,E}),M({action:s.changeValue,args:{value:o[0]},baseVariableValue:o[1]})}else{let i=Math.round((c.clientX-p)/f);i=Math.max(0,Math.min(e.numItems-1,i)),y(i),h(i*f),n(m=>{let o={...m};return o.ignoreUpdate=!0,o}),M({action:s.changeValue,args:{value:e.items[i]},baseVariableValue:i})}}function W(c){if(v.current)if(h(Math.max(0,Math.min(e.width.size,c.clientX-p))),e.type!=="text"){let i=S(c.clientX-p,f,k),m=N(i,e.items,e);y(m[1]),n(o=>{let g={...o};return g.ignoreUpdate=!0,g}),M({action:s.changeValue,args:{value:m[0],transient:!0,skippable:!0},baseVariableValue:m[1]})}else{let i=Math.round((c.clientX-p)/f);y(i),n(m=>{let o={...m};return o.ignoreUpdate=!0,o}),M({action:s.changeValue,args:{value:e.items[i],transient:!0,skippable:!0},baseVariableValue:i})}}function U(c){if(j===e.numItems-1)return;let i;e.items.length===0?i=e.from+e.step*(j+1):i=e.items[j+1],n(m=>{let o={...m};return o.ignoreUpdate=!0,o}),M({action:s.changeValue,args:{value:i},baseVariableValue:j+1}),y(j+1)}function X(c){if(j===0)return;let i;e.items.length===0?i=e.from+e.step*(j-1):i=e.items[j-1],n(m=>{let o={...m};return o.ignoreUpdate=!0,o}),M({action:s.changeValue,args:{value:i},baseVariableValue:j-1}),y(j-1)}function ee(c){if(c.key==="ArrowLeft")return X();if(c.key==="ArrowRight")return U()}let P="";e.type==="text"?P=_(e.items,f,e):P=Z(e.items,f,k,e);let B="";e.showTicks===!1?B=null:B=P;let G="";e.showControls&&(G=l.jsxs(q,{style:{marginBottom:"12px"},children:[l.jsx(R,{value:"Prev",onClick:c=>X(),id:`${t}-prevbutton`}),l.jsx(R,{value:"Next",onClick:c=>U(),id:`${t}-nextbutton`})]})),e.showValue&&(x-4,e.valueForDisplay);let z=null;if(e.label){let c=e.label;e.labelHasLatex&&(c=l.jsx(H,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:c})),e.showValue?z=l.jsxs(C,{children:[c," = "+e.valueForDisplay]}):z=l.jsx(C,{children:c})}else!e.label&&e.showValue?z=l.jsx(C,{children:e.valueForDisplay}):z=null;return l.jsxs(K,{ref:r,labeled:e.showControls||e.label,noTicked:e.showTicks===!1,onKeyDown:ee,tabIndex:"0",children:[l.jsx("div",{id:`${t}-label`,style:{height:e.label||e.showValue?"20px":"0px"},children:z}),l.jsx(J,{onMouseDown:D,children:l.jsxs(Q,{width:`${e.width.size}px`,id:t,children:[l.jsx(Y,{style:{left:`${x-4}px`},id:`${t}-handle`}),B]})}),l.jsx("div",{style:{height:e.showControls?"20px":"0px"},children:G})]})});export{ue as default};
