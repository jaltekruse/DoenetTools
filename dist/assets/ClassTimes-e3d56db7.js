import{l as g,m as j,v as w,k as f,a as c,F as y,j as a,B as C,i as D,bm as _,a8 as k}from"./index-6c514841.js";import{c as m}from"./Next7Days-f44b4db4.js";import{D as B}from"./DropdownMenu-e8dca27d.js";import{D as v}from"./DateTime-46c194fc.js";import"./CourseToolHandler-4958365d.js";import"./index-8f014c97.js";import"./index-fcf36459.js";import"./index-47ca4f11.js";import"./index.esm-4951d3ab.js";import"./setPrototypeOf-51e8cf87.js";/* empty css             */import"./ButtonGroup-411c94ee.js";import"./RoleDropdown-6c9fdb1d.js";import"./moment-fe3bb075.js";function E(){const A=g(m),u=g(j("courseId")),P=w(({set:t,snapshot:e})=>async n=>{let r=[...await e.getPromise(m)];r.push({dotwIndex:1,startTime:"09:00",endTime:"10:00"}),t(m,r);let d=[],s=[],i=[];for(let l of r)d.push(l.dotwIndex),s.push(l.startTime),i.push(l.endTime);await f.post("/api/updateClassTimes.php",{courseId:n,dotwIndexes:d,startTimes:s,endTimes:i})}),T=w(({set:t,snapshot:e})=>async({index:n,nextClassTime:o,courseId:r})=>{let s=[...await e.getPromise(m)];s[n]={...o},t(m,s);let i=[],l=[],p=[];for(let x of s)i.push(x.dotwIndex),l.push(x.startTime),p.push(x.endTime);await f.post("/api/updateClassTimes.php",{courseId:r,dotwIndexes:i,startTimes:l,endTimes:p})}),S=w(({set:t,snapshot:e})=>async({index:n,courseId:o})=>{let d=[...await e.getPromise(m)];d.splice(n,1),t(m,d);let s=[],i=[],l=[];for(let p of d)s.push(p.dotwIndex),i.push(p.startTime),l.push(p.endTime);await f.post("/api/updateClassTimes.php",{courseId:o,dotwIndexes:s,startTimes:i,endTimes:l})}),b=[[1,"Monday"],[2,"Tuesday"],[3,"Wednesday"],[4,"Thursday"],[5,"Friday"],[6,"Saturday"],[0,"Sunday"]];let h=[];for(let[t,e]of Object.entries(A)){const n=new Date;n.setHours(e.startTime.split(":")[0]),n.setMinutes(e.startTime.split(":")[1]);const o=new Date;o.setHours(e.endTime.split(":")[0]),o.setMinutes(e.endTime.split(":")[1]);let r=e.dotwIndex;e.dotwIndex==0&&(r=7),h.push(c(y,{children:[c("tr",{children:[a("td",{style:{width:"190px"},children:a(B,{dataTest:`DOTW Dropdown ${t}`,width:"180px",items:b,valueIndex:r,onChange:({value:d})=>{let s={...e};s.dotwIndex=d,T({courseId:u,index:t,nextClassTime:s})}})}),a(C,{dataTest:`Classtime Delete Button ${t}`,icon:a(D,{icon:k}),alert:!0,onClick:()=>{S({index:t,courseId:u})}})]}),c("tr",{style:{width:"190px",display:"flex",alignItems:"center"},children:[a("td",{children:a(v,{dataTest:`Classtime start time ${t}`,datePicker:!1,width:"74px",value:n,onBlur:(d,s)=>{let i={...e};i.startTime=new Date(d.value._d).toLocaleString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit"}),T({courseId:u,index:t,nextClassTime:i})}})}),a("td",{style:{marginLeft:"6px",marginRight:"6px"},children:"-"}),a("td",{style:{["--menuPanelMargin"]:"-62px"},children:a(v,{dataTest:`Classtime end time ${t}`,datePicker:!1,width:"74px",value:o,onBlur:(d,s)=>{let i={...e};i.endTime=new Date(d.value._d).toLocaleString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit"}),T({courseId:u,index:t,nextClassTime:i})}})})]}),a("div",{style:{margin:"10px"}})]}))}let I=a("div",{children:"No times set."});return h.length>0&&(I=a("table",{style:{width:"230px",margins:"5px"},children:h})),c(y,{children:[I,a(C,{dataTest:"Add Classtime",icon:a(D,{icon:_}),style:{margin:"auto"},onClick:()=>P(u)})]})}export{E as default};