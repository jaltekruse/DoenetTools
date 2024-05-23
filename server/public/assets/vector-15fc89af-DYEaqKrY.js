import{R as ee,u as re,r as u,P as te,a as S,ag as ne,M as oe}from"./index-CrSqH__w.js";import{BoardContext as ce,LINE_LAYER_OFFSET as H,VERTEX_LAYER_OFFSET as N}from"./graph-5fd7c87e-CqVNngzu.js";import"./css-5483d03f-CnY6i4xu.js";const se=ee.memo(function V($){let{name:p,id:A,SVs:e,actions:c,sourceOfUpdate:J,callAction:i}=re($);V.ignoreActionsWithoutCore=()=>!0;const l=u.useContext(ce);let r=u.useRef({}),f=u.useRef({}),d=u.useRef({}),b=u.useRef(null),_=u.useRef(null),w=u.useRef(!1),R=u.useRef(!1),n=u.useRef(!1),o=u.useRef(!1),F=u.useRef(null),m=u.useRef(null),x=u.useRef(null),I=u.useRef(null),M=u.useRef(null),E=u.useRef(!1),X=u.useRef(!1),j=u.useRef(!0),G=u.useRef(!0);M.current=e.numericalEndpoints,E.current=e.fixed,X.current=!e.draggable||e.fixLocation||e.fixed,G.current=e.tailDraggable&&!e.fixed&&!e.fixLocation,j.current=e.headDraggable&&!e.fixed&&!e.fixLocation;const{darkMode:W}=u.useContext(te)||{};u.useEffect(()=>()=>{Object.keys(r.current).length!==0&&B(),l&&l.off("move",U)},[]),u.useEffect(()=>{l&&l.on("move",U)},[l]);function q(){if(e.numericalEndpoints.length!==2||e.numericalEndpoints.some(t=>t.length!==2)){r.current={},f.current={},d.current={};return}let s=10*e.layer+H,a=10*e.layer+N,k=W==="dark"?e.selectedStyle.lineColorDarkMode:e.selectedStyle.lineColor;var h={name:e.labelForGraph,visible:!e.hidden,withLabel:e.labelForGraph!=="",fixed:E.current,layer:s,strokeColor:k,strokeOpacity:e.selectedStyle.lineOpacity,highlightStrokeColor:k,highlightStrokeOpacity:e.selectedStyle.lineOpacity*.5,strokeWidth:e.selectedStyle.lineWidth,highlightStrokeWidth:e.selectedStyle.lineWidth,dash:z(e.selectedStyle.lineStyle),highlight:!X.current,lastArrow:{type:1,size:3,highlightSize:3}};let O=[[...e.numericalEndpoints[0]],[...e.numericalEndpoints[1]]],D=Object.assign({},h);Object.assign(D,{withLabel:!1,fixed:!1,highlight:!0,fillColor:"none",strokeColor:"none",highlightStrokeColor:"none",highlightFillColor:getComputedStyle(document.documentElement).getPropertyValue("--mainGray"),layer:a,showInfoBox:e.showCoordsWhenDragging});let C=Object.assign({},D),L=G.current&&!e.hidden;C.visible=L;let g=l.create("point",O[0],C),v=Object.assign({},D),Z=j.current&&!e.hidden;v.visible=Z;let P=l.create("point",O[1],v);h.label={highlight:!1},e.labelHasLatex&&(h.label.useMathJax=!0),e.applyStyleToLabel?h.label.strokeColor=k:h.label.strokeColor="var(--canvastext)";let y=l.create("arrow",[g,P],h);y.isDraggable=!X.current,g.on("drag",t=>Y(t,0)),P.on("drag",t=>Y(t,1)),y.on("drag",t=>Y(t,-1)),g.on("up",t=>{!n.current&&o.current?i({action:c.moveVector,args:{tailcoords:x.current}}):!R.current&&!E.current&&i({action:c.vectorClicked,args:{name:p}}),F.current=null,w.current=!1}),P.on("up",t=>{n.current&&!o.current?i({action:c.moveVector,args:{headcoords:m.current}}):!R.current&&!E.current&&i({action:c.vectorClicked,args:{name:p}}),F.current=null,w.current=!1}),y.on("up",t=>{n.current&&o.current?i({action:c.moveVector,args:{headcoords:m.current,tailcoords:x.current}}):!R.current&&F.current===null&&!E.current&&i({action:c.vectorClicked,args:{name:p}}),w.current=!1}),g.on("keyfocusout",t=>{!n.current&&o.current&&i({action:c.moveVector,args:{tailcoords:x.current}}),n.current=!1,o.current=!1}),P.on("keyfocusout",t=>{n.current&&!o.current&&i({action:c.moveVector,args:{headcoords:m.current}}),n.current=!1,o.current=!1}),y.on("keyfocusout",t=>{n.current&&o.current&&i({action:c.moveVector,args:{headcoords:m.current,tailcoords:x.current}}),n.current=!1,o.current=!1}),g.on("down",function(t){n.current=!1,o.current=!1,b.current=[t.x,t.y],F.current=1,w.current=!0,R.current=!1,G.current&&i({action:c.vectorFocused,args:{name:p}})}),g.on("hit",function(t){n.current=!1,o.current=!1,i({action:c.vectorFocused,args:{name:p}})}),P.on("down",function(t){n.current=!1,o.current=!1,b.current=[t.x,t.y],F.current=2,w.current=!0,R.current=!1,j.current&&i({action:c.vectorFocused,args:{name:p}})}),P.on("hit",function(t){n.current=!1,o.current=!1,i({action:c.vectorFocused,args:{name:p}})}),y.on("down",function(t){n.current=!1,o.current=!1,b.current=[t.x,t.y],_.current=[[...y.point1.coords.scrCoords],[...y.point2.coords.scrCoords]],w.current=!0,R.current=!1,E.current||i({action:c.vectorFocused,args:{name:p}})}),y.on("hit",function(t){n.current=!1,o.current=!1,i({action:c.vectorFocused,args:{name:p}})}),g.on("keydown",t=>{t.key==="Enter"&&(!n.current&&o.current&&i({action:c.moveVector,args:{tailcoords:x.current}}),n.current=!1,o.current=!1,i({action:c.vectorClicked,args:{name:p}}))}),P.on("keydown",t=>{t.key==="Enter"&&(n.current&&!o.current&&i({action:c.moveVector,args:{headcoords:m.current}}),n.current=!1,o.current=!1,i({action:c.vectorClicked,args:{name:p}}))}),y.on("keydown",t=>{t.key==="Enter"&&(n.current&&o.current&&i({action:c.moveVector,args:{headcoords:m.current,tailcoords:x.current}}),n.current=!1,o.current=!1,i({action:c.vectorClicked,args:{name:p}}))}),r.current=y,f.current=g,d.current=P}function U(s){w.current&&(Math.abs(s.x-b.current[0])>.1||Math.abs(s.y-b.current[1])>.1)&&(R.current=!0)}function Y(s,a){if(!(s.type==="pointermove")||Math.abs(s.x-b.current[0])>.1||Math.abs(s.y-b.current[1])>.1){a===0?o.current=!0:a===1?n.current=!0:(n.current=!0,o.current=!0);let h={transient:!0,skippable:!0};n.current&&(a===-1?m.current=T(s,1):m.current=[r.current.point2.X(),r.current.point2.Y()],h.headcoords=m.current),o.current&&(a===-1?x.current=T(s,0):x.current=[r.current.point1.X(),r.current.point1.Y()],h.tailcoords=x.current),(a===0||a===1)&&(h.sourceDetails={vertex:a}),i({action:c.moveVector,args:h}),r.current.point1.coords.setCoordinates(JXG.COORDS_BY_USER,M.current[0]),r.current.point2.coords.setCoordinates(JXG.COORDS_BY_USER,M.current[1]),a===0?l.updateInfobox(f.current):a===1&&l.updateInfobox(d.current)}}function B(){r.current.off("drag"),r.current.off("down"),r.current.off("hit"),r.current.off("up"),r.current.off("keyfocusout"),r.current.off("keydown"),l.removeObject(r.current),r.current={},f.current.off("drag"),f.current.off("down"),f.current.off("hit"),f.current.off("up"),f.current.off("keyfocusout"),f.current.off("keydown"),l.removeObject(f.current),f.current={},d.current.off("drag"),d.current.off("down"),d.current.off("hit"),d.current.off("up"),d.current.off("keyfocusout"),d.current.off("keydown"),l.removeObject(d.current),d.current={}}function T(s,a){if(s.type==="pointermove"){var h=l.origin.scrCoords;let O=(_.current[a][1]+s.x-b.current[0]-h[1])/l.unitX,D=(h[2]-(_.current[a][2]+s.y-b.current[1]))/l.unitY;return[O,D]}else return a==0?[r.current.point1.X(),r.current.point1.Y()]:[r.current.point2.X(),r.current.point2.Y()]}if(l){if(Object.keys(r.current).length===0)q();else if(e.numericalEndpoints.length!==2||e.numericalEndpoints.some(s=>s.length!==2))B();else{let s=!0;for(let v of[e.numericalEndpoints[0],e.numericalEndpoints[1]])Number.isFinite(v[0])||(s=!1),Number.isFinite(v[1])||(s=!1);r.current.point1.coords.setCoordinates(JXG.COORDS_BY_USER,e.numericalEndpoints[0]),r.current.point2.coords.setCoordinates(JXG.COORDS_BY_USER,e.numericalEndpoints[1]);let a=!e.hidden&&s,k=G.current&&a,h=j.current&&a;if(r.current.visProp.fixed=E.current,r.current.visProp.highlight=!X.current,r.current.isDraggable=!X.current,r.current.visProp.visible=a,r.current.visPropCalc.visible=a,f.current.visProp.visible=k,f.current.visPropCalc.visible=k,d.current.visProp.visible=h,d.current.visPropCalc.visible=h,f.current.visProp.showinfobox=e.showCoordsWhenDragging,d.current.visProp.showinfobox=e.showCoordsWhenDragging,J.sourceInformation&&p in J.sourceInformation){let v=J.sourceInformation[p];v.vertex===0?l.updateInfobox(f.current):v.vertex===1&&l.updateInfobox(d.current)}let O=10*e.layer+H;if(r.current.visProp.layer!==O){let v=10*e.layer+N;r.current.setAttribute({layer:O}),f.current.setAttribute({layer:v}),d.current.setAttribute({layer:v})}let C=W==="dark"?e.selectedStyle.lineColorDarkMode:e.selectedStyle.lineColor;r.current.visProp.strokecolor!==C&&(r.current.visProp.strokecolor=C,r.current.visProp.highlightstrokecolor=C),r.current.visProp.strokewidth!==e.selectedStyle.lineWidth&&(r.current.visProp.strokewidth=e.selectedStyle.lineWidth,r.current.visProp.highlightstrokewidth=e.selectedStyle.lineWidth),r.current.visProp.strokeopacity!==e.selectedStyle.lineOpacity&&(r.current.visProp.strokeopacity=e.selectedStyle.lineOpacity,r.current.visProp.highlightstrokeopacity=e.selectedStyle.lineOpacity*.5);let L=z(e.selectedStyle.lineStyle);r.current.visProp.dash!==L&&(r.current.visProp.dash=L),r.current.name=e.labelForGraph;let g=e.labelForGraph!=="";g!=I.current&&(r.current.setAttribute({withlabel:g}),I.current=g),r.current.needsUpdate=!0,r.current.update(),r.current.hasLabel&&(e.applyStyleToLabel?r.current.label.visProp.strokecolor=C:r.current.label.visProp.strokecolor="var(--canvastext)",r.current.label.needsUpdate=!0,r.current.label.update()),f.current.needsUpdate=!0,f.current.update(),d.current.needsUpdate=!0,d.current.update(),l.updateRenderer()}return S.jsx(S.Fragment,{children:S.jsx("a",{name:A})})}if(e.hidden)return null;let K="\\("+e.latex+"\\)",Q=ne(W,e.selectedStyle);return S.jsxs(S.Fragment,{children:[S.jsx("a",{name:A}),S.jsx("span",{id:A,style:Q,children:S.jsx(oe,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:K})})]})});function z(V){return V==="solid"?0:V==="dashed"?2:V==="dotted"?1:0}export{se as default};
