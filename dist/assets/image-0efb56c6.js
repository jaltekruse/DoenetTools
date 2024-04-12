import{g as se,bI as Q,ao as ce,bl as ue,r as i,bo as q,j as _,bn as le,a as fe}from"./index-f8d734dc.js";import{BoardContext as de,IMAGE_LAYER_OFFSET as K}from"./graph-eb7e5c8e.js";import{s as me}from"./css-14ccef8c.js";async function pe(a,b,h=!1){if(h)try{return await he(a)}catch{}if(!b){let{data:p}=await se.get("/api/getMimeType.php",{params:{cid:a}});b=p["mime-type"]}return ge(a,b)}async function he(a){let b=new AbortController,h=b.signal,p=setTimeout(()=>{b.abort()},1e3);try{let e=await fetch(`https://${a}.ipfs.dweb.link/`,{signal:h});if(clearTimeout(p),e.ok){let l=await e.blob();if(await Q(await l.arrayBuffer())===a){let j=URL.createObjectURL(l);return{mediaBlob:l,mediaURL:j}}else return Promise.reject(new Error("cid mismatch"))}else return Promise.reject(new Error(`cid not found: ${a}`))}catch{return Promise.reject(new Error(`cid not found: ${a}`))}}async function ge(a,b){try{let h=be(b),p=await fetch(`/media/${a}.${h}`);if(p.ok){let e=await p.blob();if(await Q(await e.arrayBuffer())===a){let m=URL.createObjectURL(e);return{mediaBlob:e,mediaURL:m}}else return Promise.reject(new Error("cid mismatch"))}else return Promise.reject(new Error(`cid not found: ${a}`))}catch{return Promise.reject(new Error(`cid not found: ${a}`))}}function be(a){return a==="image/png"?"png":a==="image/jpeg"?"jpg":a==="text/csv"?"csv":"txt"}const Ce=ce.memo(function a(b){var T;let{name:h,id:p,SVs:e,actions:l,callAction:m}=ue(b,!1),[j,Z]=i.useState(null);a.ignoreActionsWithoutCore=()=>!0;let t=i.useRef(null),E=i.useRef(null);const s=i.useContext(de);let F=i.useRef(null),P=i.useRef(null),X=i.useRef(!1),I=i.useRef(!1),y=i.useRef(!1),R=i.useRef(null),C=i.useRef(null),L=i.useRef(null),B=i.useRef(null),A=i.useRef(null),v=i.useRef(null),V=i.useRef(null),G=i.useRef(e.rotate),w=i.useRef(!1),S=i.useRef(!1);w.current=e.fixed,S.current=!e.draggable||e.fixLocation||e.fixed;const M=(e.cid?j:e.source)||"";let ee=o=>{m({action:l.recordVisibilityChange,args:{isVisible:o}})};i.useEffect(()=>()=>{m({action:l.recordVisibilityChange,args:{isVisible:!1}})},[]),i.useEffect(()=>{e.cid&&pe(e.cid,e.mimeType).then(o=>{Z(o.mediaURL)}).catch(o=>{})},[]),i.useEffect(()=>()=>{t.current!==null&&te(),s&&s.off("move",z)},[]),i.useEffect(()=>{s&&s.on("move",z)},[s]);function re(){var W;let o={visible:!e.hidden,fixed:w.current,layer:10*e.layer+K,highlight:!S.current},c;try{let u=q.fromAst(e.anchor),x=[u.get_component(0).evaluate_to_constant(),u.get_component(1).evaluate_to_constant()];Number.isFinite(x[0])||(x[0]=0,o.visible=!1),Number.isFinite(x[1])||(x[1]=0,o.visible=!1),c=s.create("point",x,{visible:!1})}catch{o.visible=!1,c=s.create("point",[0,0],{visible:!1})}o.anchor=c;let d=((W=e.widthForGraph)==null?void 0:W.size)||1,g=d/(e.aspectRatio||1);Number.isFinite(d)&&Number.isFinite(g)||(d=0,g=0);let n;e.positionFromAnchor==="center"?n=[-d/2,-g/2]:e.positionFromAnchor==="lowerleft"?n=[-d,-g]:e.positionFromAnchor==="lowerright"?n=[0,-g]:e.positionFromAnchor==="upperleft"?n=[-d,0]:e.positionFromAnchor==="upperright"?n=[0,0]:e.positionFromAnchor==="bottom"?n=[-d/2,-g]:e.positionFromAnchor==="top"?n=[-d/2,0]:e.positionFromAnchor==="right"?n=[0,-g/2]:n=[-d,-g/2],v.current=n;let r=s.create("image",[M,n,[d,g]],o);r.isDraggable=!S.current;var U=s.create("transform",[function(){return-r.X()-r.W()*.5},function(){return-r.Y()-r.H()*.5}],{type:"translate"}),f=s.create("transform",[function(){return r.X()+r.W()*.5},function(){return r.Y()+r.H()*.5}],{type:"translate"}),$=s.create("transform",[e.rotate],{type:"rotate"});U.bindTo(r),$.bindTo(r),f.bindTo(r),V.current=$,G.current=e.rotate,r.on("down",function(u){F.current=[u.x,u.y],P.current=[...c.coords.scrCoords],y.current=!1,X.current=!0,I.current=!1,w.current||m({action:l.imageFocused,args:{name:h}})}),r.on("hit",function(u){P.current=[...c.coords.scrCoords],y.current=!1,m({action:l.imageFocused,args:{name:h}})}),r.on("up",function(u){y.current?(m({action:l.moveImage,args:{x:R.current,y:C.current}}),y.current=!1):!I.current&&!w.current&&m({action:l.imageClicked,args:{name:h}}),X.current=!1}),r.on("keyfocusout",function(u){y.current&&(m({action:l.moveImage,args:{x:R.current,y:C.current}}),y.current=!1)}),r.on("drag",function(u){let x=u.type==="pointermove";(!x||Math.abs(u.x-F.current[0])>.1||Math.abs(u.y-F.current[1])>.1)&&(y.current=!0);let[D,N,J,Y]=s.getBoundingBox(),ne=D+.01*(J-D)-v.current[0]-A.current[0],ie=J-.01*(J-D)-v.current[0],oe=Y+.01*(N-Y)-v.current[1]-A.current[1],ae=N-.01*(N-Y)-v.current[1];if(x){var H=s.origin.scrCoords;R.current=(P.current[1]+u.x-F.current[0]-H[1])/s.unitX,C.current=(H[2]-(P.current[2]+u.y-F.current[1]))/s.unitY}else R.current=c.X()+r.relativeCoords.usrCoords[1]-v.current[0],C.current=c.Y()+r.relativeCoords.usrCoords[2]-v.current[1];R.current=Math.min(ie,Math.max(ne,R.current)),C.current=Math.min(ae,Math.max(oe,C.current)),m({action:l.moveImage,args:{x:R.current,y:C.current,transient:!0,skippable:!0}}),r.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,v.current),c.coords.setCoordinates(JXG.COORDS_BY_USER,L.current)}),r.on("keydown",function(u){u.key==="Enter"&&(y.current&&(m({action:l.moveImage,args:{x:R.current,y:C.current}}),y.current=!1),m({action:l.imageClicked,args:{name:h}}))}),t.current=r,E.current=c,B.current=e.positionFromAnchor,A.current=[d,g],t.current.fullUpdate()}function z(o){X.current&&(Math.abs(o.x-F.current[0])>.1||Math.abs(o.y-F.current[1])>.1)&&(I.current=!0)}function te(){t.current.off("drag"),t.current.off("down"),t.current.off("hit"),t.current.off("up"),t.current.off("keyfocusout"),t.current.off("keydown"),s.removeObject(t.current),t.current=null}if(s){let o;try{let c=q.fromAst(e.anchor);o=[c.get_component(0).evaluate_to_constant(),c.get_component(1).evaluate_to_constant()]}catch{o=[NaN,NaN]}if(L.current=o,t.current===null){if(e.cid&&!j)return null;re()}else{E.current.coords.setCoordinates(JXG.COORDS_BY_USER,o);let c=!e.hidden;if(Number.isFinite(o[0])&&Number.isFinite(o[1])){let f=t.current.visProp.visible!==c;t.current.visProp.visible=c,t.current.visPropCalc.visible=c,f&&t.current.setAttribute({visible:c})}else t.current.visProp.visible=!1,t.current.visPropCalc.visible=!1;let d=10*e.layer+K;t.current.visProp.layer!==d&&t.current.setAttribute({layer:d}),t.current.visProp.highlight=!S.current,t.current.visProp.fixed=w.current,t.current.isDraggable=!S.current,t.current.needsUpdate=!0;let n=((T=e.widthForGraph)==null?void 0:T.size)||1,r=n/(e.aspectRatio||1);Number.isFinite(n)&&Number.isFinite(r)||(n=0,r=0);let U=n!==A.current[0]||r!==A.current[1];if(U&&(t.current.setSize(n,r),A.current=[n,r]),e.rotate!=G.current&&(V.current.setMatrix(s,"rotate",[e.rotate]),G.current=e.rotate),e.positionFromAnchor!==B.current||U){let f;e.positionFromAnchor==="center"?f=[-n/2,-r/2]:e.positionFromAnchor==="lowerleft"?f=[-n,-r]:e.positionFromAnchor==="lowerright"?f=[0,-r]:e.positionFromAnchor==="upperleft"?f=[-n,0]:e.positionFromAnchor==="upperright"?f=[0,0]:e.positionFromAnchor==="bottom"?f=[-n/2,-r]:e.positionFromAnchor==="top"?f=[-n/2,0]:e.positionFromAnchor==="right"?f=[0,-r/2]:f=[-n,-r/2],t.current.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,f),B.current=e.positionFromAnchor,v.current=f,t.current.fullUpdate()}else t.current.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,v.current),t.current.update();E.current.needsUpdate=!0,E.current.update(),s.updateRenderer()}return _("a",{name:p})}if(e.hidden)return null;let k={};e.displayMode==="inline"?k={display:"inline-block",verticalAlign:"middle",margin:"12px 0"}:k={display:"flex",justifyContent:e.horizontalAlign,margin:"12px 0"};let O={maxWidth:"100%",width:me(e.width)};return e.aspectRatio>0&&(O.aspectRatio=String(e.aspectRatio)),M||(O.border="var(--mainBorder)"),_(le,{partialVisibility:!0,onChange:ee,children:fe("div",{style:k,children:[_("a",{name:p}),M?_("img",{id:p,src:M,style:O,alt:e.description}):_("div",{id:p,style:O,children:e.description})]})})});export{Ce as default};
