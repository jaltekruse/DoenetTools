import{ax as _,ay as c,az as C,aA as D,r as g,aB as S}from"./index-2f97b159.js";var E=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,s){return i[0]===n?(r=s,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var a=s[i];n.call(r,a[1],a[0])}},t}()}(),w=typeof window<"u"&&typeof document<"u"&&window.document===document,p=function(){return typeof _<"u"&&_.Math===Math?_:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),W=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(p):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),L=2;function I(e,t){var n=!1,r=!1,i=0;function s(){n&&(n=!1,e()),r&&o()}function a(){W(s)}function o(){var u=Date.now();if(n){if(u-i<L)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=u}return o}var F=20,G=["top","right","bottom","left","width","height","size","weight"],H=typeof MutationObserver<"u",P=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=I(this.refresh.bind(this),F)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!w||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),H?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!w||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=G.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),z=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},d=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||p},M=m(0,0,0,0);function b(e){return parseFloat(e)||0}function y(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var s=e["border-"+i+"-width"];return r+b(s)},0)}function j(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var s=i[r],a=e["padding-"+s];n[s]=b(a)}return n}function B(e){var t=e.getBBox();return m(0,0,t.width,t.height)}function q(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return M;var r=d(e).getComputedStyle(e),i=j(r),s=i.left+i.right,a=i.top+i.bottom,o=b(r.width),u=b(r.height);if(r.boxSizing==="border-box"&&(Math.round(o+s)!==t&&(o-=y(r,"left","right")+s),Math.round(u+a)!==n&&(u-=y(r,"top","bottom")+a)),!$(e)){var h=Math.round(o+s)-t,l=Math.round(u+a)-n;Math.abs(h)!==1&&(o-=h),Math.abs(l)!==1&&(u-=l)}return m(i.left,i.top,o,u)}var V=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof d(e).SVGGraphicsElement}:function(e){return e instanceof d(e).SVGElement&&typeof e.getBBox=="function"}}();function $(e){return e===d(e).document.documentElement}function k(e){return w?V(e)?B(e):q(e):M}function N(e){var t=e.x,n=e.y,r=e.width,i=e.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(s.prototype);return z(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}function m(e,t,n,r){return{x:e,y:t,width:n,height:r}}var U=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=m(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=k(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),K=function(){function e(t,n){var r=N(n);z(this,{target:t,contentRect:r})}return e}(),Y=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new E,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new U(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new K(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),x=typeof WeakMap<"u"?new WeakMap:new E,T=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=P.getInstance(),r=new Y(t,n,this);x.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){T.prototype[e]=function(){var t;return(t=x.get(this))[e].apply(t,arguments)}});var J=function(){return typeof p.ResizeObserver<"u"?p.ResizeObserver:T}(),Q=["client","offset","scroll","bounds","margin"];function O(e){var t=[];return Q.forEach(function(n){e[n]&&t.push(n)}),t}function R(e,t){var n={};if(t.indexOf("client")>-1&&(n.client={top:e.clientTop,left:e.clientLeft,width:e.clientWidth,height:e.clientHeight}),t.indexOf("offset")>-1&&(n.offset={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight}),t.indexOf("scroll")>-1&&(n.scroll={top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}),t.indexOf("bounds")>-1){var r=e.getBoundingClientRect();n.bounds={top:r.top,right:r.right,bottom:r.bottom,left:r.left,width:r.width,height:r.height}}if(t.indexOf("margin")>-1){var i=getComputedStyle(e);n.margin={top:i?parseInt(i.marginTop):0,right:i?parseInt(i.marginRight):0,bottom:i?parseInt(i.marginBottom):0,left:i?parseInt(i.marginLeft):0}}return n}function X(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||window}function Z(e){return function(t){var n,r;return r=n=function(i){C(s,i);function s(){for(var o,u=arguments.length,h=new Array(u),l=0;l<u;l++)h[l]=arguments[l];return o=i.call.apply(i,[this].concat(h))||this,o.state={contentRect:{entry:{},client:{},offset:{},scroll:{},bounds:{},margin:{}}},o._animationFrameID=null,o._resizeObserver=null,o._node=null,o._window=null,o.measure=function(v){var f=R(o._node,e||O(o.props));v&&(f.entry=v[0].contentRect),o._animationFrameID=o._window.requestAnimationFrame(function(){o._resizeObserver!==null&&(o.setState({contentRect:f}),typeof o.props.onResize=="function"&&o.props.onResize(f))})},o._handleRef=function(v){o._resizeObserver!==null&&o._node!==null&&o._resizeObserver.unobserve(o._node),o._node=v,o._window=X(o._node);var f=o.props.innerRef;f&&(typeof f=="function"?f(o._node):f.current=o._node),o._resizeObserver!==null&&o._node!==null&&o._resizeObserver.observe(o._node)},o}var a=s.prototype;return a.componentDidMount=function(){this._resizeObserver=this._window!==null&&this._window.ResizeObserver?new this._window.ResizeObserver(this.measure):new J(this.measure),this._node!==null&&(this._resizeObserver.observe(this._node),typeof this.props.onResize=="function"&&this.props.onResize(R(this._node,e||O(this.props))))},a.componentWillUnmount=function(){this._window!==null&&this._window.cancelAnimationFrame(this._animationFrameID),this._resizeObserver!==null&&(this._resizeObserver.disconnect(),this._resizeObserver=null)},a.render=function(){var u=this.props;u.innerRef,u.onResize;var h=D(u,["innerRef","onResize"]);return g.createElement(t,S({},h,{measureRef:this._handleRef,measure:this.measure,contentRect:this.state.contentRect}))},s}(g.Component),n.propTypes={client:c.bool,offset:c.bool,scroll:c.bool,bounds:c.bool,margin:c.bool,innerRef:c.oneOfType([c.object,c.func]),onResize:c.func},r}}var A=Z()(function(e){var t=e.measure,n=e.measureRef,r=e.contentRect,i=e.children;return i({measure:t,measureRef:n,contentRect:r})});A.displayName="Measure";A.propTypes.children=c.func;export{A as M};