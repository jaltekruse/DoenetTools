import{l as n,w as l,I as a,a as c,j as s}from"./index-9d63439d.js";import{f as d,a as u}from"./util-85d105b8.js";import"./util-38d8e238.js";function b(){const t=n(l);let o=n(a(t));if(!o||Object.keys(o).length==0)return null;let e=o.color,i=o.image,r="course";return i!="none"&&(r=d(i),i="url(./drive_pictures/"+i+")"),e!="none"&&(r=u(e),e="#"+e),c("div",{children:[s("div",{style:{position:"relative",width:"100%",height:"165px",overflow:"hidden"},children:s("img",{"aria-label":r,style:{position:"absolute",width:"100%",height:"100%",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:i,backgroundColor:e}})}),s("b",{children:"Assignment"})]})}export{b as default};