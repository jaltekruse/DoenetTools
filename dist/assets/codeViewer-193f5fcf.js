import{ao as V,bl as v,r as x,a as h,j as e,bA as y,b6 as m,bB as C,bC as z,bD as B,bE as W,bF as D,D as E,bn as I}from"./index-2f97b159.js";import{s as n}from"./css-14ccef8c.js";const F=V.memo(function(p){let{name:R,id:t,SVs:i,children:k,actions:r,callAction:s}=v(p,!1);const[o,u]=x.useState({index:1,numVariants:1,allPossibleVariants:["a"]});let w=a=>{s({action:r.recordVisibilityChange,args:{isVisible:a}})};if(x.useEffect(()=>()=>{s({action:r.recordVisibilityChange,args:{isVisible:!1}})},[]),i.hidden)return null;let l={...i.height};l.size=l.size-40;let d={...i.width};d.size=d.size-4;let c={width:n(i.width),maxWidth:"100%"};i.locationFromParent!=="bottom"&&(c.border="var(--mainBorder)",c.borderRadius="var(--mainBorderRadius)");let f=h("div",{style:{width:n(i.width),height:n(i.height),maxWidth:"100%",boxSizing:"border-box",paddingLeft:"10px"},children:[e("div",{style:{height:"28px"},children:h(y,{children:[e(m,{children:e(C,{hasArrow:!0,label:"Updates Viewer",children:e(z,{size:"sm",variant:"outline",id:t+"_updateButton",bg:"doenet.canvas",leftIcon:e(B,{}),rightIcon:i.codeChanged?e(W,{color:"doenet.mainBlue",fontSize:"18px"}):"",isDisabled:!i.codeChanged,onClick:()=>{s({action:r.updateComponents})},children:"Update"})})}),o.numVariants>1&&e(m,{h:"32px",width:"100%",children:e(D,{size:"sm",menuWidth:"140px",array:o.allPossibleVariants,syncIndex:o.index,onChange:a=>u(S=>{let g={...S};return g.index=a+1,g})})})]})}),e("div",{style:{overflowY:"scroll",width:n(d),maxWidth:"100%",height:n(l),paddingRight:"10px",marginTop:"10px",boxSizing:"border-box"},id:t+"_content",children:e(E,{doenetML:i.doenetML,flags:{showCorrectness:!0,solutionDisplayMode:"button",showFeedback:!0,showHints:!0,autoSubmit:!1,allowLoadState:!1,allowSaveState:!1,allowLocalState:!1,allowSaveSubmissions:!1,allowSaveEvents:!1},activityId:t,generatedVariantCallback:u,requestedVariantIndex:o.index,setErrorsAndWarningsCallback:a=>{s({action:r.setErrorsAndWarnings,args:{errorsAndWarnings:a}})}})})]}),b={};return i.locationFromParent!=="bottom"&&(b={margin:"12px 0"}),e(I,{partialVisibility:!0,onChange:w,children:h("div",{style:b,children:[e("a",{name:t}),e("div",{style:c,className:"codeViewerSurroundingBox",id:t,children:f})]})})});export{F as default};