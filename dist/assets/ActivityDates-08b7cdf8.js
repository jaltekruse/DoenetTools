import{e as l,s as A,q as h,j as e,F as r,a as t}from"./index-20ecac54.js";import{u as g}from"./SettingComponents-80343cd1.js";import{e as y}from"./RoleDropdown-1ccff793.js";import"./DateTime-a364d713.js";import"./moment-feb0c066.js";import"./IncrementMenu-4dee413d.js";import"./DropdownMenu-220da2b7.js";import"./RelatedItems-98a0cc3a.js";import"./ActionButtonGroup-2b6c3d59.js";import"./Textfield-354139fb.js";function _(){const n=l(A("doenetId")),i=l(h);return e(r,{children:e(D,{doenetId:n,courseId:i})})}function D({doenetId:n,courseId:i}){const{canModifyActivitySettings:v,canViewActivitySettings:p}=l(y(i)),{value:{numberOfAttemptsAllowed:f,timeLimit:o,assignedDate:m,dueDate:a}}=g(i,n);if(p==="1")return e(r,{});let s=f;s===null&&(s="unlimited");let d=null;o!==null&&(d=t("p",{children:["Time Limit: ",o," minutes"]}));let c=null;m!==null&&(c=t("p",{style:{content:"A"},children:["Assigned: ",m]}));let u=e("p",{children:"No Due Date"});return a!==null&&(u=t("p",{children:["Due: ",a]})),e(r,{children:t("div",{children:[c,u,d,t("p",{children:["Attempts Allowed: ",s]})]})})}export{D as AssignmentSettings,_ as default};
