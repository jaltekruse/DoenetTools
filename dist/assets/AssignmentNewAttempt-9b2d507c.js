import{l as m,m as A,g as s,j as u,B as c,k as f}from"./index-7c464f87.js";import{l as b}from"./CourseToolHandler-4b8f702c.js";import{numberOfAttemptsAllowedAdjustmentAtom as w,currentAttemptNumber as N,cidChangedAtom as g}from"./AssignmentViewer-bed19598.js";import"./index-403b1812.js";import"./index-fcf36459.js";import"./index-47ca4f11.js";import"./index.esm-3c3382f8.js";import"./setPrototypeOf-51e8cf87.js";/* empty css             */import"./ButtonGroup-bc0b5002.js";import"./ActivityViewer-2930598e.js";import"./activityUtils-1ee2a5a3.js";import"./visibility-sensor-82f19459.js";import"./ActionButton-0f7ae8d8.js";import"./RoleDropdown-84cc0015.js";import"./DropdownMenu-ffa4b021.js";function q(){const o=m(A("doenetId")),[i,p]=s(w),[l,a]=s(N),{numberOfAttemptsAllowed:n}=m(b(o)),d=m(g);let e=null;n!==null&&(e=Number(n)+Number(i));const r=e===null||l<e;return u(c,{value:"New Attempt",dataTest:"New Attempt",disabled:!r,onClick:async function(){if(r){if(d){let t=await f.post("/api/incrementAttemptsAllowedIfCidChanged.php",{doenetId:o});t.data.cidChanged&&p(Number(t.data.newNumberOfAttemptsAllowedAdjustment))}a(t=>t+1)}}})}export{q as default};