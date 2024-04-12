import{ao as ae,bl as se,r as u,bw as fe,j as de}from"./index-f8d734dc.js";import{BoardContext as he,LINE_LAYER_OFFSET as V,POINT_LAYER_OFFSET as K}from"./graph-eb7e5c8e.js";import{c as x,g as Z,a as _,b as z,n as $,d as ee,e as re,f as te}from"./offGraphIndicators-c1e689d9.js";import"./css-14ccef8c.js";const be=ae.memo(function M(le){let{name:w,id:j,SVs:e,actions:f,callAction:d}=se(le);M.ignoreActionsWithoutCore=()=>!0;const l=u.useContext(he);let r=u.useRef(null),n=u.useRef(null),h=u.useRef(!1),k=u.useRef(null),F=u.useRef(!1),E=u.useRef(!1),D=u.useRef(null),p=u.useRef(null),b=u.useRef(null),X=u.useRef(null),W=u.useRef(null),v=u.useRef(null),m=u.useRef(null),T=u.useRef(null),R=u.useRef(!1),P=u.useRef(!1),y=u.useRef(!1),o=u.useRef([0,0]),g=u.useRef([0,0]),Y=u.useRef([0,0]);m.current=e.numericalCenter,T.current=e.throughAngles,R.current=e.fixed,P.current=!e.draggable||e.fixLocation||e.fixed;const{darkMode:G}=u.useContext(fe)||{};u.useEffect(()=>()=>{r.current&&H(),l&&l.off("move",N)},[]),u.useEffect(()=>{l&&l.on("move",N)},[l]);function ie(){if(!(Number.isFinite(e.numericalCenter[0])&&Number.isFinite(e.numericalCenter[1])&&e.numericalRadius>0))return null;let S=G==="dark"?e.selectedStyle.lineColorDarkMode:e.selectedStyle.lineColor,C=G==="dark"?e.selectedStyle.fillColorDarkMode:e.selectedStyle.fillColor;C=e.filled?C:"none";let L=G==="dark"?e.selectedStyle.markerColorDarkMode:e.selectedStyle.markerColor,I=e.labelForGraph!=="";var a={name:e.labelForGraph,visible:!e.hidden,withlabel:I,fixed:R.current,layer:10*e.layer+V,strokeColor:S,strokeOpacity:e.selectedStyle.lineOpacity,highlightStrokeColor:S,strokeWidth:e.selectedStyle.lineWidth,highlightStrokeWidth:e.selectedStyle.lineWidth,highlightStrokeOpacity:e.selectedStyle.lineOpacity*.5,dash:ne(e.selectedStyle.lineStyle),fillColor:C,fillOpacity:e.selectedStyle.fillOpacity,highlightFillColor:C,highlightFillOpacity:e.selectedStyle.fillOpacity*.5,highlight:!P.current};e.filled&&(a.hasInnerPoints=!0),a.label={highlight:!1},e.labelHasLatex&&(a.label.useMathJax=!0),e.labelForGraph!==""&&(e.applyStyleToLabel?a.label.strokeColor=S:a.label.strokeColor="var(--canvastext)"),r.current=l.create("circle",[[...e.numericalCenter],e.numericalRadius],a),r.current.isDraggable=!P.current;let s={name:e.labelForGraph,visible:!e.hidden&&y.current,withlabel:I,fixed:R.current,layer:10*e.layer+K,fillColor:L,strokeColor:"none",strokeOpacity:e.selectedStyle.markerOpacity,fillOpacity:e.selectedStyle.markerOpacity,highlightFillColor:"var(--mainGray)",highlightStrokeColor:"var(--lightBlue)",size:ee(e.selectedStyle.markerSize,e.selectedStyle.markerStyle),face:$(e.selectedStyle.markerStyle,o.current),highlight:!P.current,showinfobox:!1};if(I){let t=re("upperright",o.current);W.current=t;let{offset:i,anchorx:c,anchory:A}=te(t);s.label={offset:i,anchorx:c,anchory:A,highlight:!1},e.labelHasLatex&&(s.label.useMathJax=!0),e.applyStyleToLabel?s.label.strokeColor=L:s.label.strokeColor="var(--canvastext)"}else s.label={highlight:!1},e.labelHasLatex&&(s.label.useMathJax=!0);return n.current=l.create("point",[...g.current],s),n.isDraggable=!P.current,r.current.on("drag",function(t){let i=t.type==="pointermove";if((!i||Math.abs(t.x-k.current[0])>.1||Math.abs(t.y-k.current[1])>.1)&&(h.current=!0),i){var c=l.origin.scrCoords;let A=(D.current[1]+t.x-k.current[0]-c[1])/l.unitX,O=(c[2]-(D.current[2]+t.y-k.current[1]))/l.unitY;v.current=[A,O]}else v.current=[r.current.center.X(),r.current.center.Y()];d({action:f.moveCircle,args:{center:v.current,radius:p.current,throughAngles:b.current,transient:!0,skippable:!0}}),r.current.center.coords.setCoordinates(JXG.COORDS_BY_USER,[...m.current])}),r.current.on("up",function(t){h.current?d({action:f.moveCircle,args:{center:v.current,radius:p.current,throughAngles:b.current}}):!E.current&&!R.current&&d({action:f.circleClicked,args:{name:w}}),F.current=!1}),r.current.on("keyfocusout",function(t){h.current&&(d({action:f.moveCircle,args:{center:v.current,radius:p.current,throughAngles:b.current}}),h.current=!1),F.current=!1}),r.current.on("down",function(t){h.current=!1,k.current=[t.x,t.y],D.current=[...r.current.center.coords.scrCoords],p.current=r.current.radius,b.current=[...T.current],F.current=!0,E.current=!1,R.current||d({action:f.circleFocused,args:{name:w}})}),r.current.on("hit",function(t){h.current=!1,D.current=[...r.current.center.coords.scrCoords],p.current=r.current.radius,b.current=[...T.current],d({action:f.circleFocused,args:{name:w}})}),r.current.on("keydown",function(t){t.key==="Enter"&&(h.current&&(d({action:f.moveCircle,args:{center:v.current,radius:p.current,throughAngles:b.current}}),h.current=!1),d({action:f.circleClicked,args:{name:w}}))}),n.current.on("drag",function(t){(!(t.type==="pointermove")||Math.abs(t.x-k.current[0])>.1||Math.abs(t.y-k.current[1])>.1)&&(h.current=!0),v.current=[n.current.X()+Y.current[0],n.current.Y()+Y.current[1]],d({action:f.moveCircle,args:{center:v.current,radius:p.current,throughAngles:b.current,transient:!0,skippable:!0}})}),n.current.on("up",function(t){h.current?d({action:f.moveCircle,args:{center:v.current,radius:p.current,throughAngles:b.current}}):!E.current&&!R.current&&d({action:f.circleClicked,args:{name:w}}),F.current=!1}),n.current.on("keyfocusout",function(t){h.current&&(d({action:f.moveCircle,args:{center:v.current,radius:p.current,throughAngles:b.current}}),h.current=!1),F.current=!1}),n.current.on("down",function(t){h.current=!1,k.current=[t.x,t.y],D.current=[...r.current.center.coords.scrCoords],p.current=r.current.radius,b.current=[...T.current];let{flippedX:i,flippedY:c}=Z(l),A=i?-1:1,O=c?-1:1;if(o.current[0]===0||o.current[1]===0)Y.current=[A*o.current[0]*p.current,O*o.current[1]*p.current];else{let J=Math.sqrt(2);Y.current=[A/J*o.current[0]*p.current,O/J*o.current[1]*p.current]}F.current=!0,E.current=!1,R.current||d({action:f.circleFocused,args:{name:w}})}),n.current.on("hit",function(t){h.current=!1,D.current=[...r.current.center.coords.scrCoords],p.current=r.current.radius,b.current=[...T.current],d({action:f.circleFocused,args:{name:w}})}),n.current.on("keydown",function(t){t.key==="Enter"&&(h.current&&(d({action:f.moveCircle,args:{center:v.current,radius:p.current,throughAngles:b.current}}),h.current=!1),d({action:f.circleClicked,args:{name:w}}))}),X.current=e.labelForGraph!=="",r.current}function N(S){F.current&&(Math.abs(S.x-k.current[0])>.1||Math.abs(S.y-k.current[1])>.1)&&(E.current=!0)}function H(){n.current.off("drag"),n.current.off("down"),n.current.off("up"),n.current.off("hit"),n.current.off("keyfocusout"),n.current.off("keydown"),l.removeObject(n.current),n.current=null,r.current.off("drag"),r.current.off("down"),r.current.off("up"),r.current.off("hit"),r.current.off("keyfocusout"),r.current.off("keydown"),l.removeObject(r.current),r.current=null}if(l){if(m.current=[...e.numericalCenter],y.current=!1,o.current=[0,0],g.current=[0,0],!e.hideOffGraphIndicator){let S=x(m.current,l);if(S.needIndicator){let C=S.indicatorSides,{flippedX:L,flippedY:I}=Z(l),a=L?-1:1,s=I?-1:1;if(C[0]===1)if(C[1]===1){let t=[...m.current];if(t[0]-=e.numericalRadius*a,t[1]-=e.numericalRadius*s,x(t,l).needIndicator)y.current=!0,o.current=[1,1],g.current=_(l,[1,1]);else{let c=z({center:e.numericalCenter,radius:e.numericalRadius,directionToCheck:[1,1],board:l});c.needIndicator&&(y.current=!0,o.current=c.indicatorSides,g.current=c.indicatorCoords)}}else if(C[1]===-1){let t=[...m.current];if(t[0]-=e.numericalRadius*a,t[1]+=e.numericalRadius*s,x(t,l).needIndicator)y.current=!0,o.current=[1,-1],g.current=_(l,[1,-1]);else{let c=z({center:e.numericalCenter,radius:e.numericalRadius,directionToCheck:[1,-1],board:l});c.needIndicator&&(y.current=!0,o.current=c.indicatorSides,g.current=c.indicatorCoords)}}else{let t=[...m.current];t[0]-=e.numericalRadius*a;let i=x(t,l);i.needIndicator&&(y.current=!0,o.current=i.indicatorSides,g.current=i.indicatorCoords)}else if(C[0]===-1)if(C[1]===1){let t=[...m.current];if(t[0]+=e.numericalRadius*a,t[1]-=e.numericalRadius*s,x(t,l).needIndicator)y.current=!0,o.current=[-1,1],g.current=_(l,[-1,1]);else{let c=z({center:e.numericalCenter,radius:e.numericalRadius,directionToCheck:[-1,1],board:l});c.needIndicator&&(y.current=!0,o.current=c.indicatorSides,g.current=c.indicatorCoords)}}else if(C[1]===-1){let t=[...m.current];if(t[0]+=e.numericalRadius*a,t[1]+=e.numericalRadius*s,x(t,l).needIndicator)y.current=!0,o.current=[-1,-1],g.current=_(l,[-1,-1]);else{let c=z({center:e.numericalCenter,radius:e.numericalRadius,directionToCheck:[-1,-1],board:l});c.needIndicator&&(y.current=!0,o.current=c.indicatorSides,g.current=c.indicatorCoords)}}else{let t=[...m.current];t[0]+=e.numericalRadius*a;let i=x(t,l);i.needIndicator&&(y.current=!0,o.current=i.indicatorSides,g.current=i.indicatorCoords)}else if(C[1]===1){let t=[...m.current];t[1]-=e.numericalRadius*a;let i=x(t,l);i.needIndicator&&(y.current=!0,o.current=i.indicatorSides,g.current=i.indicatorCoords)}else{let t=[...m.current];t[1]+=e.numericalRadius*a;let i=x(t,l);i.needIndicator&&(y.current=!0,o.current=i.indicatorSides,g.current=i.indicatorCoords)}}}if(!r.current)ie();else if(!(Number.isFinite(e.numericalCenter[0])&&Number.isFinite(e.numericalCenter[1])&&e.numericalRadius>0))H();else{l.updateQuality===l.BOARD_QUALITY_LOW&&(l.itemsRenderedLowQuality[j]=r.current);let S=e.numericalCenter.every(O=>Number.isFinite(O));r.current.center.coords.setCoordinates(JXG.COORDS_BY_USER,[...e.numericalCenter]),r.current.setRadius(e.numericalRadius);let C=!e.hidden;S?(r.current.visProp.visible=C,r.current.visPropCalc.visible=C):(r.current.visProp.visible=!1,r.current.visPropCalc.visible=!1),r.current.visProp.fixed=R.current,r.current.visProp.highlight=!P.current,r.current.isDraggable=!P.current;let L=10*e.layer+V;r.current.visProp.layer!==L&&r.current.setAttribute({layer:L});let a=G==="dark"?e.selectedStyle.lineColorDarkMode:e.selectedStyle.lineColor,s=G==="dark"?e.selectedStyle.fillColorDarkMode:e.selectedStyle.fillColor;s=e.filled?s:"none",r.current.visProp.strokecolor!==a&&(r.current.visProp.strokecolor=a,r.current.visProp.highlightstrokecolor=a),r.current.visProp.strokeopacity!==e.selectedStyle.lineOpacity&&(r.current.visProp.strokeopacity=e.selectedStyle.lineOpacity,r.current.visProp.highlightstrokeopacity=e.selectedStyle.lineOpacity*.5);let t=ne(e.selectedStyle.lineStyle);r.current.visProp.dash!==t&&(r.current.visProp.dash=t),r.current.visProp.strokewidth!==e.selectedStyle.lineWidth&&(r.current.visProp.strokewidth=e.selectedStyle.lineWidth,r.current.visProp.highlightstrokewidth=e.selectedStyle.lineWidth),r.current.visProp.fillcolor!==s&&(r.current.visProp.fillcolor=s,r.current.visProp.highlightfillcolor=s,r.current.visProp.hasinnerpoints=e.filled),r.current.visProp.fillopacity!==e.selectedStyle.fillOpacity&&(r.current.visProp.fillopacity=e.selectedStyle.fillOpacity,r.current.visProp.highlightfillopacity=e.selectedStyle.fillOpacity*.5),r.current.name=e.labelForGraph;let i=e.labelForGraph!=="";i!=X.current&&(r.current.setAttribute({withlabel:i}),X.current=i),r.current.needsUpdate=!0,r.current.update(),r.current.hasLabel&&(e.applyStyleToLabel?r.current.label.visProp.strokecolor=a:r.current.label.visProp.strokecolor="var(--canvastext)",r.current.label.needsUpdate=!0,r.current.label.update());let c=y.current&&!e.hidden,A=n.current.visProp.visible!==c;if(n.current.visProp.visible=c,n.current.visPropCalc.visible=c,c){n.current.coords.setCoordinates(JXG.COORDS_BY_USER,g.current);let O=10*e.layer+K;n.current.visProp.layer!==O&&n.current.setAttribute({layer:O}),n.current.visProp.highlight=!P.current,n.current.visProp.fixed=R.current,n.current.isDraggable=!P.current;let B=G==="dark"?e.selectedStyle.markerColorDarkMode:e.selectedStyle.markerColor;n.current.visProp.fillcolor!==B&&(n.current.visProp.fillcolor=B),n.current.visProp.strokeopacity!==e.selectedStyle.markerOpacity&&(n.current.visProp.strokeopacity=e.selectedStyle.markerOpacity,n.current.visProp.fillopacity=e.selectedStyle.markerOpacity);let Q=$(e.selectedStyle.markerStyle,o.current);n.current.visProp.face!==Q&&n.current.setAttribute({face:Q});let q=ee(e.selectedStyle.markerSize,e.selectedStyle.markerStyle);if(n.current.visProp.size!==q&&n.current.setAttribute({size:q}),n.current.name=e.labelForGraph,i!=X.current&&n.current.setAttribute({withlabel:i}),n.current.hasLabel){n.current.label.needsUpdate=!0,e.applyStyleToLabel?n.current.label.visProp.strokecolor=B:n.current.label.visProp.strokecolor="var(--canvastext)";let U=re("upperright",o.current);if(U!==W.current){let{offset:ce,anchorx:ue,anchory:oe}=te(U);n.current.label.visProp.anchorx=ue,n.current.label.visProp.anchory=oe,n.current.label.visProp.offset=ce,W.current=U,n.current.label.fullUpdate()}else n.current.label.update()}}c||A?n.current.fullUpdate():n.current.update(),l.updateRenderer()}}return e.hidden?null:de("a",{name:j})});function ne(M){return M==="solid"?0:M==="dashed"?2:M==="dotted"?1:0}export{be as default};
