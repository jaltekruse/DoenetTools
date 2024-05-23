import{R as se,u as ce,r as o,af as ae,C as W,a as R,V as ue}from"./index-DVZ7nus4.js";import{BoardContext as le,IMAGE_LAYER_OFFSET as H}from"./graph-1a05b976-BUHOs_UM.js";import{s as fe}from"./css-5483d03f-CnY6i4xu.js";const he=se.memo(function $(q){var Y;let{name:_,id:S,SVs:e,actions:m,callAction:p}=ce(q,!1),[k,K]=o.useState(null);$.ignoreActionsWithoutCore=()=>!0;let r=o.useRef(null),w=o.useRef(null);const s=o.useContext(le);let x=o.useRef(null),O=o.useRef(null),j=o.useRef(!1),G=o.useRef(!1),g=o.useRef(!1),v=o.useRef(null),b=o.useRef(null),B=o.useRef(null),M=o.useRef(null),C=o.useRef(null),h=o.useRef(null),V=o.useRef(null),P=o.useRef(e.rotate),A=o.useRef(!1),F=o.useRef(!1);A.current=e.fixed,F.current=!e.draggable||e.fixLocation||e.fixed;const X=(e.cid?k:e.source)||"";let Q=c=>{p({action:m.recordVisibilityChange,args:{isVisible:c}})};o.useEffect(()=>()=>{p({action:m.recordVisibilityChange,args:{isVisible:!1}})},[]),o.useEffect(()=>{e.cid&&ae(e.cid,e.mimeType).then(c=>{K(c.mediaURL)}).catch(c=>{})},[]),o.useEffect(()=>()=>{r.current!==null&&ee(),s&&s.off("move",z)},[]),o.useEffect(()=>{s&&s.on("move",z)},[s]);function Z(){var c;let l={visible:!e.hidden,fixed:A.current,layer:10*e.layer+H,highlight:!F.current},f;try{let a=W.fromAst(e.anchor),y=[a.get_component(0).evaluate_to_constant(),a.get_component(1).evaluate_to_constant()];Number.isFinite(y[0])||(y[0]=0,l.visible=!1),Number.isFinite(y[1])||(y[1]=0,l.visible=!1),f=s.create("point",y,{visible:!1})}catch{l.visible=!1,f=s.create("point",[0,0],{visible:!1})}l.anchor=f;let d=((c=e.widthForGraph)==null?void 0:c.size)||1,n=d/(e.aspectRatio||1);Number.isFinite(d)&&Number.isFinite(n)||(d=0,n=0);let i;e.positionFromAnchor==="center"?i=[-d/2,-n/2]:e.positionFromAnchor==="lowerleft"?i=[-d,-n]:e.positionFromAnchor==="lowerright"?i=[0,-n]:e.positionFromAnchor==="upperleft"?i=[-d,0]:e.positionFromAnchor==="upperright"?i=[0,0]:e.positionFromAnchor==="bottom"?i=[-d/2,-n]:e.positionFromAnchor==="top"?i=[-d/2,0]:e.positionFromAnchor==="right"?i=[0,-n/2]:i=[-d,-n/2],h.current=i;let t=s.create("image",[X,i,[d,n]],l);t.isDraggable=!F.current;var u=s.create("transform",[function(){return-t.X()-t.W()*.5},function(){return-t.Y()-t.H()*.5}],{type:"translate"}),re=s.create("transform",[function(){return t.X()+t.W()*.5},function(){return t.Y()+t.H()*.5}],{type:"translate"}),T=s.create("transform",[e.rotate],{type:"rotate"});u.bindTo(t),T.bindTo(t),re.bindTo(t),V.current=T,P.current=e.rotate,t.on("down",function(a){x.current=[a.x,a.y],O.current=[...f.coords.scrCoords],g.current=!1,j.current=!0,G.current=!1,A.current||p({action:m.imageFocused,args:{name:_}})}),t.on("hit",function(a){O.current=[...f.coords.scrCoords],g.current=!1,p({action:m.imageFocused,args:{name:_}})}),t.on("up",function(a){g.current?(p({action:m.moveImage,args:{x:v.current,y:b.current}}),g.current=!1):!G.current&&!A.current&&p({action:m.imageClicked,args:{name:_}}),j.current=!1}),t.on("keyfocusout",function(a){g.current&&(p({action:m.moveImage,args:{x:v.current,y:b.current}}),g.current=!1)}),t.on("drag",function(a){let y=a.type==="pointermove";(!y||Math.abs(a.x-x.current[0])>.1||Math.abs(a.y-x.current[1])>.1)&&(g.current=!0);let[I,N,J,U]=s.getBoundingBox(),te=I+.01*(J-I)-h.current[0]-C.current[0],ne=J-.01*(J-I)-h.current[0],ie=U+.01*(N-U)-h.current[1]-C.current[1],oe=N-.01*(N-U)-h.current[1];if(y){var L=s.origin.scrCoords;v.current=(O.current[1]+a.x-x.current[0]-L[1])/s.unitX,b.current=(L[2]-(O.current[2]+a.y-x.current[1]))/s.unitY}else v.current=f.X()+t.relativeCoords.usrCoords[1]-h.current[0],b.current=f.Y()+t.relativeCoords.usrCoords[2]-h.current[1];v.current=Math.min(ne,Math.max(te,v.current)),b.current=Math.min(oe,Math.max(ie,b.current)),p({action:m.moveImage,args:{x:v.current,y:b.current,transient:!0,skippable:!0}}),t.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,h.current),f.coords.setCoordinates(JXG.COORDS_BY_USER,B.current)}),t.on("keydown",function(a){a.key==="Enter"&&(g.current&&(p({action:m.moveImage,args:{x:v.current,y:b.current}}),g.current=!1),p({action:m.imageClicked,args:{name:_}}))}),r.current=t,w.current=f,M.current=e.positionFromAnchor,C.current=[d,n],r.current.fullUpdate()}function z(c){j.current&&(Math.abs(c.x-x.current[0])>.1||Math.abs(c.y-x.current[1])>.1)&&(G.current=!0)}function ee(){r.current.off("drag"),r.current.off("down"),r.current.off("hit"),r.current.off("up"),r.current.off("keyfocusout"),r.current.off("keydown"),s.removeObject(r.current),r.current=null}if(s){let c;try{let l=W.fromAst(e.anchor);c=[l.get_component(0).evaluate_to_constant(),l.get_component(1).evaluate_to_constant()]}catch{c=[NaN,NaN]}if(B.current=c,r.current===null){if(e.cid&&!k)return null;Z()}else{w.current.coords.setCoordinates(JXG.COORDS_BY_USER,c);let l=!e.hidden;if(Number.isFinite(c[0])&&Number.isFinite(c[1])){let u=r.current.visProp.visible!==l;r.current.visProp.visible=l,r.current.visPropCalc.visible=l,u&&r.current.setAttribute({visible:l})}else r.current.visProp.visible=!1,r.current.visPropCalc.visible=!1;let f=10*e.layer+H;r.current.visProp.layer!==f&&r.current.setAttribute({layer:f}),r.current.visProp.highlight=!F.current,r.current.visProp.fixed=A.current,r.current.isDraggable=!F.current,r.current.needsUpdate=!0;let n=((Y=e.widthForGraph)==null?void 0:Y.size)||1,i=n/(e.aspectRatio||1);Number.isFinite(n)&&Number.isFinite(i)||(n=0,i=0);let t=n!==C.current[0]||i!==C.current[1];if(t&&(r.current.setSize(n,i),C.current=[n,i]),e.rotate!=P.current&&(V.current.setMatrix(s,"rotate",[e.rotate]),P.current=e.rotate),e.positionFromAnchor!==M.current||t){let u;e.positionFromAnchor==="center"?u=[-n/2,-i/2]:e.positionFromAnchor==="lowerleft"?u=[-n,-i]:e.positionFromAnchor==="lowerright"?u=[0,-i]:e.positionFromAnchor==="upperleft"?u=[-n,0]:e.positionFromAnchor==="upperright"?u=[0,0]:e.positionFromAnchor==="bottom"?u=[-n/2,-i]:e.positionFromAnchor==="top"?u=[-n/2,0]:e.positionFromAnchor==="right"?u=[0,-i/2]:u=[-n,-i/2],r.current.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,u),M.current=e.positionFromAnchor,h.current=u,r.current.fullUpdate()}else r.current.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,h.current),r.current.update();w.current.needsUpdate=!0,w.current.update(),s.updateRenderer()}return R.jsx("a",{name:S})}if(e.hidden)return null;let D={};e.displayMode==="inline"?D={display:"inline-block",verticalAlign:"middle",margin:"12px 0"}:D={display:"flex",justifyContent:e.horizontalAlign,margin:"12px 0"};let E={maxWidth:"100%",width:fe(e.width)};return e.aspectRatio>0&&(E.aspectRatio=String(e.aspectRatio)),X||(E.border="var(--mainBorder)"),R.jsx(ue,{partialVisibility:!0,onChange:Q,children:R.jsxs("div",{style:D,children:[R.jsx("a",{name:S}),X?R.jsx("img",{id:S,src:X,style:E,alt:e.description}):R.jsx("div",{id:S,style:E,children:e.description})]})})});export{he as default};
