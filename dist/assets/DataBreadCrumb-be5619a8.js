import{e as o,s as e,j as a,r as c}from"./index-20ecac54.js";import{B as d}from"./BreadCrumb-be544eb8.js";import{u as i,a as n,d as b}from"./breadcrumbUtil-5b61c826.js";import"./RoleDropdown-1ccff793.js";import"./DropdownMenu-220da2b7.js";import"./Gradebook-97e5b906.js";function B(){const r=o(e("courseId"));let s=o(e("sectionId"));s==""&&(s=r);const t=i(),m=n(r),u=b(r,s);return a(c.Suspense,{fallback:a("div",{children:"loading Breadcrumbs..."}),children:a(d,{crumbs:[t,m,...u]})})}export{B as default};
