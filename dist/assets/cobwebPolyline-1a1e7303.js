import{ao as N,bl as L,r as c,bx as V,j,F as U}from"./index-2f97b159.js";import{BoardContext as Y,LINE_LAYER_OFFSET as F,VERTEX_LAYER_OFFSET as W}from"./graph-65272f56.js";import"./css-14ccef8c.js";const z=N.memo(function b(D){let{name:R,id:G,SVs:e,actions:k,sourceOfUpdate:S,callAction:x}=L(D);b.ignoreActionsWithoutCore=()=>!0;const u=c.useContext(Y);let g=c.useRef(null),w=c.useRef(null),i=c.useRef(null),t=c.useRef(null),v=c.useRef(null),f=c.useRef(null),y=c.useRef(null),d=c.useRef(null),_=c.useRef(null);_.current=e.numericalVertices,c.useEffect(()=>()=>{i.current&&J()},[]);function I(){let n={visible:!e.hidden,withLabel:!1,fixed:!0,layer:10*e.layer+F,strokeColor:"green",highlightStrokeColor:"green",strokeWidth:3,dash:E("solid")},m=V(e.fDefinition);g.current=u.create("functiongraph",[m],n);let h={visible:!e.hidden,withLabel:!1,fixed:!0,layer:10*e.layer+F,strokeColor:"gray",highlightStrokeColor:"gray",strokeWidth:2,dash:E("solid")};w.current=u.create("line",[[0,0],[1,1]],h);let P=!0;for(let o of e.numericalVertices)Number.isFinite(o[0])||(P=!1),Number.isFinite(o[1])||(P=!1);let C={name:e.labelForGraph,visible:!e.hidden&&P,withLabel:e.labelForGraph!=="",fixed:!0,layer:10*e.layer+F,strokeColor:e.selectedStyle.lineColor,highlightStrokeColor:e.selectedStyle.lineColor,strokeWidth:e.selectedStyle.lineWidth,highlightStrokeWidth:e.selectedStyle.lineWidth,dash:E(e.selectedStyle.lineStyle)};C.label={highlight:!1},e.labelHasLatex&&(C.label.useMathJax=!0),d.current={fixed:!e.draggable||e.fixed,visible:!e.hidden&&P&&e.draggable,withLabel:!0,name:"A",layer:10*e.layer+W,fillColor:e.selectedStyle.markerColor,strokeColor:e.selectedStyle.markerColor,size:e.selectedStyle.markerSize,face:B(e.selectedStyle.markerStyle)},e.draggable?(d.current.highlightFillColor="#EEEEEE",d.current.highlightStrokeColor="#C3D9FF",d.current.showInfoBox=!0):(d.current.highlightFillColor=e.selectedStyle.markerColor,d.current.highlightStrokeColor=e.selectedStyle.markerColor,d.current.showInfoBox=!1),t.current=[];let a=e.variable.toString();for(let o=0;o<e.numPoints;o++){let s=Object.assign({},d.current);o===0?s.name=`(${a}_0,0)`:o%2===1?s.name=`(${a}_${(o-1)/2}, ${a}_${(o+1)/2})`:s.name=`(${a}_${o/2}, ${a}_${o/2})`,o!==e.numPoints-1&&(s.visible=!1),t.current.push(u.create("point",[...e.numericalVertices[o]],s))}let r=[],l=[];e.numericalVertices.forEach(o=>{r.push(o[0]),l.push(o[1])});let p=u.create("curve",[r,l],C);for(let o=0;o<e.numPoints;o++)t.current[o].on("drag",s=>$(o,s)),t.current[o].on("up",s=>O(o)),t.current[o].on("keyfocusout",()=>X(o)),t.current[o].on("keydown",s=>A(o,s)),t.current[o].on("down",s=>f.current=null);return y.current=e.numPoints,p}function J(){u.removeObject(i.current),i.current=null,u.removeObject(g.current),g.current=null,u.removeObject(w.current),w.current=null;for(let n=0;n<e.numPoints;n++)t.current[n]&&(t.current[n].off("drag"),t.current[n].off("up"),t.current[n].off("keyfocusout"),t.current[n].off("keydown"),t.current[n].off("down"),u.removeObject(t.current[n]),delete t.current[n])}function $(n,m){m.type,f.current=n,v.current={},v.current[n]=[t.current[n].X(),t.current[n].Y()],x({action:k.movePolyline,args:{pointCoords:v.current,transient:!0,skippable:!0,sourceDetails:{vertex:n}}}),t.current[n].coords.setCoordinates(JXG.COORDS_BY_USER,[..._.current[n]]),u.updateInfobox(t.current[n])}function O(n){f.current===n&&x({action:k.movePolyline,args:{pointCoords:v.current,sourceDetails:{vertex:n}}})}function X(n){if(f.current!==n){f.current=null;return}f.current=null,x({action:k.movePolyline,args:{pointCoords:v.current,sourceInformation:{vertex:n}}})}function A(n,m){m.key==="Enter"&&(f.current===n&&x({action:k.movePolyline,args:{pointCoords:v.current,sourceInformation:{vertex:n}}}),f.current=null)}if(u)if(!i.current)i.current=I();else{let n=V(e.fDefinition);g.current.Y=n,g.current.needsUpdate=!0,g.current.updateCurve();let m=!0;for(let r of e.numericalVertices)Number.isFinite(r[0])||(m=!1),Number.isFinite(r[1])||(m=!1);let h=e.variable.toString();if(e.numPoints>y.current)for(let r=y.current;r<e.numPoints;r++){let l=Object.assign({},d.current);r===0?l.name=`(${h}_0,0)`:r%2===1?l.name=`(${h}_${(r-1)/2}, ${h}_${(r+1)/2})`:l.name=`(${h}_${r/2}, ${h}_${r/2})`,r!==e.numPoints-1&&(l.visible=!1),t.current.push(u.create("point",[...e.numericalVertices[r]],l)),t.current[r].on("drag",p=>$(r,p)),t.current[r].on("up",p=>O(r)),t.current[r].on("keyfocusout",()=>X(r)),t.current[r].on("keydown",p=>A(r,p)),t.current[r].on("down",p=>f.current=null)}else if(e.numPoints<y.current){for(let r=e.numPoints;r<y.current;r++){let l=t.current.pop();l.off("drag"),l.off("up"),l.off("keyfocusout"),l.off("keydown"),l.off("down"),console.log("about to remove",l),u.removeObject(l),u.update()}i.current.dataX.length=e.numPoints}y.current=e.numPoints;let P=i.current.transformMat[1][0],C=i.current.transformMat[2][0];for(let r=0;r<e.numPoints;r++)t.current[r].coords.setCoordinates(JXG.COORDS_BY_USER,[...e.numericalVertices[r]]),i.current.dataX[r]=e.numericalVertices[r][0]-P,i.current.dataY[r]=e.numericalVertices[r][1]-C;let a=!e.hidden;if(m){i.current.visProp.visible=a,i.current.visPropCalc.visible=a;for(let r=0;r<e.numPoints-1;r++)t.current[r].visProp.visible=!1,t.current[r].visPropCalc.visible=!1;e.numPoints>0&&e.draggable&&(t.current[e.numPoints-1].visProp.visible=a,t.current[e.numPoints-1].visPropCalc.visible=a)}else{i.current.visProp.visible=!1,i.current.visPropCalc.visible=!1;for(let r=0;r<e.numPoints;r++)t.current[r].visProp.visible=!1,t.current[r].visPropCalc.visible=!1}if(S.sourceInformation&&R in S.sourceInformation){let r=S.sourceInformation[R].vertex;Number.isFinite(r)&&u.updateInfobox(t.current[r])}i.current.needsUpdate=!0,i.current.update().updateVisibility();for(let r=0;r<e.numPoints;r++)t.current[r].needsUpdate=!0,t.current[r].update();e.numPoints>0&&(t.current[e.numPoints-1].setAttribute({withlabel:!0}),t.current[e.numPoints-1].label.needsUpdate=!0,t.current[e.numPoints-1].label.update()),u.updateRenderer()}return e.hidden?null:j(U,{children:j("a",{name:G})})});function E(b){return b==="solid"?0:b==="dashed"?2:b==="dotted"?1:0}function B(b){return b==="triangle"?"triangleup":b}export{z as default};