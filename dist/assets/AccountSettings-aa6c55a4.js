import{R as f,p,r as c,b as x,c as v,d as w,j as e,a as i,F as d,B as u}from"./index-f8d734dc.js";function k(l){var a;const o=f(p),[r,g]=c.useState(null);let s=c.useRef(!1);const n=x(v);if(n.state==="loading")return null;if(n.state==="hasError")return console.error(n.contents),null;let h=(a=n==null?void 0:n.contents)==null?void 0:a.email;if(s.current||(s.current=!0,w().then(({cookieRemoved:m})=>{g(m)})),r==null)return null;let t=null;return r?t=i(d,{children:[e("h2",{children:"You are NOT signed in"}),e(u,{value:"Sign in",onClick:()=>{o({page:"signout",tool:"",view:""}),window.location.href="/signin"}})]}):t=i(d,{children:[e("h2",{children:"You are signed in"}),i("p",{children:["Email: ",h]}),e(u,{dataTest:"sign out button",value:"Sign out",onClick:()=>{o({page:"signout",tool:"",view:""})}})]}),e("div",{style:l.style,children:e("div",{style:{...l.style,border:"1px solid var(--mainGray)",borderRadius:"20px",margin:"auto",marginTop:"10%",padding:"10px",width:"50%"},children:e("div",{style:{display:"flex",flexDirection:"column",textAlign:"center",alignItems:"center",marginBottom:"20px"},children:t})})})}export{k as default};
