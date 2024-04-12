import{ap as $,R as B,p as Z,e as I,s as Q,b as _,y as ee,r as D,G as te,j as t,a as o,F as J,v as se,o as ne,g as M,w as j,_ as ae,B as q}from"./index-f8d734dc.js";import{attemptData as re,overviewData as le,studentData as oe,assignmentData as K,Styles as ie,Table as de,attemptDataQuery as ce,studentDataQuery as ue,overviewDataQuery as me}from"./Gradebook-914716b3.js";import{D as z}from"./DropdownMenu-cb552c6a.js";import{e as pe}from"./RoleDropdown-2ab81a30.js";const L=$({key:"processGradesAtom",default:"Assignment Table"}),he=$({key:"headersGradesAtom",default:[]}),be=$({key:"entriesGradesAtom",default:[]}),fe=(u,r)=>{for(let i in u)if(u[i].firstName+" "+u[i].lastName==r)return i;return-1};function ge({doenetId:u,maxAttempts:r}){var A,V;let i=I(he),m=I(be);const p=se(),d=B(L);let P=_(K),[F,y]=D.useState(null),[w,R]=D.useState(1),[l,H]=D.useState(null),[v,c]=D.useState(1);const N=ne(({set:e,snapshot:n})=>async({doenetId:a,addToast:f})=>{const E=await n.getPromise(Q("courseId")),{data:{assignmentAttemptsData:W}}=await M.get("/api/loadGradebookAssignmentAttempts.php",{params:{courseId:E,doenetId:a}}),{data:{gradebookEnrollment:X}}=await M.get("/api/loadGradebookEnrollment.php",{params:{courseId:E}}),{data:{overview:Y}}=await M.get("/api/loadGradebookOverview.php",{params:{courseId:E}});e(ce(a),W),e(ue,X),e(me,Y),f("Updated scores!"),e(L,"Assignment Table")});if(P.state!=="hasValue")return null;const x=(V=(A=P.contents)==null?void 0:A[u])==null?void 0:V.totalPointsOrPercent;if(!i.includes("Email"))return p("Need a column header named 'Email' ",j.ERROR),d("Assignment Table"),null;let S=[],h=i.filter((e,n)=>{var f;let a=Number((f=m==null?void 0:m[0])==null?void 0:f[n]);return a==x&&S.push(n),a==x});if(h.length<1)return p(`Need a column with an assignment worth ${x} points in the second row`,j.ERROR),d("Assignment Table"),null;F||y(S[0]);let k=i.indexOf("Student"),U=i.indexOf("Email"),T=[],G=[],O=[];for(let e of m){let n=k===-1?null:e[k],a=e[U],f=e[F];a!==""&&(G.push(a),O.push(f),T.push(o("tr",{children:[" ",t("td",{children:n}),t("td",{children:a}),t("td",{children:f})]},a)))}let s=o("table",{children:[o("tr",{children:[t("th",{style:{width:"200px"},children:"Student"}),t("th",{style:{width:"200px"},children:"Email"}),t("th",{style:{width:"50px"},children:"Score"})]}),T]}),b=[];for(let[e,n]of Object.entries(h))b.push([e,n]);let g=[];l===null&&g.push([0,"Select Attempt Number"]);for(let e=1;e<=r;e++)g.push([e,`Attempt Number ${e}`]);g.push([Number(r)+1,"New Attempt Number"]);let C=null;return l&&(Number(r)+1===l?C=o("div",{children:["Use column ",t("b",{children:h[Number(w)-1]})," to insert a new ",o("b",{children:["Attempt Number ",l]}),"?"]}):C=o("div",{children:["Use column ",t("b",{children:h[Number(w)-1]})," to change ",o("b",{children:["Attempt Number ",l]})," scores?"]})),l&&(h[Number(w)-1],Number(r)+1),o(J,{children:[o("div",{children:[h.length," column",h.length>1?"s":null," match"," ",x," total points"," "]}),t("div",{children:t(z,{items:b,valueIndex:w,width:"400px",onChange:({value:e})=>{R(Number(e)+1),y(S[e])}})}),t("br",{}),t("div",{children:t(z,{items:g,valueIndex:v,width:"400px",onChange:({value:e})=>{c(e),H(e)}})}),t("br",{}),C,o(ae,{children:[t(q,{alert:!0,value:"Cancel",onClick:()=>{p("Override Cancelled"),d("Assignment Table")}}),l?t(q,{value:"Accept",onClick:()=>{let e={doenetId:u,attemptNumber:l,emails:G,scores:O};M.post("/api/saveOverrideGrades.php",e).catch(n=>{p(n,j.ERROR),d("Assignment Table")}).then(({data:n})=>{n.success?N({doenetId:u,addToast:p}):p(n.message,j.ERROR)})}}):null]}),t("br",{}),s]})}function xe(){var x,S,h,k,U,T,G,O;const u=B(Z);let r=I(Q("doenetId")),i=I(Q("courseId")),m=_(re(r)),p=_(le),d=_(oe),P=(S=d.contents[(x=Object.keys(d.contents))==null?void 0:x[0]])==null?void 0:S.noStudentHasASection,F=I(L);const y=B(ee);let{canViewAndModifyGrades:w}=I(pe(i)),R=_(K);D.useEffect(()=>{y(w==="1"?[]:["GradeUpload"])},[w,y]);let l=I(te(i));if((l==null?void 0:l.canViewCourse)=="0")return t("h1",{children:"No Access to view this page."});if(m.state!=="hasValue"||d.state!=="hasValue"||R.state!=="hasValue")return null;const H=R.contents[r].label,v=Number((h=R.contents[r])==null?void 0:h.totalPointsOrPercent);let c={},N=0;for(let s in m.contents)if((k=m.contents[s])!=null&&k.attempts){let b=Math.max(...Object.keys(m.contents[s].attempts).map(Number));b>N&&(N=b)}if(F==="Upload Choice Table")return t(ge,{doenetId:r,maxAttempts:N});c.headers=[],c.headers.push({Header:"Student",Footer:"Possible Points",accessor:"student"}),P||c.headers.push({Header:"Section",Footer:"",accessor:"section",disableFilters:!0});for(let s=1;s<=N;s++)c.headers.push({Header:"Attempt "+s,Footer:v,accessor:"a"+s,disableFilters:!0,Cell:b=>t("a",{onClick:()=>{let g=b.cell.row.cells[0].value.props.children,C=fe(d.contents,g);u({page:"course",tool:"gradebookStudentAssignment",view:"",params:{courseId:i,doenetId:r,userId:C,attemptNumber:s,previousCrumb:"assignment"}})},children:b.value})});c.headers.push({Header:"Assignment Total",Footer:v,accessor:"grade",disableFilters:!0}),c.rows=[];for(let s in d.contents){let b=d.contents[s].firstName,g=d.contents[s].lastName,C=d.contents[s].section,A={},V=b+" "+g;A.student=t("a",{onClick:()=>{u({page:"course",tool:"gradebookStudentAssignment",view:"",params:{courseId:i,doenetId:r,userId:s,previousCrumb:"assignment"}})},children:V}),P||(A.section=C);for(let a=1;a<=N;a++){let f=(U=m.contents[s])==null?void 0:U.attempts[a],E=Math.round(f*v*100)/100;A["a"+a]=f===void 0?"":E}let e=(O=(G=(T=p==null?void 0:p.contents)==null?void 0:T[s])==null?void 0:G.assignments)==null?void 0:O[r],n=Math.round(e*v*100)/100;A.grade=e?n:"0",c.rows.push(A)}return o(J,{children:[t("div",{style:{paddingLeft:"8px"},children:t("b",{children:H})}),o("div",{style:{paddingLeft:"8px"},children:[v," Points Possible"]}),t(ie,{children:t(de,{columns:c.headers,data:c.rows})})]})}export{xe as default,be as entriesGradesAtom,he as headersGradesAtom,L as processGradesAtom};
