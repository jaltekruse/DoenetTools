import{l as o,m as x,T as C,G as g,a6 as c,r as d,y as v,a as m,F as y,j as a,B as u,i as T,Z as B}from"./index-c4368a4c.js";import{e as L}from"./RoleDropdown-7d6d04bd.js";import{T as F}from"./Textfield-fbe2fc22.js";import{B as P}from"./ButtonGroup-4cccf778.js";import"./DropdownMenu-83f445a8.js";import"./setPrototypeOf-51e8cf87.js";function G(){const l=o(x("courseId")),n=o(C)[0],{canEditContent:f}=o(L(l)),{label:t}=o(g(n)),{renameItem:p}=c(l),[s,r]=d.useState(t);let{create:I,deleteItem:b}=c(l);d.useEffect(()=>{r(t)},[t]);const i=()=>{let e=s;s===""&&(e=t,t===""&&(e="Untitled"),r(e)),t!==e&&p(n,e)};v();let h=m("h2",{"data-test":"infoPanelItemLabel",style:{margin:"16px 5px"},children:[a(T,{icon:B})," ",t]});return f==="1"?m(y,{children:[h,a(F,{label:"Label",vertical:!0,width:"menu",value:s,onChange:e=>r(e.target.value),onKeyDown:e=>{e.keyCode===13&&i()},onBlur:i}),a("br",{}),a(P,{vertical:!0,children:a(u,{width:"menu",onClick:()=>I({itemType:"page"}),value:"Add Page",dataTest:"Add Page"})}),a("br",{}),a(u,{width:"menu",value:"Delete Collection",dataTest:"Delete Collection",alert:!0,onClick:e=>{e.preventDefault(),e.stopPropagation(),b({doenetId:n})}})]}):null}export{G as default};