import{aX as i,aW as a}from"./index-2f97b159.js";function s(e){const r=/\d/gm,n=[...e.matchAll(r)];var o=n[0][0];n[1]!==void 0&&(o+=n[1][0]);const t=parseInt(o);return i[t-1].Name}function m(e){for(let r=0;r<a.length;r++)if(a[r].Color==e)return a[r].Name;return"some color"}export{m as a,s as f};