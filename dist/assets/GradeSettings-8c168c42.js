import{s as G,bd as N,be as z,r as c,j as l,i as J,l as b,m as O,y as P,a as f,k as v,bf as w,N as T,z as D,F as g,b0 as S,aA as X}from"./index-c4368a4c.js";import{D as Z}from"./DateTime-0ce2c16a.js";import{I as _}from"./IncrementMenu-924e4354.js";import"./moment-b331ac19.js";const M="var(--mainBlue)",W=G.button`
  height: 24px;
  border: 2px solid;
  border-color: ${s=>s.color};
  border-radius: 5px;
  color: var(--canvas);
  background-color: ${s=>s.color};
`;function q(s){const d=s.checked?N:z,n=s.checked?M:"var(--mainGray)",r=c.useRef(null);return l(W,{color:n,ref:r,onClick:A=>{s.onClick(A)},children:l(J,{icon:d})})}function V(){let s=b(O("courseId")),d=b(O("doenetId")),n=b(O("userId"));const[r,A]=c.useState(null),[h,k]=c.useState(null);let[m,I]=c.useState(null),[E,j]=c.useState(null),[x,B]=c.useState(!1);const u=P();c.useEffect(()=>{async function t(a,e,o){let i=await v.get("/api/loadGradebookAdjustmentSettingsInfo.php",{params:{doenetId:a,userId:e,courseId:o}}),R=Number(i.data.numberOfAttemptsAllowedAdjustment);A(R);let p="unlimited";i.data.baseAttemptsAllowed!="unlimited"&&(p=Number(i.data.baseAttemptsAllowed)),k(p)}r==null&&t(d,n,s)},[r,d,n,s]);const $=async(t,a)=>{try{let{data:e}=await v.get("/api/loadDueDateInfo.php",{params:{courseId:s,doenetId:t,userId:a}});if(B(!0),e.success){const o=e.dueDateInfo.dueDateOverride;let i=null;o&&(i=w(T(o))),I(i);const R=e.dueDateInfo.dueDate;let p="No Due Date";R&&(p=w(T(R))),j(p)}else u(`ERROR: ${e.message}`,D.ERROR)}catch(e){u(`ERROR: ${e}`,D.ERROR)}},C=async(t,a,e)=>{e===null?e="Cancel Due Date Override":e=X(new Date(e));try{let{data:o}=await v.get("/api/saveDueDateInfo.php",{params:{doenetId:t,userId:a,newDateString:e}});if(o.success)if(e==="Cancel Due Date Override")u("Cancelled Due Date Override!",D.SUCCESS);else{const i=w(new Date(e));u(`Set Due Date Override to ${i}`,D.SUCCESS)}else u(`ERROR: ${o.message}`,D.ERROR)}catch(o){u(`ERROR: ${o}`,D.ERROR)}};if(!d||!n)return null;x||$(d,n);let U=f(g,{children:["Due Date Override:",f("div",{style:{display:"flex"},onClick:t=>{t.preventDefault()},children:[l(q,{checked:m!==null,onClick:()=>{let t=null;if(m===null){let a=new Date;a.setDate(a.getDate()+7),t=S(a)}I(t),C(d,n,t)}}),l(Z,{value:m?new Date(m):null,onBlur:({valid:t,value:a})=>{if(t){try{a=a.toDate()}catch{}new Date(S(a)).getTime()!==new Date(m).getTime()&&(I(a),C(d,n,a))}else u("Invalid Due Date")}})]})]}),F=h+r,y=l("p",{children:"Unlimited Attempts"});return h!="unlimited"&&r!=null&&(y=f(g,{children:[l("div",{children:"Base Attempts Allowed: "}),l("div",{children:h}),l("div",{children:"Attempts Allowed Adjustment: "}),l(_,{min:-h,value:r,onChange:t=>{A(t),v.get("/api/updateGradebookAdjustment.php",{params:{doenetId:d,userId:n,courseId:s,attemptsAdjustment:t}}).then(({data:a})=>{})}}),l("div",{children:"Resulting Attempts Allowed: "}),l("div",{children:F})]})),f("div",{children:[l("div",{children:"Due Date: "}),f("div",{children:[E," "]}),U,l("br",{}),y]})}export{V as default};