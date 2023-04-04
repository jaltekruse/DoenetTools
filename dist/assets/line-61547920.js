import{av as A,bn as E,r as c,j as m,F as G,a as W,b9 as j}from"./index-762a3e7c.js";import{BoardContext as U,LINE_LAYER_OFFSET as F}from"./graph-766f0ccb.js";import"./css-14ccef8c.js";import"./visibility-sensor-073fe32a.js";const H=A.memo(function b(v){var w;let{name:Y,id:S,SVs:e,actions:d,callAction:h}=E(v);b.ignoreActionsWithoutCore=!0;const u=c.useContext(U);let t=c.useRef({}),y=c.useRef(!1),C=c.useRef(!1),x=c.useRef(!1),k=c.useRef(null),R=c.useRef(null),f=c.useRef(null),L=c.useRef(null);L.current=e.numericalPoints,c.useEffect(()=>()=>{Object.keys(t.current).length!==0&&O()},[]);function D(){var g;if(((g=e.numericalPoints)==null?void 0:g.length)!==2||e.numericalPoints.some(r=>r.length!==2)){t.current={};return}let o=!e.draggable||e.fixed,a=e.showLabel&&e.labelForGraph!=="";var i={name:e.labelForGraph,visible:!e.hidden,withlabel:a,fixed:o,layer:10*e.layer+F,strokeColor:e.selectedStyle.lineColor,strokeOpacity:e.selectedStyle.lineOpacity,highlightStrokeColor:e.selectedStyle.lineColor,highlightStrokeOpacity:e.selectedStyle.lineOpacity*.5,strokeWidth:e.selectedStyle.lineWidth,highlightStrokeWidth:e.selectedStyle.lineWidth,dash:J(e.selectedStyle.lineStyle,e.dashed),highlight:!o};if(a){let r,l,s;e.labelPosition==="upperright"?(s=[5,5],r="left",l="bottom"):e.labelPosition==="upperleft"?(s=[-5,5],r="right",l="bottom"):e.labelPosition==="lowerright"?(s=[5,-5],r="left",l="top"):(s=[-5,-5],r="right",l="top"),i.label={offset:s,anchorx:r,anchory:l,position:"top",highlight:!1},e.labelHasLatex&&(i.label.useMathJax=!0),e.applyStyleToLabel?i.label.strokeColor=e.selectedStyle.lineColor:i.label.strokeColor="#000000"}else i.label={highlight:!1},e.labelHasLatex&&(i.label.useMathJax=!0);let p=[[...e.numericalPoints[0]],[...e.numericalPoints[1]]],n=u.create("line",p,i);n.on("drag",function(r){(Math.abs(r.x-y.current[0])>.1||Math.abs(r.y-y.current[1])>.1)&&(x.current=!0),X(r),h({action:d.moveLine,args:{point1coords:f.current[0],point2coords:f.current[1],transient:!0,skippable:!0}}),n.point1.coords.setCoordinates(JXG.COORDS_BY_USER,L.current[0]),n.point2.coords.setCoordinates(JXG.COORDS_BY_USER,L.current[1])}),n.on("up",function(r){x.current?h({action:d.moveLine,args:{point1coords:f.current[0],point2coords:f.current[1]}}):e.switchable&&!e.fixed?(h({action:d.switchLine}),h({action:d.lineClicked})):h({action:d.lineClicked})}),n.on("down",function(r){x.current=!1,y.current=[r.x,r.y],C.current=[[...n.point1.coords.scrCoords],[...n.point2.coords.scrCoords]],h({action:d.mouseDownOnLine})}),k.current=e.showLabel&&e.labelForGraph!=="",t.current=n}function X(o){var a=u.origin.scrCoords;f.current=[];for(let i=0;i<2;i++){let p=(C.current[i][1]+o.x-y.current[0]-a[1])/u.unitX,n=(a[2]-(C.current[i][2]+o.y-y.current[1]))/u.unitY;f.current.push([p,n])}}function O(){t.current.off("drag"),t.current.off("down"),t.current.off("up"),u.removeObject(t.current),t.current={}}if(u){if(Object.keys(t.current).length===0)D();else if(((w=e.numericalPoints)==null?void 0:w.length)!==2||e.numericalPoints.some(o=>o.length!==2))O();else{let o=!0;for(let l of[e.numericalPoints[0],e.numericalPoints[1]])Number.isFinite(l[0])||(o=!1),Number.isFinite(l[1])||(o=!1);t.current.point1.coords.setCoordinates(JXG.COORDS_BY_USER,e.numericalPoints[0]),t.current.point2.coords.setCoordinates(JXG.COORDS_BY_USER,e.numericalPoints[1]);let a=!e.hidden;if(o){let l=t.current.visProp.visible!==a;t.current.visProp.visible=a,t.current.visPropCalc.visible=a,l&&t.current.setAttribute({visible:a})}else t.current.visProp.visible=!1,t.current.visPropCalc.visible=!1;let i=!e.draggable||e.fixed;t.current.visProp.fixed=i,t.current.visProp.highlight=!i;let p=10*e.layer+F;t.current.visProp.layer!==p&&t.current.setAttribute({layer:p}),t.current.visProp.strokecolor!==e.selectedStyle.lineColor&&(t.current.visProp.strokecolor=e.selectedStyle.lineColor,t.current.visProp.highlightstrokecolor=e.selectedStyle.lineColor),t.current.visProp.strokewidth!==e.selectedStyle.lineWidth&&(t.current.visProp.strokewidth=e.selectedStyle.lineWidth,t.current.visProp.highlightstrokewidth=e.selectedStyle.lineWidth),t.current.visProp.strokeopacity!==e.selectedStyle.lineOpacity&&(t.current.visProp.strokeopacity=e.selectedStyle.lineOpacity,t.current.visProp.highlightstrokeopacity=e.selectedStyle.lineOpacity*.5);let g=J(e.selectedStyle.lineStyle,e.dashed);t.current.visProp.dash!==g&&(t.current.visProp.dash=g),t.current.name=e.labelForGraph;let r=e.showLabel&&e.labelForGraph!=="";if(r!=k.current&&(t.current.setAttribute({withlabel:r}),k.current=r),t.current.needsUpdate=!0,t.current.update(),t.current.hasLabel)if(t.current.label.needsUpdate=!0,e.applyStyleToLabel?t.current.label.visProp.strokecolor=e.selectedStyle.lineColor:t.current.label.visProp.strokecolor="#000000",e.labelPosition!==R.current){let l,s,P;e.labelPosition==="upperright"?(P=[5,5],l="left",s="bottom"):e.labelPosition==="upperleft"?(P=[-5,5],l="right",s="bottom"):e.labelPosition==="lowerright"?(P=[5,-5],l="left",s="top"):(P=[-5,-5],l="right",s="top"),t.current.label.visProp.anchorx=l,t.current.label.visProp.anchory=s,t.current.label.visProp.offset=P,R.current=e.labelPosition,t.current.label.fullUpdate()}else t.current.label.update();u.updateRenderer()}return m(G,{children:m("a",{name:S})})}if(e.hidden)return null;let _="\\("+e.latex+"\\)";return W(G,{children:[m("a",{name:S}),m("span",{id:S,children:m(j.MathJax,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:_})})]})});function J(b,v){return b==="dashed"||v?2:b==="solid"?0:b==="dotted"?1:0}export{H as default};