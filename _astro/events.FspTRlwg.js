var F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function x(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function I(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var v={exports:{}},a=typeof Reflect=="object"?Reflect:null,h=a&&typeof a.apply=="function"?a.apply:function(t,n,r){return Function.prototype.apply.call(t,n,r)},l;a&&typeof a.ownKeys=="function"?l=a.ownKeys:Object.getOwnPropertySymbols?l=function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:l=function(t){return Object.getOwnPropertyNames(t)};function C(e){console&&console.warn&&console.warn(e)}var m=Number.isNaN||function(t){return t!==t};function o(){o.init.call(this)}v.exports=o;v.exports.once=P;o.EventEmitter=o;o.prototype._events=void 0;o.prototype._eventsCount=0;o.prototype._maxListeners=void 0;var y=10;function p(e){if(typeof e!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return y},set:function(e){if(typeof e!="number"||e<0||m(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");y=e}});o.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};o.prototype.setMaxListeners=function(t){if(typeof t!="number"||t<0||m(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this};function L(e){return e._maxListeners===void 0?o.defaultMaxListeners:e._maxListeners}o.prototype.getMaxListeners=function(){return L(this)};o.prototype.emit=function(t){for(var n=[],r=1;r<arguments.length;r++)n.push(arguments[r]);var i=t==="error",f=this._events;if(f!==void 0)i=i&&f.error===void 0;else if(!i)return!1;if(i){var s;if(n.length>0&&(s=n[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var c=f[t];if(c===void 0)return!1;if(typeof c=="function")h(c,this,n);else for(var d=c.length,j=O(c,d),r=0;r<d;++r)h(j[r],this,n);return!0};function g(e,t,n,r){var i,f,s;if(p(n),f=e._events,f===void 0?(f=e._events=Object.create(null),e._eventsCount=0):(f.newListener!==void 0&&(e.emit("newListener",t,n.listener?n.listener:n),f=e._events),s=f[t]),s===void 0)s=f[t]=n,++e._eventsCount;else if(typeof s=="function"?s=f[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),i=L(e),i>0&&s.length>i&&!s.warned){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=s.length,C(u)}return e}o.prototype.addListener=function(t,n){return g(this,t,n,!1)};o.prototype.on=o.prototype.addListener;o.prototype.prependListener=function(t,n){return g(this,t,n,!0)};function R(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function _(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=R.bind(r);return i.listener=n,r.wrapFn=i,i}o.prototype.once=function(t,n){return p(n),this.on(t,_(this,t,n)),this};o.prototype.prependOnceListener=function(t,n){return p(n),this.prependListener(t,_(this,t,n)),this};o.prototype.removeListener=function(t,n){var r,i,f,s,u;if(p(n),i=this._events,i===void 0)return this;if(r=i[t],r===void 0)return this;if(r===n||r.listener===n)--this._eventsCount===0?this._events=Object.create(null):(delete i[t],i.removeListener&&this.emit("removeListener",t,r.listener||n));else if(typeof r!="function"){for(f=-1,s=r.length-1;s>=0;s--)if(r[s]===n||r[s].listener===n){u=r[s].listener,f=s;break}if(f<0)return this;f===0?r.shift():M(r,f),r.length===1&&(i[t]=r[0]),i.removeListener!==void 0&&this.emit("removeListener",t,u||n)}return this};o.prototype.off=o.prototype.removeListener;o.prototype.removeAllListeners=function(t){var n,r,i;if(r=this._events,r===void 0)return this;if(r.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):r[t]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete r[t]),this;if(arguments.length===0){var f=Object.keys(r),s;for(i=0;i<f.length;++i)s=f[i],s!=="removeListener"&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(n=r[t],typeof n=="function")this.removeListener(t,n);else if(n!==void 0)for(i=n.length-1;i>=0;i--)this.removeListener(t,n[i]);return this};function b(e,t,n){var r=e._events;if(r===void 0)return[];var i=r[t];return i===void 0?[]:typeof i=="function"?n?[i.listener||i]:[i]:n?N(i):O(i,i.length)}o.prototype.listeners=function(t){return b(this,t,!0)};o.prototype.rawListeners=function(t){return b(this,t,!1)};o.listenerCount=function(e,t){return typeof e.listenerCount=="function"?e.listenerCount(t):w.call(e,t)};o.prototype.listenerCount=w;function w(e){var t=this._events;if(t!==void 0){var n=t[e];if(typeof n=="function")return 1;if(n!==void 0)return n.length}return 0}o.prototype.eventNames=function(){return this._eventsCount>0?l(this._events):[]};function O(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function M(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function N(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}function P(e,t){return new Promise(function(n,r){function i(s){e.removeListener(t,f),r(s)}function f(){typeof e.removeListener=="function"&&e.removeListener("error",i),n([].slice.call(arguments))}E(e,t,f,{once:!0}),t!=="error"&&A(e,i,{once:!0})})}function A(e,t,n){typeof e.on=="function"&&E(e,"error",t,n)}function E(e,t,n,r){if(typeof e.on=="function")r.once?e.once(t,n):e.on(t,n);else if(typeof e.addEventListener=="function")e.addEventListener(t,function i(f){r.once&&e.removeEventListener(t,i),n(f)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}var T=v.exports;const K=x(T);export{K as E,I as a,F as c,T as e,x as g};
