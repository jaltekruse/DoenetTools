import{aa as R,ab as p,R as N,u as B,r as g,a as d,V as G,ac as $}from"./index-CrSqH__w.js";function q(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},E(e,t)}function k(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,E(e,t)}var j=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,s){return i[0]===n?(r=s,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var a=s[i];n.call(r,a[1],a[0])}},t}()}(),x=typeof window<"u"&&typeof document<"u"&&window.document===document,y=function(){return typeof R<"u"&&R.Math===Math?R:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),K=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(y):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),U=2;function Y(e,t){var n=!1,r=!1,i=0;function s(){n&&(n=!1,e()),r&&o()}function a(){K(s)}function o(){var c=Date.now();if(n){if(c-i<U)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=c}return o}var J=20,Q=["top","right","bottom","left","width","height","size","weight"],X=typeof MutationObserver<"u",Z=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Y(this.refresh.bind(this),J)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!x||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),X?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!x||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=Q.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),D=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},_=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||y},S=O(0,0,0,0);function w(e){return parseFloat(e)||0}function T(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var s=e["border-"+i+"-width"];return r+w(s)},0)}function ee(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var s=i[r],a=e["padding-"+s];n[s]=w(a)}return n}function te(e){var t=e.getBBox();return O(0,0,t.width,t.height)}function ne(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return S;var r=_(e).getComputedStyle(e),i=ee(r),s=i.left+i.right,a=i.top+i.bottom,o=w(r.width),c=w(r.height);if(r.boxSizing==="border-box"&&(Math.round(o+s)!==t&&(o-=T(r,"left","right")+s),Math.round(c+a)!==n&&(c-=T(r,"top","bottom")+a)),!ie(e)){var v=Math.round(o+s)-t,h=Math.round(c+a)-n;Math.abs(v)!==1&&(o-=v),Math.abs(h)!==1&&(c-=h)}return O(i.left,i.top,o,c)}var re=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof _(e).SVGGraphicsElement}:function(e){return e instanceof _(e).SVGElement&&typeof e.getBBox=="function"}}();function ie(e){return e===_(e).document.documentElement}function oe(e){return x?re(e)?te(e):ne(e):S}function se(e){var t=e.x,n=e.y,r=e.width,i=e.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(s.prototype);return D(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}function O(e,t,n,r){return{x:e,y:t,width:n,height:r}}var ae=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=O(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=oe(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),ce=function(){function e(t,n){var r=se(n);D(this,{target:t,contentRect:r})}return e}(),ue=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new j,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof _(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new ae(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof _(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new ce(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),I=typeof WeakMap<"u"?new WeakMap:new j,L=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Z.getInstance(),r=new ue(t,n,this);I.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){L.prototype[e]=function(){var t;return(t=I.get(this))[e].apply(t,arguments)}});var fe=function(){return typeof y.ResizeObserver<"u"?y.ResizeObserver:L}(),he=["client","offset","scroll","bounds","margin"];function A(e){var t=[];return he.forEach(function(n){e[n]&&t.push(n)}),t}function C(e,t){var n={};if(t.indexOf("client")>-1&&(n.client={top:e.clientTop,left:e.clientLeft,width:e.clientWidth,height:e.clientHeight}),t.indexOf("offset")>-1&&(n.offset={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight}),t.indexOf("scroll")>-1&&(n.scroll={top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}),t.indexOf("bounds")>-1){var r=e.getBoundingClientRect();n.bounds={top:r.top,right:r.right,bottom:r.bottom,left:r.left,width:r.width,height:r.height}}if(t.indexOf("margin")>-1){var i=getComputedStyle(e);n.margin={top:i?parseInt(i.marginTop):0,right:i?parseInt(i.marginRight):0,bottom:i?parseInt(i.marginBottom):0,left:i?parseInt(i.marginLeft):0}}return n}function le(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||window}function de(e){return function(t){var n,r;return r=n=function(i){k(s,i);function s(){for(var o,c=arguments.length,v=new Array(c),h=0;h<c;h++)v[h]=arguments[h];return o=i.call.apply(i,[this].concat(v))||this,o.state={contentRect:{entry:{},client:{},offset:{},scroll:{},bounds:{},margin:{}}},o._animationFrameID=null,o._resizeObserver=null,o._node=null,o._window=null,o.measure=function(m){var f=C(o._node,A(o.props));m&&(f.entry=m[0].contentRect),o._animationFrameID=o._window.requestAnimationFrame(function(){o._resizeObserver!==null&&(o.setState({contentRect:f}),typeof o.props.onResize=="function"&&o.props.onResize(f))})},o._handleRef=function(m){o._resizeObserver!==null&&o._node!==null&&o._resizeObserver.unobserve(o._node),o._node=m,o._window=le(o._node);var f=o.props.innerRef;f&&(typeof f=="function"?f(o._node):f.current=o._node),o._resizeObserver!==null&&o._node!==null&&o._resizeObserver.observe(o._node)},o}var a=s.prototype;return a.componentDidMount=function(){this._resizeObserver=this._window!==null&&this._window.ResizeObserver?new this._window.ResizeObserver(this.measure):new fe(this.measure),this._node!==null&&(this._resizeObserver.observe(this._node),typeof this.props.onResize=="function"&&this.props.onResize(C(this._node,A(this.props))))},a.componentWillUnmount=function(){this._window!==null&&this._window.cancelAnimationFrame(this._animationFrameID),this._resizeObserver!==null&&(this._resizeObserver.disconnect(),this._resizeObserver=null)},a.render=function(){var c=this.props;c.innerRef,c.onResize;var v=q(c,["innerRef","onResize"]);return g.createElement(t,$({},v,{measureRef:this._handleRef,measure:this.measure,contentRect:this.state.contentRect}))},s}(g.Component),n.propTypes={client:p.bool,offset:p.bool,scroll:p.bool,bounds:p.bool,margin:p.bool,innerRef:p.oneOfType([p.object,p.func]),onResize:p.func},r}}var z=de()(function(e){var t=e.measure,n=e.measureRef,r=e.contentRect,i=e.children;return i({measure:t,measureRef:n,contentRect:r})});z.displayName="Measure";z.propTypes.children=p.func;const pe=z,me=N.memo(function(t){var n;let{name:r,id:i,SVs:s,children:a,actions:o,callAction:c}=B(t),v=u=>{c({action:o.recordVisibilityChange,args:{isVisible:u}})};if(g.useEffect(()=>()=>{c({action:o.recordVisibilityChange,args:{isVisible:!1}})},[]),s.hidden||!a)return null;let h=a,m=null,f=null;if(s.captionChildName){let u;for(let[l,b]of a.entries())if(((n=b==null?void 0:b.props)==null?void 0:n.componentInstructions.componentName)===s.captionChildName){u=l;break}f=a[u],h.splice(u,1)}if(s.suppressFigureNameInCaption)f&&(m=d.jsx("div",{children:f}));else{let u=d.jsx("strong",{children:s.figureName});f?m=d.jsxs("div",{children:[u,": ",f]}):m=d.jsx("div",{children:u})}const[H,M]=g.useState("center");function W(u){var l=document.createElement(u.nodeName),b;return l.setAttribute("style","margin:0; padding:0; font-family:"+(u.style.fontFamily||"inherit")+"; font-size:"+(u.style.fontSize||"inherit")),l.innerHTML="A",u.parentNode.appendChild(l),b=l.clientHeight,l.parentNode.removeChild(l),b}function F(){var u=document.getElementById(i+"_caption"),l=u.offsetHeight,b=W(document.getElementById(i+"_caption")),V=Math.round(l/b);return V}function P(){F()>=2?M("left"):M("center")}return d.jsx(G,{partialVisibility:!0,onChange:v,children:d.jsxs("figure",{id:i,style:{margin:"12px 0"},children:[d.jsx("a",{name:i}),h,d.jsx("figcaption",{id:i+"_caption",children:d.jsx(pe,{onResize:P,children:({measureRef:u})=>d.jsx("div",{ref:u,style:{textAlign:H},children:m})})})]})})});export{me as default};