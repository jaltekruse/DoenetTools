import{r as o,j as e,B as r,S as s,L as a,H as c}from"./index-CrSqH__w.js";const d=c.video`
  width: 1200px;
  /* margin-left: 20vw; */
  //transform: scale(1.3);
  object-fit: cover;
  object-position: 25% 25%;
  @media (max-width: 780px) {
    height: 500px;
  }
  @media (max-width: 450px) {
    height: 150px;
  }
`;function p(){const t=o.useRef(null),i=()=>{t&&t.current&&t.current.play().catch(n=>{console.error("Error attempting to play",n)})};return o.useEffect(()=>{i()},[]),e.jsxs(r,{overflow:"hidden",width:["350px","30vw","30vw","30vw"],children:[e.jsx(r,{marginLeft:["-70px","-300px","-300px","-300px"],overflow:"hidden",width:["500px","100vw","100vw","100vw"],children:e.jsx(d,{fluid:"false",loop:!0,muted:!0,playsInline:!0,alt:"Demonstration video on making DoenetML content",ref:t,controls:!0,zIndex:"1",children:e.jsx("source",{src:"/planet_orbits_smooth.webm",type:"video/webm"})})}),e.jsx(s,{above:"sm",children:e.jsx(a,{color:"white",href:"https://www.doenet.org/activityViewer/_IDTeopxcrVV2EzMEA4Cg9",children:"How to Make this Animation"})})]})}export{p as default};
