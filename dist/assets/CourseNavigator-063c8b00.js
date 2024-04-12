import{e as R,s as N,P as xe,r as K,R as ce,m as Be,o as W,z as Y,k as se,A as g,j as i,h as $e,S as de,a as B,F as A,T as Z,V as q,W as o,X as ne,Y as le,I as we,Z as pe,H as J,_ as Ce,B as ie,$ as P,a0 as De,a1 as Re}from"./index-f8d734dc.js";import{M as Ae}from"./index.esm-d2943b7d.js";/* empty css             */import{e as Te}from"./RoleDropdown-2ab81a30.js";const ae=$e.button`
  border: none;
  border-radius: 35px;
  &:focus {
    outline: 2px solid var(--canvastext);
    outline-offset: 2px;
  }
`;function Ue(l){const t=R(N("courseId")),e=R(N("sectionId")),{canViewUnassignedContent:a}=R(Te(t));xe(t);const[n,s]=K.useState(1);let c=ce(Be),p=W(({snapshot:d,set:y})=>async()=>{const h=await d.getPromise(Y);y(se,null),y(Y,[]);for(let u of h)y(g(u),v=>{let x={...v};return x.isSelected=!1,x})});return K.useEffect(()=>{c(d=>{let y=[...d];return y.push(p),y})},[p,c]),a=="0"||l.displayRole=="student"?i(je,{courseNavigatorProps:l,courseId:t,sectionId:e,numberOfVisibleColumns:n,setNumberOfVisibleColumns:s}):a=="1"||l.displayRole=="instructor"?i(Fe,{courseNavigatorProps:l,courseId:t,sectionId:e,numberOfVisibleColumns:n,setNumberOfVisibleColumns:s}):null}function je({courseId:l,sectionId:t,numberOfVisibleColumns:e,setNumberOfVisibleColumns:a,courseNavigatorProps:n}){let s=R(de({courseId:l,sectionId:t}));console.log("studentItemOrder",s);let c=K.useRef([]),p=K.useRef("");p.current!=t&&(c.current=[],p.current=t);let d=[];return s.map(y=>d.push(i(ye,{courseId:l,doenetId:y,indentLevel:0,previousSections:c,courseNavigatorProps:n,numberOfVisibleColumns:e},`itemcomponent${y}`))),B(A,{children:[i(fe,{courseId:l,sectionId:t,columnLabels:["Due Date"],numberOfVisibleColumns:e,setNumberOfVisibleColumns:a}),d]})}function ye({courseId:l,doenetId:t,numberOfVisibleColumns:e,indentLevel:a,previousSections:n,courseNavigatorProps:s}){let c=R(g(t));return c.type=="section"&&(n!=null&&n.current)&&n.current.push(c.doenetId),n!=null&&n.current.includes(c.parentDoenetId)?null:c.type=="section"?i(ve,{courseNavigatorProps:s,courseId:l,doenetId:t,itemInfo:c,numberOfVisibleColumns:e,indentLevel:a},`Item${t}`):c.type=="activity"?i(Me,{courseNavigatorProps:s,courseId:l,doenetId:t,itemInfo:c,numberOfVisibleColumns:e,indentLevel:a},`Item${t}`):null}function ve({courseId:l,doenetId:t,itemInfo:e,numberOfVisibleColumns:a,indentLevel:n,courseNavigatorProps:s}){let c=R(de({courseId:l,sectionId:e.doenetId})),p=K.useRef([]);if(e.isOpen){let d=c.map(y=>i(ye,{courseNavigatorProps:s,previousSections:p,courseId:l,doenetId:y,numberOfVisibleColumns:a,indentLevel:n+1},`itemcomponent${y}`));return B(A,{children:[i($,{courseId:l,courseNavigatorProps:s,numberOfVisibleColumns:a,icon:Z,label:e.label,doenetId:t,hasToggle:!0,isOpen:e.isOpen,isSelected:e.isSelected,indentLevel:n}),d]})}else return i($,{courseId:l,courseNavigatorProps:s,numberOfVisibleColumns:a,icon:Z,label:e.label,doenetId:t,hasToggle:!0,isOpen:e.isOpen,isSelected:e.isSelected,indentLevel:n})}function Me({courseId:l,doenetId:t,itemInfo:e,numberOfVisibleColumns:a,indentLevel:n,courseNavigatorProps:s}){let c=[null];return e.dueDate&&(c[0]=i("span",{children:e.dueDate},`activityColumn2${t}`)),i(A,{children:i($,{courseId:l,courseNavigatorProps:s,columnsJSX:c,numberOfVisibleColumns:a,icon:q,label:e.label,doenetId:t,isSelected:e.isSelected,indentLevel:n,isBeingCut:e.isBeingCut})})}function Fe({courseId:l,sectionId:t,numberOfVisibleColumns:e,setNumberOfVisibleColumns:a,courseNavigatorProps:n}){let s=R(o({courseId:l,sectionId:t}));console.log(`authorItemOrder CourseId-${l}-SectionId-${t}-`,s);let c=K.useRef([]),p=K.useRef("");p.current!=t&&(c.current=[],p.current=t);let d=s.map(y=>i(re,{courseNavigatorProps:n,previousSections:c,courseId:l,doenetId:y,numberOfVisibleColumns:e,indentLevel:0},`itemcomponent${y}`));return B(A,{children:[i(fe,{courseId:l,sectionId:t,columnLabels:["Assigned","Public"],numberOfVisibleColumns:e,setNumberOfVisibleColumns:a}),d]})}function re({courseId:l,doenetId:t,numberOfVisibleColumns:e,indentLevel:a,previousSections:n,courseNavigatorProps:s}){let c=R(g(t));return c.type=="section"&&(n!=null&&n.current)&&n.current.push(c.doenetId),n!=null&&n.current.includes(c.parentDoenetId)?null:c.type=="section"?i(ke,{courseNavigatorProps:s,courseId:l,doenetId:t,itemInfo:c,numberOfVisibleColumns:e,indentLevel:a},`Item${t}`):c.type=="bank"?i(Ke,{courseNavigatorProps:s,courseId:l,doenetId:t,itemInfo:c,numberOfVisibleColumns:e,indentLevel:a},`Item${t}`):c.type=="activity"?i(_e,{courseNavigatorProps:s,courseId:l,doenetId:t,itemInfo:c,numberOfVisibleColumns:e,indentLevel:a},`Item${t}`):null}function ke({courseId:l,doenetId:t,itemInfo:e,numberOfVisibleColumns:a,indentLevel:n,courseNavigatorProps:s}){let c=R(o({courseId:l,sectionId:e.doenetId})),p=K.useRef([]),d=[null,null];if(e.isAssigned&&(d[0]=i(J,{icon:P},`activityColumn2${t}`)),e.isOpen){let y=c.map(h=>i(re,{courseNavigatorProps:s,previousSections:p,courseId:l,doenetId:h,numberOfVisibleColumns:a,indentLevel:n+1},`itemcomponent${h}`));return B(A,{children:[i($,{courseId:l,columnsJSX:d,courseNavigatorProps:s,isBeingCut:e.isBeingCut,numberOfVisibleColumns:a,icon:Z,label:e.label,doenetId:t,hasToggle:!0,isOpen:e.isOpen,isSelected:e.isSelected,indentLevel:n}),y]})}else return i($,{courseId:l,columnsJSX:d,courseNavigatorProps:s,isBeingCut:e.isBeingCut,numberOfVisibleColumns:a,icon:Z,label:e.label,doenetId:t,hasToggle:!0,isOpen:e.isOpen,isSelected:e.isSelected,indentLevel:n})}function Ke({courseId:l,doenetId:t,itemInfo:e,numberOfVisibleColumns:a,indentLevel:n,courseNavigatorProps:s}){if(e.isOpen){let c=e.pages.map((p,d)=>i(Q,{courseNavigatorProps:s,courseId:l,doenetId:p,numberOfVisibleColumns:a,indentLevel:n+1,number:d+1},`Page${p}`));return B(A,{children:[i($,{courseId:l,courseNavigatorProps:s,numberOfVisibleColumns:a,icon:ne,label:e.label,doenetId:t,hasToggle:!0,isOpen:e.isOpen,isSelected:e.isSelected,isBeingCut:e.isBeingCut,indentLevel:n}),c]})}else return i($,{courseId:l,courseNavigatorProps:s,numberOfVisibleColumns:a,icon:ne,label:e.label,doenetId:t,hasToggle:!0,isOpen:e.isOpen,isSelected:e.isSelected,isBeingCut:e.isBeingCut,indentLevel:n})}function _e({courseId:l,doenetId:t,itemInfo:e,numberOfVisibleColumns:a,indentLevel:n,courseNavigatorProps:s}){let c=[null,null];if(e.isAssigned&&(c[0]=i(J,{icon:P},`activityColumn2${t}`)),e.isPublic&&(c[1]=i(J,{icon:P},`activityColumn3${t}`)),e.isSinglePage)return i(A,{children:i($,{courseId:l,courseNavigatorProps:s,columnsJSX:c,numberOfVisibleColumns:a,icon:q,label:e.label,doenetId:t,isSelected:e.isSelected,indentLevel:n,isBeingCut:e.isBeingCut})});if(e.isOpen){let p=e.content.map((d,y)=>{if((d==null?void 0:d.type)=="order")return i(b,{courseNavigatorProps:s,orderInfo:d,courseId:l,activityDoenetId:t,numberOfVisibleColumns:1,indentLevel:n+1},`Order${y}${t}`);if(d!=null&&d.type){if((d==null?void 0:d.type)=="collectionLink")return i(V,{courseNavigatorProps:s,courseId:l,collectionLinkInfo:d,activityDoenetId:e.doenetId,numberOfVisibleColumns:a,indentLevel:n+1},`CollectionLink${y}`)}else return i(Q,{courseNavigatorProps:s,courseId:l,doenetId:d,activityDoenetId:e.doenetId,numberOfVisibleColumns:a,indentLevel:n+1},`NavPage${y}`)});return B(A,{children:[i($,{courseId:l,courseNavigatorProps:s,columnsJSX:c,numberOfVisibleColumns:a,icon:q,label:e.label,doenetId:t,hasToggle:!0,isOpen:e.isOpen,isSelected:e.isSelected,indentLevel:n,isBeingCut:e.isBeingCut}),p]})}else return i(A,{children:i($,{courseId:l,courseNavigatorProps:s,columnsJSX:c,numberOfVisibleColumns:a,icon:q,label:e.label,doenetId:t,hasToggle:!0,isOpen:e.isOpen,isSelected:e.isSelected,indentLevel:n,isBeingCut:e.isBeingCut})})}function b({courseId:l,activityDoenetId:t,numberOfVisibleColumns:e,indentLevel:a,orderInfo:n,courseNavigatorProps:s}){let{behavior:c,doenetId:p,content:d,numberToSelect:y,withReplacement:h}=n,u=R(g(p)),v=[];c=="sequence"?v=d.map((f,w)=>(f==null?void 0:f.type)=="order"?i(b,{courseNavigatorProps:s,orderInfo:f,courseId:l,activityDoenetId:p,numberOfVisibleColumns:1,indentLevel:a+1},`Order${w}${p}`):(f==null?void 0:f.type)=="collectionLink"?i(V,{courseNavigatorProps:s,courseId:l,collectionLinkInfo:f,activityDoenetId:p,numberOfVisibleColumns:e,indentLevel:a+1},`CollectionLink${w}`):i(Q,{courseNavigatorProps:s,courseId:l,doenetId:f,activityDoenetId:t,numberOfVisibleColumns:e,indentLevel:a+1,number:w+1},`NavPage${w}`)):v=d.map((f,w)=>(f==null?void 0:f.type)=="order"?i(b,{courseNavigatorProps:s,orderInfo:f,courseId:l,activityDoenetId:p,numberOfVisibleColumns:1,indentLevel:a+1},`Order${w}${p}`):(f==null?void 0:f.type)=="collectionLink"?i(V,{courseNavigatorProps:s,courseId:l,collectionLinkInfo:f,activityDoenetId:p,numberOfVisibleColumns:e,indentLevel:a+1},`CollectionLink${w}`):i(Q,{courseNavigatorProps:s,courseId:l,doenetId:f,activityDoenetId:t,numberOfVisibleColumns:e,indentLevel:a+1},`NavPage${w}`));let x=c;return c=="select"&&(h?x=`${c} ${y} with replacement`:x=`${c} ${y} without replacement`),u.isOpen?B(A,{children:[i($,{courseId:l,isBeingCut:u.isBeingCut,courseNavigatorProps:s,numberOfVisibleColumns:e,icon:le,label:x,doenetId:p,hasToggle:!0,isOpen:u.isOpen,isSelected:u.isSelected,indentLevel:a}),v]}):i($,{courseId:l,isBeingCut:u.isBeingCut,courseNavigatorProps:s,numberOfVisibleColumns:e,icon:le,label:x,doenetId:p,hasToggle:!0,isOpen:u.isOpen,isSelected:u.isSelected,indentLevel:a})}function Q({courseId:l,doenetId:t,activityDoenetId:e,numberOfVisibleColumns:a,indentLevel:n,number:s=null,courseNavigatorProps:c}){let p=R(g(t));return i($,{courseId:l,courseNavigatorProps:c,numberOfVisibleColumns:a,icon:we,label:p.label,doenetId:p.doenetId,indentLevel:n,numbered:s,isSelected:p.isSelected,isBeingCut:p.isBeingCut})}function Xe({courseId:l,indentLevel:t,pages:e,courseNavigatorProps:a}){if(!e)return null;let n=[];for(let[s,c]of e.entries())n.push(i(Ee,{courseId:l,doenetId:c,number:s+1,indentLevel:t+1,courseNavigatorProps:a}));return i(A,{children:n})}function V({courseId:l,numberOfVisibleColumns:t,indentLevel:e,number:a=null,courseNavigatorProps:n,collectionLinkInfo:s}){let{doenetId:c}=s,p=R(g(c)),d=null;if(p.isOpen){let y=p.pages;d=i(Xe,{courseId:l,indentLevel:e,pages:y,courseNavigatorProps:n})}return B(A,{children:[i($,{courseId:l,courseNavigatorProps:n,hasToggle:!0,isOpen:p.isOpen,numberOfVisibleColumns:t,icon:pe,label:p.label,doenetId:c,indentLevel:e,numbered:a,isSelected:p.isSelected,isBeingCut:p.isBeingCut}),d]})}function Ee({courseId:l,doenetId:t,indentLevel:e,numberOfVisibleColumns:a,number:n=null,courseNavigatorProps:s}){let c=R(g(t));return i($,{courseId:l,itemType:"pageLink",courseNavigatorProps:s,numberOfVisibleColumns:a,icon:pe,label:`Link to ${c.label}`,doenetId:t,indentLevel:e,numbered:n,isSelected:c.isSelected,isBeingCut:c.isBeingCut})}function $({courseId:l,doenetId:t,itemType:e,numberOfVisibleColumns:a,columnsJSX:n=[],icon:s,label:c,isSelected:p=!1,indentLevel:d=0,numbered:y,hasToggle:h=!1,isOpen:u,isBeingCut:v=!1,courseNavigatorProps:x}){const f=ce(se);let w=null,_=W(({set:r})=>()=>{r(g(t),F=>{let k={...F};return k.isOpen=!k.isOpen,k})},[t]),L=W(({snapshot:r,set:F})=>async k=>{k.preventDefault(),k.stopPropagation();let T=await r.getPromise(Y),j=[];if(T.length==0)j=[t],F(g(t),C=>{let S={...C};return S.isSelected=!0,S});else if(T.length==1&&T[0]==t)k.metaKey?(j=[],F(g(t),C=>{let S={...C};return S.isSelected=!1,S})):j=[...T];else if(k.shiftKey){let C=await r.getPromise(N("sectionId"));C||(C=l);const S=await r.getPromise(o({courseId:l,sectionId:C}));let D=[],G=!1,H=[];for(let X=0;X<S.length;X++){let U=S[X];const M=await r.getPromise(g(U));G&&(H.includes(M.parentDoenetId)?M.type=="order"&&H.push(M.doenetId):(G=!1,H=[])),G||(D.push(U),(M==null?void 0:M.isOpen)!==void 0&&!M.isOpen&&(G=!0,H.push(M.doenetId)))}let ge=T[T.length-1],m=D.indexOf(ge),I=D.indexOf(t),te=D.slice(Math.min(m,I),Math.max(m,I)+1);m>I&&te.reverse(),j=[...T];for(let X of te)T.includes(X)||(j.push(X),F(g(X),U=>{let M={...U};return M.isSelected=!0,M}))}else if(k.metaKey)T.includes(t)?(j=T.filter(S=>S!=t),F(g(t),S=>{let D={...S};return D.isSelected=!1,D})):(j=[...T,t],F(g(t),S=>{let D={...S};return D.isSelected=!0,D}));else{j=[t],F(g(t),C=>{let S={...C};return S.isSelected=!0,S});for(let C of T)t!=C&&F(g(C),S=>{let D={...S};return D.isSelected=!1,D})}let ee=null;j.length==1&&(ee=await r.getPromise(g(j[0]))),F(Y,j),x==null||x.updateSelectMenu({selectedItems:j,singleItem:ee})},[t,l,f]),E="var(--canvas)",z="var(--canvastext)";p?(z="black",E="var(--lightBlue)"):v&&(E="var(--mainGray)"),h&&(w=u?i(ae,{"data-text":"folderToggleCloseIcon","aria-expanded":"true",style:{backgroundColor:E},onClick:()=>{h&&_()},onKeyDown:r=>{r.key==="enter"&&h&&_()},children:i(J,{icon:De,style:{color:z}})}):i(ae,{"data-test":"folderToggleOpenIcon","aria-expanded":"false",style:{backgroundColor:E},onClick:()=>{h&&_()},onKeyDown:r=>{r.key==="enter"&&h&&_()},children:i(J,{icon:Re,style:{color:z}})}));let O=W(()=>async r=>{r.preventDefault(),r.stopPropagation(),x==null||x.doubleClickItem({doenetId:t,courseId:l})},[t,l,x]),ue=he(a),Se=i("div",{role:"button",tabIndex:0,className:"navigationRow noselect nooutline",style:{cursor:"pointer",padding:"8px",border:"0px",borderBottom:"2px solid var(--canvastext)",backgroundColor:E,color:z,width:"auto"},onClick:r=>{L(r)},onKeyDown:r=>{r.key==="Enter"&&(E==="var(--canvas)"||r.key==="Enter"&&r.metaKey?L(r):O(r))},onDoubleClick:r=>{O(r)},children:B("div",{style:{display:"grid",gridTemplateColumns:ue,gridTemplateRows:"1fr",alignContent:"center"},children:[i("span",{className:"navigationColumn1",style:{marginLeft:`${d*25}px`},children:B("p",{style:{display:"inline",margin:"0px"},children:[y?B("svg",{style:{verticalAlign:"middle"},width:"22",height:"22",viewBox:"0 0 22 22",children:[i("circle",{cx:"11",cy:"11",r:"12",stroke:"var(--canvas)",strokeWidth:"2",fill:"var(--mainBlue)"}),i("text",{fontSize:"14",fill:"var(--canvas)",fontFamily:"Verdana",textAnchor:"middle",alignmentBaseline:"baseline",x:"11",y:"16",children:y})]}):null,w,i("span",{style:{marginLeft:"8px"},"data-test":"rowIcon",children:i(J,{icon:s})}),B("span",{style:{marginLeft:"4px"},"data-test":"rowLabel",children:[c," "]})]})}),a>1?i("span",{className:"navigationColumn2",style:{textAlign:"center"},children:n[0]}):null,a>2?i("span",{className:"navigationColumn3",style:{textAlign:"center"},children:n[1]}):null,a>3?i("span",{className:"navigationColumn4",style:{textAlign:"center"},children:n[2]}):null,a>4?i("span",{className:"navigationColumn5",style:{textAlign:"center"},children:n[3]}):null]})},`Row${t}`);return i(A,{children:Se})}function he(l){let t="300px repeat(4,1fr)";return l===4?t="300px repeat(3,1fr)":l===3?t="300px 1fr 1fr":l===2?t="300px 1fr":l===1&&(t="100%"),t}function fe({courseId:l,sectionId:t,columnLabels:e,numberOfVisibleColumns:a,setNumberOfVisibleColumns:n}){let s=W(({set:d,snapshot:y})=>async({isOpen:h=!0,courseId:u,sectionId:v})=>{v||(v=u);let x=await y.getPromise(o({courseId:u,sectionId:v}));for(let f of x)d(g(f),w=>{let _={...w};return"isOpen"in _&&(_.isOpen=h),_})},[]);const c=K.useCallback(d=>{const y=e.length+1,h=[375,500,650,800];if(d>=h[3]&&a!==5){const u=Math.min(y,5);n==null||n(u)}else if(d<h[3]&&d>=h[2]&&a!==4){const u=Math.min(y,4);n==null||n(u)}else if(d<h[2]&&d>=h[1]&&a!==3){const u=Math.min(y,3);n==null||n(u)}else if(d<h[1]&&d>=h[0]&&a!==2){const u=Math.min(y,2);n==null||n(u)}else d<h[0]&&a!==1?n==null||n(1):a>y&&(n==null||n(y))},[e,a,n]);let p=he(a);return i(Ae,{bounds:!0,onResize:d=>{const y=d.bounds.width;c(y)},children:({measureRef:d})=>i("div",{ref:d,className:"noselect nooutline",style:{padding:"8px",border:"0px",borderBottom:"1px solid var(--canvastext)",maxWidth:"850px",margin:"0px"},children:B("div",{style:{display:"grid",gridTemplateColumns:p,gridTemplateRows:"1fr",alignContent:"center"},children:[B("span",{style:{display:"flex"},children:[i("span",{style:{marginRight:"10px"},children:"Label"}),B(Ce,{children:[i(ie,{value:"Open All",onClick:()=>s({isOpen:!0,courseId:l,sectionId:t})}),i(ie,{value:"Close All",onClick:()=>s({isOpen:!1,courseId:l,sectionId:t})})]})]}),a>=2&&e[0]?i("span",{style:{textAlign:"center"},children:e[0]}):null,a>=3&&e[1]?i("span",{style:{textAlign:"center"},children:e[1]}):null,a>=4&&e[2]?i("span",{style:{textAlign:"center"},children:e[2]}):null,a>=5&&e[3]?i("span",{style:{textAlign:"center"},children:e[3]}):null]})})})}export{Ue as C};
