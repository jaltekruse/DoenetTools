import{e as n,q as p,s as g,ab as u,A as h,a as r,F as l,j as i}from"./index-20ecac54.js";import{f as x,a as b}from"./util-ffd26367.js";function y(){const s=n(p),d=n(g("doenetId"));let{color:o,image:e,label:c}=u(s);const a=n(h(d));let t="course";if(!e)return null;e!="none"&&(t=x(e),e="url(/drive_pictures/"+e+")"),o!="none"&&(t=b(o),o="#"+o);let m=r(l,{children:[i("div",{style:{marginBottom:"1px",marginTop:"5px"},children:"Activity"}),i("div",{style:{marginBottom:"5px",padding:"1px 5px"},children:a==null?void 0:a.label})]});return r(l,{children:[i("div",{style:{position:"relative",width:"100%",height:"165px",overflow:"hidden"},children:i("img",{"aria-label":t,style:{position:"absolute",width:"100%",height:"100%",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:e,backgroundColor:o}})}),i("div",{style:{marginBottom:"1px",marginTop:"5px"},children:"Course"}),i("div",{style:{marginBottom:"5px",padding:"1px 5px"},children:c}),m]})}export{y as default};
