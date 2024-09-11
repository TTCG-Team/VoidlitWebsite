import{n as m,M as _,a as K}from"./interface.C1kDhPUh.js";import{b as l,s as z,r as Y,a8 as A,K as G}from"./index.browser.esm.-7-YfEcu.js";import{u as S,p as U}from"./binary-layout.B-VkPcB9.js";import{o as W,g as R,i as J,l as Q,n as Z,S as X,h as V,s as ee,r as te,t as re,k as ne}from"./throttleTime.B_M5ddZq.js";function ie(e,t){return W(function(n,r){var i=0,s=null,a=!1;n.subscribe(R(r,function(f){s||(s=R(r,void 0,function(){s=null,a&&r.complete()}),J(e(f,i++)).subscribe(s))},function(){a=!0,!s&&r.complete()}))})}function I(e){let t=BigInt(1);for(let n=0;n<e.length;n++){const r=BigInt(e[n]);if(r!=0n){t=t*(256n-r);break}else t=t*256n}return t}class H extends Error{constructor(t,n){super(n),this.name=t}}async function se(e,t,n){const r=new Uint8Array(e.length+t.length+n.length);r.set(e,0),r.set(t,e.length),r.set(n,e.length+t.length);const i=await crypto.subtle.digest("SHA-256",r),s=new Uint8Array(i);return I(s)}async function oe(e,t){const n=l.Buffer.from(e.ip),r=l.Buffer.alloc(8);r.writeBigUInt64LE(e.acc_value);const i=l.Buffer.concat([e.miner,e.referrer,n,r,e.random_bytes,t]),s=await crypto.subtle.digest("SHA-256",i),a=new Uint8Array(s);return I(a)}async function ae(e,t,n,r){const i=n/1e4|0;for(let s=0;s<5e4;s++){r(Math.min(s/1e4*100,99.99));for(let a=0;a<i;a++){let f=m.randomBytes(8);if(await se(e,t,f)>=n)return r(100),console.log(`mine ${s*i+a} times`),{last_state:{type:0,miner:e,referrer:t},nonce:l.Buffer.from(f)}}}throw new H("failed_init","failed to init mining state.")}async function fe(e,t,n){const r=t/1e4|0;let i=0n,s=m.randomBytes(8);for(let a=0;a<1e4;a++){n(Math.min(a/1e4*100,99.99));for(let f=0;f<r;f++){let o=m.randomBytes(8),c=await oe(e,o);if(c>=t)return n(100),console.log(`mine ${a*r+f} times`),{last_state:e,nonce:l.Buffer.from(o)};c>i&&(i=c,s=o)}}return n(100),console.log("mine failed"),{last_state:e,nonce:l.Buffer.from(s)}}const ue=e=>new TextEncoder().encode(e);var ce=typeof l.Buffer<"u"&&l.Buffer.from?function(e){return l.Buffer.from(e,"utf8")}:ue;function g(e){return e instanceof Uint8Array?e:typeof e=="string"?ce(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(e)}function B(e){return typeof e=="string"?e.length===0:e.byteLength===0}var P={name:"SHA-256"},L={name:"HMAC",hash:P},le=new Uint8Array([227,176,196,66,152,252,28,20,154,251,244,200,153,111,185,36,39,174,65,228,100,155,147,76,164,149,153,27,120,82,184,85]);const he={};function w(){return typeof window<"u"?window:typeof self<"u"?self:he}var de=function(){function e(t){this.toHash=new Uint8Array(0),this.secret=t,this.reset()}return e.prototype.update=function(t){if(!B(t)){var n=g(t),r=new Uint8Array(this.toHash.byteLength+n.byteLength);r.set(this.toHash,0),r.set(n,this.toHash.byteLength),this.toHash=r}},e.prototype.digest=function(){var t=this;return this.key?this.key.then(function(n){return w().crypto.subtle.sign(L,n,t.toHash).then(function(r){return new Uint8Array(r)})}):B(this.toHash)?Promise.resolve(le):Promise.resolve().then(function(){return w().crypto.subtle.digest(P,t.toHash)}).then(function(n){return Promise.resolve(new Uint8Array(n))})},e.prototype.reset=function(){var t=this;this.toHash=new Uint8Array(0),this.secret&&this.secret!==void 0&&(this.key=new Promise(function(n,r){w().crypto.subtle.importKey("raw",g(t.secret),L,!1,["sign"]).then(n,r)}),this.key.catch(function(){}))},e}(),d=64,be=32,pe=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ye=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],me=Math.pow(2,53)-1,v=function(){function e(){this.state=Int32Array.from(ye),this.temp=new Int32Array(64),this.buffer=new Uint8Array(64),this.bufferLength=0,this.bytesHashed=0,this.finished=!1}return e.prototype.update=function(t){if(this.finished)throw new Error("Attempted to update an already finished hash.");var n=0,r=t.byteLength;if(this.bytesHashed+=r,this.bytesHashed*8>me)throw new Error("Cannot hash more than 2^53 - 1 bits");for(;r>0;)this.buffer[this.bufferLength++]=t[n++],r--,this.bufferLength===d&&(this.hashBuffer(),this.bufferLength=0)},e.prototype.digest=function(){if(!this.finished){var t=this.bytesHashed*8,n=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),r=this.bufferLength;if(n.setUint8(this.bufferLength++,128),r%d>=d-8){for(var i=this.bufferLength;i<d;i++)n.setUint8(i,0);this.hashBuffer(),this.bufferLength=0}for(var i=this.bufferLength;i<d-8;i++)n.setUint8(i,0);n.setUint32(d-8,Math.floor(t/4294967296),!0),n.setUint32(d-4,t),this.hashBuffer(),this.finished=!0}for(var s=new Uint8Array(be),i=0;i<8;i++)s[i*4]=this.state[i]>>>24&255,s[i*4+1]=this.state[i]>>>16&255,s[i*4+2]=this.state[i]>>>8&255,s[i*4+3]=this.state[i]>>>0&255;return s},e.prototype.hashBuffer=function(){for(var t=this,n=t.buffer,r=t.state,i=r[0],s=r[1],a=r[2],f=r[3],o=r[4],c=r[5],b=r[6],y=r[7],u=0;u<d;u++){if(u<16)this.temp[u]=(n[u*4]&255)<<24|(n[u*4+1]&255)<<16|(n[u*4+2]&255)<<8|n[u*4+3]&255;else{var h=this.temp[u-2],$=(h>>>17|h<<15)^(h>>>19|h<<13)^h>>>10;h=this.temp[u-15];var j=(h>>>7|h<<25)^(h>>>18|h<<14)^h>>>3;this.temp[u]=($+this.temp[u-7]|0)+(j+this.temp[u-16]|0)}var O=(((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))+(o&c^~o&b)|0)+(y+(pe[u]+this.temp[u]|0)|0)|0,F=((i>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10))+(i&s^i&a^s&a)|0;y=b,b=c,c=o,o=f+O|0,f=a,a=s,s=i,i=O+F|0}r[0]+=i,r[1]+=s,r[2]+=a,r[3]+=f,r[4]+=o,r[5]+=c,r[6]+=b,r[7]+=y},e}(),ge=function(){function e(t){this.secret=t,this.hash=new v,this.reset()}return e.prototype.update=function(t){if(!(B(t)||this.error))try{this.hash.update(g(t))}catch(n){this.error=n}},e.prototype.digestSync=function(){if(this.error)throw this.error;return this.outer?(this.outer.finished||this.outer.update(this.hash.digest()),this.outer.digest()):this.hash.digest()},e.prototype.digest=function(){return Q(this,void 0,void 0,function(){return Z(this,function(t){return[2,this.digestSync()]})})},e.prototype.reset=function(){if(this.hash=new v,this.secret){this.outer=new v;var t=_e(this.secret),n=new Uint8Array(d);n.set(t);for(var r=0;r<d;r++)t[r]^=54,n[r]^=92;this.hash.update(t),this.outer.update(n);for(var r=0;r<t.byteLength;r++)t[r]=0}},e}();function _e(e){var t=g(e);if(t.byteLength>d){var n=new v;n.update(t),t=n.digest()}var r=new Uint8Array(d);return r.set(t),r}var xe=["decrypt","digest","encrypt","exportKey","generateKey","importKey","sign","verify"];function we(e){if(ve(e)&&typeof e.crypto.subtle=="object"){var t=e.crypto.subtle;return Ee(t)}return!1}function ve(e){if(typeof e=="object"&&typeof e.crypto=="object"){var t=e.crypto.getRandomValues;return typeof t=="function"}return!1}function Ee(e){return e&&xe.every(function(t){return typeof e[t]=="function"})}var Ae=function(){function e(t){we(w())?this.hash=new de(t):this.hash=new ge(t)}return e.prototype.update=function(t,n){this.hash.update(g(t))},e.prototype.digest=function(){return this.hash.digest()},e.prototype.reset=function(){this.hash.reset()},e}();function Se(e){let t=new Ae;if(e.type==0)t.update(e.miner),t.update(e.referrer);else{let n=l.Buffer.alloc(8);n.writeBigUInt64LE(e.acc_value),t.update(e.miner),t.update(e.referrer),t.update(e.ip),t.update(n),t.update(e.random_bytes)}return t}async function Te(e,t){if(e.type!=0){let n=await Se(e).digest(),r=e.server_sig;if(!m.sign.detached.verify(n,r,t))throw new H("state_verify_failed","You last minig state verify failed.")}}function Be(e){return e}function ke(e){return e.length===0?Be:e.length===1?e[0]:function(n){return e.reduce((r,i)=>i(r),n)}}function q(e){const t={subscribe(n){let r=null,i=!1,s=!1,a=!1;function f(){if(r===null){a=!0;return}s||(s=!0,typeof r=="function"?r():r&&r.unsubscribe())}return r=e({next(o){i||n.next?.(o)},error(o){i||(i=!0,n.error?.(o),f())},complete(){i||(i=!0,n.complete?.(),f())}}),a&&f(),{unsubscribe:f}},pipe(...n){return ke(n)(t)}};return t}function Oe(e){return t=>{let n=0,r=null;const i=[];function s(){r||(r=t.subscribe({next(f){for(const o of i)o.next?.(f)},error(f){for(const o of i)o.error?.(f)},complete(){for(const f of i)f.complete?.()}}))}function a(){if(n===0&&r){const f=r;r=null,f.unsubscribe()}}return{subscribe(f){return n++,i.push(f),s(),{unsubscribe(){n--,a();const o=i.findIndex(c=>c===f);o>-1&&i.splice(o,1)}}}}}}class k extends Error{constructor(t){super(t),this.name="ObservableAbortError",Object.setPrototypeOf(this,k.prototype)}}function Ue(e){let t;return{promise:new Promise((r,i)=>{let s=!1;function a(){s||(s=!0,i(new k("This operation was aborted.")),f.unsubscribe())}const f=e.subscribe({next(o){s=!0,r(o),a()},error(o){s=!0,i(o),a()},complete(){s=!0,a()}});t=a}),abort:t}}function Re(e){return q(t=>{function n(i=0,s=e.op){const a=e.links[i];if(!a)throw new Error("No more links to execute - did you forget to add an ending link?");return a({op:s,next(o){return n(i+1,o)}})}return n().subscribe(t)})}function M(e){const t=Object.create(null);for(const n in e){const r=e[n];t[r]=n}return t}const N={PARSE_ERROR:-32700,BAD_REQUEST:-32600,INTERNAL_SERVER_ERROR:-32603,NOT_IMPLEMENTED:-32603,UNAUTHORIZED:-32001,FORBIDDEN:-32003,NOT_FOUND:-32004,METHOD_NOT_SUPPORTED:-32005,TIMEOUT:-32008,CONFLICT:-32009,PRECONDITION_FAILED:-32012,PAYLOAD_TOO_LARGE:-32013,UNPROCESSABLE_CONTENT:-32022,TOO_MANY_REQUESTS:-32029,CLIENT_CLOSED_REQUEST:-32099};M(N);M(N);function Le(e){return!!e&&!Array.isArray(e)&&typeof e=="object"}class Ce extends Error{}function Ie(e){if(e instanceof Error)return e;const t=typeof e;if(!(t==="undefined"||t==="function"||e===null)){if(t!=="object")return new Error(String(e));if(Le(e)){const n=new Ce;for(const r in e)n[r]=e[r];return n}}}function E(e){return!!e&&!Array.isArray(e)&&typeof e=="object"}function He(e,t){if("error"in e){const r=t.transformer.deserialize(e.error);return{ok:!1,error:{...e,error:r}}}return{ok:!0,result:{...e.result,...(!e.result.type||e.result.type==="data")&&{type:"data",data:t.transformer.deserialize(e.result.data)}}}}class T extends Error{constructor(){super("Unable to transform response from server")}}function Pe(e,t){let n;try{n=He(e,t)}catch{throw new T}if(!n.ok&&(!E(n.error.error)||typeof n.error.error.code!="number"))throw new T;if(n.ok&&!E(n.result))throw new T;return n}function qe(e){return e instanceof p||e instanceof Error&&e.name==="TRPCClientError"}function Me(e){return E(e)&&E(e.error)&&typeof e.error.code=="number"&&typeof e.error.message=="string"}class p extends Error{static from(t,n={}){const r=t;return qe(r)?(n.meta&&(r.meta={...r.meta,...n.meta}),r):Me(r)?new p(r.error.message,{...n,result:r}):r instanceof Error?new p(r.message,{...n,cause:Ie(r)}):new p("Unknown error",{...n,cause:r})}constructor(t,n){const r=n?.cause;super(t,{cause:r}),this.meta=n?.meta,this.cause=r,this.shape=n?.result?.error,this.data=n?.result?.error.data,this.name="TRPCClientError",Object.setPrototypeOf(this,p.prototype)}}const C=e=>typeof e=="function";function Ne(e){if(e)return e;if(typeof window<"u"&&C(window.fetch))return window.fetch;if(typeof globalThis<"u"&&C(globalThis.fetch))return globalThis.fetch;throw new Error("No fetch implementation found")}function De(e){return e||(typeof window<"u"&&window.AbortController?window.AbortController:typeof globalThis<"u"&&globalThis.AbortController?globalThis.AbortController:null)}function $e(e){return{url:e.url.toString().replace(/\/$/,""),fetch:e.fetch,AbortController:De(e.AbortController)}}function je(e){const t={};for(let n=0;n<e.length;n++){const r=e[n];t[n]=r}return t}const Fe={query:"GET",mutation:"POST"};function D(e){return"input"in e?e.runtime.transformer.serialize(e.input):je(e.inputs.map(t=>e.runtime.transformer.serialize(t)))}const Ke=e=>{let t=e.url+"/"+e.path;const n=[];if("inputs"in e&&n.push("batch=1"),e.type==="query"){const r=D(e);r!==void 0&&n.push(`input=${encodeURIComponent(JSON.stringify(r))}`)}return n.length&&(t+="?"+n.join("&")),t},ze=e=>{if(e.type==="query")return;const t=D(e);return t!==void 0?JSON.stringify(t):void 0},Ye=e=>We({...e,contentTypeHeader:"application/json",getUrl:Ke,getBody:ze});async function Ge(e,t){const n=e.getUrl(e),r=e.getBody(e),{type:i}=e,s=await e.headers();/* istanbul ignore if -- @preserve */if(i==="subscription")throw new Error("Subscriptions should use wsLink");const a={...e.contentTypeHeader?{"content-type":e.contentTypeHeader}:{},...e.batchModeHeader?{"trpc-batch-mode":e.batchModeHeader}:{},...s};return Ne(e.fetch)(n,{method:Fe[i],signal:t?.signal,body:r,headers:a})}function We(e){const t=e.AbortController?new e.AbortController:null,n={};let r=!1;return{promise:new Promise((a,f)=>{Ge(e,t).then(o=>(n.response=o,r=!0,o.json())).then(o=>{n.responseJSON=o,a({json:o,meta:n})}).catch(o=>{r=!0,f(p.from(o,{meta:n}))})}),cancel:()=>{r||t?.abort()}}}function Je(e){return t=>{const n=$e(t);return r=>({op:i})=>q(s=>{const{path:a,input:f,type:o}=i,{promise:c,cancel:b}=e.requester({...n,runtime:r,type:o,path:a,input:f,headers(){return t.headers?typeof t.headers=="function"?t.headers({op:i}):t.headers:{}}});let y;return c.then(u=>{y=u.meta;const h=Pe(u.json,r);if(!h.ok){s.error(p.from(h.error,{meta:y}));return}s.next({context:u.meta,result:h.result}),s.complete()}).catch(u=>{s.error(p.from(u,{meta:y}))}),()=>{b()}})}}const Qe=Je({requester:Ye});class Ze{$request({type:t,input:n,path:r,context:i={}}){return Re({links:this.links,op:{id:++this.requestId,type:t,path:r,input:n,context:i}}).pipe(Oe())}requestAsPromise(t){const n=this.$request(t),{promise:r,abort:i}=Ue(n);return new Promise((a,f)=>{t.signal?.addEventListener("abort",i),r.then(o=>{a(o.result.data)}).catch(o=>{f(p.from(o))})})}query(t,n,r){return this.requestAsPromise({type:"query",path:t,input:n,context:r?.context,signal:r?.signal})}mutation(t,n,r){return this.requestAsPromise({type:"mutation",path:t,input:n,context:r?.context,signal:r?.signal})}subscription(t,n,r){return this.$request({type:"subscription",path:t,input:n,context:r?.context}).subscribe({next(s){s.result.type==="started"?r.onStarted?.():s.result.type==="stopped"?r.onStopped?.():r.onData?.(s.result.data)},error(s){r.onError?.(s)},complete(){r.onComplete?.()}})}constructor(t){this.requestId=0;const n=(()=>{const r=t.transformer;return r?"input"in r?t.transformer:{input:r,output:r}:{input:{serialize:i=>i,deserialize:i=>i},output:{serialize:i=>i,deserialize:i=>i}}})();this.runtime={transformer:{serialize:r=>n.input.serialize(r),deserialize:r=>n.output.deserialize(r)},combinedTransformer:n},this.links=t.links.map(r=>r(this.runtime))}}function Xe(e){return new Ze(e)}Xe({links:[Qe({url:"https://ttcg.readasync.com"})]});async function Ve(e){return"deprecated"}async function et(e,t){}async function ot(){return(await fetch("https://raw.githubusercontent.com/TTCG-Team/miners-leaderboard/main/ranks.json")).json()}const x=256*256*100;class tt extends Error{constructor(t,n,r){super(n),this.recover=r,this.name=t}}class at{keypair=z(null);running=Y(!1);state=null;referrer;logs=[];target_diff=x;mining_sub=null;minig_req$=new X;analysis_sub=null;progress_cb=()=>{};logs_cb=()=>{};current_value_cb=()=>{};setReferrer(t){this.referrer||(this.referrer=new A(t).toBuffer(),localStorage.setItem("invite_page",t))}_inner_setReferrer(t){if(this.referrer)return!1;let n=new A(t).toBuffer();return this.keypair.value&&this.keypair.value.publicKey.toBuffer().equals(n)?!1:(this.referrer=n,!0)}getPubkey(){if(this.keypair.value)return this.keypair.value.publicKey.toBase58();throw new Error("mount keypair at first.")}setCallbacks(t,n,r){this.progress_cb=t,this.logs_cb=n,this.current_value_cb=r}toggle(){this.running.value=!this.running.value,this.progress_cb(0)}mount(){let t=localStorage.getItem("miner-target-diff");t&&(this.target_diff=parseInt(t)||x);let n=localStorage.getItem("miner-seed");n||(n=l.Buffer.from(m.randomBytes(32)).toString("base64"),localStorage.setItem("miner-seed",n));let r=l.Buffer.from(n,"base64");if(r.length!=32)throw new tt("Unexpected Miner Seed","Your miner seed in localstorage is unexpected, save it, or just delete.","handle_miner_seed");this.keypair.value=G.fromSeed(r),console.log("miner pubkey",this.keypair.value.publicKey.toBase58());let i=localStorage.getItem("miner-state");if(!i)this.init_state();else{let a=l.Buffer.from(i,"base64");this.state=S(a,_)}this.state.type==1&&(this.referrer=this.state.referrer);let s=localStorage.getItem("invite_page");s&&(this.referrer=new A(s).toBuffer(),this.state.referrer.equals(this.referrer)||(this.state.type==0&&this.state.referrer.equals(l.Buffer.alloc(32))&&(this.state.referrer=this.referrer),this.state.type==1&&this.state.referrer.equals(l.Buffer.alloc(32))&&et(this.state.miner,this.referrer)))}start$(){this.progress_cb(0),this.current_value_cb(this.state.acc_value||0),this.logs_cb(this.logs),this.mining_sub=V(5e3).pipe(ee(0),ie(()=>this.running.value&&this.state?this.tryToMine():ne(0)),te({delay:5*1e3})).subscribe(),this.analysis_sub=this.minig_req$.pipe(re(1e3*60*60*2)).subscribe(t=>{Ve()})}drop$(){this.mining_sub?.unsubscribe(),this.analysis_sub?.unsubscribe()}async tryToMine(){console.log("try to mine");let t=this.state.type==0?await ae(this.state.miner,this.state.referrer,x,this.progress_cb):await fe(this.state,this.target_diff,this.progress_cb),n=U(t,K);const r=new Blob([n],{type:"application/octet-stream"}),i=await fetch("https://miner.ttcg.workers.dev",{method:"POST",body:r,headers:{"Content-Type":"application/octet-stream"}});if(this.update_diff(i),i.ok){this.minig_req$.next(t);let s=await i.blob(),a=l.Buffer.from(await s.arrayBuffer()),f=S(a,_);{this.current_value_cb(f.acc_value);let c=f.acc_value-(this.state.acc_value||0n);c=c>0n?c:0n,this.logs.push({timestamp:Date.now(),value:c});let b=this.logs.length;b>10&&(this.logs=this.logs.slice(b-10,b-1)),this.logs_cb(this.logs)}this.state=f;let o=a.toString("base64");localStorage.setItem("miner-state",o)}else{let s=await i.text();console.log("error",i.status,s);let a=l.Buffer.from(i.headers.get("Server-Pub"),"base64");Te(this.state,a).catch(f=>{f.name=="state_verify_failed"&&(console.log("server sig verify failed, reset state",a),this.init_state())})}}init_state(){let t={type:0,miner:this.keypair.value.publicKey.toBuffer(),referrer:l.Buffer.alloc(32)},n=U(t,_);localStorage.setItem("miner-state",n.toString("base64")),this.state=S(n,_),this.logs=[],this.current_value_cb(0n),this.logs_cb([])}update_diff(t){let n=t.headers.get("Target-Diff");n&&(this.target_diff=parseInt(n)||x,localStorage.setItem("miner-target-diff",this.target_diff.toString()))}}export{at as M,ot as g};
