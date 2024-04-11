import{h as r,l as c,j as o,a as i,F as p,_ as m,B as d,ab as x,e as h,R as v,p as g,H as b,b8 as f,aR as C}from"./index-2f97b159.js";import{d as w}from"./CourseToolHandler-92ee616d.js";import{E as D,b as A,D as P,c as k}from"./SettingComponents-d75c28bd.js";import{e as S}from"./RoleDropdown-7cbbcf3c.js";import{A as T}from"./ActionButtonGroup-809d1ca8.js";import"./index-47ca4f11.js";import"./index.esm-2e13c3d3.js";/* empty css             */import"./CollapseSection-bb6bdf07.js";import"./DateTime-4f6221ec.js";import"./moment-19492473.js";import"./DropdownMenu-cdc00aa3.js";import"./RelatedItems-3fb9d252.js";import"./Textfield-d208bb42.js";r.button`
  width: 20px;
  height: 20px;
  background: ${e=>`${e.color}`};
  cursor: pointer;
  margin: 3px;
  border: ${e=>e.selected?"1px solid var(--canvastext)":"none"};
  border-radius: 3px;
`;r.div`
  width: 100%;
  text-align: right;
`;r.div`
  border: 1px solid var(--canvastext);
  width: 50px;
  background: var(--canvas);
  cursor: pointer;
  padding: 0px 5px 0px 5px;
`;r.div`
  border: none;
  width: 20px;
  background: var(--canvas);
  cursor: pointer;
`;r.div`
  margin-right: 0;
  width: 86px;
`;r.ul`
  padding: 4px;
  list-style-type: none;
  /* border: 1px solid var(--canvastext); */
  border-radius: 3px;
  box-shadow: 3px 3px 7px var(--mainGray);
  background: var(--canvas);
  margin: 0 auto;
  text-align: left;
`;function q(){var a;const[e,n]=c(w);return e.length===1?o(_,{courseId:e[0].courseId},`CourseInfoPanel${e[0].courseId}`):e.length>1&&((a=e[0])!=null&&a.isOwner)?i(p,{children:[i("h2",{children:[" ",e.length," Courses Selected"]}),i(m,{vertical:!0,children:[o(d,{width:"menu",value:"Duplicate (Soon)",onClick:t=>{t.preventDefault(),t.stopPropagation(),console.log(">>>This will Duplicate courses"),n([])}}),o(d,{width:"menu",value:"Delete Courses (Soon)",alert:!0,onClick:t=>{t.preventDefault(),t.stopPropagation(),console.log(">>>This will Delete multiple courses"),n([])}})]})]}):null}const _=function({courseId:e}){const{label:n}=x(e),{isOwner:a,isAdmin:t,canViewUsers:y,dataAccessPermission:B,canModifyCourseSettings:s}=h(S(e)),u=v(g);return i(p,{children:[i("h2",{"data-test":"infoPanelItemLabel",children:[o(b,{icon:f})," ",n]}),o(T,{vertical:!0,children:o(C,{width:"menu",value:"Enter Course",dataTest:"Enter Course nav button",onClick:l=>{l.preventDefault(),l.stopPropagation(),u({page:"course",tool:"dashboard",view:"",params:{courseId:e}})}})}),s==="1"&&o(D,{dataTest:"Course Label Textfield",courseId:e}),s==="1"&&o(A,{courseId:e}),o("br",{}),a==="1"&&o(P,{courseId:e}),a==="1"&&o(k,{courseId:e})]})};export{q as default};