import{R as t,l as u,e as x,s as h,j as a,a as i,B as v,au as y,g as E}from"./index-20ecac54.js";import{processAtom as f,enrolllearnerAtom as _,peopleTableDataAtom as g}from"./LoadPeople-c0c90689.js";import"./index-fe3decfe.js";import"./CollapseSection-2db7c754.js";function b(s){t(f);const[l,m]=u(_);t(g);const o=x(h("driveId")),n=(e,p)=>{if(e){let r={email:e,userId:y(),driveId:p};console.log(">>>>payload",r),E.post("/api/manualEnrollment.php",r).then(c=>{console.log(">>>>resp",c.data)})}};let d=i("div",{children:[i("label",{children:["Email",a("input",{required:!0,type:"email",name:"email",value:l,placeholder:"example@example.com",onChange:e=>m(e.currentTarget.value),onKeyDown:e=>{e.key==="Enter"&&n(l,o)}})]}),a(v,{value:"Enroll",onClick:()=>n(l,o)})]});return a("div",{style:s.style,children:d})}export{b as default};
