import{q as w,R as b,u as g,r as $,a as i,V as j}from"./index-DVZ7nus4.js";const u=w.svg`
    border: "2px solid red";
    margin: 2px;
    outline: none;
`,V=b.memo(function(t){let{name:l,id:s,SVs:e,actions:n,callAction:r}=g(t),a=$.createRef(e.fixed);a.current=e.fixed;let d=o=>{r({action:n.recordVisibilityChange,args:{isVisible:o}})};if($.useEffect(()=>()=>{r({action:n.recordVisibilityChange,args:{isVisible:!1}})},[]),e.hidden||!e.value)return null;let x=[...e.value].reverse(),h=[];for(let[o,c]of Object.entries(x)){let p=x.length-o-1;h.push(i.jsx(D,{rowNumber:p,orbitalText:c.orbitalText,boxes:c.boxes,name:s},`OrbitalRow${p}`))}return i.jsx(j,{partialVisibility:!0,onChange:d,children:i.jsx(i.Fragment,{children:h})})}),D=b.memo(function({rowNumber:t,orbitalText:l,boxes:s,name:e}){let n={width:"800px",height:"44px",display:"flex",backgroundColor:"#E2E2E2",marginTop:"2px",marginBottom:"2px",padding:"2px",border:"white solid 2px"},r=[];for(let[a,d]of Object.entries(s))r.push(i.jsx(U,{boxNum:a,rowNumber:t,arrows:d,name:e},`OrbitalBox${t}-${a}`));return i.jsxs("div",{id:`OrbitalRow${t}${e}`,tabIndex:"-1",style:n,children:[i.jsx(O,{orbitalText:l,rowNumber:t,name:e}),r]},`OrbitalRow${t}`)}),O=b.memo(function({rowNumber:t,orbitalText:l,name:s}){return i.jsx("div",{id:`OrbitalText${t}${s}`,style:{marginRight:"4px",height:"14px",width:"40px",backgroundColor:"white"},type:"text",size:"4",children:l})}),U=b.memo(function({boxNum:t,arrows:l="",rowNumber:s,name:e}){const n=i.jsx("polyline",{id:`firstUp${t}`,points:"6,14 12,6 18,14 12,6 12,35",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxfirstUp${t}`),r=i.jsx("polyline",{id:`firstDown${t}`,points:"6,26 12,34 18,26 12,34 12,5",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxfirstDown${t}`),a=i.jsx("polyline",{id:`secondUp${t}`,points:"22,14 28,6 34,14 28,6 28,35",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxsecondUp${t}`),d=i.jsx("polyline",{id:`secondDown${t}`,points:"22,26 28,34 34,26 28,34 28,5",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxsecondDown${t}`),x=i.jsx("polyline",{id:`thirdUp${t}`,points:"38,14 44,6 50,14 44,6 44,35",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxthirdUp${t}`),h=i.jsx("polyline",{id:`thirdDown${t}`,points:"38,26 44,34 50,26 44,34 44,5",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxthirdDown${t}`);let o=[],[c,p,y]=l.split("");c=="U"&&o.push(n),c=="D"&&o.push(r),p=="U"&&o.push(a),p=="D"&&o.push(d),y=="U"&&o.push(x),y=="D"&&o.push(h);let k=40;return y&&(k=56),i.jsxs(u,{id:`orbitalbox${e}${s}-${t}`,tabIndex:"-1",width:k,height:"40",children:[i.jsx("rect",{x:"0",y:"0",rx:"4",ry:"4",width:k,height:"40",style:{fill:"white",stroke:"black",strokeWidth:"2px",fillOpacity:"1",strokeOpacity:"1"}}),o]},`orbitalbox${t}`)});export{V as default};
