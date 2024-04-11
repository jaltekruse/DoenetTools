import{ao as Fe,bl as De,r as c,bw as Oe,bx as w,j as k,F as Z}from"./index-20ecac54.js";import{BoardContext as Se,LINE_LAYER_OFFSET as ye,VERTEX_LAYER_OFFSET as $,CONTROL_POINT_LAYER_OFFSET as xe}from"./graph-5de75097.js";import"./css-14ccef8c.js";const Ge=Fe.memo(function A(ee){let{name:R,id:D,SVs:e,actions:m,sourceOfUpdate:Y,callAction:b}=De(ee);A.ignoreActionsWithoutCore=()=>!0;const o=c.useContext(Se);let i=c.useRef(null),p=c.useRef(null),u=c.useRef(null),re=c.useRef(null),E=c.useRef(null),U=c.useRef(null),j=c.useRef(null),B=c.useRef(!1),J=c.useRef(!1),fe=c.useRef(null),O=c.useRef(null),_=c.useRef(null),I=c.useRef(null),te=c.useRef(null),F=c.useRef(null),T=c.useRef(null),s=c.useRef([]),S=c.useRef(null),z=c.useRef(null),ne=c.useRef(null),N=c.useRef(null),M=c.useRef(!1),X=c.useRef(!1),oe=c.useRef(!1),ie=c.useRef([]),V=c.useRef([]);M.current=e.fixed,X.current=!e.draggable||e.fixLocation||e.fixed,oe.current=e.switchable&&!e.fixed,ne.current=e.vectorControlDirections;let he=c.useRef(null);he.current=e.numericalThroughPoints;let de=c.useRef(null);de.current=e.numericalControlPoints;const{darkMode:pe}=c.useContext(Oe)||{};c.useEffect(()=>()=>{i.current&&ue(),o&&o.off("move",ve)},[]),c.useEffect(()=>{o&&o.on("move",ve)},[o]);function ge(){if(e.curveType==="bezier"&&e.numericalThroughPoints.length<2)return null;let r=pe==="dark"?e.selectedStyle.lineColorDarkMode:e.selectedStyle.lineColor;var t={name:e.labelForGraph,visible:!e.hidden,withLabel:e.labelForGraph!=="",fixed:M.current,layer:10*e.layer+ye,strokeColor:r,strokeOpacity:e.selectedStyle.lineOpacity,strokeWidth:e.selectedStyle.lineWidth,dash:we(e.selectedStyle.lineStyle,e.dashed),highlight:!1,lineCap:"butt"};if(e.labelForGraph!==""){let l,f,d;e.labelPosition==="upperright"?(d="urt",f=[-5,-10],l="right"):e.labelPosition==="upperleft"?(d="ulft",f=[5,-10],l="left"):e.labelPosition==="lowerright"?(d="lrt",f=[-5,10],l="right"):e.labelPosition==="lowerleft"?(d="llft",f=[5,10],l="left"):e.labelPosition==="top"?(d="top",f=[0,-10],l="left"):e.labelPosition==="bottom"?(d="bot",f=[0,10],l="left"):e.labelPosition==="left"?(d="lft",f=[10,0],l="left"):(d="rt",f=[-10,0],l="right"),t.label={offset:f,position:d,anchorx:l,highlight:!1},e.labelHasLatex&&(t.label.useMathJax=!0),e.applyStyleToLabel?t.label.strokeColor=r:t.label.strokeColor="var(canvastext)"}else t.label={highlight:!1},e.labelHasLatex&&(t.label.useMathJax=!0);let g;if(e.curveType==="parameterization"){let l=w(e.fDefinitions[0]),f=w(e.fDefinitions[1]);g=o.create("curve",[l,f,e.parMin,e.parMax],t)}else if(e.curveType==="bezier"){let l=w(e.fDefinitions[0]),f=w(e.fDefinitions[1]);g=o.create("curve",[l,f,e.parMin,e.parMax],t)}else{let l=w(e.fDefinitions[0]);if(e.flipFunction){let f=e.graphYmin,d=e.graphYmax,v=Math.max(f-(d-f)*.1,e.parMin),L=Math.min(d+(d-f)*.1,e.parMax);g=o.create("curve",[l,ce=>ce,v,L],t)}else{let f=e.graphXmin,d=e.graphXmax,v=Math.max(f-(d-f)*.1,e.parMin),L=Math.min(d+(d-f)*.1,e.parMax);g=o.create("functiongraph",[l,v,L],t)}fe.current=e.flipFunction}return re.current=e.curveType,E.current=null,U.current=null,g.isDraggable=!1,g.on("up",function(l){!J.current&&!M.current&&(oe.current&&b({action:m.switchCurve}),b({action:m.curveClicked,args:{name:R}})),B.current=!1}),g.on("keydown",function(l){l.key==="Enter"&&(oe.current&&b({action:m.switchCurve}),b({action:m.curveClicked,args:{name:R}}))}),e.curveType==="bezier"?(o.on("up",Ce),g.on("down",l=>{j.current=[l.x,l.y],B.current=!0,J.current=!1,C(),M.current||b({action:m.curveFocused,args:{name:R}})}),g.on("hit",function(l){C(),b({action:m.curveFocused,args:{name:R}})}),O.current={visible:!1,withLabel:!1,fixed:!0,strokeColor:"var(--mainGray)",highlightStrokeColor:"var(--mainGray)",layer:10*e.layer+$,strokeWidth:1,highlightStrokeWidth:1},_.current={visible:!e.hidden,withLabel:!1,fixed:!1,fillColor:"none",strokeColor:"none",highlightFillColor:"var(--mainGray)",highlightStrokeColor:"var(--mainGray)",strokeWidth:1,highlightStrokeWidth:1,layer:10*e.layer+$,size:3,showInfoBox:e.showCoordsWhenDragging},I.current={fillcolor:"var(--mainGray)",strokecolor:"var(--mainGray)"},te.current={fillcolor:"none",strokecolor:"none"},F.current={visible:!1,withLabel:!1,fixed:!1,fillColor:"var(--mainGray)",strokeColor:"var(--mainGray)",highlightFillColor:"var(--mainGray)",highlightStrokeColor:"var(--mainGray)",strokeWidth:1,highlightStrokeWidth:1,layer:10*e.layer+xe,size:2,showInfoBox:e.showCoordsWhenDragging},X.current||(me(),e.bezierControlsAlwaysVisible&&(le(),ke()),o.updateRenderer(),T.current=e.numericalThroughPoints.length,N.current=[...e.vectorControlDirections])):(g.on("down",function(l){j.current=[l.x,l.y],B.current=!0,J.current=!1,M.current||b({action:m.curveFocused,args:{name:R}})}),g.on("hit",function(l){b({action:m.curveFocused,args:{name:R}})})),g}function ve(r){B.current&&(Math.abs(r.x-j.current[0])>.1||Math.abs(r.y-j.current[1])>.1)&&(J.current=!0)}function ue(){o.off("up",Ce),i.current.off("down"),i.current.off("up"),i.current.off("keydown"),o.removeObject(i.current),i.current=null,be()}function me(){p.current=[],u.current=[],s.current=[];for(let r=0;r<e.numericalThroughPoints.length;r++){let t=o.create("point",[...e.numericalThroughPoints[r]],_.current);p.current.push(t);let g=o.create("point",[...e.numericalControlPoints[r][0]],F.current),l=o.create("point",[...e.numericalControlPoints[r][1]],F.current);u.current.push([g,l]);let f=o.create("segment",[t,g],O.current),d=o.create("segment",[t,l],O.current);s.current.push([f,d]),t.on("drag",v=>Pe(r)),t.on("down",v=>Q(r,v)),t.on("hit",v=>Q(r,v)),t.on("up",v=>H(r)),t.on("keyfocusout",v=>H(r)),g.on("drag",v=>q(r,0)),l.on("drag",v=>q(r,1)),g.on("down",C),l.on("down",C),f.on("down",C),d.on("down",C),g.on("up",v=>K(r,0)),l.on("up",v=>K(r,1))}S.current=[]}function be(){s.current.length>0&&(s.current.forEach(r=>r.forEach(t=>{t&&(t.off("down"),o.removeObject(t))})),s.current=[],u.current.forEach(r=>r.forEach(t=>{t&&(t.off("drag"),t.off("down"),t.off("up"),o.removeObject(t))})),u.current=[],p.current.forEach(r=>{r.off("drag"),r.off("down"),r.off("hit"),r.off("up"),r.off("keyfocusout"),o.removeObject(r)}),p.current=[])}function Q(r,t){if(X.current)return;U.current=null,E.current=null;let g=t.type==="pointerdown";z.current=g,le(),W(r),o.updateRenderer()}function Pe(r){U.current=r,ie.current[r]=[p.current[r].X(),p.current[r].Y()],b({action:m.moveThroughPoint,args:{throughPoint:ie.current[r],throughPointInd:r,transient:!0,skippable:!0}}),p.current[r].coords.setCoordinates(JXG.COORDS_BY_USER,he.current[r]),o.updateInfobox(p.current[r])}function H(r){U.current===r&&b({action:m.moveThroughPoint,args:{throughPoint:ie.current[r],throughPointInd:r}})}function q(r,t){E.current=r+"_"+t,V.current[r]||(V.current[r]={}),V.current[r][t]=[u.current[r][t].X()-p.current[r].X(),u.current[r][t].Y()-p.current[r].Y()],b({action:m.moveControlVector,args:{controlVector:V.current[r][t],controlVectorInds:[r,t],transient:!0,skippable:!0}}),u.current[r][t].coords.setCoordinates(JXG.COORDS_BY_USER,[...de.current[r][t]]),o.updateInfobox(u.current[r][t])}function K(r,t){E.current===r+"_"+t&&b({action:m.moveControlVector,args:{controlVector:V.current[r][t],controlVectorInds:[r,t]}})}function le(){for(let r of p.current){for(let t in I.current)r.visProp[t]=I.current[t];r.needsUpdate=!0,r.update()}}function Re(){for(let r of p.current){for(let t in te.current)r.visProp[t]=te.current[t];r.needsUpdate=!0,r.update()}}function Te(){for(let r of u.current)for(let t of r)t&&(t.visProp.visible=!1,t.needsUpdate=!0,t.update());for(let r of s.current)for(let t of r)t&&(t.visProp.visible=!1,t.needsUpdate=!0,t.update());S.current=[]}function ke(){for(let r in u.current)W(r)}function Ce(){X.current||(z.current!==!0&&!e.bezierControlsAlwaysVisible&&(Re(),Te(),o.updateRenderer()),z.current=!1)}function W(r){if(!e.hiddenControls[r]){if(u.current[r][0]){let t=(r>0||e.extrapolateBackward)&&["symmetric","both","previous"].includes(ne.current[r]);u.current[r][0].visProp.visible=t,u.current[r][0].visPropCalc.visible=t,u.current[r][0].needsUpdate=!0,u.current[r][0].update(),s.current[r][0].visProp.visible=t,s.current[r][0].visPropCalc.visible=t,s.current[r][0].needsUpdate=!0,s.current[r][0].update()}if(u.current[r][1]){let t=(r<p.current.length-1||e.extrapolateForward)&&["symmetric","both","next"].includes(ne.current[r]);u.current[r][1].visProp.visible=t,u.current[r][1].visPropCalc.visible=t,u.current[r][1].needsUpdate=!0,u.current[r][1].update(),s.current[r][1].visProp.visible=t,s.current[r][1].visPropCalc.visible=t,s.current[r][1].needsUpdate=!0,s.current[r][1].update()}S.current[r]=!0}}function C(){X.current||(U.current=null,E.current=null,z.current=!0,le(),o.updateRenderer())}if(o)if(!i.current)i.current=ge();else if(e.curveType==="bezier"&&e.numericalThroughPoints.length<2)ue();else if(re.current!==e.curveType||re.current==="function"&&fe.current!==e.flipFunction)ue(),i.current=ge(),o.updateQuality===o.BOARD_QUALITY_LOW&&(o.itemsRenderedLowQuality[D]=i.current);else{o.updateQuality===o.BOARD_QUALITY_LOW&&(o.itemsRenderedLowQuality[D]=i.current);let r=!e.hidden;i.current.name=e.labelForGraph,i.current.visProp.visible=r,i.current.visPropCalc.visible=r;let t=10*e.layer+ye,g=i.current.visProp.layer!==t,l,f,d;g&&(i.current.setAttribute({layer:t}),e.curveType==="bezier"&&(l=10*e.layer+$,f=10*e.layer+$,d=10*e.layer+xe,O.current.layer=l,_.current.layer=f,F.current.layer=d));let v=pe==="dark"?e.selectedStyle.lineColorDarkMode:e.selectedStyle.lineColor;i.current.visProp.strokecolor!==v&&(i.current.visProp.strokecolor=v,i.current.visProp.highlightstrokecolor=v),i.current.visProp.strokeopacity!==e.selectedStyle.lineOpacity&&(i.current.visProp.strokeopacity=e.selectedStyle.lineOpacity);let L=we(e.selectedStyle.lineStyle,e.dashed);if(i.current.visProp.dash!==L&&(i.current.visProp.dash=L),i.current.visProp.strokewidth!==e.selectedStyle.lineWidth&&(i.current.visProp.strokewidth=e.selectedStyle.lineWidth),e.curveType==="parameterization"){let n=w(e.fDefinitions[0]),h=w(e.fDefinitions[1]);i.current.X=n,i.current.Y=h,i.current.minX=()=>e.parMin,i.current.maxX=()=>e.parMax}else if(e.curveType==="bezier")i.current.X=w(e.fDefinitions[0]),i.current.Y=w(e.fDefinitions[1]),i.current.minX=()=>e.parMin,i.current.maxX=()=>e.parMax,_.current.showInfoBox=e.showCoordsWhenDragging,F.current.showInfoBox=e.showCoordsWhenDragging;else{let n=w(e.fDefinitions[0]);if(e.flipFunction){i.current.X=n;let h=e.graphYmin,a=e.graphYmax,P=Math.max(h-(a-h)*.1,e.parMin),y=Math.min(a+(a-h)*.1,e.parMax);i.current.minX=()=>P,i.current.maxX=()=>y}else{i.current.Y=n;let h=e.graphXmin,a=e.graphXmax,P=Math.max(h-(a-h)*.1,e.parMin),y=Math.min(a+(a-h)*.1,e.parMax);i.current.minX=()=>P,i.current.maxX=()=>y}}if(i.current.visProp.fixed=M.current,i.current.needsUpdate=!0,i.current.updateCurve(),i.current.hasLabel&&(i.current.label.needsUpdate=!0,i.current.label.visPropCalc.visible=e.labelForGraph!=="",e.applyStyleToLabel?i.current.label.visProp.strokecolor=v:i.current.label.visProp.strokecolor="var(canvastext)",i.current.label.update()),e.curveType!=="bezier")return o.updateRenderer(),k(Z,{children:k("a",{name:D})});if(X.current)return s.current.length>0&&be(),o.updateRenderer(),k(Z,{children:k("a",{name:D})});if(s.current.length===0)return me(),T.current=e.numericalThroughPoints.length,N.current=[...e.vectorControlDirections],o.updateRenderer(),k(Z,{children:k("a",{name:D})});if(e.numericalThroughPoints.length>T.current){let n=T.current-1,h=Object.assign({},_.current);p.current[n].visProp.fillcolor===I.current.fillcolor&&Object.assign(h,I.current);for(let a=T.current;a<e.numericalThroughPoints.length;a++){let P=o.create("point",[...e.numericalThroughPoints[a]],h);p.current.push(P);let y=o.create("point",[...e.numericalControlPoints[a][0]],F.current),G=o.create("point",[...e.numericalControlPoints[a][1]],F.current);u.current.push([y,G]);let ae=o.create("segment",[P,y],O.current),se=o.create("segment",[P,G],O.current);s.current.push([ae,se]),y.visProp.visible=!1,ae.visProp.visible=!1,G.visProp.visible=!1,se.visProp.visible=!1,P.on("drag",x=>Pe(a)),P.on("down",x=>Q(a,x)),P.on("hit",x=>Q(a,x)),P.on("up",x=>H(a)),P.on("keyfocusout",x=>H(a)),y.on("drag",x=>q(a,0)),y.on("down",C),y.on("up",x=>K(a,0)),G.on("drag",x=>q(a,1)),G.on("down",C),G.on("up",x=>K(a,1)),ae.on("down",C),se.on("down",C)}S.current[n]&&W(n)}else if(e.numericalThroughPoints.length<T.current){for(let h=T.current-1;h>=e.numericalThroughPoints.length;h--){s.current[h][0].off("down"),s.current[h][1].off("down"),o.removeObject(s.current[h][0]),o.removeObject(s.current[h][1]),s.current.pop(),u.current[h][0].off("drag"),u.current[h][0].off("down"),u.current[h][0].off("up"),u.current[h][1].off("drag"),u.current[h][1].off("down"),u.current[h][1].off("up"),o.removeObject(u.current[h][0]),o.removeObject(u.current[h][1]),u.current.pop();let a=p.current.pop();a.off("drag"),a.off("down"),a.off("up"),a.off("hit"),a.off("keyfocusout"),o.removeObject(a)}let n=e.numericalThroughPoints.length-1;S.current[n]&&W(n)}let ce=Math.min(e.numericalThroughPoints.length,T.current);for(let n=0;n<ce;n++)N.current[n]!==e.vectorControlDirections[n]&&S.current[n]&&W(n),g&&(p.current[n].setAttribute({layer:f}),s.current[n][0].setAttribute({layer:l}),u.current[n][0].setAttribute({layer:d}),s.current[n][1].setAttribute({layer:l}),u.current[n][1].setAttribute({layer:d})),p.current[n].coords.setCoordinates(JXG.COORDS_BY_USER,[...e.numericalThroughPoints[n]]),p.current[n].visProp.showinfobox=e.showCoordsWhenDragging,p.current[n].needsUpdate=!0,p.current[n].update(),u.current[n][0].coords.setCoordinates(JXG.COORDS_BY_USER,[...e.numericalControlPoints[n][0]]),u.current[n][0].visProp.showinfobox=e.showCoordsWhenDragging,u.current[n][0].needsUpdate=!0,u.current[n][0].update(),s.current[n][0].needsUpdate=!0,s.current[n][0].update(),u.current[n][1].coords.setCoordinates(JXG.COORDS_BY_USER,[...e.numericalControlPoints[n][1]]),u.current[n][1].visProp.showinfobox=e.showCoordsWhenDragging,u.current[n][1].needsUpdate=!0,u.current[n][1].update(),s.current[n][1].needsUpdate=!0,s.current[n][1].update();for(let n=0;n<e.numericalThroughPoints.length;n++)p.current[n].visProp.visible=!e.hidden,p.current[n].visPropCalc.visible=!e.hidden;if(Y.sourceInformation&&R in Y.sourceInformation){let n=Y.sourceInformation[R].throughPointMoved;n!==void 0?o.updateInfobox(p.current[n]):(n=Y.sourceInformation[R].controlVectorMoved,n!==void 0&&o.updateInfobox(u.current[n[0]][n[1]]))}T.current=e.numericalThroughPoints.length,N.current=[...e.vectorControlDirections],o.updateRenderer()}return e.hidden?null:k(Z,{children:k("a",{name:D})})});function we(A,ee){return A==="dashed"||ee?2:A==="solid"?0:A==="dotted"?1:0}export{Ge as default};
