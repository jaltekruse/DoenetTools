import{e as s,z as T,A as w,s as y,r as c,ab as R,a as m,j as e,H as A,Y as B,F as I,C as D,_ as N,B as u,h as O}from"./index-2f97b159.js";import{I as j}from"./IncrementMenu-d4d9a36a.js";import{D as F}from"./DropdownMenu-cdc00aa3.js";const L=O.span`
  font-size: 15px;
  line-height: 1.1;
`;function q(){const o=s(T)[0],t=s(w(o));s(w(t.parentDoenetId));const k=s(y("courseId")),[r,b]=c.useState(t.behavior),[l,p]=c.useState(t.numberToSelect),[i,f]=c.useState(t.withReplacement);let{create:d,updateOrderBehavior:h,deleteItem:g}=R(k);c.useEffect(()=>{t.behavior!=r&&b(t.behavior),t.numberToSelect!=l&&p(t.numberToSelect),t.withReplacement!=i&&f(t.withReplacement)},[t.doenetId]);let S=m("h2",{"data-test":"infoPanelItemLabel",style:{margin:"16px 5px"},children:[e(A,{icon:B})," ",t.label]}),x=[["sequence","sequence"],["shuffle","shuffle"],["select","select"]],C=0;for(let[n,a]of Object.entries(x))if(a[0]===r){C=Number(n)+1;break}let v=null;return r=="select"&&(v=m(I,{children:[e(j,{min:0,label:"Number to select",vertical:!0,value:l,onChange:n=>{let a=Number(n);isNaN(n)&&(a=0),p(a),h({doenetId:o,behavior:r,numberToSelect:a,withReplacement:i})}}),e(D,{style:{marginRight:"5px"},checked:i,onClick:n=>{f(a=>!a),h({doenetId:o,behavior:r,numberToSelect:l,withReplacement:!i})}}),e(L,{children:"with replacement"}),e("br",{}),e("br",{})]})),m(I,{children:[S,e(F,{width:"menu",items:x,defaultIndex:C,onChange:({value:n})=>{b(n),h({doenetId:o,behavior:n,numberToSelect:l,withReplacement:i})}}),e("br",{}),v,m(N,{vertical:!0,children:[e(u,{width:"menu",onClick:()=>d({itemType:"page"}),value:"Add Page"}),e(u,{width:"menu",onClick:()=>d({itemType:"order"}),value:"Add Order"}),e(u,{width:"menu",onClick:()=>d({itemType:"collectionLink"}),value:"Add Collection Link",dataTest:"Add Collection Link"})]}),e("br",{}),e(u,{width:"menu",value:"Delete Order",alert:!0,onClick:n=>{n.preventDefault(),n.stopPropagation(),g({doenetId:o})}})]})}export{q as default};