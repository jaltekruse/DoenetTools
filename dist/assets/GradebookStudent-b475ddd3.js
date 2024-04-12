import{e as x,s as G,R as Q,p as W,b as D,G as X,j as a,M as Y,a as d,F as ee}from"./index-f8d734dc.js";import{assignmentData as te,studentData as se,overviewData as oe,gradeCategories as re,Styles as ne,Table as ae}from"./Gradebook-914716b3.js";import"./RoleDropdown-2ab81a30.js";import"./DropdownMenu-cb552c6a.js";function ue(){var T,V,L;let C=x(G("courseId")),o=x(G("userId"));const O=Q(W);let r=D(te),S=D(se),B=D(oe),M=x(X(C));if((M==null?void 0:M.canViewCourse)=="0")return a("h1",{children:"No Access to view this page."});let s={};s.headers=[{Header:"Assignment",Footer:"Course Total",accessor:"assignment",disableFilters:!0,disableSortBy:!0}],s.rows=[];let u=0,i=0;if(r.state=="hasValue"&&S.state==="hasValue"&&B.state==="hasValue"&&o!==null&&o!==""){let g=0,_=Object.entries(r.contents);_.sort((h,n)=>h[1].sortOrder<n[1].sortOrder?-1:1);for(let{category:h,scaleFactor:n=1,maximumNumber:p=1/0,maximumValue:m=1/0}of re){s.rows.push({assignment:h});let b=[],w=[],A=[],$=!0;for(let[e]of _){let t=r.contents[e].category;if((t==null?void 0:t.toLowerCase())!==h.toLowerCase())continue;let N="-",P=r.contents[e].totalPointsOrPercent*1,v=B.contents[o].assignments[e];if(v===null&&r.contents[e].isGloballyAssigned==="0")continue;let F=P*v;const k=r.contents[e].assignedDate;w.push(P),b.push(F),F=Math.round(F*100)/100;let E=Math.round(v*1e3)/10+"%";const J=Y(k);(k==null||v>0||J<new Date)&&(N=P,A.push(P),$=!1);let K=a("a",{onClick:()=>{O({page:"course",tool:"gradebookStudentAssignment",view:"",params:{courseId:C,userId:o,doenetId:e,previousCrumb:"student"}})},style:{paddingLeft:"15px"},children:r.contents[e].label});s.rows.push({assignment:K,possiblepoints:P,assignedpoints:N,score:F,percentage:E})}let U=b.length;b=b.sort((e,t)=>t-e).slice(0,p),A=A.sort((e,t)=>t-e).slice(0,p);let Z=b.reduce((e,t)=>e+t,0)*n,q=A.reduce((e,t)=>e+t,0)*n,f=Math.min(Z,m),l=Math.min(q,m);$&&(l="-"),w=w.sort((e,t)=>t-e).slice(0,p);let j=w.reduce((e,t)=>e+t,0)*n,c=Math.min(j,m),H="0%";c!==0&&(H=Math.round(f/c*1e3)/10+"%"),i+=f,g+=c,l!="-"&&(u+=l,l=Math.round(l*100)/100),f=Math.round(f*100)/100,c=Math.round(c*100)/100;let y=[];U>p&&y.push(`top ${p} scores`),n!==1&&y.push(`rescaling by ${n*100}%`),j>m&&y.push(`a cap of ${m} points`),s.rows.push({assignment:d("b",{children:[`Subtotal for ${h}`,y.length>0&&d("div",{style:{fontSize:".7em"},children:["Based on ",y.join(",")]})]}),score:f,possiblepoints:c,assignedpoints:l,percentage:H})}let z=Math.round(i/g*1e3)/10+"%";i=Math.round(i*100)/100,g=Math.round(g*100)/100,u=Math.round(u*100)/100,s.headers.push({Header:"Possible Points",Footer:g,accessor:"possiblepoints",disableFilters:!0,disableSortBy:!0},{Header:"Assigned Points",Footer:u,accessor:"assignedpoints",disableFilters:!0,disableSortBy:!0},{Header:"Score",Footer:i,accessor:"score",disableFilters:!0,disableSortBy:!0},{Header:"Percentage",Footer:z,accessor:"percentage",disableFilters:!0,disableSortBy:!0})}let R=`${(T=S.contents[o])==null?void 0:T.firstName} ${(V=S.contents[o])==null?void 0:V.lastName}`;const I=(L=S.contents[o])==null?void 0:L.section;return d(ee,{children:[a("div",{style:{marginLeft:"18px"},children:d("b",{children:["Gradebook for ",R]})}),I&&a("div",{style:{marginLeft:"18px"},children:d("b",{children:["Section ",I]})}),a("div",{style:{marginLeft:"18px"},children:d("b",{children:["Current Score ",i,"/",u]})}),a(ne,{children:a(ae,{disableSortBy:!0,columns:s.headers,data:s.rows})})]})}export{ue as default};
