import{e as R,s as F,aa as J,ab as X,r as w,l as G,a as h,j as e,_ as q,B as P,C as K,h as B}from"./index-2f97b159.js";import{A as L}from"./SettingComponents-d75c28bd.js";import{M as Q}from"./index.esm-2e13c3d3.js";import{R as M}from"./RoleDropdown-7cbbcf3c.js";import{processAtom as Y,headersAtom as Z,entriesAtom as C,csvPeopleProcess as W,validHeaders as I}from"./LoadPeople-c8ad5ea3.js";import"./CourseToolHandler-92ee616d.js";import"./index-47ca4f11.js";/* empty css             */import"./CollapseSection-bb6bdf07.js";import"./DateTime-4f6221ec.js";import"./moment-19492473.js";import"./DropdownMenu-cdc00aa3.js";import"./RelatedItems-3fb9d252.js";import"./Textfield-d208bb42.js";import"./index-886a6e7d.js";const N=B.div`
  margin: 0 5px 10px 5px;
  display: ${t=>t.flex?"flex":"block"};
  align-items: ${t=>t.flex&&"center"};
  gap: 4px;
`,V=B.span`
  font-size: 15px;
  line-height: 1.1;
`;function ve(){const t=R(F("courseId")),{recoilUnWithdraw:o,recoilWithdraw:a,recoilMergeData:s,value:c}=R(J(t)),{modifyUserRole:n,defaultRoleId:l}=X(t);let[d,p]=w.useState(!1);const[x,$]=w.useState(1),[u,k]=G(Y),g=R(Z),D=R(C),[E,m]=w.useState(l);if(!t)return null;const _=(r,i)=>{r.preventDefault(),o(i)},H=(r,i)=>{r.preventDefault(),a(i)};return u===W.PREVIEW?h("div",{style:{padding:"8px"},children:[e("h2",{children:"Preview CSV People"}),e(M,{label:"Assigned Role",valueRoleId:E??l,onChange:({value:r})=>{m(r)},maxMenuHeight:"200px",vertical:!0}),e(f,{columnLabels:g.filter(r=>I[r]??!1),numberOfVisibleColumns:x,setNumberOfVisibleColumns:$}),D.map((r,i)=>e(b,{numberOfVisibleColumns:x,entryData:r,headers:g},`${r[0]} ${i}`)),e("br",{}),h(q,{children:[e(P,{onClick:()=>{k(W.IDLE)},value:"Cancel","data-test":"Cancel"}),e(P,{onClick:()=>{const r={roleId:E??l,mergeHeads:g,mergeExternalId:[],mergeFirstName:[],mergeLastName:[],mergeSection:[],mergeEmail:[]};for(const i of D)i.map((A,v)=>{I[g[v]]&&r[`merge${g[v]}`].push(A)});s(r,()=>{k(W.IDLE)})},value:"Merge","data-test":"Merge",alert:!0})]})]}):h("div",{style:{padding:"8px"},children:[e("h2",{children:"Add Person"}),e(L,{courseId:t}),e("h2",{children:"Current People"}),c.length>0?h(N,{flex:!0,children:[e(K,{onClick:()=>{p(!d)},dataTest:"Show Withdrawn",checked:d}),e(V,{children:"Show Withdrawn"})]}):null,e(f,{columnLabels:["Name","Email","Role","Date Added"],numberOfVisibleColumns:x,setNumberOfVisibleColumns:$}),e("div",{"data-test":"People Table",children:c.map(({email:r,firstName:i,lastName:A,screenName:v,dateEnrolled:j,roleId:U,withdrew:y})=>{const z=[r,e(M,{valueRoleId:U,onChange:({value:S})=>{n(r,S,()=>{})},width:"150px"},"role"),j,e(P,{value:y==="0"?"Withdraw":"Enroll","data-test":y==="0"?`Withdraw ${r}`:`Enroll ${r}`,onClick:S=>{y==="0"?H(S,r):_(S,r)}},"withdraw")];return!d&&y==="1"?null:e(O,{label:`${i} ${A} (${v})`,numberOfVisibleColumns:x,columnsJSX:z},r)})}),c.length===0?e("p",{children:"No Students are currently enrolled in the course"}):null]})}function f({columnLabels:t,numberOfVisibleColumns:o,setNumberOfVisibleColumns:a}){const s=w.useCallback(n=>{const l=t.length+1,d=[375,500,650,800];if(n>=d[3]&&o!==5){const p=Math.min(l,5);a==null||a(p)}else if(n<d[3]&&n>=d[2]&&o!==4){const p=Math.min(l,4);a==null||a(p)}else if(n<d[2]&&n>=d[1]&&o!==3){const p=Math.min(l,3);a==null||a(p)}else if(n<d[1]&&n>=d[0]&&o!==2){const p=Math.min(l,2);a==null||a(p)}else n<d[0]&&o!==1?a==null||a(1):o>l&&(a==null||a(l))},[t,o,a]);let c=T(o);return e(Q,{bounds:!0,onResize:n=>{const l=n.bounds.width;s(l)},children:({measureRef:n})=>e("div",{ref:n,className:"noselect nooutline",style:{padding:"8px",border:"0px",borderBottom:"1px solid var(--canvastext)",maxWidth:"850px",margin:"0px"},children:h("div",{style:{display:"grid",gridTemplateColumns:c,gridTemplateRows:"1fr",alignContent:"center",gap:"4px"},children:[e("span",{children:t[0]}),o>=2&&t[1]?e("span",{style:{textAlign:"center"},children:t[1]}):null,o>=3&&t[2]?e("span",{style:{textAlign:"center"},children:t[2]}):null,o>=4&&t[3]?e("span",{style:{textAlign:"center"},children:t[3]}):null,o>=5&&t[4]?e("span",{style:{textAlign:"center"},children:t[4]}):null]})})})}function O({numberOfVisibleColumns:t,label:o,columnsJSX:a=[]}){let s=T(t);return e("div",{className:"navigationRow noselect nooutline",style:{padding:"8px",border:"0px",borderBottom:"2px solid var(--canvastext)",backgroundColor:"var(--canvas)",color:"var(--canvastext)",width:"auto",maxWidth:"850px"},children:h("div",{style:{display:"grid",gridTemplateColumns:s,gridTemplateRows:"1fr",alignContent:"center",gap:"4px"},children:[e("span",{className:"navigationColumn1",children:e("p",{style:{display:"inline",margin:"0px"},children:h("span",{style:{marginLeft:"4px"},"data-test":"rowLabel",children:[o," "]})})}),a.map((c,n)=>t>n+1?e("span",{className:`navigationColumn${n+1}`,style:{textAlign:"left"},children:c},n):null)]})})}function b({numberOfVisibleColumns:t,entryData:o,headers:a}){let s=T(t);const c=[];return o.map((n,l)=>{I[a[l]]&&c.push(n)}),e("div",{className:"navigationRow noselect nooutline",style:{padding:"8px",border:"0px",borderBottom:"2px solid var(--canvastext)",backgroundColor:"var(--canvas)",color:"var(--canvastext)",width:"auto",maxWidth:"850px"},children:e("div",{style:{display:"grid",gridTemplateColumns:s,gridTemplateRows:"1fr",alignContent:"center",gap:"4px"},children:c.map((n,l)=>t>l?e("span",{className:`navigationColumn${l+1}`,style:{textAlign:l+1>1?"center":"left"},children:n},l):null)})})}function T(t){return`repeat(${t},minmax(150px, 1fr))`}export{ve as default};