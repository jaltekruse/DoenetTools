import{r as s,R as p,u as h,a as r,V as y}from"./index-DVZ7nus4.js";const C=s.createContext(),g=p.memo(function(i){let{name:l,id:t,SVs:e,actions:u,callAction:c}=h(i),f=n=>{c({action:u.recordVisibilityChange,args:{isVisible:n}})};return s.useEffect(()=>()=>{c({action:u.recordVisibilityChange,args:{isVisible:!1}})},[]),s.useEffect(()=>{if(e.dataFrame!==null){let n;e.colInd!==null?n=[e.colInd]:n=e.dataFrame.columnTypes.map((a,x)=>a==="number"?x:null).filter(a=>a!==null);let m=[];for(let a of n)e.type==="box"?m.push({y:d(e.dataFrame.data,a),type:"box",name:e.dataFrame.columnNames[a]}):m.push({x:d(e.dataFrame.data,a),type:"histogram",name:e.dataFrame.columnNames[a]})}},[]),r.jsxs(r.Fragment,{children:[r.jsx("a",{name:t}),r.jsx(y,{partialVisibility:!0,onChange:f,children:r.jsx("div",{id:t})})]})});function d(o,i){let l=[];for(let t of o)t[i]!==null&&l.push(t[i]);return l}export{C as BoardContext,g as default};
