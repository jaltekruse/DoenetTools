import{ao as ne,bl as oe,r as o,bw as ce,bo as V,bt as $,j as Y,bJ as se,a as ie,F as le}from"./index-f8d734dc.js";import{BoardContext as ue,TEXT_LAYER_OFFSET as H}from"./graph-eb7e5c8e.js";import"./css-14ccef8c.js";const xe=ne.memo(function I(W){let{name:R,id:D,SVs:t,actions:a,sourceOfUpdate:ae,callAction:d}=oe(W);I.ignoreActionsWithoutCore=()=>!0;let e=o.useRef(null),S=o.useRef(null),P=o.useRef(null);const c=o.useContext(ue);let y=o.useRef(null),A=o.useRef(null),M=o.useRef(!1),X=o.useRef(!1),u=o.useRef(!1),f=o.useRef(null),h=o.useRef(null),B=o.useRef(null),O=o.useRef(null),v=o.useRef(!1),C=o.useRef(!1);v.current=t.fixed,C.current=!t.draggable||t.fixLocation||t.fixed;const{darkMode:b}=o.useContext(ce)||{};o.useEffect(()=>()=>{e.current!==null&&K(),c&&c.off("move",N)},[]),o.useEffect(()=>{c&&c.on("move",N)},[c]);function q(){let i=b==="dark"?t.selectedStyle.textColorDarkMode:t.selectedStyle.textColor,l=b==="dark"?t.selectedStyle.backgroundColorDarkMode:t.selectedStyle.backgroundColor,m="";l&&(m+=`background-color: ${l}`);let x={visible:!t.hidden,fixed:v.current,layer:10*t.layer+H,cssStyle:m,highlightCssStyle:m,strokeColor:i,strokeOpacity:1,highlightStrokeColor:i,highlightStrokeOpacity:.5,highlight:!C.current,parse:!1},s;try{let r=V.fromAst(t.anchor),p=[r.get_component(0).evaluate_to_constant(),r.get_component(1).evaluate_to_constant()];Number.isFinite(p[0])||(p[0]=0,x.visible=!1),Number.isFinite(p[1])||(p[1]=0,x.visible=!1),s=c.create("point",p,{visible:!1})}catch{x.visible=!1,s=c.create("point",[0,0],{visible:!1})}x.anchor=s;let{anchorx:k,anchory:g}=$(t.positionFromAnchor);x.anchorx=k,x.anchory=g,P.current=[k,g];let n=c.create("text",[0,0,t.text],x);n.isDraggable=!C.current,n.on("down",function(r){y.current=[r.x,r.y],A.current=[...s.coords.scrCoords],u.current=!1,M.current=!0,X.current=!1,v.current||d({action:a.textFocused,args:{name:R}})}),n.on("hit",function(r){A.current=[...s.coords.scrCoords],u.current=!1,d({action:a.textFocused,args:{name:R}})}),n.on("up",function(r){u.current?(d({action:a.moveText,args:{x:f.current,y:h.current}}),u.current=!1):!X.current&&!v.current&&d({action:a.textClicked,args:{name:R}}),M.current=!1}),n.on("keyfocusout",function(r){u.current&&(d({action:a.moveText,args:{x:f.current,y:h.current}}),u.current=!1)}),n.on("drag",function(r){let p=r.type==="pointermove";(!p||Math.abs(r.x-y.current[0])>.1||Math.abs(r.y-y.current[1])>.1)&&(u.current=!0);let[T,w,E,J]=c.getBoundingBox(),G=n.size[0]/c.unitX,j=n.size[1]/c.unitY,U=P.current[0],L=P.current[1],_=0;U==="middle"?_=-G/2:U==="right"&&(_=-G);let F=0;L==="middle"?F=-j/2:L==="top"&&(F=-j);let Z=T+.04*(E-T)-_-G,ee=E-.04*(E-T)-_,te=J+.04*(w-J)-F-j,re=w-.04*(w-J)-F;if(p){var z=c.origin.scrCoords;f.current=(A.current[1]+r.x-y.current[0]-z[1])/c.unitX,h.current=(z[2]-(A.current[2]+r.y-y.current[1]))/c.unitY}else f.current=s.X()+n.relativeCoords.usrCoords[1],h.current=s.Y()+n.relativeCoords.usrCoords[2];f.current=Math.min(ee,Math.max(Z,f.current)),h.current=Math.min(re,Math.max(te,h.current)),d({action:a.moveText,args:{x:f.current,y:h.current,transient:!0,skippable:!0}}),n.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,[0,0]),s.coords.setCoordinates(JXG.COORDS_BY_USER,B.current)}),n.on("keydown",function(r){r.key==="Enter"&&(u.current&&(d({action:a.moveText,args:{x:f.current,y:h.current}}),u.current=!1),d({action:a.textClicked,args:{name:R}}))}),e.current=n,S.current=s,O.current=t.positionFromAnchor}function N(i){M.current&&(Math.abs(i.x-y.current[0])>.1||Math.abs(i.y-y.current[1])>.1)&&(X.current=!0)}function K(){e.current.off("drag"),e.current.off("down"),e.current.off("hit"),e.current.off("up"),e.current.off("keyfocusout"),e.current.off("keydown"),c.removeObject(e.current),e.current=null}if(c){let i;try{let l=V.fromAst(t.anchor);i=[l.get_component(0).evaluate_to_constant(),l.get_component(1).evaluate_to_constant()]}catch{i=[NaN,NaN]}if(B.current=i,e.current===null)q();else{e.current.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,[0,0]),S.current.coords.setCoordinates(JXG.COORDS_BY_USER,i),e.current.setText(t.text);let l=!t.hidden;if(Number.isFinite(i[0])&&Number.isFinite(i[1])){let n=e.current.visProp.visible!==l;e.current.visProp.visible=l,e.current.visPropCalc.visible=l,n&&e.current.setAttribute({visible:l})}else e.current.visProp.visible=!1,e.current.visPropCalc.visible=!1;let m=10*t.layer+H;e.current.visProp.layer!==m&&e.current.setAttribute({layer:m});let s=b==="dark"?t.selectedStyle.textColorDarkMode:t.selectedStyle.textColor,k=b==="dark"?t.selectedStyle.backgroundColorDarkMode:t.selectedStyle.backgroundColor,g="";if(k?g+=`background-color: ${k}`:g+="background-color: transparent",e.current.visProp.strokecolor!==s&&(e.current.visProp.strokecolor=s,e.current.visProp.highlightstrokecolor=s),e.current.visProp.cssstyle!==g&&(e.current.visProp.cssstyle=g,e.current.visProp.highlightcssstyle=g),e.current.visProp.highlight=!C.current,e.current.visProp.fixed=v.current,e.current.isDraggable=!C.current,e.current.needsUpdate=!0,t.positionFromAnchor!==O.current){let{anchorx:n,anchory:r}=$(t.positionFromAnchor);e.current.visProp.anchorx=n,e.current.visProp.anchory=r,P.current=[n,r],O.current=t.positionFromAnchor,e.current.fullUpdate()}else e.current.update();S.current.needsUpdate=!0,S.current.update(),c.updateRenderer()}return Y("a",{name:D})}if(t.hidden)return null;let Q=se(b,t.selectedStyle);return ie(le,{children:[Y("a",{name:D}),Y("span",{id:D,style:Q,children:t.text})]})});export{xe as default};
