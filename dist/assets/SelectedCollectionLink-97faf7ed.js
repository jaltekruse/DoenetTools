import{l as r,T as L,G as C,m as k,r as y,a6 as x,y as M,a as m,j as t,i as S,$ as O,F as f,A,B as I,bj as B}from"./index-9d63439d.js";import"./ActionButton-056b08c3.js";import{T}from"./Textfield-381b1f5a.js";import{R as h}from"./RelatedItems-23ef0ca1.js";import{e as j}from"./RoleDropdown-2d4e4388.js";import"./DropdownMenu-421d3462.js";import"./setPrototypeOf-51e8cf87.js";function w({courseId:n,selectedDoenetId:e}){let o=r(B(n)),i=[];for(let[s,a]of o.entries())e==a.doenetId?i.push(t("option",{selected:!0,value:a.doenetId,children:a.label},`CollectionOptions${s}`)):i.push(t("option",{value:a.doenetId,children:a.label},`CollectionOptions${s}`));return t(f,{children:i})}function R({selected:n,i:e,pageId:o}){let i=r(C(o));return n?t("option",{selected:!0,value:o,children:i.label},`PagesInACollection${e}`):t("option",{value:o,children:i.label},`PagesInACollection${e}`)}function K(){const n=r(L)[0],e=r(C(n)),o=r(k("courseId")),{canEditContent:i}=r(j(o)),[s,a]=y.useState(e.label);let{deleteItem:F,updateCollectionLink:c,updateContentLinksToSources:v}=x(o);y.useEffect(()=>{s!==e.label&&a(e.label)},[n]);const b=()=>{let l=s;s===""&&(l=e.label,e.label===""&&(l="Untitled Collection Link"),a(l)),e.label!==l&&(console.log("Rename",n,l),c({courseId:o,doenetId:n,label:l,collectionDoenetId:e.collectionDoenetId,isManuallyFiltered:e.isManuallyFiltered,manuallyFilteredPages:e.manuallyFilteredPages}))};M();let P=m("h2",{"data-test":"infoPanelItemLabel",style:{margin:"16px 5px"},children:[t(S,{icon:O})," ",e.label]});if(i!=="1")return null;let D=t(w,{courseId:o,selectedDoenetId:e.collectionDoenetId}),g=null;if(e.collectionDoenetId){let l=[];for(let[p,d]of Object.entries(e.pagesByCollectionSource[e.collectionDoenetId])){let u=!1;e!=null&&e.manuallyFilteredPages&&e.manuallyFilteredPages.includes(d)&&(u=!0),l.push(t(R,{selected:u,i:p,pageId:d}))}g=m(f,{children:[m("div",{style:{display:"flex"},children:[t(A,{style:{marginRight:"5px"},checked:e.isManuallyFiltered,onClick:()=>{c({courseId:o,doenetId:n,collectionDoenetId:e.collectionDoenetId,isManuallyFiltered:!e.isManuallyFiltered,manuallyFilteredPages:e.manuallyFilteredPages})}}),"Filter Page Links"]}),t(h,{width:"menu",options:l,disabled:!e.isManuallyFiltered,onChange:p=>{let d=Array.from(p.target.selectedOptions,u=>u.value);c({courseId:o,doenetId:n,collectionDoenetId:e.collectionDoenetId,isManuallyFiltered:e.isManuallyFiltered,manuallyFilteredPages:d})},multiple:!0}),t("br",{})]})}return m(f,{children:[P,t(T,{label:"Label",vertical:!0,width:"menu",dataTest:"Label Collection",value:s,onChange:l=>a(l.target.value),onKeyDown:l=>{l.keyCode===13&&b()},onBlur:b}),t("br",{}),t("br",{}),t("div",{children:"collection"}),t(h,{width:"menu",options:D,onChange:l=>{c({courseId:o,doenetId:n,collectionDoenetId:l.target.value,isManuallyFiltered:!1,manuallyFilteredPages:[]})}}),t("br",{}),g,t("br",{}),t(I,{width:"menu",value:"Update Content to Sources",onClick:l=>{l.preventDefault(),l.stopPropagation(),v({collectionLinkObj:e,pages:e.pages})}}),t("br",{}),t(I,{width:"menu",value:"Delete Collection Link",alert:!0,onClick:l=>{l.preventDefault(),l.stopPropagation(),F({doenetId:n})}})]})}export{K as default};