import{ao as Q,bl as Z,r as u,bw as $,j as H,F as z}from"./index-20ecac54.js";import{BoardContext as ee,LINE_LAYER_OFFSET as T,VERTEX_LAYER_OFFSET as U}from"./graph-5de75097.js";import"./css-14ccef8c.js";const oe=Q.memo(function x(B){let{name:v,id:q,SVs:e,actions:f,sourceOfUpdate:D,callAction:d}=Z(B);x.ignoreActionsWithoutCore=()=>!0;const c=u.useContext(ee);let r=u.useRef(null),i=u.useRef(null),p=u.useRef(null),m=u.useRef(null),R=u.useRef(null),b=u.useRef(null),X=u.useRef(null),E=u.useRef(!1),M=u.useRef(!1),k=u.useRef(null),P=u.useRef(null),V=u.useRef(null),S=u.useRef(!1),w=u.useRef(!1),O=u.useRef(!1);V.current=e.numericalVertices,S.current=e.fixed,w.current=!e.draggable||e.fixLocation||e.fixed,O.current=!e.verticesDraggable||e.fixed||e.fixLocation;const{darkMode:W}=u.useContext($)||{};u.useEffect(()=>()=>{r.current&&J(),c&&c.off("move",_)},[]),u.useEffect(()=>{c&&c.on("move",_)},[c]);function K(){if(e.numericalVertices.length!==e.numVertices||e.numericalVertices.some(n=>n.length!==2))return null;let t=!0;for(let n of e.numericalVertices)Number.isFinite(n[0])||(t=!1),Number.isFinite(n[1])||(t=!1);let s=W==="dark"?e.selectedStyle.lineColorDarkMode:e.selectedStyle.lineColor,a={name:e.labelForGraph,visible:!e.hidden&&t,withLabel:e.labelForGraph!=="",layer:10*e.layer+T,fixed:S.current,strokeColor:s,strokeOpacity:e.selectedStyle.lineOpacity,highlightStrokeColor:s,highlightStrokeOpacity:e.selectedStyle.lineOpacity*.5,strokeWidth:e.selectedStyle.lineWidth,highlightStrokeWidth:e.selectedStyle.lineWidth,dash:N(e.selectedStyle.lineStyle),highlight:!w.current,lineCap:"butt"};P.current=Object.assign({},a),Object.assign(P.current,{fixed:!1,highlight:!0,withLabel:!1,fillColor:"none",strokeColor:"none",highlightStrokeColor:"none",highlightFillColor:getComputedStyle(document.documentElement).getPropertyValue("--mainGray"),layer:10*e.layer+U,showInfoBox:e.showCoordsWhenDragging}),(O.current||e.hidden||!t)&&(P.current.visible=!1),a.label={highlight:!1},e.labelHasLatex&&(a.label.useMathJax=!0),e.applyStyleToLabel?a.label.strokeColor=s:a.label.strokeColor="var(--canvastext)",i.current=[];for(let n=0;n<e.numVertices;n++)i.current.push(c.create("point",[...e.numericalVertices[n]],P.current));let g=[],C=[];e.numericalVertices.forEach(n=>{g.push(n[0]),C.push(n[1])});let h=c.create("curve",[g,C],a);h.isDraggable=!w.current;for(let n=0;n<e.numVertices;n++)i.current[n].on("drag",y=>L(n,y)),i.current[n].on("up",()=>j(n)),i.current[n].on("keyfocusout",()=>A(n)),i.current[n].on("keydown",y=>I(n,y)),i.current[n].on("down",y=>Y(n,y)),i.current[n].on("hit",y=>G());return h.on("drag",n=>L(-1,n)),h.on("up",()=>j(-1)),h.on("keyfocusout",()=>A(-1)),h.on("keydown",n=>I(-1,n)),h.on("down",n=>Y(-1,n)),h.on("hit",n=>G()),k.current=e.numVertices,h}function _(t){E.current&&(Math.abs(t.x-b.current[0])>.1||Math.abs(t.y-b.current[1])>.1)&&(M.current=!0)}function J(){r.current.off("drag"),r.current.off("down"),r.current.off("hit"),r.current.off("up"),r.current.off("keyfocusout"),r.current.off("keydown"),c.removeObject(r.current),r.current=null;for(let t=0;t<e.numVertices;t++)i.current[t]&&(i.current[t].off("drag"),i.current[t].off("down"),i.current[t].off("hit"),i.current[t].off("up"),i.current[t].off("keyfocusout"),i.current[t].off("keydown"),c.removeObject(i.current[t]),delete i.current[t])}function L(t,s){let a=s.type==="pointermove";if(!a||Math.abs(s.x-b.current[0])>.1||Math.abs(s.y-b.current[1])>.1)if(m.current=t,t===-1){r.current.updateTransformMatrix();let C=r.current.transformMat[1][0],h=r.current.transformMat[2][0];var g=c.origin.scrCoords;p.current=[];for(let n=0;n<r.current.points.length;n++)if(a){let y=(X.current[n][1]+s.x-b.current[0]-g[1])/c.unitX,F=(g[2]-(X.current[n][2]+s.y-b.current[1]))/c.unitY;p.current.push([y,F])}else p.current.push([r.current.dataX[n]+C,r.current.dataY[n]+h]);d({action:f.movePolyline,args:{pointCoords:p.current,transient:!0,skippable:!0}});for(let n=0;n<e.numVertices;n++)i.current[n].coords.setCoordinates(JXG.COORDS_BY_USER,[...V.current[n]]),r.current.dataX[n]=V.current[n][0]-C,r.current.dataY[n]=V.current[n][1]-h}else p.current={},p.current[t]=[i.current[t].X(),i.current[t].Y()],d({action:f.movePolyline,args:{pointCoords:p.current,transient:!0,skippable:!0,sourceDetails:{vertex:t}}}),i.current[t].coords.setCoordinates(JXG.COORDS_BY_USER,[...V.current[t]]),c.updateInfobox(i.current[t])}function Y(t,s){m.current=null,b.current=[s.x,s.y],t===-1?(R.current===null&&!S.current&&d({action:f.polylineFocused,args:{name:v}}),X.current=r.current.points.map(a=>[...a.scrCoords])):(O.current||d({action:f.polylineFocused,args:{name:v}}),R.current=t),E.current=!0,M.current=!1}function G(){m.current=null,d({action:f.polylineFocused,args:{name:v}})}function j(t){m.current===t?d(t===-1?{action:f.movePolyline,args:{pointCoords:p.current}}:{action:f.movePolyline,args:{pointCoords:p.current,sourceDetails:{vertex:t}}}):!M.current&&(R.current===null||t!==-1)&&!S.current&&d({action:f.polylineClicked,args:{name:v}}),t!==-1&&(R.current=null),E.current=!1}function A(t){m.current===t&&d(t===-1?{action:f.movePolyline,args:{pointCoords:p.current}}:{action:f.movePolyline,args:{pointCoords:p.current,sourceInformation:{vertex:t}}}),m.current=null}function I(t,s){s.key==="Enter"&&(m.current===t&&d(t===-1?{action:f.movePolyline,args:{pointCoords:p.current}}:{action:f.movePolyline,args:{pointCoords:p.current,sourceInformation:{vertex:t}}}),m.current=null,d({action:f.polylineClicked,args:{name:v}}))}if(c)if(!r.current)r.current=K();else if(e.numericalVertices.length!==e.numVertices||e.numericalVertices.some(t=>t.length!==2))J();else{let t=!0;for(let o of e.numericalVertices)Number.isFinite(o[0])||(t=!1),Number.isFinite(o[1])||(t=!1);r.current.visProp.fixed=S.current,r.current.visProp.highlight=!w.current,r.current.isDraggable=!w.current;let s=10*e.layer+T,a=r.current.visProp.layer!==s,g=10*e.layer+U;if(a&&(r.current.setAttribute({layer:s}),P.current.layer=g),e.numVertices>k.current)for(let o=k.current;o<e.numVertices;o++)i.current.push(c.create("point",[...e.numericalVertices[o]],P.current)),r.current.dataX.length=e.numVertices,i.current[o].on("drag",l=>L(o,l)),i.current[o].on("up",l=>j(o)),i.current[o].on("down",l=>Y(o,l)),i.current[o].on("hit",l=>G()),i.current[o].on("keyfocusout",l=>A(o)),i.current[o].on("keydown",l=>I(o,l));else if(e.numVertices<k.current){for(let o=e.numVertices;o<k.current;o++){let l=i.current.pop();l.off("drag"),l.off("down"),l.off("hit"),l.off("up"),l.off("keyfocusout"),l.off("keydown"),c.removeObject(l)}r.current.dataX.length=e.numVertices}k.current=e.numVertices,r.current.updateTransformMatrix();let C=r.current.transformMat[1][0],h=r.current.transformMat[2][0];for(let o=0;o<e.numVertices;o++)i.current[o].coords.setCoordinates(JXG.COORDS_BY_USER,[...e.numericalVertices[o]]),r.current.dataX[o]=e.numericalVertices[o][0]-C,r.current.dataY[o]=e.numericalVertices[o][1]-h;let n=!e.hidden;if(t){r.current.visProp.visible=n,r.current.visPropCalc.visible=n;let o=n&&!O.current;for(let l=0;l<e.numVertices;l++)i.current[l].visProp.visible=o,i.current[l].visPropCalc.visible=o,i.current[l].visProp.showinfobox=e.showCoordsWhenDragging}else{r.current.visProp.visible=!1,r.current.visPropCalc.visible=!1;for(let o=0;o<e.numVertices;o++)i.current[o].visProp.visible=!1,i.current[o].visPropCalc.visible=!1}let y=W==="dark"?e.selectedStyle.lineColorDarkMode:e.selectedStyle.lineColor;r.current.visProp.strokecolor!==y&&(r.current.visProp.strokecolor=y,r.current.visProp.highlightstrokecolor=y),r.current.visProp.strokewidth!==e.selectedStyle.lineWidth&&(r.current.visProp.strokewidth=e.selectedStyle.lineWidth,r.current.visProp.highlightstrokewidth=e.selectedStyle.lineWidth),r.current.visProp.strokeopacity!==e.selectedStyle.lineOpacity&&(r.current.visProp.strokeopacity=e.selectedStyle.lineOpacity,r.current.visProp.highlightstrokeopacity=e.selectedStyle.lineOpacity*.5);let F=N(e.selectedStyle.lineStyle);if(r.current.visProp.dash!==F&&(r.current.visProp.dash=F),r.current.name=e.labelForGraph,r.current.hasLabel&&(e.applyStyleToLabel?r.current.label.visProp.strokecolor=y:r.current.label.visProp.strokecolor="var(--canvastext)",r.current.label.needsUpdate=!0,r.current.label.update()),D.sourceInformation&&v in D.sourceInformation){let o=D.sourceInformation[v].vertex;Number.isFinite(o)&&c.updateInfobox(i.current[o])}r.current.needsUpdate=!0,r.current.update().updateVisibility();for(let o=0;o<e.numVertices;o++)a&&i.current[o].setAttribute({layer:g}),i.current[o].needsUpdate=!0,i.current[o].update();c.updateRenderer()}return e.hidden?null:H(z,{children:H("a",{name:q})})});function N(x){return x==="solid"?0:x==="dashed"?2:x==="dotted"?1:0}export{oe as default};
