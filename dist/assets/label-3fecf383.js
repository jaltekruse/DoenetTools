import{ao as oe,bl as le,r as l,bw as ce,bo as $,bt as H,j as Y,bJ as ae,a as ie,bm as se}from"./index-2f97b159.js";import{BoardContext as ue,TEXT_LAYER_OFFSET as I}from"./graph-65272f56.js";import"./css-14ccef8c.js";const pe=oe.memo(function W(q){let{name:R,id:F,SVs:r,children:de,actions:u,callAction:d}=le(q);W.ignoreActionsWithoutCore=()=>!0;let e=l.useRef(null),S=l.useRef(null),P=l.useRef(null);const t=l.useContext(ue);let y=l.useRef(null),A=l.useRef(null),D=l.useRef(!1),L=l.useRef(!1),s=l.useRef(!1),f=l.useRef(null),h=l.useRef(null),B=l.useRef(null),X=l.useRef(null),m=l.useRef(!1),v=l.useRef(!1);m.current=r.fixed,v.current=!r.draggable||r.fixLocation||r.fixed;const{darkMode:C}=l.useContext(ce)||{};l.useEffect(()=>()=>{e.current!==null&&Q(),t&&t.off("move",N)},[]),l.useEffect(()=>{t&&t.on("move",N)},[t]);function K(){let a=C==="dark"?r.selectedStyle.textColorDarkMode:r.selectedStyle.textColor,i=C==="dark"?r.selectedStyle.backgroundColorDarkMode:r.selectedStyle.backgroundColor,g="";i&&(g+=`background-color: ${i}`);let b={visible:!r.hidden,fixed:m.current,layer:10*r.layer+I,cssStyle:g,highlightCssStyle:g,strokeColor:a,strokeOpacity:1,highlightStrokeColor:a,highlightStrokeOpacity:.5,highlight:!v.current,useMathJax:r.hasLatex,parse:!1},c;try{let n=$.fromAst(r.anchor),x=[n.get_component(0).evaluate_to_constant(),n.get_component(1).evaluate_to_constant()];Number.isFinite(x[0])||(x[0]=0,b.visible=!1),Number.isFinite(x[1])||(x[1]=0,b.visible=!1),c=t.create("point",x,{visible:!1})}catch{b.visible=!1,c=t.create("point",[0,0],{visible:!1})}b.anchor=c;let{anchorx:k,anchory:p}=H(r.positionFromAnchor);b.anchorx=k,b.anchory=p,P.current=[k,p];let o=t.create("text",[0,0,r.value],b);o.isDraggable=!v.current,o.on("down",function(n){y.current=[n.x,n.y],A.current=[...c.coords.scrCoords],s.current=!1,D.current=!0,L.current=!1,m.current||d({action:u.labelFocused,args:{name:R}})}),o.on("hit",function(n){A.current=[...c.coords.scrCoords],s.current=!1,d({action:u.labelFocused,args:{name:R}})}),o.on("up",function(n){s.current?(d({action:u.moveLabel,args:{x:f.current,y:h.current}}),s.current=!1):!L.current&&!m.current&&d({action:u.labelClicked,args:{name:R}}),D.current=!1}),o.on("keyfocusout",function(n){s.current&&(d({action:u.moveLabel,args:{x:f.current,y:h.current}}),s.current=!1)}),o.on("drag",function(n){let x=n.type==="pointermove";(!x||Math.abs(n.x-y.current[0])>.1||Math.abs(n.y-y.current[1])>.1)&&(s.current=!0);let[w,O,E,j]=t.getBoundingBox(),G=o.size[0]/t.unitX,U=o.size[1]/t.unitY,T=P.current[0],z=P.current[1],_=0;T==="middle"?_=-G/2:T==="right"&&(_=-G);let M=0;z==="middle"?M=-U/2:z==="top"&&(M=-U);let ee=w+.04*(E-w)-_-G,re=E-.04*(E-w)-_,te=j+.04*(O-j)-M-U,ne=O-.04*(O-j)-M;if(x){var V=t.origin.scrCoords;f.current=(A.current[1]+n.x-y.current[0]-V[1])/t.unitX,h.current=(V[2]-(A.current[2]+n.y-y.current[1]))/t.unitY}else f.current=c.X()+o.relativeCoords.usrCoords[1],h.current=c.Y()+o.relativeCoords.usrCoords[2];f.current=Math.min(re,Math.max(ee,f.current)),h.current=Math.min(ne,Math.max(te,h.current)),d({action:u.moveLabel,args:{x:f.current,y:h.current,transient:!0,skippable:!0}}),o.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,[0,0]),c.coords.setCoordinates(JXG.COORDS_BY_USER,B.current)}),o.on("keydown",function(n){n.key==="Enter"&&(s.current&&(d({action:u.moveLabel,args:{x:f.current,y:h.current}}),s.current=!1),d({action:u.labelClicked,args:{name:R}}))}),e.current=o,S.current=c,X.current=r.positionFromAnchor,r.hasLatex&&setTimeout(()=>{e.current&&(e.current.needsUpdate=!0,e.current.setText(r.value),e.current.update(),t==null||t.updateRenderer())},1e3)}function N(a){D.current&&(Math.abs(a.x-y.current[0])>.1||Math.abs(a.y-y.current[1])>.1)&&(L.current=!0)}function Q(){e.current.off("drag"),e.current.off("down"),e.current.off("hit"),e.current.off("up"),e.current.off("keyfocusout"),e.current.off("keydown"),t.removeObject(e.current),e.current=null}if(t){let a;try{let i=$.fromAst(r.anchor);a=[i.get_component(0).evaluate_to_constant(),i.get_component(1).evaluate_to_constant()]}catch{a=[NaN,NaN]}if(B.current=a,e.current===null)K();else{e.current.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,[0,0]),S.current.coords.setCoordinates(JXG.COORDS_BY_USER,a),e.current.setText(r.value);let i=!r.hidden;if(Number.isFinite(a[0])&&Number.isFinite(a[1])){let o=e.current.visProp.visible!==i;e.current.visProp.visible=i,e.current.visPropCalc.visible=i,o&&e.current.setAttribute({visible:i})}else e.current.visProp.visible=!1,e.current.visPropCalc.visible=!1;let g=10*r.layer+I;e.current.visProp.layer!==g&&e.current.setAttribute({layer:g});let c=C==="dark"?r.selectedStyle.textColorDarkMode:r.selectedStyle.textColor,k=C==="dark"?r.selectedStyle.backgroundColorDarkMode:r.selectedStyle.backgroundColor,p="";if(k?p+=`background-color: ${k}`:p+="background-color: transparent",e.current.visProp.strokecolor!==c&&(e.current.visProp.strokecolor=c,e.current.visProp.highlightstrokecolor=c),e.current.visProp.cssstyle!==p&&(e.current.visProp.cssstyle=p,e.current.visProp.highlightcssstyle=p),e.current.visProp.highlight=!v.current,e.current.visProp.fixed=m.current,e.current.isDraggable=!v.current,e.current.needsUpdate=!0,r.positionFromAnchor!==X.current){let{anchorx:o,anchory:n}=H(r.positionFromAnchor);e.current.visProp.anchorx=o,e.current.visProp.anchory=n,P.current=[o,n],X.current=r.positionFromAnchor,e.current.fullUpdate()}else e.current.update();S.current.needsUpdate=!0,S.current.update(),t.updateRenderer()}return Y("a",{name:F})}if(r.hidden)return null;let Z=ae(C,r.selectedStyle),J=r.value;return r.hasLatex&&(J=Y(se.MathJax,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:J})),ie("span",{id:F,style:Z,children:[Y("a",{name:F}),J]})});export{pe as default};