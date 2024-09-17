import{P as R,T as q,V as H}from"./index.browser.esm.C8Q0Hq2t.js";import{E as C,v as V}from"./v4.GzCEjcG5.js";import{g as N}from"./events.FspTRlwg.js";var G=function(){var s=function(a,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},s(a,r)};return function(a,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(a,r);function n(){this.constructor=a}a.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),L=function(s){G(a,s);function a(){return s!==null&&s.apply(this,arguments)||this}return a}(C);function B(s){if(s.length>=255)throw new TypeError("Alphabet too long");for(var a=new Uint8Array(256),r=0;r<a.length;r++)a[r]=255;for(var n=0;n<s.length;n++){var t=s.charAt(n),e=t.charCodeAt(0);if(a[e]!==255)throw new TypeError(t+" is ambiguous");a[e]=n}var o=s.length,c=s.charAt(0),u=Math.log(o)/Math.log(256),i=Math.log(256)/Math.log(o);function l(d){if(d instanceof Uint8Array||(ArrayBuffer.isView(d)?d=new Uint8Array(d.buffer,d.byteOffset,d.byteLength):Array.isArray(d)&&(d=Uint8Array.from(d))),!(d instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(d.length===0)return"";for(var h=0,S=0,_=0,y=d.length;_!==y&&d[_]===0;)_++,h++;for(var m=(y-_)*i+1>>>0,p=new Uint8Array(m);_!==y;){for(var g=d[_],A=0,w=m-1;(g!==0||A<S)&&w!==-1;w--,A++)g+=256*p[w]>>>0,p[w]=g%o>>>0,g=g/o>>>0;if(g!==0)throw new Error("Non-zero carry");S=A,_++}for(var b=m-S;b!==m&&p[b]===0;)b++;for(var U=c.repeat(h);b<m;++b)U+=s.charAt(p[b]);return U}function f(d){if(typeof d!="string")throw new TypeError("Expected String");if(d.length===0)return new Uint8Array;for(var h=0,S=0,_=0;d[h]===c;)S++,h++;for(var y=(d.length-h)*u+1>>>0,m=new Uint8Array(y);d[h];){var p=a[d.charCodeAt(h)];if(p===255)return;for(var g=0,A=y-1;(p!==0||g<_)&&A!==-1;A--,g++)p+=o*m[A]>>>0,m[A]=p%256>>>0,p=p/256>>>0;if(p!==0)throw new Error("Non-zero carry");_=g,h++}for(var w=y-_;w!==y&&m[w]===0;)w++;for(var b=new Uint8Array(S+(y-w)),U=S;w!==y;)b[U++]=m[w++];return b}function $(d){var h=f(d);if(h)return h;throw new Error("Non-base"+o+" character")}return{encode:l,decodeUnsafe:f,decode:$}}var J=B;const Q=J,X="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";var Y=Q(X);const v=N(Y);var Z=function(){var s=function(a,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},s(a,r)};return function(a,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(a,r);function n(){this.constructor=a}a.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),K=function(){return K=Object.assign||function(s){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(s[t]=a[t])}return s},K.apply(this,arguments)},W=function(s,a,r,n){function t(e){return e instanceof r?e:new r(function(o){o(e)})}return new(r||(r=Promise))(function(e,o){function c(l){try{i(n.next(l))}catch(f){o(f)}}function u(l){try{i(n.throw(l))}catch(f){o(f)}}function i(l){l.done?e(l.value):t(l.value).then(c,u)}i((n=n.apply(s,a||[])).next())})},k=function(s,a){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},n,t,e,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(i){return function(l){return u([i,l])}}function u(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(r=0)),r;)try{if(n=1,t&&(e=i[0]&2?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[i[0]&2,e.value]),i[0]){case 0:case 1:e=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!e||i[1]>e[0]&&i[1]<e[3])){r.label=i[1];break}if(i[0]===6&&r.label<e[1]){r.label=e[1],e=i;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(i);break}e[2]&&r.ops.pop(),r.trys.pop();continue}i=a.call(s,r)}catch(l){i=[6,l],t=0}finally{n=e=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},F=function(s,a){var r=typeof Symbol=="function"&&s[Symbol.iterator];if(!r)return s;var n=r.call(s),t,e=[],o;try{for(;(a===void 0||a-- >0)&&!(t=n.next()).done;)e.push(t.value)}catch(c){o={error:c}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(o)throw o.error}}return e},ee=function(s){Z(a,s);function a(r,n){var t=s.call(this)||this;if(t._handleMessage=function(e){if(t._injectedProvider&&e.source===window||e.origin===t._providerUrl.origin&&e.source===t._popup){if(e.data.method==="connected"){var o=new R(e.data.params.publicKey);(!t._publicKey||!t._publicKey.equals(o))&&(t._publicKey&&!t._publicKey.equals(o)&&t._handleDisconnect(),t._publicKey=o,t._autoApprove=!!e.data.params.autoApprove,t.emit("connect",t._publicKey))}else if(e.data.method==="disconnected")t._handleDisconnect();else if((e.data.result||e.data.error)&&t._responsePromises.has(e.data.id)){var c=F(t._responsePromises.get(e.data.id),2),u=c[0],i=c[1];e.data.result?u(e.data.result):i(new Error(e.data.error))}}},t._handleConnect=function(){return t._handlerAdded||(t._handlerAdded=!0,window.addEventListener("message",t._handleMessage),window.addEventListener("beforeunload",t.disconnect)),t._injectedProvider?new Promise(function(e){t._sendRequest("connect",{}),e()}):(window.name="parent",t._popup=window.open(t._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise(function(e){t.once("connect",e)}))},t._handleDisconnect=function(){t._handlerAdded&&(t._handlerAdded=!1,window.removeEventListener("message",t._handleMessage),window.removeEventListener("beforeunload",t.disconnect)),t._publicKey&&(t._publicKey=null,t.emit("disconnect")),t._responsePromises.forEach(function(e,o){var c=F(e,2);c[0];var u=c[1];t._responsePromises.delete(o),u("Wallet disconnected")})},t._sendRequest=function(e,o){return W(t,void 0,void 0,function(){var c,u=this;return k(this,function(i){if(e!=="connect"&&!this.connected)throw new Error("Wallet not connected");return c=this._nextRequestId,++this._nextRequestId,[2,new Promise(function(l,f){u._responsePromises.set(c,[l,f]),u._injectedProvider?u._injectedProvider.postMessage({jsonrpc:"2.0",id:c,method:e,params:K({network:u._network},o)}):(u._popup.postMessage({jsonrpc:"2.0",id:c,method:e,params:o},u._providerUrl.origin),u.autoApprove||u._popup.focus())})]})})},t.connect=function(){return t._popup&&t._popup.close(),t._handleConnect()},t.disconnect=function(){return W(t,void 0,void 0,function(){return k(this,function(e){switch(e.label){case 0:return this._injectedProvider?[4,this._sendRequest("disconnect",{})]:[3,2];case 1:e.sent(),e.label=2;case 2:return this._popup&&this._popup.close(),this._handleDisconnect(),[2]}})})},t.sign=function(e,o){return W(t,void 0,void 0,function(){var c,u,i;return k(this,function(l){switch(l.label){case 0:if(!(e instanceof Uint8Array))throw new Error("Data must be an instance of Uint8Array");return[4,this._sendRequest("sign",{data:e,display:o})];case 1:return c=l.sent(),u=v.decode(c.signature),i=new R(c.publicKey),[2,{signature:u,publicKey:i}]}})})},te(r))t._injectedProvider=r;else if(ne(r))t._providerUrl=new URL(r),t._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:n}).toString();else throw new Error("provider parameter must be an injected provider or a URL string.");return t._network=n,t._publicKey=null,t._autoApprove=!1,t._popup=null,t._handlerAdded=!1,t._nextRequestId=1,t._responsePromises=new Map,t}return Object.defineProperty(a.prototype,"publicKey",{get:function(){return this._publicKey},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"connected",{get:function(){return this._publicKey!==null},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"autoApprove",{get:function(){return this._autoApprove},enumerable:!1,configurable:!0}),a}(C);function ne(s){return typeof s=="string"}function te(s){return re(s)&&ie(s.postMessage)}function re(s){return typeof s=="object"&&s!==null}function ie(s){return typeof s=="function"}var oe=function(){var s=function(a,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},s(a,r)};return function(a,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(a,r);function n(){this.constructor=a}a.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),I=function(s,a,r,n){function t(e){return e instanceof r?e:new r(function(o){o(e)})}return new(r||(r=Promise))(function(e,o){function c(l){try{i(n.next(l))}catch(f){o(f)}}function u(l){try{i(n.throw(l))}catch(f){o(f)}}function i(l){l.done?e(l.value):t(l.value).then(c,u)}i((n=n.apply(s,a||[])).next())})},j=function(s,a){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},n,t,e,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(i){return function(l){return u([i,l])}}function u(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(r=0)),r;)try{if(n=1,t&&(e=i[0]&2?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[i[0]&2,e.value]),i[0]){case 0:case 1:e=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!e||i[1]>e[0]&&i[1]<e[3])){r.label=i[1];break}if(i[0]===6&&r.label<e[1]){r.label=e[1],e=i;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(i);break}e[2]&&r.ops.pop(),r.trys.pop();continue}i=a.call(s,r)}catch(l){i=[6,l],t=0}finally{n=e=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},ae=function(s){oe(a,s);function a(r,n,t){var e=s.call(this)||this;return e._instance=null,e.handleMessage=function(o){},e._sendRequest=function(o,c){return I(e,void 0,void 0,function(){var u,i;return j(this,function(l){switch(l.label){case 0:return!((u=this._instance)===null||u===void 0)&&u.sendRequest?[4,this._instance.sendRequest(o,c)]:[3,2];case 1:return[2,l.sent()];case 2:return!((i=this._instance)===null||i===void 0)&&i._sendRequest?[4,this._instance._sendRequest(o,c)]:[3,4];case 3:return[2,l.sent()];case 4:throw new Error("Unsupported version of `@project-serum/sol-wallet-adapter`")}})})},e._handleConnect=function(){e.emit("connect")},e._handleDisconnect=function(){window.clearInterval(e._pollTimer),e.emit("disconnect")},e._network=n,e._provider=t,e}return Object.defineProperty(a.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),a.prototype.connect=function(){return I(this,void 0,void 0,function(){var r=this;return j(this,function(n){switch(n.label){case 0:return this._instance=new ee(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval(function(){var t,e;((e=(t=r._instance)===null||t===void 0?void 0:t._popup)===null||e===void 0?void 0:e.closed)!==!1&&r._handleDisconnect()},200),[4,this._instance.connect()];case 1:return n.sent(),[2]}})})},a.prototype.disconnect=function(){return I(this,void 0,void 0,function(){return j(this,function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return r.sent(),[2]}})})},a.prototype.signTransaction=function(r){return I(this,void 0,void 0,function(){var n;return j(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signTransactionV2",{transaction:v.encode(r)})];case 1:return n=t.sent().transaction,[2,v.decode(n)]}})})},a.prototype.signAllTransactions=function(r){return I(this,void 0,void 0,function(){var n;return j(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAllTransactionsV2",{transactions:r.map(function(e){return v.encode(e)})})];case 1:return n=t.sent().transactions,[2,n.map(function(e){return v.decode(e)})]}})})},a.prototype.signAndSendTransaction=function(r,n){return I(this,void 0,void 0,function(){var t;return j(this,function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAndSendTransaction",{transaction:v.encode(r),options:n})];case 1:return t=e.sent(),[2,t.signature]}})})},a.prototype.signMessage=function(r,n){return n===void 0&&(n="hex"),I(this,void 0,void 0,function(){var t;return j(this,function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.sign(r,n)];case 1:return t=e.sent().signature,[2,Uint8Array.from(t)]}})})},a}(L),se=function(){var s=function(a,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},s(a,r)};return function(a,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(a,r);function n(){this.constructor=a}a.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),z=function(){return z=Object.assign||function(s){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(s[t]=a[t])}return s},z.apply(this,arguments)},O=function(s,a,r,n){function t(e){return e instanceof r?e:new r(function(o){o(e)})}return new(r||(r=Promise))(function(e,o){function c(l){try{i(n.next(l))}catch(f){o(f)}}function u(l){try{i(n.throw(l))}catch(f){o(f)}}function i(l){l.done?e(l.value):t(l.value).then(c,u)}i((n=n.apply(s,a||[])).next())})},T=function(s,a){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},n,t,e,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(i){return function(l){return u([i,l])}}function u(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(r=0)),r;)try{if(n=1,t&&(e=i[0]&2?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[i[0]&2,e.value]),i[0]){case 0:case 1:e=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!e||i[1]>e[0]&&i[1]<e[3])){r.label=i[1];break}if(i[0]===6&&r.label<e[1]){r.label=e[1],e=i;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(i);break}e[2]&&r.ops.pop(),r.trys.pop();continue}i=a.call(s,r)}catch(l){i=[6,l],t=0}finally{n=e=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},D=function(s){se(a,s);function a(r,n){var t=this,e;return t=s.call(this)||this,t._publicKey=null,t._messageHandlers={},t.handleMessage=function(o){if(t._messageHandlers[o.id]){var c=t._messageHandlers[o.id],u=c.resolve,i=c.reject;delete t._messageHandlers[o.id],o.error?i(o.error):u(o.result)}},t._sendMessage=function(o){if(!t.connected)throw new Error("Wallet not connected");return new Promise(function(c,u){var i,l,f=V();t._messageHandlers[f]={resolve:c,reject:u},(l=(i=t._iframe)===null||i===void 0?void 0:i.contentWindow)===null||l===void 0||l.postMessage({channel:"solflareWalletAdapterToIframe",data:z({id:f},o)},"*")})},t._iframe=r,t._publicKey=new R((e=n?.toString)===null||e===void 0?void 0:e.call(n)),t}return Object.defineProperty(a.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),a.prototype.connect=function(){return O(this,void 0,void 0,function(){return T(this,function(r){return[2]})})},a.prototype.disconnect=function(){return O(this,void 0,void 0,function(){return T(this,function(r){switch(r.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return r.sent(),[2]}})})},a.prototype.signTransaction=function(r){var n;return O(this,void 0,void 0,function(){var t,e;return T(this,function(o){switch(o.label){case 0:if(!this.connected)throw new Error("Wallet not connected");o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{transaction:v.encode(r)}})];case 2:return t=o.sent(),[2,v.decode(t)];case 3:throw e=o.sent(),new Error(((n=e?.toString)===null||n===void 0?void 0:n.call(e))||"Failed to sign transaction");case 4:return[2]}})})},a.prototype.signAllTransactions=function(r){var n;return O(this,void 0,void 0,function(){var t,e;return T(this,function(o){switch(o.label){case 0:if(!this.connected)throw new Error("Wallet not connected");o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{transactions:r.map(function(c){return v.encode(c)})}})];case 2:return t=o.sent(),[2,t.map(function(c){return v.decode(c)})];case 3:throw e=o.sent(),new Error(((n=e?.toString)===null||n===void 0?void 0:n.call(e))||"Failed to sign transactions");case 4:return[2]}})})},a.prototype.signAndSendTransaction=function(r,n){var t;return O(this,void 0,void 0,function(){var e,o;return T(this,function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAndSendTransaction",params:{transaction:v.encode(r),options:n}})];case 2:return e=c.sent(),[2,e];case 3:throw o=c.sent(),new Error(((t=o?.toString)===null||t===void 0?void 0:t.call(o))||"Failed to sign and send transaction");case 4:return[2]}})})},a.prototype.signMessage=function(r,n){var t;return n===void 0&&(n="hex"),O(this,void 0,void 0,function(){var e,o;return T(this,function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:r,display:n}})];case 2:return e=c.sent(),[2,Uint8Array.from(v.decode(e))];case 3:throw o=c.sent(),new Error(((t=o?.toString)===null||t===void 0?void 0:t.call(o))||"Failed to sign message");case 4:return[2]}})})},a}(L);function P(s){return s.version===void 0}var ce="1.4.2",le=function(){var s=function(a,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},s(a,r)};return function(a,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(a,r);function n(){this.constructor=a}a.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),M=function(){return M=Object.assign||function(s){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(s[t]=a[t])}return s},M.apply(this,arguments)},E=function(s,a,r,n){function t(e){return e instanceof r?e:new r(function(o){o(e)})}return new(r||(r=Promise))(function(e,o){function c(l){try{i(n.next(l))}catch(f){o(f)}}function u(l){try{i(n.throw(l))}catch(f){o(f)}}function i(l){l.done?e(l.value):t(l.value).then(c,u)}i((n=n.apply(s,a||[])).next())})},x=function(s,a){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},n,t,e,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(i){return function(l){return u([i,l])}}function u(i){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(r=0)),r;)try{if(n=1,t&&(e=i[0]&2?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[i[0]&2,e.value]),i[0]){case 0:case 1:e=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!e||i[1]>e[0]&&i[1]<e[3])){r.label=i[1];break}if(i[0]===6&&r.label<e[1]){r.label=e[1],e=i;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(i);break}e[2]&&r.ops.pop(),r.trys.pop();continue}i=a.call(s,r)}catch(l){i=[6,l],t=0}finally{n=e=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},ue=function(s){var a=typeof Symbol=="function"&&Symbol.iterator,r=a&&s[a],n=0;if(r)return r.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&n>=s.length&&(s=void 0),{value:s&&s[n++],done:!s}}};throw new TypeError(a?"Object is not iterable.":"Symbol.iterator is not defined.")},pe=function(s){le(a,s);function a(r){var n=s.call(this)||this;return n._network="mainnet-beta",n._provider=null,n._iframeParams={},n._adapterInstance=null,n._element=null,n._iframe=null,n._connectHandler=null,n._flutterHandlerInterval=null,n._handleEvent=function(t){var e,o,c,u;switch(t.type){case"connect_native_web":{n._collapseIframe(),n._adapterInstance=new ae(n._iframe,n._network,((e=t.data)===null||e===void 0?void 0:e.provider)||n._provider||"https://solflare.com/provider"),n._adapterInstance.on("connect",n._webConnected),n._adapterInstance.on("disconnect",n._webDisconnected),n._adapterInstance.connect(),n._setPreferredAdapter("native_web");return}case"connect":{n._collapseIframe(),n._adapterInstance=new D(n._iframe,((o=t.data)===null||o===void 0?void 0:o.publicKey)||""),n._adapterInstance.connect(),n._setPreferredAdapter((c=t.data)===null||c===void 0?void 0:c.adapter),n._connectHandler&&(n._connectHandler.resolve(),n._connectHandler=null),n.emit("connect",n.publicKey);return}case"disconnect":{n._connectHandler&&(n._connectHandler.reject(),n._connectHandler=null),n._disconnected(),n.emit("disconnect");return}case"accountChanged":{!((u=t.data)===null||u===void 0)&&u.publicKey?(n._adapterInstance=new D(n._iframe,t.data.publicKey),n._adapterInstance.connect(),n.emit("accountChanged",n.publicKey)):n.emit("accountChanged",void 0);return}case"collapse":{n._collapseIframe();return}default:return}},n._handleResize=function(t){t.resizeMode==="full"?t.params.mode==="fullscreen"?n._expandIframe():t.params.mode==="hide"&&n._collapseIframe():t.resizeMode==="coordinates"&&n._iframe&&(n._iframe.style.top=isFinite(t.params.top)?"".concat(t.params.top,"px"):"",n._iframe.style.bottom=isFinite(t.params.bottom)?"".concat(t.params.bottom,"px"):"",n._iframe.style.left=isFinite(t.params.left)?"".concat(t.params.left,"px"):"",n._iframe.style.right=isFinite(t.params.right)?"".concat(t.params.right,"px"):"",n._iframe.style.width=isFinite(t.params.width)?"".concat(t.params.width,"px"):t.params.width,n._iframe.style.height=isFinite(t.params.height)?"".concat(t.params.height,"px"):t.params.height)},n._handleMessage=function(t){var e;if(((e=t.data)===null||e===void 0?void 0:e.channel)==="solflareIframeToWalletAdapter"){var o=t.data.data||{};o.type==="event"?n._handleEvent(o.event):o.type==="resize"?n._handleResize(o):o.type==="response"&&n._adapterInstance&&n._adapterInstance.handleMessage(o)}},n._removeElement=function(){n._flutterHandlerInterval!==null&&(clearInterval(n._flutterHandlerInterval),n._flutterHandlerInterval=null),n._element&&(n._element.remove(),n._element=null)},n._removeDanglingElements=function(){var t,e,o=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var c=ue(o),u=c.next();!u.done;u=c.next()){var i=u.value;i.parentElement&&i.remove()}}catch(l){t={error:l}}finally{try{u&&!u.done&&(e=c.return)&&e.call(c)}finally{if(t)throw t.error}}},n._injectElement=function(){n._removeElement(),n._removeDanglingElements();var t=M(M({},n._iframeParams),{cluster:n._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||"",version:1,sdkVersion:ce}),e=n._getPreferredAdapter();e&&(t.adapter=e),n._provider&&(t.provider=n._provider);var o=Object.keys(t).map(function(u){return"".concat(u,"=").concat(encodeURIComponent(t[u]))}).join("&"),c="".concat(a.IFRAME_URL,"?").concat(o);n._element=document.createElement("div"),n._element.className="solflare-wallet-adapter-iframe",n._element.innerHTML=`
      <iframe src='`.concat(c,`' referrerPolicy='strict-origin-when-cross-origin' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `),document.body.appendChild(n._element),n._iframe=n._element.querySelector("iframe"),window.fromFlutter=n._handleMobileMessage,n._flutterHandlerInterval=setInterval(function(){window.fromFlutter=n._handleMobileMessage},100),window.addEventListener("message",n._handleMessage,!1)},n._collapseIframe=function(){n._iframe&&(n._iframe.style.top="",n._iframe.style.right="",n._iframe.style.height="2px",n._iframe.style.width="2px")},n._expandIframe=function(){n._iframe&&(n._iframe.style.top="0px",n._iframe.style.bottom="0px",n._iframe.style.left="0px",n._iframe.style.right="0px",n._iframe.style.width="100%",n._iframe.style.height="100%")},n._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},n._setPreferredAdapter=function(t){localStorage&&t&&localStorage.setItem("solflarePreferredWalletAdapter",t)},n._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},n._webConnected=function(){n._connectHandler&&(n._connectHandler.resolve(),n._connectHandler=null),n.emit("connect",n.publicKey)},n._webDisconnected=function(){n._connectHandler&&(n._connectHandler.reject(),n._connectHandler=null),n._disconnected(),n.emit("disconnect")},n._disconnected=function(){window.removeEventListener("message",n._handleMessage,!1),n._removeElement(),n._clearPreferredAdapter(),n._adapterInstance=null},n._handleMobileMessage=function(t){var e,o;(o=(e=n._iframe)===null||e===void 0?void 0:e.contentWindow)===null||o===void 0||o.postMessage({channel:"solflareMobileToIframe",data:t},"*")},r?.network&&(n._network=r?.network),r?.provider&&(n._provider=r?.provider),r?.params&&(n._iframeParams=M({},r?.params)),n}return Object.defineProperty(a.prototype,"publicKey",{get:function(){var r;return((r=this._adapterInstance)===null||r===void 0?void 0:r.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"isConnected",{get:function(){var r;return!!(!((r=this._adapterInstance)===null||r===void 0)&&r.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),a.prototype.connect=function(){return E(this,void 0,void 0,function(){var r=this;return x(this,function(n){switch(n.label){case 0:return this.connected?[2]:(this._injectElement(),[4,new Promise(function(t,e){r._connectHandler={resolve:t,reject:e}})]);case 1:return n.sent(),[2]}})})},a.prototype.disconnect=function(){return E(this,void 0,void 0,function(){return x(this,function(r){switch(r.label){case 0:return this._adapterInstance?[4,this._adapterInstance.disconnect()]:[2];case 1:return r.sent(),this._disconnected(),this.emit("disconnect"),[2]}})})},a.prototype.signTransaction=function(r){return E(this,void 0,void 0,function(){var n,t;return x(this,function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return n=P(r)?Uint8Array.from(r.serialize({verifySignatures:!1,requireAllSignatures:!1})):r.serialize(),[4,this._adapterInstance.signTransaction(n)];case 1:return t=e.sent(),[2,P(r)?q.from(t):H.deserialize(t)]}})})},a.prototype.signAllTransactions=function(r){return E(this,void 0,void 0,function(){var n,t;return x(this,function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return n=r.map(function(o){return P(o)?Uint8Array.from(o.serialize({verifySignatures:!1,requireAllSignatures:!1})):o.serialize()}),[4,this._adapterInstance.signAllTransactions(n)];case 1:if(t=e.sent(),t.length!==r.length)throw new Error("Failed to sign all transactions");return[2,t.map(function(o,c){return P(r[c])?q.from(o):H.deserialize(o)})]}})})},a.prototype.signAndSendTransaction=function(r,n){return E(this,void 0,void 0,function(){var t;return x(this,function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return t=P(r)?r.serialize({verifySignatures:!1,requireAllSignatures:!1}):r.serialize(),[4,this._adapterInstance.signAndSendTransaction(t,n)];case 1:return[2,e.sent()]}})})},a.prototype.signMessage=function(r,n){return n===void 0&&(n="utf8"),E(this,void 0,void 0,function(){return x(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signMessage(r,n)];case 1:return[2,t.sent()]}})})},a.prototype.sign=function(r,n){return n===void 0&&(n="utf8"),E(this,void 0,void 0,function(){return x(this,function(t){switch(t.label){case 0:return[4,this.signMessage(r,n)];case 1:return[2,t.sent()]}})})},a.prototype.detectWallet=function(r){var n;return r===void 0&&(r=10),E(this,void 0,void 0,function(){return x(this,function(t){return window.SolflareApp||!((n=window.solflare)===null||n===void 0)&&n.isSolflare?[2,!0]:[2,new Promise(function(e){var o,c;o=setInterval(function(){var u;(window.SolflareApp||!((u=window.solflare)===null||u===void 0)&&u.isSolflare)&&(clearInterval(o),clearTimeout(c),e(!0))},500),c=setTimeout(function(){clearInterval(o),e(!1)},r*1e3)})]})})},a.IFRAME_URL="https://connect.solflare.com/",a}(C);export{pe as default};
