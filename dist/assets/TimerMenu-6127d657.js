import{l as n,m as d,r as t,k as D,N as S,j as h}from"./index-c4368a4c.js";import{l as w}from"./CourseToolHandler-3498edfe.js";import{currentAttemptNumber as x}from"./AssignmentViewer-774f13fa.js";import"./index-84aadfb6.js";import"./index-fcf36459.js";import"./index-47ca4f11.js";import"./index.esm-6e516fab.js";import"./setPrototypeOf-51e8cf87.js";/* empty css             */import"./ButtonGroup-4cccf778.js";import"./ActivityViewer-6c30394c.js";import"./activityUtils-8d9c077a.js";import"./visibility-sensor-b5fe0a55.js";import"./ActionButton-accdf179.js";import"./RoleDropdown-7d6d04bd.js";import"./DropdownMenu-83f445a8.js";function C(){const m=n(d("doenetId")),a=n(x),{timeLimit:o}=n(w(m));let[u,r]=t.useState("Unlimited");const[s,l]=t.useState(null),[c,f]=t.useState(new Date);let p=t.useRef(null);return t.useEffect(()=>{let i=new Date;D.get("/api/loadAttemptStartTime.php",{params:{doenetId:m,attemptNumber:a}}).then(({data:e})=>{e.attemptStart!==null&&(i=S(e.attemptStart));let T=new Date(i.getTime()+o*6e4*e.timeLimitMultiplier);l(T)}).catch(console.error)},[a,o,m,l]),t.useEffect(()=>{if(clearTimeout(p.current),o>0){let i=Math.floor((s-new Date)/6e4),e=(s-new Date)/6e4;e<=0?r("Time's Up"):(e<1?r("< 1 Min"):r(i===1?"1 Min":`${i} Mins`),p.current=setTimeout(()=>{e>=0&&f(new Date)},1e4))}},[c,s]),h("div",{style:{fontSize:"40px",textAlign:"center"},children:u})}export{C as default};