import{ao as f,bl as O,r as w,j as i,bn as u,F as U,h as R,a as $}from"./index-20ecac54.js";const W=R.svg`
  border: "2px solid red";
  margin: 2px;
  outline: none;
`,T=f.memo(function(t){let{name:s,id:r,SVs:e,actions:n,callAction:l}=O(t),a=w.createRef(e.fixed);a.current=e.fixed;let d=o=>{l({action:n.recordVisibilityChange,args:{isVisible:o}})};if(w.useEffect(()=>()=>{l({action:n.recordVisibilityChange,args:{isVisible:!1}})},[]),e.hidden||!e.value)return null;let h=[...e.value].reverse(),b=[];for(let[o,c]of Object.entries(h)){let p=h.length-o-1;b.push(i(C,{rowNumber:p,orbitalText:c.orbitalText,boxes:c.boxes,name:r},`OrbitalRow${p}`))}return i(u,{partialVisibility:!0,onChange:d,children:i(U,{children:b})})}),C=f.memo(function({rowNumber:t,orbitalText:s,boxes:r,name:e}){let n={width:"800px",height:"44px",display:"flex",backgroundColor:"#E2E2E2",marginTop:"2px",marginBottom:"2px",padding:"2px",border:"white solid 2px"},l=[];for(let[a,d]of Object.entries(r))l.push(i(v,{boxNum:a,rowNumber:t,arrows:d,name:e},`OrbitalBox${t}-${a}`));return $("div",{id:`OrbitalRow${t}${e}`,tabIndex:"-1",style:n,children:[i(V,{orbitalText:s,rowNumber:t,name:e}),l]},`OrbitalRow${t}`)}),V=f.memo(function({rowNumber:t,orbitalText:s,name:r}){return i("div",{id:`OrbitalText${t}${r}`,style:{marginRight:"4px",height:"14px",width:"40px",backgroundColor:"white"},type:"text",size:"4",children:s})}),v=f.memo(function({boxNum:t,arrows:s="",rowNumber:r,name:e}){const n=i("polyline",{id:`firstUp${t}`,points:"6,14 12,6 18,14 12,6 12,35",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxfirstUp${t}`),l=i("polyline",{id:`firstDown${t}`,points:"6,26 12,34 18,26 12,34 12,5",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxfirstDown${t}`),a=i("polyline",{id:`secondUp${t}`,points:"22,14 28,6 34,14 28,6 28,35",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxsecondUp${t}`),d=i("polyline",{id:`secondDown${t}`,points:"22,26 28,34 34,26 28,34 28,5",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxsecondDown${t}`),h=i("polyline",{id:`thirdUp${t}`,points:"38,14 44,6 50,14 44,6 44,35",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxthirdUp${t}`),b=i("polyline",{id:`thirdDown${t}`,points:"38,26 44,34 50,26 44,34 44,5",style:{fill:"none",stroke:"black",strokeWidth:"2"}},`orbitalboxthirdDown${t}`);let o=[],[c,p,y]=s.split("");c=="U"&&o.push(n),c=="D"&&o.push(l),p=="U"&&o.push(a),p=="D"&&o.push(d),y=="U"&&o.push(h),y=="D"&&o.push(b);let k=40;y&&(k=56);let g="black",D="2px";return $(W,{id:`orbitalbox${e}${r}-${t}`,tabIndex:"-1",width:k,height:"40",children:[i("rect",{x:"0",y:"0",rx:"4",ry:"4",width:k,height:"40",style:{fill:"white",stroke:g,strokeWidth:D,fillOpacity:"1",strokeOpacity:"1"}}),o]},`orbitalbox${t}`)});export{T as default};
