import{l as R,m as F,a5 as J,a6 as X,r as w,g as G,a as h,j as e,B as P,A as q,s as f}from"./index-7c464f87.js";import{A as K}from"./SettingComponents-1d6d16f9.js";import{M as L}from"./index.esm-3c3382f8.js";import{R as E}from"./RoleDropdown-84cc0015.js";import{processAtom as Q,headersAtom as Y,entriesAtom as Z,csvPeopleProcess as W,validHeaders as m}from"./LoadPeople-d552fd36.js";import{B as C}from"./ButtonGroup-bc0b5002.js";import"./CourseToolHandler-4b8f702c.js";import"./index-403b1812.js";import"./index-fcf36459.js";import"./index-47ca4f11.js";/* empty css             */import"./CollapseSection-1ac928d3.js";import"./util-38d8e238.js";import"./DateTime-6c00c28d.js";import"./moment-d38c9e6c.js";import"./DropdownMenu-ffa4b021.js";import"./setPrototypeOf-51e8cf87.js";import"./RelatedItems-4652f7c8.js";import"./Textfield-4a9df6f6.js";import"./index-454bfe04.js";const N=f.div`
  margin: 0 5px 10px 5px;
  display: ${t=>t.flex?"flex":"block"};
  align-items: ${t=>t.flex&&"center"};
  gap: 4px;
`,V=f.span`
  font-size: 15px;
  line-height: 1.1;
`;function Ae(){const t=R(F("courseId")),{recoilUnWithdraw:o,recoilWithdraw:a,recoilMergeData:s,value:c}=R(J(t)),{modifyUserRole:n,defaultRoleId:l}=X(t);let[d,p]=w.useState(!1);const[x,T]=w.useState(1),[B,$]=G(Q),g=R(Y),k=R(Z),[D,u]=w.useState(l);if(!t)return null;const H=(r,i)=>{r.preventDefault(),o(i)},_=(r,i)=>{r.preventDefault(),a(i)};return B===W.PREVIEW?h("div",{style:{padding:"8px"},children:[e("h2",{children:"Preview CSV People"}),e(E,{label:"Assigned Role",valueRoleId:D??l,onChange:({value:r})=>{u(r)},maxMenuHeight:"200px",vertical:!0}),e(M,{columnLabels:g.filter(r=>m[r]??!1),numberOfVisibleColumns:x,setNumberOfVisibleColumns:T}),k.map((r,i)=>e(b,{numberOfVisibleColumns:x,entryData:r,headers:g},`${r[0]} ${i}`)),e("br",{}),h(C,{children:[e(P,{onClick:()=>{$(W.IDLE)},value:"Cancel","data-test":"Cancel"}),e(P,{onClick:()=>{const r={roleId:D??l,mergeHeads:g,mergeExternalId:[],mergeFirstName:[],mergeLastName:[],mergeSection:[],mergeEmail:[]};for(const i of k)i.map((A,v)=>{m[g[v]]&&r[`merge${g[v]}`].push(A)});s(r,()=>{$(W.IDLE)})},value:"Merge","data-test":"Merge",alert:!0})]})]}):h("div",{style:{padding:"8px"},children:[e("h2",{children:"Add Person"}),e(K,{courseId:t}),e("h2",{children:"Current People"}),c.length>0?h(N,{flex:!0,children:[e(q,{onClick:()=>{p(!d)},dataTest:"Show Withdrawn",checked:d}),e(V,{children:"Show Withdrawn"})]}):null,e(M,{columnLabels:["Name","Email","Role","Date Added"],numberOfVisibleColumns:x,setNumberOfVisibleColumns:T}),e("div",{"data-test":"People Table",children:c.map(({email:r,firstName:i,lastName:A,screenName:v,dateEnrolled:j,roleId:U,withdrew:y})=>{const z=[r,e(E,{valueRoleId:U,onChange:({value:S})=>{n(r,S,()=>{})},width:"150px"},"role"),j,e(P,{value:y==="0"?"Withdraw":"Enroll","data-test":y==="0"?`Withdraw ${r}`:`Enroll ${r}`,onClick:S=>{y==="0"?_(S,r):H(S,r)}},"withdraw")];return!d&&y==="1"?null:e(O,{label:`${i} ${A} (${v})`,numberOfVisibleColumns:x,columnsJSX:z},r)})}),c.length===0?e("p",{children:"No Students are currently enrolled in the course"}):null]})}function M({columnLabels:t,numberOfVisibleColumns:o,setNumberOfVisibleColumns:a}){const s=w.useCallback(n=>{const l=t.length+1,d=[375,500,650,800];if(n>=d[3]&&o!==5){const p=Math.min(l,5);a==null||a(p)}else if(n<d[3]&&n>=d[2]&&o!==4){const p=Math.min(l,4);a==null||a(p)}else if(n<d[2]&&n>=d[1]&&o!==3){const p=Math.min(l,3);a==null||a(p)}else if(n<d[1]&&n>=d[0]&&o!==2){const p=Math.min(l,2);a==null||a(p)}else n<d[0]&&o!==1?a==null||a(1):o>l&&(a==null||a(l))},[t,o,a]);let c=I(o);return e(L,{bounds:!0,onResize:n=>{const l=n.bounds.width;s(l)},children:({measureRef:n})=>e("div",{ref:n,className:"noselect nooutline",style:{padding:"8px",border:"0px",borderBottom:"1px solid var(--canvastext)",maxWidth:"850px",margin:"0px"},children:h("div",{style:{display:"grid",gridTemplateColumns:c,gridTemplateRows:"1fr",alignContent:"center",gap:"4px"},children:[e("span",{children:t[0]}),o>=2&&t[1]?e("span",{style:{textAlign:"center"},children:t[1]}):null,o>=3&&t[2]?e("span",{style:{textAlign:"center"},children:t[2]}):null,o>=4&&t[3]?e("span",{style:{textAlign:"center"},children:t[3]}):null,o>=5&&t[4]?e("span",{style:{textAlign:"center"},children:t[4]}):null]})})})}function O({numberOfVisibleColumns:t,label:o,columnsJSX:a=[]}){let s=I(t);return e("div",{className:"navigationRow noselect nooutline",style:{padding:"8px",border:"0px",borderBottom:"2px solid var(--canvastext)",backgroundColor:"var(--canvas)",color:"var(--canvastext)",width:"auto",maxWidth:"850px"},children:h("div",{style:{display:"grid",gridTemplateColumns:s,gridTemplateRows:"1fr",alignContent:"center",gap:"4px"},children:[e("span",{className:"navigationColumn1",children:e("p",{style:{display:"inline",margin:"0px"},children:h("span",{style:{marginLeft:"4px"},"data-test":"rowLabel",children:[o," "]})})}),a.map((c,n)=>t>n+1?e("span",{className:`navigationColumn${n+1}`,style:{textAlign:"left"},children:c},n):null)]})})}function b({numberOfVisibleColumns:t,entryData:o,headers:a}){let s=I(t);const c=[];return o.map((n,l)=>{m[a[l]]&&c.push(n)}),e("div",{className:"navigationRow noselect nooutline",style:{padding:"8px",border:"0px",borderBottom:"2px solid var(--canvastext)",backgroundColor:"var(--canvas)",color:"var(--canvastext)",width:"auto",maxWidth:"850px"},children:e("div",{style:{display:"grid",gridTemplateColumns:s,gridTemplateRows:"1fr",alignContent:"center",gap:"4px"},children:c.map((n,l)=>t>l?e("span",{className:`navigationColumn${l+1}`,style:{textAlign:l+1>1?"center":"left"},children:n},l):null)})})}function I(t){return`repeat(${t},minmax(150px, 1fr))`}export{Ae as default};