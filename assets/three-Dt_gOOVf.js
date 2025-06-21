import{r as Sx,a as Mx}from"./vendor-3h1-2r-Q.js";var Ef={exports:{}},uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function yx(){if(Og)return uo;Og=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return uo.Fragment=t,uo.jsx=i,uo.jsxs=i,uo}var Pg;function Ex(){return Pg||(Pg=1,Ef.exports=yx()),Ef.exports}var Ib=Ex(),Tf={exports:{}},fo={},bf={exports:{}},Af={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function Tx(){return Bg||(Bg=1,function(o){function t(O,Q){var W=O.length;O.push(Q);t:for(;0<W;){var gt=W-1>>>1,xt=O[gt];if(0<l(xt,Q))O[gt]=Q,O[W]=xt,W=gt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var Q=O[0],W=O.pop();if(W!==Q){O[0]=W;t:for(var gt=0,xt=O.length,Ut=xt>>>1;gt<Ut;){var zt=2*(gt+1)-1,Ht=O[zt],at=zt+1,St=O[at];if(0>l(Ht,W))at<xt&&0>l(St,Ht)?(O[gt]=St,O[at]=W,gt=at):(O[gt]=Ht,O[zt]=W,gt=zt);else if(at<xt&&0>l(St,W))O[gt]=St,O[at]=W,gt=at;else break t}}return Q}function l(O,Q){var W=O.sortIndex-Q.sortIndex;return W!==0?W:O.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,v=null,S=3,y=!1,A=!1,C=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var Q=i(m);Q!==null;){if(Q.callback===null)s(m);else if(Q.startTime<=O)s(m),Q.sortIndex=Q.expirationTime,t(p,Q);else break;Q=i(m)}}function Z(O){if(C=!1,U(O),!A)if(i(p)!==null)A=!0,I||(I=!0,rt());else{var Q=i(m);Q!==null&&pt(Z,Q.startTime-O)}}var I=!1,F=-1,q=5,w=-1;function R(){return M?!0:!(o.unstable_now()-w<q)}function H(){if(M=!1,I){var O=o.unstable_now();w=O;var Q=!0;try{t:{A=!1,C&&(C=!1,P(F),F=-1),y=!0;var W=S;try{e:{for(U(O),v=i(p);v!==null&&!(v.expirationTime>O&&R());){var gt=v.callback;if(typeof gt=="function"){v.callback=null,S=v.priorityLevel;var xt=gt(v.expirationTime<=O);if(O=o.unstable_now(),typeof xt=="function"){v.callback=xt,U(O),Q=!0;break e}v===i(p)&&s(p),U(O)}else s(p);v=i(p)}if(v!==null)Q=!0;else{var Ut=i(m);Ut!==null&&pt(Z,Ut.startTime-O),Q=!1}}break t}finally{v=null,S=W,y=!1}Q=void 0}}finally{Q?rt():I=!1}}}var rt;if(typeof N=="function")rt=function(){N(H)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,ct=it.port2;it.port1.onmessage=H,rt=function(){ct.postMessage(null)}}else rt=function(){_(H,0)};function pt(O,Q){F=_(function(){O(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var Q=3;break;default:Q=S}var W=S;S=Q;try{return O()}finally{S=W}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(O,Q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=S;S=O;try{return Q()}finally{S=W}},o.unstable_scheduleCallback=function(O,Q,W){var gt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?gt+W:gt):W=gt,O){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=W+xt,O={id:g++,callback:Q,priorityLevel:O,startTime:W,expirationTime:xt,sortIndex:-1},W>gt?(O.sortIndex=W,t(m,O),i(p)===null&&O===i(m)&&(C?(P(F),F=-1):C=!0,pt(Z,W-gt))):(O.sortIndex=xt,t(p,O),A||y||(A=!0,I||(I=!0,rt()))),O},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(O){var Q=S;return function(){var W=S;S=Q;try{return O.apply(this,arguments)}finally{S=W}}}}(Af)),Af}var zg;function bx(){return zg||(zg=1,bf.exports=Tx()),bf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function Ax(){if(Ig)return fo;Ig=1;var o=bx(),t=Sx(),i=Mx();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===r)return d(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var x=!1,E=c.child;E;){if(E===a){x=!0,a=c,r=f;break}if(E===r){x=!0,r=c,a=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===a){x=!0,a=f,r=c;break}if(E===r){x=!0,r=f,a=c;break}E=E.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function rt(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var it=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===it?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case M:return"Profiler";case C:return"StrictMode";case Z:return"Suspense";case I:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case N:return(e.displayName||"Context")+".Provider";case P:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var pt=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},gt=[],xt=-1;function Ut(e){return{current:e}}function zt(e){0>xt||(e.current=gt[xt],gt[xt]=null,xt--)}function Ht(e,n){xt++,gt[xt]=e.current,e.current=n}var at=Ut(null),St=Ut(null),Lt=Ut(null),Et=Ut(null);function kt(e,n){switch(Ht(Lt,n),Ht(St,e),Ht(at,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?lg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=lg(n),e=cg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}zt(at),Ht(at,e)}function oe(){zt(at),zt(St),zt(Lt)}function Zt(e){e.memoizedState!==null&&Ht(Et,e);var n=at.current,a=cg(n,e.type);n!==a&&(Ht(St,e),Ht(at,a))}function Ie(e){St.current===e&&(zt(at),zt(St)),Et.current===e&&(zt(Et),so._currentValue=W)}var Pe=Object.prototype.hasOwnProperty,le=o.unstable_scheduleCallback,B=o.unstable_cancelCallback,Cn=o.unstable_shouldYield,pe=o.unstable_requestPaint,ee=o.unstable_now,Vt=o.unstable_getCurrentPriorityLevel,Ce=o.unstable_ImmediatePriority,It=o.unstable_UserBlockingPriority,D=o.unstable_NormalPriority,T=o.unstable_LowPriority,J=o.unstable_IdlePriority,ft=o.log,mt=o.unstable_setDisableYieldValue,lt=null,Ct=null;function Mt(e){if(typeof ft=="function"&&mt(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(lt,e)}catch{}}var Bt=Math.clz32?Math.clz32:Ot,Qt=Math.log,vt=Math.LN2;function Ot(e){return e>>>=0,e===0?32:31-(Qt(e)/vt|0)|0}var qt=256,jt=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function se(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=wt(r):(x&=E,x!==0?c=wt(x):a||(a=E&~e,a!==0&&(c=wt(a))))):(E=r&~f,E!==0?c=wt(E):x!==0?c=wt(x):a||(a=r&~e,a!==0&&(c=wt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function te(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function we(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G(){var e=qt;return qt<<=1,(qt&4194048)===0&&(qt=256),e}function At(){var e=jt;return jt<<=1,(jt&62914560)===0&&(jt=4194304),e}function st(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ht(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Dt(e,n,a,r,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,L=e.expirationTimes,j=e.hiddenUpdates;for(a=x&~a;0<a;){var ot=31-Bt(a),dt=1<<ot;E[ot]=0,L[ot]=-1;var $=j[ot];if($!==null)for(j[ot]=null,ot=0;ot<$.length;ot++){var tt=$[ot];tt!==null&&(tt.lane&=-536870913)}a&=~dt}r!==0&&Rt(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function Rt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Bt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&4194090}function ne(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Bt(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Fe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Se(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Cg(e.type))}function zn(e,n){var a=Q.p;try{return Q.p=e,n()}finally{Q.p=a}}var cn=Math.random().toString(36).slice(2),nn="__reactFiber$"+cn,mn="__reactProps$"+cn,wn="__reactContainer$"+cn,Ia="__reactEvents$"+cn,Uo="__reactListeners$"+cn,Lo="__reactHandles$"+cn,Fa="__reactResources$"+cn,ta="__reactMarker$"+cn;function ea(e){delete e[nn],delete e[mn],delete e[Ia],delete e[Uo],delete e[Lo]}function Ti(e){var n=e[nn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[wn]||a[nn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=dg(e);e!==null;){if(a=e[nn])return a;e=dg(e)}return n}e=a,a=e.parentNode}return null}function bi(e){if(e=e[nn]||e[wn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ha(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function na(e){var n=e[Fa];return n||(n=e[Fa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Je(e){e[ta]=!0}var No=new Set,Oo={};function Ai(e,n){b(e,n),b(e+"Capture",n)}function b(e,n){for(Oo[e]=n,e=0;e<n.length;e++)No.add(n[e])}var k=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},nt={};function X(e){return Pe.call(nt,e)?!0:Pe.call(et,e)?!1:k.test(e)?nt[e]=!0:(et[e]=!0,!1)}function _t(e,n,a){if(X(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function yt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Tt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}var Nt,Jt;function Xt(e){if(Nt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Nt=n&&n[1]||"",Jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+e+Jt}var Gt=!1;function ue(e,n){if(!e||Gt)return"";Gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var dt=function(){throw Error()};if(Object.defineProperty(dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(dt,[])}catch(tt){var $=tt}Reflect.construct(e,[],dt)}else{try{dt.call()}catch(tt){$=tt}e.call(dt.prototype)}}else{try{throw Error()}catch(tt){$=tt}(dt=e())&&typeof dt.catch=="function"&&dt.catch(function(){})}}catch(tt){if(tt&&$&&typeof tt.stack=="string")return[tt.stack,$.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var L=x.split(`
`),j=E.split(`
`);for(c=r=0;r<L.length&&!L[r].includes("DetermineComponentFrameRoot");)r++;for(;c<j.length&&!j[c].includes("DetermineComponentFrameRoot");)c++;if(r===L.length||c===j.length)for(r=L.length-1,c=j.length-1;1<=r&&0<=c&&L[r]!==j[c];)c--;for(;1<=r&&0<=c;r--,c--)if(L[r]!==j[c]){if(r!==1||c!==1)do if(r--,c--,0>c||L[r]!==j[c]){var ot=`
`+L[r].replace(" at new "," at ");return e.displayName&&ot.includes("<anonymous>")&&(ot=ot.replace("<anonymous>",e.displayName)),ot}while(1<=r&&0<=c);break}}}finally{Gt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Xt(a):""}function Me(e){switch(e.tag){case 26:case 27:case 5:return Xt(e.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return Xt("Activity");default:return""}}function Xe(e){try{var n="";do n+=Me(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ge(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Wt(e){var n=ge(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){r=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(x){r=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qe(e){e._valueTracker||(e._valueTracker=Wt(e))}function xe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=ge(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ia=/[\n"\\]/g;function He(e){return e.replace(ia,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ri(e,n,a,r,c,f,x,E){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+me(n)):e.value!==""+me(n)&&(e.value=""+me(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,x,me(n)):a!=null?Mn(e,x,me(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+me(E):e.removeAttribute("name")}function Be(e,n,a,r,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+me(a):"",n=n!=null?""+me(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=E?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x)}function Mn(e,n,a){n==="number"&&Sn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function an(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+me(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function un(e,n,a){if(n!=null&&(n=""+me(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+me(a):""}function gn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(pt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=me(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r)}function hi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ci=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ld(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Ci.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function cd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&ld(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&ld(e,f,n[f])}function Mc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var v0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),x0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Po(e){return x0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var yc=null;function Ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _s=null,vs=null;function ud(e){var n=bi(e);if(n&&(e=n.stateNode)){var a=e[mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ri(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+He(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[mn]||null;if(!c)throw Error(s(90));Ri(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&xe(r)}break t;case"textarea":un(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&an(e,!!a.multiple,n,!1)}}}var Tc=!1;function fd(e,n,a){if(Tc)return e(n,a);Tc=!0;try{var r=e(n);return r}finally{if(Tc=!1,(_s!==null||vs!==null)&&(Sl(),_s&&(n=_s,e=vs,vs=_s=null,ud(n),e)))for(n=0;n<e.length;n++)ud(e[n])}}function vr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[mn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bc=!1;if(wi)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){bc=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{bc=!1}var aa=null,Ac=null,Bo=null;function hd(){if(Bo)return Bo;var e,n=Ac,a=n.length,r,c="value"in aa?aa.value:aa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===c[f-r];r++);return Bo=c.slice(e,1<r?1-r:void 0)}function zo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Io(){return!0}function dd(){return!1}function Dn(e){function n(a,r,c,f,x){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Io:dd,this.isPropagationStopped=dd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=Dn(Ga),Sr=g({},Ga,{view:0,detail:0}),S0=Dn(Sr),Rc,Cc,Mr,Ho=g({},Sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(Rc=e.screenX-Mr.screenX,Cc=e.screenY-Mr.screenY):Cc=Rc=0,Mr=e),Rc)},movementY:function(e){return"movementY"in e?e.movementY:Cc}}),pd=Dn(Ho),M0=g({},Ho,{dataTransfer:0}),y0=Dn(M0),E0=g({},Sr,{relatedTarget:0}),wc=Dn(E0),T0=g({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),b0=Dn(T0),A0=g({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),R0=Dn(A0),C0=g({},Ga,{data:0}),md=Dn(C0),w0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=U0[e])?!!n[e]:!1}function Dc(){return L0}var N0=g({},Sr,{key:function(e){if(e.key){var n=w0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?D0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(e){return e.type==="keypress"?zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),O0=Dn(N0),P0=g({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gd=Dn(P0),B0=g({},Sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),z0=Dn(B0),I0=g({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=Dn(I0),H0=g({},Ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),G0=Dn(H0),V0=g({},Ga,{newState:0,oldState:0}),k0=Dn(V0),X0=[9,13,27,32],Uc=wi&&"CompositionEvent"in window,yr=null;wi&&"documentMode"in document&&(yr=document.documentMode);var W0=wi&&"TextEvent"in window&&!yr,_d=wi&&(!Uc||yr&&8<yr&&11>=yr),vd=" ",xd=!1;function Sd(e,n){switch(e){case"keyup":return X0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xs=!1;function q0(e,n){switch(e){case"compositionend":return Md(n);case"keypress":return n.which!==32?null:(xd=!0,vd);case"textInput":return e=n.data,e===vd&&xd?null:e;default:return null}}function Y0(e,n){if(xs)return e==="compositionend"||!Uc&&Sd(e,n)?(e=hd(),Bo=Ac=aa=null,xs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _d&&n.locale!=="ko"?null:n.data;default:return null}}var Z0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Z0[e.type]:n==="textarea"}function Ed(e,n,a,r){_s?vs?vs.push(r):vs=[r]:_s=r,n=Al(n,"onChange"),0<n.length&&(a=new Fo("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Er=null,Tr=null;function j0(e){ig(e,0)}function Go(e){var n=Ha(e);if(xe(n))return e}function Td(e,n){if(e==="change")return n}var bd=!1;if(wi){var Lc;if(wi){var Nc="oninput"in document;if(!Nc){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),Nc=typeof Ad.oninput=="function"}Lc=Nc}else Lc=!1;bd=Lc&&(!document.documentMode||9<document.documentMode)}function Rd(){Er&&(Er.detachEvent("onpropertychange",Cd),Tr=Er=null)}function Cd(e){if(e.propertyName==="value"&&Go(Tr)){var n=[];Ed(n,Tr,e,Ec(e)),fd(j0,n)}}function K0(e,n,a){e==="focusin"?(Rd(),Er=n,Tr=a,Er.attachEvent("onpropertychange",Cd)):e==="focusout"&&Rd()}function Q0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Go(Tr)}function J0(e,n){if(e==="click")return Go(n)}function $0(e,n){if(e==="input"||e==="change")return Go(n)}function tv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var In=typeof Object.is=="function"?Object.is:tv;function br(e,n){if(In(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Pe.call(n,c)||!In(e[c],n[c]))return!1}return!0}function wd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dd(e,n){var a=wd(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=wd(a)}}function Ud(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ud(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ld(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Sn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Sn(e.document)}return n}function Oc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ev=wi&&"documentMode"in document&&11>=document.documentMode,Ss=null,Pc=null,Ar=null,Bc=!1;function Nd(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bc||Ss==null||Ss!==Sn(r)||(r=Ss,"selectionStart"in r&&Oc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&br(Ar,r)||(Ar=r,r=Al(Pc,"onSelect"),0<r.length&&(n=new Fo("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ss)))}function Va(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ms={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},zc={},Od={};wi&&(Od=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function ka(e){if(zc[e])return zc[e];if(!Ms[e])return e;var n=Ms[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Od)return zc[e]=n[a];return e}var Pd=ka("animationend"),Bd=ka("animationiteration"),zd=ka("animationstart"),nv=ka("transitionrun"),iv=ka("transitionstart"),av=ka("transitioncancel"),Id=ka("transitionend"),Fd=new Map,Ic="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ic.push("scrollEnd");function ii(e,n){Fd.set(e,n),Ai(n,[e])}var Hd=new WeakMap;function Zn(e,n){if(typeof e=="object"&&e!==null){var a=Hd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Xe(n)},Hd.set(e,n),n)}return{value:e,source:n,stack:Xe(n)}}var jn=[],ys=0,Fc=0;function Vo(){for(var e=ys,n=Fc=ys=0;n<e;){var a=jn[n];jn[n++]=null;var r=jn[n];jn[n++]=null;var c=jn[n];jn[n++]=null;var f=jn[n];if(jn[n++]=null,r!==null&&c!==null){var x=r.pending;x===null?c.next=c:(c.next=x.next,x.next=c),r.pending=c}f!==0&&Gd(a,c,f)}}function ko(e,n,a,r){jn[ys++]=e,jn[ys++]=n,jn[ys++]=a,jn[ys++]=r,Fc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Hc(e,n,a,r){return ko(e,n,a,r),Xo(e)}function Es(e,n){return ko(e,null,null,n),Xo(e)}function Gd(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Bt(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function Xo(e){if(50<Qr)throw Qr=0,qu=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ts={};function sv(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(e,n,a,r){return new sv(e,n,a,r)}function Gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Di(e,n){var a=e.alternate;return a===null?(a=Fn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Vd(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Wo(e,n,a,r,c,f){var x=0;if(r=e,typeof e=="function")Gc(e)&&(x=1);else if(typeof e=="string")x=ox(e,a,at.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Fn(31,a,n,c),e.elementType=w,e.lanes=f,e;case A:return Xa(a.children,c,f,n);case C:x=8,c|=24;break;case M:return e=Fn(12,a,n,c|2),e.elementType=M,e.lanes=f,e;case Z:return e=Fn(13,a,n,c),e.elementType=Z,e.lanes=f,e;case I:return e=Fn(19,a,n,c),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case N:x=10;break t;case P:x=9;break t;case U:x=11;break t;case F:x=14;break t;case q:x=16,r=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Fn(x,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function Xa(e,n,a,r){return e=Fn(7,e,r,n),e.lanes=a,e}function Vc(e,n,a){return e=Fn(6,e,null,n),e.lanes=a,e}function kc(e,n,a){return n=Fn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var bs=[],As=0,qo=null,Yo=0,Kn=[],Qn=0,Wa=null,Ui=1,Li="";function qa(e,n){bs[As++]=Yo,bs[As++]=qo,qo=e,Yo=n}function kd(e,n,a){Kn[Qn++]=Ui,Kn[Qn++]=Li,Kn[Qn++]=Wa,Wa=e;var r=Ui;e=Li;var c=32-Bt(r)-1;r&=~(1<<c),a+=1;var f=32-Bt(n)+c;if(30<f){var x=c-c%5;f=(r&(1<<x)-1).toString(32),r>>=x,c-=x,Ui=1<<32-Bt(n)+c|a<<c|r,Li=f+e}else Ui=1<<f|a<<c|r,Li=e}function Xc(e){e.return!==null&&(qa(e,1),kd(e,1,0))}function Wc(e){for(;e===qo;)qo=bs[--As],bs[As]=null,Yo=bs[--As],bs[As]=null;for(;e===Wa;)Wa=Kn[--Qn],Kn[Qn]=null,Li=Kn[--Qn],Kn[Qn]=null,Ui=Kn[--Qn],Kn[Qn]=null}var An=null,Ye=null,be=!1,Ya=null,di=!1,qc=Error(s(519));function Za(e){var n=Error(s(418,""));throw wr(Zn(n,e)),qc}function Xd(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[nn]=e,n[mn]=r,a){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<$r.length;a++)he($r[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":he("invalid",n),Be(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),qe(n);break;case"select":he("invalid",n);break;case"textarea":he("invalid",n),gn(n,r.value,r.defaultValue,r.children),qe(n)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||og(n.textContent,a)?(r.popover!=null&&(he("beforetoggle",n),he("toggle",n)),r.onScroll!=null&&he("scroll",n),r.onScrollEnd!=null&&he("scrollend",n),r.onClick!=null&&(n.onclick=Rl),n=!0):n=!1,n||Za(e)}function Wd(e){for(An=e.return;An;)switch(An.tag){case 5:case 13:di=!1;return;case 27:case 3:di=!0;return;default:An=An.return}}function Rr(e){if(e!==An)return!1;if(!be)return Wd(e),be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||cf(e.type,e.memoizedProps)),a=!a),a&&Ye&&Za(e),Wd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ye=si(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ye=null}}else n===27?(n=Ye,Sa(e.type)?(e=df,df=null,Ye=e):Ye=n):Ye=An?si(e.stateNode.nextSibling):null;return!0}function Cr(){Ye=An=null,be=!1}function qd(){var e=Ya;return e!==null&&(Nn===null?Nn=e:Nn.push.apply(Nn,e),Ya=null),e}function wr(e){Ya===null?Ya=[e]:Ya.push(e)}var Yc=Ut(null),ja=null,Ni=null;function sa(e,n,a){Ht(Yc,n._currentValue),n._currentValue=a}function Oi(e){e._currentValue=Yc.current,zt(Yc)}function Zc(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function jc(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var L=0;L<n.length;L++)if(E.context===n[L]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),Zc(f.return,a,e),r||(x=null);break t}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Zc(x,a,e),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Dr(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var E=c.type;In(c.pendingProps.value,x.value)||(e!==null?e.push(E):e=[E])}}else if(c===Et.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(so):e=[so])}c=c.return}e!==null&&jc(n,e,a,r),n.flags|=262144}function Zo(e){for(e=e.firstContext;e!==null;){if(!In(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ka(e){ja=e,Ni=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yn(e){return Yd(ja,e)}function jo(e,n){return ja===null&&Ka(e),Yd(e,n)}function Yd(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ni===null){if(e===null)throw Error(s(308));Ni=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ni=Ni.next=n;return a}var rv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ov=o.unstable_scheduleCallback,lv=o.unstable_NormalPriority,sn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kc(){return{controller:new rv,data:new Map,refCount:0}}function Ur(e){e.refCount--,e.refCount===0&&ov(lv,function(){e.controller.abort()})}var Lr=null,Qc=0,Rs=0,Cs=null;function cv(e,n){if(Lr===null){var a=Lr=[];Qc=0,Rs=$u(),Cs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Qc++,n.then(Zd,Zd),n}function Zd(){if(--Qc===0&&Lr!==null){Cs!==null&&(Cs.status="fulfilled");var e=Lr;Lr=null,Rs=0,Cs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function uv(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var jd=O.S;O.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&cv(e,n),jd!==null&&jd(e,n)};var Qa=Ut(null);function Jc(){var e=Qa.current;return e!==null?e:Ge.pooledCache}function Ko(e,n){n===null?Ht(Qa,Qa.current):Ht(Qa,n.pool)}function Kd(){var e=Jc();return e===null?null:{parent:sn._currentValue,pool:e}}var Nr=Error(s(460)),Qd=Error(s(474)),Qo=Error(s(542)),$c={then:function(){}};function Jd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jo(){}function $d(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Jo,Jo),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ep(e),e;default:if(typeof n.status=="string")n.then(Jo,Jo);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ep(e),e}throw Or=n,Nr}}var Or=null;function tp(){if(Or===null)throw Error(s(459));var e=Or;return Or=null,e}function ep(e){if(e===Nr||e===Qo)throw Error(s(483))}var ra=!1;function tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ae&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Xo(e),Gd(e,null,a),n}return ko(e,r,n,a),Xo(e)}function Pr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,ne(e,a)}}function nu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var iu=!1;function Br(){if(iu){var e=Cs;if(e!==null)throw e}}function zr(e,n,a,r){iu=!1;var c=e.updateQueue;ra=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var L=E,j=L.next;L.next=null,x===null?f=j:x.next=j,x=L;var ot=e.alternate;ot!==null&&(ot=ot.updateQueue,E=ot.lastBaseUpdate,E!==x&&(E===null?ot.firstBaseUpdate=j:E.next=j,ot.lastBaseUpdate=L))}if(f!==null){var dt=c.baseState;x=0,ot=j=L=null,E=f;do{var $=E.lane&-536870913,tt=$!==E.lane;if(tt?(_e&$)===$:(r&$)===$){$!==0&&$===Rs&&(iu=!0),ot!==null&&(ot=ot.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var $t=e,Yt=E;$=n;var Le=a;switch(Yt.tag){case 1:if($t=Yt.payload,typeof $t=="function"){dt=$t.call(Le,dt,$);break t}dt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=Yt.payload,$=typeof $t=="function"?$t.call(Le,dt,$):$t,$==null)break t;dt=g({},dt,$);break t;case 2:ra=!0}}$=E.callback,$!==null&&(e.flags|=64,tt&&(e.flags|=8192),tt=c.callbacks,tt===null?c.callbacks=[$]:tt.push($))}else tt={lane:$,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ot===null?(j=ot=tt,L=dt):ot=ot.next=tt,x|=$;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;tt=E,E=tt.next,tt.next=null,c.lastBaseUpdate=tt,c.shared.pending=null}}while(!0);ot===null&&(L=dt),c.baseState=L,c.firstBaseUpdate=j,c.lastBaseUpdate=ot,f===null&&(c.shared.lanes=0),ga|=x,e.lanes=x,e.memoizedState=dt}}function np(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function ip(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)np(a[e],n)}var ws=Ut(null),$o=Ut(0);function ap(e,n){e=Gi,Ht($o,e),Ht(ws,n),Gi=e|n.baseLanes}function au(){Ht($o,Gi),Ht(ws,ws.current)}function su(){Gi=$o.current,zt(ws),zt($o)}var ca=0,re=null,De=null,$e=null,tl=!1,Ds=!1,Ja=!1,el=0,Ir=0,Us=null,fv=0;function je(){throw Error(s(321))}function ru(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!In(e[a],n[a]))return!1;return!0}function ou(e,n,a,r,c,f){return ca=f,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Gp:Vp,Ja=!1,f=a(r,c),Ja=!1,Ds&&(f=rp(n,a,r,c)),sp(e),f}function sp(e){O.H=ol;var n=De!==null&&De.next!==null;if(ca=0,$e=De=re=null,tl=!1,Ir=0,Us=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Zo(e)&&(fn=!0))}function rp(e,n,a,r){re=e;var c=0;do{if(Ds&&(Us=null),Ir=0,Ds=!1,25<=c)throw Error(s(301));if(c+=1,$e=De=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=vv,f=n(a,r)}while(Ds);return f}function hv(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?Fr(n):n,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(re.flags|=1024),n}function lu(){var e=el!==0;return el=0,e}function cu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function uu(e){if(tl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}tl=!1}ca=0,$e=De=re=null,Ds=!1,Ir=el=0,Us=null}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?re.memoizedState=$e=e:$e=$e.next=e,$e}function tn(){if(De===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var n=$e===null?re.memoizedState:$e.next;if(n!==null)$e=n,De=e;else{if(e===null)throw re.alternate===null?Error(s(467)):Error(s(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},$e===null?re.memoizedState=$e=e:$e=$e.next=e}return $e}function fu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fr(e){var n=Ir;return Ir+=1,Us===null&&(Us=[]),e=$d(Us,e,n),n=re,($e===null?n.memoizedState:$e.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Gp:Vp),e}function nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fr(e);if(e.$$typeof===N)return yn(e)}throw Error(s(438,String(e)))}function hu(e){var n=null,a=re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=re.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=fu(),re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=R;return n.index++,a}function Pi(e,n){return typeof n=="function"?n(e):n}function il(e){var n=tn();return du(n,De,e)}function du(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=x=null,L=null,j=n,ot=!1;do{var dt=j.lane&-536870913;if(dt!==j.lane?(_e&dt)===dt:(ca&dt)===dt){var $=j.revertLane;if($===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),dt===Rs&&(ot=!0);else if((ca&$)===$){j=j.next,$===Rs&&(ot=!0);continue}else dt={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},L===null?(E=L=dt,x=f):L=L.next=dt,re.lanes|=$,ga|=$;dt=j.action,Ja&&a(f,dt),f=j.hasEagerState?j.eagerState:a(f,dt)}else $={lane:dt,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},L===null?(E=L=$,x=f):L=L.next=$,re.lanes|=dt,ga|=dt;j=j.next}while(j!==null&&j!==n);if(L===null?x=f:L.next=E,!In(f,e.memoizedState)&&(fn=!0,ot&&(a=Cs,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=L,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function pu(e){var n=tn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);In(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function op(e,n,a){var r=re,c=tn(),f=be;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!In((De||c).memoizedState,a);x&&(c.memoizedState=a,fn=!0),c=c.queue;var E=up.bind(null,r,c,e);if(Hr(2048,8,E,[e]),c.getSnapshot!==n||x||$e!==null&&$e.memoizedState.tag&1){if(r.flags|=2048,Ls(9,al(),cp.bind(null,r,c,a,n),null),Ge===null)throw Error(s(349));f||(ca&124)!==0||lp(r,n,a)}return a}function lp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=re.updateQueue,n===null?(n=fu(),re.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function cp(e,n,a,r){n.value=a,n.getSnapshot=r,fp(n)&&hp(e)}function up(e,n,a){return a(function(){fp(n)&&hp(e)})}function fp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!In(e,a)}catch{return!0}}function hp(e){var n=Es(e,2);n!==null&&Xn(n,e,2)}function mu(e){var n=Un();if(typeof e=="function"){var a=e;if(e=a(),Ja){Mt(!0);try{a()}finally{Mt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},n}function dp(e,n,a,r){return e.baseState=a,du(e,De,typeof r=="function"?r:Pi)}function dv(e,n,a,r,c){if(rl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,pp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function pp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=O.T,x={};O.T=x;try{var E=a(c,r),L=O.S;L!==null&&L(x,E),mp(e,n,E)}catch(j){gu(e,n,j)}finally{O.T=f}}else try{f=a(c,r),mp(e,n,f)}catch(j){gu(e,n,j)}}function mp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){gp(e,n,r)},function(r){return gu(e,n,r)}):gp(e,n,a)}function gp(e,n,a){n.status="fulfilled",n.value=a,_p(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,pp(e,a)))}function gu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,_p(n),n=n.next;while(n!==r)}e.action=null}function _p(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function vp(e,n){return n}function xp(e,n){if(be){var a=Ge.formState;if(a!==null){t:{var r=re;if(be){if(Ye){e:{for(var c=Ye,f=di;c.nodeType!==8;){if(!f){c=null;break e}if(c=si(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ye=si(c.nextSibling),r=c.data==="F!";break t}}Za(r)}r=!1}r&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vp,lastRenderedState:n},a.queue=r,a=Ip.bind(null,re,r),r.dispatch=a,r=mu(!1),f=Mu.bind(null,re,!1,r.queue),r=Un(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=dv.bind(null,re,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function Sp(e){var n=tn();return Mp(n,De,e)}function Mp(e,n,a){if(n=du(e,n,vp)[0],e=il(Pi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Fr(n)}catch(x){throw x===Nr?Qo:x}else r=n;n=tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(re.flags|=2048,Ls(9,al(),pv.bind(null,c,a),null)),[r,f,e]}function pv(e,n){e.action=n}function yp(e){var n=tn(),a=De;if(a!==null)return Mp(n,a,e);tn(),n=n.memoizedState,a=tn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Ls(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=re.updateQueue,n===null&&(n=fu(),re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function al(){return{destroy:void 0,resource:void 0}}function Ep(){return tn().memoizedState}function sl(e,n,a,r){var c=Un();r=r===void 0?null:r,re.flags|=e,c.memoizedState=Ls(1|n,al(),a,r)}function Hr(e,n,a,r){var c=tn();r=r===void 0?null:r;var f=c.memoizedState.inst;De!==null&&r!==null&&ru(r,De.memoizedState.deps)?c.memoizedState=Ls(n,f,a,r):(re.flags|=e,c.memoizedState=Ls(1|n,f,a,r))}function Tp(e,n){sl(8390656,8,e,n)}function bp(e,n){Hr(2048,8,e,n)}function Ap(e,n){return Hr(4,2,e,n)}function Rp(e,n){return Hr(4,4,e,n)}function Cp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wp(e,n,a){a=a!=null?a.concat([e]):null,Hr(4,4,Cp.bind(null,n,e),a)}function _u(){}function Dp(e,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&ru(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Up(e,n){var a=tn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&ru(n,r[1]))return r[0];if(r=e(),Ja){Mt(!0);try{e()}finally{Mt(!1)}}return a.memoizedState=[r,n],r}function vu(e,n,a){return a===void 0||(ca&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Om(),re.lanes|=e,ga|=e,a)}function Lp(e,n,a,r){return In(a,n)?a:ws.current!==null?(e=vu(e,a,r),In(e,n)||(fn=!0),e):(ca&42)===0?(fn=!0,e.memoizedState=a):(e=Om(),re.lanes|=e,ga|=e,n)}function Np(e,n,a,r,c){var f=Q.p;Q.p=f!==0&&8>f?f:8;var x=O.T,E={};O.T=E,Mu(e,!1,n,a);try{var L=c(),j=O.S;if(j!==null&&j(E,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var ot=uv(L,r);Gr(e,n,ot,kn(e))}else Gr(e,n,r,kn(e))}catch(dt){Gr(e,n,{then:function(){},status:"rejected",reason:dt},kn())}finally{Q.p=f,O.T=x}}function mv(){}function xu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=Op(e).queue;Np(e,c,n,W,a===null?mv:function(){return Pp(e),a(r)})}function Op(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Pp(e){var n=Op(e).next.queue;Gr(e,n,{},kn())}function Su(){return yn(so)}function Bp(){return tn().memoizedState}function zp(){return tn().memoizedState}function gv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=kn();e=oa(a);var r=la(n,e,a);r!==null&&(Xn(r,n,a),Pr(r,n,a)),n={cache:Kc()},e.payload=n;return}n=n.return}}function _v(e,n,a){var r=kn();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},rl(e)?Fp(n,a):(a=Hc(e,n,a,r),a!==null&&(Xn(a,e,r),Hp(a,n,r)))}function Ip(e,n,a){var r=kn();Gr(e,n,a,r)}function Gr(e,n,a,r){var c={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(rl(e))Fp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,a);if(c.hasEagerState=!0,c.eagerState=E,In(E,x))return ko(e,n,c,0),Ge===null&&Vo(),!1}catch{}finally{}if(a=Hc(e,n,c,r),a!==null)return Xn(a,e,r),Hp(a,n,r),!0}return!1}function Mu(e,n,a,r){if(r={lane:2,revertLane:$u(),action:r,hasEagerState:!1,eagerState:null,next:null},rl(e)){if(n)throw Error(s(479))}else n=Hc(e,a,r,2),n!==null&&Xn(n,e,2)}function rl(e){var n=e.alternate;return e===re||n!==null&&n===re}function Fp(e,n){Ds=tl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Hp(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,ne(e,a)}}var ol={readContext:yn,use:nl,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je},Gp={readContext:yn,use:nl,useCallback:function(e,n){return Un().memoizedState=[e,n===void 0?null:n],e},useContext:yn,useEffect:Tp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,sl(4194308,4,Cp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return sl(4194308,4,e,n)},useInsertionEffect:function(e,n){sl(4,2,e,n)},useMemo:function(e,n){var a=Un();n=n===void 0?null:n;var r=e();if(Ja){Mt(!0);try{e()}finally{Mt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Un();if(a!==void 0){var c=a(n);if(Ja){Mt(!0);try{a(n)}finally{Mt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=_v.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var n=Un();return e={current:e},n.memoizedState=e},useState:function(e){e=mu(e);var n=e.queue,a=Ip.bind(null,re,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:_u,useDeferredValue:function(e,n){var a=Un();return vu(a,e,n)},useTransition:function(){var e=mu(!1);return e=Np.bind(null,re,e.queue,!0,!1),Un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=re,c=Un();if(be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ge===null)throw Error(s(349));(_e&124)!==0||lp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Tp(up.bind(null,r,f,e),[e]),r.flags|=2048,Ls(9,al(),cp.bind(null,r,f,a,n),null),a},useId:function(){var e=Un(),n=Ge.identifierPrefix;if(be){var a=Li,r=Ui;a=(r&~(1<<32-Bt(r)-1)).toString(32)+a,n="«"+n+"R"+a,a=el++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=fv++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Su,useFormState:xp,useActionState:xp,useOptimistic:function(e){var n=Un();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mu.bind(null,re,!0,a),a.dispatch=n,[e,n]},useMemoCache:hu,useCacheRefresh:function(){return Un().memoizedState=gv.bind(null,re)}},Vp={readContext:yn,use:nl,useCallback:Dp,useContext:yn,useEffect:bp,useImperativeHandle:wp,useInsertionEffect:Ap,useLayoutEffect:Rp,useMemo:Up,useReducer:il,useRef:Ep,useState:function(){return il(Pi)},useDebugValue:_u,useDeferredValue:function(e,n){var a=tn();return Lp(a,De.memoizedState,e,n)},useTransition:function(){var e=il(Pi)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:Fr(e),n]},useSyncExternalStore:op,useId:Bp,useHostTransitionStatus:Su,useFormState:Sp,useActionState:Sp,useOptimistic:function(e,n){var a=tn();return dp(a,De,e,n)},useMemoCache:hu,useCacheRefresh:zp},vv={readContext:yn,use:nl,useCallback:Dp,useContext:yn,useEffect:bp,useImperativeHandle:wp,useInsertionEffect:Ap,useLayoutEffect:Rp,useMemo:Up,useReducer:pu,useRef:Ep,useState:function(){return pu(Pi)},useDebugValue:_u,useDeferredValue:function(e,n){var a=tn();return De===null?vu(a,e,n):Lp(a,De.memoizedState,e,n)},useTransition:function(){var e=pu(Pi)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:Fr(e),n]},useSyncExternalStore:op,useId:Bp,useHostTransitionStatus:Su,useFormState:yp,useActionState:yp,useOptimistic:function(e,n){var a=tn();return De!==null?dp(a,De,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hu,useCacheRefresh:zp},Ns=null,Vr=0;function ll(e){var n=Vr;return Vr+=1,Ns===null&&(Ns=[]),$d(Ns,e,n)}function kr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function cl(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function kp(e){var n=e._init;return n(e._payload)}function Xp(e){function n(V,z){if(e){var Y=V.deletions;Y===null?(V.deletions=[z],V.flags|=16):Y.push(z)}}function a(V,z){if(!e)return null;for(;z!==null;)n(V,z),z=z.sibling;return null}function r(V){for(var z=new Map;V!==null;)V.key!==null?z.set(V.key,V):z.set(V.index,V),V=V.sibling;return z}function c(V,z){return V=Di(V,z),V.index=0,V.sibling=null,V}function f(V,z,Y){return V.index=Y,e?(Y=V.alternate,Y!==null?(Y=Y.index,Y<z?(V.flags|=67108866,z):Y):(V.flags|=67108866,z)):(V.flags|=1048576,z)}function x(V){return e&&V.alternate===null&&(V.flags|=67108866),V}function E(V,z,Y,ut){return z===null||z.tag!==6?(z=Vc(Y,V.mode,ut),z.return=V,z):(z=c(z,Y),z.return=V,z)}function L(V,z,Y,ut){var Pt=Y.type;return Pt===A?ot(V,z,Y.props.children,ut,Y.key):z!==null&&(z.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===q&&kp(Pt)===z.type)?(z=c(z,Y.props),kr(z,Y),z.return=V,z):(z=Wo(Y.type,Y.key,Y.props,null,V.mode,ut),kr(z,Y),z.return=V,z)}function j(V,z,Y,ut){return z===null||z.tag!==4||z.stateNode.containerInfo!==Y.containerInfo||z.stateNode.implementation!==Y.implementation?(z=kc(Y,V.mode,ut),z.return=V,z):(z=c(z,Y.children||[]),z.return=V,z)}function ot(V,z,Y,ut,Pt){return z===null||z.tag!==7?(z=Xa(Y,V.mode,ut,Pt),z.return=V,z):(z=c(z,Y),z.return=V,z)}function dt(V,z,Y){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=Vc(""+z,V.mode,Y),z.return=V,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return Y=Wo(z.type,z.key,z.props,null,V.mode,Y),kr(Y,z),Y.return=V,Y;case y:return z=kc(z,V.mode,Y),z.return=V,z;case q:var ut=z._init;return z=ut(z._payload),dt(V,z,Y)}if(pt(z)||rt(z))return z=Xa(z,V.mode,Y,null),z.return=V,z;if(typeof z.then=="function")return dt(V,ll(z),Y);if(z.$$typeof===N)return dt(V,jo(V,z),Y);cl(V,z)}return null}function $(V,z,Y,ut){var Pt=z!==null?z.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Pt!==null?null:E(V,z,""+Y,ut);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case S:return Y.key===Pt?L(V,z,Y,ut):null;case y:return Y.key===Pt?j(V,z,Y,ut):null;case q:return Pt=Y._init,Y=Pt(Y._payload),$(V,z,Y,ut)}if(pt(Y)||rt(Y))return Pt!==null?null:ot(V,z,Y,ut,null);if(typeof Y.then=="function")return $(V,z,ll(Y),ut);if(Y.$$typeof===N)return $(V,z,jo(V,Y),ut);cl(V,Y)}return null}function tt(V,z,Y,ut,Pt){if(typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint")return V=V.get(Y)||null,E(z,V,""+ut,Pt);if(typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case S:return V=V.get(ut.key===null?Y:ut.key)||null,L(z,V,ut,Pt);case y:return V=V.get(ut.key===null?Y:ut.key)||null,j(z,V,ut,Pt);case q:var ce=ut._init;return ut=ce(ut._payload),tt(V,z,Y,ut,Pt)}if(pt(ut)||rt(ut))return V=V.get(Y)||null,ot(z,V,ut,Pt,null);if(typeof ut.then=="function")return tt(V,z,Y,ll(ut),Pt);if(ut.$$typeof===N)return tt(V,z,Y,jo(z,ut),Pt);cl(z,ut)}return null}function $t(V,z,Y,ut){for(var Pt=null,ce=null,Ft=z,Kt=z=0,dn=null;Ft!==null&&Kt<Y.length;Kt++){Ft.index>Kt?(dn=Ft,Ft=null):dn=Ft.sibling;var ye=$(V,Ft,Y[Kt],ut);if(ye===null){Ft===null&&(Ft=dn);break}e&&Ft&&ye.alternate===null&&n(V,Ft),z=f(ye,z,Kt),ce===null?Pt=ye:ce.sibling=ye,ce=ye,Ft=dn}if(Kt===Y.length)return a(V,Ft),be&&qa(V,Kt),Pt;if(Ft===null){for(;Kt<Y.length;Kt++)Ft=dt(V,Y[Kt],ut),Ft!==null&&(z=f(Ft,z,Kt),ce===null?Pt=Ft:ce.sibling=Ft,ce=Ft);return be&&qa(V,Kt),Pt}for(Ft=r(Ft);Kt<Y.length;Kt++)dn=tt(Ft,V,Kt,Y[Kt],ut),dn!==null&&(e&&dn.alternate!==null&&Ft.delete(dn.key===null?Kt:dn.key),z=f(dn,z,Kt),ce===null?Pt=dn:ce.sibling=dn,ce=dn);return e&&Ft.forEach(function(ba){return n(V,ba)}),be&&qa(V,Kt),Pt}function Yt(V,z,Y,ut){if(Y==null)throw Error(s(151));for(var Pt=null,ce=null,Ft=z,Kt=z=0,dn=null,ye=Y.next();Ft!==null&&!ye.done;Kt++,ye=Y.next()){Ft.index>Kt?(dn=Ft,Ft=null):dn=Ft.sibling;var ba=$(V,Ft,ye.value,ut);if(ba===null){Ft===null&&(Ft=dn);break}e&&Ft&&ba.alternate===null&&n(V,Ft),z=f(ba,z,Kt),ce===null?Pt=ba:ce.sibling=ba,ce=ba,Ft=dn}if(ye.done)return a(V,Ft),be&&qa(V,Kt),Pt;if(Ft===null){for(;!ye.done;Kt++,ye=Y.next())ye=dt(V,ye.value,ut),ye!==null&&(z=f(ye,z,Kt),ce===null?Pt=ye:ce.sibling=ye,ce=ye);return be&&qa(V,Kt),Pt}for(Ft=r(Ft);!ye.done;Kt++,ye=Y.next())ye=tt(Ft,V,Kt,ye.value,ut),ye!==null&&(e&&ye.alternate!==null&&Ft.delete(ye.key===null?Kt:ye.key),z=f(ye,z,Kt),ce===null?Pt=ye:ce.sibling=ye,ce=ye);return e&&Ft.forEach(function(xx){return n(V,xx)}),be&&qa(V,Kt),Pt}function Le(V,z,Y,ut){if(typeof Y=="object"&&Y!==null&&Y.type===A&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case S:t:{for(var Pt=Y.key;z!==null;){if(z.key===Pt){if(Pt=Y.type,Pt===A){if(z.tag===7){a(V,z.sibling),ut=c(z,Y.props.children),ut.return=V,V=ut;break t}}else if(z.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===q&&kp(Pt)===z.type){a(V,z.sibling),ut=c(z,Y.props),kr(ut,Y),ut.return=V,V=ut;break t}a(V,z);break}else n(V,z);z=z.sibling}Y.type===A?(ut=Xa(Y.props.children,V.mode,ut,Y.key),ut.return=V,V=ut):(ut=Wo(Y.type,Y.key,Y.props,null,V.mode,ut),kr(ut,Y),ut.return=V,V=ut)}return x(V);case y:t:{for(Pt=Y.key;z!==null;){if(z.key===Pt)if(z.tag===4&&z.stateNode.containerInfo===Y.containerInfo&&z.stateNode.implementation===Y.implementation){a(V,z.sibling),ut=c(z,Y.children||[]),ut.return=V,V=ut;break t}else{a(V,z);break}else n(V,z);z=z.sibling}ut=kc(Y,V.mode,ut),ut.return=V,V=ut}return x(V);case q:return Pt=Y._init,Y=Pt(Y._payload),Le(V,z,Y,ut)}if(pt(Y))return $t(V,z,Y,ut);if(rt(Y)){if(Pt=rt(Y),typeof Pt!="function")throw Error(s(150));return Y=Pt.call(Y),Yt(V,z,Y,ut)}if(typeof Y.then=="function")return Le(V,z,ll(Y),ut);if(Y.$$typeof===N)return Le(V,z,jo(V,Y),ut);cl(V,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint"?(Y=""+Y,z!==null&&z.tag===6?(a(V,z.sibling),ut=c(z,Y),ut.return=V,V=ut):(a(V,z),ut=Vc(Y,V.mode,ut),ut.return=V,V=ut),x(V)):a(V,z)}return function(V,z,Y,ut){try{Vr=0;var Pt=Le(V,z,Y,ut);return Ns=null,Pt}catch(Ft){if(Ft===Nr||Ft===Qo)throw Ft;var ce=Fn(29,Ft,null,V.mode);return ce.lanes=ut,ce.return=V,ce}finally{}}}var Os=Xp(!0),Wp=Xp(!1),Jn=Ut(null),pi=null;function ua(e){var n=e.alternate;Ht(rn,rn.current&1),Ht(Jn,e),pi===null&&(n===null||ws.current!==null||n.memoizedState!==null)&&(pi=e)}function qp(e){if(e.tag===22){if(Ht(rn,rn.current),Ht(Jn,e),pi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(pi=e)}}else fa()}function fa(){Ht(rn,rn.current),Ht(Jn,Jn.current)}function Bi(e){zt(Jn),pi===e&&(pi=null),zt(rn)}var rn=Ut(0);function ul(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||hf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function yu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Eu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=kn(),c=oa(r);c.payload=n,a!=null&&(c.callback=a),n=la(e,c,r),n!==null&&(Xn(n,e,r),Pr(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=kn(),c=oa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=la(e,c,r),n!==null&&(Xn(n,e,r),Pr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=kn(),r=oa(a);r.tag=2,n!=null&&(r.callback=n),n=la(e,r,a),n!==null&&(Xn(n,e,a),Pr(n,e,a))}};function Yp(e,n,a,r,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!br(a,r)||!br(c,f):!0}function Zp(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Eu.enqueueReplaceState(n,n.state,null)}function $a(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function jp(e){fl(e)}function Kp(e){console.error(e)}function Qp(e){fl(e)}function hl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Jp(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Tu(e,n,a){return a=oa(a),a.tag=3,a.payload={element:null},a.callback=function(){hl(e,n)},a}function $p(e){return e=oa(e),e.tag=3,e}function tm(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Jp(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Jp(n,a,r),typeof c!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function xv(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Dr(n,a,c,!0),a=Jn.current,a!==null){switch(a.tag){case 13:return pi===null?Zu():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===$c?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ku(e,r,c)),!1;case 22:return a.flags|=65536,r===$c?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ku(e,r,c)),!1}throw Error(s(435,a.tag))}return Ku(e,r,c),Zu(),!1}if(be)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==qc&&(e=Error(s(422),{cause:r}),wr(Zn(e,a)))):(r!==qc&&(n=Error(s(423),{cause:r}),wr(Zn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Zn(r,a),c=Tu(e.stateNode,r,c),nu(e,c),Ze!==4&&(Ze=2)),!1;var f=Error(s(520),{cause:r});if(f=Zn(f,a),Kr===null?Kr=[f]:Kr.push(f),Ze!==4&&(Ze=2),n===null)return!0;r=Zn(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Tu(a.stateNode,r,e),nu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(_a===null||!_a.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=$p(c),tm(c,e,a,r),nu(a,c),!1}a=a.return}while(a!==null);return!1}var em=Error(s(461)),fn=!1;function _n(e,n,a,r){n.child=e===null?Wp(n,null,a,r):Os(n,e.child,a,r)}function nm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var E in r)E!=="ref"&&(x[E]=r[E])}else x=r;return Ka(n),r=ou(e,n,a,x,f,c),E=lu(),e!==null&&!fn?(cu(e,n,c),zi(e,n,c)):(be&&E&&Xc(n),n.flags|=1,_n(e,n,r,c),n.child)}function im(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!Gc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,am(e,n,f,r,c)):(e=Wo(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Lu(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:br,a(x,r)&&e.ref===n.ref)return zi(e,n,c)}return n.flags|=1,e=Di(f,r),e.ref=n.ref,e.return=n,n.child=e}function am(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(br(f,r)&&e.ref===n.ref)if(fn=!1,n.pendingProps=r=f,Lu(e,c))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,zi(e,n,c)}return bu(e,n,a,r,c)}function sm(e,n,a){var r=n.pendingProps,c=r.children,f=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((n.flags&128)!==0){if(r=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~r}else n.childLanes=0,n.child=null;return rm(e,n,r,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ko(n,f!==null?f.cachePool:null),f!==null?ap(n,f):au(),qp(n);else return n.lanes=n.childLanes=536870912,rm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Ko(n,f.cachePool),ap(n,f),fa(),n.memoizedState=null):(e!==null&&Ko(n,null),au(),fa());return _n(e,n,c,a),n.child}function rm(e,n,a,r){var c=Jc();return c=c===null?null:{parent:sn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Ko(n,null),au(),qp(n),e!==null&&Dr(e,n,r,!0),null}function dl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function bu(e,n,a,r,c){return Ka(n),a=ou(e,n,a,r,void 0,c),r=lu(),e!==null&&!fn?(cu(e,n,c),zi(e,n,c)):(be&&r&&Xc(n),n.flags|=1,_n(e,n,a,c),n.child)}function om(e,n,a,r,c,f){return Ka(n),n.updateQueue=null,a=rp(n,r,a,c),sp(e),r=lu(),e!==null&&!fn?(cu(e,n,f),zi(e,n,f)):(be&&r&&Xc(n),n.flags|=1,_n(e,n,a,f),n.child)}function lm(e,n,a,r,c){if(Ka(n),n.stateNode===null){var f=Ts,x=a.contextType;typeof x=="object"&&x!==null&&(f=yn(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Eu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},tu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?yn(x):Ts,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(yu(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Eu.enqueueReplaceState(f,f.state,null),zr(n,r,f,c),Br(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,L=$a(a,E);f.props=L;var j=f.context,ot=a.contextType;x=Ts,typeof ot=="object"&&ot!==null&&(x=yn(ot));var dt=a.getDerivedStateFromProps;ot=typeof dt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ot||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||j!==x)&&Zp(n,f,r,x),ra=!1;var $=n.memoizedState;f.state=$,zr(n,r,f,c),Br(),j=n.memoizedState,E||$!==j||ra?(typeof dt=="function"&&(yu(n,a,dt,r),j=n.memoizedState),(L=ra||Yp(n,a,L,r,$,j,x))?(ot||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=j),f.props=r,f.state=j,f.context=x,r=L):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,eu(e,n),x=n.memoizedProps,ot=$a(a,x),f.props=ot,dt=n.pendingProps,$=f.context,j=a.contextType,L=Ts,typeof j=="object"&&j!==null&&(L=yn(j)),E=a.getDerivedStateFromProps,(j=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==dt||$!==L)&&Zp(n,f,r,L),ra=!1,$=n.memoizedState,f.state=$,zr(n,r,f,c),Br();var tt=n.memoizedState;x!==dt||$!==tt||ra||e!==null&&e.dependencies!==null&&Zo(e.dependencies)?(typeof E=="function"&&(yu(n,a,E,r),tt=n.memoizedState),(ot=ra||Yp(n,a,ot,r,$,tt,L)||e!==null&&e.dependencies!==null&&Zo(e.dependencies))?(j||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,tt,L),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,tt,L)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=tt),f.props=r,f.state=tt,f.context=L,r=ot):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,dl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Os(n,e.child,null,c),n.child=Os(n,null,a,c)):_n(e,n,a,c),n.memoizedState=f.state,e=n.child):e=zi(e,n,c),e}function cm(e,n,a,r){return Cr(),n.flags|=256,_n(e,n,a,r),n.child}var Au={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ru(e){return{baseLanes:e,cachePool:Kd()}}function Cu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=$n),e}function um(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(c?ua(n):fa(),be){var E=Ye,L;if(L=E){t:{for(L=E,E=di;L.nodeType!==8;){if(!E){E=null;break t}if(L=si(L.nextSibling),L===null){E=null;break t}}E=L}E!==null?(n.memoizedState={dehydrated:E,treeContext:Wa!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},L=Fn(18,null,null,0),L.stateNode=E,L.return=n,n.child=L,An=n,Ye=null,L=!0):L=!1}L||Za(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return hf(E)?n.lanes=32:n.lanes=536870912,null;Bi(n)}return E=r.children,r=r.fallback,c?(fa(),c=n.mode,E=pl({mode:"hidden",children:E},c),r=Xa(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,c=n.child,c.memoizedState=Ru(a),c.childLanes=Cu(e,x,a),n.memoizedState=Au,r):(ua(n),wu(n,E))}if(L=e.memoizedState,L!==null&&(E=L.dehydrated,E!==null)){if(f)n.flags&256?(ua(n),n.flags&=-257,n=Du(e,n,a)):n.memoizedState!==null?(fa(),n.child=e.child,n.flags|=128,n=null):(fa(),c=r.fallback,E=n.mode,r=pl({mode:"visible",children:r.children},E),c=Xa(c,E,a,null),c.flags|=2,r.return=n,c.return=n,r.sibling=c,n.child=r,Os(n,e.child,null,a),r=n.child,r.memoizedState=Ru(a),r.childLanes=Cu(e,x,a),n.memoizedState=Au,n=c);else if(ua(n),hf(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var j=x.dgst;x=j,r=Error(s(419)),r.stack="",r.digest=x,wr({value:r,source:null,stack:null}),n=Du(e,n,a)}else if(fn||Dr(e,n,a,!1),x=(a&e.childLanes)!==0,fn||x){if(x=Ge,x!==null&&(r=a&-a,r=(r&42)!==0?1:Fe(r),r=(r&(x.suspendedLanes|a))!==0?0:r,r!==0&&r!==L.retryLane))throw L.retryLane=r,Es(e,r),Xn(x,e,r),em;E.data==="$?"||Zu(),n=Du(e,n,a)}else E.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=L.treeContext,Ye=si(E.nextSibling),An=n,be=!0,Ya=null,di=!1,e!==null&&(Kn[Qn++]=Ui,Kn[Qn++]=Li,Kn[Qn++]=Wa,Ui=e.id,Li=e.overflow,Wa=n),n=wu(n,r.children),n.flags|=4096);return n}return c?(fa(),c=r.fallback,E=n.mode,L=e.child,j=L.sibling,r=Di(L,{mode:"hidden",children:r.children}),r.subtreeFlags=L.subtreeFlags&65011712,j!==null?c=Di(j,c):(c=Xa(c,E,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,r=c,c=n.child,E=e.child.memoizedState,E===null?E=Ru(a):(L=E.cachePool,L!==null?(j=sn._currentValue,L=L.parent!==j?{parent:j,pool:j}:L):L=Kd(),E={baseLanes:E.baseLanes|a,cachePool:L}),c.memoizedState=E,c.childLanes=Cu(e,x,a),n.memoizedState=Au,r):(ua(n),a=e.child,e=a.sibling,a=Di(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function wu(e,n){return n=pl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function pl(e,n){return e=Fn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Du(e,n,a){return Os(n,e.child,null,a),e=wu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function fm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Zc(e.return,n,a)}function Uu(e,n,a,r,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=a,f.tailMode=c)}function hm(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;if(_n(e,n,r.children,a),r=rn.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fm(e,a,n);else if(e.tag===19)fm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(Ht(rn,r),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&ul(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Uu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&ul(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Uu(n,!0,a,null,f);break;case"together":Uu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ga|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Dr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Di(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Di(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Lu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Zo(e)))}function Sv(e,n,a){switch(n.tag){case 3:kt(n,n.stateNode.containerInfo),sa(n,sn,e.memoizedState.cache),Cr();break;case 27:case 5:Zt(n);break;case 4:kt(n,n.stateNode.containerInfo);break;case 10:sa(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?um(e,n,a):(ua(n),e=zi(e,n,a),e!==null?e.sibling:null);ua(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Dr(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return hm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ht(rn,rn.current),r)break;return null;case 22:case 23:return n.lanes=0,sm(e,n,a);case 24:sa(n,sn,e.memoizedState.cache)}return zi(e,n,a)}function dm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Lu(e,a)&&(n.flags&128)===0)return fn=!1,Sv(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,be&&(n.flags&1048576)!==0&&kd(n,Yo,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var r=n.elementType,c=r._init;if(r=c(r._payload),n.type=r,typeof r=="function")Gc(r)?(e=$a(r,e),n.tag=1,n=lm(null,n,r,e,a)):(n.tag=0,n=bu(null,n,r,e,a));else{if(r!=null){if(c=r.$$typeof,c===U){n.tag=11,n=nm(null,n,r,e,a);break t}else if(c===F){n.tag=14,n=im(null,n,r,e,a);break t}}throw n=ct(r)||r,Error(s(306,n,""))}}return n;case 0:return bu(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=$a(r,n.pendingProps),lm(e,n,r,c,a);case 3:t:{if(kt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,eu(e,n),zr(n,r,null,a);var x=n.memoizedState;if(r=x.cache,sa(n,sn,r),r!==f.cache&&jc(n,[sn],a,!0),Br(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=cm(e,n,r,a);break t}else if(r!==c){c=Zn(Error(s(424)),n),wr(c),n=cm(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=si(e.firstChild),An=n,be=!0,Ya=null,di=!0,a=Wp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Cr(),r===c){n=zi(e,n,a);break t}_n(e,n,r,a)}n=n.child}return n;case 26:return dl(e,n),e===null?(a=_g(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,r=Cl(Lt.current).createElement(a),r[nn]=n,r[mn]=e,xn(r,a,e),Je(r),n.stateNode=r):n.memoizedState=_g(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zt(n),e===null&&be&&(r=n.stateNode=pg(n.type,n.pendingProps,Lt.current),An=n,di=!0,c=Ye,Sa(n.type)?(df=c,Ye=si(r.firstChild)):Ye=c),_n(e,n,n.pendingProps.children,a),dl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&be&&((c=r=Ye)&&(r=Zv(r,n.type,n.pendingProps,di),r!==null?(n.stateNode=r,An=n,Ye=si(r.firstChild),di=!1,c=!0):c=!1),c||Za(n)),Zt(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,r=f.children,cf(c,f)?r=null:x!==null&&cf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=ou(e,n,hv,null,null,a),so._currentValue=c),dl(e,n),_n(e,n,r,a),n.child;case 6:return e===null&&be&&((e=a=Ye)&&(a=jv(a,n.pendingProps,di),a!==null?(n.stateNode=a,An=n,Ye=null,e=!0):e=!1),e||Za(n)),null;case 13:return um(e,n,a);case 4:return kt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Os(n,null,r,a):_n(e,n,r,a),n.child;case 11:return nm(e,n,n.type,n.pendingProps,a);case 7:return _n(e,n,n.pendingProps,a),n.child;case 8:return _n(e,n,n.pendingProps.children,a),n.child;case 12:return _n(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,sa(n,n.type,r.value),_n(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,Ka(n),c=yn(c),r=r(c),n.flags|=1,_n(e,n,r,a),n.child;case 14:return im(e,n,n.type,n.pendingProps,a);case 15:return am(e,n,n.type,n.pendingProps,a);case 19:return hm(e,n,a);case 31:return r=n.pendingProps,a=n.mode,r={mode:r.mode,children:r.children},e===null?(a=pl(r,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Di(e.child,r),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return sm(e,n,a);case 24:return Ka(n),r=yn(sn),e===null?(c=Jc(),c===null&&(c=Ge,f=Kc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},tu(n),sa(n,sn,c)):((e.lanes&a)!==0&&(eu(e,n),zr(n,null,null,a),Br()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),sa(n,sn,r)):(r=f.cache,sa(n,sn,r),r!==c.cache&&jc(n,[sn],a,!0))),_n(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ii(e){e.flags|=4}function pm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yg(n)){if(n=Jn.current,n!==null&&((_e&4194048)===_e?pi!==null:(_e&62914560)!==_e&&(_e&536870912)===0||n!==pi))throw Or=$c,Qd;e.flags|=8192}}function ml(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?At():536870912,e.lanes|=n,Is|=n)}function Xr(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Mv(e,n,a){var r=n.pendingProps;switch(Wc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Oi(sn),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Rr(n)?Ii(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qd())),We(n),null;case 26:return a=n.memoizedState,e===null?(Ii(n),a!==null?(We(n),pm(n,a)):(We(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Ii(n),We(n),pm(n,a)):(We(n),n.flags&=-16777217):(e.memoizedProps!==r&&Ii(n),We(n),n.flags&=-16777217),null;case 27:Ie(n),a=Lt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ii(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}e=at.current,Rr(n)?Xd(n):(e=pg(c,r,a),n.stateNode=e,Ii(n))}return We(n),null;case 5:if(Ie(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ii(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return We(n),null}if(e=at.current,Rr(n))Xd(n);else{switch(c=Cl(Lt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?c.createElement("select",{is:r.is}):c.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?c.createElement(a,{is:r.is}):c.createElement(a)}}e[nn]=n,e[mn]=r;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(xn(e,a,r),a){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ii(n)}}return We(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ii(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Lt.current,Rr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=An,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[nn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||og(e.nodeValue,a)),e||Za(n)}else e=Cl(e).createTextNode(r),e[nn]=n,n.stateNode=e}return We(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Rr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[nn]=n}else Cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),c=!1}else c=qd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Bi(n),n):(Bi(n),null)}if(Bi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=r!==null,e=e!==null&&e.memoizedState!==null,a){r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),ml(n,n.updateQueue),We(n),null;case 4:return oe(),e===null&&af(n.stateNode.containerInfo),We(n),null;case 10:return Oi(n.type),We(n),null;case 19:if(zt(rn),c=n.memoizedState,c===null)return We(n),null;if(r=(n.flags&128)!==0,f=c.rendering,f===null)if(r)Xr(c,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=ul(e),f!==null){for(n.flags|=128,Xr(c,!1),e=f.updateQueue,n.updateQueue=e,ml(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Vd(a,e),a=a.sibling;return Ht(rn,rn.current&1|2),n.child}e=e.sibling}c.tail!==null&&ee()>vl&&(n.flags|=128,r=!0,Xr(c,!1),n.lanes=4194304)}else{if(!r)if(e=ul(f),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,ml(n,e),Xr(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!be)return We(n),null}else 2*ee()-c.renderingStartTime>vl&&a!==536870912&&(n.flags|=128,r=!0,Xr(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ee(),n.sibling=null,e=rn.current,Ht(rn,r?e&1|2:e&1),n):(We(n),null);case 22:case 23:return Bi(n),su(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&ml(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&zt(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Oi(sn),We(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function yv(e,n){switch(Wc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Oi(sn),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ie(n),null;case 13:if(Bi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return zt(rn),null;case 4:return oe(),null;case 10:return Oi(n.type),null;case 22:case 23:return Bi(n),su(),e!==null&&zt(Qa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Oi(sn),null;case 25:return null;default:return null}}function mm(e,n){switch(Wc(n),n.tag){case 3:Oi(sn),oe();break;case 26:case 27:case 5:Ie(n);break;case 4:oe();break;case 13:Bi(n);break;case 19:zt(rn);break;case 10:Oi(n.type);break;case 22:case 23:Bi(n),su(),e!==null&&zt(Qa);break;case 24:Oi(sn)}}function Wr(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==c)}}catch(E){ze(n,n.return,E)}}function ha(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var x=r.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var L=a,j=E;try{j()}catch(ot){ze(c,L,ot)}}}r=r.next}while(r!==f)}}catch(ot){ze(n,n.return,ot)}}function gm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{ip(n,a)}catch(r){ze(e,e.return,r)}}}function _m(e,n,a){a.props=$a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){ze(e,n,r)}}function qr(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){ze(e,n,c)}}function mi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){ze(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ze(e,n,c)}else a.current=null}function vm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){ze(e,e.return,c)}}function Nu(e,n,a){try{var r=e.stateNode;kv(r,e.type,a,n),r[mn]=n}catch(c){ze(e,e.return,c)}}function xm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sa(e.type)||e.tag===4}function Ou(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||xm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pu(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Rl));else if(r!==4&&(r===27&&Sa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Pu(e,n,a),e=e.sibling;e!==null;)Pu(e,n,a),e=e.sibling}function gl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Sa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(gl(e,n,a),e=e.sibling;e!==null;)gl(e,n,a),e=e.sibling}function Sm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);xn(n,r,a),n[nn]=e,n[mn]=a}catch(f){ze(e,e.return,f)}}var Fi=!1,Ke=!1,Bu=!1,Mm=typeof WeakSet=="function"?WeakSet:Set,hn=null;function Ev(e,n){if(e=e.containerInfo,of=Ol,e=Ld(e),Oc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,E=-1,L=-1,j=0,ot=0,dt=e,$=null;e:for(;;){for(var tt;dt!==a||c!==0&&dt.nodeType!==3||(E=x+c),dt!==f||r!==0&&dt.nodeType!==3||(L=x+r),dt.nodeType===3&&(x+=dt.nodeValue.length),(tt=dt.firstChild)!==null;)$=dt,dt=tt;for(;;){if(dt===e)break e;if($===a&&++j===c&&(E=x),$===f&&++ot===r&&(L=x),(tt=dt.nextSibling)!==null)break;dt=$,$=dt.parentNode}dt=tt}a=E===-1||L===-1?null:{start:E,end:L}}else a=null}a=a||{start:0,end:0}}else a=null;for(lf={focusedElem:e,selectionRange:a},Ol=!1,hn=n;hn!==null;)if(n=hn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,hn=e;else for(;hn!==null;){switch(n=hn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var $t=$a(a.type,c,a.elementType===a.type);e=r.getSnapshotBeforeUpdate($t,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(Yt){ze(a,a.return,Yt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ff(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ff(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,hn=e;break}hn=n.return}}function ym(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:da(e,a),r&4&&Wr(5,a);break;case 1:if(da(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){ze(a,a.return,x)}else{var c=$a(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){ze(a,a.return,x)}}r&64&&gm(a),r&512&&qr(a,a.return);break;case 3:if(da(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ip(e,n)}catch(x){ze(a,a.return,x)}}break;case 27:n===null&&r&4&&Sm(a);case 26:case 5:da(e,a),n===null&&r&4&&vm(a),r&512&&qr(a,a.return);break;case 12:da(e,a);break;case 13:da(e,a),r&4&&bm(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Lv.bind(null,a),Kv(e,a))));break;case 22:if(r=a.memoizedState!==null||Fi,!r){n=n!==null&&n.memoizedState!==null||Ke,c=Fi;var f=Ke;Fi=r,(Ke=n)&&!f?pa(e,a,(a.subtreeFlags&8772)!==0):da(e,a),Fi=c,Ke=f}break;case 30:break;default:da(e,a)}}function Em(e){var n=e.alternate;n!==null&&(e.alternate=null,Em(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ea(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,Ln=!1;function Hi(e,n,a){for(a=a.child;a!==null;)Tm(e,n,a),a=a.sibling}function Tm(e,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(lt,a)}catch{}switch(a.tag){case 26:Ke||mi(a,n),Hi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ke||mi(a,n);var r=Ve,c=Ln;Sa(a.type)&&(Ve=a.stateNode,Ln=!1),Hi(e,n,a),eo(a.stateNode),Ve=r,Ln=c;break;case 5:Ke||mi(a,n);case 6:if(r=Ve,c=Ln,Ve=null,Hi(e,n,a),Ve=r,Ln=c,Ve!==null)if(Ln)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{Ve.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:Ve!==null&&(Ln?(e=Ve,hg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),co(e)):hg(Ve,a.stateNode));break;case 4:r=Ve,c=Ln,Ve=a.stateNode.containerInfo,Ln=!0,Hi(e,n,a),Ve=r,Ln=c;break;case 0:case 11:case 14:case 15:Ke||ha(2,a,n),Ke||ha(4,a,n),Hi(e,n,a);break;case 1:Ke||(mi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&_m(a,n,r)),Hi(e,n,a);break;case 21:Hi(e,n,a);break;case 22:Ke=(r=Ke)||a.memoizedState!==null,Hi(e,n,a),Ke=r;break;default:Hi(e,n,a)}}function bm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{co(e)}catch(a){ze(n,n.return,a)}}function Tv(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Mm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Mm),n;default:throw Error(s(435,e.tag))}}function zu(e,n){var a=Tv(e);n.forEach(function(r){var c=Nv.bind(null,e,r);a.has(r)||(a.add(r),r.then(c,c))})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,x=n,E=x;t:for(;E!==null;){switch(E.tag){case 27:if(Sa(E.type)){Ve=E.stateNode,Ln=!1;break t}break;case 5:Ve=E.stateNode,Ln=!1;break t;case 3:case 4:Ve=E.stateNode.containerInfo,Ln=!0;break t}E=E.return}if(Ve===null)throw Error(s(160));Tm(f,x,c),Ve=null,Ln=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Am(n,e),n=n.sibling}var ai=null;function Am(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),r&4&&(ha(3,e,e.return),Wr(3,e),ha(5,e,e.return));break;case 1:Hn(n,e),Gn(e),r&512&&(Ke||a===null||mi(a,a.return)),r&64&&Fi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=ai;if(Hn(n,e),Gn(e),r&512&&(Ke||a===null||mi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ta]||f[nn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),xn(f,r,a),f[nn]=e,Je(f),r=f;break t;case"link":var x=Sg("link","href",c).get(r+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break e}}f=c.createElement(r),xn(f,r,a),c.head.appendChild(f);break;case"meta":if(x=Sg("meta","content",c).get(r+(a.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break e}}f=c.createElement(r),xn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[nn]=e,Je(f),r=f}e.stateNode=r}else Mg(c,e.type,e.stateNode);else e.stateNode=xg(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Mg(c,e.type,e.stateNode):xg(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Nu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),r&512&&(Ke||a===null||mi(a,a.return)),a!==null&&r&4&&Nu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),r&512&&(Ke||a===null||mi(a,a.return)),e.flags&32){c=e.stateNode;try{hi(c,"")}catch(tt){ze(e,e.return,tt)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,Nu(e,c,a!==null?a.memoizedProps:c)),r&1024&&(Bu=!0);break;case 6:if(Hn(n,e),Gn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(tt){ze(e,e.return,tt)}}break;case 3:if(Ul=null,c=ai,ai=wl(n.containerInfo),Hn(n,e),ai=c,Gn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{co(n.containerInfo)}catch(tt){ze(e,e.return,tt)}Bu&&(Bu=!1,Rm(e));break;case 4:r=ai,ai=wl(e.stateNode.containerInfo),Hn(n,e),Gn(e),ai=r;break;case 12:Hn(n,e),Gn(e);break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ku=ee()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,zu(e,r)));break;case 22:c=e.memoizedState!==null;var L=a!==null&&a.memoizedState!==null,j=Fi,ot=Ke;if(Fi=j||c,Ke=ot||L,Hn(n,e),Ke=ot,Fi=j,Gn(e),r&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||L||Fi||Ke||ts(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){L=a=n;try{if(f=L.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=L.stateNode;var dt=L.memoizedProps.style,$=dt!=null&&dt.hasOwnProperty("display")?dt.display:null;E.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(tt){ze(L,L.return,tt)}}}else if(n.tag===6){if(a===null){L=n;try{L.stateNode.nodeValue=c?"":L.memoizedProps}catch(tt){ze(L,L.return,tt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,zu(e,a))));break;case 19:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,zu(e,r)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(xm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=Ou(e);gl(e,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(hi(x,""),a.flags&=-33);var E=Ou(e);gl(e,E,x);break;case 3:case 4:var L=a.stateNode.containerInfo,j=Ou(e);Pu(e,j,L);break;default:throw Error(s(161))}}catch(ot){ze(e,e.return,ot)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Rm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Rm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function da(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ym(e,n.alternate,n),n=n.sibling}function ts(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ha(4,n,n.return),ts(n);break;case 1:mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&_m(n,n.return,a),ts(n);break;case 27:eo(n.stateNode);case 26:case 5:mi(n,n.return),ts(n);break;case 22:n.memoizedState===null&&ts(n);break;case 30:ts(n);break;default:ts(n)}e=e.sibling}}function pa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:pa(c,f,a),Wr(4,f);break;case 1:if(pa(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(j){ze(r,r.return,j)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var L=c.shared.hiddenCallbacks;if(L!==null)for(c.shared.hiddenCallbacks=null,c=0;c<L.length;c++)np(L[c],E)}catch(j){ze(r,r.return,j)}}a&&x&64&&gm(f),qr(f,f.return);break;case 27:Sm(f);case 26:case 5:pa(c,f,a),a&&r===null&&x&4&&vm(f),qr(f,f.return);break;case 12:pa(c,f,a);break;case 13:pa(c,f,a),a&&x&4&&bm(c,f);break;case 22:f.memoizedState===null&&pa(c,f,a),qr(f,f.return);break;case 30:break;default:pa(c,f,a)}n=n.sibling}}function Iu(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ur(a))}function Fu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ur(e))}function gi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Cm(e,n,a,r),n=n.sibling}function Cm(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:gi(e,n,a,r),c&2048&&Wr(9,n);break;case 1:gi(e,n,a,r);break;case 3:gi(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ur(e)));break;case 12:if(c&2048){gi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(L){ze(n,n.return,L)}}else gi(e,n,a,r);break;case 13:gi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?gi(e,n,a,r):Yr(e,n):f._visibility&2?gi(e,n,a,r):(f._visibility|=2,Ps(e,n,a,r,(n.subtreeFlags&10256)!==0)),c&2048&&Iu(x,n);break;case 24:gi(e,n,a,r),c&2048&&Fu(n.alternate,n);break;default:gi(e,n,a,r)}}function Ps(e,n,a,r,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,x=n,E=a,L=r,j=x.flags;switch(x.tag){case 0:case 11:case 15:Ps(f,x,E,L,c),Wr(8,x);break;case 23:break;case 22:var ot=x.stateNode;x.memoizedState!==null?ot._visibility&2?Ps(f,x,E,L,c):Yr(f,x):(ot._visibility|=2,Ps(f,x,E,L,c)),c&&j&2048&&Iu(x.alternate,x);break;case 24:Ps(f,x,E,L,c),c&&j&2048&&Fu(x.alternate,x);break;default:Ps(f,x,E,L,c)}n=n.sibling}}function Yr(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:Yr(a,r),c&2048&&Iu(r.alternate,r);break;case 24:Yr(a,r),c&2048&&Fu(r.alternate,r);break;default:Yr(a,r)}n=n.sibling}}var Zr=8192;function Bs(e){if(e.subtreeFlags&Zr)for(e=e.child;e!==null;)wm(e),e=e.sibling}function wm(e){switch(e.tag){case 26:Bs(e),e.flags&Zr&&e.memoizedState!==null&&cx(ai,e.memoizedState,e.memoizedProps);break;case 5:Bs(e);break;case 3:case 4:var n=ai;ai=wl(e.stateNode.containerInfo),Bs(e),ai=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Zr,Zr=16777216,Bs(e),Zr=n):Bs(e));break;default:Bs(e)}}function Dm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function jr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];hn=r,Lm(r,e)}Dm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Um(e),e=e.sibling}function Um(e){switch(e.tag){case 0:case 11:case 15:jr(e),e.flags&2048&&ha(9,e,e.return);break;case 3:jr(e);break;case 12:jr(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,_l(e)):jr(e);break;default:jr(e)}}function _l(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];hn=r,Lm(r,e)}Dm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ha(8,n,n.return),_l(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,_l(n));break;default:_l(n)}e=e.sibling}}function Lm(e,n){for(;hn!==null;){var a=hn;switch(a.tag){case 0:case 11:case 15:ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ur(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,hn=r;else t:for(a=e;hn!==null;){r=hn;var c=r.sibling,f=r.return;if(Em(r),r===a){hn=null;break t}if(c!==null){c.return=f,hn=c;break t}hn=f}}}var bv={getCacheForType:function(e){var n=yn(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Av=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Ge=null,fe=null,_e=0,Re=0,Vn=null,ma=!1,zs=!1,Hu=!1,Gi=0,Ze=0,ga=0,es=0,Gu=0,$n=0,Is=0,Kr=null,Nn=null,Vu=!1,ku=0,vl=1/0,xl=null,_a=null,vn=0,va=null,Fs=null,Hs=0,Xu=0,Wu=null,Nm=null,Qr=0,qu=null;function kn(){if((Ae&2)!==0&&_e!==0)return _e&-_e;if(O.T!==null){var e=Rs;return e!==0?e:$u()}return Se()}function Om(){$n===0&&($n=(_e&536870912)===0||be?G():536870912);var e=Jn.current;return e!==null&&(e.flags|=32),$n}function Xn(e,n,a){(e===Ge&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(Gs(e,0),xa(e,_e,$n,!1)),ht(e,a),((Ae&2)===0||e!==Ge)&&(e===Ge&&((Ae&2)===0&&(es|=a),Ze===4&&xa(e,_e,$n,!1)),_i(e))}function Pm(e,n,a){if((Ae&6)!==0)throw Error(s(327));var r=!a&&(n&124)===0&&(n&e.expiredLanes)===0||te(e,n),c=r?wv(e,n):ju(e,n,!0),f=r;do{if(c===0){zs&&!r&&xa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Rv(a)){c=ju(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var E=e;c=Kr;var L=E.current.memoizedState.isDehydrated;if(L&&(Gs(E,x).flags|=256),x=ju(E,x,!1),x!==2){if(Hu&&!L){E.errorRecoveryDisabledLanes|=f,es|=f,c=4;break t}f=Nn,Nn=c,f!==null&&(Nn===null?Nn=f:Nn.push.apply(Nn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Gs(e,0),xa(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:xa(r,n,$n,!ma);break t;case 2:Nn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=ku+300-ee(),10<c)){if(xa(r,n,$n,!ma),se(r,0,!0)!==0)break t;r.timeoutHandle=ug(Bm.bind(null,r,a,Nn,xl,Vu,n,$n,es,Is,ma,f,2,-0,0),c);break t}Bm(r,a,Nn,xl,Vu,n,$n,es,Is,ma,f,0,-0,0)}}break}while(!0);_i(e)}function Bm(e,n,a,r,c,f,x,E,L,j,ot,dt,$,tt){if(e.timeoutHandle=-1,dt=n.subtreeFlags,(dt&8192||(dt&16785408)===16785408)&&(ao={stylesheets:null,count:0,unsuspend:lx},wm(n),dt=ux(),dt!==null)){e.cancelPendingCommit=dt(km.bind(null,e,n,f,a,r,c,x,E,L,ot,1,$,tt)),xa(e,f,x,!j);return}km(e,n,f,a,r,c,x,E,L)}function Rv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!In(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function xa(e,n,a,r){n&=~Gu,n&=~es,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Bt(c),x=1<<f;r[f]=-1,c&=~x}a!==0&&Rt(e,a,n)}function Sl(){return(Ae&6)===0?(Jr(0),!1):!0}function Yu(){if(fe!==null){if(Re===0)var e=fe.return;else e=fe,Ni=ja=null,uu(e),Ns=null,Vr=0,e=fe;for(;e!==null;)mm(e.alternate,e),e=e.return;fe=null}}function Gs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Wv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Yu(),Ge=e,fe=a=Di(e.current,null),_e=n,Re=0,Vn=null,ma=!1,zs=te(e,n),Hu=!1,Is=$n=Gu=es=ga=Ze=0,Nn=Kr=null,Vu=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Bt(r),f=1<<c;n|=e[c],r&=~f}return Gi=n,Vo(),a}function zm(e,n){re=null,O.H=ol,n===Nr||n===Qo?(n=tp(),Re=3):n===Qd?(n=tp(),Re=4):Re=n===em?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Vn=n,fe===null&&(Ze=1,hl(e,Zn(n,e.current)))}function Im(){var e=O.H;return O.H=ol,e===null?ol:e}function Fm(){var e=O.A;return O.A=bv,e}function Zu(){Ze=4,ma||(_e&4194048)!==_e&&Jn.current!==null||(zs=!0),(ga&134217727)===0&&(es&134217727)===0||Ge===null||xa(Ge,_e,$n,!1)}function ju(e,n,a){var r=Ae;Ae|=2;var c=Im(),f=Fm();(Ge!==e||_e!==n)&&(xl=null,Gs(e,n)),n=!1;var x=Ze;t:do try{if(Re!==0&&fe!==null){var E=fe,L=Vn;switch(Re){case 8:Yu(),x=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var j=Re;if(Re=0,Vn=null,Vs(e,E,L,j),a&&zs){x=0;break t}break;default:j=Re,Re=0,Vn=null,Vs(e,E,L,j)}}Cv(),x=Ze;break}catch(ot){zm(e,ot)}while(!0);return n&&e.shellSuspendCounter++,Ni=ja=null,Ae=r,O.H=c,O.A=f,fe===null&&(Ge=null,_e=0,Vo()),x}function Cv(){for(;fe!==null;)Hm(fe)}function wv(e,n){var a=Ae;Ae|=2;var r=Im(),c=Fm();Ge!==e||_e!==n?(xl=null,vl=ee()+500,Gs(e,n)):zs=te(e,n);t:do try{if(Re!==0&&fe!==null){n=fe;var f=Vn;e:switch(Re){case 1:Re=0,Vn=null,Vs(e,n,f,1);break;case 2:case 9:if(Jd(f)){Re=0,Vn=null,Gm(n);break}n=function(){Re!==2&&Re!==9||Ge!==e||(Re=7),_i(e)},f.then(n,n);break t;case 3:Re=7;break t;case 4:Re=5;break t;case 7:Jd(f)?(Re=0,Vn=null,Gm(n)):(Re=0,Vn=null,Vs(e,n,f,7));break;case 5:var x=null;switch(fe.tag){case 26:x=fe.memoizedState;case 5:case 27:var E=fe;if(!x||yg(x)){Re=0,Vn=null;var L=E.sibling;if(L!==null)fe=L;else{var j=E.return;j!==null?(fe=j,Ml(j)):fe=null}break e}}Re=0,Vn=null,Vs(e,n,f,5);break;case 6:Re=0,Vn=null,Vs(e,n,f,6);break;case 8:Yu(),Ze=6;break t;default:throw Error(s(462))}}Dv();break}catch(ot){zm(e,ot)}while(!0);return Ni=ja=null,O.H=r,O.A=c,Ae=a,fe!==null?0:(Ge=null,_e=0,Vo(),Ze)}function Dv(){for(;fe!==null&&!Cn();)Hm(fe)}function Hm(e){var n=dm(e.alternate,e,Gi);e.memoizedProps=e.pendingProps,n===null?Ml(e):fe=n}function Gm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=om(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=om(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:uu(n);default:mm(a,n),n=fe=Vd(n,Gi),n=dm(a,n,Gi)}e.memoizedProps=e.pendingProps,n===null?Ml(e):fe=n}function Vs(e,n,a,r){Ni=ja=null,uu(n),Ns=null,Vr=0;var c=n.return;try{if(xv(e,c,n,a,_e)){Ze=1,hl(e,Zn(a,e.current)),fe=null;return}}catch(f){if(c!==null)throw fe=c,f;Ze=1,hl(e,Zn(a,e.current)),fe=null;return}n.flags&32768?(be||r===1?e=!0:zs||(_e&536870912)!==0?e=!1:(ma=e=!0,(r===2||r===9||r===3||r===6)&&(r=Jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Vm(n,e)):Ml(n)}function Ml(e){var n=e;do{if((n.flags&32768)!==0){Vm(n,ma);return}e=n.return;var a=Mv(n.alternate,n,Gi);if(a!==null){fe=a;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=e}while(n!==null);Ze===0&&(Ze=5)}function Vm(e,n){do{var a=yv(e.alternate,e);if(a!==null){a.flags&=32767,fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){fe=e;return}fe=e=a}while(e!==null);Ze=6,fe=null}function km(e,n,a,r,c,f,x,E,L){e.cancelPendingCommit=null;do yl();while(vn!==0);if((Ae&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Fc,Dt(e,a,f,x,E,L),e===Ge&&(fe=Ge=null,_e=0),Fs=n,va=e,Hs=a,Xu=f,Wu=c,Nm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ov(D,function(){return Zm(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,c=Q.p,Q.p=2,x=Ae,Ae|=4;try{Ev(e,n,a)}finally{Ae=x,Q.p=c,O.T=r}}vn=1,Xm(),Wm(),qm()}}function Xm(){if(vn===1){vn=0;var e=va,n=Fs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=Q.p;Q.p=2;var c=Ae;Ae|=4;try{Am(n,e);var f=lf,x=Ld(e.containerInfo),E=f.focusedElem,L=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&Ud(E.ownerDocument.documentElement,E)){if(L!==null&&Oc(E)){var j=L.start,ot=L.end;if(ot===void 0&&(ot=j),"selectionStart"in E)E.selectionStart=j,E.selectionEnd=Math.min(ot,E.value.length);else{var dt=E.ownerDocument||document,$=dt&&dt.defaultView||window;if($.getSelection){var tt=$.getSelection(),$t=E.textContent.length,Yt=Math.min(L.start,$t),Le=L.end===void 0?Yt:Math.min(L.end,$t);!tt.extend&&Yt>Le&&(x=Le,Le=Yt,Yt=x);var V=Dd(E,Yt),z=Dd(E,Le);if(V&&z&&(tt.rangeCount!==1||tt.anchorNode!==V.node||tt.anchorOffset!==V.offset||tt.focusNode!==z.node||tt.focusOffset!==z.offset)){var Y=dt.createRange();Y.setStart(V.node,V.offset),tt.removeAllRanges(),Yt>Le?(tt.addRange(Y),tt.extend(z.node,z.offset)):(Y.setEnd(z.node,z.offset),tt.addRange(Y))}}}}for(dt=[],tt=E;tt=tt.parentNode;)tt.nodeType===1&&dt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<dt.length;E++){var ut=dt[E];ut.element.scrollLeft=ut.left,ut.element.scrollTop=ut.top}}Ol=!!of,lf=of=null}finally{Ae=c,Q.p=r,O.T=a}}e.current=n,vn=2}}function Wm(){if(vn===2){vn=0;var e=va,n=Fs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=Q.p;Q.p=2;var c=Ae;Ae|=4;try{ym(e,n.alternate,n)}finally{Ae=c,Q.p=r,O.T=a}}vn=3}}function qm(){if(vn===4||vn===3){vn=0,pe();var e=va,n=Fs,a=Hs,r=Nm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,Fs=va=null,Ym(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(_a=null),Qe(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(lt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,c=Q.p,Q.p=2,O.T=null;try{for(var f=e.onRecoverableError,x=0;x<r.length;x++){var E=r[x];f(E.value,{componentStack:E.stack})}}finally{O.T=n,Q.p=c}}(Hs&3)!==0&&yl(),_i(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===qu?Qr++:(Qr=0,qu=e):Qr=0,Jr(0)}}function Ym(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ur(n)))}function yl(e){return Xm(),Wm(),qm(),Zm()}function Zm(){if(vn!==5)return!1;var e=va,n=Xu;Xu=0;var a=Qe(Hs),r=O.T,c=Q.p;try{Q.p=32>a?32:a,O.T=null,a=Wu,Wu=null;var f=va,x=Hs;if(vn=0,Fs=va=null,Hs=0,(Ae&6)!==0)throw Error(s(331));var E=Ae;if(Ae|=4,Um(f.current),Cm(f,f.current,x,a),Ae=E,Jr(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(lt,f)}catch{}return!0}finally{Q.p=c,O.T=r,Ym(e,n)}}function jm(e,n,a){n=Zn(a,n),n=Tu(e.stateNode,n,2),e=la(e,n,2),e!==null&&(ht(e,2),_i(e))}function ze(e,n,a){if(e.tag===3)jm(e,e,a);else for(;n!==null;){if(n.tag===3){jm(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_a===null||!_a.has(r))){e=Zn(a,e),a=$p(2),r=la(n,a,2),r!==null&&(tm(a,r,n,e),ht(r,2),_i(r));break}}n=n.return}}function Ku(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Av;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Hu=!0,c.add(a),e=Uv.bind(null,e,n,a),n.then(e,e))}function Uv(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ge===e&&(_e&a)===a&&(Ze===4||Ze===3&&(_e&62914560)===_e&&300>ee()-ku?(Ae&2)===0&&Gs(e,0):Gu|=a,Is===_e&&(Is=0)),_i(e)}function Km(e,n){n===0&&(n=At()),e=Es(e,n),e!==null&&(ht(e,n),_i(e))}function Lv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Km(e,a)}function Nv(e,n){var a=0;switch(e.tag){case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Km(e,a)}function Ov(e,n){return le(e,n)}var El=null,ks=null,Qu=!1,Tl=!1,Ju=!1,ns=0;function _i(e){e!==ks&&e.next===null&&(ks===null?El=ks=e:ks=ks.next=e),Tl=!0,Qu||(Qu=!0,Bv())}function Jr(e,n){if(!Ju&&Tl){Ju=!0;do for(var a=!1,r=El;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var x=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Bt(42|e)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,tg(r,f))}else f=_e,f=se(r,r===Ge?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||te(r,f)||(a=!0,tg(r,f));r=r.next}while(a);Ju=!1}}function Pv(){Qm()}function Qm(){Tl=Qu=!1;var e=0;ns!==0&&(Xv()&&(e=ns),ns=0);for(var n=ee(),a=null,r=El;r!==null;){var c=r.next,f=Jm(r,n);f===0?(r.next=null,a===null?El=c:a.next=c,c===null&&(ks=a)):(a=r,(e!==0||(f&3)!==0)&&(Tl=!0)),r=c}Jr(e)}function Jm(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Bt(f),E=1<<x,L=c[x];L===-1?((E&a)===0||(E&r)!==0)&&(c[x]=we(E,n)):L<=n&&(e.expiredLanes|=E),f&=~E}if(n=Ge,a=_e,a=se(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&B(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||te(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&B(r),Qe(a)){case 2:case 8:a=It;break;case 32:a=D;break;case 268435456:a=J;break;default:a=D}return r=$m.bind(null,e),a=le(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&B(r),e.callbackPriority=2,e.callbackNode=null,2}function $m(e,n){if(vn!==0&&vn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(yl()&&e.callbackNode!==a)return null;var r=_e;return r=se(e,e===Ge?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Pm(e,r,n),Jm(e,ee()),e.callbackNode!=null&&e.callbackNode===a?$m.bind(null,e):null)}function tg(e,n){if(yl())return null;Pm(e,n,!0)}function Bv(){qv(function(){(Ae&6)!==0?le(Ce,Pv):Qm()})}function $u(){return ns===0&&(ns=G()),ns}function eg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Po(""+e)}function ng(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function zv(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=eg((c[mn]||null).action),x=r.submitter;x&&(n=(n=x[mn]||null)?eg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new Fo("action","action",null,r,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ns!==0){var L=x?ng(c,x):new FormData(c);xu(a,{pending:!0,data:L,method:c.method,action:f},null,L)}}else typeof f=="function"&&(E.preventDefault(),L=x?ng(c,x):new FormData(c),xu(a,{pending:!0,data:L,method:c.method,action:f},f,L))},currentTarget:c}]})}}for(var tf=0;tf<Ic.length;tf++){var ef=Ic[tf],Iv=ef.toLowerCase(),Fv=ef[0].toUpperCase()+ef.slice(1);ii(Iv,"on"+Fv)}ii(Pd,"onAnimationEnd"),ii(Bd,"onAnimationIteration"),ii(zd,"onAnimationStart"),ii("dblclick","onDoubleClick"),ii("focusin","onFocus"),ii("focusout","onBlur"),ii(nv,"onTransitionRun"),ii(iv,"onTransitionStart"),ii(av,"onTransitionCancel"),ii(Id,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),Ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ai("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($r));function ig(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var E=r[x],L=E.instance,j=E.currentTarget;if(E=E.listener,L!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=j;try{f(c)}catch(ot){fl(ot)}c.currentTarget=null,f=L}else for(x=0;x<r.length;x++){if(E=r[x],L=E.instance,j=E.currentTarget,E=E.listener,L!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=j;try{f(c)}catch(ot){fl(ot)}c.currentTarget=null,f=L}}}}function he(e,n){var a=n[Ia];a===void 0&&(a=n[Ia]=new Set);var r=e+"__bubble";a.has(r)||(ag(n,e,2,!1),a.add(r))}function nf(e,n,a){var r=0;n&&(r|=4),ag(a,e,r,n)}var bl="_reactListening"+Math.random().toString(36).slice(2);function af(e){if(!e[bl]){e[bl]=!0,No.forEach(function(a){a!=="selectionchange"&&(Hv.has(a)||nf(a,!1,e),nf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[bl]||(n[bl]=!0,nf("selectionchange",!1,n))}}function ag(e,n,a,r){switch(Cg(n)){case 2:var c=dx;break;case 8:c=px;break;default:c=vf}a=c.bind(null,n,a,e),c=void 0,!bc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function sf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var E=r.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=r.return;x!==null;){var L=x.tag;if((L===3||L===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=Ti(E),x===null)return;if(L=x.tag,L===5||L===6||L===26||L===27){r=f=x;continue t}E=E.parentNode}}r=r.return}fd(function(){var j=f,ot=Ec(a),dt=[];t:{var $=Fd.get(e);if($!==void 0){var tt=Fo,$t=e;switch(e){case"keypress":if(zo(a)===0)break t;case"keydown":case"keyup":tt=O0;break;case"focusin":$t="focus",tt=wc;break;case"focusout":$t="blur",tt=wc;break;case"beforeblur":case"afterblur":tt=wc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=z0;break;case Pd:case Bd:case zd:tt=b0;break;case Id:tt=F0;break;case"scroll":case"scrollend":tt=S0;break;case"wheel":tt=G0;break;case"copy":case"cut":case"paste":tt=R0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=gd;break;case"toggle":case"beforetoggle":tt=k0}var Yt=(n&4)!==0,Le=!Yt&&(e==="scroll"||e==="scrollend"),V=Yt?$!==null?$+"Capture":null:$;Yt=[];for(var z=j,Y;z!==null;){var ut=z;if(Y=ut.stateNode,ut=ut.tag,ut!==5&&ut!==26&&ut!==27||Y===null||V===null||(ut=vr(z,V),ut!=null&&Yt.push(to(z,ut,Y))),Le)break;z=z.return}0<Yt.length&&($=new tt($,$t,null,a,ot),dt.push({event:$,listeners:Yt}))}}if((n&7)===0){t:{if($=e==="mouseover"||e==="pointerover",tt=e==="mouseout"||e==="pointerout",$&&a!==yc&&($t=a.relatedTarget||a.fromElement)&&(Ti($t)||$t[wn]))break t;if((tt||$)&&($=ot.window===ot?ot:($=ot.ownerDocument)?$.defaultView||$.parentWindow:window,tt?($t=a.relatedTarget||a.toElement,tt=j,$t=$t?Ti($t):null,$t!==null&&(Le=u($t),Yt=$t.tag,$t!==Le||Yt!==5&&Yt!==27&&Yt!==6)&&($t=null)):(tt=null,$t=j),tt!==$t)){if(Yt=pd,ut="onMouseLeave",V="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(Yt=gd,ut="onPointerLeave",V="onPointerEnter",z="pointer"),Le=tt==null?$:Ha(tt),Y=$t==null?$:Ha($t),$=new Yt(ut,z+"leave",tt,a,ot),$.target=Le,$.relatedTarget=Y,ut=null,Ti(ot)===j&&(Yt=new Yt(V,z+"enter",$t,a,ot),Yt.target=Y,Yt.relatedTarget=Le,ut=Yt),Le=ut,tt&&$t)e:{for(Yt=tt,V=$t,z=0,Y=Yt;Y;Y=Xs(Y))z++;for(Y=0,ut=V;ut;ut=Xs(ut))Y++;for(;0<z-Y;)Yt=Xs(Yt),z--;for(;0<Y-z;)V=Xs(V),Y--;for(;z--;){if(Yt===V||V!==null&&Yt===V.alternate)break e;Yt=Xs(Yt),V=Xs(V)}Yt=null}else Yt=null;tt!==null&&sg(dt,$,tt,Yt,!1),$t!==null&&Le!==null&&sg(dt,Le,$t,Yt,!0)}}t:{if($=j?Ha(j):window,tt=$.nodeName&&$.nodeName.toLowerCase(),tt==="select"||tt==="input"&&$.type==="file")var Pt=Td;else if(yd($))if(bd)Pt=$0;else{Pt=Q0;var ce=K0}else tt=$.nodeName,!tt||tt.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?j&&Mc(j.elementType)&&(Pt=Td):Pt=J0;if(Pt&&(Pt=Pt(e,j))){Ed(dt,Pt,a,ot);break t}ce&&ce(e,$,j),e==="focusout"&&j&&$.type==="number"&&j.memoizedProps.value!=null&&Mn($,"number",$.value)}switch(ce=j?Ha(j):window,e){case"focusin":(yd(ce)||ce.contentEditable==="true")&&(Ss=ce,Pc=j,Ar=null);break;case"focusout":Ar=Pc=Ss=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,Nd(dt,a,ot);break;case"selectionchange":if(ev)break;case"keydown":case"keyup":Nd(dt,a,ot)}var Ft;if(Uc)t:{switch(e){case"compositionstart":var Kt="onCompositionStart";break t;case"compositionend":Kt="onCompositionEnd";break t;case"compositionupdate":Kt="onCompositionUpdate";break t}Kt=void 0}else xs?Sd(e,a)&&(Kt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Kt="onCompositionStart");Kt&&(_d&&a.locale!=="ko"&&(xs||Kt!=="onCompositionStart"?Kt==="onCompositionEnd"&&xs&&(Ft=hd()):(aa=ot,Ac="value"in aa?aa.value:aa.textContent,xs=!0)),ce=Al(j,Kt),0<ce.length&&(Kt=new md(Kt,e,null,a,ot),dt.push({event:Kt,listeners:ce}),Ft?Kt.data=Ft:(Ft=Md(a),Ft!==null&&(Kt.data=Ft)))),(Ft=W0?q0(e,a):Y0(e,a))&&(Kt=Al(j,"onBeforeInput"),0<Kt.length&&(ce=new md("onBeforeInput","beforeinput",null,a,ot),dt.push({event:ce,listeners:Kt}),ce.data=Ft)),zv(dt,e,j,a,ot)}ig(dt,n)})}function to(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Al(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=vr(e,a),c!=null&&r.unshift(to(e,c,f)),c=vr(e,n),c!=null&&r.push(to(e,c,f))),e.tag===3)return r;e=e.return}return[]}function Xs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sg(e,n,a,r,c){for(var f=n._reactName,x=[];a!==null&&a!==r;){var E=a,L=E.alternate,j=E.stateNode;if(E=E.tag,L!==null&&L===r)break;E!==5&&E!==26&&E!==27||j===null||(L=j,c?(j=vr(a,f),j!=null&&x.unshift(to(a,j,L))):c||(j=vr(a,f),j!=null&&x.push(to(a,j,L)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var Gv=/\r\n?/g,Vv=/\u0000|\uFFFD/g;function rg(e){return(typeof e=="string"?e:""+e).replace(Gv,`
`).replace(Vv,"")}function og(e,n){return n=rg(n),rg(e)===n}function Rl(){}function Ue(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||hi(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&hi(e,""+r);break;case"className":yt(e,"class",r);break;case"tabIndex":yt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":yt(e,a,r);break;case"style":cd(e,r,f);break;case"data":if(n!=="object"){yt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Po(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ue(e,n,"name",c.name,c,null),Ue(e,n,"formEncType",c.formEncType,c,null),Ue(e,n,"formMethod",c.formMethod,c,null),Ue(e,n,"formTarget",c.formTarget,c,null)):(Ue(e,n,"encType",c.encType,c,null),Ue(e,n,"method",c.method,c,null),Ue(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Po(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Rl);break;case"onScroll":r!=null&&he("scroll",e);break;case"onScrollEnd":r!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Po(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":he("beforetoggle",e),he("toggle",e),_t(e,"popover",r);break;case"xlinkActuate":Tt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Tt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Tt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Tt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Tt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Tt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":_t(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=v0.get(a)||a,_t(e,a,r))}}function rf(e,n,a,r,c,f){switch(a){case"style":cd(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?hi(e,r):(typeof r=="number"||typeof r=="bigint")&&hi(e,""+r);break;case"onScroll":r!=null&&he("scroll",e);break;case"onScrollEnd":r!=null&&he("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Rl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):_t(e,a,r)}}}function xn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ue(e,n,f,x,a,null)}}c&&Ue(e,n,"srcSet",a.srcSet,a,null),r&&Ue(e,n,"src",a.src,a,null);return;case"input":he("invalid",e);var E=f=x=c=null,L=null,j=null;for(r in a)if(a.hasOwnProperty(r)){var ot=a[r];if(ot!=null)switch(r){case"name":c=ot;break;case"type":x=ot;break;case"checked":L=ot;break;case"defaultChecked":j=ot;break;case"value":f=ot;break;case"defaultValue":E=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Ue(e,n,r,ot,a,null)}}Be(e,f,E,L,j,x,c,!1),qe(e);return;case"select":he("invalid",e),r=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":r=E;default:Ue(e,n,c,E,a,null)}n=f,a=x,e.multiple=!!r,n!=null?an(e,!!r,n,!1):a!=null&&an(e,!!r,a,!0);return;case"textarea":he("invalid",e),f=c=r=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Ue(e,n,x,E,a,null)}gn(e,r,c,f),qe(e);return;case"option":for(L in a)if(a.hasOwnProperty(L)&&(r=a[L],r!=null))switch(L){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ue(e,n,L,r,a,null)}return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(r=0;r<$r.length;r++)he($r[r],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(r=a[j],r!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ue(e,n,j,r,a,null)}return;default:if(Mc(n)){for(ot in a)a.hasOwnProperty(ot)&&(r=a[ot],r!==void 0&&rf(e,n,ot,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Ue(e,n,E,r,a,null))}function kv(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,L=null,j=null,ot=null;for(tt in a){var dt=a[tt];if(a.hasOwnProperty(tt)&&dt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":L=dt;default:r.hasOwnProperty(tt)||Ue(e,n,tt,null,r,dt)}}for(var $ in r){var tt=r[$];if(dt=a[$],r.hasOwnProperty($)&&(tt!=null||dt!=null))switch($){case"type":f=tt;break;case"name":c=tt;break;case"checked":j=tt;break;case"defaultChecked":ot=tt;break;case"value":x=tt;break;case"defaultValue":E=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:tt!==dt&&Ue(e,n,$,tt,r,dt)}}Ri(e,x,E,L,j,ot,f,c);return;case"select":tt=x=E=$=null;for(f in a)if(L=a[f],a.hasOwnProperty(f)&&L!=null)switch(f){case"value":break;case"multiple":tt=L;default:r.hasOwnProperty(f)||Ue(e,n,f,null,r,L)}for(c in r)if(f=r[c],L=a[c],r.hasOwnProperty(c)&&(f!=null||L!=null))switch(c){case"value":$=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==L&&Ue(e,n,c,f,r,L)}n=E,a=x,r=tt,$!=null?an(e,!!a,$,!1):!!r!=!!a&&(n!=null?an(e,!!a,n,!0):an(e,!!a,a?[]:"",!1));return;case"textarea":tt=$=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ue(e,n,E,null,r,c)}for(x in r)if(c=r[x],f=a[x],r.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":$=c;break;case"defaultValue":tt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ue(e,n,x,c,r,f)}un(e,$,tt);return;case"option":for(var $t in a)if($=a[$t],a.hasOwnProperty($t)&&$!=null&&!r.hasOwnProperty($t))switch($t){case"selected":e.selected=!1;break;default:Ue(e,n,$t,null,r,$)}for(L in r)if($=r[L],tt=a[L],r.hasOwnProperty(L)&&$!==tt&&($!=null||tt!=null))switch(L){case"selected":e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Ue(e,n,L,$,r,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in a)$=a[Yt],a.hasOwnProperty(Yt)&&$!=null&&!r.hasOwnProperty(Yt)&&Ue(e,n,Yt,null,r,$);for(j in r)if($=r[j],tt=a[j],r.hasOwnProperty(j)&&$!==tt&&($!=null||tt!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:Ue(e,n,j,$,r,tt)}return;default:if(Mc(n)){for(var Le in a)$=a[Le],a.hasOwnProperty(Le)&&$!==void 0&&!r.hasOwnProperty(Le)&&rf(e,n,Le,void 0,r,$);for(ot in r)$=r[ot],tt=a[ot],!r.hasOwnProperty(ot)||$===tt||$===void 0&&tt===void 0||rf(e,n,ot,$,r,tt);return}}for(var V in a)$=a[V],a.hasOwnProperty(V)&&$!=null&&!r.hasOwnProperty(V)&&Ue(e,n,V,null,r,$);for(dt in r)$=r[dt],tt=a[dt],!r.hasOwnProperty(dt)||$===tt||$==null&&tt==null||Ue(e,n,dt,$,r,tt)}var of=null,lf=null;function Cl(e){return e.nodeType===9?e:e.ownerDocument}function lg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function cf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var uf=null;function Xv(){var e=window.event;return e&&e.type==="popstate"?e===uf?!1:(uf=e,!0):(uf=null,!1)}var ug=typeof setTimeout=="function"?setTimeout:void 0,Wv=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,qv=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(e){return fg.resolve(null).then(e).catch(Yv)}:ug;function Yv(e){setTimeout(function(){throw e})}function Sa(e){return e==="head"}function hg(e,n){var a=n,r=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<r&&8>r){a=r;var x=e.ownerDocument;if(a&1&&eo(x.documentElement),a&2&&eo(x.body),a&4)for(a=x.head,eo(a),x=a.firstChild;x;){var E=x.nextSibling,L=x.nodeName;x[ta]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=E}}if(c===0){e.removeChild(f),co(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:r=a.charCodeAt(0)-48;else r=0;a=f}while(a);co(n)}function ff(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ff(a),ea(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Zv(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ta])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=si(e.nextSibling),e===null)break}return null}function jv(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=si(e.nextSibling),e===null))return null;return e}function hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Kv(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var df=null;function dg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function pg(e,n,a){switch(n=Cl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function eo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ea(e)}var ti=new Map,mg=new Set;function wl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Vi=Q.d;Q.d={f:Qv,r:Jv,D:$v,C:tx,L:ex,m:nx,X:ax,S:ix,M:sx};function Qv(){var e=Vi.f(),n=Sl();return e||n}function Jv(e){var n=bi(e);n!==null&&n.tag===5&&n.type==="form"?Pp(n):Vi.r(e)}var Ws=typeof document>"u"?null:document;function gg(e,n,a){var r=Ws;if(r&&typeof n=="string"&&n){var c=He(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),mg.has(c)||(mg.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),xn(n,"link",e),Je(n),r.head.appendChild(n)))}}function $v(e){Vi.D(e),gg("dns-prefetch",e,null)}function tx(e,n){Vi.C(e,n),gg("preconnect",e,n)}function ex(e,n,a){Vi.L(e,n,a);var r=Ws;if(r&&e&&n){var c='link[rel="preload"][as="'+He(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+He(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+He(a.imageSizes)+'"]')):c+='[href="'+He(e)+'"]';var f=c;switch(n){case"style":f=qs(e);break;case"script":f=Ys(e)}ti.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ti.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(no(f))||n==="script"&&r.querySelector(io(f))||(n=r.createElement("link"),xn(n,"link",e),Je(n),r.head.appendChild(n)))}}function nx(e,n){Vi.m(e,n);var a=Ws;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+He(r)+'"][href="'+He(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ys(e)}if(!ti.has(f)&&(e=g({rel:"modulepreload",href:e},n),ti.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(io(f)))return}r=a.createElement("link"),xn(r,"link",e),Je(r),a.head.appendChild(r)}}}function ix(e,n,a){Vi.S(e,n,a);var r=Ws;if(r&&e){var c=na(r).hoistableStyles,f=qs(e);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=r.querySelector(no(f)))E.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ti.get(f))&&pf(e,a);var L=x=r.createElement("link");Je(L),xn(L,"link",e),L._p=new Promise(function(j,ot){L.onload=j,L.onerror=ot}),L.addEventListener("load",function(){E.loading|=1}),L.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Dl(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function ax(e,n){Vi.X(e,n);var a=Ws;if(a&&e){var r=na(a).hoistableScripts,c=Ys(e),f=r.get(c);f||(f=a.querySelector(io(c)),f||(e=g({src:e,async:!0},n),(n=ti.get(c))&&mf(e,n),f=a.createElement("script"),Je(f),xn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function sx(e,n){Vi.M(e,n);var a=Ws;if(a&&e){var r=na(a).hoistableScripts,c=Ys(e),f=r.get(c);f||(f=a.querySelector(io(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ti.get(c))&&mf(e,n),f=a.createElement("script"),Je(f),xn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function _g(e,n,a,r){var c=(c=Lt.current)?wl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=qs(a.href),a=na(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=qs(a.href);var f=na(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(no(e)))&&!f._p&&(x.instance=f,x.state.loading=5),ti.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ti.set(e,a),f||rx(c,e,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ys(a),a=na(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function qs(e){return'href="'+He(e)+'"'}function no(e){return'link[rel="stylesheet"]['+e+"]"}function vg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function rx(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),xn(n,"link",a),Je(n),e.head.appendChild(n))}function Ys(e){return'[src="'+He(e)+'"]'}function io(e){return"script[async]"+e}function xg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+He(a.href)+'"]');if(r)return n.instance=r,Je(r),r;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Je(r),xn(r,"style",c),Dl(r,a.precedence,e),n.instance=r;case"stylesheet":c=qs(a.href);var f=e.querySelector(no(c));if(f)return n.state.loading|=4,n.instance=f,Je(f),f;r=vg(a),(c=ti.get(c))&&pf(r,c),f=(e.ownerDocument||e).createElement("link"),Je(f);var x=f;return x._p=new Promise(function(E,L){x.onload=E,x.onerror=L}),xn(f,"link",r),n.state.loading|=4,Dl(f,a.precedence,e),n.instance=f;case"script":return f=Ys(a.src),(c=e.querySelector(io(f)))?(n.instance=c,Je(c),c):(r=a,(c=ti.get(f))&&(r=g({},a),mf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),Je(c),xn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Dl(r,a.precedence,e));return n.instance}function Dl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,x=0;x<r.length;x++){var E=r[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function pf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function mf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ul=null;function Sg(e,n,a){if(Ul===null){var r=new Map,c=Ul=new Map;c.set(a,r)}else c=Ul,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ta]||f[nn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var E=r.get(x);E?E.push(f):r.set(x,[f])}}return r}function Mg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ox(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function yg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ao=null;function lx(){}function cx(e,n,a){if(ao===null)throw Error(s(475));var r=ao;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=qs(a.href),f=e.querySelector(no(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=Ll.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=f,Je(f);return}f=e.ownerDocument||e,a=vg(a),(c=ti.get(c))&&pf(a,c),f=f.createElement("link"),Je(f);var x=f;x._p=new Promise(function(E,L){x.onload=E,x.onerror=L}),xn(f,"link",a),n.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(r.count++,n=Ll.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function ux(){if(ao===null)throw Error(s(475));var e=ao;return e.stylesheets&&e.count===0&&gf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&gf(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ll(){if(this.count--,this.count===0){if(this.stylesheets)gf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Nl=null;function gf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Nl=new Map,n.forEach(fx,e),Nl=null,Ll.call(e))}function fx(e,n){if(!(n.state.loading&4)){var a=Nl.get(e);if(a)var r=a.get(null);else{a=new Map,Nl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,c),a.set(x,c),this.count++,r=Ll.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var so={$$typeof:N,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function hx(e,n,a,r,c,f,x,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=st(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=st(0),this.hiddenUpdates=st(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Eg(e,n,a,r,c,f,x,E,L,j,ot,dt){return e=new hx(e,n,a,x,E,L,j,dt),n=1,f===!0&&(n|=24),f=Fn(3,null,null,n),e.current=f,f.stateNode=e,n=Kc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},tu(f),e}function Tg(e){return e?(e=Ts,e):Ts}function bg(e,n,a,r,c,f){c=Tg(c),r.context===null?r.context=c:r.pendingContext=c,r=oa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=la(e,r,n),a!==null&&(Xn(a,e,n),Pr(a,e,n))}function Ag(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function _f(e,n){Ag(e,n),(e=e.alternate)&&Ag(e,n)}function Rg(e){if(e.tag===13){var n=Es(e,67108864);n!==null&&Xn(n,e,67108864),_f(e,67108864)}}var Ol=!0;function dx(e,n,a,r){var c=O.T;O.T=null;var f=Q.p;try{Q.p=2,vf(e,n,a,r)}finally{Q.p=f,O.T=c}}function px(e,n,a,r){var c=O.T;O.T=null;var f=Q.p;try{Q.p=8,vf(e,n,a,r)}finally{Q.p=f,O.T=c}}function vf(e,n,a,r){if(Ol){var c=xf(r);if(c===null)sf(e,n,r,Pl,a),wg(e,r);else if(gx(c,e,n,a,r))r.stopPropagation();else if(wg(e,r),n&4&&-1<mx.indexOf(e)){for(;c!==null;){var f=bi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=wt(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var L=1<<31-Bt(x);E.entanglements[1]|=L,x&=~L}_i(f),(Ae&6)===0&&(vl=ee()+500,Jr(0))}}break;case 13:E=Es(f,2),E!==null&&Xn(E,f,2),Sl(),_f(f,2)}if(f=xf(r),f===null&&sf(e,n,r,Pl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else sf(e,n,r,null,a)}}function xf(e){return e=Ec(e),Sf(e)}var Pl=null;function Sf(e){if(Pl=null,e=Ti(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Pl=e,null}function Cg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case Ce:return 2;case It:return 8;case D:case T:return 32;case J:return 268435456;default:return 32}default:return 32}}var Mf=!1,Ma=null,ya=null,Ea=null,ro=new Map,oo=new Map,Ta=[],mx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wg(e,n){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(n.pointerId)}}function lo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=bi(n),n!==null&&Rg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function gx(e,n,a,r,c){switch(n){case"focusin":return Ma=lo(Ma,e,n,a,r,c),!0;case"dragenter":return ya=lo(ya,e,n,a,r,c),!0;case"mouseover":return Ea=lo(Ea,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return ro.set(f,lo(ro.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,oo.set(f,lo(oo.get(f)||null,e,n,a,r,c)),!0}return!1}function Dg(e){var n=Ti(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,zn(e.priority,function(){if(a.tag===13){var r=kn();r=Fe(r);var c=Es(a,r);c!==null&&Xn(c,a,r),_f(a,r)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=xf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);yc=r,a.target.dispatchEvent(r),yc=null}else return n=bi(a),n!==null&&Rg(n),e.blockedOn=a,!1;n.shift()}return!0}function Ug(e,n,a){Bl(e)&&a.delete(n)}function _x(){Mf=!1,Ma!==null&&Bl(Ma)&&(Ma=null),ya!==null&&Bl(ya)&&(ya=null),Ea!==null&&Bl(Ea)&&(Ea=null),ro.forEach(Ug),oo.forEach(Ug)}function zl(e,n){e.blockedOn===n&&(e.blockedOn=null,Mf||(Mf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,_x)))}var Il=null;function Lg(e){Il!==e&&(Il=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Il===e&&(Il=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Sf(r||a)===null)continue;break}var f=bi(a);f!==null&&(e.splice(n,3),n-=3,xu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function co(e){function n(L){return zl(L,e)}Ma!==null&&zl(Ma,e),ya!==null&&zl(ya,e),Ea!==null&&zl(Ea,e),ro.forEach(n),oo.forEach(n);for(var a=0;a<Ta.length;a++){var r=Ta[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)Dg(a),a.blockedOn===null&&Ta.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],x=c[mn]||null;if(typeof f=="function")x||Lg(a);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[mn]||null)E=x.formAction;else if(Sf(c)!==null)continue}else E=x.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),Lg(a)}}}function yf(e){this._internalRoot=e}Fl.prototype.render=yf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=kn();bg(a,r,e,n,null,null)},Fl.prototype.unmount=yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;bg(e.current,2,null,e,null,null),Sl(),n[wn]=null}};function Fl(e){this._internalRoot=e}Fl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Se();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ta.length&&n!==0&&n<Ta[a].priority;a++);Ta.splice(a,0,e),a===0&&Dg(e)}};var Ng=t.version;if(Ng!=="19.1.0")throw Error(s(527,Ng,"19.1.0"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var vx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{lt=Hl.inject(vx),Ct=Hl}catch{}}return fo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=jp,f=Kp,x=Qp,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=Eg(e,1,!1,null,null,a,r,c,f,x,E,null),e[wn]=n.current,af(e),new yf(n)},fo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=jp,x=Kp,E=Qp,L=null,j=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(L=a.unstable_transitionCallbacks),a.formState!==void 0&&(j=a.formState)),n=Eg(e,1,!0,n,a??null,r,c,f,x,E,L,j),n.context=Tg(null),a=n.current,r=kn(),r=Fe(r),c=oa(r),c.callback=null,la(a,c,r),a=r,n.current.lanes=a,ht(n,a),_i(n),e[wn]=n.current,af(e),new Fl(n)},fo.version="19.1.0",fo}var Fg;function Rx(){if(Fg)return Tf.exports;Fg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Tf.exports=Ax(),Tf.exports}var Fb=Rx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="176",Cx=0,Hg=1,wx=2,G_=1,Dx=2,Zi=3,Pa=0,Pn=1,ji=2,Na=0,cr=1,Gg=2,Vg=3,kg=4,Ux=5,fs=100,Lx=101,Nx=102,Ox=103,Px=104,Bx=200,zx=201,Ix=202,Fx=203,sh=204,rh=205,Hx=206,Gx=207,Vx=208,kx=209,Xx=210,Wx=211,qx=212,Yx=213,Zx=214,oh=0,lh=1,ch=2,fr=3,uh=4,fh=5,hh=6,dh=7,V_=0,jx=1,Kx=2,Oa=0,Qx=1,Jx=2,$x=3,tS=4,eS=5,nS=6,iS=7,k_=300,hr=301,dr=302,ph=303,mh=304,vc=306,gh=1e3,ds=1001,_h=1002,fi=1003,aS=1004,Gl=1005,xi=1006,Rf=1007,ps=1008,yi=1009,X_=1010,W_=1011,So=1012,Zh=1013,ms=1014,Ki=1015,bo=1016,jh=1017,Kh=1018,Mo=1020,q_=35902,Y_=1021,Z_=1022,ui=1023,yo=1026,Eo=1027,j_=1028,Qh=1029,K_=1030,Jh=1031,$h=1033,cc=33776,uc=33777,fc=33778,hc=33779,vh=35840,xh=35841,Sh=35842,Mh=35843,yh=36196,Eh=37492,Th=37496,bh=37808,Ah=37809,Rh=37810,Ch=37811,wh=37812,Dh=37813,Uh=37814,Lh=37815,Nh=37816,Oh=37817,Ph=37818,Bh=37819,zh=37820,Ih=37821,dc=36492,Fh=36494,Hh=36495,Q_=36283,Gh=36284,Vh=36285,kh=36286,sS=3200,rS=3201,J_=0,oS=1,La="",Yn="srgb",pr="srgb-linear",gc="linear",Ne="srgb",Zs=7680,Xg=519,lS=512,cS=513,uS=514,$_=515,fS=516,hS=517,dS=518,pS=519,Wg=35044,qg="300 es",Qi=2e3,_c=2001;class gr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cf=Math.PI/180,Xh=180/Math.PI;function Ao(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[i&63|128]+En[i>>8&255]+"-"+En[i>>16&255]+En[i>>24&255]+En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]).toLowerCase()}function de(o,t,i){return Math.max(t,Math.min(i,o))}function mS(o,t){return(o%t+t)%t}function wf(o,t,i){return(1-i)*o+i*t}function ho(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function On(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Te{constructor(t=0,i=0){Te.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(de(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,i,s,l,u,h,d,p,m){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,m)}set(t,i,s,l,u,h,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=s,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],g=s[4],v=s[7],S=s[2],y=s[5],A=s[8],C=l[0],M=l[3],_=l[6],P=l[1],N=l[4],U=l[7],Z=l[2],I=l[5],F=l[8];return u[0]=h*C+d*P+p*Z,u[3]=h*M+d*N+p*I,u[6]=h*_+d*U+p*F,u[1]=m*C+g*P+v*Z,u[4]=m*M+g*N+v*I,u[7]=m*_+g*U+v*F,u[2]=S*C+y*P+A*Z,u[5]=S*M+y*N+A*I,u[8]=S*_+y*U+A*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return i*h*g-i*d*m-s*u*g+s*d*p+l*u*m-l*h*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8],v=g*h-d*m,S=d*p-g*u,y=m*u-h*p,A=i*v+s*S+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=v*C,t[1]=(l*m-g*s)*C,t[2]=(d*s-l*h)*C,t[3]=S*C,t[4]=(g*i-l*p)*C,t[5]=(l*u-d*i)*C,t[6]=y*C,t[7]=(s*p-m*i)*C,t[8]=(h*i-s*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Df.makeScale(t,i)),this}rotate(t){return this.premultiply(Df.makeRotation(-t)),this}translate(t,i){return this.premultiply(Df.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Df=new ie;function t0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function To(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function gS(){const o=To("canvas");return o.style.display="block",o}const Yg={};function pc(o){o in Yg||(Yg[o]=!0,console.warn(o))}function _S(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function vS(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xS(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zg=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jg=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SS(){const o={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ne&&(l.r=$i(l.r),l.g=$i(l.g),l.b=$i(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ne&&(l.r=ur(l.r),l.g=ur(l.g),l.b=ur(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===La?gc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[pr]:{primaries:t,whitePoint:s,transfer:gc,toXYZ:Zg,fromXYZ:jg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:s,transfer:Ne,toXYZ:Zg,fromXYZ:jg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),o}const Ee=SS();function $i(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ur(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let js;class MS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{js===void 0&&(js=To("canvas")),js.width=t.width,js.height=t.height;const l=js.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=js}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=To("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=$i(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor($i(i[s]/255)*255):i[s]=$i(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yS=0;class td{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Ao(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Uf(l[h].image)):u.push(Uf(l[h]))}else u=Uf(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Uf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?MS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ES=0;class Bn extends gr{constructor(t=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=ds,l=ds,u=xi,h=ps,d=ui,p=yi,m=Bn.DEFAULT_ANISOTROPY,g=La){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Ao(),this.name="",this.source=new td(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==k_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gh:t.x=t.x-Math.floor(t.x);break;case ds:t.x=t.x<0?0:1;break;case _h:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gh:t.y=t.y-Math.floor(t.y);break;case ds:t.y=t.y<0?0:1;break;case _h:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=k_;Bn.DEFAULT_ANISOTROPY=1;class Oe{constructor(t=0,i=0,s=0,l=1){Oe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const p=t.elements,m=p[0],g=p[4],v=p[8],S=p[1],y=p[5],A=p[9],C=p[2],M=p[6],_=p[10];if(Math.abs(g-S)<.01&&Math.abs(v-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(g+S)<.1&&Math.abs(v+C)<.1&&Math.abs(A+M)<.1&&Math.abs(m+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,U=(y+1)/2,Z=(_+1)/2,I=(g+S)/4,F=(v+C)/4,q=(A+M)/4;return N>U&&N>Z?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=I/s,u=F/s):U>Z?U<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),s=I/l,u=q/l):Z<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(Z),s=F/u,l=q/u),this.set(s,l,u,i),this}let P=Math.sqrt((M-A)*(M-A)+(v-C)*(v-C)+(S-g)*(S-g));return Math.abs(P)<.001&&(P=1),this.x=(M-A)/P,this.y=(v-C)/P,this.z=(S-g)/P,this.w=Math.acos((m+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this.z=de(this.z,t.z,i.z),this.w=de(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this.z=de(this.z,t,i),this.w=de(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TS extends gr{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth?s.depth:1,this.scissor=new Oe(0,0,t,i),this.scissorTest=!1,this.viewport=new Oe(0,0,t,i);const l={width:t,height:i,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const u=new Bn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new td(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends TS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class e0 extends Bn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=fi,this.minFilter=fi,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bS extends Bn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=fi,this.minFilter=fi,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ro{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let p=s[l+0],m=s[l+1],g=s[l+2],v=s[l+3];const S=u[h+0],y=u[h+1],A=u[h+2],C=u[h+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=S,t[i+1]=y,t[i+2]=A,t[i+3]=C;return}if(v!==C||p!==S||m!==y||g!==A){let M=1-d;const _=p*S+m*y+g*A+v*C,P=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const Z=Math.sqrt(N),I=Math.atan2(Z,_*P);M=Math.sin(M*I)/Z,d=Math.sin(d*I)/Z}const U=d*P;if(p=p*M+S*U,m=m*M+y*U,g=g*M+A*U,v=v*M+C*U,M===1-d){const Z=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=Z,m*=Z,g*=Z,v*=Z}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],p=s[l+1],m=s[l+2],g=s[l+3],v=u[h],S=u[h+1],y=u[h+2],A=u[h+3];return t[i]=d*A+g*v+p*y-m*S,t[i+1]=p*A+g*S+m*v-d*y,t[i+2]=m*A+g*y+d*S-p*v,t[i+3]=g*A-d*v-p*S-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(s/2),g=d(l/2),v=d(u/2),S=p(s/2),y=p(l/2),A=p(u/2);switch(h){case"XYZ":this._x=S*g*v+m*y*A,this._y=m*y*v-S*g*A,this._z=m*g*A+S*y*v,this._w=m*g*v-S*y*A;break;case"YXZ":this._x=S*g*v+m*y*A,this._y=m*y*v-S*g*A,this._z=m*g*A-S*y*v,this._w=m*g*v+S*y*A;break;case"ZXY":this._x=S*g*v-m*y*A,this._y=m*y*v+S*g*A,this._z=m*g*A+S*y*v,this._w=m*g*v-S*y*A;break;case"ZYX":this._x=S*g*v-m*y*A,this._y=m*y*v+S*g*A,this._z=m*g*A-S*y*v,this._w=m*g*v+S*y*A;break;case"YZX":this._x=S*g*v+m*y*A,this._y=m*y*v+S*g*A,this._z=m*g*A-S*y*v,this._w=m*g*v-S*y*A;break;case"XZY":this._x=S*g*v-m*y*A,this._y=m*y*v-S*g*A,this._z=m*g*A+S*y*v,this._w=m*g*v+S*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],v=i[10],S=s+d+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-p)*y,this._y=(u-m)*y,this._z=(h-l)*y}else if(s>d&&s>v){const y=2*Math.sqrt(1+s-d-v);this._w=(g-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+m)/y}else if(d>v){const y=2*Math.sqrt(1+d-s-v);this._w=(u-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+v-s-d);this._w=(h-l)/y,this._x=(u+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=s*g+h*d+l*m-u*p,this._y=l*g+h*p+u*d-s*m,this._z=u*g+h*m+s*p-l*d,this._w=h*g-s*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),v=Math.sin((1-i)*g)/m,S=Math.sin(i*g)/m;return this._w=h*v+this._w*S,this._x=s*v+this._x*S,this._y=l*v+this._y*S,this._z=u*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,s=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Kg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Kg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*s),g=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+p*m+h*v-d*g,this.y=s+p*g+d*m-u*v,this.z=l+p*v+u*g-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this.z=de(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this.z=de(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-s*p,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Lf.copy(this).projectOnVector(t),this.sub(Lf)}reflect(t){return this.sub(Lf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(de(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lf=new K,Kg=new Ro;class Co{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(ri.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(ri.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=ri.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,ri):ri.fromBufferAttribute(u,h),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vl.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Vl.copy(s.boundingBox)),Vl.applyMatrix4(t.matrixWorld),this.union(Vl)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(po),kl.subVectors(this.max,po),Ks.subVectors(t.a,po),Qs.subVectors(t.b,po),Js.subVectors(t.c,po),Aa.subVectors(Qs,Ks),Ra.subVectors(Js,Qs),is.subVectors(Ks,Js);let i=[0,-Aa.z,Aa.y,0,-Ra.z,Ra.y,0,-is.z,is.y,Aa.z,0,-Aa.x,Ra.z,0,-Ra.x,is.z,0,-is.x,-Aa.y,Aa.x,0,-Ra.y,Ra.x,0,-is.y,is.x,0];return!Nf(i,Ks,Qs,Js,kl)||(i=[1,0,0,0,1,0,0,0,1],!Nf(i,Ks,Qs,Js,kl))?!1:(Xl.crossVectors(Aa,Ra),i=[Xl.x,Xl.y,Xl.z],Nf(i,Ks,Qs,Js,kl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ki=[new K,new K,new K,new K,new K,new K,new K,new K],ri=new K,Vl=new Co,Ks=new K,Qs=new K,Js=new K,Aa=new K,Ra=new K,is=new K,po=new K,kl=new K,Xl=new K,as=new K;function Nf(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){as.fromArray(o,u);const d=l.x*Math.abs(as.x)+l.y*Math.abs(as.y)+l.z*Math.abs(as.z),p=t.dot(as),m=i.dot(as),g=s.dot(as);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const AS=new Co,mo=new K,Of=new K;class ed{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):AS.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mo.subVectors(t,this.center);const i=mo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(mo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Of.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mo.copy(t.center).add(Of)),this.expandByPoint(mo.copy(t.center).sub(Of))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xi=new K,Pf=new K,Wl=new K,Ca=new K,Bf=new K,ql=new K,zf=new K;class n0{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Xi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,i),Xi.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Pf.copy(t).add(i).multiplyScalar(.5),Wl.copy(i).sub(t).normalize(),Ca.copy(this.origin).sub(Pf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Wl),d=Ca.dot(this.direction),p=-Ca.dot(Wl),m=Ca.lengthSq(),g=Math.abs(1-h*h);let v,S,y,A;if(g>0)if(v=h*p-d,S=h*d-p,A=u*g,v>=0)if(S>=-A)if(S<=A){const C=1/g;v*=C,S*=C,y=v*(v+h*S+2*d)+S*(h*v+S+2*p)+m}else S=u,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*p)+m;else S=-u,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*p)+m;else S<=-A?(v=Math.max(0,-(-h*u+d)),S=v>0?-u:Math.min(Math.max(-u,-p),u),y=-v*v+S*(S+2*p)+m):S<=A?(v=0,S=Math.min(Math.max(-u,-p),u),y=S*(S+2*p)+m):(v=Math.max(0,-(h*u+d)),S=v>0?u:Math.min(Math.max(-u,-p),u),y=-v*v+S*(S+2*p)+m);else S=h>0?-u:u,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Pf).addScaledVector(Wl,S),y}intersectSphere(t,i){Xi.subVectors(t.center,this.origin);const s=Xi.dot(this.direction),l=Xi.dot(Xi)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,S=this.origin;return m>=0?(s=(t.min.x-S.x)*m,l=(t.max.x-S.x)*m):(s=(t.max.x-S.x)*m,l=(t.min.x-S.x)*m),g>=0?(u=(t.min.y-S.y)*g,h=(t.max.y-S.y)*g):(u=(t.max.y-S.y)*g,h=(t.min.y-S.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-S.z)*v,p=(t.max.z-S.z)*v):(d=(t.max.z-S.z)*v,p=(t.min.z-S.z)*v),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,i,s,l,u){Bf.subVectors(i,t),ql.subVectors(s,t),zf.crossVectors(Bf,ql);let h=this.direction.dot(zf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ca.subVectors(this.origin,t);const p=d*this.direction.dot(ql.crossVectors(Ca,ql));if(p<0)return null;const m=d*this.direction.dot(Bf.cross(Ca));if(m<0||p+m>h)return null;const g=-d*Ca.dot(zf);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(t,i,s,l,u,h,d,p,m,g,v,S,y,A,C,M){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,m,g,v,S,y,A,C,M)}set(t,i,s,l,u,h,d,p,m,g,v,S,y,A,C,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=S,_[3]=y,_[7]=A,_[11]=C,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/$s.setFromMatrixColumn(t,0).length(),u=1/$s.setFromMatrixColumn(t,1).length(),h=1/$s.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const S=h*g,y=h*v,A=d*g,C=d*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=y+A*m,i[5]=S-C*m,i[9]=-d*p,i[2]=C-S*m,i[6]=A+y*m,i[10]=h*p}else if(t.order==="YXZ"){const S=p*g,y=p*v,A=m*g,C=m*v;i[0]=S+C*d,i[4]=A*d-y,i[8]=h*m,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-A,i[6]=C+S*d,i[10]=h*p}else if(t.order==="ZXY"){const S=p*g,y=p*v,A=m*g,C=m*v;i[0]=S-C*d,i[4]=-h*v,i[8]=A+y*d,i[1]=y+A*d,i[5]=h*g,i[9]=C-S*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const S=h*g,y=h*v,A=d*g,C=d*v;i[0]=p*g,i[4]=A*m-y,i[8]=S*m+C,i[1]=p*v,i[5]=C*m+S,i[9]=y*m-A,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const S=h*p,y=h*m,A=d*p,C=d*m;i[0]=p*g,i[4]=C-S*v,i[8]=A*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=y*v+A,i[10]=S-C*v}else if(t.order==="XZY"){const S=h*p,y=h*m,A=d*p,C=d*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=S*v+C,i[5]=h*g,i[9]=y*v-A,i[2]=A*v-y,i[6]=d*g,i[10]=C*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(RS,t,CS)}lookAt(t,i,s){const l=this.elements;return Wn.subVectors(t,i),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),wa.crossVectors(s,Wn),wa.lengthSq()===0&&(Math.abs(s.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),wa.crossVectors(s,Wn)),wa.normalize(),Yl.crossVectors(Wn,wa),l[0]=wa.x,l[4]=Yl.x,l[8]=Wn.x,l[1]=wa.y,l[5]=Yl.y,l[9]=Wn.y,l[2]=wa.z,l[6]=Yl.z,l[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],g=s[1],v=s[5],S=s[9],y=s[13],A=s[2],C=s[6],M=s[10],_=s[14],P=s[3],N=s[7],U=s[11],Z=s[15],I=l[0],F=l[4],q=l[8],w=l[12],R=l[1],H=l[5],rt=l[9],it=l[13],ct=l[2],pt=l[6],O=l[10],Q=l[14],W=l[3],gt=l[7],xt=l[11],Ut=l[15];return u[0]=h*I+d*R+p*ct+m*W,u[4]=h*F+d*H+p*pt+m*gt,u[8]=h*q+d*rt+p*O+m*xt,u[12]=h*w+d*it+p*Q+m*Ut,u[1]=g*I+v*R+S*ct+y*W,u[5]=g*F+v*H+S*pt+y*gt,u[9]=g*q+v*rt+S*O+y*xt,u[13]=g*w+v*it+S*Q+y*Ut,u[2]=A*I+C*R+M*ct+_*W,u[6]=A*F+C*H+M*pt+_*gt,u[10]=A*q+C*rt+M*O+_*xt,u[14]=A*w+C*it+M*Q+_*Ut,u[3]=P*I+N*R+U*ct+Z*W,u[7]=P*F+N*H+U*pt+Z*gt,u[11]=P*q+N*rt+U*O+Z*xt,u[15]=P*w+N*it+U*Q+Z*Ut,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],m=t[13],g=t[2],v=t[6],S=t[10],y=t[14],A=t[3],C=t[7],M=t[11],_=t[15];return A*(+u*p*v-l*m*v-u*d*S+s*m*S+l*d*y-s*p*y)+C*(+i*p*y-i*m*S+u*h*S-l*h*y+l*m*g-u*p*g)+M*(+i*m*v-i*d*y-u*h*v+s*h*y+u*d*g-s*m*g)+_*(-l*d*g-i*p*v+i*d*S+l*h*v-s*h*S+s*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8],v=t[9],S=t[10],y=t[11],A=t[12],C=t[13],M=t[14],_=t[15],P=v*M*m-C*S*m+C*p*y-d*M*y-v*p*_+d*S*_,N=A*S*m-g*M*m-A*p*y+h*M*y+g*p*_-h*S*_,U=g*C*m-A*v*m+A*d*y-h*C*y-g*d*_+h*v*_,Z=A*v*p-g*C*p-A*d*S+h*C*S+g*d*M-h*v*M,I=i*P+s*N+l*U+u*Z;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return t[0]=P*F,t[1]=(C*S*u-v*M*u-C*l*y+s*M*y+v*l*_-s*S*_)*F,t[2]=(d*M*u-C*p*u+C*l*m-s*M*m-d*l*_+s*p*_)*F,t[3]=(v*p*u-d*S*u-v*l*m+s*S*m+d*l*y-s*p*y)*F,t[4]=N*F,t[5]=(g*M*u-A*S*u+A*l*y-i*M*y-g*l*_+i*S*_)*F,t[6]=(A*p*u-h*M*u-A*l*m+i*M*m+h*l*_-i*p*_)*F,t[7]=(h*S*u-g*p*u+g*l*m-i*S*m-h*l*y+i*p*y)*F,t[8]=U*F,t[9]=(A*v*u-g*C*u-A*s*y+i*C*y+g*s*_-i*v*_)*F,t[10]=(h*C*u-A*d*u+A*s*m-i*C*m-h*s*_+i*d*_)*F,t[11]=(g*d*u-h*v*u-g*s*m+i*v*m+h*s*y-i*d*y)*F,t[12]=Z*F,t[13]=(g*C*l-A*v*l+A*s*S-i*C*S-g*s*M+i*v*M)*F,t[14]=(A*d*l-h*C*l-A*s*p+i*C*p+h*s*M-i*d*M)*F,t[15]=(h*v*l-g*d*l+g*s*p-i*v*p-h*s*S+i*d*S)*F,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,p=t.z,m=u*h,g=u*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+s,g*p-l*h,0,m*p-l*d,g*p+l*h,u*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,g=h+h,v=d+d,S=u*m,y=u*g,A=u*v,C=h*g,M=h*v,_=d*v,P=p*m,N=p*g,U=p*v,Z=s.x,I=s.y,F=s.z;return l[0]=(1-(C+_))*Z,l[1]=(y+U)*Z,l[2]=(A-N)*Z,l[3]=0,l[4]=(y-U)*I,l[5]=(1-(S+_))*I,l[6]=(M+P)*I,l[7]=0,l[8]=(A+N)*F,l[9]=(M-P)*F,l[10]=(1-(S+C))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=$s.set(l[0],l[1],l[2]).length();const h=$s.set(l[4],l[5],l[6]).length(),d=$s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],oi.copy(this);const m=1/u,g=1/h,v=1/d;return oi.elements[0]*=m,oi.elements[1]*=m,oi.elements[2]*=m,oi.elements[4]*=g,oi.elements[5]*=g,oi.elements[6]*=g,oi.elements[8]*=v,oi.elements[9]*=v,oi.elements[10]*=v,i.setFromRotationMatrix(oi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=Qi){const p=this.elements,m=2*u/(i-t),g=2*u/(s-l),v=(i+t)/(i-t),S=(s+l)/(s-l);let y,A;if(d===Qi)y=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===_c)y=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=Qi){const p=this.elements,m=1/(i-t),g=1/(s-l),v=1/(h-u),S=(i+t)*m,y=(s+l)*g;let A,C;if(d===Qi)A=(h+u)*v,C=-2*v;else if(d===_c)A=u*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-S,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=C,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const $s=new K,oi=new ke,RS=new K(0,0,0),CS=new K(1,1,1),wa=new K,Yl=new K,Wn=new K,Qg=new ke,Jg=new Ro;class Ei{constructor(t=0,i=0,s=0,l=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-de(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(de(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-de(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(de(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Qg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Jg.setFromEuler(this),this.setFromQuaternion(Jg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class nd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wS=0;const $g=new K,tr=new Ro,Wi=new ke,Zl=new K,go=new K,DS=new K,US=new Ro,t_=new K(1,0,0),e_=new K(0,1,0),n_=new K(0,0,1),i_={type:"added"},LS={type:"removed"},er={type:"childadded",child:null},If={type:"childremoved",child:null};class bn extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const t=new K,i=new Ei,s=new Ro,l=new K(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ke},normalMatrix:{value:new ie}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return tr.setFromAxisAngle(t,i),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,i){return tr.setFromAxisAngle(t,i),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(t_,t)}rotateY(t){return this.rotateOnAxis(e_,t)}rotateZ(t){return this.rotateOnAxis(n_,t)}translateOnAxis(t,i){return $g.copy(t).applyQuaternion(this.quaternion),this.position.add($g.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(t_,t)}translateY(t){return this.translateOnAxis(e_,t)}translateZ(t){return this.translateOnAxis(n_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Zl.copy(t):Zl.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(go,Zl,this.up):Wi.lookAt(Zl,go,this.up),this.quaternion.setFromRotationMatrix(Wi),l&&(Wi.extractRotation(l.matrixWorld),tr.setFromRotationMatrix(Wi),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(i_),er.child=t,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(LS),If.child=t,this.dispatchEvent(If),If.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(i_),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,t,DS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,US,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];u(t.shapes,v)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),g=h(t.images),v=h(t.shapes),S=h(t.skeletons),y=h(t.animations),A=h(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),S.length>0&&(s.skeletons=S),y.length>0&&(s.animations=y),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}bn.DEFAULT_UP=new K(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new K,qi=new K,Ff=new K,Yi=new K,nr=new K,ir=new K,a_=new K,Hf=new K,Gf=new K,Vf=new K,kf=new Oe,Xf=new Oe,Wf=new Oe;class ci{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),li.subVectors(t,i),l.cross(li);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){li.subVectors(l,i),qi.subVectors(s,i),Ff.subVectors(t,i);const h=li.dot(li),d=li.dot(qi),p=li.dot(Ff),m=qi.dot(qi),g=qi.dot(Ff),v=h*m-d*d;if(v===0)return u.set(0,0,0),null;const S=1/v,y=(m*p-d*g)*S,A=(h*g-d*p)*S;return u.set(1-y-A,A,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(t,i,s,l,u,h,d,p){return this.getBarycoord(t,i,s,l,Yi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Yi.x),p.addScaledVector(h,Yi.y),p.addScaledVector(d,Yi.z),p)}static getInterpolatedAttribute(t,i,s,l,u,h){return kf.setScalar(0),Xf.setScalar(0),Wf.setScalar(0),kf.fromBufferAttribute(t,i),Xf.fromBufferAttribute(t,s),Wf.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(kf,u.x),h.addScaledVector(Xf,u.y),h.addScaledVector(Wf,u.z),h}static isFrontFacing(t,i,s,l){return li.subVectors(s,i),qi.subVectors(t,i),li.cross(qi).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),li.cross(qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ci.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return ci.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;nr.subVectors(l,s),ir.subVectors(u,s),Hf.subVectors(t,s);const p=nr.dot(Hf),m=ir.dot(Hf);if(p<=0&&m<=0)return i.copy(s);Gf.subVectors(t,l);const g=nr.dot(Gf),v=ir.dot(Gf);if(g>=0&&v<=g)return i.copy(l);const S=p*v-g*m;if(S<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(s).addScaledVector(nr,h);Vf.subVectors(t,u);const y=nr.dot(Vf),A=ir.dot(Vf);if(A>=0&&y<=A)return i.copy(u);const C=y*m-p*A;if(C<=0&&m>=0&&A<=0)return d=m/(m-A),i.copy(s).addScaledVector(ir,d);const M=g*A-y*v;if(M<=0&&v-g>=0&&y-A>=0)return a_.subVectors(u,l),d=(v-g)/(v-g+(y-A)),i.copy(l).addScaledVector(a_,d);const _=1/(M+C+S);return h=C*_,d=S*_,i.copy(s).addScaledVector(nr,h).addScaledVector(ir,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const i0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Da={h:0,s:0,l:0},jl={h:0,s:0,l:0};function qf(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ve{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Ee.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ee.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Ee.workingColorSpace){if(t=mS(t,1),i=de(i,0,1),s=de(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=qf(h,u,t+1/3),this.g=qf(h,u,t),this.b=qf(h,u,t-1/3)}return Ee.toWorkingColorSpace(this,l),this}setStyle(t,i=Yn){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Yn){const s=i0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yn){return Ee.fromWorkingColorSpace(Tn.copy(this),t),Math.round(de(Tn.r*255,0,255))*65536+Math.round(de(Tn.g*255,0,255))*256+Math.round(de(Tn.b*255,0,255))}getHexString(t=Yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ee.workingColorSpace){Ee.fromWorkingColorSpace(Tn.copy(this),i);const s=Tn.r,l=Tn.g,u=Tn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const v=h-d;switch(m=g<=.5?v/(h+d):v/(2-h-d),h){case s:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-s)/v+2;break;case u:p=(s-l)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(Tn.copy(this),i),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=Yn){Ee.fromWorkingColorSpace(Tn.copy(this),t);const i=Tn.r,s=Tn.g,l=Tn.b;return t!==Yn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Da),this.setHSL(Da.h+t,Da.s+i,Da.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Da),t.getHSL(jl);const s=wf(Da.h,jl.h,i),l=wf(Da.s,jl.s,i),u=wf(Da.l,jl.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new ve;ve.NAMES=i0;let NS=0;class wo extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=cr,this.side=Pa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=rh,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(s.blending=this.blending),this.side!==Pa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==sh&&(s.blendSrc=this.blendSrc),this.blendDst!==rh&&(s.blendDst=this.blendDst),this.blendEquation!==fs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class a0 extends wo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=V_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const en=new K,Kl=new Te;let OS=0;class Si{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Wg,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Kl.fromBufferAttribute(this,i),Kl.applyMatrix3(t),this.setXY(i,Kl.x,Kl.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)en.fromBufferAttribute(this,i),en.applyMatrix3(t),this.setXYZ(i,en.x,en.y,en.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)en.fromBufferAttribute(this,i),en.applyMatrix4(t),this.setXYZ(i,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)en.fromBufferAttribute(this,i),en.applyNormalMatrix(t),this.setXYZ(i,en.x,en.y,en.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)en.fromBufferAttribute(this,i),en.transformDirection(t),this.setXYZ(i,en.x,en.y,en.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=ho(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=On(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ho(i,this.array)),i}setX(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ho(i,this.array)),i}setY(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ho(i,this.array)),i}setZ(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ho(i,this.array)),i}setW(t,i){return this.normalized&&(i=On(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),s=On(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),s=On(s,this.array),l=On(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=On(i,this.array),s=On(s,this.array),l=On(l,this.array),u=On(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wg&&(t.usage=this.usage),t}}class s0 extends Si{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class r0 extends Si{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Mi extends Si{constructor(t,i,s){super(new Float32Array(t),i,s)}}let PS=0;const ei=new ke,Yf=new bn,ar=new K,qn=new Co,_o=new Co,pn=new K;class za extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(t0(t)?r0:s0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ie().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,i,s){return ei.makeTranslation(t,i,s),this.applyMatrix4(ei),this}scale(t,i,s){return ei.makeScale(t,i,s),this.applyMatrix4(ei),this}lookAt(t){return Yf.lookAt(t),Yf.updateMatrix(),this.applyMatrix4(Yf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Mi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Co);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];qn.setFromBufferAttribute(u),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ed);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];_o.setFromBufferAttribute(d),this.morphTargetsRelative?(pn.addVectors(qn.min,_o.min),qn.expandByPoint(pn),pn.addVectors(qn.max,_o.max),qn.expandByPoint(pn)):(qn.expandByPoint(_o.min),qn.expandByPoint(_o.max))}qn.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)pn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(pn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)pn.fromBufferAttribute(d,m),p&&(ar.fromBufferAttribute(t,m),pn.add(ar)),l=Math.max(l,s.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let q=0;q<s.count;q++)d[q]=new K,p[q]=new K;const m=new K,g=new K,v=new K,S=new Te,y=new Te,A=new Te,C=new K,M=new K;function _(q,w,R){m.fromBufferAttribute(s,q),g.fromBufferAttribute(s,w),v.fromBufferAttribute(s,R),S.fromBufferAttribute(u,q),y.fromBufferAttribute(u,w),A.fromBufferAttribute(u,R),g.sub(m),v.sub(m),y.sub(S),A.sub(S);const H=1/(y.x*A.y-A.x*y.y);isFinite(H)&&(C.copy(g).multiplyScalar(A.y).addScaledVector(v,-y.y).multiplyScalar(H),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-A.x).multiplyScalar(H),d[q].add(C),d[w].add(C),d[R].add(C),p[q].add(M),p[w].add(M),p[R].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let q=0,w=P.length;q<w;++q){const R=P[q],H=R.start,rt=R.count;for(let it=H,ct=H+rt;it<ct;it+=3)_(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const N=new K,U=new K,Z=new K,I=new K;function F(q){Z.fromBufferAttribute(l,q),I.copy(Z);const w=d[q];N.copy(w),N.sub(Z.multiplyScalar(Z.dot(w))).normalize(),U.crossVectors(I,w);const H=U.dot(p[q])<0?-1:1;h.setXYZW(q,N.x,N.y,N.z,H)}for(let q=0,w=P.length;q<w;++q){const R=P[q],H=R.start,rt=R.count;for(let it=H,ct=H+rt;it<ct;it+=3)F(t.getX(it+0)),F(t.getX(it+1)),F(t.getX(it+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Si(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,y=s.count;S<y;S++)s.setXYZ(S,0,0,0);const l=new K,u=new K,h=new K,d=new K,p=new K,m=new K,g=new K,v=new K;if(t)for(let S=0,y=t.count;S<y;S+=3){const A=t.getX(S+0),C=t.getX(S+1),M=t.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(s,A),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,M),d.add(g),p.add(g),m.add(g),s.setXYZ(A,d.x,d.y,d.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)pn.fromBufferAttribute(t,i),pn.normalize(),t.setXYZ(i,pn.x,pn.y,pn.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,v=d.normalized,S=new m.constructor(p.length*g);let y=0,A=0;for(let C=0,M=p.length;C<M;C++){d.isInterleavedBufferAttribute?y=p[C]*d.data.stride+d.offset:y=p[C]*g;for(let _=0;_<g;_++)S[A++]=m[y++]}return new Si(S,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new za,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,v=m.length;g<v;g++){const S=m[g],y=t(S,s);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,S=m.length;v<S;v++){const y=m[v];g.push(y.toJSON(t.data))}g.length>0&&(l[p]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=t.morphAttributes;for(const m in u){const g=[],v=u[m];for(let S=0,y=v.length;S<y;S++)g.push(v[S].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,g=h.length;m<g;m++){const v=h[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const s_=new ke,ss=new n0,Ql=new ed,r_=new K,Jl=new K,$l=new K,tc=new K,Zf=new K,ec=new K,o_=new K,nc=new K;class Ji extends bn{constructor(t=new za,i=new a0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){ec.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],v=u[p];g!==0&&(Zf.fromBufferAttribute(v,t),h?ec.addScaledVector(Zf,g):ec.addScaledVector(Zf.sub(i),g))}i.add(ec)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ql.copy(s.boundingSphere),Ql.applyMatrix4(u),ss.copy(t.ray).recast(t.near),!(Ql.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Ql,r_)===null||ss.origin.distanceToSquared(r_)>(t.far-t.near)**2))&&(s_.copy(u).invert(),ss.copy(t.ray).applyMatrix4(s_),!(s.boundingBox!==null&&ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ss)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,S=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const M=S[A],_=h[M.materialIndex],P=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=P,Z=N;U<Z;U+=3){const I=d.getX(U),F=d.getX(U+1),q=d.getX(U+2);l=ic(this,_,t,s,m,g,v,I,F,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=A,_=C;M<_;M+=3){const P=d.getX(M),N=d.getX(M+1),U=d.getX(M+2);l=ic(this,h,t,s,m,g,v,P,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let A=0,C=S.length;A<C;A++){const M=S[A],_=h[M.materialIndex],P=Math.max(M.start,y.start),N=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let U=P,Z=N;U<Z;U+=3){const I=U,F=U+1,q=U+2;l=ic(this,_,t,s,m,g,v,I,F,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(p.count,y.start+y.count);for(let M=A,_=C;M<_;M+=3){const P=M,N=M+1,U=M+2;l=ic(this,h,t,s,m,g,v,P,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function BS(o,t,i,s,l,u,h,d){let p;if(t.side===Pn?p=s.intersectTriangle(h,u,l,!0,d):p=s.intersectTriangle(l,u,h,t.side===Pa,d),p===null)return null;nc.copy(d),nc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(nc);return m<i.near||m>i.far?null:{distance:m,point:nc.clone(),object:o}}function ic(o,t,i,s,l,u,h,d,p,m){o.getVertexPosition(d,Jl),o.getVertexPosition(p,$l),o.getVertexPosition(m,tc);const g=BS(o,t,i,s,Jl,$l,tc,o_);if(g){const v=new K;ci.getBarycoord(o_,Jl,$l,tc,v),l&&(g.uv=ci.getInterpolatedAttribute(l,d,p,m,v,new Te)),u&&(g.uv1=ci.getInterpolatedAttribute(u,d,p,m,v,new Te)),h&&(g.normal=ci.getInterpolatedAttribute(h,d,p,m,v,new K),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:p,c:m,normal:new K,materialIndex:0};ci.getNormal(Jl,$l,tc,S.normal),g.face=S,g.barycoord=v}return g}class Do extends za{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],g=[],v=[];let S=0,y=0;A("z","y","x",-1,-1,s,i,t,h,u,0),A("z","y","x",1,-1,s,i,-t,h,u,1),A("x","z","y",1,1,t,s,i,l,h,2),A("x","z","y",1,-1,t,s,-i,l,h,3),A("x","y","z",1,-1,t,i,s,l,u,4),A("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Mi(m,3)),this.setAttribute("normal",new Mi(g,3)),this.setAttribute("uv",new Mi(v,2));function A(C,M,_,P,N,U,Z,I,F,q,w){const R=U/F,H=Z/q,rt=U/2,it=Z/2,ct=I/2,pt=F+1,O=q+1;let Q=0,W=0;const gt=new K;for(let xt=0;xt<O;xt++){const Ut=xt*H-it;for(let zt=0;zt<pt;zt++){const Ht=zt*R-rt;gt[C]=Ht*P,gt[M]=Ut*N,gt[_]=ct,m.push(gt.x,gt.y,gt.z),gt[C]=0,gt[M]=0,gt[_]=I>0?1:-1,g.push(gt.x,gt.y,gt.z),v.push(zt/F),v.push(1-xt/q),Q+=1}}for(let xt=0;xt<q;xt++)for(let Ut=0;Ut<F;Ut++){const zt=S+Ut+pt*xt,Ht=S+Ut+pt*(xt+1),at=S+(Ut+1)+pt*(xt+1),St=S+(Ut+1)+pt*xt;p.push(zt,Ht,St),p.push(Ht,at,St),W+=6}d.addGroup(y,W,w),y+=W,S+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Rn(o){const t={};for(let i=0;i<o.length;i++){const s=mr(o[i]);for(const l in s)t[l]=s[l]}return t}function zS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function o0(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}const IS={clone:mr,merge:Rn};var FS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ba extends wo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FS,this.fragmentShader=HS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=zS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class l0 extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Qi}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ua=new K,l_=new Te,c_=new Te;class ni extends l0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Xh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(Cf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ua.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ua.x,Ua.y).multiplyScalar(-t/Ua.z),Ua.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ua.x,Ua.y).multiplyScalar(-t/Ua.z)}getViewSize(t,i){return this.getViewBounds(t,l_,c_),i.subVectors(c_,l_)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Cf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const sr=-90,rr=1;class GS extends bn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ni(sr,rr,t,i);l.layers=this.layers,this.add(l);const u=new ni(sr,rr,t,i);u.layers=this.layers,this.add(u);const h=new ni(sr,rr,t,i);h.layers=this.layers,this.add(h);const d=new ni(sr,rr,t,i);d.layers=this.layers,this.add(d);const p=new ni(sr,rr,t,i);p.layers=this.layers,this.add(p);const m=new ni(sr,rr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(t===Qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===_c)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,g]=this.children,v=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(v,S,y),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class id extends Bn{constructor(t=[],i=hr,s,l,u,h,d,p,m,g){super(t,i,s,l,u,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class VS extends gs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new id(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:xi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Do(5,5,5),u=new Ba({name:"CubemapFromEquirect",uniforms:mr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Pn,blending:Na});u.uniforms.tEquirect.value=i;const h=new Ji(l,u),d=i.minFilter;return i.minFilter===ps&&(i.minFilter=xi),new GS(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class ac extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kS={type:"move"};class jf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const C of t.hand.values()){const M=i.getJointPose(C,s),_=this._getHandJoint(m,C);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],S=g.position.distanceTo(v.position),y=.02,A=.005;m.inputState.pinching&&S>y+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&S<=y-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(kS)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new ac;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Hb extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Kf=new K,XS=new K,WS=new ie;class cs{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Kf.subVectors(s,i).cross(XS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Kf),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||WS.getNormalMatrix(t),l=this.coplanarPoint(Kf).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new ed,sc=new K;class ad{constructor(t=new cs,i=new cs,s=new cs,l=new cs,u=new cs,h=new cs){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Qi){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],v=l[6],S=l[7],y=l[8],A=l[9],C=l[10],M=l[11],_=l[12],P=l[13],N=l[14],U=l[15];if(s[0].setComponents(p-u,S-m,M-y,U-_).normalize(),s[1].setComponents(p+u,S+m,M+y,U+_).normalize(),s[2].setComponents(p+h,S+g,M+A,U+P).normalize(),s[3].setComponents(p-h,S-g,M-A,U-P).normalize(),s[4].setComponents(p-d,S-v,M-C,U-N).normalize(),i===Qi)s[5].setComponents(p+d,S+v,M+C,U+N).normalize();else if(i===_c)s[5].setComponents(d,v,C,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),rs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(sc.x=l.normal.x>0?t.max.x:t.min.x,sc.y=l.normal.y>0?t.max.y:t.min.y,sc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(sc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class c0 extends Bn{constructor(t,i,s=ms,l,u,h,d=fi,p=fi,m,g=yo){if(g!==yo&&g!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,h,d,p,g,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new td(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class xc extends za{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,g=p+1,v=t/d,S=i/p,y=[],A=[],C=[],M=[];for(let _=0;_<g;_++){const P=_*S-h;for(let N=0;N<m;N++){const U=N*v-u;A.push(U,-P,0),C.push(0,0,1),M.push(N/d),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let P=0;P<d;P++){const N=P+m*_,U=P+m*(_+1),Z=P+1+m*(_+1),I=P+1+m*_;y.push(N,U,I),y.push(U,Z,I)}this.setIndex(y),this.setAttribute("position",new Mi(A,3)),this.setAttribute("normal",new Mi(C,3)),this.setAttribute("uv",new Mi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xc(t.width,t.height,t.widthSegments,t.heightSegments)}}class u0 extends za{constructor(t=1,i=.4,s=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:u},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],p=[],m=[],g=new K,v=new K,S=new K;for(let y=0;y<=s;y++)for(let A=0;A<=l;A++){const C=A/l*u,M=y/s*Math.PI*2;v.x=(t+i*Math.cos(M))*Math.cos(C),v.y=(t+i*Math.cos(M))*Math.sin(C),v.z=i*Math.sin(M),d.push(v.x,v.y,v.z),g.x=t*Math.cos(C),g.y=t*Math.sin(C),S.subVectors(v,g).normalize(),p.push(S.x,S.y,S.z),m.push(A/l),m.push(y/s)}for(let y=1;y<=s;y++)for(let A=1;A<=l;A++){const C=(l+1)*y+A-1,M=(l+1)*(y-1)+A-1,_=(l+1)*(y-1)+A,P=(l+1)*y+A;h.push(C,M,P),h.push(M,_,P)}this.setIndex(h),this.setAttribute("position",new Mi(d,3)),this.setAttribute("normal",new Mi(p,3)),this.setAttribute("uv",new Mi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new u0(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class qS extends wo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=J_,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gb extends qS{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return de(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class YS extends wo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ZS extends wo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const u_={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class jS{constructor(t,i,s){const l=this;let u=!1,h=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.itemStart=function(g){d++,u===!1&&l.onStart!==void 0&&l.onStart(g,h,d),u=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,v){return m.push(g,v),this},this.removeHandler=function(g){const v=m.indexOf(g);return v!==-1&&m.splice(v,2),this},this.getHandler=function(g){for(let v=0,S=m.length;v<S;v+=2){const y=m[v],A=m[v+1];if(y.global&&(y.lastIndex=0),y.test(g))return A}return null}}}const KS=new jS;class sd{constructor(t){this.manager=t!==void 0?t:KS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,u){s.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}sd.DEFAULT_MATERIAL_NAME="__DEFAULT";class QS extends sd{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,h=u_.get(t);if(h!==void 0)return u.manager.itemStart(t),setTimeout(function(){i&&i(h),u.manager.itemEnd(t)},0),h;const d=To("img");function p(){g(),u_.add(t,this),i&&i(this),u.manager.itemEnd(t)}function m(v){g(),l&&l(v),u.manager.itemError(t),u.manager.itemEnd(t)}function g(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(t),d.src=t,d}}class Vb extends sd{constructor(t){super(t)}load(t,i,s,l){const u=new id;u.colorSpace=Yn;const h=new QS(this.manager);h.setCrossOrigin(this.crossOrigin),h.setPath(this.path);let d=0;function p(m){h.load(t[m],function(g){u.images[m]=g,d++,d===6&&(u.needsUpdate=!0,i&&i(u))},void 0,l)}for(let m=0;m<t.length;++m)p(m);return u}}class rd extends bn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Qf=new ke,f_=new K,h_=new K;class f0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ad,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;f_.setFromMatrixPosition(t.matrixWorld),i.position.copy(f_),h_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(h_),i.updateMatrixWorld(),Qf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qf),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Qf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const d_=new ke,vo=new K,Jf=new K;class JS extends f0{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,u=t.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),vo.setFromMatrixPosition(t.matrixWorld),s.position.copy(vo),Jf.copy(s.position),Jf.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Jf),s.updateMatrixWorld(),l.makeTranslation(-vo.x,-vo.y,-vo.z),d_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(d_)}}class kb extends rd{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new JS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class h0 extends l0{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class $S extends f0{constructor(){super(new h0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xb extends rd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new $S}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Wb extends rd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class tM extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const p_=new ke;class qb{constructor(t,i,s=0,l=1/0){this.ray=new n0(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new nd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return p_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(p_),this}intersectObject(t,i=!0,s=[]){return Wh(t,this,s,i),s.sort(m_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,u=t.length;l<u;l++)Wh(t[l],this,s,i);return s.sort(m_),s}}function m_(o,t){return o.distance-t.distance}function Wh(o,t,i,s){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const u=o.children;for(let h=0,d=u.length;h<d;h++)Wh(u[h],t,i,!0)}}function g_(o,t,i,s){const l=eM(s);switch(i){case Y_:return o*t;case j_:return o*t/l.components*l.byteLength;case Qh:return o*t/l.components*l.byteLength;case K_:return o*t*2/l.components*l.byteLength;case Jh:return o*t*2/l.components*l.byteLength;case Z_:return o*t*3/l.components*l.byteLength;case ui:return o*t*4/l.components*l.byteLength;case $h:return o*t*4/l.components*l.byteLength;case cc:case uc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case fc:case hc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case xh:case Mh:return Math.max(o,16)*Math.max(t,8)/4;case vh:case Sh:return Math.max(o,8)*Math.max(t,8)/2;case yh:case Eh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Th:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case bh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Rh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case wh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Dh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Uh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Lh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Nh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Bh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case zh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Ih:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case dc:case Fh:case Hh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Q_:case Gh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Vh:case kh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function eM(o){switch(o){case yi:case X_:return{byteLength:1,components:1};case So:case W_:case bo:return{byteLength:2,components:1};case jh:case Kh:return{byteLength:2,components:4};case ms:case Zh:case Ki:return{byteLength:4,components:1};case q_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function d0(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function nM(o){const t=new WeakMap;function i(d,p){const m=d.array,g=d.usage,v=m.byteLength,S=o.createBuffer();o.bindBuffer(p,S),o.bufferData(p,m,g),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,p,m){const g=p.array,v=p.updateRanges;if(o.bindBuffer(m,d),v.length===0)o.bufferSubData(m,0,g);else{v.sort((y,A)=>y.start-A.start);let S=0;for(let y=1;y<v.length;y++){const A=v[S],C=v[y];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,v[S]=C)}v.length=S+1;for(let y=0,A=v.length;y<A;y++){const C=v[y];o.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}var iM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_M=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,AM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,CM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NM="gl_FragColor = linearToOutputTexel( gl_FragColor );",OM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,WM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,KM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ty=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ey=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ny=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ay=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ry=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,py=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,my=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_y=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,My=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,by=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ry=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ly=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Py=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,By=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ky=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ky=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ME=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,EE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,OE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:iM,alphahash_pars_fragment:aM,alphamap_fragment:sM,alphamap_pars_fragment:rM,alphatest_fragment:oM,alphatest_pars_fragment:lM,aomap_fragment:cM,aomap_pars_fragment:uM,batching_pars_vertex:fM,batching_vertex:hM,begin_vertex:dM,beginnormal_vertex:pM,bsdfs:mM,iridescence_fragment:gM,bumpmap_pars_fragment:_M,clipping_planes_fragment:vM,clipping_planes_pars_fragment:xM,clipping_planes_pars_vertex:SM,clipping_planes_vertex:MM,color_fragment:yM,color_pars_fragment:EM,color_pars_vertex:TM,color_vertex:bM,common:AM,cube_uv_reflection_fragment:RM,defaultnormal_vertex:CM,displacementmap_pars_vertex:wM,displacementmap_vertex:DM,emissivemap_fragment:UM,emissivemap_pars_fragment:LM,colorspace_fragment:NM,colorspace_pars_fragment:OM,envmap_fragment:PM,envmap_common_pars_fragment:BM,envmap_pars_fragment:zM,envmap_pars_vertex:IM,envmap_physical_pars_fragment:jM,envmap_vertex:FM,fog_vertex:HM,fog_pars_vertex:GM,fog_fragment:VM,fog_pars_fragment:kM,gradientmap_pars_fragment:XM,lightmap_pars_fragment:WM,lights_lambert_fragment:qM,lights_lambert_pars_fragment:YM,lights_pars_begin:ZM,lights_toon_fragment:KM,lights_toon_pars_fragment:QM,lights_phong_fragment:JM,lights_phong_pars_fragment:$M,lights_physical_fragment:ty,lights_physical_pars_fragment:ey,lights_fragment_begin:ny,lights_fragment_maps:iy,lights_fragment_end:ay,logdepthbuf_fragment:sy,logdepthbuf_pars_fragment:ry,logdepthbuf_pars_vertex:oy,logdepthbuf_vertex:ly,map_fragment:cy,map_pars_fragment:uy,map_particle_fragment:fy,map_particle_pars_fragment:hy,metalnessmap_fragment:dy,metalnessmap_pars_fragment:py,morphinstance_vertex:my,morphcolor_vertex:gy,morphnormal_vertex:_y,morphtarget_pars_vertex:vy,morphtarget_vertex:xy,normal_fragment_begin:Sy,normal_fragment_maps:My,normal_pars_fragment:yy,normal_pars_vertex:Ey,normal_vertex:Ty,normalmap_pars_fragment:by,clearcoat_normal_fragment_begin:Ay,clearcoat_normal_fragment_maps:Ry,clearcoat_pars_fragment:Cy,iridescence_pars_fragment:wy,opaque_fragment:Dy,packing:Uy,premultiplied_alpha_fragment:Ly,project_vertex:Ny,dithering_fragment:Oy,dithering_pars_fragment:Py,roughnessmap_fragment:By,roughnessmap_pars_fragment:zy,shadowmap_pars_fragment:Iy,shadowmap_pars_vertex:Fy,shadowmap_vertex:Hy,shadowmask_pars_fragment:Gy,skinbase_vertex:Vy,skinning_pars_vertex:ky,skinning_vertex:Xy,skinnormal_vertex:Wy,specularmap_fragment:qy,specularmap_pars_fragment:Yy,tonemapping_fragment:Zy,tonemapping_pars_fragment:jy,transmission_fragment:Ky,transmission_pars_fragment:Qy,uv_pars_fragment:Jy,uv_pars_vertex:$y,uv_vertex:tE,worldpos_vertex:eE,background_vert:nE,background_frag:iE,backgroundCube_vert:aE,backgroundCube_frag:sE,cube_vert:rE,cube_frag:oE,depth_vert:lE,depth_frag:cE,distanceRGBA_vert:uE,distanceRGBA_frag:fE,equirect_vert:hE,equirect_frag:dE,linedashed_vert:pE,linedashed_frag:mE,meshbasic_vert:gE,meshbasic_frag:_E,meshlambert_vert:vE,meshlambert_frag:xE,meshmatcap_vert:SE,meshmatcap_frag:ME,meshnormal_vert:yE,meshnormal_frag:EE,meshphong_vert:TE,meshphong_frag:bE,meshphysical_vert:AE,meshphysical_frag:RE,meshtoon_vert:CE,meshtoon_frag:wE,points_vert:DE,points_frag:UE,shadow_vert:LE,shadow_frag:NE,sprite_vert:OE,sprite_frag:PE},bt={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},vi={basic:{uniforms:Rn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Rn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ve(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Rn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Rn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Rn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ve(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Rn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Rn([bt.points,bt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Rn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Rn([bt.common,bt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Rn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Rn([bt.sprite,bt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:Rn([bt.common,bt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:Rn([bt.lights,bt.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};vi.physical={uniforms:Rn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const rc={r:0,b:0,g:0},os=new Ei,BE=new ke;function zE(o,t,i,s,l,u,h){const d=new ve(0);let p=u===!0?0:1,m,g,v=null,S=0,y=null;function A(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:t).get(U)),U}function C(N){let U=!1;const Z=A(N);Z===null?_(d,p):Z&&Z.isColor&&(_(Z,1),U=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,U){const Z=A(U);Z&&(Z.isCubeTexture||Z.mapping===vc)?(g===void 0&&(g=new Ji(new Do(1,1,1),new Ba({name:"BackgroundCubeMaterial",uniforms:mr(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,F,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),os.copy(U.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,Z.isCubeTexture&&Z.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),g.material.uniforms.envMap.value=Z,g.material.uniforms.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(BE.makeRotationFromEuler(os)),g.material.toneMapped=Ee.getTransfer(Z.colorSpace)!==Ne,(v!==Z||S!==Z.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=Z,S=Z.version,y=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):Z&&Z.isTexture&&(m===void 0&&(m=new Ji(new xc(2,2),new Ba({name:"BackgroundMaterial",uniforms:mr(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Pa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=Z,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Ee.getTransfer(Z.colorSpace)!==Ne,Z.matrixAutoUpdate===!0&&Z.updateMatrix(),m.material.uniforms.uvTransform.value.copy(Z.matrix),(v!==Z||S!==Z.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,v=Z,S=Z.version,y=o.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function _(N,U){N.getRGB(rc,o0(o)),s.buffers.color.setClear(rc.r,rc.g,rc.b,U,h)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),p=U,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,_(d,p)},render:C,addToRenderList:M,dispose:P}}function IE(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,h=!1;function d(R,H,rt,it,ct){let pt=!1;const O=v(it,rt,H);u!==O&&(u=O,m(u.object)),pt=y(R,it,rt,ct),pt&&A(R,it,rt,ct),ct!==null&&t.update(ct,o.ELEMENT_ARRAY_BUFFER),(pt||h)&&(h=!1,U(R,H,rt,it),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function p(){return o.createVertexArray()}function m(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function v(R,H,rt){const it=rt.wireframe===!0;let ct=s[R.id];ct===void 0&&(ct={},s[R.id]=ct);let pt=ct[H.id];pt===void 0&&(pt={},ct[H.id]=pt);let O=pt[it];return O===void 0&&(O=S(p()),pt[it]=O),O}function S(R){const H=[],rt=[],it=[];for(let ct=0;ct<i;ct++)H[ct]=0,rt[ct]=0,it[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:rt,attributeDivisors:it,object:R,attributes:{},index:null}}function y(R,H,rt,it){const ct=u.attributes,pt=H.attributes;let O=0;const Q=rt.getAttributes();for(const W in Q)if(Q[W].location>=0){const xt=ct[W];let Ut=pt[W];if(Ut===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(Ut=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(Ut=R.instanceColor)),xt===void 0||xt.attribute!==Ut||Ut&&xt.data!==Ut.data)return!0;O++}return u.attributesNum!==O||u.index!==it}function A(R,H,rt,it){const ct={},pt=H.attributes;let O=0;const Q=rt.getAttributes();for(const W in Q)if(Q[W].location>=0){let xt=pt[W];xt===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor));const Ut={};Ut.attribute=xt,xt&&xt.data&&(Ut.data=xt.data),ct[W]=Ut,O++}u.attributes=ct,u.attributesNum=O,u.index=it}function C(){const R=u.newAttributes;for(let H=0,rt=R.length;H<rt;H++)R[H]=0}function M(R){_(R,0)}function _(R,H){const rt=u.newAttributes,it=u.enabledAttributes,ct=u.attributeDivisors;rt[R]=1,it[R]===0&&(o.enableVertexAttribArray(R),it[R]=1),ct[R]!==H&&(o.vertexAttribDivisor(R,H),ct[R]=H)}function P(){const R=u.newAttributes,H=u.enabledAttributes;for(let rt=0,it=H.length;rt<it;rt++)H[rt]!==R[rt]&&(o.disableVertexAttribArray(rt),H[rt]=0)}function N(R,H,rt,it,ct,pt,O){O===!0?o.vertexAttribIPointer(R,H,rt,ct,pt):o.vertexAttribPointer(R,H,rt,it,ct,pt)}function U(R,H,rt,it){C();const ct=it.attributes,pt=rt.getAttributes(),O=H.defaultAttributeValues;for(const Q in pt){const W=pt[Q];if(W.location>=0){let gt=ct[Q];if(gt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),gt!==void 0){const xt=gt.normalized,Ut=gt.itemSize,zt=t.get(gt);if(zt===void 0)continue;const Ht=zt.buffer,at=zt.type,St=zt.bytesPerElement,Lt=at===o.INT||at===o.UNSIGNED_INT||gt.gpuType===Zh;if(gt.isInterleavedBufferAttribute){const Et=gt.data,kt=Et.stride,oe=gt.offset;if(Et.isInstancedInterleavedBuffer){for(let Zt=0;Zt<W.locationSize;Zt++)_(W.location+Zt,Et.meshPerAttribute);R.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Zt=0;Zt<W.locationSize;Zt++)M(W.location+Zt);o.bindBuffer(o.ARRAY_BUFFER,Ht);for(let Zt=0;Zt<W.locationSize;Zt++)N(W.location+Zt,Ut/W.locationSize,at,xt,kt*St,(oe+Ut/W.locationSize*Zt)*St,Lt)}else{if(gt.isInstancedBufferAttribute){for(let Et=0;Et<W.locationSize;Et++)_(W.location+Et,gt.meshPerAttribute);R.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Et=0;Et<W.locationSize;Et++)M(W.location+Et);o.bindBuffer(o.ARRAY_BUFFER,Ht);for(let Et=0;Et<W.locationSize;Et++)N(W.location+Et,Ut/W.locationSize,at,xt,Ut*St,Ut/W.locationSize*Et*St,Lt)}}else if(O!==void 0){const xt=O[Q];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(W.location,xt);break;case 3:o.vertexAttrib3fv(W.location,xt);break;case 4:o.vertexAttrib4fv(W.location,xt);break;default:o.vertexAttrib1fv(W.location,xt)}}}}P()}function Z(){q();for(const R in s){const H=s[R];for(const rt in H){const it=H[rt];for(const ct in it)g(it[ct].object),delete it[ct];delete H[rt]}delete s[R]}}function I(R){if(s[R.id]===void 0)return;const H=s[R.id];for(const rt in H){const it=H[rt];for(const ct in it)g(it[ct].object),delete it[ct];delete H[rt]}delete s[R.id]}function F(R){for(const H in s){const rt=s[H];if(rt[R.id]===void 0)continue;const it=rt[R.id];for(const ct in it)g(it[ct].object),delete it[ct];delete rt[R.id]}}function q(){w(),h=!0,u!==l&&(u=l,m(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:w,dispose:Z,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:M,disableUnusedAttributes:P}}function FE(o,t,i){let s;function l(m){s=m}function u(m,g){o.drawArrays(s,m,g),i.update(g,s,1)}function h(m,g,v){v!==0&&(o.drawArraysInstanced(s,m,g,v),i.update(g,s,v))}function d(m,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,v);let y=0;for(let A=0;A<v;A++)y+=g[A];i.update(y,s,1)}function p(m,g,v,S){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<m.length;A++)h(m[A],g[A],S[A]);else{y.multiDrawArraysInstancedWEBGL(s,m,0,g,0,S,0,v);let A=0;for(let C=0;C<v;C++)A+=g[C]*S[C];i.update(A,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function HE(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==ui&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const q=F===bo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==yi&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ki&&!q)}function p(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),Z=A>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:y,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:Z,maxSamples:I}}function GE(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new cs,d=new ie,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||s!==0||l;return l=S,s=v.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,S){i=g(v,S,0)},this.setState=function(v,S,y){const A=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||A===null||A.length===0||u&&!M)u?g(null):m();else{const P=u?0:s,N=P*4;let U=_.clippingState||null;p.value=U,U=g(A,S,N,y);for(let Z=0;Z!==N;++Z)U[Z]=i[Z];_.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,S,y,A){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=p.value,A!==!0||M===null){const _=y+C*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<_)&&(M=new Float32Array(_));for(let N=0,U=y;N!==C;++N,U+=4)h.copy(v[N]).applyMatrix4(P,d),h.normal.toArray(M,U),M[U+3]=h.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}function VE(o){let t=new WeakMap;function i(h,d){return d===ph?h.mapping=hr:d===mh&&(h.mapping=dr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ph||d===mh)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new VS(p.height);return m.fromEquirectangularTexture(o,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const lr=4,__=[.125,.215,.35,.446,.526,.582],hs=20,$f=new h0,v_=new ve;let th=null,eh=0,nh=0,ih=!1;const us=(1+Math.sqrt(5))/2,or=1/us,x_=[new K(-us,or,0),new K(us,or,0),new K(-or,0,us),new K(or,0,us),new K(0,us,-or),new K(0,us,or),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],kE=new K;class S_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=kE}=u;th=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=E_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(th,eh,nh),this._renderer.xr.enabled=ih,t.scissorTest=!1,oc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===hr||t.mapping===dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),th=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:bo,format:ui,colorSpace:pr,depthBuffer:!1},l=M_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=M_(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XE(u)),this._blurMaterial=WE(u,t,i)}return l}_compileMaterial(t){const i=new Ji(this._lodPlanes[0],t);this._renderer.compile(i,$f)}_sceneToCubeUV(t,i,s,l,u){const p=new ni(90,1,i,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,y=v.toneMapping;v.getClearColor(v_),v.toneMapping=Oa,v.autoClear=!1;const A=new a0({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),C=new Ji(new Do,A);let M=!1;const _=t.background;_?_.isColor&&(A.color.copy(_),t.background=null,M=!0):(A.color.copy(v_),M=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(p.up.set(0,m[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[P],u.y,u.z)):N===1?(p.up.set(0,0,m[P]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[P],u.z)):(p.up.set(0,m[P],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[P]));const U=this._cubeSize;oc(l,N*U,P>2?U:0,U,U),v.setRenderTarget(l),M&&v.render(C,p),v.render(t,p)}C.geometry.dispose(),C.material.dispose(),v.toneMapping=y,v.autoClear=S,t.background=_}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===hr||t.mapping===dr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=E_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ji(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;oc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,$f)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=x_[(l-u-1)%x_.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ji(this._lodPlanes[l],m),S=m.uniforms,y=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*hs-1),C=u/A,M=isFinite(u)?1+Math.floor(g*C):hs;M>hs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${hs}`);const _=[];let P=0;for(let F=0;F<hs;++F){const q=F/C,w=Math.exp(-q*q/2);_.push(w),F===0?P+=w:F<M&&(P+=2*w)}for(let F=0;F<_.length;F++)_[F]=_[F]/P;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=A,S.mipInt.value=N-s;const U=this._sizeLods[l],Z=3*U*(l>N-lr?l-N+lr:0),I=4*(this._cubeSize-U);oc(i,Z,I,3*U,2*U),p.setRenderTarget(i),p.render(v,$f)}}function XE(o){const t=[],i=[],s=[];let l=o;const u=o-lr+1+__.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-lr?p=__[h-o+lr-1]:h===0&&(p=0),s.push(p);const m=1/(d-2),g=-m,v=1+m,S=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,A=6,C=3,M=2,_=1,P=new Float32Array(C*A*y),N=new Float32Array(M*A*y),U=new Float32Array(_*A*y);for(let I=0;I<y;I++){const F=I%3*2/3-1,q=I>2?0:-1,w=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];P.set(w,C*A*I),N.set(S,M*A*I);const R=[I,I,I,I,I,I];U.set(R,_*A*I)}const Z=new za;Z.setAttribute("position",new Si(P,C)),Z.setAttribute("uv",new Si(N,M)),Z.setAttribute("faceIndex",new Si(U,_)),t.push(Z),l>lr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function M_(o,t,i){const s=new gs(o,t,i);return s.texture.mapping=vc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function oc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function WE(o,t,i){const s=new Float32Array(hs),l=new K(0,1,0);return new Ba({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function y_(){return new Ba({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function E_(){return new Ba({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:od(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function od(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qE(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===ph||p===mh,g=p===hr||p===dr;if(m||g){let v=t.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new S_(o)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return m&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new S_(o)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function YE(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&pc("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function ZE(o,t,i,s){const l={},u=new WeakMap;function h(v){const S=v.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);S.removeEventListener("dispose",h),delete l[S.id];const y=u.get(S);y&&(t.remove(y),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(v){const S=v.attributes;for(const y in S)t.update(S[y],o.ARRAY_BUFFER)}function m(v){const S=[],y=v.index,A=v.attributes.position;let C=0;if(y!==null){const P=y.array;C=y.version;for(let N=0,U=P.length;N<U;N+=3){const Z=P[N+0],I=P[N+1],F=P[N+2];S.push(Z,I,I,F,F,Z)}}else if(A!==void 0){const P=A.array;C=A.version;for(let N=0,U=P.length/3-1;N<U;N+=3){const Z=N+0,I=N+1,F=N+2;S.push(Z,I,I,F,F,Z)}}else return;const M=new(t0(S)?r0:s0)(S,1);M.version=C;const _=u.get(v);_&&t.remove(_),u.set(v,M)}function g(v){const S=u.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function jE(o,t,i){let s;function l(S){s=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function p(S,y){o.drawElements(s,y,u,S*h),i.update(y,s,1)}function m(S,y,A){A!==0&&(o.drawElementsInstanced(s,y,u,S*h,A),i.update(y,s,A))}function g(S,y,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,S,0,A);let M=0;for(let _=0;_<A;_++)M+=y[_];i.update(M,s,1)}function v(S,y,A,C){if(A===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)m(S[_]/h,y[_],C[_]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,u,S,0,C,0,A);let _=0;for(let P=0;P<A;P++)_+=y[P]*C[P];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function KE(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function QE(o,t,i){const s=new WeakMap,l=new Oe;function u(h,d,p){const m=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let S=s.get(d);if(S===void 0||S.count!==v){let w=function(){F.dispose(),s.delete(d),d.removeEventListener("dispose",w)};S!==void 0&&S.texture.dispose();const y=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],_=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let N=0;y===!0&&(N=1),A===!0&&(N=2),C===!0&&(N=3);let U=d.attributes.position.count*N,Z=1;U>t.maxTextureSize&&(Z=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const I=new Float32Array(U*Z*4*v),F=new e0(I,U,Z,v);F.type=Ki,F.needsUpdate=!0;const q=N*4;for(let R=0;R<v;R++){const H=M[R],rt=_[R],it=P[R],ct=U*Z*4*R;for(let pt=0;pt<H.count;pt++){const O=pt*q;y===!0&&(l.fromBufferAttribute(H,pt),I[ct+O+0]=l.x,I[ct+O+1]=l.y,I[ct+O+2]=l.z,I[ct+O+3]=0),A===!0&&(l.fromBufferAttribute(rt,pt),I[ct+O+4]=l.x,I[ct+O+5]=l.y,I[ct+O+6]=l.z,I[ct+O+7]=0),C===!0&&(l.fromBufferAttribute(it,pt),I[ct+O+8]=l.x,I[ct+O+9]=l.y,I[ct+O+10]=l.z,I[ct+O+11]=it.itemSize===4?l.w:1)}}S={count:v,texture:F,size:new Te(U,Z)},s.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let y=0;for(let C=0;C<m.length;C++)y+=m[C];const A=d.morphTargetsRelative?1:1-y;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function JE(o,t,i,s){let l=new WeakMap;function u(p){const m=s.render.frame,g=p.geometry,v=t.get(p,g);if(l.get(v)!==m&&(t.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return v}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:h}}const p0=new Bn,T_=new c0(1,1),m0=new e0,g0=new bS,_0=new id,b_=[],A_=[],R_=new Float32Array(16),C_=new Float32Array(9),w_=new Float32Array(4);function _r(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=b_[l];if(u===void 0&&(u=new Float32Array(l),b_[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function on(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function ln(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Sc(o,t){let i=A_[t];i===void 0&&(i=new Int32Array(t),A_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function $E(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function tT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;o.uniform2fv(this.addr,t),ln(i,t)}}function eT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(on(i,t))return;o.uniform3fv(this.addr,t),ln(i,t)}}function nT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;o.uniform4fv(this.addr,t),ln(i,t)}}function iT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(on(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),ln(i,t)}else{if(on(i,s))return;w_.set(s),o.uniformMatrix2fv(this.addr,!1,w_),ln(i,s)}}function aT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(on(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),ln(i,t)}else{if(on(i,s))return;C_.set(s),o.uniformMatrix3fv(this.addr,!1,C_),ln(i,s)}}function sT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(on(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),ln(i,t)}else{if(on(i,s))return;R_.set(s),o.uniformMatrix4fv(this.addr,!1,R_),ln(i,s)}}function rT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function oT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;o.uniform2iv(this.addr,t),ln(i,t)}}function lT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(on(i,t))return;o.uniform3iv(this.addr,t),ln(i,t)}}function cT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;o.uniform4iv(this.addr,t),ln(i,t)}}function uT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function fT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;o.uniform2uiv(this.addr,t),ln(i,t)}}function hT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(on(i,t))return;o.uniform3uiv(this.addr,t),ln(i,t)}}function dT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;o.uniform4uiv(this.addr,t),ln(i,t)}}function pT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(T_.compareFunction=$_,u=T_):u=p0,i.setTexture2D(t||u,l)}function mT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||g0,l)}function gT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||_0,l)}function _T(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||m0,l)}function vT(o){switch(o){case 5126:return $E;case 35664:return tT;case 35665:return eT;case 35666:return nT;case 35674:return iT;case 35675:return aT;case 35676:return sT;case 5124:case 35670:return rT;case 35667:case 35671:return oT;case 35668:case 35672:return lT;case 35669:case 35673:return cT;case 5125:return uT;case 36294:return fT;case 36295:return hT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return pT;case 35679:case 36299:case 36307:return mT;case 35680:case 36300:case 36308:case 36293:return gT;case 36289:case 36303:case 36311:case 36292:return _T}}function xT(o,t){o.uniform1fv(this.addr,t)}function ST(o,t){const i=_r(t,this.size,2);o.uniform2fv(this.addr,i)}function MT(o,t){const i=_r(t,this.size,3);o.uniform3fv(this.addr,i)}function yT(o,t){const i=_r(t,this.size,4);o.uniform4fv(this.addr,i)}function ET(o,t){const i=_r(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function TT(o,t){const i=_r(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function bT(o,t){const i=_r(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function AT(o,t){o.uniform1iv(this.addr,t)}function RT(o,t){o.uniform2iv(this.addr,t)}function CT(o,t){o.uniform3iv(this.addr,t)}function wT(o,t){o.uniform4iv(this.addr,t)}function DT(o,t){o.uniform1uiv(this.addr,t)}function UT(o,t){o.uniform2uiv(this.addr,t)}function LT(o,t){o.uniform3uiv(this.addr,t)}function NT(o,t){o.uniform4uiv(this.addr,t)}function OT(o,t,i){const s=this.cache,l=t.length,u=Sc(i,l);on(s,u)||(o.uniform1iv(this.addr,u),ln(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||p0,u[h])}function PT(o,t,i){const s=this.cache,l=t.length,u=Sc(i,l);on(s,u)||(o.uniform1iv(this.addr,u),ln(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||g0,u[h])}function BT(o,t,i){const s=this.cache,l=t.length,u=Sc(i,l);on(s,u)||(o.uniform1iv(this.addr,u),ln(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||_0,u[h])}function zT(o,t,i){const s=this.cache,l=t.length,u=Sc(i,l);on(s,u)||(o.uniform1iv(this.addr,u),ln(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||m0,u[h])}function IT(o){switch(o){case 5126:return xT;case 35664:return ST;case 35665:return MT;case 35666:return yT;case 35674:return ET;case 35675:return TT;case 35676:return bT;case 5124:case 35670:return AT;case 35667:case 35671:return RT;case 35668:case 35672:return CT;case 35669:case 35673:return wT;case 5125:return DT;case 36294:return UT;case 36295:return LT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return zT}}class FT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=vT(i.type)}}class HT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=IT(i.type)}}class GT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const ah=/(\w+)(\])?(\[|\.)?/g;function D_(o,t){o.seq.push(t),o.map[t.id]=t}function VT(o,t,i){const s=o.name,l=s.length;for(ah.lastIndex=0;;){const u=ah.exec(s),h=ah.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){D_(i,m===void 0?new FT(d,o,t):new HT(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new GT(d),D_(i,v)),i=v}}}class mc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);VT(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function U_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const kT=37297;let XT=0;function WT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const L_=new ie;function qT(o){Ee._getMatrix(L_,Ee.workingColorSpace,o);const t=`mat3( ${L_.elements.map(i=>i.toFixed(4))} )`;switch(Ee.getTransfer(o)){case gc:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function N_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+WT(o.getShaderSource(t),h)}else return l}function YT(o,t){const i=qT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function ZT(o,t){let i;switch(t){case Qx:i="Linear";break;case Jx:i="Reinhard";break;case $x:i="Cineon";break;case tS:i="ACESFilmic";break;case nS:i="AgX";break;case iS:i="Neutral";break;case eS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const lc=new K;function jT(){Ee.getLuminanceCoefficients(lc);const o=lc.x.toFixed(4),t=lc.y.toFixed(4),i=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function QT(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function JT(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function xo(o){return o!==""}function O_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function P_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $T=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(o){return o.replace($T,eb)}const tb=new Map;function eb(o,t){let i=ae[t];if(i===void 0){const s=tb.get(t);if(s!==void 0)i=ae[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return qh(i)}const nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B_(o){return o.replace(nb,ib)}function ib(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function z_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ab(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===G_?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Dx?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Zi&&(t="SHADOWMAP_TYPE_VSM"),t}function sb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case hr:case dr:t="ENVMAP_TYPE_CUBE";break;case vc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case dr:t="ENVMAP_MODE_REFRACTION";break}return t}function ob(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case V_:t="ENVMAP_BLENDING_MULTIPLY";break;case jx:t="ENVMAP_BLENDING_MIX";break;case Kx:t="ENVMAP_BLENDING_ADD";break}return t}function lb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function cb(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=ab(i),m=sb(i),g=rb(i),v=ob(i),S=lb(i),y=KT(i),A=QT(u),C=l.createProgram();let M,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(xo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(xo).join(`
`),_.length>0&&(_+=`
`)):(M=[z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),_=[z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Oa?"#define TONE_MAPPING":"",i.toneMapping!==Oa?ae.tonemapping_pars_fragment:"",i.toneMapping!==Oa?ZT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,YT("linearToOutputTexel",i.outputColorSpace),jT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(xo).join(`
`)),h=qh(h),h=O_(h,i),h=P_(h,i),d=qh(d),d=O_(d,i),d=P_(d,i),h=B_(h),d=B_(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=P+M+h,U=P+_+d,Z=U_(l,l.VERTEX_SHADER,N),I=U_(l,l.FRAGMENT_SHADER,U);l.attachShader(C,Z),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(H){if(o.debug.checkShaderErrors){const rt=l.getProgramInfoLog(C).trim(),it=l.getShaderInfoLog(Z).trim(),ct=l.getShaderInfoLog(I).trim();let pt=!0,O=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(pt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,Z,I);else{const Q=N_(l,Z,"vertex"),W=N_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+rt+`
`+Q+`
`+W)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(it===""||ct==="")&&(O=!1);O&&(H.diagnostics={runnable:pt,programLog:rt,vertexShader:{log:it,prefix:M},fragmentShader:{log:ct,prefix:_}})}l.deleteShader(Z),l.deleteShader(I),q=new mc(l,C),w=JT(l,C)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,kT)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=XT++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=Z,this.fragmentShader=I,this}let ub=0;class fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new hb(t),i.set(t,s)),s}}class hb{constructor(t){this.id=ub++,this.code=t,this.usedTimes=0}}function db(o,t,i,s,l,u,h){const d=new nd,p=new fb,m=new Set,g=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return m.add(w),w===0?"uv":`uv${w}`}function M(w,R,H,rt,it){const ct=rt.fog,pt=it.geometry,O=w.isMeshStandardMaterial?rt.environment:null,Q=(w.isMeshStandardMaterial?i:t).get(w.envMap||O),W=Q&&Q.mapping===vc?Q.image.height:null,gt=A[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const xt=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,Ut=xt!==void 0?xt.length:0;let zt=0;pt.morphAttributes.position!==void 0&&(zt=1),pt.morphAttributes.normal!==void 0&&(zt=2),pt.morphAttributes.color!==void 0&&(zt=3);let Ht,at,St,Lt;if(gt){const Se=vi[gt];Ht=Se.vertexShader,at=Se.fragmentShader}else Ht=w.vertexShader,at=w.fragmentShader,p.update(w),St=p.getVertexShaderID(w),Lt=p.getFragmentShaderID(w);const Et=o.getRenderTarget(),kt=o.state.buffers.depth.getReversed(),oe=it.isInstancedMesh===!0,Zt=it.isBatchedMesh===!0,Ie=!!w.map,Pe=!!w.matcap,le=!!Q,B=!!w.aoMap,Cn=!!w.lightMap,pe=!!w.bumpMap,ee=!!w.normalMap,Vt=!!w.displacementMap,Ce=!!w.emissiveMap,It=!!w.metalnessMap,D=!!w.roughnessMap,T=w.anisotropy>0,J=w.clearcoat>0,ft=w.dispersion>0,mt=w.iridescence>0,lt=w.sheen>0,Ct=w.transmission>0,Mt=T&&!!w.anisotropyMap,Bt=J&&!!w.clearcoatMap,Qt=J&&!!w.clearcoatNormalMap,vt=J&&!!w.clearcoatRoughnessMap,Ot=mt&&!!w.iridescenceMap,qt=mt&&!!w.iridescenceThicknessMap,jt=lt&&!!w.sheenColorMap,wt=lt&&!!w.sheenRoughnessMap,se=!!w.specularMap,te=!!w.specularColorMap,we=!!w.specularIntensityMap,G=Ct&&!!w.transmissionMap,At=Ct&&!!w.thicknessMap,st=!!w.gradientMap,ht=!!w.alphaMap,Dt=w.alphaTest>0,Rt=!!w.alphaHash,ne=!!w.extensions;let Fe=Oa;w.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Fe=o.toneMapping);const Qe={shaderID:gt,shaderType:w.type,shaderName:w.name,vertexShader:Ht,fragmentShader:at,defines:w.defines,customVertexShaderID:St,customFragmentShaderID:Lt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Zt,batchingColor:Zt&&it._colorsTexture!==null,instancing:oe,instancingColor:oe&&it.instanceColor!==null,instancingMorph:oe&&it.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Et===null?o.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:pr,alphaToCoverage:!!w.alphaToCoverage,map:Ie,matcap:Pe,envMap:le,envMapMode:le&&Q.mapping,envMapCubeUVHeight:W,aoMap:B,lightMap:Cn,bumpMap:pe,normalMap:ee,displacementMap:S&&Vt,emissiveMap:Ce,normalMapObjectSpace:ee&&w.normalMapType===oS,normalMapTangentSpace:ee&&w.normalMapType===J_,metalnessMap:It,roughnessMap:D,anisotropy:T,anisotropyMap:Mt,clearcoat:J,clearcoatMap:Bt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:vt,dispersion:ft,iridescence:mt,iridescenceMap:Ot,iridescenceThicknessMap:qt,sheen:lt,sheenColorMap:jt,sheenRoughnessMap:wt,specularMap:se,specularColorMap:te,specularIntensityMap:we,transmission:Ct,transmissionMap:G,thicknessMap:At,gradientMap:st,opaque:w.transparent===!1&&w.blending===cr&&w.alphaToCoverage===!1,alphaMap:ht,alphaTest:Dt,alphaHash:Rt,combine:w.combine,mapUv:Ie&&C(w.map.channel),aoMapUv:B&&C(w.aoMap.channel),lightMapUv:Cn&&C(w.lightMap.channel),bumpMapUv:pe&&C(w.bumpMap.channel),normalMapUv:ee&&C(w.normalMap.channel),displacementMapUv:Vt&&C(w.displacementMap.channel),emissiveMapUv:Ce&&C(w.emissiveMap.channel),metalnessMapUv:It&&C(w.metalnessMap.channel),roughnessMapUv:D&&C(w.roughnessMap.channel),anisotropyMapUv:Mt&&C(w.anisotropyMap.channel),clearcoatMapUv:Bt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:wt&&C(w.sheenRoughnessMap.channel),specularMapUv:se&&C(w.specularMap.channel),specularColorMapUv:te&&C(w.specularColorMap.channel),specularIntensityMapUv:we&&C(w.specularIntensityMap.channel),transmissionMapUv:G&&C(w.transmissionMap.channel),thicknessMapUv:At&&C(w.thicknessMap.channel),alphaMapUv:ht&&C(w.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(ee||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!pt.attributes.uv&&(Ie||ht),fog:!!ct,useFog:w.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:kt,skinning:it.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:zt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ie&&w.map.isVideoTexture===!0&&Ee.getTransfer(w.map.colorSpace)===Ne,decodeVideoTextureEmissive:Ce&&w.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(w.emissiveMap.colorSpace)===Ne,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ji,flipSided:w.side===Pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ne&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&w.extensions.multiDraw===!0||Zt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Qe.vertexUv1s=m.has(1),Qe.vertexUv2s=m.has(2),Qe.vertexUv3s=m.has(3),m.clear(),Qe}function _(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)R.push(H),R.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(P(R,w),N(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function P(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function N(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function U(w){const R=A[w.type];let H;if(R){const rt=vi[R];H=IS.clone(rt.uniforms)}else H=w.uniforms;return H}function Z(w,R){let H;for(let rt=0,it=g.length;rt<it;rt++){const ct=g[rt];if(ct.cacheKey===R){H=ct,++H.usedTimes;break}}return H===void 0&&(H=new cb(o,R,w,u),g.push(H)),H}function I(w){if(--w.usedTimes===0){const R=g.indexOf(w);g[R]=g[g.length-1],g.pop(),w.destroy()}}function F(w){p.remove(w)}function q(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:U,acquireProgram:Z,releaseProgram:I,releaseShaderCache:F,programs:g,dispose:q}}function pb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function mb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function I_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function F_(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(v,S,y,A,C,M){let _=o[t];return _===void 0?(_={id:v.id,object:v,geometry:S,material:y,groupOrder:A,renderOrder:v.renderOrder,z:C,group:M},o[t]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=y,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=C,_.group=M),t++,_}function d(v,S,y,A,C,M){const _=h(v,S,y,A,C,M);y.transmission>0?s.push(_):y.transparent===!0?l.push(_):i.push(_)}function p(v,S,y,A,C,M){const _=h(v,S,y,A,C,M);y.transmission>0?s.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function m(v,S){i.length>1&&i.sort(v||mb),s.length>1&&s.sort(S||I_),l.length>1&&l.sort(S||I_)}function g(){for(let v=t,S=o.length;v<S;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function gb(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new F_,o.set(s,[h])):l>=u.length?(h=new F_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function _b(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new ve};break;case"SpotLight":i={position:new K,direction:new K,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new ve,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":i={color:new ve,position:new K,halfWidth:new K,halfHeight:new K};break}return o[t.id]=i,i}}}function vb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let xb=0;function Sb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Mb(o){const t=new _b,i=vb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new K);const l=new K,u=new ke,h=new ke;function d(m){let g=0,v=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let y=0,A=0,C=0,M=0,_=0,P=0,N=0,U=0,Z=0,I=0,F=0;m.sort(Sb);for(let w=0,R=m.length;w<R;w++){const H=m[w],rt=H.color,it=H.intensity,ct=H.distance,pt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=rt.r*it,v+=rt.g*it,S+=rt.b*it;else if(H.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(H.sh.coefficients[O],it);F++}else if(H.isDirectionalLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Q=H.shadow,W=i.get(H);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,s.directionalShadow[y]=W,s.directionalShadowMap[y]=pt,s.directionalShadowMatrix[y]=H.shadow.matrix,P++}s.directional[y]=O,y++}else if(H.isSpotLight){const O=t.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(rt).multiplyScalar(it),O.distance=ct,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,s.spot[C]=O;const Q=H.shadow;if(H.map&&(s.spotLightMap[Z]=H.map,Z++,Q.updateMatrices(H),H.castShadow&&I++),s.spotLightMatrix[C]=Q.matrix,H.castShadow){const W=i.get(H);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,s.spotShadow[C]=W,s.spotShadowMap[C]=pt,U++}C++}else if(H.isRectAreaLight){const O=t.get(H);O.color.copy(rt).multiplyScalar(it),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=O,M++}else if(H.isPointLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const Q=H.shadow,W=i.get(H);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,s.pointShadow[A]=W,s.pointShadowMap[A]=pt,s.pointShadowMatrix[A]=H.shadow.matrix,N++}s.point[A]=O,A++}else if(H.isHemisphereLight){const O=t.get(H);O.skyColor.copy(H.color).multiplyScalar(it),O.groundColor.copy(H.groundColor).multiplyScalar(it),s.hemi[_]=O,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=bt.LTC_FLOAT_1,s.rectAreaLTC2=bt.LTC_FLOAT_2):(s.rectAreaLTC1=bt.LTC_HALF_1,s.rectAreaLTC2=bt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=S;const q=s.hash;(q.directionalLength!==y||q.pointLength!==A||q.spotLength!==C||q.rectAreaLength!==M||q.hemiLength!==_||q.numDirectionalShadows!==P||q.numPointShadows!==N||q.numSpotShadows!==U||q.numSpotMaps!==Z||q.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=M,s.point.length=A,s.hemi.length=_,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+Z-I,s.spotLightMap.length=Z,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=F,q.directionalLength=y,q.pointLength=A,q.spotLength=C,q.rectAreaLength=M,q.hemiLength=_,q.numDirectionalShadows=P,q.numPointShadows=N,q.numSpotShadows=U,q.numSpotMaps=Z,q.numLightProbes=F,s.version=xb++)}function p(m,g){let v=0,S=0,y=0,A=0,C=0;const M=g.matrixWorldInverse;for(let _=0,P=m.length;_<P;_++){const N=m[_];if(N.isDirectionalLight){const U=s.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),v++}else if(N.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const U=s.rectArea[A];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),h.identity(),u.copy(N.matrixWorld),u.premultiply(M),h.extractRotation(u),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),A++}else if(N.isPointLight){const U=s.point[S];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),S++}else if(N.isHemisphereLight){const U=s.hemi[C];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(M),C++}}}return{setup:d,setupView:p,state:s}}function H_(o){const t=new Mb(o),i=[],s=[];function l(g){m.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function yb(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new H_(o),t.set(l,[d])):u>=h.length?(d=new H_(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const Eb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bb(o,t,i){let s=new ad;const l=new Te,u=new Te,h=new Oe,d=new YS({depthPacking:rS}),p=new ZS,m={},g=i.maxTextureSize,v={[Pa]:Pn,[Pn]:Pa,[ji]:ji},S=new Ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Eb,fragmentShader:Tb}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const A=new za;A.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ji(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=G_;let _=this.type;this.render=function(I,F,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),rt=o.state;rt.setBlending(Na),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const it=_!==Zi&&this.type===Zi,ct=_===Zi&&this.type!==Zi;for(let pt=0,O=I.length;pt<O;pt++){const Q=I[pt],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const gt=W.getFrameExtents();if(l.multiply(gt),u.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/gt.x),l.x=u.x*gt.x,W.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/gt.y),l.y=u.y*gt.y,W.mapSize.y=u.y)),W.map===null||it===!0||ct===!0){const Ut=this.type!==Zi?{minFilter:fi,magFilter:fi}:{};W.map!==null&&W.map.dispose(),W.map=new gs(l.x,l.y,Ut),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const xt=W.getViewportCount();for(let Ut=0;Ut<xt;Ut++){const zt=W.getViewport(Ut);h.set(u.x*zt.x,u.y*zt.y,u.x*zt.z,u.y*zt.w),rt.viewport(h),W.updateMatrices(Q,Ut),s=W.getFrustum(),U(F,q,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===Zi&&P(W,q),W.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(w,R,H)};function P(I,F){const q=t.update(C);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new gs(l.x,l.y)),S.uniforms.shadow_pass.value=I.map.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(F,null,q,S,C,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(F,null,q,y,C,null)}function N(I,F,q,w){let R=null;const H=q.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)R=H;else if(R=q.isPointLight===!0?p:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const rt=R.uuid,it=F.uuid;let ct=m[rt];ct===void 0&&(ct={},m[rt]=ct);let pt=ct[it];pt===void 0&&(pt=R.clone(),ct[it]=pt,F.addEventListener("dispose",Z)),R=pt}if(R.visible=F.visible,R.wireframe=F.wireframe,w===Zi?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:v[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const rt=o.properties.get(R);rt.light=q}return R}function U(I,F,q,w,R){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===Zi)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,I.matrixWorld);const it=t.update(I),ct=I.material;if(Array.isArray(ct)){const pt=it.groups;for(let O=0,Q=pt.length;O<Q;O++){const W=pt[O],gt=ct[W.materialIndex];if(gt&&gt.visible){const xt=N(I,gt,w,R);I.onBeforeShadow(o,I,F,q,it,xt,W),o.renderBufferDirect(q,null,it,xt,I,W),I.onAfterShadow(o,I,F,q,it,xt,W)}}}else if(ct.visible){const pt=N(I,ct,w,R);I.onBeforeShadow(o,I,F,q,it,pt,null),o.renderBufferDirect(q,null,it,pt,I,null),I.onAfterShadow(o,I,F,q,it,pt,null)}}const rt=I.children;for(let it=0,ct=rt.length;it<ct;it++)U(rt[it],F,q,w,R)}function Z(I){I.target.removeEventListener("dispose",Z);for(const q in m){const w=m[q],R=I.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const Ab={[oh]:lh,[ch]:hh,[uh]:dh,[fr]:fh,[lh]:oh,[hh]:ch,[dh]:uh,[fh]:fr};function Rb(o,t){function i(){let G=!1;const At=new Oe;let st=null;const ht=new Oe(0,0,0,0);return{setMask:function(Dt){st!==Dt&&!G&&(o.colorMask(Dt,Dt,Dt,Dt),st=Dt)},setLocked:function(Dt){G=Dt},setClear:function(Dt,Rt,ne,Fe,Qe){Qe===!0&&(Dt*=Fe,Rt*=Fe,ne*=Fe),At.set(Dt,Rt,ne,Fe),ht.equals(At)===!1&&(o.clearColor(Dt,Rt,ne,Fe),ht.copy(At))},reset:function(){G=!1,st=null,ht.set(-1,0,0,0)}}}function s(){let G=!1,At=!1,st=null,ht=null,Dt=null;return{setReversed:function(Rt){if(At!==Rt){const ne=t.get("EXT_clip_control");Rt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),At=Rt;const Fe=Dt;Dt=null,this.setClear(Fe)}},getReversed:function(){return At},setTest:function(Rt){Rt?Et(o.DEPTH_TEST):kt(o.DEPTH_TEST)},setMask:function(Rt){st!==Rt&&!G&&(o.depthMask(Rt),st=Rt)},setFunc:function(Rt){if(At&&(Rt=Ab[Rt]),ht!==Rt){switch(Rt){case oh:o.depthFunc(o.NEVER);break;case lh:o.depthFunc(o.ALWAYS);break;case ch:o.depthFunc(o.LESS);break;case fr:o.depthFunc(o.LEQUAL);break;case uh:o.depthFunc(o.EQUAL);break;case fh:o.depthFunc(o.GEQUAL);break;case hh:o.depthFunc(o.GREATER);break;case dh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ht=Rt}},setLocked:function(Rt){G=Rt},setClear:function(Rt){Dt!==Rt&&(At&&(Rt=1-Rt),o.clearDepth(Rt),Dt=Rt)},reset:function(){G=!1,st=null,ht=null,Dt=null,At=!1}}}function l(){let G=!1,At=null,st=null,ht=null,Dt=null,Rt=null,ne=null,Fe=null,Qe=null;return{setTest:function(Se){G||(Se?Et(o.STENCIL_TEST):kt(o.STENCIL_TEST))},setMask:function(Se){At!==Se&&!G&&(o.stencilMask(Se),At=Se)},setFunc:function(Se,zn,cn){(st!==Se||ht!==zn||Dt!==cn)&&(o.stencilFunc(Se,zn,cn),st=Se,ht=zn,Dt=cn)},setOp:function(Se,zn,cn){(Rt!==Se||ne!==zn||Fe!==cn)&&(o.stencilOp(Se,zn,cn),Rt=Se,ne=zn,Fe=cn)},setLocked:function(Se){G=Se},setClear:function(Se){Qe!==Se&&(o.clearStencil(Se),Qe=Se)},reset:function(){G=!1,At=null,st=null,ht=null,Dt=null,Rt=null,ne=null,Fe=null,Qe=null}}}const u=new i,h=new s,d=new l,p=new WeakMap,m=new WeakMap;let g={},v={},S=new WeakMap,y=[],A=null,C=!1,M=null,_=null,P=null,N=null,U=null,Z=null,I=null,F=new ve(0,0,0),q=0,w=!1,R=null,H=null,rt=null,it=null,ct=null;const pt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Q=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=Q>=2);let gt=null,xt={};const Ut=o.getParameter(o.SCISSOR_BOX),zt=o.getParameter(o.VIEWPORT),Ht=new Oe().fromArray(Ut),at=new Oe().fromArray(zt);function St(G,At,st,ht){const Dt=new Uint8Array(4),Rt=o.createTexture();o.bindTexture(G,Rt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ne=0;ne<st;ne++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,ht,0,o.RGBA,o.UNSIGNED_BYTE,Dt):o.texImage2D(At+ne,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Dt);return Rt}const Lt={};Lt[o.TEXTURE_2D]=St(o.TEXTURE_2D,o.TEXTURE_2D,1),Lt[o.TEXTURE_CUBE_MAP]=St(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[o.TEXTURE_2D_ARRAY]=St(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Lt[o.TEXTURE_3D]=St(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Et(o.DEPTH_TEST),h.setFunc(fr),pe(!1),ee(Hg),Et(o.CULL_FACE),B(Na);function Et(G){g[G]!==!0&&(o.enable(G),g[G]=!0)}function kt(G){g[G]!==!1&&(o.disable(G),g[G]=!1)}function oe(G,At){return v[G]!==At?(o.bindFramebuffer(G,At),v[G]=At,G===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=At),G===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=At),!0):!1}function Zt(G,At){let st=y,ht=!1;if(G){st=S.get(At),st===void 0&&(st=[],S.set(At,st));const Dt=G.textures;if(st.length!==Dt.length||st[0]!==o.COLOR_ATTACHMENT0){for(let Rt=0,ne=Dt.length;Rt<ne;Rt++)st[Rt]=o.COLOR_ATTACHMENT0+Rt;st.length=Dt.length,ht=!0}}else st[0]!==o.BACK&&(st[0]=o.BACK,ht=!0);ht&&o.drawBuffers(st)}function Ie(G){return A!==G?(o.useProgram(G),A=G,!0):!1}const Pe={[fs]:o.FUNC_ADD,[Lx]:o.FUNC_SUBTRACT,[Nx]:o.FUNC_REVERSE_SUBTRACT};Pe[Ox]=o.MIN,Pe[Px]=o.MAX;const le={[Bx]:o.ZERO,[zx]:o.ONE,[Ix]:o.SRC_COLOR,[sh]:o.SRC_ALPHA,[Xx]:o.SRC_ALPHA_SATURATE,[Vx]:o.DST_COLOR,[Hx]:o.DST_ALPHA,[Fx]:o.ONE_MINUS_SRC_COLOR,[rh]:o.ONE_MINUS_SRC_ALPHA,[kx]:o.ONE_MINUS_DST_COLOR,[Gx]:o.ONE_MINUS_DST_ALPHA,[Wx]:o.CONSTANT_COLOR,[qx]:o.ONE_MINUS_CONSTANT_COLOR,[Yx]:o.CONSTANT_ALPHA,[Zx]:o.ONE_MINUS_CONSTANT_ALPHA};function B(G,At,st,ht,Dt,Rt,ne,Fe,Qe,Se){if(G===Na){C===!0&&(kt(o.BLEND),C=!1);return}if(C===!1&&(Et(o.BLEND),C=!0),G!==Ux){if(G!==M||Se!==w){if((_!==fs||U!==fs)&&(o.blendEquation(o.FUNC_ADD),_=fs,U=fs),Se)switch(G){case cr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Gg:o.blendFunc(o.ONE,o.ONE);break;case Vg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case kg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case cr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Gg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Vg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case kg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}P=null,N=null,Z=null,I=null,F.set(0,0,0),q=0,M=G,w=Se}return}Dt=Dt||At,Rt=Rt||st,ne=ne||ht,(At!==_||Dt!==U)&&(o.blendEquationSeparate(Pe[At],Pe[Dt]),_=At,U=Dt),(st!==P||ht!==N||Rt!==Z||ne!==I)&&(o.blendFuncSeparate(le[st],le[ht],le[Rt],le[ne]),P=st,N=ht,Z=Rt,I=ne),(Fe.equals(F)===!1||Qe!==q)&&(o.blendColor(Fe.r,Fe.g,Fe.b,Qe),F.copy(Fe),q=Qe),M=G,w=!1}function Cn(G,At){G.side===ji?kt(o.CULL_FACE):Et(o.CULL_FACE);let st=G.side===Pn;At&&(st=!st),pe(st),G.blending===cr&&G.transparent===!1?B(Na):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),u.setMask(G.colorWrite);const ht=G.stencilWrite;d.setTest(ht),ht&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ce(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Et(o.SAMPLE_ALPHA_TO_COVERAGE):kt(o.SAMPLE_ALPHA_TO_COVERAGE)}function pe(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function ee(G){G!==Cx?(Et(o.CULL_FACE),G!==H&&(G===Hg?o.cullFace(o.BACK):G===wx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):kt(o.CULL_FACE),H=G}function Vt(G){G!==rt&&(O&&o.lineWidth(G),rt=G)}function Ce(G,At,st){G?(Et(o.POLYGON_OFFSET_FILL),(it!==At||ct!==st)&&(o.polygonOffset(At,st),it=At,ct=st)):kt(o.POLYGON_OFFSET_FILL)}function It(G){G?Et(o.SCISSOR_TEST):kt(o.SCISSOR_TEST)}function D(G){G===void 0&&(G=o.TEXTURE0+pt-1),gt!==G&&(o.activeTexture(G),gt=G)}function T(G,At,st){st===void 0&&(gt===null?st=o.TEXTURE0+pt-1:st=gt);let ht=xt[st];ht===void 0&&(ht={type:void 0,texture:void 0},xt[st]=ht),(ht.type!==G||ht.texture!==At)&&(gt!==st&&(o.activeTexture(st),gt=st),o.bindTexture(G,At||Lt[G]),ht.type=G,ht.texture=At)}function J(){const G=xt[gt];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ft(){try{o.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{o.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{o.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ct(){try{o.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Mt(){try{o.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Bt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qt(){try{o.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{o.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ot(){try{o.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qt(){try{o.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(G){Ht.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),Ht.copy(G))}function wt(G){at.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),at.copy(G))}function se(G,At){let st=m.get(At);st===void 0&&(st=new WeakMap,m.set(At,st));let ht=st.get(G);ht===void 0&&(ht=o.getUniformBlockIndex(At,G.name),st.set(G,ht))}function te(G,At){const ht=m.get(At).get(G);p.get(At)!==ht&&(o.uniformBlockBinding(At,ht,G.__bindingPointIndex),p.set(At,ht))}function we(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},gt=null,xt={},v={},S=new WeakMap,y=[],A=null,C=!1,M=null,_=null,P=null,N=null,U=null,Z=null,I=null,F=new ve(0,0,0),q=0,w=!1,R=null,H=null,rt=null,it=null,ct=null,Ht.set(0,0,o.canvas.width,o.canvas.height),at.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Et,disable:kt,bindFramebuffer:oe,drawBuffers:Zt,useProgram:Ie,setBlending:B,setMaterial:Cn,setFlipSided:pe,setCullFace:ee,setLineWidth:Vt,setPolygonOffset:Ce,setScissorTest:It,activeTexture:D,bindTexture:T,unbindTexture:J,compressedTexImage2D:ft,compressedTexImage3D:mt,texImage2D:Ot,texImage3D:qt,updateUBOMapping:se,uniformBlockBinding:te,texStorage2D:Qt,texStorage3D:vt,texSubImage2D:lt,texSubImage3D:Ct,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Bt,scissor:jt,viewport:wt,reset:we}}function Cb(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Te,g=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,T){return y?new OffscreenCanvas(D,T):To("canvas")}function C(D,T,J){let ft=1;const mt=It(D);if((mt.width>J||mt.height>J)&&(ft=J/Math.max(mt.width,mt.height)),ft<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const lt=Math.floor(ft*mt.width),Ct=Math.floor(ft*mt.height);v===void 0&&(v=A(lt,Ct));const Mt=T?A(lt,Ct):v;return Mt.width=lt,Mt.height=Ct,Mt.getContext("2d").drawImage(D,0,0,lt,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+lt+"x"+Ct+")."),Mt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),D;return D}function M(D){return D.generateMipmaps}function _(D){o.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(D,T,J,ft,mt=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let lt=T;if(T===o.RED&&(J===o.FLOAT&&(lt=o.R32F),J===o.HALF_FLOAT&&(lt=o.R16F),J===o.UNSIGNED_BYTE&&(lt=o.R8)),T===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(lt=o.R8UI),J===o.UNSIGNED_SHORT&&(lt=o.R16UI),J===o.UNSIGNED_INT&&(lt=o.R32UI),J===o.BYTE&&(lt=o.R8I),J===o.SHORT&&(lt=o.R16I),J===o.INT&&(lt=o.R32I)),T===o.RG&&(J===o.FLOAT&&(lt=o.RG32F),J===o.HALF_FLOAT&&(lt=o.RG16F),J===o.UNSIGNED_BYTE&&(lt=o.RG8)),T===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(lt=o.RG8UI),J===o.UNSIGNED_SHORT&&(lt=o.RG16UI),J===o.UNSIGNED_INT&&(lt=o.RG32UI),J===o.BYTE&&(lt=o.RG8I),J===o.SHORT&&(lt=o.RG16I),J===o.INT&&(lt=o.RG32I)),T===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),J===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),J===o.UNSIGNED_INT&&(lt=o.RGB32UI),J===o.BYTE&&(lt=o.RGB8I),J===o.SHORT&&(lt=o.RGB16I),J===o.INT&&(lt=o.RGB32I)),T===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),J===o.UNSIGNED_INT&&(lt=o.RGBA32UI),J===o.BYTE&&(lt=o.RGBA8I),J===o.SHORT&&(lt=o.RGBA16I),J===o.INT&&(lt=o.RGBA32I)),T===o.RGB&&J===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),T===o.RGBA){const Ct=mt?gc:Ee.getTransfer(ft);J===o.FLOAT&&(lt=o.RGBA32F),J===o.HALF_FLOAT&&(lt=o.RGBA16F),J===o.UNSIGNED_BYTE&&(lt=Ct===Ne?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function U(D,T){let J;return D?T===null||T===ms||T===Mo?J=o.DEPTH24_STENCIL8:T===Ki?J=o.DEPTH32F_STENCIL8:T===So&&(J=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ms||T===Mo?J=o.DEPTH_COMPONENT24:T===Ki?J=o.DEPTH_COMPONENT32F:T===So&&(J=o.DEPTH_COMPONENT16),J}function Z(D,T){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==fi&&D.minFilter!==xi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function I(D){const T=D.target;T.removeEventListener("dispose",I),q(T),T.isVideoTexture&&g.delete(T)}function F(D){const T=D.target;T.removeEventListener("dispose",F),R(T)}function q(D){const T=s.get(D);if(T.__webglInit===void 0)return;const J=D.source,ft=S.get(J);if(ft){const mt=ft[T.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&w(D),Object.keys(ft).length===0&&S.delete(J)}s.remove(D)}function w(D){const T=s.get(D);o.deleteTexture(T.__webglTexture);const J=D.source,ft=S.get(J);delete ft[T.__cacheKey],h.memory.textures--}function R(D){const T=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let mt=0;mt<T.__webglFramebuffer[ft].length;mt++)o.deleteFramebuffer(T.__webglFramebuffer[ft][mt]);else o.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)o.deleteFramebuffer(T.__webglFramebuffer[ft]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=D.textures;for(let ft=0,mt=J.length;ft<mt;ft++){const lt=s.get(J[ft]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),s.remove(J[ft])}s.remove(D)}let H=0;function rt(){H=0}function it(){const D=H;return D>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),H+=1,D}function ct(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function pt(D,T){const J=s.get(D);if(D.isVideoTexture&&Vt(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){const ft=D.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(J,D,T);return}}i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+T)}function O(D,T){const J=s.get(D);if(D.version>0&&J.__version!==D.version){at(J,D,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+T)}function Q(D,T){const J=s.get(D);if(D.version>0&&J.__version!==D.version){at(J,D,T);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+T)}function W(D,T){const J=s.get(D);if(D.version>0&&J.__version!==D.version){St(J,D,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+T)}const gt={[gh]:o.REPEAT,[ds]:o.CLAMP_TO_EDGE,[_h]:o.MIRRORED_REPEAT},xt={[fi]:o.NEAREST,[aS]:o.NEAREST_MIPMAP_NEAREST,[Gl]:o.NEAREST_MIPMAP_LINEAR,[xi]:o.LINEAR,[Rf]:o.LINEAR_MIPMAP_NEAREST,[ps]:o.LINEAR_MIPMAP_LINEAR},Ut={[lS]:o.NEVER,[pS]:o.ALWAYS,[cS]:o.LESS,[$_]:o.LEQUAL,[uS]:o.EQUAL,[dS]:o.GEQUAL,[fS]:o.GREATER,[hS]:o.NOTEQUAL};function zt(D,T){if(T.type===Ki&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===xi||T.magFilter===Rf||T.magFilter===Gl||T.magFilter===ps||T.minFilter===xi||T.minFilter===Rf||T.minFilter===Gl||T.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,gt[T.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,gt[T.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,gt[T.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,xt[T.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,Ut[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fi||T.minFilter!==Gl&&T.minFilter!==ps||T.type===Ki&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Ht(D,T){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",I));const ft=T.source;let mt=S.get(ft);mt===void 0&&(mt={},S.set(ft,mt));const lt=ct(T);if(lt!==D.__cacheKey){mt[lt]===void 0&&(mt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,J=!0),mt[lt].usedTimes++;const Ct=mt[D.__cacheKey];Ct!==void 0&&(mt[D.__cacheKey].usedTimes--,Ct.usedTimes===0&&w(T)),D.__cacheKey=lt,D.__webglTexture=mt[lt].texture}return J}function at(D,T,J){let ft=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=o.TEXTURE_3D);const mt=Ht(D,T),lt=T.source;i.bindTexture(ft,D.__webglTexture,o.TEXTURE0+J);const Ct=s.get(lt);if(lt.version!==Ct.__version||mt===!0){i.activeTexture(o.TEXTURE0+J);const Mt=Ee.getPrimaries(Ee.workingColorSpace),Bt=T.colorSpace===La?null:Ee.getPrimaries(T.colorSpace),Qt=T.colorSpace===La||Mt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let vt=C(T.image,!1,l.maxTextureSize);vt=Ce(T,vt);const Ot=u.convert(T.format,T.colorSpace),qt=u.convert(T.type);let jt=N(T.internalFormat,Ot,qt,T.colorSpace,T.isVideoTexture);zt(ft,T);let wt;const se=T.mipmaps,te=T.isVideoTexture!==!0,we=Ct.__version===void 0||mt===!0,G=lt.dataReady,At=Z(T,vt);if(T.isDepthTexture)jt=U(T.format===Eo,T.type),we&&(te?i.texStorage2D(o.TEXTURE_2D,1,jt,vt.width,vt.height):i.texImage2D(o.TEXTURE_2D,0,jt,vt.width,vt.height,0,Ot,qt,null));else if(T.isDataTexture)if(se.length>0){te&&we&&i.texStorage2D(o.TEXTURE_2D,At,jt,se[0].width,se[0].height);for(let st=0,ht=se.length;st<ht;st++)wt=se[st],te?G&&i.texSubImage2D(o.TEXTURE_2D,st,0,0,wt.width,wt.height,Ot,qt,wt.data):i.texImage2D(o.TEXTURE_2D,st,jt,wt.width,wt.height,0,Ot,qt,wt.data);T.generateMipmaps=!1}else te?(we&&i.texStorage2D(o.TEXTURE_2D,At,jt,vt.width,vt.height),G&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,vt.width,vt.height,Ot,qt,vt.data)):i.texImage2D(o.TEXTURE_2D,0,jt,vt.width,vt.height,0,Ot,qt,vt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){te&&we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,jt,se[0].width,se[0].height,vt.depth);for(let st=0,ht=se.length;st<ht;st++)if(wt=se[st],T.format!==ui)if(Ot!==null)if(te){if(G)if(T.layerUpdates.size>0){const Dt=g_(wt.width,wt.height,T.format,T.type);for(const Rt of T.layerUpdates){const ne=wt.data.subarray(Rt*Dt/wt.data.BYTES_PER_ELEMENT,(Rt+1)*Dt/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,st,0,0,Rt,wt.width,wt.height,1,Ot,ne)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,st,0,0,0,wt.width,wt.height,vt.depth,Ot,wt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,st,jt,wt.width,wt.height,vt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?G&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,st,0,0,0,wt.width,wt.height,vt.depth,Ot,qt,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,st,jt,wt.width,wt.height,vt.depth,0,Ot,qt,wt.data)}else{te&&we&&i.texStorage2D(o.TEXTURE_2D,At,jt,se[0].width,se[0].height);for(let st=0,ht=se.length;st<ht;st++)wt=se[st],T.format!==ui?Ot!==null?te?G&&i.compressedTexSubImage2D(o.TEXTURE_2D,st,0,0,wt.width,wt.height,Ot,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,st,jt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?G&&i.texSubImage2D(o.TEXTURE_2D,st,0,0,wt.width,wt.height,Ot,qt,wt.data):i.texImage2D(o.TEXTURE_2D,st,jt,wt.width,wt.height,0,Ot,qt,wt.data)}else if(T.isDataArrayTexture)if(te){if(we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,At,jt,vt.width,vt.height,vt.depth),G)if(T.layerUpdates.size>0){const st=g_(vt.width,vt.height,T.format,T.type);for(const ht of T.layerUpdates){const Dt=vt.data.subarray(ht*st/vt.data.BYTES_PER_ELEMENT,(ht+1)*st/vt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ht,vt.width,vt.height,1,Ot,qt,Dt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Ot,qt,vt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,vt.width,vt.height,vt.depth,0,Ot,qt,vt.data);else if(T.isData3DTexture)te?(we&&i.texStorage3D(o.TEXTURE_3D,At,jt,vt.width,vt.height,vt.depth),G&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Ot,qt,vt.data)):i.texImage3D(o.TEXTURE_3D,0,jt,vt.width,vt.height,vt.depth,0,Ot,qt,vt.data);else if(T.isFramebufferTexture){if(we)if(te)i.texStorage2D(o.TEXTURE_2D,At,jt,vt.width,vt.height);else{let st=vt.width,ht=vt.height;for(let Dt=0;Dt<At;Dt++)i.texImage2D(o.TEXTURE_2D,Dt,jt,st,ht,0,Ot,qt,null),st>>=1,ht>>=1}}else if(se.length>0){if(te&&we){const st=It(se[0]);i.texStorage2D(o.TEXTURE_2D,At,jt,st.width,st.height)}for(let st=0,ht=se.length;st<ht;st++)wt=se[st],te?G&&i.texSubImage2D(o.TEXTURE_2D,st,0,0,Ot,qt,wt):i.texImage2D(o.TEXTURE_2D,st,jt,Ot,qt,wt);T.generateMipmaps=!1}else if(te){if(we){const st=It(vt);i.texStorage2D(o.TEXTURE_2D,At,jt,st.width,st.height)}G&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,qt,vt)}else i.texImage2D(o.TEXTURE_2D,0,jt,Ot,qt,vt);M(T)&&_(ft),Ct.__version=lt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function St(D,T,J){if(T.image.length!==6)return;const ft=Ht(D,T),mt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+J);const lt=s.get(mt);if(mt.version!==lt.__version||ft===!0){i.activeTexture(o.TEXTURE0+J);const Ct=Ee.getPrimaries(Ee.workingColorSpace),Mt=T.colorSpace===La?null:Ee.getPrimaries(T.colorSpace),Bt=T.colorSpace===La||Ct===Mt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const Qt=T.isCompressedTexture||T.image[0].isCompressedTexture,vt=T.image[0]&&T.image[0].isDataTexture,Ot=[];for(let ht=0;ht<6;ht++)!Qt&&!vt?Ot[ht]=C(T.image[ht],!0,l.maxCubemapSize):Ot[ht]=vt?T.image[ht].image:T.image[ht],Ot[ht]=Ce(T,Ot[ht]);const qt=Ot[0],jt=u.convert(T.format,T.colorSpace),wt=u.convert(T.type),se=N(T.internalFormat,jt,wt,T.colorSpace),te=T.isVideoTexture!==!0,we=lt.__version===void 0||ft===!0,G=mt.dataReady;let At=Z(T,qt);zt(o.TEXTURE_CUBE_MAP,T);let st;if(Qt){te&&we&&i.texStorage2D(o.TEXTURE_CUBE_MAP,At,se,qt.width,qt.height);for(let ht=0;ht<6;ht++){st=Ot[ht].mipmaps;for(let Dt=0;Dt<st.length;Dt++){const Rt=st[Dt];T.format!==ui?jt!==null?te?G&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt,0,0,Rt.width,Rt.height,jt,Rt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt,se,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt,0,0,Rt.width,Rt.height,jt,wt,Rt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt,se,Rt.width,Rt.height,0,jt,wt,Rt.data)}}}else{if(st=T.mipmaps,te&&we){st.length>0&&At++;const ht=It(Ot[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,At,se,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(vt){te?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ot[ht].width,Ot[ht].height,jt,wt,Ot[ht].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,se,Ot[ht].width,Ot[ht].height,0,jt,wt,Ot[ht].data);for(let Dt=0;Dt<st.length;Dt++){const ne=st[Dt].image[ht].image;te?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt+1,0,0,ne.width,ne.height,jt,wt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt+1,se,ne.width,ne.height,0,jt,wt,ne.data)}}else{te?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,jt,wt,Ot[ht]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,se,jt,wt,Ot[ht]);for(let Dt=0;Dt<st.length;Dt++){const Rt=st[Dt];te?G&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt+1,0,0,jt,wt,Rt.image[ht]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Dt+1,se,jt,wt,Rt.image[ht])}}}M(T)&&_(o.TEXTURE_CUBE_MAP),lt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Lt(D,T,J,ft,mt,lt){const Ct=u.convert(J.format,J.colorSpace),Mt=u.convert(J.type),Bt=N(J.internalFormat,Ct,Mt,J.colorSpace),Qt=s.get(T),vt=s.get(J);if(vt.__renderTarget=T,!Qt.__hasExternalTextures){const Ot=Math.max(1,T.width>>lt),qt=Math.max(1,T.height>>lt);mt===o.TEXTURE_3D||mt===o.TEXTURE_2D_ARRAY?i.texImage3D(mt,lt,Bt,Ot,qt,T.depth,0,Ct,Mt,null):i.texImage2D(mt,lt,Bt,Ot,qt,0,Ct,Mt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),ee(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,mt,vt.__webglTexture,0,pe(T)):(mt===o.TEXTURE_2D||mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,mt,vt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Et(D,T,J){if(o.bindRenderbuffer(o.RENDERBUFFER,D),T.depthBuffer){const ft=T.depthTexture,mt=ft&&ft.isDepthTexture?ft.type:null,lt=U(T.stencilBuffer,mt),Ct=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=pe(T);ee(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Mt,lt,T.width,T.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Mt,lt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,lt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ct,o.RENDERBUFFER,D)}else{const ft=T.textures;for(let mt=0;mt<ft.length;mt++){const lt=ft[mt],Ct=u.convert(lt.format,lt.colorSpace),Mt=u.convert(lt.type),Bt=N(lt.internalFormat,Ct,Mt,lt.colorSpace),Qt=pe(T);J&&ee(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,Bt,T.width,T.height):ee(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Qt,Bt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Bt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function kt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(T.depthTexture);ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pt(T.depthTexture,0);const mt=ft.__webglTexture,lt=pe(T);if(T.depthTexture.format===yo)ee(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,mt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,mt,0);else if(T.depthTexture.format===Eo)ee(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,mt,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function oe(D){const T=s.get(D),J=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const ft=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){const mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",mt)};ft.addEventListener("dispose",mt),T.__depthDisposeCallback=mt}T.__boundDepthTexture=ft}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const ft=D.texture.mipmaps;ft&&ft.length>0?kt(T.__webglFramebuffer[0],D):kt(T.__webglFramebuffer,D)}else if(J){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=o.createRenderbuffer(),Et(T.__webglDepthbuffer[ft],D,!1);else{const mt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,lt)}}else{const ft=D.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Et(T.__webglDepthbuffer,D,!1);else{const mt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(D,T,J){const ft=s.get(D);T!==void 0&&Lt(ft.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&oe(D)}function Ie(D){const T=D.texture,J=s.get(D),ft=s.get(T);D.addEventListener("dispose",F);const mt=D.textures,lt=D.isWebGLCubeRenderTarget===!0,Ct=mt.length>1;if(Ct||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=T.version,h.memory.textures++),lt){J.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[Mt]=[];for(let Bt=0;Bt<T.mipmaps.length;Bt++)J.__webglFramebuffer[Mt][Bt]=o.createFramebuffer()}else J.__webglFramebuffer[Mt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let Mt=0;Mt<T.mipmaps.length;Mt++)J.__webglFramebuffer[Mt]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Ct)for(let Mt=0,Bt=mt.length;Mt<Bt;Mt++){const Qt=s.get(mt[Mt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&ee(D)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Mt=0;Mt<mt.length;Mt++){const Bt=mt[Mt];J.__webglColorRenderbuffer[Mt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[Mt]);const Qt=u.convert(Bt.format,Bt.colorSpace),vt=u.convert(Bt.type),Ot=N(Bt.internalFormat,Qt,vt,Bt.colorSpace,D.isXRRenderTarget===!0),qt=pe(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Ot,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Mt,o.RENDERBUFFER,J.__webglColorRenderbuffer[Mt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Et(J.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),zt(o.TEXTURE_CUBE_MAP,T);for(let Mt=0;Mt<6;Mt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)Lt(J.__webglFramebuffer[Mt][Bt],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Bt);else Lt(J.__webglFramebuffer[Mt],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);M(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ct){for(let Mt=0,Bt=mt.length;Mt<Bt;Mt++){const Qt=mt[Mt],vt=s.get(Qt);i.bindTexture(o.TEXTURE_2D,vt.__webglTexture),zt(o.TEXTURE_2D,Qt),Lt(J.__webglFramebuffer,D,Qt,o.COLOR_ATTACHMENT0+Mt,o.TEXTURE_2D,0),M(Qt)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Mt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Mt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Mt,ft.__webglTexture),zt(Mt,T),T.mipmaps&&T.mipmaps.length>0)for(let Bt=0;Bt<T.mipmaps.length;Bt++)Lt(J.__webglFramebuffer[Bt],D,T,o.COLOR_ATTACHMENT0,Mt,Bt);else Lt(J.__webglFramebuffer,D,T,o.COLOR_ATTACHMENT0,Mt,0);M(T)&&_(Mt),i.unbindTexture()}D.depthBuffer&&oe(D)}function Pe(D){const T=D.textures;for(let J=0,ft=T.length;J<ft;J++){const mt=T[J];if(M(mt)){const lt=P(D),Ct=s.get(mt).__webglTexture;i.bindTexture(lt,Ct),_(lt),i.unbindTexture()}}}const le=[],B=[];function Cn(D){if(D.samples>0){if(ee(D)===!1){const T=D.textures,J=D.width,ft=D.height;let mt=o.COLOR_BUFFER_BIT;const lt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=s.get(D),Mt=T.length>1;if(Mt)for(let Qt=0;Qt<T.length;Qt++)i.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const Bt=D.texture.mipmaps;Bt&&Bt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Qt=0;Qt<T.length;Qt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(mt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(mt|=o.STENCIL_BUFFER_BIT)),Mt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ct.__webglColorRenderbuffer[Qt]);const vt=s.get(T[Qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,vt,0)}o.blitFramebuffer(0,0,J,ft,0,0,J,ft,mt,o.NEAREST),p===!0&&(le.length=0,B.length=0,le.push(o.COLOR_ATTACHMENT0+Qt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(le.push(lt),B.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,B)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,le))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Mt)for(let Qt=0;Qt<T.length;Qt++){i.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,Ct.__webglColorRenderbuffer[Qt]);const vt=s.get(T[Qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ct.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,vt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const T=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function pe(D){return Math.min(l.maxSamples,D.samples)}function ee(D){const T=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Vt(D){const T=h.render.frame;g.get(D)!==T&&(g.set(D,T),D.update())}function Ce(D,T){const J=D.colorSpace,ft=D.format,mt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==pr&&J!==La&&(Ee.getTransfer(J)===Ne?(ft!==ui||mt!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function It(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=it,this.resetTextureUnits=rt,this.setTexture2D=pt,this.setTexture2DArray=O,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=Zt,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=ee}function wb(o,t){function i(s,l=La){let u;const h=Ee.getTransfer(l);if(s===yi)return o.UNSIGNED_BYTE;if(s===jh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Kh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===q_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===X_)return o.BYTE;if(s===W_)return o.SHORT;if(s===So)return o.UNSIGNED_SHORT;if(s===Zh)return o.INT;if(s===ms)return o.UNSIGNED_INT;if(s===Ki)return o.FLOAT;if(s===bo)return o.HALF_FLOAT;if(s===Y_)return o.ALPHA;if(s===Z_)return o.RGB;if(s===ui)return o.RGBA;if(s===yo)return o.DEPTH_COMPONENT;if(s===Eo)return o.DEPTH_STENCIL;if(s===j_)return o.RED;if(s===Qh)return o.RED_INTEGER;if(s===K_)return o.RG;if(s===Jh)return o.RG_INTEGER;if(s===$h)return o.RGBA_INTEGER;if(s===cc||s===uc||s===fc||s===hc)if(h===Ne)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===cc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===cc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vh||s===xh||s===Sh||s===Mh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===vh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Sh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Mh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yh||s===Eh||s===Th)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===yh||s===Eh)return h===Ne?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Th)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bh||s===Ah||s===Rh||s===Ch||s===wh||s===Dh||s===Uh||s===Lh||s===Nh||s===Oh||s===Ph||s===Bh||s===zh||s===Ih)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===bh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ah)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ch)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Uh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Oh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ph)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zh)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ih)return h===Ne?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dc||s===Fh||s===Hh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===dc)return h===Ne?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Fh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Q_||s===Gh||s===Vh||s===kh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===dc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Gh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const Db=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ub=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Lb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Bn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ba({vertexShader:Db,fragmentShader:Ub,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ji(new xc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nb extends gr{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,g=null,v=null,S=null,y=null,A=null;const C=new Lb,M=i.getContextAttributes();let _=null,P=null;const N=[],U=[],Z=new Te;let I=null;const F=new ni;F.viewport=new Oe;const q=new ni;q.viewport=new Oe;const w=[F,q],R=new tM;let H=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let St=N[at];return St===void 0&&(St=new jf,N[at]=St),St.getTargetRaySpace()},this.getControllerGrip=function(at){let St=N[at];return St===void 0&&(St=new jf,N[at]=St),St.getGripSpace()},this.getHand=function(at){let St=N[at];return St===void 0&&(St=new jf,N[at]=St),St.getHandSpace()};function it(at){const St=U.indexOf(at.inputSource);if(St===-1)return;const Lt=N[St];Lt!==void 0&&(Lt.update(at.inputSource,at.frame,m||h),Lt.dispatchEvent({type:at.type,data:at.inputSource}))}function ct(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",pt);for(let at=0;at<N.length;at++){const St=U[at];St!==null&&(U[at]=null,N[at].disconnect(St))}H=null,rt=null,C.reset(),t.setRenderTarget(_),y=null,S=null,v=null,l=null,P=null,Ht.stop(),s.isPresenting=!1,t.setPixelRatio(I),t.setSize(Z.width,Z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){u=at,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){d=at,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(at){m=at},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",pt),M.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(Z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Et=null,kt=null;M.depth&&(kt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Lt=M.stencil?Eo:yo,Et=M.stencil?Mo:ms);const oe={colorFormat:i.RGBA8,depthFormat:kt,scaleFactor:u};v=new XRWebGLBinding(l,i),S=v.createProjectionLayer(oe),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),P=new gs(S.textureWidth,S.textureHeight,{format:ui,type:yi,depthTexture:new c0(S.textureWidth,S.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Lt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Lt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new gs(y.framebufferWidth,y.framebufferHeight,{format:ui,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Ht.setContext(l),Ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function pt(at){for(let St=0;St<at.removed.length;St++){const Lt=at.removed[St],Et=U.indexOf(Lt);Et>=0&&(U[Et]=null,N[Et].disconnect(Lt))}for(let St=0;St<at.added.length;St++){const Lt=at.added[St];let Et=U.indexOf(Lt);if(Et===-1){for(let oe=0;oe<N.length;oe++)if(oe>=U.length){U.push(Lt),Et=oe;break}else if(U[oe]===null){U[oe]=Lt,Et=oe;break}if(Et===-1)break}const kt=N[Et];kt&&kt.connect(Lt)}}const O=new K,Q=new K;function W(at,St,Lt){O.setFromMatrixPosition(St.matrixWorld),Q.setFromMatrixPosition(Lt.matrixWorld);const Et=O.distanceTo(Q),kt=St.projectionMatrix.elements,oe=Lt.projectionMatrix.elements,Zt=kt[14]/(kt[10]-1),Ie=kt[14]/(kt[10]+1),Pe=(kt[9]+1)/kt[5],le=(kt[9]-1)/kt[5],B=(kt[8]-1)/kt[0],Cn=(oe[8]+1)/oe[0],pe=Zt*B,ee=Zt*Cn,Vt=Et/(-B+Cn),Ce=Vt*-B;if(St.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Ce),at.translateZ(Vt),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),kt[10]===-1)at.projectionMatrix.copy(St.projectionMatrix),at.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const It=Zt+Vt,D=Ie+Vt,T=pe-Ce,J=ee+(Et-Ce),ft=Pe*Ie/D*It,mt=le*Ie/D*It;at.projectionMatrix.makePerspective(T,J,ft,mt,It,D),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function gt(at,St){St===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(St.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let St=at.near,Lt=at.far;C.texture!==null&&(C.depthNear>0&&(St=C.depthNear),C.depthFar>0&&(Lt=C.depthFar)),R.near=q.near=F.near=St,R.far=q.far=F.far=Lt,(H!==R.near||rt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,rt=R.far),F.layers.mask=at.layers.mask|2,q.layers.mask=at.layers.mask|4,R.layers.mask=F.layers.mask|q.layers.mask;const Et=at.parent,kt=R.cameras;gt(R,Et);for(let oe=0;oe<kt.length;oe++)gt(kt[oe],Et);kt.length===2?W(R,F,q):R.projectionMatrix.copy(F.projectionMatrix),xt(at,R,Et)};function xt(at,St,Lt){Lt===null?at.matrix.copy(St.matrixWorld):(at.matrix.copy(Lt.matrixWorld),at.matrix.invert(),at.matrix.multiply(St.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(St.projectionMatrix),at.projectionMatrixInverse.copy(St.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Xh*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&y===null))return p},this.setFoveation=function(at){p=at,S!==null&&(S.fixedFoveation=at),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=at)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let Ut=null;function zt(at,St){if(g=St.getViewerPose(m||h),A=St,g!==null){const Lt=g.views;y!==null&&(t.setRenderTargetFramebuffer(P,y.framebuffer),t.setRenderTarget(P));let Et=!1;Lt.length!==R.cameras.length&&(R.cameras.length=0,Et=!0);for(let Zt=0;Zt<Lt.length;Zt++){const Ie=Lt[Zt];let Pe=null;if(y!==null)Pe=y.getViewport(Ie);else{const B=v.getViewSubImage(S,Ie);Pe=B.viewport,Zt===0&&(t.setRenderTargetTextures(P,B.colorTexture,B.depthStencilTexture),t.setRenderTarget(P))}let le=w[Zt];le===void 0&&(le=new ni,le.layers.enable(Zt),le.viewport=new Oe,w[Zt]=le),le.matrix.fromArray(Ie.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Ie.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Zt===0&&(R.matrix.copy(le.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Et===!0&&R.cameras.push(le)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Zt=v.getDepthInformation(Lt[0]);Zt&&Zt.isValid&&Zt.texture&&C.init(t,Zt,l.renderState)}}for(let Lt=0;Lt<N.length;Lt++){const Et=U[Lt],kt=N[Lt];Et!==null&&kt!==void 0&&kt.update(Et,St,m||h)}Ut&&Ut(at,St),St.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:St}),A=null}const Ht=new d0;Ht.setAnimationLoop(zt),this.setAnimationLoop=function(at){Ut=at},this.dispose=function(){}}}const ls=new Ei,Ob=new ke;function Pb(o,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,o0(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,P,N,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),v(M,_)):_.isMeshPhongMaterial?(u(M,_),g(M,_)):_.isMeshStandardMaterial?(u(M,_),S(M,_),_.isMeshPhysicalMaterial&&y(M,_,U)):_.isMeshMatcapMaterial?(u(M,_),A(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),C(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?p(M,_,P,N):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Pn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Pn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const P=t.get(_),N=P.envMap,U=P.envMapRotation;N&&(M.envMap.value=N,ls.copy(U),ls.x*=-1,ls.y*=-1,ls.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),M.envMapRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(ls)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,P,N){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*P,M.scale.value=N*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,P){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,_){_.matcap&&(M.matcap.value=_.matcap)}function C(M,_){const P=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Bb(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,N){const U=N.program;s.uniformBlockBinding(P,U)}function m(P,N){let U=l[P.id];U===void 0&&(A(P),U=g(P),l[P.id]=U,P.addEventListener("dispose",M));const Z=N.program;s.updateUBOMapping(P,Z);const I=t.render.frame;u[P.id]!==I&&(S(P),u[P.id]=I)}function g(P){const N=v();P.__bindingPointIndex=N;const U=o.createBuffer(),Z=P.__size,I=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,Z,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function v(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const N=l[P.id],U=P.uniforms,Z=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let I=0,F=U.length;I<F;I++){const q=Array.isArray(U[I])?U[I]:[U[I]];for(let w=0,R=q.length;w<R;w++){const H=q[w];if(y(H,I,w,Z)===!0){const rt=H.__offset,it=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let pt=0;pt<it.length;pt++){const O=it[pt],Q=C(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,rt+ct,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,ct),ct+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,rt,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(P,N,U,Z){const I=P.value,F=N+"_"+U;if(Z[F]===void 0)return typeof I=="number"||typeof I=="boolean"?Z[F]=I:Z[F]=I.clone(),!0;{const q=Z[F];if(typeof I=="number"||typeof I=="boolean"){if(q!==I)return Z[F]=I,!0}else if(q.equals(I)===!1)return q.copy(I),!0}return!1}function A(P){const N=P.uniforms;let U=0;const Z=16;for(let F=0,q=N.length;F<q;F++){const w=Array.isArray(N[F])?N[F]:[N[F]];for(let R=0,H=w.length;R<H;R++){const rt=w[R],it=Array.isArray(rt.value)?rt.value:[rt.value];for(let ct=0,pt=it.length;ct<pt;ct++){const O=it[ct],Q=C(O),W=U%Z,gt=W%Q.boundary,xt=W+gt;U+=gt,xt!==0&&Z-xt<Q.storage&&(U+=Z-xt),rt.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=U,U+=Q.storage}}}const I=U%Z;return I>0&&(U+=Z-I),P.__size=U,P.__cache={},this}function C(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),N}function M(P){const N=P.target;N.removeEventListener("dispose",M);const U=h.indexOf(N.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:p,update:m,dispose:_}}class Yb{constructor(t={}){const{canvas:i=gS(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=h;const A=new Uint32Array(4),C=new Int32Array(4);let M=null,_=null;const P=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let Z=!1;this._outputColorSpace=Yn;let I=0,F=0,q=null,w=-1,R=null;const H=new Oe,rt=new Oe;let it=null;const ct=new ve(0);let pt=0,O=i.width,Q=i.height,W=1,gt=null,xt=null;const Ut=new Oe(0,0,O,Q),zt=new Oe(0,0,O,Q);let Ht=!1;const at=new ad;let St=!1,Lt=!1;const Et=new ke,kt=new ke,oe=new K,Zt=new Oe,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function le(){return q===null?W:1}let B=s;function Cn(b,k){return i.getContext(b,k)}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Yh}`),i.addEventListener("webglcontextlost",ht,!1),i.addEventListener("webglcontextrestored",Dt,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),B===null){const k="webgl2";if(B=Cn(k,b),B===null)throw Cn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let pe,ee,Vt,Ce,It,D,T,J,ft,mt,lt,Ct,Mt,Bt,Qt,vt,Ot,qt,jt,wt,se,te,we,G;function At(){pe=new YE(B),pe.init(),te=new wb(B,pe),ee=new HE(B,pe,t,te),Vt=new Rb(B,pe),ee.reverseDepthBuffer&&S&&Vt.buffers.depth.setReversed(!0),Ce=new KE(B),It=new pb,D=new Cb(B,pe,Vt,It,ee,te,Ce),T=new VE(U),J=new qE(U),ft=new nM(B),we=new IE(B,ft),mt=new ZE(B,ft,Ce,we),lt=new JE(B,mt,ft,Ce),jt=new QE(B,ee,D),vt=new GE(It),Ct=new db(U,T,J,pe,ee,we,vt),Mt=new Pb(U,It),Bt=new gb,Qt=new yb(pe),qt=new zE(U,T,J,Vt,lt,y,p),Ot=new bb(U,lt,ee),G=new Bb(B,Ce,ee,Vt),wt=new FE(B,pe,Ce),se=new jE(B,pe,Ce),Ce.programs=Ct.programs,U.capabilities=ee,U.extensions=pe,U.properties=It,U.renderLists=Bt,U.shadowMap=Ot,U.state=Vt,U.info=Ce}At();const st=new Nb(U,B);this.xr=st,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(O,Q,!1))},this.getSize=function(b){return b.set(O,Q)},this.setSize=function(b,k,et=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,Q=k,i.width=Math.floor(b*W),i.height=Math.floor(k*W),et===!0&&(i.style.width=b+"px",i.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(O*W,Q*W).floor()},this.setDrawingBufferSize=function(b,k,et){O=b,Q=k,W=et,i.width=Math.floor(b*et),i.height=Math.floor(k*et),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(Ut)},this.setViewport=function(b,k,et,nt){b.isVector4?Ut.set(b.x,b.y,b.z,b.w):Ut.set(b,k,et,nt),Vt.viewport(H.copy(Ut).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(zt)},this.setScissor=function(b,k,et,nt){b.isVector4?zt.set(b.x,b.y,b.z,b.w):zt.set(b,k,et,nt),Vt.scissor(rt.copy(zt).multiplyScalar(W).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(b){Vt.setScissorTest(Ht=b)},this.setOpaqueSort=function(b){gt=b},this.setTransparentSort=function(b){xt=b},this.getClearColor=function(b){return b.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,et=!0){let nt=0;if(b){let X=!1;if(q!==null){const _t=q.texture.format;X=_t===$h||_t===Jh||_t===Qh}if(X){const _t=q.texture.type,yt=_t===yi||_t===ms||_t===So||_t===Mo||_t===jh||_t===Kh,Tt=qt.getClearColor(),Nt=qt.getClearAlpha(),Jt=Tt.r,Xt=Tt.g,Gt=Tt.b;yt?(A[0]=Jt,A[1]=Xt,A[2]=Gt,A[3]=Nt,B.clearBufferuiv(B.COLOR,0,A)):(C[0]=Jt,C[1]=Xt,C[2]=Gt,C[3]=Nt,B.clearBufferiv(B.COLOR,0,C))}else nt|=B.COLOR_BUFFER_BIT}k&&(nt|=B.DEPTH_BUFFER_BIT),et&&(nt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ht,!1),i.removeEventListener("webglcontextrestored",Dt,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),qt.dispose(),Bt.dispose(),Qt.dispose(),It.dispose(),T.dispose(),J.dispose(),lt.dispose(),we.dispose(),G.dispose(),Ct.dispose(),st.dispose(),st.removeEventListener("sessionstart",nn),st.removeEventListener("sessionend",mn),wn.stop()};function ht(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Z=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),Z=!1;const b=Ce.autoReset,k=Ot.enabled,et=Ot.autoUpdate,nt=Ot.needsUpdate,X=Ot.type;At(),Ce.autoReset=b,Ot.enabled=k,Ot.autoUpdate=et,Ot.needsUpdate=nt,Ot.type=X}function Rt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ne(b){const k=b.target;k.removeEventListener("dispose",ne),Fe(k)}function Fe(b){Qe(b),It.remove(b)}function Qe(b){const k=It.get(b).programs;k!==void 0&&(k.forEach(function(et){Ct.releaseProgram(et)}),b.isShaderMaterial&&Ct.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,et,nt,X,_t){k===null&&(k=Ie);const yt=X.isMesh&&X.matrixWorld.determinant()<0,Tt=Ha(b,k,et,nt,X);Vt.setMaterial(nt,yt);let Nt=et.index,Jt=1;if(nt.wireframe===!0){if(Nt=mt.getWireframeAttribute(et),Nt===void 0)return;Jt=2}const Xt=et.drawRange,Gt=et.attributes.position;let ue=Xt.start*Jt,Me=(Xt.start+Xt.count)*Jt;_t!==null&&(ue=Math.max(ue,_t.start*Jt),Me=Math.min(Me,(_t.start+_t.count)*Jt)),Nt!==null?(ue=Math.max(ue,0),Me=Math.min(Me,Nt.count)):Gt!=null&&(ue=Math.max(ue,0),Me=Math.min(Me,Gt.count));const Xe=Me-ue;if(Xe<0||Xe===1/0)return;we.setup(X,nt,Tt,et,Nt);let me,ge=wt;if(Nt!==null&&(me=ft.get(Nt),ge=se,ge.setIndex(me)),X.isMesh)nt.wireframe===!0?(Vt.setLineWidth(nt.wireframeLinewidth*le()),ge.setMode(B.LINES)):ge.setMode(B.TRIANGLES);else if(X.isLine){let Wt=nt.linewidth;Wt===void 0&&(Wt=1),Vt.setLineWidth(Wt*le()),X.isLineSegments?ge.setMode(B.LINES):X.isLineLoop?ge.setMode(B.LINE_LOOP):ge.setMode(B.LINE_STRIP)}else X.isPoints?ge.setMode(B.POINTS):X.isSprite&&ge.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)pc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))ge.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Wt=X._multiDrawStarts,qe=X._multiDrawCounts,xe=X._multiDrawCount,Sn=Nt?ft.get(Nt).bytesPerElement:1,ia=It.get(nt).currentProgram.getUniforms();for(let He=0;He<xe;He++)ia.setValue(B,"_gl_DrawID",He),ge.render(Wt[He]/Sn,qe[He])}else if(X.isInstancedMesh)ge.renderInstances(ue,Xe,X.count);else if(et.isInstancedBufferGeometry){const Wt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,qe=Math.min(et.instanceCount,Wt);ge.renderInstances(ue,Xe,qe)}else ge.render(ue,Xe)};function Se(b,k,et){b.transparent===!0&&b.side===ji&&b.forceSinglePass===!1?(b.side=Pn,b.needsUpdate=!0,ea(b,k,et),b.side=Pa,b.needsUpdate=!0,ea(b,k,et),b.side=ji):ea(b,k,et)}this.compile=function(b,k,et=null){et===null&&(et=b),_=Qt.get(et),_.init(k),N.push(_),et.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),b!==et&&b.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),_.setupLights();const nt=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const _t=X.material;if(_t)if(Array.isArray(_t))for(let yt=0;yt<_t.length;yt++){const Tt=_t[yt];Se(Tt,et,X),nt.add(Tt)}else Se(_t,et,X),nt.add(_t)}),_=N.pop(),nt},this.compileAsync=function(b,k,et=null){const nt=this.compile(b,k,et);return new Promise(X=>{function _t(){if(nt.forEach(function(yt){It.get(yt).currentProgram.isReady()&&nt.delete(yt)}),nt.size===0){X(b);return}setTimeout(_t,10)}pe.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let zn=null;function cn(b){zn&&zn(b)}function nn(){wn.stop()}function mn(){wn.start()}const wn=new d0;wn.setAnimationLoop(cn),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(b){zn=b,st.setAnimationLoop(b),b===null?wn.stop():wn.start()},st.addEventListener("sessionstart",nn),st.addEventListener("sessionend",mn),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(k),k=st.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,k,q),_=Qt.get(b,N.length),_.init(k),N.push(_),kt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),at.setFromProjectionMatrix(kt),Lt=this.localClippingEnabled,St=vt.init(this.clippingPlanes,Lt),M=Bt.get(b,P.length),M.init(),P.push(M),st.enabled===!0&&st.isPresenting===!0){const _t=U.xr.getDepthSensingMesh();_t!==null&&Ia(_t,k,-1/0,U.sortObjects)}Ia(b,k,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(gt,xt),Pe=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Pe&&qt.addToRenderList(M,b),this.info.render.frame++,St===!0&&vt.beginShadows();const et=_.state.shadowsArray;Ot.render(et,b,k),St===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=M.opaque,X=M.transmissive;if(_.setupLights(),k.isArrayCamera){const _t=k.cameras;if(X.length>0)for(let yt=0,Tt=_t.length;yt<Tt;yt++){const Nt=_t[yt];Lo(nt,X,b,Nt)}Pe&&qt.render(b);for(let yt=0,Tt=_t.length;yt<Tt;yt++){const Nt=_t[yt];Uo(M,b,Nt,Nt.viewport)}}else X.length>0&&Lo(nt,X,b,k),Pe&&qt.render(b),Uo(M,b,k);q!==null&&F===0&&(D.updateMultisampleRenderTarget(q),D.updateRenderTargetMipmap(q)),b.isScene===!0&&b.onAfterRender(U,b,k),we.resetDefaultState(),w=-1,R=null,N.pop(),N.length>0?(_=N[N.length-1],St===!0&&vt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function Ia(b,k,et,nt){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)et=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||at.intersectsSprite(b)){nt&&Zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(kt);const yt=lt.update(b),Tt=b.material;Tt.visible&&M.push(b,yt,Tt,et,Zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||at.intersectsObject(b))){const yt=lt.update(b),Tt=b.material;if(nt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Zt.copy(b.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Zt.copy(yt.boundingSphere.center)),Zt.applyMatrix4(b.matrixWorld).applyMatrix4(kt)),Array.isArray(Tt)){const Nt=yt.groups;for(let Jt=0,Xt=Nt.length;Jt<Xt;Jt++){const Gt=Nt[Jt],ue=Tt[Gt.materialIndex];ue&&ue.visible&&M.push(b,yt,ue,et,Zt.z,Gt)}}else Tt.visible&&M.push(b,yt,Tt,et,Zt.z,null)}}const _t=b.children;for(let yt=0,Tt=_t.length;yt<Tt;yt++)Ia(_t[yt],k,et,nt)}function Uo(b,k,et,nt){const X=b.opaque,_t=b.transmissive,yt=b.transparent;_.setupLightsView(et),St===!0&&vt.setGlobalState(U.clippingPlanes,et),nt&&Vt.viewport(H.copy(nt)),X.length>0&&Fa(X,k,et),_t.length>0&&Fa(_t,k,et),yt.length>0&&Fa(yt,k,et),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Lo(b,k,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[nt.id]===void 0&&(_.state.transmissionRenderTarget[nt.id]=new gs(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?bo:yi,minFilter:ps,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const _t=_.state.transmissionRenderTarget[nt.id],yt=nt.viewport||H;_t.setSize(yt.z*U.transmissionResolutionScale,yt.w*U.transmissionResolutionScale);const Tt=U.getRenderTarget();U.setRenderTarget(_t),U.getClearColor(ct),pt=U.getClearAlpha(),pt<1&&U.setClearColor(16777215,.5),U.clear(),Pe&&qt.render(et);const Nt=U.toneMapping;U.toneMapping=Oa;const Jt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),_.setupLightsView(nt),St===!0&&vt.setGlobalState(U.clippingPlanes,nt),Fa(b,et,nt),D.updateMultisampleRenderTarget(_t),D.updateRenderTargetMipmap(_t),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Gt=0,ue=k.length;Gt<ue;Gt++){const Me=k[Gt],Xe=Me.object,me=Me.geometry,ge=Me.material,Wt=Me.group;if(ge.side===ji&&Xe.layers.test(nt.layers)){const qe=ge.side;ge.side=Pn,ge.needsUpdate=!0,ta(Xe,et,nt,me,ge,Wt),ge.side=qe,ge.needsUpdate=!0,Xt=!0}}Xt===!0&&(D.updateMultisampleRenderTarget(_t),D.updateRenderTargetMipmap(_t))}U.setRenderTarget(Tt),U.setClearColor(ct,pt),Jt!==void 0&&(nt.viewport=Jt),U.toneMapping=Nt}function Fa(b,k,et){const nt=k.isScene===!0?k.overrideMaterial:null;for(let X=0,_t=b.length;X<_t;X++){const yt=b[X],Tt=yt.object,Nt=yt.geometry,Jt=yt.group;let Xt=yt.material;Xt.allowOverride===!0&&nt!==null&&(Xt=nt),Tt.layers.test(et.layers)&&ta(Tt,k,et,Nt,Xt,Jt)}}function ta(b,k,et,nt,X,_t){b.onBeforeRender(U,k,et,nt,X,_t),b.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(U,k,et,nt,b,_t),X.transparent===!0&&X.side===ji&&X.forceSinglePass===!1?(X.side=Pn,X.needsUpdate=!0,U.renderBufferDirect(et,k,nt,X,b,_t),X.side=Pa,X.needsUpdate=!0,U.renderBufferDirect(et,k,nt,X,b,_t),X.side=ji):U.renderBufferDirect(et,k,nt,X,b,_t),b.onAfterRender(U,k,et,nt,X,_t)}function ea(b,k,et){k.isScene!==!0&&(k=Ie);const nt=It.get(b),X=_.state.lights,_t=_.state.shadowsArray,yt=X.state.version,Tt=Ct.getParameters(b,X.state,_t,k,et),Nt=Ct.getProgramCacheKey(Tt);let Jt=nt.programs;nt.environment=b.isMeshStandardMaterial?k.environment:null,nt.fog=k.fog,nt.envMap=(b.isMeshStandardMaterial?J:T).get(b.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Jt===void 0&&(b.addEventListener("dispose",ne),Jt=new Map,nt.programs=Jt);let Xt=Jt.get(Nt);if(Xt!==void 0){if(nt.currentProgram===Xt&&nt.lightsStateVersion===yt)return bi(b,Tt),Xt}else Tt.uniforms=Ct.getUniforms(b),b.onBeforeCompile(Tt,U),Xt=Ct.acquireProgram(Tt,Nt),Jt.set(Nt,Xt),nt.uniforms=Tt.uniforms;const Gt=nt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Gt.clippingPlanes=vt.uniform),bi(b,Tt),nt.needsLights=Je(b),nt.lightsStateVersion=yt,nt.needsLights&&(Gt.ambientLightColor.value=X.state.ambient,Gt.lightProbe.value=X.state.probe,Gt.directionalLights.value=X.state.directional,Gt.directionalLightShadows.value=X.state.directionalShadow,Gt.spotLights.value=X.state.spot,Gt.spotLightShadows.value=X.state.spotShadow,Gt.rectAreaLights.value=X.state.rectArea,Gt.ltc_1.value=X.state.rectAreaLTC1,Gt.ltc_2.value=X.state.rectAreaLTC2,Gt.pointLights.value=X.state.point,Gt.pointLightShadows.value=X.state.pointShadow,Gt.hemisphereLights.value=X.state.hemi,Gt.directionalShadowMap.value=X.state.directionalShadowMap,Gt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Gt.spotShadowMap.value=X.state.spotShadowMap,Gt.spotLightMatrix.value=X.state.spotLightMatrix,Gt.spotLightMap.value=X.state.spotLightMap,Gt.pointShadowMap.value=X.state.pointShadowMap,Gt.pointShadowMatrix.value=X.state.pointShadowMatrix),nt.currentProgram=Xt,nt.uniformsList=null,Xt}function Ti(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=mc.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function bi(b,k){const et=It.get(b);et.outputColorSpace=k.outputColorSpace,et.batching=k.batching,et.batchingColor=k.batchingColor,et.instancing=k.instancing,et.instancingColor=k.instancingColor,et.instancingMorph=k.instancingMorph,et.skinning=k.skinning,et.morphTargets=k.morphTargets,et.morphNormals=k.morphNormals,et.morphColors=k.morphColors,et.morphTargetsCount=k.morphTargetsCount,et.numClippingPlanes=k.numClippingPlanes,et.numIntersection=k.numClipIntersection,et.vertexAlphas=k.vertexAlphas,et.vertexTangents=k.vertexTangents,et.toneMapping=k.toneMapping}function Ha(b,k,et,nt,X){k.isScene!==!0&&(k=Ie),D.resetTextureUnits();const _t=k.fog,yt=nt.isMeshStandardMaterial?k.environment:null,Tt=q===null?U.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:pr,Nt=(nt.isMeshStandardMaterial?J:T).get(nt.envMap||yt),Jt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Xt=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Gt=!!et.morphAttributes.position,ue=!!et.morphAttributes.normal,Me=!!et.morphAttributes.color;let Xe=Oa;nt.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Xe=U.toneMapping);const me=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ge=me!==void 0?me.length:0,Wt=It.get(nt),qe=_.state.lights;if(St===!0&&(Lt===!0||b!==R)){const un=b===R&&nt.id===w;vt.setState(nt,b,un)}let xe=!1;nt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==qe.state.version||Wt.outputColorSpace!==Tt||X.isBatchedMesh&&Wt.batching===!1||!X.isBatchedMesh&&Wt.batching===!0||X.isBatchedMesh&&Wt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Wt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Wt.instancing===!1||!X.isInstancedMesh&&Wt.instancing===!0||X.isSkinnedMesh&&Wt.skinning===!1||!X.isSkinnedMesh&&Wt.skinning===!0||X.isInstancedMesh&&Wt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Wt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Wt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Wt.instancingMorph===!1&&X.morphTexture!==null||Wt.envMap!==Nt||nt.fog===!0&&Wt.fog!==_t||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==vt.numPlanes||Wt.numIntersection!==vt.numIntersection)||Wt.vertexAlphas!==Jt||Wt.vertexTangents!==Xt||Wt.morphTargets!==Gt||Wt.morphNormals!==ue||Wt.morphColors!==Me||Wt.toneMapping!==Xe||Wt.morphTargetsCount!==ge)&&(xe=!0):(xe=!0,Wt.__version=nt.version);let Sn=Wt.currentProgram;xe===!0&&(Sn=ea(nt,k,X));let ia=!1,He=!1,Ri=!1;const Be=Sn.getUniforms(),Mn=Wt.uniforms;if(Vt.useProgram(Sn.program)&&(ia=!0,He=!0,Ri=!0),nt.id!==w&&(w=nt.id,He=!0),ia||R!==b){Vt.buffers.depth.getReversed()?(Et.copy(b.projectionMatrix),vS(Et),xS(Et),Be.setValue(B,"projectionMatrix",Et)):Be.setValue(B,"projectionMatrix",b.projectionMatrix),Be.setValue(B,"viewMatrix",b.matrixWorldInverse);const gn=Be.map.cameraPosition;gn!==void 0&&gn.setValue(B,oe.setFromMatrixPosition(b.matrixWorld)),ee.logarithmicDepthBuffer&&Be.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Be.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,He=!0,Ri=!0)}if(X.isSkinnedMesh){Be.setOptional(B,X,"bindMatrix"),Be.setOptional(B,X,"bindMatrixInverse");const un=X.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Be.setValue(B,"boneTexture",un.boneTexture,D))}X.isBatchedMesh&&(Be.setOptional(B,X,"batchingTexture"),Be.setValue(B,"batchingTexture",X._matricesTexture,D),Be.setOptional(B,X,"batchingIdTexture"),Be.setValue(B,"batchingIdTexture",X._indirectTexture,D),Be.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&Be.setValue(B,"batchingColorTexture",X._colorsTexture,D));const an=et.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&jt.update(X,et,Sn),(He||Wt.receiveShadow!==X.receiveShadow)&&(Wt.receiveShadow=X.receiveShadow,Be.setValue(B,"receiveShadow",X.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Mn.envMap.value=Nt,Mn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&k.environment!==null&&(Mn.envMapIntensity.value=k.environmentIntensity),He&&(Be.setValue(B,"toneMappingExposure",U.toneMappingExposure),Wt.needsLights&&na(Mn,Ri),_t&&nt.fog===!0&&Mt.refreshFogUniforms(Mn,_t),Mt.refreshMaterialUniforms(Mn,nt,W,Q,_.state.transmissionRenderTarget[b.id]),mc.upload(B,Ti(Wt),Mn,D)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(mc.upload(B,Ti(Wt),Mn,D),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Be.setValue(B,"center",X.center),Be.setValue(B,"modelViewMatrix",X.modelViewMatrix),Be.setValue(B,"normalMatrix",X.normalMatrix),Be.setValue(B,"modelMatrix",X.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const un=nt.uniformsGroups;for(let gn=0,hi=un.length;gn<hi;gn++){const Ci=un[gn];G.update(Ci,Sn),G.bind(Ci,Sn)}}return Sn}function na(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Je(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(b,k,et){const nt=It.get(b);nt.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),It.get(b.texture).__webglTexture=k,It.get(b.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:et,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const et=It.get(b);et.__webglFramebuffer=k,et.__useDefaultFramebuffer=k===void 0};const No=B.createFramebuffer();this.setRenderTarget=function(b,k=0,et=0){q=b,I=k,F=et;let nt=!0,X=null,_t=!1,yt=!1;if(b){const Nt=It.get(b);if(Nt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(B.FRAMEBUFFER,null),nt=!1;else if(Nt.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(Nt.__hasExternalTextures)D.rebindTextures(b,It.get(b.texture).__webglTexture,It.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Gt=b.depthTexture;if(Nt.__boundDepthTexture!==Gt){if(Gt!==null&&It.has(Gt)&&(b.width!==Gt.image.width||b.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const Jt=b.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(yt=!0);const Xt=It.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xt[k])?X=Xt[k][et]:X=Xt[k],_t=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?X=It.get(b).__webglMultisampledFramebuffer:Array.isArray(Xt)?X=Xt[et]:X=Xt,H.copy(b.viewport),rt.copy(b.scissor),it=b.scissorTest}else H.copy(Ut).multiplyScalar(W).floor(),rt.copy(zt).multiplyScalar(W).floor(),it=Ht;if(et!==0&&(X=No),Vt.bindFramebuffer(B.FRAMEBUFFER,X)&&nt&&Vt.drawBuffers(b,X),Vt.viewport(H),Vt.scissor(rt),Vt.setScissorTest(it),_t){const Nt=It.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Nt.__webglTexture,et)}else if(yt){const Nt=It.get(b.texture),Jt=k;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Nt.__webglTexture,et,Jt)}else if(b!==null&&et!==0){const Nt=It.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Nt.__webglTexture,et)}w=-1},this.readRenderTargetPixels=function(b,k,et,nt,X,_t,yt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(Tt=Tt[yt]),Tt){Vt.bindFramebuffer(B.FRAMEBUFFER,Tt);try{const Nt=b.texture,Jt=Nt.format,Xt=Nt.type;if(!ee.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-nt&&et>=0&&et<=b.height-X&&B.readPixels(k,et,nt,X,te.convert(Jt),te.convert(Xt),_t)}finally{const Nt=q!==null?It.get(q).__webglFramebuffer:null;Vt.bindFramebuffer(B.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,k,et,nt,X,_t,yt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&yt!==void 0&&(Tt=Tt[yt]),Tt)if(k>=0&&k<=b.width-nt&&et>=0&&et<=b.height-X){Vt.bindFramebuffer(B.FRAMEBUFFER,Tt);const Nt=b.texture,Jt=Nt.format,Xt=Nt.type;if(!ee.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Gt),B.bufferData(B.PIXEL_PACK_BUFFER,_t.byteLength,B.STREAM_READ),B.readPixels(k,et,nt,X,te.convert(Jt),te.convert(Xt),0);const ue=q!==null?It.get(q).__webglFramebuffer:null;Vt.bindFramebuffer(B.FRAMEBUFFER,ue);const Me=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await _S(B,Me,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Gt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,_t),B.deleteBuffer(Gt),B.deleteSync(Me),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,et=0){const nt=Math.pow(2,-et),X=Math.floor(b.image.width*nt),_t=Math.floor(b.image.height*nt),yt=k!==null?k.x:0,Tt=k!==null?k.y:0;D.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,et,0,0,yt,Tt,X,_t),Vt.unbindTexture()};const Oo=B.createFramebuffer(),Ai=B.createFramebuffer();this.copyTextureToTexture=function(b,k,et=null,nt=null,X=0,_t=null){_t===null&&(X!==0?(pc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=X,X=0):_t=0);let yt,Tt,Nt,Jt,Xt,Gt,ue,Me,Xe;const me=b.isCompressedTexture?b.mipmaps[_t]:b.image;if(et!==null)yt=et.max.x-et.min.x,Tt=et.max.y-et.min.y,Nt=et.isBox3?et.max.z-et.min.z:1,Jt=et.min.x,Xt=et.min.y,Gt=et.isBox3?et.min.z:0;else{const an=Math.pow(2,-X);yt=Math.floor(me.width*an),Tt=Math.floor(me.height*an),b.isDataArrayTexture?Nt=me.depth:b.isData3DTexture?Nt=Math.floor(me.depth*an):Nt=1,Jt=0,Xt=0,Gt=0}nt!==null?(ue=nt.x,Me=nt.y,Xe=nt.z):(ue=0,Me=0,Xe=0);const ge=te.convert(k.format),Wt=te.convert(k.type);let qe;k.isData3DTexture?(D.setTexture3D(k,0),qe=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(D.setTexture2DArray(k,0),qe=B.TEXTURE_2D_ARRAY):(D.setTexture2D(k,0),qe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const xe=B.getParameter(B.UNPACK_ROW_LENGTH),Sn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ia=B.getParameter(B.UNPACK_SKIP_PIXELS),He=B.getParameter(B.UNPACK_SKIP_ROWS),Ri=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,me.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,me.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Jt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Xt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Gt);const Be=b.isDataArrayTexture||b.isData3DTexture,Mn=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const an=It.get(b),un=It.get(k),gn=It.get(an.__renderTarget),hi=It.get(un.__renderTarget);Vt.bindFramebuffer(B.READ_FRAMEBUFFER,gn.__webglFramebuffer),Vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Ci=0;Ci<Nt;Ci++)Be&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.get(b).__webglTexture,X,Gt+Ci),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.get(k).__webglTexture,_t,Xe+Ci)),B.blitFramebuffer(Jt,Xt,yt,Tt,ue,Me,yt,Tt,B.DEPTH_BUFFER_BIT,B.NEAREST);Vt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||It.has(b)){const an=It.get(b),un=It.get(k);Vt.bindFramebuffer(B.READ_FRAMEBUFFER,Oo),Vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ai);for(let gn=0;gn<Nt;gn++)Be?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,an.__webglTexture,X,Gt+gn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,an.__webglTexture,X),Mn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,un.__webglTexture,_t,Xe+gn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,un.__webglTexture,_t),X!==0?B.blitFramebuffer(Jt,Xt,yt,Tt,ue,Me,yt,Tt,B.COLOR_BUFFER_BIT,B.NEAREST):Mn?B.copyTexSubImage3D(qe,_t,ue,Me,Xe+gn,Jt,Xt,yt,Tt):B.copyTexSubImage2D(qe,_t,ue,Me,Jt,Xt,yt,Tt);Vt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Mn?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(qe,_t,ue,Me,Xe,yt,Tt,Nt,ge,Wt,me.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(qe,_t,ue,Me,Xe,yt,Tt,Nt,ge,me.data):B.texSubImage3D(qe,_t,ue,Me,Xe,yt,Tt,Nt,ge,Wt,me):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,_t,ue,Me,yt,Tt,ge,Wt,me.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,_t,ue,Me,me.width,me.height,ge,me.data):B.texSubImage2D(B.TEXTURE_2D,_t,ue,Me,yt,Tt,ge,Wt,me);B.pixelStorei(B.UNPACK_ROW_LENGTH,xe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Sn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ia),B.pixelStorei(B.UNPACK_SKIP_ROWS,He),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ri),_t===0&&k.generateMipmaps&&B.generateMipmap(qe),Vt.unbindTexture()},this.copyTextureToTexture3D=function(b,k,et=null,nt=null,X=0){return pc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,k,et,nt,X)},this.initRenderTarget=function(b){It.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),Vt.unbindTexture()},this.resetState=function(){I=0,F=0,q=null,Vt.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ee._getUnpackColorSpace()}}export{Wb as A,Si as B,ve as C,Xb as D,Gb as M,ni as P,qb as R,Hb as S,u0 as T,Te as V,Yb as W,Ba as a,Vb as b,Ji as c,kb as d,K as e,Fb as f,Ib as j};
