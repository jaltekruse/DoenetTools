import{l as n,m as S,T as A,G as C,a6 as u,r as f,y as v,a as p,F as g,j as s,z as y,B as F,i as L,W as B}from"./index-6c514841.js";import{A as w}from"./ActionButton-231b7630.js";import{e as k}from"./RoleDropdown-6c9fdb1d.js";import{T as D}from"./Textfield-6781d9ab.js";import"./DropdownMenu-e8dca27d.js";import"./setPrototypeOf-51e8cf87.js";function G(){const o=n(S("courseId")),a=n(A)[0],{canEditContent:I}=n(k(o)),{label:t,isAssigned:i}=n(C(a)),{renameItem:b,deleteItem:x}=u(o),[l,r]=f.useState(t),{updateAssignItem:T}=u(o);let c="Assign Section";i&&(c="Unassign Section"),f.useEffect(()=>{r(t)},[t]);const d=()=>{let e=l;l===""&&(e=t,t===""&&(e="Untitled"),r(e)),t!==e&&b(a,e)},h=v();let m=p("h2",{"data-test":"infoPanelItemLabel",style:{margin:"16px 5px"},children:[s(L,{icon:B})," ",t]});return I==="1"?p(g,{children:[m,s(w,{width:"menu",value:c,onClick:()=>{let e="Section Assigned.";i&&(e="Section Unassigned."),T({doenetId:a,isAssigned:!i,successCallback:()=>{h(e,y.INFO)}})}}),s(D,{label:"Label",vertical:!0,dataTest:"Label Section",width:"menu",value:l,onChange:e=>r(e.target.value),onKeyDown:e=>{e.keyCode===13&&d()},onBlur:d}),s("br",{}),s(F,{width:"menu",value:"Delete Section",alert:!0,onClick:e=>{e.preventDefault(),e.stopPropagation(),x({doenetId:a})}})]}):s(g,{children:m})}export{G as default};