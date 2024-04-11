import{ao as pe,bl as he,r as i,bw as ye,j as Y,bJ as be,a as me,F as ve,bm as xe}from"./index-2f97b159.js";import{BoardContext as ge,POINT_LAYER_OFFSET as ee}from"./graph-65272f56.js";import{c as Pe,n as re,d as te,e as ne,f as ie}from"./offGraphIndicators-c1e689d9.js";import"./css-14ccef8c.js";const Oe=pe.memo(function le(oe){var Z,$;let{name:F,id:U,SVs:r,actions:u,sourceOfUpdate:ke,callAction:f}=he(oe);le.ignoreActionsWithoutCore=()=>!0;const n=i.useContext(ge);let e=i.useRef(null),t=i.useRef(null),R=i.useRef(null),_=i.useRef(null),N=i.useRef(!1),T=i.useRef(!1),h=i.useRef(!1),W=i.useRef(null),H=i.useRef(null),k=i.useRef(null),C=i.useRef(null),c=i.useRef(null),G=i.useRef([0,0]),O=i.useRef([0,0]),B=i.useRef(!1),S=i.useRef(!1),V=i.useRef(!1);B.current=r.fixed,S.current=!r.draggable||r.fixLocation||r.fixed,V.current=r.switchable&&!r.fixed;const{darkMode:q}=i.useContext(ye)||{},E=r.open||["cross","plus"].includes(r.selectedStyle.markerStyle);i.useEffect(()=>()=>{e.current!==null&&(t.current.off("drag"),t.current.off("down"),t.current.off("hit"),t.current.off("up"),t.current.off("keyfocusout"),t.current.off("keydown"),n.removeObject(e.current),n.removeObject(t.current),e.current=null,t.current=null),n&&n.off("move",Q)},[]),i.useEffect(()=>{n&&n.on("move",Q)},[n]);function ae(){let y=q==="dark"?r.selectedStyle.markerColorDarkMode:r.selectedStyle.markerColor,I=E?"var(--canvas)":y,A=E?y:"none",g=r.labelForGraph!=="",o={name:r.labelForGraph,visible:!r.hidden,withlabel:g,fixed:!0,layer:10*r.layer+ee,fillColor:I,strokeColor:A,strokeOpacity:r.selectedStyle.markerOpacity,fillOpacity:r.selectedStyle.markerOpacity,highlightFillColor:"var(--mainGray)",highlightStrokeColor:"var(--lightBlue)",size:te(r.selectedStyle.markerSize,r.selectedStyle.markerStyle),face:re(r.selectedStyle.markerStyle,G.current),highlight:!S.current};if(g){let l=ne(r.labelPosition,O.current);H.current=l;let{offset:j,anchorx:X,anchory:b}=ie(l);o.label={offset:j,anchorx:X,anchory:b,highlight:!1},r.labelHasLatex&&(o.label.useMathJax=!0),r.applyStyleToLabel?o.label.strokeColor=y:o.label.strokeColor="var(--canvastext)"}else o.label={highlight:!1},r.labelHasLatex&&(o.label.useMathJax=!0);S.current?o.showInfoBox=!1:o.showInfoBox=r.showCoordsWhenDragging;let d=[c.current[0],c.current[1]];Number.isFinite(d[0])||(d[0]=0,o.visible=!1),Number.isFinite(d[1])||(d[1]=0,o.visible=!1);let p={...o};p.fixed=B.current,p.showInfoBox=!1,p.withlabel=!1,p.fillOpacity=0,p.strokeOpacity=0,p.highlightFillOpacity=0,p.highlightStrokeOpacity=0;let a=n.create("point",d,p);a.isDraggable=!S.current;let L=n.create("point",d,o);a.on("down",function(l){R.current=[l.x,l.y],_.current=[...a.coords.scrCoords],h.current=!1,t.current.visProp.highlightfillopacity=e.current.visProp.fillopacity,t.current.visProp.highlightstrokeopacity=e.current.visProp.strokeopacity,N.current=!0,T.current=!1,B.current||f({action:u.pointFocused,args:{name:F}})}),a.on("hit",function(l){h.current=!1,f({action:u.pointFocused,args:{name:F}})}),a.on("up",function(l){h.current?(f({action:u.movePoint,args:{x:k.current,y:C.current}}),h.current=!1):!T.current&&!B.current&&(V.current?(f({action:u.switchPoint}),f({action:u.pointClicked,args:{name:F}})):f({action:u.pointClicked,args:{name:F}})),N.current=!1,t.current.visProp.highlightfillopacity=0,t.current.visProp.highlightstrokeopacity=0}),a.on("hit",function(l){n.updateInfobox(e.current)}),a.on("keyfocusout",function(l){h.current&&(f({action:u.movePoint,args:{x:k.current,y:C.current}}),h.current=!1)}),a.on("drag",function(l){let j=l.type==="pointermove";(!j||Math.abs(l.x-R.current[0])>.1||Math.abs(l.y-R.current[1])>.1)&&(h.current=!0);let[X,b,P,w]=n.getBoundingBox(),m=X,v=P,s=w,x=b;P<X&&([v,m]=[m,v]),b<w&&([x,s]=[s,x]);let K=v-m,D=x-s;if(v-=K*.01,m+=K*.01,x-=D*.01,s+=D*.01,j){var J=n.origin.scrCoords;k.current=(_.current[1]+l.x-R.current[0]-J[1])/n.unitX,C.current=(J[2]-(_.current[2]+l.y-R.current[1]))/n.unitY}else k.current=a.X(),C.current=a.Y();k.current=Math.min(v,Math.max(m,k.current)),C.current=Math.min(x,Math.max(s,C.current)),f({action:u.movePoint,args:{x:k.current,y:C.current,transient:!0,skippable:!0}});let z=Math.min(v,Math.max(m,a.X())),M=Math.min(x,Math.max(s,a.Y()));a.coords.setCoordinates(JXG.COORDS_BY_USER,[z,M]),L.coords.setCoordinates(JXG.COORDS_BY_USER,c.current),n.updateInfobox(L)}),a.on("keydown",function(l){l.key==="Enter"&&(h.current&&(f({action:u.movePoint,args:{x:k.current,y:C.current}}),h.current=!1),V.current?(f({action:u.switchPoint}),f({action:u.pointClicked,args:{name:F}})):f({action:u.pointClicked,args:{name:F}}))}),e.current=L,t.current=a,W.current=g}function Q(y){N.current&&(Math.abs(y.x-R.current[0])>.1||Math.abs(y.y-R.current[1])>.1)&&(T.current=!0)}if(n){if(c.current=[...r.numericalXs],G.current=[0,0],!r.hideOffGraphIndicator){let{needIndicator:b,indicatorCoords:P,indicatorSides:w}=Pe(c.current,n);b&&(c.current=P,G.current=w)}O.current=[0,0];let y=!1,I=!1,[A,g,o,d]=n.getBoundingBox();o<A&&(y=!0,[o,A]=[A,o]),g<d&&(I=!0,[g,d]=[d,g]);let p=o-A,a=g-d,L=A+p*.05,l=o-p*.05,j=d+a*.05,X=g-a*.05;if(Number.isFinite(c.current[0])&&Number.isFinite(c.current[1])&&(c.current[0]<L?O.current[0]=y?1:-1:c.current[0]>l&&(O.current[0]=y?-1:1),c.current[1]<j?O.current[1]=I?1:-1:c.current[1]>X&&(O.current[1]=I?-1:1)),e.current===null)ae();else{let b=q==="dark"?r.selectedStyle.markerColorDarkMode:r.selectedStyle.markerColor,P=E?"var(--canvas)":b,w=E?b:"none";e.current.visProp.fillcolor!==P&&(e.current.visProp.fillcolor=P);let m=(Z=c.current)==null?void 0:Z[0],v=($=c.current)==null?void 0:$[1];e.current.coords.setCoordinates(JXG.COORDS_BY_USER,[m,v]),h.current||t.current.coords.setCoordinates(JXG.COORDS_BY_USER,[m,v]);let s=!r.hidden;if(Number.isFinite(m)&&Number.isFinite(v)){let M=e.current.visProp.visible!==s;e.current.visProp.visible=s,e.current.visPropCalc.visible=s,t.current.visProp.visible=s,t.current.visPropCalc.visible=s,M&&(e.current.setAttribute({visible:s}),t.current.setAttribute({visible:s}))}else e.current.visProp.visible=!1,e.current.visPropCalc.visible=!1,t.current.visProp.visible=!1,t.current.visPropCalc.visible=!1;let x=10*r.layer+ee;e.current.visProp.layer!==x&&(e.current.setAttribute({layer:x}),t.current.setAttribute({layer:x})),e.current.visProp.highlight=!S.current,t.current.visProp.highlight=!S.current,t.current.visProp.fixed=B.current,t.current.isDraggable=!S.current,e.current.visProp.strokecolor!==w&&(e.current.visProp.strokecolor=w,t.current.visProp.strokecolor=w,e.current.visProp.fillColor=P,t.current.visProp.fillColor=P),e.current.visProp.strokeopacity!==r.selectedStyle.markerOpacity&&(e.current.visProp.strokeopacity=r.selectedStyle.markerOpacity,e.current.visProp.fillopacity=r.selectedStyle.markerOpacity);let D=re(r.selectedStyle.markerStyle,G.current);e.current.visProp.face!==D&&(e.current.setAttribute({face:D}),t.current.setAttribute({face:D}));let J=te(r.selectedStyle.markerSize,r.selectedStyle.markerStyle);e.current.visProp.size!==J&&(e.current.setAttribute({size:J}),t.current.setAttribute({size:J})),S.current||G.current[0]||G.current[1]?(e.current.visProp.showinfobox=!1,n.displayInfobox(!1)):e.current.visProp.showinfobox=r.showCoordsWhenDragging,t.current.highlighted&&n.updateInfobox(e.current),e.current.name=r.labelForGraph;let z=r.labelForGraph!=="";if(z!=W.current&&(e.current.setAttribute({withlabel:z}),W.current=z),e.current.hasLabel){e.current.label.needsUpdate=!0,r.applyStyleToLabel?e.current.label.visProp.strokecolor=b:e.current.label.visProp.strokecolor="var(--canvastext)";let M=ne(r.labelPosition,O.current);if(M!==H.current){let{offset:ue,anchorx:fe,anchory:de}=ie(M);e.current.label.visProp.anchorx=fe,e.current.label.visProp.anchory=de,e.current.label.visProp.offset=ue,H.current=M,e.current.label.fullUpdate()}else e.current.label.update()}e.current.needsUpdate=!0,e.current.update(),t.current.needsUpdate=!0,t.current.update(),n.updateRenderer()}return Y("a",{name:U})}if(r.hidden)return null;let ce="\\("+r.latex+"\\)",se=be(q,r.selectedStyle);return me(ve,{children:[Y("a",{name:U}),Y("span",{id:U,style:se,children:Y(xe.MathJax,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:ce})})]})});export{Oe as default};