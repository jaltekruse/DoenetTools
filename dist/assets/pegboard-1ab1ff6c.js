import{aw as W,bn as q,r as v,bo as f}from"./index-6c514841.js";import{BoardContext as H,BASE_LAYER_OFFSET as j}from"./graph-e364bc1a.js";import"./css-14ccef8c.js";import"./visibility-sensor-e86706d4.js";const ue=W.memo(function U(D){var A;let{name:I,id:K,SVs:u,actions:Q,sourceOfUpdate:Z,callAction:$}=q(D);U.ignoreActionsWithoutCore=!0;const l=v.useContext(H);let s=v.useRef(null),N=v.useRef(null),x=v.useRef(null),h=v.useRef(null),p=v.useRef(null),y=v.useRef(null);x.current=u.dx,h.current=u.dy,p.current=u.xoffset,y.current=u.yoffset;let F=v.useRef({visible:!u.hidden,fixed:!0,withlabel:!1,layer:10*u.layer+j,fillColor:"darkgray",strokeColor:"darkgray",size:.1,face:"circle",highlight:!1,showinfobox:!1});F.current.visible=!u.hidden,F.current.layer=10*u.layer+j,v.useEffect(()=>()=>{P()},[]);function O(){let[o,b,g,M]=l.getBoundingBox(),R=(o-p.current)/x.current,w=(g-p.current)/x.current,C=(M-y.current)/h.current,B=(b-y.current)/h.current,d=f.math.round(Math.min(R,w)+1),m=f.math.round(Math.max(R,w)-1),i=f.math.round(Math.min(C,B)+1),a=f.math.round(Math.max(C,B)-1);if(N.current=[d,m,i,a],Number.isFinite(d)&&Number.isFinite(m)&&Number.isFinite(i)&&Number.isFinite(a)){let t=[];for(let r=i;r<=a;r++){let c=r*u.dy+u.yoffset,e=[];for(let n=d;n<=m;n++)e.push(l.create("point",[n*u.dx+u.xoffset,c],F.current));t.push(e)}s.current=t}l.on("boundingbox",()=>{let[t,r,c,e]=l.getBoundingBox(),n=(t-p.current)/x.current,E=(c-p.current)/x.current,Y=(e-y.current)/h.current,S=(r-y.current)/h.current,G=f.math.round(Math.min(n,E)+1),J=f.math.round(Math.max(n,E)-1),_=f.math.round(Math.min(Y,S)+1),k=f.math.round(Math.max(Y,S)-1),[z,L,T,V]=N.current;(G!==z||J!==L||_!==T||k!==V)&&X(G,J,_,k)})}function P(){if(s.current!==null)for(let o of s.current)for(let b of o)l.removeObject(b);s.current=null}function X(o,b,g,M){if(s.current===null)return O();if(!Number.isFinite(o)||!Number.isFinite(b)||!Number.isFinite(g)||!Number.isFinite(M))return P();let[R,w,C,B]=N.current,d=M-g+1,m=B-C+1,i=b-o+1,a=w-R+1;for(let t=0;t<Math.min(d,m);t++){let r=s.current[t],c=(t+g)*h.current+y.current;for(let e=0;e<Math.min(i,a);e++){let n=(e+o)*x.current+p.current;r[e].coords.setCoordinates(JXG.COORDS_BY_USER,[n,c]),r[e].needsUpdate=!0,r[e].update()}if(a>i)for(let e=i;e<a;e++){let n=r.pop();l.removeObject(n)}else if(a<i)for(let e=a;e<i;e++){let n=(e+o)*x.current+p.current;r.push(l.create("point",[n,c],F.current))}}if(m>d)for(let t=d;t<m;t++){let r=s.current.pop();for(let c=0;c<a;c++){let e=r.pop();l.removeObject(e)}}else if(m<d)for(let t=m;t<d;t++){let r=[],c=(t+g)*h.current+y.current;for(let e=0;e<i;e++){let n=(e+o)*x.current+p.current;r.push(l.create("point",[n,c],F.current))}s.current.push(r)}N.current=[o,b,g,M],l.updateRenderer()}if(l)if(s.current===null)O();else{let[o,b,g,M]=l.getBoundingBox(),R=(o-p.current)/x.current,w=(g-p.current)/x.current,C=(M-y.current)/h.current,B=(b-y.current)/h.current,d=f.math.round(Math.min(R,w)+1),m=f.math.round(Math.max(R,w)-1),i=f.math.round(Math.min(C,B)+1),a=f.math.round(Math.max(C,B)-1);X(d,m,i,a);let t=(A=s.current[0])==null?void 0:A[0];if(t){let r=10*u.layer+j;if(t.visProp.layer!==r)for(let e of s.current)for(let n of e)n.setAttribute({layer:r})}}return null});export{ue as default};