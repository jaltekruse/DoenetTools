import{r as n,f as h,x as p,j as e,a as t,B as f,d as m}from"./index-2f97b159.js";function x(){const[i,s]=n.useState(!1),[o,l]=n.useState(""),c=h();return n.useEffect(()=>{async function r(){let{userInformationIsCompletelyRemoved:a,messageArray:d}=await m();s(a),l(d.map((g,u)=>e("p",{children:g},`error ${u}`)))}p().then(()=>{r()}).catch(a=>{r()})},[]),i?e("div",{children:t("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",justifyContent:"center",alignItems:"center",margin:"20"},children:[e("img",{style:{width:"250px",height:"250px"},src:"/Doenet_Logo_Frontpage.png",alt:"Chocolate glazed donut on a white cartoon cloud, sitting on a sky blue circle background"}),t("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e("h2",{children:"You are Signed Out!"}),e(f,{dataTest:"homepage button",value:"Homepage",onClick:()=>c("/")})]})]})}):o!=""?e("div",{children:t("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",justifyContent:"center",alignItems:"center",margin:"20"},children:[e("img",{style:{width:"250px",height:"250px"},src:"/Doenet_Logo_Frontpage.png",alt:"Chocolate glazed donut on a white cartoon cloud, sitting on a sky blue circle background"}),t("div",{children:[e("h2",{children:"FAILED SIGN OUT"}),e("p",{children:o}),e("p",{children:"Please manually remove your cookies."})]})]})}):e("div",{children:t("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",justifyContent:"center",alignItems:"center",margin:"20"},children:[e("img",{style:{width:"250px",height:"250px"},src:"/Doenet_Logo_Frontpage.png",alt:"Chocolate glazed donut on a white cartoon cloud, sitting on a sky blue circle background"}),e("div",{children:e("h2",{children:"Signing you out..."})})]})})}export{x as default};