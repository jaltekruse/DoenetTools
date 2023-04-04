import{av as k,bn as L,r as c,bo as J,j as O,a as W,F as q}from"./index-762a3e7c.js";import{BoardContext as H,TEXT_LAYER_OFFSET as N}from"./graph-766f0ccb.js";import"./css-14ccef8c.js";import"./visibility-sensor-073fe32a.js";const te=k.memo(function U(Y){let{name:I,id:v,SVs:e,actions:S,sourceOfUpdate:K,callAction:T}=L(Y);U.ignoreActionsWithoutCore=!0;let t=c.useRef(null),p=c.useRef(null),x=c.useRef(null);const i=c.useContext(H);let d=c.useRef(!1),F=c.useRef(!1),g=c.useRef(!1),m=c.useRef(null),h=c.useRef(null),j=c.useRef(null),y=c.useRef(null);c.useEffect(()=>()=>{t.current!==null&&(t.current.off("drag"),t.current.off("down"),t.current.off("up"),i==null||i.removeObject(t.current),t.current=null)},[]);function B(){let u=!e.draggable||e.fixed,n={visible:!e.hidden,fixed:u,layer:10*e.layer+N,highlight:!u},a;try{let r=J.fromAst(e.anchor),f=[r.get_component(0).evaluate_to_constant(),r.get_component(1).evaluate_to_constant()];Number.isFinite(f[0])||(f[0]=0,n.visible=!1),Number.isFinite(f[1])||(f[1]=0,n.visible=!1),a=i.create("point",f,{visible:!1})}catch{n.visible=!1,a=i.create("point",[0,0],{visible:!1})}n.anchor=a;let s,l;e.positionFromAnchor==="center"?(s="middle",l="middle"):e.positionFromAnchor==="lowerleft"?(s="right",l="top"):e.positionFromAnchor==="lowerright"?(s="left",l="top"):e.positionFromAnchor==="upperleft"?(s="right",l="bottom"):e.positionFromAnchor==="upperright"?(s="left",l="bottom"):e.positionFromAnchor==="bottom"?(s="middle",l="top"):e.positionFromAnchor==="top"?(s="middle",l="bottom"):e.positionFromAnchor==="right"?(s="left",l="middle"):(s="right",l="middle"),n.anchorx=s,n.anchory=l,x.current=[s,l];let o=i.create("text",[0,0,e.text],n);o.on("down",function(r){d.current=[r.x,r.y],F.current=[...a.coords.scrCoords],g.current=!1}),o.on("up",function(r){g.current&&T({action:S.moveText,args:{x:m.current,y:h.current}}),g.current=!1}),o.on("drag",function(r){var f=i.origin.scrCoords;let[C,R,_,P]=i.getBoundingBox(),X=o.size[0]/i.unitX,w=o.size[1]/i.unitY,E=x.current[0],G=x.current[1],b=0;E==="middle"?b=-X/2:E==="right"&&(b=-X);let A=0;G==="middle"?A=-w/2:G==="top"&&(A=-w);let D=C+.04*(_-C)-b-X,M=_-.04*(_-C)-b,z=P+.04*(R-P)-A-w,V=R-.04*(R-P)-A;m.current=(F.current[1]+r.x-d.current[0]-f[1])/i.unitX,m.current=Math.min(M,Math.max(D,m.current)),h.current=(f[2]-(F.current[2]+r.y-d.current[1]))/i.unitY,h.current=Math.min(V,Math.max(z,h.current)),T({action:S.moveText,args:{x:m.current,y:h.current,transient:!0,skippable:!0}}),o.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,[0,0]),a.coords.setCoordinates(JXG.COORDS_BY_USER,j.current),(Math.abs(r.x-d.current[0])>.1||Math.abs(r.y-d.current[1])>.1)&&(g.current=!0)}),t.current=o,p.current=a,y.current=e.positionFromAnchor}if(i){let u;try{let n=J.fromAst(e.anchor);u=[n.get_component(0).evaluate_to_constant(),n.get_component(1).evaluate_to_constant()]}catch{u=[NaN,NaN]}if(j.current=u,t.current===null)B();else{t.current.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,[0,0]),p.current.coords.setCoordinates(JXG.COORDS_BY_USER,u),t.current.setText(e.text);let n=!e.hidden;if(Number.isFinite(u[0])&&Number.isFinite(u[1])){let o=t.current.visProp.visible!==n;t.current.visProp.visible=n,t.current.visPropCalc.visible=n,o&&t.current.setAttribute({visible:n})}else t.current.visProp.visible=!1,t.current.visPropCalc.visible=!1;let a=10*e.layer+N;t.current.visProp.layer!==a&&t.current.setAttribute({layer:a});let l=!e.draggable||e.fixed;if(t.current.visProp.highlight=!l,t.current.visProp.fixed=l,t.current.needsUpdate=!0,e.positionFromAnchor!==y.current){let o,r;e.positionFromAnchor==="center"?(o="middle",r="middle"):e.positionFromAnchor==="lowerleft"?(o="right",r="top"):e.positionFromAnchor==="lowerright"?(o="left",r="top"):e.positionFromAnchor==="upperleft"?(o="right",r="bottom"):e.positionFromAnchor==="upperright"?(o="left",r="bottom"):e.positionFromAnchor==="bottom"?(o="middle",r="top"):e.positionFromAnchor==="top"?(o="middle",r="bottom"):e.positionFromAnchor==="right"?(o="left",r="middle"):(o="right",r="middle"),t.current.visProp.anchorx=o,t.current.visProp.anchory=r,x.current=[o,r],y.current=e.positionFromAnchor,t.current.fullUpdate()}else t.current.update();p.current.needsUpdate=!0,p.current.update(),i.updateRenderer()}return O("a",{name:v})}return e.hidden?null:W(q,{children:[O("a",{name:v}),O("span",{id:v,children:e.text})]})});export{te as default};