import{e as t,s as o,b as n,j as a}from"./index-f8d734dc.js";import{specificAttemptData as m}from"./Gradebook-914716b3.js";import"./RoleDropdown-2ab81a30.js";import"./DropdownMenu-cb552c6a.js";function f(p){let s=t(o("doenetId")),r=t(o("userId")),i=t(o("attemptNumber")),e=n(m({doenetId:s,userId:r,attemptNumber:i}));return console.log(e.state,e.contents),e.state,e.state==="hasValue"?a("p",{children:e.contents.doenetML}):a("p",{children:e.state})}export{f as default};
