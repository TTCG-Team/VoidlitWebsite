import{ae as _}from"./index.browser.esm.CTDr-V4f.js";var R=function(t,e){return R=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},R(t,e)};function I(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");R(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function ge(t,e,n,r){function i(o){return o instanceof n?o:new n(function(u){u(o)})}return new(n||(n=Promise))(function(o,u){function a(f){try{c(r.next(f))}catch(d){u(d)}}function s(f){try{c(r.throw(f))}catch(d){u(d)}}function c(f){f.done?o(f.value):i(f.value).then(a,s)}c((r=r.apply(t,e||[])).next())})}function K(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(c){return function(f){return s([c,f])}}function s(c){if(r)throw new TypeError("Generator is already executing.");for(;u&&(u=0,c[0]&&(n=0)),n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(f){c=[6,f],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function A(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function L(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,o=[],u;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){u={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(u)throw u.error}}return o}function T(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}function x(t){return this instanceof x?(this.v=t,this):new x(t)}function Se(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,o=[];return i={},u("next"),u("throw"),u("return"),i[Symbol.asyncIterator]=function(){return this},i;function u(l){r[l]&&(i[l]=function(v){return new Promise(function(p,h){o.push([l,v,p,h])>1||a(l,v)})})}function a(l,v){try{s(r[l](v))}catch(p){d(o[0][3],p)}}function s(l){l.value instanceof x?Promise.resolve(l.value.v).then(c,f):d(o[0][2],l)}function c(l){a("next",l)}function f(l){a("throw",l)}function d(l,v){l(v),o.shift(),o.length&&a(o[0][0],o[0][1])}}function xe(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof A=="function"?A(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=t[o]&&function(u){return new Promise(function(a,s){u=t[o](u),i(a,s,u.done,u.value)})}}function i(o,u,a,s){Promise.resolve(s).then(function(c){o({value:c,done:a})},u)}}function y(t){return typeof t=="function"}function Ie(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var B=Ie(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,i){return i+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function D(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var U=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,o;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var a=A(u),s=a.next();!s.done;s=a.next()){var c=s.value;c.remove(this)}}catch(h){e={error:h}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else u.remove(this);var f=this.initialTeardown;if(y(f))try{f()}catch(h){o=h instanceof B?h.errors:[h]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var l=A(d),v=l.next();!v.done;v=l.next()){var p=v.value;try{G(p)}catch(h){o=o??[],h instanceof B?o=T(T([],L(o)),L(h.errors)):o.push(h)}}}catch(h){r={error:h}}finally{try{v&&!v.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}}if(o)throw new B(o)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)G(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&D(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&D(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),ut=U.EMPTY;function Q(t){return t instanceof U||t&&"closed"in t&&y(t.remove)&&y(t.add)&&y(t.unsubscribe)}function G(t){y(t)?t():t.unsubscribe()}var X={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Z={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,T([t,e],L(n)))},clearTimeout:function(t){var e=Z.delegate;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function N(t){Z.setTimeout(function(){throw t})}function V(){}function Ee(t){t()}var q=function(t){I(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,Q(n)&&n.add(r)):r.destination=ke,r}return e.create=function(n,r,i){return new $(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(U),_e=Function.prototype.bind;function F(t,e){return _e.call(t,e)}var Ae=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){k(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){k(r)}else k(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){k(n)}},t}(),$=function(t){I(e,t);function e(n,r,i){var o=t.call(this)||this,u;if(y(n)||!n)u={next:n??void 0,error:r??void 0,complete:i??void 0};else{var a;o&&X.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return o.unsubscribe()},u={next:n.next&&F(n.next,a),error:n.error&&F(n.error,a),complete:n.complete&&F(n.complete,a)}):u=n}return o.destination=new Ae(u),o}return e}(q);function k(t){N(t)}function Pe(t){throw t}var ke={closed:!0,next:V,error:Pe,complete:V},C=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function M(t){return t}function Le(t){return t.length===0?M:t.length===1?t[0]:function(n){return t.reduce(function(r,i){return i(r)},n)}}var m=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,o=Ue(e)?e:new $(e,n,r);return Ee(function(){var u=i,a=u.operator,s=u.source;o.add(a?a.call(o,s):s?i._subscribe(o):i._trySubscribe(o))}),o},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=H(n),new n(function(i,o){var u=new $({next:function(a){try{e(a)}catch(s){o(s),u.unsubscribe()}},error:o,complete:i});r.subscribe(u)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[C]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Le(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=H(e),new e(function(r,i){var o;n.subscribe(function(u){return o=u},function(u){return i(u)},function(){return r(o)})})},t.create=function(e){return new t(e)},t}();function H(t){var e;return(e=t??X.Promise)!==null&&e!==void 0?e:Promise}function Te(t){return t&&y(t.next)&&y(t.error)&&y(t.complete)}function Ue(t){return t&&t instanceof q||Te(t)&&Q(t)}function ze(t){return y(t?.lift)}function g(t){return function(e){if(ze(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function b(t,e,n,r,i){return new Oe(t,e,n,r,i)}var Oe=function(t){I(e,t);function e(n,r,i,o,u,a){var s=t.call(this,n)||this;return s.onFinalize=u,s.shouldUnsubscribe=a,s._next=r?function(c){try{r(c)}catch(f){n.error(f)}}:t.prototype._next,s._error=o?function(c){try{o(c)}catch(f){n.error(f)}finally{this.unsubscribe()}}:t.prototype._error,s._complete=i?function(){try{i()}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._complete,s}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e}(q),ee={now:function(){return(ee.delegate||Date).now()},delegate:void 0},Be=function(t){I(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(U),j={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setInterval.apply(void 0,T([t,e],L(n)))},clearInterval:function(t){var e=j.delegate;return(e?.clearInterval||clearInterval)(t)},delegate:void 0},Fe=function(t){I(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){var i;if(r===void 0&&(r=0),this.closed)return this;this.state=n;var o=this.id,u=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(u,o,r)),this.pending=!0,this.delay=r,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(u,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),j.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;r!=null&&j.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,o;try{this.work(n)}catch(u){i=!0,o=u||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),o},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,o=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,D(o,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(Be),W=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=ee.now,t}(),Re=function(t){I(e,t);function e(n,r){r===void 0&&(r=W.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(W),te=new Re(Fe),De=te;function ne(t){return t&&y(t.schedule)}function re(t){return t[t.length-1]}function Y(t){return ne(re(t))?t.pop():void 0}function ct(t,e){return typeof re(t)=="number"?t.pop():e}var ie=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function oe(t){return y(t?.then)}function ue(t){return y(t[C])}function ce(t){return Symbol.asyncIterator&&y(t?.[Symbol.asyncIterator])}function se(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function $e(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ae=$e();function fe(t){return y(t?.[ae])}function le(t){return Se(this,arguments,function(){var n,r,i,o;return K(this,function(u){switch(u.label){case 0:n=t.getReader(),u.label=1;case 1:u.trys.push([1,,9,10]),u.label=2;case 2:return[4,x(n.read())];case 3:return r=u.sent(),i=r.value,o=r.done,o?[4,x(void 0)]:[3,5];case 4:return[2,u.sent()];case 5:return[4,x(i)];case 6:return[4,u.sent()];case 7:return u.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function he(t){return y(t?.getReader)}function S(t){if(t instanceof m)return t;if(t!=null){if(ue(t))return je(t);if(ie(t))return qe(t);if(oe(t))return Ce(t);if(ce(t))return de(t);if(fe(t))return Me(t);if(he(t))return Ye(t)}throw se(t)}function je(t){return new m(function(e){var n=t[C]();if(y(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function qe(t){return new m(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function Ce(t){return new m(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,N)})}function Me(t){return new m(function(e){var n,r;try{for(var i=A(t),o=i.next();!o.done;o=i.next()){var u=o.value;if(e.next(u),e.closed)return}}catch(a){n={error:a}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}e.complete()})}function de(t){return new m(function(e){Ge(t,e).catch(function(n){return e.error(n)})})}function Ye(t){return de(le(t))}function Ge(t,e){var n,r,i,o;return ge(this,void 0,void 0,function(){var u,a;return K(this,function(s){switch(s.label){case 0:s.trys.push([0,5,6,11]),n=xe(t),s.label=1;case 1:return[4,n.next()];case 2:if(r=s.sent(),!!r.done)return[3,4];if(u=r.value,e.next(u),e.closed)return[2];s.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=s.sent(),i={error:a},[3,11];case 6:return s.trys.push([6,,9,10]),r&&!r.done&&(o=n.return)?[4,o.call(n)]:[3,8];case 7:s.sent(),s.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function w(t,e,n,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var o=e.schedule(function(){n(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(o),!i)return o}function ve(t,e){return e===void 0&&(e=0),g(function(n,r){n.subscribe(b(r,function(i){return w(r,t,function(){return r.next(i)},e)},function(){return w(r,t,function(){return r.complete()},e)},function(i){return w(r,t,function(){return r.error(i)},e)}))})}function ye(t,e){return e===void 0&&(e=0),g(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function Ve(t,e){return S(t).pipe(ye(e),ve(e))}function He(t,e){return S(t).pipe(ye(e),ve(e))}function We(t,e){return new m(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function Je(t,e){return new m(function(n){var r;return w(n,e,function(){r=t[ae](),w(n,e,function(){var i,o,u;try{i=r.next(),o=i.value,u=i.done}catch(a){n.error(a);return}u?n.complete():n.next(o)},0,!0)}),function(){return y(r?.return)&&r.return()}})}function pe(t,e){if(!t)throw new Error("Iterable cannot be null");return new m(function(n){w(n,e,function(){var r=t[Symbol.asyncIterator]();w(n,e,function(){r.next().then(function(i){i.done?n.complete():n.next(i.value)})},0,!0)})})}function Ke(t,e){return pe(le(t),e)}function Qe(t,e){if(t!=null){if(ue(t))return Ve(t,e);if(ie(t))return We(t,e);if(oe(t))return He(t,e);if(ce(t))return pe(t,e);if(fe(t))return Je(t,e);if(he(t))return Ke(t,e)}throw se(t)}function me(t,e){return e?Qe(t,e):S(t)}function st(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Y(t);return me(t,n)}function Xe(t){return t instanceof Date&&!isNaN(t)}function Ze(t,e){return g(function(n,r){var i=0;n.subscribe(b(r,function(o){r.next(t.call(e,o,i++))}))})}function Ne(t,e,n,r,i,o,u,a){var s=[],c=0,f=0,d=!1,l=function(){d&&!s.length&&!c&&e.complete()},v=function(h){return c<r?p(h):s.push(h)},p=function(h){c++;var E=!1;S(n(h,f++)).subscribe(b(e,function(z){e.next(z)},function(){E=!0},void 0,function(){if(E)try{c--;for(var z=function(){var O=s.shift();u||p(O)};s.length&&c<r;)z();l()}catch(O){e.error(O)}}))};return t.subscribe(b(e,v,function(){d=!0,l()})),function(){}}function be(t,e,n){return n===void 0&&(n=1/0),y(e)?be(function(r,i){return Ze(function(o,u){return e(r,o,i,u)})(S(t(r,i)))},n):(typeof e=="number"&&(n=e),g(function(r,i){return Ne(r,i,t,n)}))}function et(t){return t===void 0&&(t=1/0),be(M,t)}function tt(){return et(1)}function J(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return tt()(me(t,Y(t)))}function we(t,e,n){t===void 0&&(t=0),n===void 0&&(n=De);var r=-1;return e!=null&&(ne(e)?n=e:r=e),new m(function(i){var o=Xe(t)?+t-n.now():t;o<0&&(o=0);var u=0;return n.schedule(function(){i.closed||(i.next(u++),0<=r?this.schedule(void 0,r):i.complete())},o)})}function at(t,e){return t===void 0&&(t=0),e===void 0&&(e=te),t<0&&(t=0),we(t,t,e)}function ft(t){t===void 0&&(t=1/0);var e;t&&typeof t=="object"?e=t:e={count:t};var n=e.count,r=n===void 0?1/0:n,i=e.delay,o=e.resetOnSuccess,u=o===void 0?!1:o;return r<=0?M:g(function(a,s){var c=0,f,d=function(){var l=!1;f=a.subscribe(b(s,function(v){u&&(c=0),s.next(v)},void 0,function(v){if(c++<r){var p=function(){f?(f.unsubscribe(),f=null,d()):l=!0};if(i!=null){var h=typeof i=="number"?we(i):S(i(v,c)),E=b(s,function(){E.unsubscribe(),p()},function(){s.complete()});h.subscribe(E)}else p()}else s.error(v)})),l&&(f.unsubscribe(),f=null,d())};d()})}function lt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Y(t);return g(function(r,i){(n?J(t,r,n):J(t,r)).subscribe(i)})}function ht(t,e){return g(function(n,r){var i=null,o=0,u=!1,a=function(){return u&&!i&&r.complete()};n.subscribe(b(r,function(s){i?.unsubscribe();var c=0,f=o++;S(t(s,f)).subscribe(i=b(r,function(d){return r.next(e?e(s,d,f,c++):d)},function(){i=null,a()}))},function(){u=!0,a()}))})}function P(t,e){if(!t)throw new Error("assert "+e)}class dt{constructor(e,n){this.size=e,this.name=n}getSize(e){return this.size}encode(e,n){return e.copy(n,0)}decode(e){return[_.Buffer.from(e.slice(0,this.size)),this.size]}}class nt{constructor(e){this.name=e}getSize(e){return e?4+e.length:4}encode(e,n){return e?(n.writeUInt32LE(e.length),e.copy(n,4),4+e.length):(n.writeUInt32LE(0),4)}decode(e){const n=e.readUInt32LE();return n==0?[_.Buffer.from([]),4]:[_.Buffer.from(e.slice(4,4+n)),4+n]}}class rt{constructor(e){this.name=e,this.l=new nt(e)}l;getSize(e){return this.l.getSize(this.encode_to_buffer(e))}encode(e,n){return this.l.encode(this.encode_to_buffer(e),n)}decode(e){const[n,r]=this.l.decode(e);return[this.decode_from_buffer(n),r]}}class vt extends rt{encode_to_buffer(e){return _.Buffer.from(e)}decode_from_buffer(e){return e.toString()}}class it{constructor(e){this.name=e}getSize(e){return 1}encode(e,n){if(e>255)throw new Error(`u8 plug ${this.name} encode error, value must in [0, 255], but got ${e}`);return n.set([e],0),1}decode(e){return P(e.length>0),[e.at(0),1]}}class yt{constructor(e){this.name=e}getSize(e){return 1}encode(e,n){return n.set([e?1:0],0),1}decode(e){return P(e.length>0),[!!e.at(0),1]}}class pt{constructor(e){this.name=e}getSize(e){return 8}encode(e,n){return n.writeBigUint64LE(BigInt(e)),8}decode(e){P(e.length>=8);let n=e.readBigUInt64LE();return[Number(n),8]}}class mt extends it{constructor(e,n){super(n),this.v=e,this.name=n}encode(e,n){return this.v!==e&&console.warn(`const u8 layout is ${this.v}, the input value ${e} will be ignored.`),super.encode(this.v,n)}decode(e){const[n,r]=super.decode(e);return this.v!==n&&console.warn(`const u8 layout is ${this.v}, the decoded value ${n} will be ignored.`),[this.v,1]}}class bt{constructor(e,n){this.layout_arr=e,this.name=n}getSize(e){let n=0;for(let r=0;r<this.layout_arr.length;r++){const i=this.layout_arr[r];if(i.name){const o=i.getSize(e[i.name]);n+=o}else throw new Error("unnamed layout")}return n}encode(e,n){let r=0;for(let i=0;i<this.layout_arr.length;i++){const o=this.layout_arr[i];if(o.name){const u=o.encode(e[o.name],n);r+=u,n=n.slice(u)}else throw new Error("unnamed layout")}return r}decode(e){const n={};let r=0;for(let i=0,o=e;i<this.layout_arr.length;i++){const u=this.layout_arr[i];if(u.name){const[a,s]=u.decode(o);n[u.name]=a,o=o.slice(s),r+=s}else throw new Error("unnamed layout")}return[n,r]}}function wt(t,e){const n=e.getSize(t),r=_.Buffer.alloc(n),i=e.encode(t,r);return P(n==i,`encoded length must equel to calculated size.size: ${n}, len: ${i}`),r}function gt(t,e){const[n,r]=e.decode(t);return P(t.length==r,"decoded length must equal to input buffer length."),n}export{vt as A,yt as B,mt as C,wt as D,ut as E,dt as F,m as O,U as S,pt as U,I as _,D as a,A as b,Ie as c,ee as d,Ee as e,ct as f,me as g,T as h,L as i,$ as j,S as k,b as l,et as m,te as n,g as o,Y as p,bt as q,at as r,ht as s,we as t,gt as u,lt as v,Ze as w,ft as x,st as y,P as z};
