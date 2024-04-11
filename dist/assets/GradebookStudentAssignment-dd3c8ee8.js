import{R as k,p as me,e as u,s as g,b as w,y as fe,f as he,u as be,r as y,o as ge,G as ve,j as n,a as l,F as ee,g as te,D as Se}from"./index-20ecac54.js";import{attemptData as Ae,studentData as we,assignmentData as ye,overviewData as Ie,Styles as Ne,Table as xe}from"./Gradebook-97e5b906.js";import{currentAttemptNumber as Le,activityStatusAtom as Pe}from"./AssignmentViewer-1ad95730.js";import{e as Me}from"./RoleDropdown-1ccff793.js";import"./DropdownMenu-220da2b7.js";function Re(){var _,G,j,H,U,$,B,Y,q,J;const ae=k(me);let v=u(g("courseId")),o=u(g("doenetId")),a=u(g("userId")),S=u(g("attemptNumber")),se=u(g("previousCrumb")),p=w(Ae(o)),A=w(we);const D=k(Le);let F=w(ye),{canViewAndModifyGrades:R}=u(Me(v));const I=k(fe);let oe=w(Ie),ie=he(),ne=be();const b=Number((_=F.contents[o])==null?void 0:_.totalPointsOrPercent),re=(G=F.contents[o])==null?void 0:G.label,N=(H=(j=p==null?void 0:p.contents)==null?void 0:j[a])==null?void 0:H.attempts;let[s,T]=y.useState(null),[d,le]=y.useState(null),r={},x=0;y.useEffect(()=>{if(N){let e=Object.keys(N).map(Number),t=Math.max(0,...e);S&&S<t&&(t=S),T(t),D(t)}else console.log(">>>>TODO TELL THEM YOU HAVENT TAKEN YET")},[N,T,D,S]),y.useEffect(()=>{I(R!=="1"?["GradeSettings"]:[])},[R,I]);const de=ge(({set:e})=>async({itemWeights:t,currentPage:i,activityAttemptNumberSetUp:m})=>{e(Pe,{itemWeights:t,currentPage:i,activityAttemptNumberSetUp:m})});let L=u(ve(v));if((L==null?void 0:L.canViewCourse)=="0")return n("h1",{children:"No Access to view this page."});if(!o||!a)return null;async function ce(e,t,i){const{data:{success:m,message:M,foundAttempt:f,attemptInfo:h,showSolutionInGradebook:pe,paginate:K}}=await te.get("/api/getGradebookAssignmentAttempts.php",{params:{courseId:e,doenetId:t,userId:i}});let C={},Q={},V="none";pe==="1"&&(V="button");for(let c of h){let X=c.attemptNumber,z=c.variantIndex,W=Q[c.cid];if(W)C[X]={cid:c.cid,variantIndex:z,doenetML:W,solutionDisplayMode:V,paginate:K};else{const{data:Z}=await te.get(`/media/${c.cid}.doenet`);Q[c.cid]=Z,C[X]={cid:c.cid,variantIndex:z,doenetML:Z,solutionDisplayMode:V,paginate:K}}}le(C)}if(d===null)return ce(v,o,a),null;if(p.state=="hasValue"&&a!==null&&a!==""&&(x=Math.max(0,...Object.keys(d).map(Number))),r.headers=[{Header:"Score",Footer:"Possible Points",accessor:"score",disableFilters:!0}],r.rows=[],A.state=="hasValue"&&a!==null&&a!==""){let e={},t={};if(e.score="Percentage",t.score="Score",p.state=="hasValue"){for(let f=1;f<=x;f++){let h=p.contents[a].attempts[f];e["a"+f]=h?Math.round(h*1e3)/10+"%":"",t["a"+f]=h?Math.round(h*100*b)/100:""}let i=(B=($=(U=oe.contents)==null?void 0:U[a])==null?void 0:$.assignments)==null?void 0:B[o],m=Math.round(b*i*100)/100,M=Math.round(i*1e3)/10+"%";t.total=m,e.total=M}r.rows.push(t),r.rows.push(e)}r.headers.push({Header:"Assignment Total",Footer:b,accessor:"total",disableFilters:!0});for(let e=1;e<=x;e++)r.headers.push({Header:"Attempt "+e,Footer:b,accessor:"a"+e,disableFilters:!0,Cell:t=>l("a",{onClick:()=>{ae({page:"course",tool:"gradebookStudentAssignment",view:"",params:{courseId:v,doenetId:o,userId:a,attemptNumber:e,previousCrumb:se}})},children:[" ",t.value," "]})});let E=null,P=null;if(s>0&&d[s]){let e=d[s].cid,t=d[s].variantIndex,i=d[s].solutionDisplayMode,m=d[s].paginate;E=n(Se,{cid:e,activityId:o,userId:a,forceDisable:!0,forceShowCorrectness:!0,forceShowSolution:i!=="none",forceUnsuppressCheckwork:!0,flags:{showCorrectness:!0,readOnly:!0,solutionDisplayMode:i,showFeedback:!0,showHints:!0,autoSubmit:!1,allowLoadState:!0,allowSaveState:!1,allowLocalState:!1,allowSaveSubmissions:!1,allowSaveEvents:!1},attemptNumber:s,idsIncludeActivityId:!1,requestedVariantIndex:t,updateActivityStatusCallback:de,paginate:m,location:ne,navigate:ie,apiURLs:{loadActivityState:"/api/loadActivityState.php",saveActivityState:"/api/saveActivityState.php",initAssignmentAttempt:"/api/initAssignmentAttempt.php",recordEvent:"/api/recordEvent.php",loadPageState:"/api/loadPageState.php",savePageState:"/api/savePageState.php",saveCreditForItem:"/api/saveCreditForItem.php",reportSolutionViewed:"/api/reportSolutionViewed.php"},linkSettings:{viewURL:"/course?tool=assignment",editURL:"/public?tool=editor",useQueryParameters:!0}},`activityViewer${o}`),P=l("div",{style:{paddingLeft:"8px"},children:["Viewing attempt number ",s]})}else P=l("div",{style:{paddingLeft:"8px"},children:["No content available for attempt number ",s]});let ue=`${(Y=A.contents[a])==null?void 0:Y.firstName} ${(q=A.contents[a])==null?void 0:q.lastName}`;const O=(J=A.contents[a])==null?void 0:J.section;return l(ee,{children:[n("div",{style:{marginLeft:"18px"},children:l("b",{children:["Gradebook for ",ue]})}),O&&n("div",{style:{marginLeft:"18px"},children:l("b",{children:["Section ",O]})}),n("div",{style:{paddingLeft:"18px"},children:n("b",{children:re})}),l("div",{style:{paddingLeft:"18px"},children:[b," Points Possible"]}),n(Ne,{children:n(xe,{columns:r.headers,data:r.rows})}),s>0?l(ee,{children:[P,E]}):n("div",{children:"Click an attempt's grade to see your attempt"})]})}export{Re as default};
