import{ao as N,bl as q,r as f,bw as z,j as D,F as j}from"./index-f8d734dc.js";import{BoardContext as K,LINE_LAYER_OFFSET as B,VERTEX_LAYER_OFFSET as Y}from"./graph-eb7e5c8e.js";import"./css-14ccef8c.js";const ee=N.memo(function w(V){let{name:h,id:_,SVs:r,actions:i,sourceOfUpdate:F,callAction:l}=q(V);w.ignoreActionsWithoutCore=()=>!0;const u=f.useContext(K);let e=f.useRef(null),n=f.useRef(null),o=f.useRef(null),b=f.useRef(null),X=f.useRef(null),S=f.useRef(!1),k=f.useRef(!1),c=f.useRef(null),G=f.useRef(null),A=f.useRef(null),s=f.useRef(null),x=f.useRef(null),I=f.useRef(null),C=f.useRef(!1),R=f.useRef(!1),E=f.useRef(!1);I.current=r.numericalEndpoints,C.current=r.fixed,R.current=!r.draggable||r.fixLocation||r.fixed,E.current=!r.endpointsDraggable||r.fixed||r.fixLocation;const{darkMode:J}=f.useContext(z)||{};f.useEffect(()=>()=>{e.current&&U(),u&&u.off("move",M)},[]),f.useEffect(()=>{u&&u.on("move",M)},[u]);function H(){if(r.numericalEndpoints.length!==2||r.numericalEndpoints.some(t=>t.length!==2)){e.current=null,n.current=null,o.current=null;return}let a=r.labelForGraph!=="",g=J==="dark"?r.selectedStyle.lineColorDarkMode:r.selectedStyle.lineColor;var p={name:r.labelForGraph,visible:!r.hidden,withlabel:a,fixed:C.current,layer:10*r.layer+B,strokeColor:g,strokeOpacity:r.selectedStyle.lineOpacity,highlightStrokeColor:g,highlightStrokeOpacity:r.selectedStyle.lineOpacity*.5,strokeWidth:r.selectedStyle.lineWidth,highlightStrokeWidth:r.selectedStyle.lineWidth,dash:T(r.selectedStyle.lineStyle),highlight:!R.current};if(a){let t,v,d;r.labelPosition==="upperright"?(d=[5,5],t="left",v="bottom"):r.labelPosition==="upperleft"?(d=[-5,5],t="right",v="bottom"):r.labelPosition==="lowerright"?(d=[5,-5],t="left",v="top"):(d=[-5,-5],t="right",v="top"),p.label={offset:d,anchorx:t,anchory:v,highlight:!1},r.labelHasLatex&&(p.label.useMathJax=!0),r.applyStyleToLabel?p.label.strokeColor=g:p.label.strokeColor="var(--canvastext)"}else p.label={highlight:!1},r.labelHasLatex&&(p.label.useMathJax=!0);let P=!E.current&&!r.hidden,m=Object.assign({},p);Object.assign(m,{withLabel:!1,fixed:!1,highlight:!0,fillColor:"none",strokeColor:"none",highlightStrokeColor:"none",highlightFillColor:getComputedStyle(document.documentElement).getPropertyValue("--mainGray"),layer:10*r.layer+Y,showInfoBox:r.showCoordsWhenDragging,visible:P});let y=[[...r.numericalEndpoints[0]],[...r.numericalEndpoints[1]]];return n.current=u.create("point",y[0],m),o.current=u.create("point",y[1],m),e.current=u.create("segment",[n.current,o.current],p),e.isDraggable=!R.current,n.current.on("drag",t=>W(1,t)),o.current.on("drag",t=>W(2,t)),e.current.on("drag",t=>W(0,t)),n.current.on("up",()=>{c.current===1?l({action:i.moveLineSegment,args:{point1coords:s.current}}):!k.current&&!C.current&&l({action:i.lineSegmentClicked,args:{name:h}}),x.current=null,S.current=!1}),o.current.on("up",()=>{c.current===2?l({action:i.moveLineSegment,args:{point2coords:s.current}}):!k.current&&!C.current&&l({action:i.lineSegmentClicked,args:{name:h}}),x.current=null,S.current=!1}),e.current.on("up",function(t){c.current===0?l({action:i.moveLineSegment,args:{point1coords:s.current[0],point2coords:s.current[1]}}):!k.current&&x.current===null&&!C.current&&l({action:i.lineSegmentClicked,args:{name:h}}),S.current=!1}),n.current.on("keyfocusout",()=>{c.current===1&&l({action:i.moveLineSegment,args:{point1coords:s.current}}),c.current=null}),o.current.on("keyfocusout",()=>{c.current===2&&l({action:i.moveLineSegment,args:{point2coords:s.current}}),c.current=null}),e.current.on("keyfocusout",function(t){c.current===0&&l({action:i.moveLineSegment,args:{point1coords:s.current[0],point2coords:s.current[1]}}),c.current=null}),n.current.on("down",t=>{c.current=null,b.current=[t.x,t.y],x.current=1,S.current=!0,k.current=!1,E.current||l({action:i.lineSegmentFocused,args:{name:h}})}),n.current.on("hit",t=>{c.current=null,l({action:i.lineSegmentFocused,args:{name:h}})}),o.current.on("down",t=>{c.current=null,b.current=[t.x,t.y],x.current=2,S.current=!0,k.current=!1,E.current||l({action:i.lineSegmentFocused,args:{name:h}})}),o.current.on("hit",t=>{c.current=null,l({action:i.lineSegmentFocused,args:{name:h}})}),e.current.on("down",function(t){c.current=null,b.current=[t.x,t.y],X.current=[[...n.current.coords.scrCoords],[...o.current.coords.scrCoords]],S.current=!0,k.current=!1,x.current===null&&!C.current&&l({action:i.lineSegmentFocused,args:{name:h}})}),e.current.on("hit",t=>{c.current=null,l({action:i.lineSegmentFocused,args:{name:h}})}),n.current.on("keydown",function(t){t.key==="Enter"&&(c.current===1&&l({action:i.moveLineSegment,args:{point1coords:s.current}}),c.current=null,l({action:i.lineSegmentClicked,args:{name:h}}))}),o.current.on("keydown",function(t){t.key==="Enter"&&(c.current===2&&l({action:i.moveLineSegment,args:{point2coords:s.current}}),c.current=null,l({action:i.lineSegmentClicked,args:{name:h}}))}),e.current.on("keydown",function(t){t.key==="Enter"&&(c.current===0&&l({action:i.moveLineSegment,args:{point1coords:s.current[0],point2coords:s.current[1]}}),c.current=null,l({action:i.lineSegmentClicked,args:{name:h}}))}),A.current=r.labelPosition,G.current=a,e.current}function M(a){S.current&&(Math.abs(a.x-b.current[0])>.1||Math.abs(a.y-b.current[1])>.1)&&(k.current=!0)}function W(a,g){let p=g.type==="pointermove";if(!p||Math.abs(g.x-b.current[0])>.1||Math.abs(g.y-b.current[1])>.1)if(c.current=a,a==1)s.current=[e.current.point1.X(),e.current.point1.Y()],l({action:i.moveLineSegment,args:{point1coords:s.current,transient:!0,skippable:!0,sourceDetails:{endpoint:a}}});else if(a==2)s.current=[e.current.point2.X(),e.current.point2.Y()],l({action:i.moveLineSegment,args:{point2coords:s.current,transient:!0,skippable:!0,sourceDetails:{endpoint:a}}});else{if(s.current=[],p){var P=u.origin.scrCoords;for(let m=0;m<2;m++){let y=(X.current[m][1]+g.x-b.current[0]-P[1])/u.unitX,t=(P[2]-(X.current[m][2]+g.y-b.current[1]))/u.unitY;s.current.push([y,t])}}else s.current.push([e.current.point1.X(),e.current.point1.Y()]),s.current.push([e.current.point2.X(),e.current.point2.Y()]);l({action:i.moveLineSegment,args:{point1coords:s.current[0],point2coords:s.current[1],transient:!0,skippable:!0}})}e.current.point1.coords.setCoordinates(JXG.COORDS_BY_USER,I.current[0]),e.current.point2.coords.setCoordinates(JXG.COORDS_BY_USER,I.current[1]),a==1?u.updateInfobox(e.current.point1):a==2&&u.updateInfobox(e.current.point2)}function U(){e.current.off("drag"),e.current.off("down"),e.current.off("hit"),e.current.off("up"),e.current.off("keydown"),e.current.off("keyfocusout"),u.removeObject(e.current),e.current=null,n.current.off("drag"),n.current.off("down"),n.current.off("hit"),n.current.off("up"),n.current.off("keydown"),n.current.off("keyfocusout"),u.removeObject(n.current),n.current=null,o.current.off("drag"),o.current.off("down"),o.current.off("hit"),o.current.off("up"),o.current.off("keydown"),o.current.off("keyfocusout"),u.removeObject(o.current),o.current=null}if(u){if(e.current===null)H();else if(r.numericalEndpoints.length!==2||r.numericalEndpoints.some(a=>a.length!==2))U();else{let a=!0;for(let d of[r.numericalEndpoints[0],r.numericalEndpoints[1]])Number.isFinite(d[0])||(a=!1),Number.isFinite(d[1])||(a=!1);if(e.current.point1.coords.setCoordinates(JXG.COORDS_BY_USER,r.numericalEndpoints[0]),e.current.point2.coords.setCoordinates(JXG.COORDS_BY_USER,r.numericalEndpoints[1]),F.sourceInformation&&h in F.sourceInformation){let d=F.sourceInformation[h].endpoint;d===1?u.updateInfobox(e.current.point1):d===2&&u.updateInfobox(e.current.point2)}let g=!r.hidden&&a;if(a){let d=e.current.visProp.visible!==g;e.current.visProp.visible=g,e.current.visPropCalc.visible=g,d&&e.current.setAttribute({visible:g})}else e.current.visProp.visible=!1,e.current.visPropCalc.visible=!1;let p=!E.current&&g;n.current.visProp.visible=p,n.current.visPropCalc.visible=p,o.current.visProp.visible=p,o.current.visPropCalc.visible=p,n.current.visProp.showinfobox=r.showCoordsWhenDragging,o.current.visProp.showinfobox=r.showCoordsWhenDragging,e.current.visProp.fixed=C.current,e.current.visProp.highlight=!R.current,e.current.isDraggable=!R.current;let P=10*r.layer+B;e.current.visProp.layer!==P&&(e.current.setAttribute({layer:P}),n.current.setAttribute({layer:10*r.layer+Y}),o.current.setAttribute({layer:10*r.layer+Y}));let y=J==="dark"?r.selectedStyle.lineColorDarkMode:r.selectedStyle.lineColor;e.current.visProp.strokecolor!==y&&(e.current.visProp.strokecolor=y,e.current.visProp.highlightstrokecolor=y),e.current.visProp.strokewidth!==r.selectedStyle.lineWidth&&(e.current.visProp.strokewidth=r.selectedStyle.lineWidth,e.current.visProp.highlightstrokewidth=r.selectedStyle.lineWidth),e.current.visProp.strokeopacity!==r.selectedStyle.lineOpacity&&(e.current.visProp.strokeopacity=r.selectedStyle.lineOpacity,e.current.visProp.highlightstrokeopacity=r.selectedStyle.lineOpacity*.5);let t=T(r.selectedStyle.lineStyle);e.current.visProp.dash!==t&&(e.current.visProp.dash=t),e.current.name=r.labelForGraph;let v=r.labelForGraph!=="";if(v!=G.current&&(e.current.setAttribute({withlabel:v}),G.current=v),n.current.highlighted?u.updateInfobox(n.current):o.current.highlighted&&u.updateInfobox(o.current),e.current.needsUpdate=!0,e.current.update(),e.current.hasLabel)if(e.current.label.needsUpdate=!0,r.applyStyleToLabel?e.current.label.visProp.strokecolor=y:e.current.label.visProp.strokecolor="var(--canvastext)",r.labelPosition!==A.current){let d,L,O;r.labelPosition==="upperright"?(O=[5,5],d="left",L="bottom"):r.labelPosition==="upperleft"?(O=[-5,5],d="right",L="bottom"):r.labelPosition==="lowerright"?(O=[5,-5],d="left",L="top"):(O=[-5,-5],d="right",L="top"),e.current.label.visProp.anchorx=d,e.current.label.visProp.anchory=L,e.current.label.visProp.offset=O,A.current=r.labelPosition,e.current.label.fullUpdate()}else e.current.label.update();n.current.needsUpdate=!0,n.current.update(),o.current.needsUpdate=!0,o.current.update(),u.updateRenderer()}return D(j,{children:D("a",{name:_})})}return r.hidden?null:D(j,{children:D("a",{name:_})})});function T(w){return w==="solid"?0:w==="dashed"?2:w==="dotted"?1:0}export{ee as default};
