import{e as n,q as v,s,ab as y,A as c,a,F as l,j as i}from"./index-20ecac54.js";import{f as b,a as u}from"./util-ffd26367.js";function I(){const m=n(v),g=n(s("doenetId")),x=n(s("pageId"));let{color:t,image:e,label:h}=y(m);const r=n(c(x)),o=n(c(g));let d="course";if(!r||!e)return null;e!="none"&&(d=b(e),e="url(/drive_pictures/"+e+")"),t!="none"&&(d=u(t),t="#"+t);let p=a(l,{children:[i("div",{style:{marginBottom:"1px",marginTop:"5px"},children:"Activity"}),i("div",{style:{marginBottom:"5px",padding:"1px 5px"},children:o.label}),i("div",{style:{marginBottom:"1px",marginTop:"5px"},children:"Page"}),i("div",{style:{marginBottom:"5px",padding:"1px 5px"},children:r.label})]});return o.isSinglePage&&(p=a(l,{children:[i("div",{style:{marginBottom:"1px",marginTop:"5px"},children:"Activity"}),i("div",{style:{marginBottom:"5px",padding:"1px 5px"},children:o.label})]})),o.type=="bank"&&(p=a(l,{children:[i("div",{style:{marginBottom:"1px",marginTop:"5px"},children:"Collection"}),i("div",{style:{marginBottom:"5px",padding:"1px 5px"},children:o.label}),i("div",{style:{marginBottom:"1px",marginTop:"5px"},children:"Page"}),i("div",{style:{marginBottom:"5px",padding:"1px 5px"},children:r.label})]})),a(l,{children:[i("div",{style:{position:"relative",width:"100%",height:"165px",overflow:"hidden"},children:i("img",{"aria-label":d,style:{position:"absolute",width:"100%",height:"100%",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:e,backgroundColor:t}})}),i("b",{children:"Editor"}),i("div",{style:{marginBottom:"1px",marginTop:"5px"},children:"Course"}),i("div",{style:{marginBottom:"5px",padding:"1px 5px"},children:h}),p]})}export{I as default};
