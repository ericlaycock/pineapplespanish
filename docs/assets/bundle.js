!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return a}),n.d(t,"b",function(){return T}),n.d(t,"c",function(){return w}),n.d(t,"d",function(){return o}),n.d(t,"e",function(){return s}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return A}),n.d(t,"h",function(){return I}),n.d(t,"i",function(){return x}),n.d(t,"j",function(){return L}),n.d(t,"k",function(){return c}),n.d(t,"l",function(){return h}),n.d(t,"m",function(){return f}),n.d(t,"n",function(){return _}),n.d(t,"o",function(){return p}),n.d(t,"p",function(){return v}),n.d(t,"q",function(){return u}),n.d(t,"r",function(){return d}),n.d(t,"s",function(){return m}),n.d(t,"t",function(){return g}),n.d(t,"u",function(){return U}),n.d(t,"v",function(){return S}),n.d(t,"w",function(){return C}),n.d(t,"x",function(){return y});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,a=++t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const l=r<<2|s>>4;if(i.push(l),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){return function(e){const t=i(e);return r.encodeByteArray(t,!0)}(e).replace(/\./g,"")},o=function(e){try{return r.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(){this.reject=(()=>{}),this.resolve=(()=>{}),this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[s(JSON.stringify({alg:"none",type:"JWT"})),s(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function u(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function h(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function d(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function f(){return c().indexOf("Electron/")>=0}function p(){const e=c();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function g(){return c().indexOf("MSAppHost/")>=0}function m(){return!function(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v(){return"object"==typeof indexedDB}function y(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=(()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)}),r.onupgradeneeded=(()=>{n=!1}),r.onerror=(()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")})}catch(e){t(e)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b="FirebaseError";class w extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=b,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(E,(e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`})}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new w(i,o,n)}}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function I(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(k(n)&&k(s)){if(!I(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function k(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function C(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}}),t}function x(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){const n=new O(e,t);return n.subscribe.bind(n)}class O{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(i.next=N),void 0===i.error&&(i.error=N),void 0===i.complete&&(i.complete=N);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}}),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function N(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){return new Promise((n,i)=>{e.onsuccess=(e=>{n(e.target.result)}),e.onerror=(e=>{var n;i(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)})})}class D{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new P(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new j(this._db.createObjectStore(e,t))}close(){this._db.close()}}class P{constructor(e){this._transaction=e,this.complete=new Promise((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=(()=>{t(this._transaction.error)}),this._transaction.onabort=(()=>{t(this._transaction.error)})})}objectStore(e){return new j(this._transaction.objectStore(e))}}class j{constructor(e){this._store=e}index(e){return new M(this._store.index(e))}createIndex(e,t,n){return new M(this._store.createIndex(e,t,n))}get(e){return R(this._store.get(e),"Error reading from IndexedDB")}put(e,t){return R(this._store.put(e,t),"Error writing to IndexedDB")}delete(e){return R(this._store.delete(e),"Error deleting from IndexedDB")}clear(){return R(this._store.clear(),"Error clearing IndexedDB object store")}}class M{constructor(e){this._index=e}get(e){return R(this._index.get(e),"Error reading from IndexedDB")}}function U(e,t,n){return new Promise((i,r)=>{try{const s=indexedDB.open(e,t);s.onsuccess=(e=>{i(new D(e.target.result))}),s.onerror=(e=>{var t;r(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)}),s.onupgradeneeded=(e=>{n(new D(s.result),e.oldVersion,e.newVersion,new P(s.transaction))})}catch(e){r(`Error opening indexedDB: ${e.message}`)}})}}).call(this,n(6))},function(e,t,n){"use strict";n.d(t,"a",function(){return T}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return g}),n.d(t,"d",function(){return v}),n.d(t,"e",function(){return _}),n.d(t,"f",function(){return E}),n.d(t,"g",function(){return I});var i=n(4),r=n(2),s=n(0);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const a="@firebase/app",l="0.7.22",c=new r.b("@firebase/app"),u="[DEFAULT]",h={[a]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},d=new Map,f=new Map;function p(e,t){try{e.container.addComponent(t)}catch(n){c.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function g(e){const t=e.name;if(f.has(t))return c.debug(`There were multiple attempts to register component ${t}.`),!1;f.set(t,e);for(const t of d.values())p(t,e);return!0}function m(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function v(e,t,n=u){m(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const y={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},b=new s.b("app","Firebase",y);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T="9.7.0";function E(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:u,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw b.create("bad-app-name",{appName:String(r)});const o=d.get(r);if(o){if(Object(s.h)(e,o.options)&&Object(s.h)(n,o.config))return o;throw b.create("duplicate-app",{appName:r})}const a=new i.b(r);for(const e of f.values())a.addComponent(e);const l=new w(e,n,a);return d.set(r,l),l}function _(e=u){const t=d.get(e);if(!t)throw b.create("no-app",{appName:e});return t}function I(e,t,n){var r;let s=null!==(r=h[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void c.warn(e.join(" "))}g(new i.a(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const k="firebase-heartbeat-database",S=1,C="firebase-heartbeat-store";let x=null;function A(){return x||(x=Object(s.u)(k,S,(e,t)=>{switch(t){case 0:e.createObjectStore(C)}}).catch(e=>{throw b.create("storage-open",{originalErrorMessage:e.message})})),x}async function O(e,t){try{const n=(await A()).transaction(C,"readwrite"),i=n.objectStore(C);return await i.put(t,N(e)),n.complete}catch(e){throw b.create("storage-set",{originalErrorMessage:e.message})}}function N(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=1024,R=2592e6;class D{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new j(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=P();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some(e=>e.date===t))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=R}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=P(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=L){const n=[];let i=e.slice();for(const r of e){const e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),M(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),M(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Object(s.e)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function P(){return(new Date).toISOString().substring(0,10)}class j{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s.p)()&&Object(s.x)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await A()).transaction(C).objectStore(C).get(N(e))}catch(e){throw b.create("storage-get",{originalErrorMessage:e.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return O(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return O(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function M(e){return Object(s.e)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){g(new i.a("platform-logger",e=>new o(e),"PRIVATE")),g(new i.a("heartbeat",e=>new D(e),"PRIVATE")),I(a,l,e),I(a,l,"esm2017"),I("fire-js","")}("")},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return h});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function u(e){i.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of i){let i=null;t&&t.level&&(i=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!==i&&void 0!==i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:s,type:t.name})}}}},function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return ni}),n.d(t,"b",function(){return ri}),n.d(t,"c",function(){return ii}),n.d(t,"d",function(){return oi}),n.d(t,"e",function(){return si}),n.d(t,"f",function(){return ai}),n.d(t,"g",function(){return li}),n.d(t,"h",function(){return ei}),n.d(t,"i",function(){return ti});var i,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},s={},o=o||{},a=r||self;function l(){}function c(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function u(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var h="closure_uid_"+(1e9*Math.random()>>>0),d=0;function f(e,t,n){return e.call.apply(e.bind,arguments)}function p(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function g(e,t,n){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:p).apply(null,arguments)}function m(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function v(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function y(){this.s=this.s,this.o=this.o}var b={};y.prototype.s=!1,y.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,h)&&e[h]||(e[h]=++d)}(this);delete b[e]}},y.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},T=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const i=e.length,r="string"==typeof e?e.split(""):e;for(let s=0;s<i;s++)s in r&&t.call(n,r[s],s,e)};function E(e){return Array.prototype.concat.apply([],arguments)}function _(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function I(e){return/^[\s\xa0]*$/.test(e)}var k,S=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function C(e,t){return-1!=e.indexOf(t)}function x(e,t){return e<t?-1:e>t?1:0}e:{var A=a.navigator;if(A){var O=A.userAgent;if(O){k=O;break e}}k=""}function N(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function L(e){const t={};for(const n in e)t[n]=e[n];return t}var R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t])e[n]=i[n];for(let t=0;t<R.length;t++)n=R[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function P(e){return P[" "](e),e}P[" "]=l;var j,M=C(k,"Opera"),U=C(k,"Trident")||C(k,"MSIE"),H=C(k,"Edge"),F=H||U,q=C(k,"Gecko")&&!(C(k.toLowerCase(),"webkit")&&!C(k,"Edge"))&&!(C(k,"Trident")||C(k,"MSIE"))&&!C(k,"Edge"),z=C(k.toLowerCase(),"webkit")&&!C(k,"Edge");function B(){var e=a.document;return e?e.documentMode:void 0}e:{var V="",$=function(){var e=k;return q?/rv:([^\);]+)(\)|;)/.exec(e):H?/Edge\/([\d\.]+)/.exec(e):U?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):z?/WebKit\/(\S+)/.exec(e):M?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if($&&(V=$?$[1]:""),U){var W=B();if(null!=W&&W>parseFloat(V)){j=String(W);break e}}j=V}var G,K={};function X(){return function(e){var t=K;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}(function(){let e=0;const t=S(String(j)).split("."),n=S("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=x(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||x(0==r[2].length,0==s[2].length)||x(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e})}if(a.document&&U){var J=B();G=J||(parseInt(j,10)||void 0)}else G=void 0;var Y=G,Q=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",l,t),a.removeEventListener("test",l,t)}catch(e){}return e}();function Z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ee(e,t){if(Z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(q){e:{try{P(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:te[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ee.Z.h.call(this)}}Z.prototype.h=function(){this.defaultPrevented=!0},v(ee,Z);var te={2:"touch",3:"pen",4:"mouse"};ee.prototype.h=function(){ee.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ne="closure_listenable_"+(1e6*Math.random()|0),ie=0;function re(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function se(e){this.src=e,this.g={},this.h=0}function oe(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=w(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(re(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ae(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==i)return r}return-1}se.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=ae(e,t,i,r);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new function(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ia=r,this.key=++ie,this.ca=this.fa=!1}(t,this.src,s,!!i,r)).fa=n,e.push(t)),t};var le="closure_lm_"+(1e6*Math.random()|0),ce={};function ue(e,t,n,i,r){if(i&&i.once)return function e(t,n,i,r,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],i,r,s);return null}i=ve(i);return t&&t[ne]?t.O(n,i,u(r)?!!r.capture:!!r,s):he(t,n,i,!0,r,s)}(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ue(e,t[s],n,i,r);return null}return n=ve(n),e&&e[ne]?e.N(t,n,u(i)?!!i.capture:!!i,r):he(e,t,n,!1,i,r)}function he(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=u(r)?!!r.capture:!!r,a=ge(e);if(a||(e[le]=a=new se(e)),(n=a.add(t,n,i,o,s)).proxy)return n;if(i=function(){var e=pe;return function t(n){return e.call(t.src,t.listener,n)}}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Q||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(fe(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function de(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[ne])oe(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(fe(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ge(t))?(oe(n,e),0==n.h&&(n.src=null,t[le]=null)):re(e)}}}function fe(e){return e in ce?ce[e]:ce[e]="on"+e}function pe(e,t){if(e.ca)e=!0;else{t=new ee(t,this);var n=e.listener,i=e.ia||e.src;e.fa&&de(e),e=n.call(i,t)}return e}function ge(e){return(e=e[le])instanceof se?e:null}var me="__closure_events_fn_"+(1e9*Math.random()>>>0);function ve(e){return"function"==typeof e?e:(e[me]||(e[me]=function(t){return e.handleEvent(t)}),e[me])}function ye(){y.call(this),this.i=new se(this),this.P=this,this.I=null}function be(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"==typeof t)t=new Z(t,e);else if(t instanceof Z)t.target=t.target||e;else{var r=t;D(t=new Z(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=we(o,i,!0,t)&&r}if(r=we(o=t.g=e,i,!0,t)&&r,r=we(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=we(o=t.g=n[s],i,!1,t)&&r}function we(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&oe(e.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}v(ye,y),ye.prototype[ne]=!0,ye.prototype.removeEventListener=function(e,t,n,i){!function e(t,n,i,r,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)e(t,n[o],i,r,s);else r=u(r)?!!r.capture:!!r,i=ve(i),t&&t[ne]?(t=t.i,(n=String(n).toString())in t.g&&-1<(i=ae(o=t.g[n],i,r,s))&&(re(o[i]),Array.prototype.splice.call(o,i,1),0==o.length&&(delete t.g[n],t.h--))):t&&(t=ge(t))&&(n=t.g[n.toString()],t=-1,n&&(t=ae(n,i,r,s)),(i=-1<t?n[t]:null)&&de(i))}(this,e,t,n,i)},ye.prototype.M=function(){if(ye.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)re(n[i]);delete t.g[e],t.h--}}this.I=null},ye.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},ye.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Te=a.JSON.stringify;function Ee(){var e=xe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var _e,Ie=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new class{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}},e=>e.reset());function ke(e){a.setTimeout(()=>{throw e},0)}function Se(e,t){_e||function(){var e=a.Promise.resolve(void 0);_e=function(){e.then(Ae)}}(),Ce||(_e(),Ce=!0),xe.add(e,t)}var Ce=!1,xe=new class{constructor(){this.h=this.g=null}add(e,t){const n=Ie.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Ae(){for(var e;e=Ee();){try{e.h.call(e.g)}catch(e){ke(e)}var t=Ie;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ce=!1}function Oe(e,t){ye.call(this),this.h=e||1,this.g=t||a,this.j=g(this.kb,this),this.l=Date.now()}function Ne(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Le(e,t,n){if("function"==typeof e)n&&(e=g(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=g(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}v(Oe,ye),(i=Oe.prototype).da=!1,i.S=null,i.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),be(this,"tick"),this.da&&(Ne(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Oe.Z.M.call(this),Ne(this),delete this.g};class Re extends y{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=Le(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);const n=t.h;t.h=null,t.m.apply(null,n)}(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function De(e){y.call(this),this.h=e,this.g={}}v(De,y);var Pe=[];function je(e,t,n,i){Array.isArray(n)||(n&&(Pe[0]=n.toString()),n=Pe);for(var r=0;r<n.length;r++){var s=ue(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Me(e){N(e.g,function(e,t){this.g.hasOwnProperty(t)&&de(e)},e),e.g={}}function Ue(){this.g=!0}function He(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Te(n)}catch(e){return t}}(e,n)+(i?" "+i:"")})}De.prototype.M=function(){De.Z.M.call(this),Me(this)},De.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ue.prototype.Aa=function(){this.g=!1},Ue.prototype.info=function(){};var Fe={},qe=null;function ze(){return qe=qe||new ye}function Be(e){Z.call(this,Fe.Ma,e)}function Ve(e){const t=ze();be(t,new Be(t,e))}function $e(e,t){Z.call(this,Fe.STAT_EVENT,e),this.stat=t}function We(e){const t=ze();be(t,new $e(t,e))}function Ge(e,t){Z.call(this,Fe.Na,e),this.size=t}function Ke(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){e()},t)}Fe.Ma="serverreachability",v(Be,Z),Fe.STAT_EVENT="statevent",v($e,Z),Fe.Na="timingevent",v(Ge,Z);var Xe={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Je={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ye(){}function Qe(e){return e.h||(e.h=e.i())}function Ze(){}Ye.prototype.h=null;var et,tt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function nt(){Z.call(this,"d")}function it(){Z.call(this,"c")}function rt(){}function st(e,t,n,i){this.l=e,this.j=t,this.m=n,this.X=i||1,this.V=new De(this),this.P=at,e=F?125:void 0,this.W=new Oe(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ot}function ot(){this.i=null,this.g="",this.h=!1}v(nt,Z),v(it,Z),v(rt,Ye),rt.prototype.g=function(){return new XMLHttpRequest},rt.prototype.i=function(){return{}},et=new rt;var at=45e3,lt={},ct={};function ut(e,t,n){e.K=1,e.v=Rt(Ct(t)),e.s=n,e.U=!0,ht(e,null)}function ht(e,t){e.F=Date.now(),gt(e),e.A=Ct(e.v);var n=e.A,i=e.X;Array.isArray(i)||(i=[String(i)]),Wt(n.h,"t",i),e.C=0,n=e.l.H,e.h=new ot,e.g=Gn(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Re(g(e.Ia,e,e.g),e.O)),je(e.V,e.g,"readystatechange",e.gb),t=e.H?L(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ve(1),function(e,t,n,i,r,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o})}(e.j,e.u,e.A,e.m,e.X,e.s)}function dt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function ft(e,t,n){let i,r=!0;for(;!e.I&&e.C<n.length;){if((i=pt(e,n))==ct){4==t&&(e.o=4,We(14),r=!1),He(e.j,e.m,null,"[Incomplete Response]");break}if(i==lt){e.o=4,We(15),He(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}He(e.j,e.m,i,null),wt(e,i)}dt(e)&&i!=ct&&i!=lt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,We(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hn(t),t.L=!0,We(11))):(He(e.j,e.m,n,"[Invalid Chunked Response]"),bt(e),yt(e))}function pt(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?ct:(n=Number(t.substring(n,i)),isNaN(n)?lt:(i+=1)+n>t.length?ct:(t=t.substr(i,n),e.C=i+n,t))}function gt(e){e.Y=Date.now()+e.P,mt(e,e.P)}function mt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ke(g(e.eb,e),t)}function vt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function yt(e){0==e.l.G||e.I||zn(e.l,e)}function bt(e){vt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ne(e.W),Me(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function wt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Zt(n.i,e)))if(n.I=e.N,!e.J&&Zt(n.i,e)&&3==n.G){try{var i=n.Ca.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;qn(n),On(n)}Un(n),We(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=Ke(g(n.ab,n),6e3));if(1>=Qt(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else Vn(n,11)}else if((e.J||n.g==e)&&qn(n),!I(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const t=c[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const r=c[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.i;!s.g&&(C(e,"spdy")||C(e,"quic")||C(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(en(s,s.h),s.h=null))}if(i.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.sa=e,Lt(i.F,i.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((i=n).oa=Wn(i,i.H?i.la:null,i.W),o.J){tn(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(vt(a),gt(a)),i.g=o}else Mn(i);0<n.l.length&&Rn(n)}else"stop"!=c[0]&&"close"!=c[0]||Vn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Vn(n,7):An(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}Ve(4)}catch(e){}}function Tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(c(e)||"string"==typeof e)T(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(c(e)||"string"==typeof e){n=[];for(var i=e.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,e)n[i++]=r;r=(i=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(c(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e)).length;for(var s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}}function Et(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(e)if(e instanceof Et)for(n=e.T(),i=0;i<n.length;i++)this.set(n[i],e.get(n[i]));else for(i in e)this.set(i,e[i])}function _t(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var i=e.g[t];It(e.h,i)&&(e.g[n++]=i),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)It(r,i=e.g[t])||(e.g[n++]=i,r[i]=1),t++;e.g.length=n}}function It(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(i=st.prototype).setTimeout=function(e){this.P=e},i.gb=function(e){e=e.target;const t=this.L;t&&3==In(e)?t.l():this.Ia(e)},i.Ia=function(e){try{if(e==this.g)e:{const h=In(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||F||this.g&&(this.h.h||this.g.ga()||kn(this.g)))){this.I||4!=h||7==t||Ve(8==t||0>=d?3:2),vt(this);var n=this.g.ba();this.N=n;t:if(dt(this)){var i=kn(this.g);e="";var r=i.length,s=4==In(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){bt(this),yt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,i,r,s,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o})}(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var l,c=this.g;if((l=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(l)){var u=l;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,We(12),bt(this),yt(this);break e}He(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,wt(this,n)}this.U?(ft(this,h,o),F&&this.i&&3==h&&(je(this.V,this.W,"tick",this.fb),this.W.start())):(He(this.j,this.m,o,null),wt(this,o)),4==h&&bt(this),this.i&&!this.I&&(4==h?zn(this.l,this):(this.i=!1,gt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,We(12)):(this.o=0,We(13)),bt(this),yt(this)}}}catch(e){}},i.fb=function(){if(this.g){var e=In(this.g),t=this.g.ga();this.C<t.length&&(vt(this),ft(this,e,t),this.i&&4!=e&&gt(this))}},i.cancel=function(){this.I=!0,bt(this)},i.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.K&&(Ve(3),We(17)),bt(this),this.o=2,yt(this)):mt(this,this.Y-e)},(i=Et.prototype).R=function(){_t(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},i.T=function(){return _t(this),this.g.concat()},i.get=function(e,t){return It(this.h,e)?this.h[e]:t},i.set=function(e,t){It(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},i.forEach=function(e,t){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);e.call(t,s,r,this)}};var kt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function St(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof St){this.g=void 0!==t?t:e.g,xt(this,e.j),this.s=e.s,At(this,e.i),Ot(this,e.m),this.l=e.l,t=e.h;var n=new zt;n.i=t.i,t.g&&(n.g=new Et(t.g),n.h=t.h),Nt(this,n),this.o=e.o}else e&&(n=String(e).match(kt))?(this.g=!!t,xt(this,n[1]||"",!0),this.s=Dt(n[2]||""),At(this,n[3]||"",!0),Ot(this,n[4]),this.l=Dt(n[5]||"",!0),Nt(this,n[6]||"",!0),this.o=Dt(n[7]||"")):(this.g=!!t,this.h=new zt(null,this.g))}function Ct(e){return new St(e)}function xt(e,t,n){e.j=n?Dt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function At(e,t,n){e.i=n?Dt(t,!0):t}function Ot(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Nt(e,t,n){t instanceof zt?(e.h=t,function(e,t){t&&!e.j&&(Bt(e),e.i=null,e.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(Vt(this,t),Wt(this,n,e))},e)),e.j=t}(e.h,e.g)):(n||(t=Pt(t,Ft)),e.h=new zt(t,e.g))}function Lt(e,t,n){e.h.set(t,n)}function Rt(e){return Lt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Dt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Pt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,jt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function jt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}St.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Pt(t,Mt,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Pt(t,Mt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Pt(n,"/"==n.charAt(0)?Ht:Ut,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Pt(n,qt)),e.join("")};var Mt=/[#\/\?@]/g,Ut=/[#\?:]/g,Ht=/[#\?]/g,Ft=/[#\?@]/g,qt=/#/g;function zt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Bt(e){e.g||(e.g=new Et,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function Vt(e,t){Bt(e),t=Gt(e,t),It(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,It((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&_t(e)))}function $t(e,t){return Bt(e),t=Gt(e,t),It(e.g.h,t)}function Wt(e,t,n){Vt(e,t),0<n.length&&(e.i=null,e.g.set(Gt(e,t),_(n)),e.h+=n.length)}function Gt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(i=zt.prototype).add=function(e,t){Bt(this),this.i=null,e=Gt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},i.forEach=function(e,t){Bt(this),this.g.forEach(function(n,i){T(n,function(n){e.call(t,n,i,this)},this)},this)},i.T=function(){Bt(this);for(var e=this.g.R(),t=this.g.T(),n=[],i=0;i<t.length;i++)for(var r=e[i],s=0;s<r.length;s++)n.push(t[i]);return n},i.R=function(e){Bt(this);var t=[];if("string"==typeof e)$t(this,e)&&(t=E(t,this.g.get(Gt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=E(t,e[n])}return t},i.set=function(e,t){return Bt(this),this.i=null,$t(this,e=Gt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},i.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var i=t[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),e.push(o)}}return this.i=e.join("&")};var Kt=class{constructor(e,t){this.h=e,this.g=t}};function Xt(e){this.l=e||Jt,a.PerformanceNavigationTiming?e=0<(e=a.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Jt=10;function Yt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Qt(e){return e.h?1:e.g?e.g.size:0}function Zt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function en(e,t){e.g?e.g.add(t):e.h=t}function tn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function nn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return _(e.i)}function rn(){}function sn(e,t,n){const i=n||"";try{Tt(e,function(e,n){let r=e;u(e)&&(r=Te(e)),t.push(i+n+"="+encodeURIComponent(r))})}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function on(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(e){}}function an(e){this.l=e.$b||null,this.j=e.ib||!1}function ln(e,t){ye.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=cn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xt.prototype.cancel=function(){if(this.i=nn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},rn.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},rn.prototype.parse=function(e){return a.JSON.parse(e,void 0)},v(an,Ye),an.prototype.g=function(){return new ln(this.l,this.j)},an.prototype.i=function(e){return function(){return e}}({}),v(ln,ye);var cn=0;function un(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function hn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,dn(e)}function dn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(i=ln.prototype).open=function(e,t){if(this.readyState!=cn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,dn(this)},i.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,hn(this)),this.readyState=cn},i.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,dn(this)),this.g&&(this.readyState=3,dn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;un(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?hn(this):dn(this),3==this.readyState&&un(this)}},i.Ua=function(e){this.g&&(this.response=this.responseText=e,hn(this))},i.Ta=function(e){this.g&&(this.response=e,hn(this))},i.ha=function(){this.g&&hn(this)},i.setRequestHeader=function(e,t){this.v.append(e,t)},i.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(ln.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var fn=a.JSON.parse;function pn(e){ye.call(this),this.headers=new Et,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gn,this.K=this.L=!1}v(pn,ye);var gn="",mn=/^https?$/i,vn=["POST","PUT"];function yn(e){return"content-type"==e.toLowerCase()}function bn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,wn(e),En(e)}function wn(e){e.D||(e.D=!0,be(e,"complete"),be(e,"error"))}function Tn(e){if(e.h&&void 0!==o&&(!e.C[1]||4!=In(e)||2!=e.ba()))if(e.v&&4==In(e))Le(e.Fa,0,e);else if(be(e,"readystatechange"),4==In(e)){e.h=!1;try{const o=e.ba();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===o){var r=String(e.H).match(kt)[1]||null;if(!r&&a.self&&a.self.location){var s=a.self.location.protocol;r=s.substr(0,s.length-1)}i=!mn.test(r?r.toLowerCase():"")}n=i}if(n)be(e,"complete"),be(e,"success");else{e.m=6;try{var l=2<In(e)?e.g.statusText:""}catch(e){l=""}e.j=l+" ["+e.ba()+"]",wn(e)}}finally{En(e)}}}function En(e,t){if(e.g){_n(e);const n=e.g,i=e.C[0]?l:null;e.g=null,e.C=null,t||be(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function _n(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function In(e){return e.g?e.g.readyState:0}function kn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case gn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Sn(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=function(e){let t="";return N(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Lt(e,t,n))}function Cn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function xn(e){this.za=0,this.l=[],this.h=new Ue,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Cn("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Cn("baseRetryDelayMs",5e3,e),this.$a=Cn("retryDelaySeedMs",1e4,e),this.Ya=Cn("forwardChannelMaxRetries",2,e),this.ra=Cn("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Xt(e&&e.concurrentRequestLimit),this.Ca=new function(){this.g=new rn},this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function An(e){if(Nn(e),3==e.G){var t=e.V++,n=Ct(e.F);Lt(n,"SID",e.J),Lt(n,"RID",t),Lt(n,"TYPE","terminate"),Pn(e,n),(t=new st(e,e.h,t,void 0)).K=2,t.v=Rt(Ct(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=Gn(t.l,null),t.g.ea(t.v)),t.F=Date.now(),gt(t)}$n(e)}function On(e){e.g&&(Hn(e),e.g.cancel(),e.g=null)}function Nn(e){On(e),e.u&&(a.clearTimeout(e.u),e.u=null),qn(e),e.i.cancel(),e.m&&("number"==typeof e.m&&a.clearTimeout(e.m),e.m=null)}function Ln(e,t){e.l.push(new Kt(e.Za++,t)),3==e.G&&Rn(e)}function Rn(e){Yt(e.i)||e.m||(e.m=!0,Se(e.Ha,e),e.C=0)}function Dn(e,t){var n;n=t?t.m:e.V++;const i=Ct(e.F);Lt(i,"SID",e.J),Lt(i,"RID",n),Lt(i,"AID",e.U),Pn(e,i),e.o&&e.s&&Sn(i,e.o,e.s),n=new st(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=jn(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),en(e.i,n),ut(n,i,t)}function Pn(e,t){e.j&&Tt({},function(e,n){Lt(t,n,e)})}function jn(e,t,n){n=Math.min(e.l.length,n);var i=e.j?g(e.j.Oa,e.j,e):null;e:{var r=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(0>(n-=t))t=Math.max(0,r[o].h-100),s=!1;else try{sn(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(s){i=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,i}function Mn(e){e.g||e.u||(e.Y=1,Se(e.Ga,e),e.A=0)}function Un(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=Ke(g(e.Ga,e),Bn(e,e.A)),e.A++,!0)}function Hn(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function Fn(e){e.g=new st(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Ct(e.oa);Lt(t,"RID","rpc"),Lt(t,"SID",e.J),Lt(t,"CI",e.N?"0":"1"),Lt(t,"AID",e.U),Pn(e,t),Lt(t,"TYPE","xmlhttp"),e.o&&e.s&&Sn(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Rt(Ct(t)),n.s=null,n.U=!0,ht(n,e)}function qn(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function zn(e,t){var n=null;if(e.g==t){qn(e),Hn(e),e.g=null;var i=2}else{if(!Zt(e.i,t))return;n=t.D,tn(e.i,t),i=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;be(i=ze(),new Ge(i,n,t,r)),Rn(e)}else Mn(e);else if(3==(r=t.o)||0==r&&0<e.I||!(1==i&&function(e,t){return!(Qt(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=Ke(g(e.Ha,e,t),Bn(e,e.C)),e.C++,0)))}(e,t)||2==i&&Un(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Vn(e,5);break;case 4:Vn(e,10);break;case 3:Vn(e,6);break;default:Vn(e,2)}}function Bn(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Vn(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var i=g(e.jb,e);n||(n=new St("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||xt(n,"https"),Rt(n)),function(e,t){const n=new Ue;if(a.Image){const i=new Image;i.onload=m(on,n,i,"TestLoadImage: loaded",!0,t),i.onerror=m(on,n,i,"TestLoadImage: error",!1,t),i.onabort=m(on,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=m(on,n,i,"TestLoadImage: timeout",!1,t),a.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}(n.toString(),i)}else We(2);e.G=0,e.j&&e.j.va(t),$n(e),Nn(e)}function $n(e){e.G=0,e.I=-1,e.j&&(0==nn(e.i).length&&0==e.l.length||(e.i.i.length=0,_(e.l),e.l.length=0),e.j.ua())}function Wn(e,t,n){let i=function(e){return e instanceof St?Ct(e):new St(e,void 0)}(n);if(""!=i.i)t&&At(i,t+"."+i.i),Ot(i,i.m);else{const e=a.location;i=function(e,t,n,i){var r=new St(null,void 0);return e&&xt(r,e),t&&At(r,t),n&&Ot(r,n),i&&(r.l=i),r}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&N(e.aa,function(e,t){Lt(i,t,e)}),t=e.D,n=e.sa,t&&n&&Lt(i,t,n),Lt(i,"VER",e.ma),Pn(e,i),i}function Gn(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new pn(new an({ib:!0})):new pn(e.qa)).L=e.H,t}function Kn(){}function Xn(){if(U&&!(10<=Number(Y)))throw Error("Environmental error: no available transport.")}function Jn(e,t){ye.call(this),this.g=new xn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!I(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!I(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Zn(this)}function Yn(e){nt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Qn(){it.call(this),this.status=1}function Zn(e){this.g=e}(i=pn.prototype).ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():et.g(),this.C=this.u?Qe(this.u):Qe(et),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void bn(this,e)}e=n||"";const r=new Et(this.headers);i&&Tt(i,function(e,t){r.set(t,e)}),i=function(e){e:{var t=yn;const n=e.length,i="string"==typeof e?e.split(""):e;for(let r=0;r<n;r++)if(r in i&&t.call(void 0,i[r],r,e)){t=r;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(r.T()),n=a.FormData&&e instanceof a.FormData,!(0<=w(vn,t))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(e,t){this.g.setRequestHeader(t,e)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{_n(this),0<this.B&&((this.K=function(e){return U&&X()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=Le(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){bn(this,e)}},i.pa=function(){void 0!==o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,be(this,"timeout"),this.abort(8))},i.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,be(this,"complete"),be(this,"abort"),En(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),En(this,!0)),pn.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?Tn(this):this.cb())},i.cb=function(){Tn(this)},i.ba=function(){try{return 2<In(this)?this.g.status:-1}catch(e){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},i.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),fn(t)}},i.Da=function(){return this.m},i.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(i=xn.prototype).ma=8,i.G=1,i.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},i.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new st(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?D(s=L(s),this.P):s=this.P),null===this.o&&(r.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=jn(this,r,t),Lt(n=Ct(this.F),"RID",e),Lt(n,"CVER",22),this.D&&Lt(n,"X-HTTP-Session-Id",this.D),Pn(this,n),this.o&&s&&Sn(n,this.o,s),en(this.i,r),this.Ra&&Lt(n,"TYPE","init"),this.ja?(Lt(n,"$req",t),Lt(n,"SID","null"),r.$=!0,ut(r,n,null)):ut(r,n,t),this.G=2}}else 3==this.G&&(e?Dn(this,e):0==this.l.length||Yt(this.i)||Dn(this))},i.Ga=function(){if(this.u=null,Fn(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Ke(g(this.bb,this),e)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,We(10),On(this),Fn(this))},i.ab=function(){null!=this.v&&(this.v=null,On(this),Un(this),We(19))},i.jb=function(e){e?(this.h.info("Successfully pinged google.com"),We(2)):(this.h.info("Failed to ping google.com"),We(1))},(i=Kn.prototype).xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},Xn.prototype.g=function(e,t){return new Jn(e,t)},v(Jn,ye),Jn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Se(g(e.hb,e,t))),We(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Wn(e,null,e.W),Rn(e)},Jn.prototype.close=function(){An(this.g)},Jn.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Ln(this.g,t)}else this.v?((t={}).__data__=Te(e),Ln(this.g,t)):Ln(this.g,e)},Jn.prototype.M=function(){this.g.j=null,delete this.j,An(this.g),delete this.g,Jn.Z.M.call(this)},v(Yn,nt),v(Qn,it),v(Zn,Kn),Zn.prototype.xa=function(){be(this.g,"a")},Zn.prototype.wa=function(e){be(this.g,new Yn(e))},Zn.prototype.va=function(e){be(this.g,new Qn(e))},Zn.prototype.ua=function(){be(this.g,"b")},Xn.prototype.createWebChannel=Xn.prototype.g,Jn.prototype.send=Jn.prototype.u,Jn.prototype.open=Jn.prototype.m,Jn.prototype.close=Jn.prototype.close,Xe.NO_ERROR=0,Xe.TIMEOUT=8,Xe.HTTP_ERROR=6,Je.COMPLETE="complete",Ze.EventType=tt,tt.OPEN="a",tt.CLOSE="b",tt.ERROR="c",tt.MESSAGE="d",ye.prototype.listen=ye.prototype.N,pn.prototype.listenOnce=pn.prototype.O,pn.prototype.getLastError=pn.prototype.La,pn.prototype.getLastErrorCode=pn.prototype.Da,pn.prototype.getStatus=pn.prototype.ba,pn.prototype.getResponseJson=pn.prototype.Qa,pn.prototype.getResponseText=pn.prototype.ga,pn.prototype.send=pn.prototype.ea;var ei=s.createWebChannelTransport=function(){return new Xn},ti=s.getStatEventTarget=function(){return ze()},ni=s.ErrorCode=Xe,ii=s.EventType=Je,ri=s.Event=Fe,si=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},oi=s.FetchXmlHttpFactory=an,ai=s.WebChannel=Ze,li=s.XhrIo=pn}).call(this,n(6))},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var i=n(0);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:function(e){return e===s?void 0:e}(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return ae});var i=n(1),r=n(4),s=n(2),o=n(0);n(3);const a="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}l.UNAUTHENTICATED=new l(null),l.GOOGLE_CREDENTIALS=new l("google-credentials-uid"),l.FIRST_PARTY=new l("first-party-uid"),l.MOCK_USER=new l("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="9.6.11";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=new s.b("@firebase/firestore");function h(e,...t){if(u.logLevel<=s.a.DEBUG){const n=t.map(f);u.debug(`Firestore (${c}): ${e}`,...n)}}function d(e,...t){if(u.logLevel<=s.a.ERROR){const n=t.map(f);u.error(`Firestore (${c}): ${e}`,...n)}}function f(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e="Unexpected state"){const t=`FIRESTORE (${c}) INTERNAL ASSERTION FAILED: `+e;throw d(t),new Error(t)}function g(e,t){e||p()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends o.c{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=(()=>`${this.name}: [code=${this.code}]: ${this.message}`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class w{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(l.UNAUTHENTICATED))}shutdown(){}}class T{constructor(e,t,n){this.type="FirstParty",this.user=l.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class E{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new T(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(l.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=(e=>this.I(e)),this.T=(e=>t.writeSequenceNumber(e)))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */I.A=-1;class S{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=k(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function C(e,t){return e<t?-1:e>t?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(e,t,n){void 0===t?t=0:t>e.length&&p(),void 0===n?n=e.length-t:n>e.length-t&&p(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===x.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof x?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class A extends x{construct(e,t,n){return new A(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new v(m.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new A(t)}static emptyPath(){return new A([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new O(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new O(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return C(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}O.EMPTY_BYTE_STRING=new O("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function N(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function L(e){return"string"==typeof e?O.fromBase64String(e):O.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e,t,n,i,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class D{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new D("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof D&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j{constructor(e){this.path=e}static fromPath(e){return new j(A.fromString(e))}static fromName(e){return new j(A.fromString(e).popFirst(5))}static empty(){return new j(A.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===A.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return A.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new A(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}class U{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}U.UNKNOWN_ID=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var H,F;(F=H||(H={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q{constructor(e,t){this.comparator=e,this.root=t||B.EMPTY}insert(e,t){return new q(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,B.BLACK,null,null))}remove(e){return new q(this.comparator,this.root.remove(e,this.comparator).copy(null,null,B.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new z(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new z(this.root,e,this.comparator,!1)}getReverseIterator(){return new z(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new z(this.root,e,this.comparator,!0)}}class z{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class B{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:B.RED,this.left=null!=i?i:B.EMPTY,this.right=null!=r?r:B.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new B(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return B.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){const e=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw p();if(this.right.isRed())throw p();const e=this.left.check();if(e!==this.right.check())throw p();return e+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1,B.EMPTY=new class{constructor(){this.size=0}get key(){throw p()}get value(){throw p()}get color(){throw p()}get left(){throw p()}get right(){throw p()}copy(e,t,n,i,r){return this}insert(e,t,n){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(e){this.comparator=e,this.data=new q(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $(this.data.getIterator())}getIteratorFrom(e){return new $(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof V))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new V(this.comparator);return t.data=e,t}}class ${constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new q(j.comparator);new q(j.comparator);new q(j.comparator),new V(j.comparator);new V(C);const W=[...[...[...[...["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments"],"clientMetadata"],"remoteDocumentGlobal"],"collectionParents"],"bundles","namedQueries"],G=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(N(e.integerValue));else if("doubleValue"in e){const n=N(e.doubleValue);isNaN(n)?this.ne(t,13):(this.ne(t,15),P(n)?t.se(0):t.se(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ne(t,20),"string"==typeof n?t.ie(n):(t.ie(`${n.seconds||""}`),t.se(n.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(L(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?M(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):p()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const n=e.fields||{};this.ne(t,55);for(const e of Object.keys(n))this.re(e,t),this.te(n[e],t)}he(e,t){const n=e.values||[];this.ne(t,50);for(const e of n)this.te(e,t)}ae(e,t){this.ne(t,37),j.fromName(e).path.forEach(e=>{this.ne(t,60),this.le(e,t)})}ne(e,t){e.se(t)}oe(e){e.se(2)}}X.fe=new X;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Uint8Array(0);class J{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new J(e,J.DEFAULT_COLLECTION_PERCENTILE,J.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */J.DEFAULT_COLLECTION_PERCENTILE=10,J.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,J.DEFAULT=new J(41943040,J.DEFAULT_COLLECTION_PERCENTILE,J.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),J.DISABLED=new J(-1,0,0);function Y(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Yn=e,this.timerId=t,this.fo=n,this._o=i,this.wo=r,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const t=Math.floor(this.mo+this.Eo()),n=Math.max(0,Date.now()-this.po),i=Math.max(0,t-n);i>0&&h("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.mo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new y,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new Z(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new v(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ee(e,t){if(d("AsyncQueue",`${t}: ${e}`),K(e))return new v(m.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=l.UNAUTHENTICATED,this.clientId=S.R(),this.authCredentialListener=(()=>Promise.resolve()),this.appCheckCredentialListener=(()=>Promise.resolve()),this.authCredentials.start(n,async e=>{h("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(h("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new y;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ee(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}const ne=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ie{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new v(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new v(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new v(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ie({}),this._settingsFrozen=!1,e instanceof D?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new v(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new D(e.options.projectId)}(e))}get app(){if(!this._app)throw new v(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new v(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ie(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new w;switch(e.type){case"gapi":const t=e.client;return g(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new E(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new v(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ne.get(e);t&&(h("ComponentProvider","Removing Datastore"),ne.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class se{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new Q(this,"async_queue_retry"),this.qa=(()=>{const e=Y();e&&h("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Do.Ao()});const e=Y();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const t=Y();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const t=new y;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!K(e))throw e;h("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const t=this.ka.then(()=>(this.Ba=!0,e().catch(e=>{throw this.$a=e,this.Ba=!1,d("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),e}).then(e=>(this.Ba=!1,e))));return this.ka=t,t}enqueueAfterDelay(e,t,n){this.Ka(),this.Ua.indexOf(e)>-1&&(t=0);const i=Z.createAndSchedule(this,e,t,n,e=>this.ja(e));return this.Fa.push(i),i}Ka(){this.$a&&p()}verifyOperationInProgress(){}async Wa(){let e;do{e=this.ka,await e}while(e!==this.ka)}za(e){for(const t of this.Fa)if(t.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.Fa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const t=this.Fa.indexOf(e);this.Fa.splice(t,1)}}class oe extends re{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new se,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||le(this),this._firestoreClient.terminate()}}function ae(e=Object(i.e)()){return Object(i.b)(e,"firestore").getImmediate()}function le(e){var t;const n=e._freezeSettings(),i=function(e,t,n,i){return new R(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new te(e._authCredentials,e._appCheckCredentials,e._queue,i)}new RegExp("[~\\*/\\[\\]]");!function(e,t=!0){!function(e){c=e}(i.a),Object(i.c)(new r.a("firestore",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=new oe(i,new class{constructor(e){this.t=e,this.currentUser=l.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new y;this.o=(()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new y,e.enqueueRetryable(()=>i(this.currentUser))});const s=()=>{const t=r;e.enqueueRetryable(async()=>{await t.promise,await i(this.currentUser)})},o=e=>{h("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(h("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new y)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(h("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(g("string"==typeof t.accessToken),new b(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return g(null===e||"string"==typeof e),new l(e)}}(e.getProvider("auth-internal")),new class{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&h("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,h("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=(t=>{e.enqueueRetryable(()=>n(t))});const i=e=>{h("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit(e=>i(e)),setTimeout(()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?i(e):h("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(g("string"==typeof e.token),this.p=e.token,new _(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),r._setSettings(n),r},"PUBLIC")),Object(i.g)(a,"3.4.8",void 0),Object(i.g)(a,"3.4.8","esm2017")}()}).call(this,n(12))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){console.log("hi")},function(e,t){console.log("hi")},function(e,t){console.log("hi")},function(e,t){},function(e,t,n){"use strict";n.r(t);n(13);var i=n(0),r=n(1);function s(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;var o=n(2),a=n(4);function l(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new i.b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),h=new o.b("@firebase/auth");function d(e,...t){h.logLevel<=o.a.ERROR&&h.error(`Auth (${r.a}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw v(e,...t)}function p(e,...t){return v(e,...t)}function g(e,t,n){const r=Object.assign(Object.assign({},c()),{[t]:n});return new i.b("auth","Firebase",r).create(t,{appName:e.name})}function m(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&f(e,"argument-error"),g(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.`+"Did you pass a reference from a different Auth SDK?")}function v(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return u.create(e,...t)}function y(e,t,...n){if(!e)throw v(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function w(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=new Map;function E(e){w(e instanceof Function,"Expected a class definition");let t=T.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,T.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===k()||"https:"===k()}function k(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class S{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(i.q)()||Object(i.r)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(I()||Object(i.l)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},O=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,r,s={}){return R(e,s,async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=Object(i.v)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),x.fetch()(P(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function R(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},A),t);try{const t=new j(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw M(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const t=s.ok?o.errorMessage:o.error.message,[n,i]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw M(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw M(e,"email-already-in-use",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(i)throw g(e,a,i);f(e,a)}}catch(t){if(t instanceof i.c)throw t;f(e,"network-request-failed")}}async function D(e,t,n,i,r={}){const s=await L(e,t,n,i,r);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function P(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?C(e.config,r):`${e.config.apiScheme}://${r}`}class j{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),O.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function M(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=p(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){return 1e3*Number(e)}function F(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(i.d)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(e){return d("Caught error parsing JWT payload as JSON",e),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function q(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof i.c&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e){var t;const n=e.auth,i=await e.getIdToken(),r=await q(e,async function(e,t){return L(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));y(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const o=r.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?function(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(o.providerUserInfo):[],l=function(e,t){return[...e.filter(e=>!t.some(t=>t.providerId===e.providerId)),...t]}(e.providerData,a),c=e.isAnonymous,u=!(e.email&&o.passwordHash||(null===l||void 0===l?void 0:l.length)),h=!!c&&u,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new B(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,d)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(void 0!==e.idToken,"internal-error"),y(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=F(e);return y(t,"internal-error"),y(void 0!==t.exp,"internal-error"),y(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await async function(e,t){const n=await R(e,{},async()=>{const n=Object(i.v)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=P(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new $;return n&&(y("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(y("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(y("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e,t){y("string"==typeof e||void 0===e,"internal-error",{appName:t})}class G{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new B(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await q(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Object(i.j)(e),r=await n.getIdToken(t),s=F(r);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:U(H(s.auth_time)),issuedAtTime:U(H(s.iat)),expirationTime:U(H(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Object(i.j)(e);await V(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new G(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await V(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await q(this,async function(e,t){return L(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:w,isAnonymous:T,providerData:E,stsTokenManager:_}=t;y(b&&_,e,"internal-error");const I=$.fromJSON(this.name,_);y("string"==typeof b,e,"internal-error"),W(u,e.name),W(h,e.name),y("boolean"==typeof w,e,"internal-error"),y("boolean"==typeof T,e,"internal-error"),W(d,e.name),W(f,e.name),W(p,e.name),W(g,e.name),W(m,e.name),W(v,e.name);const k=new G({uid:b,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:T,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(k.providerData=E.map(e=>Object.assign({},e))),g&&(k._redirectEventId=g),k}static async _fromIdTokenResponse(e,t,n=!1){const i=new $;i.updateFromServerResponse(t);const r=new G({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await V(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}K.type="NONE";const X=K;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e,t,n){return`firebase:${e}:${t}:${n}`}class Y{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=J(this.userKey,i.apiKey,r),this.fullPersistenceKey=J("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?G._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Y(E(X),e,n);const i=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let r=i[0]||E(X);const s=J(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=G._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(e){}})),new Y(r,e,n)):new Y(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ne(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Z(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(re(t))return"Blackberry";if(se(t))return"Webos";if(ee(t))return"Safari";if((t.includes("chrome/")||te(t))&&!t.includes("edge/"))return"Chrome";if(ie(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function Z(e=Object(i.k)()){return/firefox\//i.test(e)}function ee(e=Object(i.k)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function te(e=Object(i.k)()){return/crios\//i.test(e)}function ne(e=Object(i.k)()){return/iemobile/i.test(e)}function ie(e=Object(i.k)()){return/android/i.test(e)}function re(e=Object(i.k)()){return/blackberry/i.test(e)}function se(e=Object(i.k)()){return/webos/i.test(e)}function oe(e=Object(i.k)()){return/iphone|ipad|ipod/i.test(e)}function ae(e=Object(i.k)()){return oe(e)||ie(e)||se(e)||re(e)||/windows phone/i.test(e)||ne(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(e,t=[]){let n;switch(e){case"Browser":n=Q(Object(i.k)());break;case"Worker":n=`${Q(Object(i.k)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.a}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new he(this),this.idTokenSubscription=new he(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=E(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Y.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||null===s||void 0===s||!s.user||(n=s.user)}return n?n._redirectEventId?(y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await V(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(i.j)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(E(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.b("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&E(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await Y.create(this,[E(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return y(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=le(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function ue(e){return Object(i.j)(e)}class he{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(i.g)(e=>this.observer=e)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe extends de{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new pe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new pe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",N(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return fe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ge(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me="http://localhost";class ve extends de{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ve(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=s(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new ve(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){return ge(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ge(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ge(e,t)}buildRequest(){const e={requestUri:me,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Object(i.v)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be extends de{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new be({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new be({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t));if(n.temporaryProof)throw M(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ye)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new be({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){var t,n,r,s,o,a;const l=Object(i.w)(Object(i.i)(e)),c=null!==(t=l.apiKey)&&void 0!==t?t:null,u=null!==(n=l.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=l.mode)&&void 0!==r?r:null);y(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=Object(i.w)(Object(i.i)(e)).link,n=t?Object(i.w)(Object(i.i)(t)).deep_link_id:null,r=Object(i.w)(Object(i.i)(e)).deep_link_id;return(r?Object(i.w)(Object(i.i)(r)).link:null)||r||n||t||e}(e);try{return new we(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te{constructor(){this.providerId=Te.PROVIDER_ID}static credential(e,t){return pe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=we.parseLink(t);return y(n,"argument-error"),pe._fromEmailAndCode(e,n.code,n.tenantId)}}Te.PROVIDER_ID="password",Te.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Te.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends Ee{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie extends _e{constructor(){super("facebook.com")}static credential(e){return ve._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!(e&&"oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ie.credential(e.oauthAccessToken)}catch(e){return null}}}Ie.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ie.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ke extends _e{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ve._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ke.credential(t,n)}catch(e){return null}}}ke.GOOGLE_SIGN_IN_METHOD="google.com",ke.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends _e{constructor(){super("github.com")}static credential(e){return ve._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!(e&&"oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Se.credential(e.oauthAccessToken)}catch(e){return null}}}Se.GITHUB_SIGN_IN_METHOD="github.com",Se.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce extends _e{constructor(){super("twitter.com")}static credential(e,t){return ve._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ce.credential(t,n)}catch(e){return null}}}Ce.TWITTER_SIGN_IN_METHOD="twitter.com",Ce.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await G._fromIdTokenResponse(e,n,i),s=Ae(n);return new xe({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Ae(n);return new xe({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Ae(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe extends i.c{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Oe.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Oe(e,t,n,i)}}function Ne(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Oe._fromErrorAndOperation(e,n,t,i);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t,n=!1){const i=await q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xe._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Re(e,t,n=!1){const{auth:i}=e;try{const r=await q(e,Ne(i,"reauthenticate",t,e),n);y(r.idToken,i,"internal-error");const s=F(r.idToken);y(s,i,"internal-error");const{sub:o}=s;return y(e.uid===o,i,"user-mismatch"),xe._forOperation(e,"reauthenticate",r)}catch(e){throw"auth/user-not-found"===(null===e||void 0===e?void 0:e.code)&&f(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t,n=!1){const i=await Ne(e,"signIn",t),r=await xe._fromIdTokenResponse(e,"signIn",i);return n||await e._updateCurrentUser(r.user),r}async function Pe(e,t){return De(ue(e),t)}function je(e,t,n){return Pe(Object(i.j)(e),Te.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;const Me="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Me,"1"),this.storage.removeItem(Me),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=1e3,Fe=10;class qe extends Ue{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=((e,t)=>this.onStorageEvent(e,t)),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Object(i.k)();return ee(e)||oe(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ae(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);Object(i.o)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Fe):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},He)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qe.type="LOCAL";const ze=qe;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Ue{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Be.type="SESSION";const Ve=Be;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new $e(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map(async e=>e(t.origin,r)),a=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e.receivers=[];class Ge{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise((o,a)=>{const l=We("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xe(){return void 0!==Ke().WorkerGlobalScope&&"function"==typeof Ke().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Je="firebaseLocalStorageDb",Ye=1,Qe="firebaseLocalStorage",Ze="fbase_key";class et{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function tt(e,t){return e.transaction([Qe],t?"readwrite":"readonly").objectStore(Qe)}function nt(){const e=indexedDB.open(Je,Ye);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Qe,{keyPath:Ze})}catch(e){n(e)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Qe)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Je);return new et(e).toPromise()}(),t(await nt()))})})}async function it(e,t,n){const i=tt(e,!0).put({[Ze]:t,value:n});return new et(i).toPromise()}function rt(e,t){const n=tt(e,!0).delete(t);return new et(n).toPromise()}const st=800,ot=3;class at{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nt(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(e){if(t++>ot)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xe()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$e._getInstance(Xe()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{return{keyProcessed:(await this._poll()).includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Ge(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&function(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nt();return await it(e,Me,"1"),await rt(e,Me),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>it(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>(async function(e,t){const n=tt(e,!1).get(t),i=await new et(n).toPromise();return void 0===i?null:i.value})(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=tt(e,!1).getAll();return new et(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),st)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}at.type="LOCAL";const lt=at;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=(e=>{const t=p("internal-error");t.customData=e,n(t)}),i.type="text/javascript",i.charset="UTF-8",
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}().appendChild(i)})}function ut(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ut("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ht="recaptcha";async function dt(e,t,n){var i;const r=await n.verify();try{let s;if(y("string"==typeof r,e,"argument-error"),y(n.type===ht,e,"argument-error"),"session"in(s="string"==typeof t?{phoneNumber:t}:t)){const t=s.session;if("phoneNumber"in s){return y("enroll"===t.type,e,"internal-error"),(await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;return y(n,e,"missing-multi-factor-info"),(await function(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",N(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",N(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(e){this.providerId=ft.PROVIDER_ID,this.auth=ue(e)}verifyPhoneNumber(e,t){return dt(this.auth,e,Object(i.j)(t))}static credential(e,t){return be._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ft.credentialFromTaggedObject(t)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?be._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pt(e,t){return t?E(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft.PROVIDER_ID="phone",ft.PHONE_SIGN_IN_METHOD="phone";class gt extends de{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ge(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ge(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ge(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mt(e){return De(e.auth,new gt(e),e.bypassAuthState)}function vt(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),Re(n,new gt(e),e.bypassAuthState)}async function yt(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),Le(n,new gt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mt;case"linkViaPopup":case"linkViaRedirect":return yt;case"reauthViaPopup":case"reauthViaRedirect":return vt;default:f(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new S(2e3,1e4);async function Tt(e,t,n){const i=ue(e);m(e,t,Ee);const r=pt(i,n);return new Et(i,"signInViaPopup",t,r).executeNotNull()}class Et extends bt{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Et.currentPopupAction&&Et.currentPopupAction.cancel(),Et.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=We();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Et.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;null!==(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)&&void 0!==n&&n.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,wt.get())};e()}}Et.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _t="pendingRedirect",It=new Map;class kt extends bt{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=It.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Ct(t),i=St(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=(()=>Promise.resolve(t))}catch(t){e=(()=>Promise.reject(t))}It.set(this.auth._key(),e)}return this.bypassAuthState||It.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function St(e){return E(e._redirectPersistence)}function Ct(e){return J(_t,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e,t,n=!1){const i=ue(e),r=pt(i,t),s=new kt(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const At=6e5;class Ot{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lt(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?t:(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0),t)}sendToConsumer(e,t){var n;if(e.error&&!Lt(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=At&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nt(e))}saveEventToCache(e){this.cachedEventUids.add(Nt(e)),this.lastProcessedEventTime=Date.now()}}function Nt(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Lt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dt=/^https?/;async function Pt(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return L(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(jt(e))return}catch(e){}f(e,"unauthorized-domain")}function jt(e){const t=_(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Dt.test(n))return!1;if(Rt.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new S(3e4,6e4);function Ut(){const e=Ke().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Ht=null;function Ft(e){return Ht=Ht||function(e){return new Promise((t,n)=>{var i,r,s;function o(){Ut(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ut(),n(p(e,"network-request-failed"))},timeout:Mt.get()})}if(null===(r=null===(i=Ke().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(null===(s=Ke().gapi)||void 0===s||!s.load){const t=ut("iframefcb");return Ke()[t]=(()=>{gapi.load?o():n(p(e,"network-request-failed"))}),ct(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>n(e))}o()}}).catch(e=>{throw Ht=null,e})}(e)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new S(5e3,15e3),zt="__/auth/iframe",Bt="emulator/auth/iframe",Vt={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$t=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function Wt(e){const t=await Ft(e),n=Ke().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:function(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?C(t,Bt):`https://${e.config.authDomain}/${zt}`,s={apiKey:t.apiKey,appName:e.name,v:r.a},o=$t.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(i.v)(s).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vt,dontclear:!0},t=>new Promise(async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=p(e,"network-request-failed"),s=Ke().setTimeout(()=>{i(r)},qt.get());function o(){Ke().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{i(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kt=500,Xt=600,Jt="_blank",Yt="http://localhost";class Qt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Zt(e,t,n,r=Kt,s=Xt){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Gt),{width:r.toString(),height:s.toString(),top:o,left:a}),u=Object(i.k)().toLowerCase();n&&(l=te(u)?Jt:n),Z(u)&&(t=t||Yt,c.scrollbars="yes");const h=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=Object(i.k)()){var t;return oe(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==l)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",l),new Qt(null);const d=window.open(t||"",l,h);y(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Qt(d)}const en="__/auth/handler",tn="emulator/auth/handler";function nn(e,t,n,s,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r.a,eventId:o};if(t instanceof Ee){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",Object(i.n)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof _e){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const e of Object.keys(c))void 0===c[e]&&delete c[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${en}`;return C(e,tn)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Object(i.v)(c).slice(1)}`}const rn="webStorageSupport";const sn=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ve,this._completeRedirectFn=xt}async _openPopup(e,t,n,i){var r;return w(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()"),Zt(e,nn(e,t,n,_(),i),We())}async _openRedirect(e,t,n,i){return await this._originValidation(e),function(e){Ke().location.href=e}(nn(e,t,n,_(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Wt(e),n=new Ot(e);return t.register("authEvent",t=>(y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event"),{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rn,{type:rn},n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[rn];void 0!==r&&t(!!r),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pt(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ae()||ee()||oe()}};class on{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class an extends on{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new an(e)}_finalizeEnroll(e,t,n){return function(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}(class{constructor(){}static assertion(e){return an._fromCredential(e)}}).FACTOR_ID="phone";var ln="@firebase/auth",cn="0.19.12";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class un{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){Object(r.c)(new a.a("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((t,i)=>{y(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),y(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:le(e)},a=new ce(t,i,r);return function(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(E);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}(a,n),a})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Object(r.c)(new a.a("auth-internal",e=>(e=>new un(e))(ue(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Object(r.g)(ln,cn,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(e)),Object(r.g)(ln,cn,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */("Browser");var hn=n(10),dn=n(9),fn=n(8),pn=n(7);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r.g)("firebase","9.7.0","app");var gn=n(5),mn=Object(r.f)({apiKey:"AIzaSyCS5E0sntq5dN0g7FlW0B69dhwJp_3f-b8",authDomain:"app.pineapplespanish.com",projectId:"pineapplespanish-ff90a",storageBucket:"pineapplespanish-ff90a.appspot.com",messagingSenderId:"237714081439",appId:"1:237714081439:web:2d1130801f978c4fe8c4aa",measurementId:"G-T0PYJE03ZZ"}),vn=function(e=Object(r.e)()){const t=Object(r.b)(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Object(r.b)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if(Object(i.h)(r,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:sn,persistence:[lt,ze,Ve]})}(mn),yn=(Object(gn.a)(mn),window.location.pathname);!function(e,t,n,r){Object(i.j)(e).onAuthStateChanged(t,n,r)}(vn,function(e){return console.log("User updated: ",e)}),window.addEventListener("DOMContentLoaded",function(){console.log("Path is:",yn),yn.includes("index.html")||"/"===yn||yn.includes("createaccount.html")?(console.log("Index fired"),function(e,t,n,i,r){var s=document.querySelector(".login100-form"),o=document.querySelector(".g_signin"),a=document.querySelector(".f_signin");console.log("Auth is running"),s.addEventListener("submit",function(e){e.preventDefault();var i=s.email.value,r=s.password.value;n(t,i,r).then(function(e){console.log(e),window.location.href="./verbs.html"}).catch(function(e){return console.log("Error:",e.message)})}),console.log(o),o.addEventListener("click",function(e){console.log("g_signin 1"),e.preventDefault();var n=new r;console.log("g_signin 2"),i(t,n).then(function(e){console.log("g_signin 3");var t=r.credentialFromResult(e);window.location.href="./verbs.html",t.accessToken,e.user}).catch(function(e){console.log(e.message)})}),console.log(o),a.addEventListener("click",function(e){console.log("f_signin 1"),e.preventDefault();var n=new Ie;i(t,n).then(function(e){window.location.href="./verbs.html"}).catch(function(e){console.log(e.message)})})}(0,vn,je,Tt,ke)):yn.includes("verbs.html")?function(){var e=document.querySelector(".leftboy"),t=document.querySelector(".rightboy");e.addEventListener("click",function(e){e.target.classList.contains("pres_reg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/Vu0BdYuRbCM" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pres_hirreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/7O1bNIFc8qM" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pres_ei")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/6IElBxdOsfs" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pres_oue")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/SHvNTP7LyIo" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pres_eie")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/bxiKM_VjiMU" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pret_reg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/8931a0534b184dbe910d14af3c076405" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pret_hirreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/r9ZLr3SQUH4" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pret_stem")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/1aTeq7IG7Hw" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pret_ei")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/omaBhfYiAjE" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pret_ducir")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/jG3PfYPSZSY" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pret_weird")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/eG2cCS7C90g" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pret_synth")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/M6W2LkvCwLA" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("voy_a")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/QGJQpRlLrV0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("reflex_reg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/TteNDBPUFqg" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("reflex_irreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/uXGKrCuoDtg" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("gustar")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/1xsS_7QJPGw" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("gerreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/Z5cBoyKzTyE" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("gerirreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/Yqmh-GY0lYs" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("tengoque")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/YK_H4OsXg5Y" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pretvimperf")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/5e379b68782d4c2dabc2427d4475b506" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("imperf_reg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/ffd76d3a011e4f5a94671adb0bbb43b3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("imperf_irreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/5083e0761e0347e4a0d230ec801bf030" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("dop1")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/az3Nd-uB2JA" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("dop2")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/-LlPNvO3Frc" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("dop3")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/8eZg8bDGiDU" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("iop1")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/jO9CR9y8qyU" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pres_perf")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/RuTuY7ZeIt0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("pres_perf_irreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/vfEDC8fTRX8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("past_perf")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/AaJCbuII82k" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("imptv_af_tu")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/O6zs-vR9nig" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("imptv_af_ud")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/-4zy05jRDnc" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("imptv_ng_tuud")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/AQ4g82x1lh8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("imptv_nos")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/Hi7tzvPUP9U" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("imptv_uds")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/ap9SVKDjQuU" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("fut_reg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/YDrbnH8c24U" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("fut_irreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/ExmU5Bf_vZQ" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("fut_perf")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/op0Ei3yx6PY" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("cond")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/qFF7wqKu_XM" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("subj_pres")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/16C5WoornhY" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("what_is_subj")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/8kOeglNbC9s" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("subj_irreg")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/N163epReBhQ" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("subj_trig")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/ofB7cfCMKcs" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("subj_impf")?t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/uwtFPFzEz4k" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>':e.target.classList.contains("subj_perf")&&(t.innerHTML='<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/wMe1AqKuAyg" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>')})}():yn.includes("bookcall.html")?Object(hn.bookcall_fun)():yn.includes("memory.html")?Object(dn.memory_fun)():yn.includes("pron.html")?Object(fn.pron_fun)():yn.includes("vocab.html")&&Object(pn.vocab_fun)()})},function(e,t){var n,i,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l,c=[],u=!1,h=-1;function d(){u&&l&&(u=!1,l.length?c=l.concat(c):h=-1,c.length&&f())}function f(){if(!u){var e=a(d);u=!0;for(var t=c.length;t;){for(l=c,c=[];++h<t;)l&&l[h].run();h=-1,t=c.length}l=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||u||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,n){var i;
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
!function(t,n){"use strict";"object"==typeof e&&"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,function(n,r){"use strict";var s=[],o=Object.getPrototypeOf,a=s.slice,l=s.flat?function(e){return s.flat.call(e)}:function(e){return s.concat.apply([],e)},c=s.push,u=s.indexOf,h={},d=h.toString,f=h.hasOwnProperty,p=f.toString,g=p.call(Object),m={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},b=n.document,w={type:!0,src:!0,nonce:!0,noModule:!0};function T(e,t,n){var i,r,s=(n=n||b).createElement("script");if(s.text=e,t)for(i in w)(r=t[i]||t.getAttribute&&t.getAttribute(i))&&s.setAttribute(i,r);n.head.appendChild(s).parentNode.removeChild(s)}function E(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?h[d.call(e)]||"object":typeof e}var _=function(e,t){return new _.fn.init(e,t)};function I(e){var t=!!e&&"length"in e&&e.length,n=E(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}_.fn=_.prototype={jquery:"3.6.0",constructor:_,length:0,toArray:function(){return a.call(this)},get:function(e){return null==e?a.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=_.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return _.each(this,e)},map:function(e){return this.pushStack(_.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(_.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(_.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:s.sort,splice:s.splice},_.extend=_.fn.extend=function(){var e,t,n,i,r,s,o=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof o&&(c=o,o=arguments[a]||{},a++),"object"==typeof o||v(o)||(o={}),a===l&&(o=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)i=e[t],"__proto__"!==t&&o!==i&&(c&&i&&(_.isPlainObject(i)||(r=Array.isArray(i)))?(n=o[t],s=r&&!Array.isArray(n)?[]:r||_.isPlainObject(n)?n:{},r=!1,o[t]=_.extend(c,s,i)):void 0!==i&&(o[t]=i));return o},_.extend({expando:"jQuery"+("3.6.0"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==d.call(e))&&(!(t=o(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===g)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){T(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,i=0;if(I(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(I(Object(e))?_.merge(n,"string"==typeof e?[e]:e):c.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i=[],r=0,s=e.length,o=!n;r<s;r++)!t(e[r],r)!==o&&i.push(e[r]);return i},map:function(e,t,n){var i,r,s=0,o=[];if(I(e))for(i=e.length;s<i;s++)null!=(r=t(e[s],s,n))&&o.push(r);else for(s in e)null!=(r=t(e[s],s,n))&&o.push(r);return l(o)},guid:1,support:m}),"function"==typeof Symbol&&(_.fn[Symbol.iterator]=s[Symbol.iterator]),_.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){h["[object "+t+"]"]=t.toLowerCase()});var k=
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
function(e){var t,n,i,r,s,o,a,l,c,u,h,d,f,p,g,m,v,y,b,w="sizzle"+1*new Date,T=e.document,E=0,_=0,I=le(),k=le(),S=le(),C=le(),x=function(e,t){return e===t&&(h=!0),0},A={}.hasOwnProperty,O=[],N=O.pop,L=O.push,R=O.push,D=O.slice,P=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},j="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",U="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",H="\\["+M+"*("+U+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+U+"))|)"+M+"*\\]",F=":("+U+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+H+")*)|.*)\\)|)",q=new RegExp(M+"+","g"),z=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),B=new RegExp("^"+M+"*,"+M+"*"),V=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),$=new RegExp(M+"|>"),W=new RegExp(F),G=new RegExp("^"+U+"$"),K={ID:new RegExp("^#("+U+")"),CLASS:new RegExp("^\\.("+U+")"),TAG:new RegExp("^("+U+"|[*])"),ATTR:new RegExp("^"+H),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+j+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},X=/HTML$/i,J=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},ie=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,re=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},se=function(){d()},oe=we(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{R.apply(O=D.call(T.childNodes),T.childNodes),O[T.childNodes.length].nodeType}catch(e){R={apply:O.length?function(e,t){L.apply(e,D.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}function ae(e,t,i,r){var s,a,c,u,h,p,v,y=t&&t.ownerDocument,T=t?t.nodeType:9;if(i=i||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return i;if(!r&&(d(t),t=t||f,g)){if(11!==T&&(h=Z.exec(e)))if(s=h[1]){if(9===T){if(!(c=t.getElementById(s)))return i;if(c.id===s)return i.push(c),i}else if(y&&(c=y.getElementById(s))&&b(t,c)&&c.id===s)return i.push(c),i}else{if(h[2])return R.apply(i,t.getElementsByTagName(e)),i;if((s=h[3])&&n.getElementsByClassName&&t.getElementsByClassName)return R.apply(i,t.getElementsByClassName(s)),i}if(n.qsa&&!C[e+" "]&&(!m||!m.test(e))&&(1!==T||"object"!==t.nodeName.toLowerCase())){if(v=e,y=t,1===T&&($.test(e)||V.test(e))){for((y=ee.test(e)&&ve(t.parentNode)||t)===t&&n.scope||((u=t.getAttribute("id"))?u=u.replace(ie,re):t.setAttribute("id",u=w)),a=(p=o(e)).length;a--;)p[a]=(u?"#"+u:":scope")+" "+be(p[a]);v=p.join(",")}try{return R.apply(i,y.querySelectorAll(v)),i}catch(t){C(e,!0)}finally{u===w&&t.removeAttribute("id")}}}return l(e.replace(z,"$1"),t,i,r)}function le(){var e=[];return function t(n,r){return e.push(n+" ")>i.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function ce(e){return e[w]=!0,e}function ue(e){var t=f.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function he(e,t){for(var n=e.split("|"),r=n.length;r--;)i.attrHandle[n[r]]=t}function de(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ge(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&oe(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function me(e){return ce(function(t){return t=+t,ce(function(n,i){for(var r,s=e([],n.length,t),o=s.length;o--;)n[r=s[o]]&&(n[r]=!(i[r]=n[r]))})})}function ve(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=ae.support={},s=ae.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!X.test(t||n&&n.nodeName||"HTML")},d=ae.setDocument=function(e){var t,r,o=e?e.ownerDocument||e:T;return o!=f&&9===o.nodeType&&o.documentElement?(p=(f=o).documentElement,g=!s(f),T!=f&&(r=f.defaultView)&&r.top!==r&&(r.addEventListener?r.addEventListener("unload",se,!1):r.attachEvent&&r.attachEvent("onunload",se)),n.scope=ue(function(e){return p.appendChild(e).appendChild(f.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(f.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(f.getElementsByClassName),n.getById=ue(function(e){return p.appendChild(e).id=w,!f.getElementsByName||!f.getElementsByName(w).length}),n.getById?(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,i,r,s=t.getElementById(e);if(s){if((n=s.getAttributeNode("id"))&&n.value===e)return[s];for(r=t.getElementsByName(e),i=0;s=r[i++];)if((n=s.getAttributeNode("id"))&&n.value===e)return[s]}return[]}}),i.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,s=t.getElementsByTagName(e);if("*"===e){for(;n=s[r++];)1===n.nodeType&&i.push(n);return i}return s},i.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],m=[],(n.qsa=Q.test(f.querySelectorAll))&&(ue(function(e){var t;p.appendChild(e).innerHTML="<a id='"+w+"'></a><select id='"+w+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+M+"*(?:value|"+j+")"),e.querySelectorAll("[id~="+w+"-]").length||m.push("~="),(t=f.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||m.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+w+"+*").length||m.push(".#.+[+~]"),e.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=f.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),p.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")})),(n.matchesSelector=Q.test(y=p.matches||p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),v.push("!=",F)}),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(p.compareDocumentPosition),b=t||Q.test(p.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},x=t?function(e,t){if(e===t)return h=!0,0;var i=!e.compareDocumentPosition-!t.compareDocumentPosition;return i||(1&(i=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===i?e==f||e.ownerDocument==T&&b(T,e)?-1:t==f||t.ownerDocument==T&&b(T,t)?1:u?P(u,e)-P(u,t):0:4&i?-1:1)}:function(e,t){if(e===t)return h=!0,0;var n,i=0,r=e.parentNode,s=t.parentNode,o=[e],a=[t];if(!r||!s)return e==f?-1:t==f?1:r?-1:s?1:u?P(u,e)-P(u,t):0;if(r===s)return de(e,t);for(n=e;n=n.parentNode;)o.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;o[i]===a[i];)i++;return i?de(o[i],a[i]):o[i]==T?-1:a[i]==T?1:0},f):f},ae.matches=function(e,t){return ae(e,null,null,t)},ae.matchesSelector=function(e,t){if(d(e),n.matchesSelector&&g&&!C[t+" "]&&(!v||!v.test(t))&&(!m||!m.test(t)))try{var i=y.call(e,t);if(i||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){C(t,!0)}return ae(t,f,null,[e]).length>0},ae.contains=function(e,t){return(e.ownerDocument||e)!=f&&d(e),b(e,t)},ae.attr=function(e,t){(e.ownerDocument||e)!=f&&d(e);var r=i.attrHandle[t.toLowerCase()],s=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!g):void 0;return void 0!==s?s:n.attributes||!g?e.getAttribute(t):(s=e.getAttributeNode(t))&&s.specified?s.value:null},ae.escape=function(e){return(e+"").replace(ie,re)},ae.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ae.uniqueSort=function(e){var t,i=[],r=0,s=0;if(h=!n.detectDuplicates,u=!n.sortStable&&e.slice(0),e.sort(x),h){for(;t=e[s++];)t===e[s]&&(r=i.push(s));for(;r--;)e.splice(i[r],1)}return u=null,e},r=ae.getText=function(e){var t,n="",i=0,s=e.nodeType;if(s){if(1===s||9===s||11===s){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=r(e)}else if(3===s||4===s)return e.nodeValue}else for(;t=e[i++];)n+=r(t);return n},(i=ae.selectors={cacheLength:50,createPseudo:ce,match:K,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ae.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ae.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return K.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&W.test(n)&&(t=o(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=I[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&I(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(i){var r=ae.attr(i,e);return null==r?"!="===t:!t||(r+="","="===t?r===n:"!="===t?r!==n:"^="===t?n&&0===r.indexOf(n):"*="===t?n&&r.indexOf(n)>-1:"$="===t?n&&r.slice(-n.length)===n:"~="===t?(" "+r.replace(q," ")+" ").indexOf(n)>-1:"|="===t&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,i,r){var s="nth"!==e.slice(0,3),o="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,l){var c,u,h,d,f,p,g=s!==o?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a,b=!1;if(m){if(s){for(;g;){for(d=t;d=d[g];)if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;p=g="only"===e&&!p&&"nextSibling"}return!0}if(p=[o?m.firstChild:m.lastChild],o&&y){for(b=(f=(c=(u=(h=(d=m)[w]||(d[w]={}))[d.uniqueID]||(h[d.uniqueID]={}))[e]||[])[0]===E&&c[1])&&c[2],d=f&&m.childNodes[f];d=++f&&d&&d[g]||(b=f=0)||p.pop();)if(1===d.nodeType&&++b&&d===t){u[e]=[E,f,b];break}}else if(y&&(b=f=(c=(u=(h=(d=t)[w]||(d[w]={}))[d.uniqueID]||(h[d.uniqueID]={}))[e]||[])[0]===E&&c[1]),!1===b)for(;(d=++f&&d&&d[g]||(b=f=0)||p.pop())&&((a?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++b||(y&&((u=(h=d[w]||(d[w]={}))[d.uniqueID]||(h[d.uniqueID]={}))[e]=[E,b]),d!==t)););return(b-=r)===i||b%i==0&&b/i>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ae.error("unsupported pseudo: "+e);return r[w]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ce(function(e,n){for(var i,s=r(e,t),o=s.length;o--;)e[i=P(e,s[o])]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ce(function(e){var t=[],n=[],i=a(e.replace(z,"$1"));return i[w]?ce(function(e,t,n,r){for(var s,o=i(e,null,r,[]),a=e.length;a--;)(s=o[a])&&(e[a]=!(t[a]=s))}):function(e,r,s){return t[0]=e,i(t,null,s,n),t[0]=null,!n.pop()}}),has:ce(function(e){return function(t){return ae(e,t).length>0}}),contains:ce(function(e){return e=e.replace(te,ne),function(t){return(t.textContent||r(t)).indexOf(e)>-1}}),lang:ce(function(e){return G.test(e||"")||ae.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return J.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:me(function(){return[0]}),last:me(function(e,t){return[t-1]}),eq:me(function(e,t,n){return[n<0?n+t:n]}),even:me(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:me(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:me(function(e,t,n){for(var i=n<0?n+t:n>t?t:n;--i>=0;)e.push(i);return e}),gt:me(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=pe(t);function ye(){}function be(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function we(e,t,n){var i=t.dir,r=t.next,s=r||i,o=n&&"parentNode"===s,a=_++;return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||o)return e(t,n,r);return!1}:function(t,n,l){var c,u,h,d=[E,a];if(l){for(;t=t[i];)if((1===t.nodeType||o)&&e(t,n,l))return!0}else for(;t=t[i];)if(1===t.nodeType||o)if(u=(h=t[w]||(t[w]={}))[t.uniqueID]||(h[t.uniqueID]={}),r&&r===t.nodeName.toLowerCase())t=t[i]||t;else{if((c=u[s])&&c[0]===E&&c[1]===a)return d[2]=c[2];if(u[s]=d,d[2]=e(t,n,l))return!0}return!1}}function Te(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function Ee(e,t,n,i,r){for(var s,o=[],a=0,l=e.length,c=null!=t;a<l;a++)(s=e[a])&&(n&&!n(s,i,r)||(o.push(s),c&&t.push(a)));return o}function _e(e,t,n,i,r,s){return i&&!i[w]&&(i=_e(i)),r&&!r[w]&&(r=_e(r,s)),ce(function(s,o,a,l){var c,u,h,d=[],f=[],p=o.length,g=s||function(e,t,n){for(var i=0,r=t.length;i<r;i++)ae(e,t[i],n);return n}(t||"*",a.nodeType?[a]:a,[]),m=!e||!s&&t?g:Ee(g,d,e,a,l),v=n?r||(s?e:p||i)?[]:o:m;if(n&&n(m,v,a,l),i)for(c=Ee(v,f),i(c,[],a,l),u=c.length;u--;)(h=c[u])&&(v[f[u]]=!(m[f[u]]=h));if(s){if(r||e){if(r){for(c=[],u=v.length;u--;)(h=v[u])&&c.push(m[u]=h);r(null,v=[],c,l)}for(u=v.length;u--;)(h=v[u])&&(c=r?P(s,h):d[u])>-1&&(s[c]=!(o[c]=h))}}else v=Ee(v===o?v.splice(p,v.length):v),r?r(null,o,v,l):R.apply(o,v)})}function Ie(e){for(var t,n,r,s=e.length,o=i.relative[e[0].type],a=o||i.relative[" "],l=o?1:0,u=we(function(e){return e===t},a,!0),h=we(function(e){return P(t,e)>-1},a,!0),d=[function(e,n,i){var r=!o&&(i||n!==c)||((t=n).nodeType?u(e,n,i):h(e,n,i));return t=null,r}];l<s;l++)if(n=i.relative[e[l].type])d=[we(Te(d),n)];else{if((n=i.filter[e[l].type].apply(null,e[l].matches))[w]){for(r=++l;r<s&&!i.relative[e[r].type];r++);return _e(l>1&&Te(d),l>1&&be(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,l<r&&Ie(e.slice(l,r)),r<s&&Ie(e=e.slice(r)),r<s&&be(e))}d.push(n)}return Te(d)}return ye.prototype=i.filters=i.pseudos,i.setFilters=new ye,o=ae.tokenize=function(e,t){var n,r,s,o,a,l,c,u=k[e+" "];if(u)return t?0:u.slice(0);for(a=e,l=[],c=i.preFilter;a;){for(o in n&&!(r=B.exec(a))||(r&&(a=a.slice(r[0].length)||a),l.push(s=[])),n=!1,(r=V.exec(a))&&(n=r.shift(),s.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length)),i.filter)!(r=K[o].exec(a))||c[o]&&!(r=c[o](r))||(n=r.shift(),s.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ae.error(e):k(e,l).slice(0)},a=ae.compile=function(e,t){var n,r=[],s=[],a=S[e+" "];if(!a){for(t||(t=o(e)),n=t.length;n--;)(a=Ie(t[n]))[w]?r.push(a):s.push(a);(a=S(e,function(e,t){var n=t.length>0,r=e.length>0,s=function(s,o,a,l,u){var h,p,m,v=0,y="0",b=s&&[],w=[],T=c,_=s||r&&i.find.TAG("*",u),I=E+=null==T?1:Math.random()||.1,k=_.length;for(u&&(c=o==f||o||u);y!==k&&null!=(h=_[y]);y++){if(r&&h){for(p=0,o||h.ownerDocument==f||(d(h),a=!g);m=e[p++];)if(m(h,o||f,a)){l.push(h);break}u&&(E=I)}n&&((h=!m&&h)&&v--,s&&b.push(h))}if(v+=y,n&&y!==v){for(p=0;m=t[p++];)m(b,w,o,a);if(s){if(v>0)for(;y--;)b[y]||w[y]||(w[y]=N.call(l));w=Ee(w)}R.apply(l,w),u&&!s&&w.length>0&&v+t.length>1&&ae.uniqueSort(l)}return u&&(E=I,c=T),b};return n?ce(s):s}(s,r))).selector=e}return a},l=ae.select=function(e,t,n,r){var s,l,c,u,h,d="function"==typeof e&&e,f=!r&&o(e=d.selector||e);if(n=n||[],1===f.length){if((l=f[0]=f[0].slice(0)).length>2&&"ID"===(c=l[0]).type&&9===t.nodeType&&g&&i.relative[l[1].type]){if(!(t=(i.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return n;d&&(t=t.parentNode),e=e.slice(l.shift().value.length)}for(s=K.needsContext.test(e)?0:l.length;s--&&(c=l[s],!i.relative[u=c.type]);)if((h=i.find[u])&&(r=h(c.matches[0].replace(te,ne),ee.test(l[0].type)&&ve(t.parentNode)||t))){if(l.splice(s,1),!(e=r.length&&be(l)))return R.apply(n,r),n;break}}return(d||a(e,f))(r,t,!g,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},n.sortStable=w.split("").sort(x).join("")===w,n.detectDuplicates=!!h,d(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(f.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||he("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||he("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||he(j,function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),ae}(n);_.find=k,_.expr=k.selectors,_.expr[":"]=_.expr.pseudos,_.uniqueSort=_.unique=k.uniqueSort,_.text=k.getText,_.isXMLDoc=k.isXML,_.contains=k.contains,_.escapeSelector=k.escape;var S=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&_(e).is(n))break;i.push(e)}return i},C=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},x=_.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var O=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function N(e,t,n){return v(t)?_.grep(e,function(e,i){return!!t.call(e,i,e)!==n}):t.nodeType?_.grep(e,function(e){return e===t!==n}):"string"!=typeof t?_.grep(e,function(e){return u.call(t,e)>-1!==n}):_.filter(t,e,n)}_.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?_.find.matchesSelector(i,e)?[i]:[]:_.find.matches(e,_.grep(t,function(e){return 1===e.nodeType}))},_.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(_(e).filter(function(){for(t=0;t<i;t++)if(_.contains(r[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)_.find(e,r[t],n);return i>1?_.uniqueSort(n):n},filter:function(e){return this.pushStack(N(this,e||[],!1))},not:function(e){return this.pushStack(N(this,e||[],!0))},is:function(e){return!!N(this,"string"==typeof e&&x.test(e)?_(e):e||[],!1).length}});var L,R=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(_.fn.init=function(e,t,n){var i,r;if(!e)return this;if(n=n||L,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:R.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof _?t[0]:t,_.merge(this,_.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:b,!0)),O.test(i[1])&&_.isPlainObject(t))for(i in t)v(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(r=b.getElementById(i[2]))&&(this[0]=r,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(_):_.makeArray(e,this)}).prototype=_.fn,L=_(b);var D=/^(?:parents|prev(?:Until|All))/,P={children:!0,contents:!0,next:!0,prev:!0};function j(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}_.fn.extend({has:function(e){var t=_(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(_.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,r=this.length,s=[],o="string"!=typeof e&&_(e);if(!x.test(e))for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&_.find.matchesSelector(n,e))){s.push(n);break}return this.pushStack(s.length>1?_.uniqueSort(s):s)},index:function(e){return e?"string"==typeof e?u.call(_(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(_.uniqueSort(_.merge(this.get(),_(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),_.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return S(e,"parentNode")},parentsUntil:function(e,t,n){return S(e,"parentNode",n)},next:function(e){return j(e,"nextSibling")},prev:function(e){return j(e,"previousSibling")},nextAll:function(e){return S(e,"nextSibling")},prevAll:function(e){return S(e,"previousSibling")},nextUntil:function(e,t,n){return S(e,"nextSibling",n)},prevUntil:function(e,t,n){return S(e,"previousSibling",n)},siblings:function(e){return C((e.parentNode||{}).firstChild,e)},children:function(e){return C(e.firstChild)},contents:function(e){return null!=e.contentDocument&&o(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),_.merge([],e.childNodes))}},function(e,t){_.fn[e]=function(n,i){var r=_.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=_.filter(i,r)),this.length>1&&(P[e]||_.uniqueSort(r),D.test(e)&&r.reverse()),this.pushStack(r)}});var M=/[^\x20\t\r\n\f]+/g;function U(e){return e}function H(e){throw e}function F(e,t,n,i){var r;try{e&&v(r=e.promise)?r.call(e).done(t).fail(n):e&&v(r=e.then)?r.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}_.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return _.each(e.match(M)||[],function(e,n){t[n]=!0}),t}(e):_.extend({},e);var t,n,i,r,s=[],o=[],a=-1,l=function(){for(r=r||e.once,i=t=!0;o.length;a=-1)for(n=o.shift();++a<s.length;)!1===s[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=s.length,n=!1);e.memory||(n=!1),t=!1,r&&(s=n?[]:"")},c={add:function(){return s&&(n&&!t&&(a=s.length-1,o.push(n)),function t(n){_.each(n,function(n,i){v(i)?e.unique&&c.has(i)||s.push(i):i&&i.length&&"string"!==E(i)&&t(i)})}(arguments),n&&!t&&l()),this},remove:function(){return _.each(arguments,function(e,t){for(var n;(n=_.inArray(t,s,n))>-1;)s.splice(n,1),n<=a&&a--}),this},has:function(e){return e?_.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return r=o=[],s=n="",this},disabled:function(){return!s},lock:function(){return r=o=[],n||t||(s=n=""),this},locked:function(){return!!r},fireWith:function(e,n){return r||(n=[e,(n=n||[]).slice?n.slice():n],o.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!i}};return c},_.extend({Deferred:function(e){var t=[["notify","progress",_.Callbacks("memory"),_.Callbacks("memory"),2],["resolve","done",_.Callbacks("once memory"),_.Callbacks("once memory"),0,"resolved"],["reject","fail",_.Callbacks("once memory"),_.Callbacks("once memory"),1,"rejected"]],i="pending",r={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return r.then(null,e)},pipe:function(){var e=arguments;return _.Deferred(function(n){_.each(t,function(t,i){var r=v(e[i[4]])&&e[i[4]];s[i[1]](function(){var e=r&&r.apply(this,arguments);e&&v(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[i[0]+"With"](this,r?[e]:arguments)})}),e=null}).promise()},then:function(e,i,r){var s=0;function o(e,t,i,r){return function(){var a=this,l=arguments,c=function(){var n,c;if(!(e<s)){if((n=i.apply(a,l))===t.promise())throw new TypeError("Thenable self-resolution");c=n&&("object"==typeof n||"function"==typeof n)&&n.then,v(c)?r?c.call(n,o(s,t,U,r),o(s,t,H,r)):(s++,c.call(n,o(s,t,U,r),o(s,t,H,r),o(s,t,U,t.notifyWith))):(i!==U&&(a=void 0,l=[n]),(r||t.resolveWith)(a,l))}},u=r?c:function(){try{c()}catch(n){_.Deferred.exceptionHook&&_.Deferred.exceptionHook(n,u.stackTrace),e+1>=s&&(i!==H&&(a=void 0,l=[n]),t.rejectWith(a,l))}};e?u():(_.Deferred.getStackHook&&(u.stackTrace=_.Deferred.getStackHook()),n.setTimeout(u))}}return _.Deferred(function(n){t[0][3].add(o(0,n,v(r)?r:U,n.notifyWith)),t[1][3].add(o(0,n,v(e)?e:U)),t[2][3].add(o(0,n,v(i)?i:H))}).promise()},promise:function(e){return null!=e?_.extend(e,r):r}},s={};return _.each(t,function(e,n){var o=n[2],a=n[5];r[n[1]]=o.add,a&&o.add(function(){i=a},t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),o.add(n[3].fire),s[n[0]]=function(){return s[n[0]+"With"](this===s?void 0:this,arguments),this},s[n[0]+"With"]=o.fireWith}),r.promise(s),e&&e.call(s,s),s},when:function(e){var t=arguments.length,n=t,i=Array(n),r=a.call(arguments),s=_.Deferred(),o=function(e){return function(n){i[e]=this,r[e]=arguments.length>1?a.call(arguments):n,--t||s.resolveWith(i,r)}};if(t<=1&&(F(e,s.done(o(n)).resolve,s.reject,!t),"pending"===s.state()||v(r[n]&&r[n].then)))return s.then();for(;n--;)F(r[n],o(n),s.reject);return s.promise()}});var q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;_.Deferred.exceptionHook=function(e,t){n.console&&n.console.warn&&e&&q.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},_.readyException=function(e){n.setTimeout(function(){throw e})};var z=_.Deferred();function B(){b.removeEventListener("DOMContentLoaded",B),n.removeEventListener("load",B),_.ready()}_.fn.ready=function(e){return z.then(e).catch(function(e){_.readyException(e)}),this},_.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--_.readyWait:_.isReady)||(_.isReady=!0,!0!==e&&--_.readyWait>0||z.resolveWith(b,[_]))}}),_.ready.then=z.then,"complete"===b.readyState||"loading"!==b.readyState&&!b.documentElement.doScroll?n.setTimeout(_.ready):(b.addEventListener("DOMContentLoaded",B),n.addEventListener("load",B));var V=function(e,t,n,i,r,s,o){var a=0,l=e.length,c=null==n;if("object"===E(n))for(a in r=!0,n)V(e,t,a,n[a],!0,s,o);else if(void 0!==i&&(r=!0,v(i)||(o=!0),c&&(o?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(_(e),n)})),t))for(;a<l;a++)t(e[a],n,o?i:i.call(e[a],a,t(e[a],n)));return r?e:c?t.call(e):l?t(e[0],n):s},$=/^-ms-/,W=/-([a-z])/g;function G(e,t){return t.toUpperCase()}function K(e){return e.replace($,"ms-").replace(W,G)}var X=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function J(){this.expando=_.expando+J.uid++}J.uid=1,J.prototype={cache:function(e){var t=e[this.expando];return t||(t={},X(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);if("string"==typeof t)r[K(t)]=n;else for(i in t)r[K(i)]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][K(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map(K):(t=K(t))in i?[t]:t.match(M)||[]).length;for(;n--;)delete i[t[n]]}(void 0===t||_.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!_.isEmptyObject(t)}};var Y=new J,Q=new J,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}(n)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}_.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),_.fn.extend({data:function(e,t){var n,i,r,s=this[0],o=s&&s.attributes;if(void 0===e){if(this.length&&(r=Q.get(s),1===s.nodeType&&!Y.get(s,"hasDataAttrs"))){for(n=o.length;n--;)o[n]&&0===(i=o[n].name).indexOf("data-")&&(i=K(i.slice(5)),te(s,i,r[i]));Y.set(s,"hasDataAttrs",!0)}return r}return"object"==typeof e?this.each(function(){Q.set(this,e)}):V(this,function(t){var n;if(s&&void 0===t)return void 0!==(n=Q.get(s,e))?n:void 0!==(n=te(s,e))?n:void 0;this.each(function(){Q.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),_.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=Y.get(e,t),n&&(!i||Array.isArray(n)?i=Y.access(e,t,_.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=_.queue(e,t),i=n.length,r=n.shift(),s=_._queueHooks(e,t);"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete s.stop,r.call(e,function(){_.dequeue(e,t)},s)),!i&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:_.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),_.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?_.queue(this[0],e):void 0===t?this:this.each(function(){var n=_.queue(this,e,t);_._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&_.dequeue(this,e)})},dequeue:function(e){return this.each(function(){_.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=_.Deferred(),s=this,o=this.length,a=function(){--i||r.resolveWith(s,[s])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";o--;)(n=Y.get(s[o],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var ne=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+ne+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],se=b.documentElement,oe=function(e){return _.contains(e.ownerDocument,e)},ae={composed:!0};se.getRootNode&&(oe=function(e){return _.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var le=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===_.css(e,"display")};function ce(e,t,n,i){var r,s,o=20,a=i?function(){return i.cur()}:function(){return _.css(e,t,"")},l=a(),c=n&&n[3]||(_.cssNumber[t]?"":"px"),u=e.nodeType&&(_.cssNumber[t]||"px"!==c&&+l)&&ie.exec(_.css(e,t));if(u&&u[3]!==c){for(l/=2,c=c||u[3],u=+l||1;o--;)_.style(e,t,u+c),(1-s)*(1-(s=a()/l||.5))<=0&&(o=0),u/=s;u*=2,_.style(e,t,u+c),n=n||[]}return n&&(u=+u||+l||0,r=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=r)),r}var ue={};function he(e){var t,n=e.ownerDocument,i=e.nodeName,r=ue[i];return r||(t=n.body.appendChild(n.createElement(i)),r=_.css(t,"display"),t.parentNode.removeChild(t),"none"===r&&(r="block"),ue[i]=r,r)}function de(e,t){for(var n,i,r=[],s=0,o=e.length;s<o;s++)(i=e[s]).style&&(n=i.style.display,t?("none"===n&&(r[s]=Y.get(i,"display")||null,r[s]||(i.style.display="")),""===i.style.display&&le(i)&&(r[s]=he(i))):"none"!==n&&(r[s]="none",Y.set(i,"display",n)));for(s=0;s<o;s++)null!=r[s]&&(e[s].style.display=r[s]);return e}_.fn.extend({show:function(){return de(this,!0)},hide:function(){return de(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){le(this)?_(this).show():_(this).hide()})}});var fe=/^(?:checkbox|radio)$/i,pe=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ge=/^$|^module$|\/(?:java|ecma)script/i;!function(){var e=b.createDocumentFragment().appendChild(b.createElement("div")),t=b.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),m.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue,e.innerHTML="<option></option>",m.option=!!e.lastChild}();var me={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?_.merge([e],n):n}function ye(e,t){for(var n=0,i=e.length;n<i;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}me.tbody=me.tfoot=me.colgroup=me.caption=me.thead,me.th=me.td,m.option||(me.optgroup=me.option=[1,"<select multiple='multiple'>","</select>"]);var be=/<|&#?\w+;/;function we(e,t,n,i,r){for(var s,o,a,l,c,u,h=t.createDocumentFragment(),d=[],f=0,p=e.length;f<p;f++)if((s=e[f])||0===s)if("object"===E(s))_.merge(d,s.nodeType?[s]:s);else if(be.test(s)){for(o=o||h.appendChild(t.createElement("div")),a=(pe.exec(s)||["",""])[1].toLowerCase(),l=me[a]||me._default,o.innerHTML=l[1]+_.htmlPrefilter(s)+l[2],u=l[0];u--;)o=o.lastChild;_.merge(d,o.childNodes),(o=h.firstChild).textContent=""}else d.push(t.createTextNode(s));for(h.textContent="",f=0;s=d[f++];)if(i&&_.inArray(s,i)>-1)r&&r.push(s);else if(c=oe(s),o=ve(h.appendChild(s),"script"),c&&ye(o),n)for(u=0;s=o[u++];)ge.test(s.type||"")&&n.push(s);return h}var Te=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function _e(){return!1}function Ie(e,t){return e===function(){try{return b.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,i,r,s){var o,a;if("object"==typeof t){for(a in"string"!=typeof n&&(i=i||n,n=void 0),t)ke(e,a,n,i,t[a],s);return e}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),!1===r)r=_e;else if(!r)return e;return 1===s&&(o=r,(r=function(e){return _().off(e),o.apply(this,arguments)}).guid=o.guid||(o.guid=_.guid++)),e.each(function(){_.event.add(this,t,r,i,n)})}function Se(e,t,n){n?(Y.set(e,t,!1),_.event.add(e,t,{namespace:!1,handler:function(e){var i,r,s=Y.get(this,t);if(1&e.isTrigger&&this[t]){if(s.length)(_.event.special[t]||{}).delegateType&&e.stopPropagation();else if(s=a.call(arguments),Y.set(this,t,s),i=n(this,t),this[t](),s!==(r=Y.get(this,t))||i?Y.set(this,t,!1):r={},s!==r)return e.stopImmediatePropagation(),e.preventDefault(),r&&r.value}else s.length&&(Y.set(this,t,{value:_.event.trigger(_.extend(s[0],_.Event.prototype),s.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,t)&&_.event.add(e,t,Ee)}_.event={global:{},add:function(e,t,n,i,r){var s,o,a,l,c,u,h,d,f,p,g,m=Y.get(e);if(X(e))for(n.handler&&(n=(s=n).handler,r=s.selector),r&&_.find.matchesSelector(se,r),n.guid||(n.guid=_.guid++),(l=m.events)||(l=m.events=Object.create(null)),(o=m.handle)||(o=m.handle=function(t){return void 0!==_&&_.event.triggered!==t.type?_.event.dispatch.apply(e,arguments):void 0}),c=(t=(t||"").match(M)||[""]).length;c--;)f=g=(a=Te.exec(t[c])||[])[1],p=(a[2]||"").split(".").sort(),f&&(h=_.event.special[f]||{},f=(r?h.delegateType:h.bindType)||f,h=_.event.special[f]||{},u=_.extend({type:f,origType:g,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&_.expr.match.needsContext.test(r),namespace:p.join(".")},s),(d=l[f])||((d=l[f]=[]).delegateCount=0,h.setup&&!1!==h.setup.call(e,i,p,o)||e.addEventListener&&e.addEventListener(f,o)),h.add&&(h.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),r?d.splice(d.delegateCount++,0,u):d.push(u),_.event.global[f]=!0)},remove:function(e,t,n,i,r){var s,o,a,l,c,u,h,d,f,p,g,m=Y.hasData(e)&&Y.get(e);if(m&&(l=m.events)){for(c=(t=(t||"").match(M)||[""]).length;c--;)if(f=g=(a=Te.exec(t[c])||[])[1],p=(a[2]||"").split(".").sort(),f){for(h=_.event.special[f]||{},d=l[f=(i?h.delegateType:h.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=s=d.length;s--;)u=d[s],!r&&g!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(d.splice(s,1),u.selector&&d.delegateCount--,h.remove&&h.remove.call(e,u));o&&!d.length&&(h.teardown&&!1!==h.teardown.call(e,p,m.handle)||_.removeEvent(e,f,m.handle),delete l[f])}else for(f in l)_.event.remove(e,f+t[c],n,i,!0);_.isEmptyObject(l)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,i,r,s,o,a=new Array(arguments.length),l=_.event.fix(e),c=(Y.get(this,"events")||Object.create(null))[l.type]||[],u=_.event.special[l.type]||{};for(a[0]=l,t=1;t<arguments.length;t++)a[t]=arguments[t];if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){for(o=_.event.handlers.call(this,l,c),t=0;(r=o[t++])&&!l.isPropagationStopped();)for(l.currentTarget=r.elem,n=0;(s=r.handlers[n++])&&!l.isImmediatePropagationStopped();)l.rnamespace&&!1!==s.namespace&&!l.rnamespace.test(s.namespace)||(l.handleObj=s,l.data=s.data,void 0!==(i=((_.event.special[s.origType]||{}).handle||s.handler).apply(r.elem,a))&&!1===(l.result=i)&&(l.preventDefault(),l.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,i,r,s,o,a=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&e.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(s=[],o={},n=0;n<l;n++)void 0===o[r=(i=t[n]).selector+" "]&&(o[r]=i.needsContext?_(r,this).index(c)>-1:_.find(r,this,null,[c]).length),o[r]&&s.push(i);s.length&&a.push({elem:c,handlers:s})}return c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a},addProp:function(e,t){Object.defineProperty(_.Event.prototype,e,{enumerable:!0,configurable:!0,get:v(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[_.expando]?e:new _.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return fe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",Ee),!1},trigger:function(e){var t=this||e;return fe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return fe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},_.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},_.Event=function(e,t){if(!(this instanceof _.Event))return new _.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:_e,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&_.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[_.expando]=!0},_.Event.prototype={constructor:_.Event,isDefaultPrevented:_e,isPropagationStopped:_e,isImmediatePropagationStopped:_e,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},_.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},_.event.addProp),_.each({focus:"focusin",blur:"focusout"},function(e,t){_.event.special[e]={setup:function(){return Se(this,e,Ie),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),_.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){_.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=e.relatedTarget,r=e.handleObj;return i&&(i===this||_.contains(this,i))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}}),_.fn.extend({on:function(e,t,n,i){return ke(this,e,t,n,i)},one:function(e,t,n,i){return ke(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,_(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=_e),this.each(function(){_.event.remove(this,e,n,t)})}});var Ce=/<script|<style|<link/i,xe=/checked\s*(?:[^=]|=\s*.checked.)/i,Ae=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&_(e).children("tbody")[0]||e}function Ne(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Le(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Re(e,t){var n,i,r,s,o,a;if(1===t.nodeType){if(Y.hasData(e)&&(a=Y.get(e).events))for(r in Y.remove(t,"handle events"),a)for(n=0,i=a[r].length;n<i;n++)_.event.add(t,r,a[r][n]);Q.hasData(e)&&(s=Q.access(e),o=_.extend({},s),Q.set(t,o))}}function De(e,t){var n=t.nodeName.toLowerCase();"input"===n&&fe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Pe(e,t,n,i){t=l(t);var r,s,o,a,c,u,h=0,d=e.length,f=d-1,p=t[0],g=v(p);if(g||d>1&&"string"==typeof p&&!m.checkClone&&xe.test(p))return e.each(function(r){var s=e.eq(r);g&&(t[0]=p.call(this,r,s.html())),Pe(s,t,n,i)});if(d&&(s=(r=we(t,e[0].ownerDocument,!1,e,i)).firstChild,1===r.childNodes.length&&(r=s),s||i)){for(a=(o=_.map(ve(r,"script"),Ne)).length;h<d;h++)c=r,h!==f&&(c=_.clone(c,!0,!0),a&&_.merge(o,ve(c,"script"))),n.call(e[h],c,h);if(a)for(u=o[o.length-1].ownerDocument,_.map(o,Le),h=0;h<a;h++)c=o[h],ge.test(c.type||"")&&!Y.access(c,"globalEval")&&_.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?_._evalUrl&&!c.noModule&&_._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},u):T(c.textContent.replace(Ae,""),c,u))}return e}function je(e,t,n){for(var i,r=t?_.filter(t,e):e,s=0;null!=(i=r[s]);s++)n||1!==i.nodeType||_.cleanData(ve(i)),i.parentNode&&(n&&oe(i)&&ye(ve(i,"script")),i.parentNode.removeChild(i));return e}_.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var i,r,s,o,a=e.cloneNode(!0),l=oe(e);if(!(m.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||_.isXMLDoc(e)))for(o=ve(a),i=0,r=(s=ve(e)).length;i<r;i++)De(s[i],o[i]);if(t)if(n)for(s=s||ve(e),o=o||ve(a),i=0,r=s.length;i<r;i++)Re(s[i],o[i]);else Re(e,a);return(o=ve(a,"script")).length>0&&ye(o,!l&&ve(e,"script")),a},cleanData:function(e){for(var t,n,i,r=_.event.special,s=0;void 0!==(n=e[s]);s++)if(X(n)){if(t=n[Y.expando]){if(t.events)for(i in t.events)r[i]?_.event.remove(n,i):_.removeEvent(n,i,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),_.fn.extend({detach:function(e){return je(this,e,!0)},remove:function(e){return je(this,e)},text:function(e){return V(this,function(e){return void 0===e?_.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(_.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return _.clone(this,e,t)})},html:function(e){return V(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ce.test(e)&&!me[(pe.exec(e)||["",""])[1].toLowerCase()]){e=_.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(_.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Pe(this,arguments,function(t){var n=this.parentNode;_.inArray(this,e)<0&&(_.cleanData(ve(this)),n&&n.replaceChild(t,this))},e)}}),_.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){_.fn[e]=function(e){for(var n,i=[],r=_(e),s=r.length-1,o=0;o<=s;o++)n=o===s?this:this.clone(!0),_(r[o])[t](n),c.apply(i,n.get());return this.pushStack(i)}});var Me=new RegExp("^("+ne+")(?!px)[a-z%]+$","i"),Ue=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)},He=function(e,t,n){var i,r,s={};for(r in t)s[r]=e.style[r],e.style[r]=t[r];for(r in i=n.call(e),t)e.style[r]=s[r];return i},Fe=new RegExp(re.join("|"),"i");function qe(e,t,n){var i,r,s,o,a=e.style;return(n=n||Ue(e))&&(""!==(o=n.getPropertyValue(t)||n[t])||oe(e)||(o=_.style(e,t)),!m.pixelBoxStyles()&&Me.test(o)&&Fe.test(t)&&(i=a.width,r=a.minWidth,s=a.maxWidth,a.minWidth=a.maxWidth=a.width=o,o=n.width,a.width=i,a.minWidth=r,a.maxWidth=s)),void 0!==o?o+"":o}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",se.appendChild(c).appendChild(u);var e=n.getComputedStyle(u);i="1%"!==e.top,l=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",s=12===t(u.offsetWidth/3),se.removeChild(c),u=null}}function t(e){return Math.round(parseFloat(e))}var i,r,s,o,a,l,c=b.createElement("div"),u=b.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===u.style.backgroundClip,_.extend(m,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),i},reliableMarginLeft:function(){return e(),l},scrollboxSize:function(){return e(),s},reliableTrDimensions:function(){var e,t,i,r;return null==a&&(e=b.createElement("table"),t=b.createElement("tr"),i=b.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",i.style.height="9px",i.style.display="block",se.appendChild(e).appendChild(t).appendChild(i),r=n.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,se.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],Ve=b.createElement("div").style,$e={};function We(e){var t=_.cssProps[e]||$e[e];return t||(e in Ve?e:$e[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Be.length;n--;)if((e=Be[n]+t)in Ve)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ke=/^--/,Xe={position:"absolute",visibility:"hidden",display:"block"},Je={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var i=ie.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function Qe(e,t,n,i,r,s){var o="width"===t?1:0,a=0,l=0;if(n===(i?"border":"content"))return 0;for(;o<4;o+=2)"margin"===n&&(l+=_.css(e,n+re[o],!0,r)),i?("content"===n&&(l-=_.css(e,"padding"+re[o],!0,r)),"margin"!==n&&(l-=_.css(e,"border"+re[o]+"Width",!0,r))):(l+=_.css(e,"padding"+re[o],!0,r),"padding"!==n?l+=_.css(e,"border"+re[o]+"Width",!0,r):a+=_.css(e,"border"+re[o]+"Width",!0,r));return!i&&s>=0&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-s-l-a-.5))||0),l}function Ze(e,t,n){var i=Ue(e),r=(!m.boxSizingReliable()||n)&&"border-box"===_.css(e,"boxSizing",!1,i),s=r,o=qe(e,t,i),a="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(o)){if(!n)return o;o="auto"}return(!m.boxSizingReliable()&&r||!m.reliableTrDimensions()&&A(e,"tr")||"auto"===o||!parseFloat(o)&&"inline"===_.css(e,"display",!1,i))&&e.getClientRects().length&&(r="border-box"===_.css(e,"boxSizing",!1,i),(s=a in e)&&(o=e[a])),(o=parseFloat(o)||0)+Qe(e,t,n||(r?"border":"content"),s,i,o)+"px"}function et(e,t,n,i,r){return new et.prototype.init(e,t,n,i,r)}_.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=qe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,s,o,a=K(t),l=Ke.test(t),c=e.style;if(l||(t=We(a)),o=_.cssHooks[t]||_.cssHooks[a],void 0===n)return o&&"get"in o&&void 0!==(r=o.get(e,!1,i))?r:c[t];"string"===(s=typeof n)&&(r=ie.exec(n))&&r[1]&&(n=ce(e,t,r),s="number"),null!=n&&n==n&&("number"!==s||l||(n+=r&&r[3]||(_.cssNumber[a]?"":"px")),m.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),o&&"set"in o&&void 0===(n=o.set(e,n,i))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,i){var r,s,o,a=K(t);return Ke.test(t)||(t=We(a)),(o=_.cssHooks[t]||_.cssHooks[a])&&"get"in o&&(r=o.get(e,!0,n)),void 0===r&&(r=qe(e,t,i)),"normal"===r&&t in Je&&(r=Je[t]),""===n||n?(s=parseFloat(r),!0===n||isFinite(s)?s||0:r):r}}),_.each(["height","width"],function(e,t){_.cssHooks[t]={get:function(e,n,i){if(n)return!Ge.test(_.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,t,i):He(e,Xe,function(){return Ze(e,t,i)})},set:function(e,n,i){var r,s=Ue(e),o=!m.scrollboxSize()&&"absolute"===s.position,a=(o||i)&&"border-box"===_.css(e,"boxSizing",!1,s),l=i?Qe(e,t,i,a,s):0;return a&&o&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(s[t])-Qe(e,t,"border",!1,s)-.5)),l&&(r=ie.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=_.css(e,t)),Ye(0,n,l)}}}),_.cssHooks.marginLeft=ze(m.reliableMarginLeft,function(e,t){if(t)return(parseFloat(qe(e,"marginLeft"))||e.getBoundingClientRect().left-He(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),_.each({margin:"",padding:"",border:"Width"},function(e,t){_.cssHooks[e+t]={expand:function(n){for(var i=0,r={},s="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+re[i]+t]=s[i]||s[i-2]||s[0];return r}},"margin"!==e&&(_.cssHooks[e+t].set=Ye)}),_.fn.extend({css:function(e,t){return V(this,function(e,t,n){var i,r,s={},o=0;if(Array.isArray(t)){for(i=Ue(e),r=t.length;o<r;o++)s[t[o]]=_.css(e,t[o],!1,i);return s}return void 0!==n?_.style(e,t,n):_.css(e,t)},e,t,arguments.length>1)}}),_.Tween=et,et.prototype={constructor:et,init:function(e,t,n,i,r,s){this.elem=e,this.prop=n,this.easing=r||_.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=s||(_.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=_.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}},et.prototype.init.prototype=et.prototype,et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=_.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){_.fx.step[e.prop]?_.fx.step[e.prop](e):1!==e.elem.nodeType||!_.cssHooks[e.prop]&&null==e.elem.style[We(e.prop)]?e.elem[e.prop]=e.now:_.style(e.elem,e.prop,e.now+e.unit)}}},et.propHooks.scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},_.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},_.fx=et.prototype.init,_.fx.step={};var tt,nt,it=/^(?:toggle|show|hide)$/,rt=/queueHooks$/;function st(){nt&&(!1===b.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(st):n.setTimeout(st,_.fx.interval),_.fx.tick())}function ot(){return n.setTimeout(function(){tt=void 0}),tt=Date.now()}function at(e,t){var n,i=0,r={height:e};for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=re[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function lt(e,t,n){for(var i,r=(ct.tweeners[t]||[]).concat(ct.tweeners["*"]),s=0,o=r.length;s<o;s++)if(i=r[s].call(n,t,e))return i}function ct(e,t,n){var i,r,s=0,o=ct.prefilters.length,a=_.Deferred().always(function(){delete l.elem}),l=function(){if(r)return!1;for(var t=tt||ot(),n=Math.max(0,c.startTime+c.duration-t),i=1-(n/c.duration||0),s=0,o=c.tweens.length;s<o;s++)c.tweens[s].run(i);return a.notifyWith(e,[c,i,n]),i<1&&o?n:(o||a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:_.extend({},t),opts:_.extend(!0,{specialEasing:{},easing:_.easing._default},n),originalProperties:t,originalOptions:n,startTime:tt||ot(),duration:n.duration,tweens:[],createTween:function(t,n){var i=_.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,i=t?c.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)c.tweens[n].run(1);return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this}}),u=c.props;for(!function(e,t){var n,i,r,s,o;for(n in e)if(r=t[i=K(n)],s=e[n],Array.isArray(s)&&(r=s[1],s=e[n]=s[0]),n!==i&&(e[i]=s,delete e[n]),(o=_.cssHooks[i])&&"expand"in o)for(n in s=o.expand(s),delete e[i],s)n in e||(e[n]=s[n],t[n]=r);else t[i]=r}(u,c.opts.specialEasing);s<o;s++)if(i=ct.prefilters[s].call(c,e,u,c.opts))return v(i.stop)&&(_._queueHooks(c.elem,c.opts.queue).stop=i.stop.bind(i)),i;return _.map(u,lt,c),v(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),_.fx.timer(_.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}_.Animation=_.extend(ct,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ce(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(M);for(var n,i=0,r=e.length;i<r;i++)n=e[i],ct.tweeners[n]=ct.tweeners[n]||[],ct.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,r,s,o,a,l,c,u,h="width"in t||"height"in t,d=this,f={},p=e.style,g=e.nodeType&&le(e),m=Y.get(e,"fxshow");for(i in n.queue||(null==(o=_._queueHooks(e,"fx")).unqueued&&(o.unqueued=0,a=o.empty.fire,o.empty.fire=function(){o.unqueued||a()}),o.unqueued++,d.always(function(){d.always(function(){o.unqueued--,_.queue(e,"fx").length||o.empty.fire()})})),t)if(r=t[i],it.test(r)){if(delete t[i],s=s||"toggle"===r,r===(g?"hide":"show")){if("show"!==r||!m||void 0===m[i])continue;g=!0}f[i]=m&&m[i]||_.style(e,i)}if((l=!_.isEmptyObject(t))||!_.isEmptyObject(f))for(i in h&&1===e.nodeType&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],null==(c=m&&m.display)&&(c=Y.get(e,"display")),"none"===(u=_.css(e,"display"))&&(c?u=c:(de([e],!0),c=e.style.display||c,u=_.css(e,"display"),de([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===_.css(e,"float")&&(l||(d.done(function(){p.display=c}),null==c&&(u=p.display,c="none"===u?"":u)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",d.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),l=!1,f)l||(m?"hidden"in m&&(g=m.hidden):m=Y.access(e,"fxshow",{display:c}),s&&(m.hidden=!g),g&&de([e],!0),d.done(function(){for(i in g||de([e]),Y.remove(e,"fxshow"),f)_.style(e,i,f[i])})),l=lt(g?m[i]:0,i,d),i in m||(m[i]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?ct.prefilters.unshift(e):ct.prefilters.push(e)}}),_.speed=function(e,t,n){var i=e&&"object"==typeof e?_.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return _.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in _.fx.speeds?i.duration=_.fx.speeds[i.duration]:i.duration=_.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){v(i.old)&&i.old.call(this),i.queue&&_.dequeue(this,i.queue)},i},_.fn.extend({fadeTo:function(e,t,n,i){return this.filter(le).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=_.isEmptyObject(e),s=_.speed(t,n,i),o=function(){var t=ct(this,_.extend({},e),s);(r||Y.get(this,"finish"))&&t.stop(!0)};return o.finish=o,r||!1===s.queue?this.each(o):this.queue(s.queue,o)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",s=_.timers,o=Y.get(this);if(r)o[r]&&o[r].stop&&i(o[r]);else for(r in o)o[r]&&o[r].stop&&rt.test(r)&&i(o[r]);for(r=s.length;r--;)s[r].elem!==this||null!=e&&s[r].queue!==e||(s[r].anim.stop(n),t=!1,s.splice(r,1));!t&&n||_.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=Y.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],s=_.timers,o=i?i.length:0;for(n.finish=!0,_.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=s.length;t--;)s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0),s.splice(t,1));for(t=0;t<o;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish})}}),_.each(["toggle","show","hide"],function(e,t){var n=_.fn[t];_.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(at(t,!0),e,i,r)}}),_.each({slideDown:at("show"),slideUp:at("hide"),slideToggle:at("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){_.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),_.timers=[],_.fx.tick=function(){var e,t=0,n=_.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||_.fx.stop(),tt=void 0},_.fx.timer=function(e){_.timers.push(e),_.fx.start()},_.fx.interval=13,_.fx.start=function(){nt||(nt=!0,st())},_.fx.stop=function(){nt=null},_.fx.speeds={slow:600,fast:200,_default:400},_.fn.delay=function(e,t){return e=_.fx&&_.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(t,i){var r=n.setTimeout(t,e);i.stop=function(){n.clearTimeout(r)}})},function(){var e=b.createElement("input"),t=b.createElement("select").appendChild(b.createElement("option"));e.type="checkbox",m.checkOn=""!==e.value,m.optSelected=t.selected,(e=b.createElement("input")).value="t",e.type="radio",m.radioValue="t"===e.value}();var ut,ht=_.expr.attrHandle;_.fn.extend({attr:function(e,t){return V(this,_.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){_.removeAttr(this,e)})}}),_.extend({attr:function(e,t,n){var i,r,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return void 0===e.getAttribute?_.prop(e,t,n):(1===s&&_.isXMLDoc(e)||(r=_.attrHooks[t.toLowerCase()]||(_.expr.match.bool.test(t)?ut:void 0)),void 0!==n?null===n?void _.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=_.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!m.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,r=t&&t.match(M);if(r&&1===e.nodeType)for(;n=r[i++];)e.removeAttribute(n)}}),ut={set:function(e,t,n){return!1===t?_.removeAttr(e,n):e.setAttribute(n,n),n}},_.each(_.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||_.find.attr;ht[t]=function(e,t,i){var r,s,o=t.toLowerCase();return i||(s=ht[o],ht[o]=r,r=null!=n(e,t,i)?o:null,ht[o]=s),r}});var dt=/^(?:input|select|textarea|button)$/i,ft=/^(?:a|area)$/i;function pt(e){return(e.match(M)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(M)||[]}_.fn.extend({prop:function(e,t){return V(this,_.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[_.propFix[e]||e]})}}),_.extend({prop:function(e,t,n){var i,r,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return 1===s&&_.isXMLDoc(e)||(t=_.propFix[t]||t,r=_.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=_.find.attr(e,"tabindex");return t?parseInt(t,10):dt.test(e.nodeName)||ft.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),m.optSelected||(_.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),_.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){_.propFix[this.toLowerCase()]=this}),_.fn.extend({addClass:function(e){var t,n,i,r,s,o,a,l=0;if(v(e))return this.each(function(t){_(this).addClass(e.call(this,t,gt(this)))});if((t=mt(e)).length)for(;n=this[l++];)if(r=gt(n),i=1===n.nodeType&&" "+pt(r)+" "){for(o=0;s=t[o++];)i.indexOf(" "+s+" ")<0&&(i+=s+" ");r!==(a=pt(i))&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,i,r,s,o,a,l=0;if(v(e))return this.each(function(t){_(this).removeClass(e.call(this,t,gt(this)))});if(!arguments.length)return this.attr("class","");if((t=mt(e)).length)for(;n=this[l++];)if(r=gt(n),i=1===n.nodeType&&" "+pt(r)+" "){for(o=0;s=t[o++];)for(;i.indexOf(" "+s+" ")>-1;)i=i.replace(" "+s+" "," ");r!==(a=pt(i))&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e,i="string"===n||Array.isArray(e);return"boolean"==typeof t&&i?t?this.addClass(e):this.removeClass(e):v(e)?this.each(function(n){_(this).toggleClass(e.call(this,n,gt(this),t),t)}):this.each(function(){var t,r,s,o;if(i)for(r=0,s=_(this),o=mt(e);t=o[r++];)s.hasClass(t)?s.removeClass(t):s.addClass(t);else void 0!==e&&"boolean"!==n||((t=gt(this))&&Y.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+pt(gt(n))+" ").indexOf(t)>-1)return!0;return!1}});var vt=/\r/g;_.fn.extend({val:function(e){var t,n,i,r=this[0];return arguments.length?(i=v(e),this.each(function(n){var r;1===this.nodeType&&(null==(r=i?e.call(this,n,_(this).val()):e)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=_.map(r,function(e){return null==e?"":e+""})),(t=_.valHooks[this.type]||_.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))})):r?(t=_.valHooks[r.type]||_.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:"string"==typeof(n=r.value)?n.replace(vt,""):null==n?"":n:void 0}}),_.extend({valHooks:{option:{get:function(e){var t=_.find.attr(e,"value");return null!=t?t:pt(_.text(e))}},select:{get:function(e){var t,n,i,r=e.options,s=e.selectedIndex,o="select-one"===e.type,a=o?null:[],l=o?s+1:r.length;for(i=s<0?l:o?s:0;i<l;i++)if(((n=r[i]).selected||i===s)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=_(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,i,r=e.options,s=_.makeArray(t),o=r.length;o--;)((i=r[o]).selected=_.inArray(_.valHooks.option.get(i),s)>-1)&&(n=!0);return n||(e.selectedIndex=-1),s}}}}),_.each(["radio","checkbox"],function(){_.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=_.inArray(_(e).val(),t)>-1}},m.checkOn||(_.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),m.focusin="onfocusin"in n;var yt=/^(?:focusinfocus|focusoutblur)$/,bt=function(e){e.stopPropagation()};_.extend(_.event,{trigger:function(e,t,i,r){var s,o,a,l,c,u,h,d,p=[i||b],g=f.call(e,"type")?e.type:e,m=f.call(e,"namespace")?e.namespace.split("."):[];if(o=d=a=i=i||b,3!==i.nodeType&&8!==i.nodeType&&!yt.test(g+_.event.triggered)&&(g.indexOf(".")>-1&&(g=(m=g.split(".")).shift(),m.sort()),c=g.indexOf(":")<0&&"on"+g,(e=e[_.expando]?e:new _.Event(g,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=m.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=null==t?[e]:_.makeArray(t,[e]),h=_.event.special[g]||{},r||!h.trigger||!1!==h.trigger.apply(i,t))){if(!r&&!h.noBubble&&!y(i)){for(l=h.delegateType||g,yt.test(l+g)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(i.ownerDocument||b)&&p.push(a.defaultView||a.parentWindow||n)}for(s=0;(o=p[s++])&&!e.isPropagationStopped();)d=o,e.type=s>1?l:h.bindType||g,(u=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&u.apply(o,t),(u=c&&o[c])&&u.apply&&X(o)&&(e.result=u.apply(o,t),!1===e.result&&e.preventDefault());return e.type=g,r||e.isDefaultPrevented()||h._default&&!1!==h._default.apply(p.pop(),t)||!X(i)||c&&v(i[g])&&!y(i)&&((a=i[c])&&(i[c]=null),_.event.triggered=g,e.isPropagationStopped()&&d.addEventListener(g,bt),i[g](),e.isPropagationStopped()&&d.removeEventListener(g,bt),_.event.triggered=void 0,a&&(i[c]=a)),e.result}},simulate:function(e,t,n){var i=_.extend(new _.Event,n,{type:e,isSimulated:!0});_.event.trigger(i,null,t)}}),_.fn.extend({trigger:function(e,t){return this.each(function(){_.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return _.event.trigger(e,t,n,!0)}}),m.focusin||_.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){_.event.simulate(t,e.target,_.event.fix(e))};_.event.special[t]={setup:function(){var i=this.ownerDocument||this.document||this,r=Y.access(i,t);r||i.addEventListener(e,n,!0),Y.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this.document||this,r=Y.access(i,t)-1;r?Y.access(i,t,r):(i.removeEventListener(e,n,!0),Y.remove(i,t))}}});var wt=n.location,Tt={guid:Date.now()},Et=/\?/;_.parseXML=function(e){var t,i;if(!e||"string"!=typeof e)return null;try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){}return i=t&&t.getElementsByTagName("parsererror")[0],t&&!i||_.error("Invalid XML: "+(i?_.map(i.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var _t=/\[\]$/,It=/\r?\n/g,kt=/^(?:submit|button|image|reset|file)$/i,St=/^(?:input|select|textarea|keygen)/i;function Ct(e,t,n,i){var r;if(Array.isArray(t))_.each(t,function(t,r){n||_t.test(e)?i(e,r):Ct(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)});else if(n||"object"!==E(t))i(e,t);else for(r in t)Ct(e+"["+r+"]",t[r],n,i)}_.param=function(e,t){var n,i=[],r=function(e,t){var n=v(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!_.isPlainObject(e))_.each(e,function(){r(this.name,this.value)});else for(n in e)Ct(n,e[n],t,r);return i.join("&")},_.fn.extend({serialize:function(){return _.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=_.prop(this,"elements");return e?_.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!_(this).is(":disabled")&&St.test(this.nodeName)&&!kt.test(e)&&(this.checked||!fe.test(e))}).map(function(e,t){var n=_(this).val();return null==n?null:Array.isArray(n)?_.map(n,function(e){return{name:t.name,value:e.replace(It,"\r\n")}}):{name:t.name,value:n.replace(It,"\r\n")}}).get()}});var xt=/%20/g,At=/#.*$/,Ot=/([?&])_=[^&]*/,Nt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Rt=/^\/\//,Dt={},Pt={},jt="*/".concat("*"),Mt=b.createElement("a");function Ut(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,s=t.toLowerCase().match(M)||[];if(v(n))for(;i=s[r++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function Ht(e,t,n,i){var r={},s=e===Pt;function o(a){var l;return r[a]=!0,_.each(e[a]||[],function(e,a){var c=a(t,n,i);return"string"!=typeof c||s||r[c]?s?!(l=c):void 0:(t.dataTypes.unshift(c),o(c),!1)}),l}return o(t.dataTypes[0])||!r["*"]&&o("*")}function Ft(e,t){var n,i,r=_.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&_.extend(!0,e,i),e}Mt.href=wt.href,_.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:wt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":jt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":_.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,_.ajaxSettings),t):Ft(_.ajaxSettings,e)},ajaxPrefilter:Ut(Dt),ajaxTransport:Ut(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var i,r,s,o,a,l,c,u,h,d,f=_.ajaxSetup({},t),p=f.context||f,g=f.context&&(p.nodeType||p.jquery)?_(p):_.event,m=_.Deferred(),v=_.Callbacks("once memory"),y=f.statusCode||{},w={},T={},E="canceled",I={readyState:0,getResponseHeader:function(e){var t;if(c){if(!o)for(o={};t=Nt.exec(s);)o[t[1].toLowerCase()+" "]=(o[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=o[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return c?s:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==c&&(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)I.always(e[I.status]);else for(t in e)y[t]=[y[t],e[t]];return this},abort:function(e){var t=e||E;return i&&i.abort(t),k(0,t),this}};if(m.promise(I),f.url=((e||f.url||wt.href)+"").replace(Rt,wt.protocol+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(M)||[""],null==f.crossDomain){l=b.createElement("a");try{l.href=f.url,l.href=l.href,f.crossDomain=Mt.protocol+"//"+Mt.host!=l.protocol+"//"+l.host}catch(e){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=_.param(f.data,f.traditional)),Ht(Dt,f,t,I),c)return I;for(h in(u=_.event&&f.global)&&0==_.active++&&_.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Lt.test(f.type),r=f.url.replace(At,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(xt,"+")):(d=f.url.slice(r.length),f.data&&(f.processData||"string"==typeof f.data)&&(r+=(Et.test(r)?"&":"?")+f.data,delete f.data),!1===f.cache&&(r=r.replace(Ot,"$1"),d=(Et.test(r)?"&":"?")+"_="+Tt.guid+++d),f.url=r+d),f.ifModified&&(_.lastModified[r]&&I.setRequestHeader("If-Modified-Since",_.lastModified[r]),_.etag[r]&&I.setRequestHeader("If-None-Match",_.etag[r])),(f.data&&f.hasContent&&!1!==f.contentType||t.contentType)&&I.setRequestHeader("Content-Type",f.contentType),I.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+jt+"; q=0.01":""):f.accepts["*"]),f.headers)I.setRequestHeader(h,f.headers[h]);if(f.beforeSend&&(!1===f.beforeSend.call(p,I,f)||c))return I.abort();if(E="abort",v.add(f.complete),I.done(f.success),I.fail(f.error),i=Ht(Pt,f,t,I)){if(I.readyState=1,u&&g.trigger("ajaxSend",[I,f]),c)return I;f.async&&f.timeout>0&&(a=n.setTimeout(function(){I.abort("timeout")},f.timeout));try{c=!1,i.send(w,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(e,t,o,l){var h,d,b,w,T,E=t;c||(c=!0,a&&n.clearTimeout(a),i=void 0,s=l||"",I.readyState=e>0?4:0,h=e>=200&&e<300||304===e,o&&(w=function(e,t,n){for(var i,r,s,o,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r);break}if(l[0]in n)s=l[0];else{for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){s=r;break}o||(o=r)}s=s||o}if(s)return s!==l[0]&&l.unshift(s),n[s]}(f,I,o)),!h&&_.inArray("script",f.dataTypes)>-1&&_.inArray("json",f.dataTypes)<0&&(f.converters["text script"]=function(){}),w=function(e,t,n,i){var r,s,o,a,l,c={},u=e.dataTypes.slice();if(u[1])for(o in e.converters)c[o.toLowerCase()]=e.converters[o];for(s=u.shift();s;)if(e.responseFields[s]&&(n[e.responseFields[s]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=s,s=u.shift())if("*"===s)s=l;else if("*"!==l&&l!==s){if(!(o=c[l+" "+s]||c["* "+s]))for(r in c)if((a=r.split(" "))[1]===s&&(o=c[l+" "+a[0]]||c["* "+a[0]])){!0===o?o=c[r]:!0!==c[r]&&(s=a[0],u.unshift(a[1]));break}if(!0!==o)if(o&&e.throws)t=o(t);else try{t=o(t)}catch(e){return{state:"parsererror",error:o?e:"No conversion from "+l+" to "+s}}}return{state:"success",data:t}}(f,w,I,h),h?(f.ifModified&&((T=I.getResponseHeader("Last-Modified"))&&(_.lastModified[r]=T),(T=I.getResponseHeader("etag"))&&(_.etag[r]=T)),204===e||"HEAD"===f.type?E="nocontent":304===e?E="notmodified":(E=w.state,d=w.data,h=!(b=w.error))):(b=E,!e&&E||(E="error",e<0&&(e=0))),I.status=e,I.statusText=(t||E)+"",h?m.resolveWith(p,[d,E,I]):m.rejectWith(p,[I,E,b]),I.statusCode(y),y=void 0,u&&g.trigger(h?"ajaxSuccess":"ajaxError",[I,f,h?d:b]),v.fireWith(p,[I,E]),u&&(g.trigger("ajaxComplete",[I,f]),--_.active||_.event.trigger("ajaxStop")))}return I},getJSON:function(e,t,n){return _.get(e,t,n,"json")},getScript:function(e,t){return _.get(e,void 0,t,"script")}}),_.each(["get","post"],function(e,t){_[t]=function(e,n,i,r){return v(n)&&(r=r||i,i=n,n=void 0),_.ajax(_.extend({url:e,type:t,dataType:r,data:n,success:i},_.isPlainObject(e)&&e))}}),_.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),_._evalUrl=function(e,t,n){return _.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){_.globalEval(e,t,n)}})},_.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=_(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return v(e)?this.each(function(t){_(this).wrapInner(e.call(this,t))}):this.each(function(){var t=_(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v(e);return this.each(function(n){_(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){_(this).replaceWith(this.childNodes)}),this}}),_.expr.pseudos.hidden=function(e){return!_.expr.pseudos.visible(e)},_.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},_.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var qt={0:200,1223:204},zt=_.ajaxSettings.xhr();m.cors=!!zt&&"withCredentials"in zt,m.ajax=zt=!!zt,_.ajaxTransport(function(e){var t,i;if(m.cors||zt&&!e.crossDomain)return{send:function(r,s){var o,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(o in e.xhrFields)a[o]=e.xhrFields[o];for(o in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)a.setRequestHeader(o,r[o]);t=function(e){return function(){t&&(t=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?s(0,"error"):s(a.status,a.statusText):s(qt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=t(),i=a.onerror=a.ontimeout=t("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&n.setTimeout(function(){t&&i()})},t=t("abort");try{a.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}}),_.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),_.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return _.globalEval(e),e}}}),_.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),_.ajaxTransport("script",function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(i,r){t=_("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),b.head.appendChild(t[0])},abort:function(){n&&n()}}});var Bt=[],Vt=/(=)\?(?=&|$)|\?\?/;_.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Bt.pop()||_.expando+"_"+Tt.guid++;return this[e]=!0,e}}),_.ajaxPrefilter("json jsonp",function(e,t,i){var r,s,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||_.error(r+" was not called"),o[0]},e.dataTypes[0]="json",s=n[r],n[r]=function(){o=arguments},i.always(function(){void 0===s?_(n).removeProp(r):n[r]=s,e[r]&&(e.jsonpCallback=t.jsonpCallback,Bt.push(r)),o&&v(s)&&s(o[0]),o=s=void 0}),"script"}),m.createHTMLDocument=function(){var e=b.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),_.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(m.createHTMLDocument?((i=(t=b.implementation.createHTMLDocument("")).createElement("base")).href=b.location.href,t.head.appendChild(i)):t=b),r=O.exec(e),s=!n&&[],r?[t.createElement(r[1])]:(r=we([e],t,s),s&&s.length&&_(s).remove(),_.merge([],r.childNodes)));var i,r,s},_.fn.load=function(e,t,n){var i,r,s,o=this,a=e.indexOf(" ");return a>-1&&(i=pt(e.slice(a)),e=e.slice(0,a)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),o.length>0&&_.ajax({url:e,type:r||"GET",dataType:"html",data:t}).done(function(e){s=arguments,o.html(i?_("<div>").append(_.parseHTML(e)).find(i):e)}).always(n&&function(e,t){o.each(function(){n.apply(this,s||[e.responseText,t,e])})}),this},_.expr.pseudos.animated=function(e){return _.grep(_.timers,function(t){return e===t.elem}).length},_.offset={setOffset:function(e,t,n){var i,r,s,o,a,l,c=_.css(e,"position"),u=_(e),h={};"static"===c&&(e.style.position="relative"),a=u.offset(),s=_.css(e,"top"),l=_.css(e,"left"),("absolute"===c||"fixed"===c)&&(s+l).indexOf("auto")>-1?(o=(i=u.position()).top,r=i.left):(o=parseFloat(s)||0,r=parseFloat(l)||0),v(t)&&(t=t.call(e,n,_.extend({},a))),null!=t.top&&(h.top=t.top-a.top+o),null!=t.left&&(h.left=t.left-a.left+r),"using"in t?t.using.call(e,h):u.css(h)}},_.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){_.offset.setOffset(this,e,t)});var t,n,i=this[0];return i?i.getClientRects().length?(t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};if("fixed"===_.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===_.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&((r=_(e).offset()).top+=_.css(e,"borderTopWidth",!0),r.left+=_.css(e,"borderLeftWidth",!0))}return{top:t.top-r.top-_.css(i,"marginTop",!0),left:t.left-r.left-_.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===_.css(e,"position");)e=e.offsetParent;return e||se})}}),_.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;_.fn[e]=function(i){return V(this,function(e,i,r){var s;if(y(e)?s=e:9===e.nodeType&&(s=e.defaultView),void 0===r)return s?s[t]:e[i];s?s.scrollTo(n?s.pageXOffset:r,n?r:s.pageYOffset):e[i]=r},e,i,arguments.length)}}),_.each(["top","left"],function(e,t){_.cssHooks[t]=ze(m.pixelPosition,function(e,n){if(n)return n=qe(e,t),Me.test(n)?_(e).position()[t]+"px":n})}),_.each({Height:"height",Width:"width"},function(e,t){_.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){_.fn[i]=function(r,s){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===s?"margin":"border");return V(this,function(t,n,r){var s;return y(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(s=t.documentElement,Math.max(t.body["scroll"+e],s["scroll"+e],t.body["offset"+e],s["offset"+e],s["client"+e])):void 0===r?_.css(t,n,a):_.style(t,n,r,a)},t,o?r:void 0,o)}})}),_.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){_.fn[t]=function(e){return this.on(t,e)}}),_.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),_.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){_.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});var $t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;_.proxy=function(e,t){var n,i,r;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return i=a.call(arguments,2),(r=function(){return e.apply(t||this,i.concat(a.call(arguments)))}).guid=e.guid=e.guid||_.guid++,r},_.holdReady=function(e){e?_.readyWait++:_.ready(!0)},_.isArray=Array.isArray,_.parseJSON=JSON.parse,_.nodeName=A,_.isFunction=v,_.isWindow=y,_.camelCase=K,_.type=E,_.now=Date.now,_.isNumeric=function(e){var t=_.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},_.trim=function(e){return null==e?"":(e+"").replace($t,"")},void 0===(i=function(){return _}.apply(t,[]))||(e.exports=i);var Wt=n.jQuery,Gt=n.$;return _.noConflict=function(e){return n.$===_&&(n.$=Gt),e&&n.jQuery===_&&(n.jQuery=Wt),_},void 0===r&&(n.jQuery=n.$=_),_})}]);