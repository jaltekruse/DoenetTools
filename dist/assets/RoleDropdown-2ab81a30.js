import{ar as x,as as R,aC as p,G as y,e as t,s as C,aD as D,j as _}from"./index-f8d734dc.js";import{D as v}from"./DropdownMenu-cb552c6a.js";const B=x({key:"effectiveRoleId",default:null}),j=R({key:"effectivePermissions",get:e=>({get:s})=>{const n=s(B(e));return s(n!==null?p({courseId:e,roleId:n}):y(e))}});function k({label:e,width:s="menu",maxMenuHeight:n="200px",defaultRoleId:a,valueRoleId:i,onChange:d=()=>{},vertical:l,disabled:u}){const c=t(C("courseId"))??"",r=t(D(c)),f=i?r.findIndex(({roleId:o})=>o===i):null,m=a?r.findIndex(({roleId:o})=>o===a):null;return _(v,{width:s,maxMenuHeight:n,items:r.map(({roleLabel:o,roleId:I})=>[I,o]),label:e,defaultIndex:m+1,valueIndex:f+1,onChange:d,vertical:l,disabled:u,dataTest:"RoleDropDown"})}export{k as R,B as a,j as e};
