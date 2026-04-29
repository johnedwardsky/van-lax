(function(){const o=document.createElement("link").relList
if(o&&o.supports&&o.supports("modulepreload"))return
for(const ct of document.querySelectorAll('link[rel="modulepreload"]'))g(ct)
new MutationObserver(ct=>{for(const At of ct)if(At.type==="childList")for(const ue of At.addedNodes)ue.tagName==="LINK"&&ue.rel==="modulepreload"&&g(ue)}).observe(document,{childList:!0,subtree:!0})
function ot(ct){const At={}
return ct.integrity&&(At.integrity=ct.integrity),ct.referrerPolicy&&(At.referrerPolicy=ct.referrerPolicy),ct.crossOrigin==="use-credentials"?At.credentials="include":ct.crossOrigin==="anonymous"?At.credentials="omit":At.credentials="same-origin",At}function g(ct){if(ct.ep)return
ct.ep=!0
const At=ot(ct)
fetch(ct.href,At)}})()
function t0(L){return L&&L.__esModule&&Object.prototype.hasOwnProperty.call(L,"default")?L.default:L}var Df={exports:{}},ic={}
var hd
function e0(){if(hd)return ic
hd=1
var L=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment")
function ot(g,ct,At){var ue=null
if(At!==void 0&&(ue=""+At),ct.key!==void 0&&(ue=""+ct.key),"key"in ct){At={}
for(var Tt in ct)Tt!=="key"&&(At[Tt]=ct[Tt])}else At=ct
return ct=At.ref,{$$typeof:L,type:g,key:ue,ref:ct!==void 0?ct:null,props:At}}return ic.Fragment=o,ic.jsx=ot,ic.jsxs=ot,ic}var dd
function l0(){return dd||(dd=1,Df.exports=e0()),Df.exports}var i=l0(),_f={exports:{}},dt={}
var md
function a0(){if(md)return dt
md=1
var L=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),ot=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),ct=Symbol.for("react.profiler"),At=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),Tt=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),G=Symbol.iterator
function Ot(d){return d===null||typeof d!="object"?null:(d=G&&d[G]||d["@@iterator"],typeof d=="function"?d:null)}var Bt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lt=Object.assign,le={}
function gt(d,z,H){this.props=d,this.context=z,this.refs=le,this.updater=H||Bt}gt.prototype.isReactComponent={},gt.prototype.setState=function(d,z){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.")
this.updater.enqueueSetState(this,d,z,"setState")},gt.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")}
function et(){}et.prototype=gt.prototype
function bt(d,z,H){this.props=d,this.context=z,this.refs=le,this.updater=H||Bt}var mt=bt.prototype=new et
mt.constructor=bt,Lt(mt,gt.prototype),mt.isPureReactComponent=!0
var St=Array.isArray
function _(){}var U={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty
function Ye(d,z,H){var K=H.ref
return{$$typeof:L,type:d,key:z,ref:K!==void 0?K:null,props:H}}function gl(d,z){return Ye(d.type,z,d.props)}function Pe(d){return typeof d=="object"&&d!==null&&d.$$typeof===L}function Ve(d){var z={"=":"=0",":":"=2"}
return"$"+d.replace(/[=:]/g,function(H){return z[H]})}var pl=/\/+/g
function Je(d,z){return typeof d=="object"&&d!==null&&d.key!=null?Ve(""+d.key):z.toString(36)}function sl(d){switch(d.status){case"fulfilled":return d.value
case"rejected":throw d.reason
default:switch(typeof d.status=="string"?d.then(_,_):(d.status="pending",d.then(function(z){d.status==="pending"&&(d.status="fulfilled",d.value=z)},function(z){d.status==="pending"&&(d.status="rejected",d.reason=z)})),d.status){case"fulfilled":return d.value
case"rejected":throw d.reason}}throw d}function T(d,z,H,K,st){var ht=typeof d
(ht==="undefined"||ht==="boolean")&&(d=null)
var xt=!1
if(d===null)xt=!0
else switch(ht){case"bigint":case"string":case"number":xt=!0
break
case"object":switch(d.$$typeof){case L:case o:xt=!0
break
case E:return xt=d._init,T(xt(d._payload),z,H,K,st)}}if(xt)return st=st(d),xt=K===""?"."+Je(d,0):K,St(st)?(H="",xt!=null&&(H=xt.replace(pl,"$&/")+"/"),T(st,z,H,"",function(aa){return aa})):st!=null&&(Pe(st)&&(st=gl(st,H+(st.key==null||d&&d.key===st.key?"":(""+st.key).replace(pl,"$&/")+"/")+xt)),z.push(st)),1
xt=0
var xe=K===""?".":K+":"
if(St(d))for(var se=0
se<d.length
se++)K=d[se],ht=xe+Je(K,se),xt+=T(K,z,H,ht,st)
else if(se=Ot(d),typeof se=="function")for(d=se.call(d),se=0
!(K=d.next()).done
)K=K.value,ht=xe+Je(K,se++),xt+=T(K,z,H,ht,st)
else if(ht==="object"){if(typeof d.then=="function")return T(sl(d),z,H,K,st)
throw z=String(d),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return xt}function w(d,z,H){if(d==null)return d
var K=[],st=0
return T(d,K,"","",function(ht){return z.call(H,ht,st++)}),K}function it(d){if(d._status===-1){var z=d._result
z=z(),z.then(function(H){(d._status===0||d._status===-1)&&(d._status=1,d._result=H)},function(H){(d._status===0||d._status===-1)&&(d._status=2,d._result=H)}),d._status===-1&&(d._status=0,d._result=z)}if(d._status===1)return d._result.default
throw d._result}var Xt=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d})
if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d)
return}console.error(d)},Vt={map:w,forEach:function(d,z,H){w(d,function(){z.apply(this,arguments)},H)},count:function(d){var z=0
return w(d,function(){z++}),z},toArray:function(d){return w(d,function(z){return z})||[]},only:function(d){if(!Pe(d))throw Error("React.Children.only expected to receive a single React element child.")
return d}}
return dt.Activity=R,dt.Children=Vt,dt.Component=gt,dt.Fragment=ot,dt.Profiler=ct,dt.PureComponent=bt,dt.StrictMode=g,dt.Suspense=C,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,dt.__COMPILER_RUNTIME={__proto__:null,c:function(d){return U.H.useMemoCache(d)}},dt.cache=function(d){return function(){return d.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(d,z,H){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".")
var K=Lt({},d.props),st=d.key
if(z!=null)for(ht in z.key!==void 0&&(st=""+z.key),z)!J.call(z,ht)||ht==="key"||ht==="__self"||ht==="__source"||ht==="ref"&&z.ref===void 0||(K[ht]=z[ht])
var ht=arguments.length-2
if(ht===1)K.children=H
else if(1<ht){for(var xt=Array(ht),xe=0
xe<ht
xe++)xt[xe]=arguments[xe+2]
K.children=xt}return Ye(d.type,st,K)},dt.createContext=function(d){return d={$$typeof:ue,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:At,_context:d},d},dt.createElement=function(d,z,H){var K,st={},ht=null
if(z!=null)for(K in z.key!==void 0&&(ht=""+z.key),z)J.call(z,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(st[K]=z[K])
var xt=arguments.length-2
if(xt===1)st.children=H
else if(1<xt){for(var xe=Array(xt),se=0
se<xt
se++)xe[se]=arguments[se+2]
st.children=xe}if(d&&d.defaultProps)for(K in xt=d.defaultProps,xt)st[K]===void 0&&(st[K]=xt[K])
return Ye(d,ht,st)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(d){return{$$typeof:Tt,render:d}},dt.isValidElement=Pe,dt.lazy=function(d){return{$$typeof:E,_payload:{_status:-1,_result:d},_init:it}},dt.memo=function(d,z){return{$$typeof:b,type:d,compare:z===void 0?null:z}},dt.startTransition=function(d){var z=U.T,H={}
U.T=H
try{var K=d(),st=U.S
st!==null&&st(H,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(_,Xt)}catch(ht){Xt(ht)}finally{z!==null&&H.types!==null&&(z.types=H.types),U.T=z}},dt.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},dt.use=function(d){return U.H.use(d)},dt.useActionState=function(d,z,H){return U.H.useActionState(d,z,H)},dt.useCallback=function(d,z){return U.H.useCallback(d,z)},dt.useContext=function(d){return U.H.useContext(d)},dt.useDebugValue=function(){},dt.useDeferredValue=function(d,z){return U.H.useDeferredValue(d,z)},dt.useEffect=function(d,z){return U.H.useEffect(d,z)},dt.useEffectEvent=function(d){return U.H.useEffectEvent(d)},dt.useId=function(){return U.H.useId()},dt.useImperativeHandle=function(d,z,H){return U.H.useImperativeHandle(d,z,H)},dt.useInsertionEffect=function(d,z){return U.H.useInsertionEffect(d,z)},dt.useLayoutEffect=function(d,z){return U.H.useLayoutEffect(d,z)},dt.useMemo=function(d,z){return U.H.useMemo(d,z)},dt.useOptimistic=function(d,z){return U.H.useOptimistic(d,z)},dt.useReducer=function(d,z,H){return U.H.useReducer(d,z,H)},dt.useRef=function(d){return U.H.useRef(d)},dt.useState=function(d){return U.H.useState(d)},dt.useSyncExternalStore=function(d,z,H){return U.H.useSyncExternalStore(d,z,H)},dt.useTransition=function(){return U.H.useTransition()},dt.version="19.2.4",dt}var yd
function Lf(){return yd||(yd=1,_f.exports=a0()),_f.exports}var q=Lf(),Uf={exports:{}},sc={},qf={exports:{}},Hf={}
var vd
function n0(){return vd||(vd=1,(function(L){function o(T,w){var it=T.length
T.push(w)
t:for(
0<it
){var Xt=it-1>>>1,Vt=T[Xt]
if(0<ct(Vt,w))T[Xt]=w,T[it]=Vt,it=Xt
else break t}}function ot(T){return T.length===0?null:T[0]}function g(T){if(T.length===0)return null
var w=T[0],it=T.pop()
if(it!==w){T[0]=it
t:for(var Xt=0,Vt=T.length,d=Vt>>>1
Xt<d
){var z=2*(Xt+1)-1,H=T[z],K=z+1,st=T[K]
if(0>ct(H,it))K<Vt&&0>ct(st,H)?(T[Xt]=st,T[K]=it,Xt=K):(T[Xt]=H,T[z]=it,Xt=z)
else if(K<Vt&&0>ct(st,it))T[Xt]=st,T[K]=it,Xt=K
else break t}}return w}function ct(T,w){var it=T.sortIndex-w.sortIndex
return it!==0?it:T.id-w.id}if(L.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var At=performance
L.unstable_now=function(){return At.now()}}else{var ue=Date,Tt=ue.now()
L.unstable_now=function(){return ue.now()-Tt}}var C=[],b=[],E=1,R=null,G=3,Ot=!1,Bt=!1,Lt=!1,le=!1,gt=typeof setTimeout=="function"?setTimeout:null,et=typeof clearTimeout=="function"?clearTimeout:null,bt=typeof setImmediate<"u"?setImmediate:null
function mt(T){for(var w=ot(b)
w!==null
){if(w.callback===null)g(b)
else if(w.startTime<=T)g(b),w.sortIndex=w.expirationTime,o(C,w)
else break
w=ot(b)}}function St(T){if(Lt=!1,mt(T),!Bt)if(ot(C)!==null)Bt=!0,_||(_=!0,Ve())
else{var w=ot(b)
w!==null&&sl(St,w.startTime-T)}}var _=!1,U=-1,J=5,Ye=-1
function gl(){return le?!0:!(L.unstable_now()-Ye<J)}function Pe(){if(le=!1,_){var T=L.unstable_now()
Ye=T
var w=!0
try{t:{Bt=!1,Lt&&(Lt=!1,et(U),U=-1),Ot=!0
var it=G
try{e:{for(mt(T),R=ot(C)
R!==null&&!(R.expirationTime>T&&gl())
){var Xt=R.callback
if(typeof Xt=="function"){R.callback=null,G=R.priorityLevel
var Vt=Xt(R.expirationTime<=T)
if(T=L.unstable_now(),typeof Vt=="function"){R.callback=Vt,mt(T),w=!0
break e}R===ot(C)&&g(C),mt(T)}else g(C)
R=ot(C)}if(R!==null)w=!0
else{var d=ot(b)
d!==null&&sl(St,d.startTime-T),w=!1}}break t}finally{R=null,G=it,Ot=!1}w=void 0}}finally{w?Ve():_=!1}}}var Ve
if(typeof bt=="function")Ve=function(){bt(Pe)}
else if(typeof MessageChannel<"u"){var pl=new MessageChannel,Je=pl.port2
pl.port1.onmessage=Pe,Ve=function(){Je.postMessage(null)}}else Ve=function(){gt(Pe,0)}
function sl(T,w){U=gt(function(){T(L.unstable_now())},w)}L.unstable_IdlePriority=5,L.unstable_ImmediatePriority=1,L.unstable_LowPriority=4,L.unstable_NormalPriority=3,L.unstable_Profiling=null,L.unstable_UserBlockingPriority=2,L.unstable_cancelCallback=function(T){T.callback=null},L.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<T?Math.floor(1e3/T):5},L.unstable_getCurrentPriorityLevel=function(){return G},L.unstable_next=function(T){switch(G){case 1:case 2:case 3:var w=3
break
default:w=G}var it=G
G=w
try{return T()}finally{G=it}},L.unstable_requestPaint=function(){le=!0},L.unstable_runWithPriority=function(T,w){switch(T){case 1:case 2:case 3:case 4:case 5:break
default:T=3}var it=G
G=T
try{return w()}finally{G=it}},L.unstable_scheduleCallback=function(T,w,it){var Xt=L.unstable_now()
switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?Xt+it:Xt):it=Xt,T){case 1:var Vt=-1
break
case 2:Vt=250
break
case 5:Vt=1073741823
break
case 4:Vt=1e4
break
default:Vt=5e3}return Vt=it+Vt,T={id:E++,callback:w,priorityLevel:T,startTime:it,expirationTime:Vt,sortIndex:-1},it>Xt?(T.sortIndex=it,o(b,T),ot(C)===null&&T===ot(b)&&(Lt?(et(U),U=-1):Lt=!0,sl(St,it-Xt))):(T.sortIndex=Vt,o(C,T),Bt||Ot||(Bt=!0,_||(_=!0,Ve()))),T},L.unstable_shouldYield=gl,L.unstable_wrapCallback=function(T){var w=G
return function(){var it=G
G=w
try{return T.apply(this,arguments)}finally{G=it}}}})(Hf)),Hf}var gd
function u0(){return gd||(gd=1,qf.exports=n0()),qf.exports}var Bf={exports:{}},el={}
var pd
function c0(){if(pd)return el
pd=1
var L=Lf()
function o(C){var b="https://react.dev/errors/"+C
if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1])
for(var E=2
E<arguments.length
E++)b+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+C+"
 visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ot(){}var g={d:{f:ot,r:function(){throw Error(o(522))},D:ot,C:ot,L:ot,m:ot,X:ot,S:ot,M:ot},p:0,findDOMNode:null},ct=Symbol.for("react.portal")
function At(C,b,E){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null
return{$$typeof:ct,key:R==null?null:""+R,children:C,containerInfo:b,implementation:E}}var ue=L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
function Tt(C,b){if(C==="font")return""
if(typeof b=="string")return b==="use-credentials"?b:""}return el.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,el.createPortal=function(C,b){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null
if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(o(299))
return At(C,b,null,E)},el.flushSync=function(C){var b=ue.T,E=g.p
try{if(ue.T=null,g.p=2,C)return C()}finally{ue.T=b,g.p=E,g.d.f()}},el.preconnect=function(C,b){typeof C=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,g.d.C(C,b))},el.prefetchDNS=function(C){typeof C=="string"&&g.d.D(C)},el.preinit=function(C,b){if(typeof C=="string"&&b&&typeof b.as=="string"){var E=b.as,R=Tt(E,b.crossOrigin),G=typeof b.integrity=="string"?b.integrity:void 0,Ot=typeof b.fetchPriority=="string"?b.fetchPriority:void 0
E==="style"?g.d.S(C,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:R,integrity:G,fetchPriority:Ot}):E==="script"&&g.d.X(C,{crossOrigin:R,integrity:G,fetchPriority:Ot,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},el.preinitModule=function(C,b){if(typeof C=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var E=Tt(b.as,b.crossOrigin)
g.d.M(C,{crossOrigin:E,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&g.d.M(C)},el.preload=function(C,b){if(typeof C=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var E=b.as,R=Tt(E,b.crossOrigin)
g.d.L(C,E,{crossOrigin:R,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},el.preloadModule=function(C,b){if(typeof C=="string")if(b){var E=Tt(b.as,b.crossOrigin)
g.d.m(C,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:E,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else g.d.m(C)},el.requestFormReset=function(C){g.d.r(C)},el.unstable_batchedUpdates=function(C,b){return C(b)},el.useFormState=function(C,b,E){return ue.H.useFormState(C,b,E)},el.useFormStatus=function(){return ue.H.useHostTransitionStatus()},el.version="19.2.4",el}var bd
function i0(){if(bd)return Bf.exports
bd=1
function L(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L)}catch(o){console.error(o)}}return L(),Bf.exports=c0(),Bf.exports}var Sd
function s0(){if(Sd)return sc
Sd=1
var L=u0(),o=Lf(),ot=i0()
function g(t){var e="https://react.dev/errors/"+t
if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1])
for(var l=2
l<arguments.length
l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"
 visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ct(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function At(t){var e=t,l=t
if(t.alternate)for(
e.return
)e=e.return
else{t=e
do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return
while(t)}return e.tag===3?l:null}function ue(t){if(t.tag===13){var e=t.memoizedState
if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tt(t){if(t.tag===31){var e=t.memoizedState
if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function C(t){if(At(t)!==t)throw Error(g(188))}function b(t){var e=t.alternate
if(!e){if(e=At(t),e===null)throw Error(g(188))
return e!==t?null:t}for(var l=t,a=e

){var n=l.return
if(n===null)break
var u=n.alternate
if(u===null){if(a=n.return,a!==null){l=a
continue}break}if(n.child===u.child){for(u=n.child
u
){if(u===l)return C(n),t
if(u===a)return C(n),e
u=u.sibling}throw Error(g(188))}if(l.return!==a.return)l=n,a=u
else{for(var c=!1,s=n.child
s
){if(s===l){c=!0,l=n,a=u
break}if(s===a){c=!0,a=n,l=u
break}s=s.sibling}if(!c){for(s=u.child
s
){if(s===l){c=!0,l=u,a=n
break}if(s===a){c=!0,a=u,l=n
break}s=s.sibling}if(!c)throw Error(g(189))}}if(l.alternate!==a)throw Error(g(190))}if(l.tag!==3)throw Error(g(188))
return l.stateNode.current===l?t:e}function E(t){var e=t.tag
if(e===5||e===26||e===27||e===6)return t
for(t=t.child
t!==null
){if(e=E(t),e!==null)return e
t=t.sibling}return null}var R=Object.assign,G=Symbol.for("react.element"),Ot=Symbol.for("react.transitional.element"),Bt=Symbol.for("react.portal"),Lt=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),gt=Symbol.for("react.profiler"),et=Symbol.for("react.consumer"),bt=Symbol.for("react.context"),mt=Symbol.for("react.forward_ref"),St=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),Ye=Symbol.for("react.activity"),gl=Symbol.for("react.memo_cache_sentinel"),Pe=Symbol.iterator
function Ve(t){return t===null||typeof t!="object"?null:(t=Pe&&t[Pe]||t["@@iterator"],typeof t=="function"?t:null)}var pl=Symbol.for("react.client.reference")
function Je(t){if(t==null)return null
if(typeof t=="function")return t.$$typeof===pl?null:t.displayName||t.name||null
if(typeof t=="string")return t
switch(t){case Lt:return"Fragment"
case gt:return"Profiler"
case le:return"StrictMode"
case St:return"Suspense"
case _:return"SuspenseList"
case Ye:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Bt:return"Portal"
case bt:return t.displayName||"Context"
case et:return(t._context.displayName||"Context")+".Consumer"
case mt:var e=t.render
return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t
case U:return e=t.displayName||null,e!==null?e:Je(t.type)||"Memo"
case J:e=t._payload,t=t._init
try{return Je(t(e))}catch{}}return null}var sl=Array.isArray,T=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w=ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},Xt=[],Vt=-1
function d(t){return{current:t}}function z(t){0>Vt||(t.current=Xt[Vt],Xt[Vt]=null,Vt--)}function H(t,e){Vt++,Xt[Vt]=t.current,t.current=e}var K=d(null),st=d(null),ht=d(null),xt=d(null)
function xe(t,e){switch(H(ht,e),H(st,t),H(K,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?qh(t):0
break
default:if(t=e.tagName,e=e.namespaceURI)e=qh(e),t=Hh(e,t)
else switch(t){case"svg":t=1
break
case"math":t=2
break
default:t=0}}z(K),H(K,t)}function se(){z(K),z(st),z(ht)}function aa(t){t.memoizedState!==null&&H(xt,t)
var e=K.current,l=Hh(e,t.type)
e!==l&&(H(st,t),H(K,l))}function na(t){st.current===t&&(z(K),z(st)),xt.current===t&&(z(xt),ac._currentValue=it)}var zn,ou
function Xl(t){if(zn===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/)
zn=e&&e[1]||"",ou=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zn+t+ou}var hu=!1
function Cl(t,e){if(!t||hu)return""
hu=!0
var l=Error.prepareStackTrace
Error.prepareStackTrace=void 0
try{var a={DetermineComponentFrameRoot:function(){try{if(e){var N=function(){throw Error()}
if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(x){var S=x}Reflect.construct(t,[],N)}else{try{N.call()}catch(x){S=x}t.call(N.prototype)}}else{try{throw Error()}catch(x){S=x}(N=t())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(x){if(x&&S&&typeof x.stack=="string")return[x.stack,S.stack]}return[null,null]}}
a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot"
var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name")
n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"})
var u=a.DetermineComponentFrameRoot(),c=u[0],s=u[1]
if(c&&s){var r=c.split(`
`),p=s.split(`
`)
for(n=a=0
a<r.length&&!r[a].includes("DetermineComponentFrameRoot")
)a++
for(
n<p.length&&!p[n].includes("DetermineComponentFrameRoot")
)n++
if(a===r.length||n===p.length)for(a=r.length-1,n=p.length-1
1<=a&&0<=n&&r[a]!==p[n]
)n--
for(
1<=a&&0<=n
a--,n--)if(r[a]!==p[n]){if(a!==1||n!==1)do if(a--,n--,0>n||r[a]!==p[n]){var A=`
`+r[a].replace(" at new "," at ")
return t.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",t.displayName)),A}while(1<=a&&0<=n)
break}}}finally{hu=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Xl(l):""}function Ti(t,e){switch(t.tag){case 26:case 27:case 5:return Xl(t.type)
case 16:return Xl("Lazy")
case 13:return t.child!==e&&e!==null?Xl("Suspense Fallback"):Xl("Suspense")
case 19:return Xl("SuspenseList")
case 0:case 15:return Cl(t.type,!1)
case 11:return Cl(t.type.render,!1)
case 1:return Cl(t.type,!0)
case 31:return Xl("Activity")
default:return""}}function fc(t){try{var e="",l=null
do e+=Ti(t,l),l=t,t=t.return
while(t)
return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Nn=Object.prototype.hasOwnProperty,Na=L.unstable_scheduleCallback,en=L.unstable_cancelCallback,Ca=L.unstable_shouldYield,ua=L.unstable_requestPaint,Le=L.unstable_now,rc=L.unstable_getCurrentPriorityLevel,du=L.unstable_ImmediatePriority,Cn=L.unstable_UserBlockingPriority,On=L.unstable_NormalPriority,ln=L.unstable_LowPriority,mu=L.unstable_IdlePriority,Ei=L.log,ji=L.unstable_setDisableYieldValue,B=null,wt=null
function Zt(t){if(typeof Ei=="function"&&ji(t),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(B,t)}catch{}}var fe=Math.clz32?Math.clz32:fl,ve=Math.log,ll=Math.LN2
function fl(t){return t>>>=0,t===0?32:31-(ve(t)/ll|0)|0}var al=256,Ne=262144,nl=4194304
function re(t){var e=t&42
if(e!==0)return e
switch(t&-t){case 1:return 1
case 2:return 2
case 4:return 4
case 8:return 8
case 16:return 16
case 32:return 32
case 64:return 64
case 128:return 128
case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888
case 262144:case 524288:case 1048576:case 2097152:return t&3932160
case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560
case 67108864:return 67108864
case 134217728:return 134217728
case 268435456:return 268435456
case 536870912:return 536870912
case 1073741824:return 0
default:return t}}function tl(t,e,l){var a=t.pendingLanes
if(a===0)return 0
var n=0,u=t.suspendedLanes,c=t.pingedLanes
t=t.warmLanes
var s=a&134217727
return s!==0?(a=s&~u,a!==0?n=re(a):(c&=s,c!==0?n=re(c):l||(l=s&~t,l!==0&&(n=re(l))))):(s=a&~u,s!==0?n=re(s):c!==0?n=re(c):l||(l=a&~t,l!==0&&(n=re(l)))),n===0?0:e!==0&&e!==n&&(e&u)===0&&(u=n&-n,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:n}function ke(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ca(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250
case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3
case 4194304:case 8388608:case 16777216:case 33554432:return-1
case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1
default:return-1}}function ia(){var t=nl
return nl<<=1,(nl&62914560)===0&&(nl=4194304),t}function yu(t){for(var e=[],l=0
31>l
l++)e.push(t)
return e}function sa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function zi(t,e,l,a,n,u){var c=t.pendingLanes
t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0
var s=t.entanglements,r=t.expirationTimes,p=t.hiddenUpdates
for(l=c&~l
0<l
){var A=31-fe(l),N=1<<A
s[A]=0,r[A]=-1
var S=p[A]
if(S!==null)for(p[A]=null,A=0
A<S.length
A++){var x=S[A]
x!==null&&(x.lane&=-536870913)}l&=~N}a!==0&&oc(t,a,0),u!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=u&~(c&~e))}function oc(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e
var a=31-fe(e)
t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Rn(t,e){var l=t.entangledLanes|=e
for(t=t.entanglements
l
){var a=31-fe(l),n=1<<a
n&e|t[a]&e&&(t[a]|=e),l&=~n}}function hc(t,e){var l=e&-e
return l=(l&42)!==0?1:vu(l),(l&(t.suspendedLanes|e))!==0?0:l}function vu(t){switch(t){case 2:t=1
break
case 8:t=4
break
case 32:t=16
break
case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128
break
case 268435456:t=134217728
break
default:t=0}return t}function gu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function V(){var t=w.p
return t!==0?t:(t=window.event,t===void 0?32:ud(t.type))}function kl(t,e){var l=w.p
try{return w.p=t,e()}finally{w.p=l}}var wl=Math.random().toString(36).slice(2),Ce="__reactFiber$"+wl,Xe="__reactProps$"+wl,Fl="__reactContainer$"+wl,pu="__reactEvents$"+wl,Dn="__reactListeners$"+wl,dc="__reactHandles$"+wl,an="__reactResources$"+wl,nn="__reactMarker$"+wl
function bu(t){delete t[Ce],delete t[Xe],delete t[pu],delete t[Dn],delete t[dc]}function Q(t){var e=t[Ce]
if(e)return e
for(var l=t.parentNode
l
){if(e=l[Fl]||l[Ce]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Qh(t)
t!==null
){if(l=t[Ce])return l
t=Qh(t)}return e}t=l,l=t.parentNode}return null}function Ql(t){if(t=t[Ce]||t[Fl]){var e=t.tag
if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Oe(t){var e=t.tag
if(e===5||e===26||e===27||e===6)return t.stateNode
throw Error(g(33))}function Oa(t){var e=t[an]
return e||(e=t[an]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ge(t){t[nn]=!0}var Ra=new Set,Vl={}
function Re(t,e){ul(t,e),ul(t+"Capture",e)}function ul(t,e){for(Vl[t]=e,t=0
t<e.length
t++)Ra.add(e[t])}var cl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mc={},yc={}
function Ni(t){return Nn.call(yc,t)?!0:Nn.call(mc,t)?!1:cl.test(t)?yc[t]=!0:(mc[t]=!0,!1)}function un(t,e,l){if(Ni(e))if(l===null)t.removeAttribute(e)
else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e)
return
case"boolean":var a=e.toLowerCase().slice(0,5)
if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e)
return}}t.setAttribute(e,""+l)}}function _n(t,e,l){if(l===null)t.removeAttribute(e)
else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e)
return}t.setAttribute(e,""+l)}}function Et(t,e,l,a){if(a===null)t.removeAttribute(l)
else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l)
return}t.setAttributeNS(e,l,""+a)}}function f(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t
case"object":return t
default:return""}}function y(t){var e=t.type
return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function M(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e)
if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set
return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,u.call(this,c)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Z(t){if(!t._valueTracker){var e=y(t)?"checked":"value"
t._valueTracker=M(t,e,""+t[e])}}function O(t){if(!t)return!1
var e=t._valueTracker
if(!e)return!0
var l=e.getValue(),a=""
return t&&(a=y(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Y(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null
try{return t.activeElement||t.body}catch{return t.body}}var P=/[\n"\\]/g
function k(t){return t.replace(P,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ze(t,e,l,a,n,u,c,s){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),e!=null?c==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+f(e)):t.value!==""+f(e)&&(t.value=""+f(e)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),e!=null?X(t,c,f(e)):l!=null?X(t,c,f(l)):a!=null&&t.removeAttribute("value"),n==null&&u!=null&&(t.defaultChecked=!!u),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+f(s):t.removeAttribute("name")}function D(t,e,l,a,n,u,c,s){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Z(t)
return}l=l!=null?""+f(l):"",e=e!=null?""+f(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=s?t.checked:!!a,t.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c),Z(t)}function X(t,e,l){e==="number"&&Y(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function ce(t,e,l,a){if(t=t.options,e){e={}
for(var n=0
n<l.length
n++)e["$"+l[n]]=!0
for(l=0
l<t.length
l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+f(l),e=null,n=0
n<t.length
n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0)
return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Dt(t,e,l){if(e!=null&&(e=""+f(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e)
return}t.defaultValue=l!=null?""+f(l):""}function Kt(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(g(92))
if(sl(a)){if(1<a.length)throw Error(g(93))
a=a[0]}l=a}l==null&&(l=""),e=l}l=f(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),Z(t)}function ie(t,e){if(e){var l=t.firstChild
if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e
return}}t.textContent=e}var $=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "))
function tt(t,e,l){var a=e.indexOf("--")===0
l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||$.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function ft(t,e,l){if(e!=null&&typeof e!="object")throw Error(g(62))
if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="")
for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&tt(t,n,a)}else for(var u in e)e.hasOwnProperty(u)&&tt(t,u,e[u])}function at(t){if(t.indexOf("-")===-1)return!1
switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1
default:return!0}}var qt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
function rt(t){return Mt.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function yt(){}var $t=null
function Wt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ht=null,_t=null
function I(t){var e=Ql(t)
if(e&&(t=e.stateNode)){var l=t[Xe]||null
t:switch(t=e.stateNode,e.type){case"input":if(Ze(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t
l.parentNode
)l=l.parentNode
for(l=l.querySelectorAll('input[name="'+k(""+e)+'"][type="radio"]'),e=0
e<l.length
e++){var a=l[e]
if(a!==t&&a.form===t.form){var n=a[Xe]||null
if(!n)throw Error(g(90))
Ze(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0
e<l.length
e++)a=l[e],a.form===t.form&&O(a)}break t
case"textarea":Dt(t,l.value,l.defaultValue)
break t
case"select":e=l.value,e!=null&&ce(t,!!l.multiple,e,!1)}}}var oe=!1
function Ol(t,e,l){if(oe)return t(e,l)
oe=!0
try{var a=t(e)
return a}finally{if(oe=!1,(Ht!==null||_t!==null)&&(li(),Ht&&(e=Ht,t=_t,_t=Ht=null,I(e),t)))for(e=0
e<t.length
e++)I(t[e])}}function De(t,e){var l=t.stateNode
if(l===null)return null
var a=l[Xe]||null
if(a===null)return null
l=a[e]
t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a
break t
default:t=!1}if(t)return null
if(l&&typeof l!="function")throw Error(g(231,e,typeof l))
return l}var _e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cn=!1
if(_e)try{var $l={}
Object.defineProperty($l,"passive",{get:function(){cn=!0}}),window.addEventListener("test",$l,$l),window.removeEventListener("test",$l,$l)}catch{cn=!1}var Me=null,rl=null,bl=null
function Rl(){if(bl)return bl
var t,e=rl,l=e.length,a,n="value"in Me?Me.value:Me.textContent,u=n.length
for(t=0
t<l&&e[t]===n[t]
t++)
var c=l-t
for(a=1
a<=c&&e[l-a]===n[u-a]
a++)
return bl=n.slice(t,1<a?1-a:void 0)}function Wl(t){var e=t.keyCode
return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function fa(){return!1}function It(t){function e(l,a,n,u,c){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=c,this.currentTarget=null
for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(u):u[s])
return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Sl:fa,this.isPropagationStopped=fa,this}return R(e.prototype,{preventDefault:function(){this.defaultPrevented=!0
var l=this.nativeEvent
l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var l=this.nativeEvent
l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),e}var we={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sn=It(we),Dl=R({},we,{view:0,detail:0}),Ci=It(Dl),Su,Ue,pe,Ae=R({},Dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pe&&(pe&&t.type==="mousemove"?(Su=t.screenX-pe.screenX,Ue=t.screenY-pe.screenY):Ue=Su=0,pe=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:Ue}}),Te=It(Ae),xu=R({},Ae,{dataTransfer:0}),Mu=It(xu),nt=R({},Dl,{relatedTarget:0}),Ut=It(nt),Jt=R({},we,{animationName:0,elapsedTime:0,pseudoElement:0}),Ee=It(Jt),Un=R({},we,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ra=It(Un),fn=R({},we,{data:0}),vc=It(fn),Oi={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"}
function Ri(t){var e=this.nativeEvent
return e.getModifierState?e.getModifierState(t):(t=gc[t])?!!e[t]:!1}function pc(){return Ri}var Au=R({},Dl,{key:function(t){if(t.key){var e=Oi[t.key]||t.key
if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xf[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(t){return t.type==="keypress"?Wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Di=It(Au),_i=R({},Ae,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Da=It(_i),qn=R({},Dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),bc=It(qn),Ui=R({},we,{propertyName:0,elapsedTime:0,pseudoElement:0}),qi=It(Ui),Sc=R({},Ae,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hi=It(Sc),Bi=R({},we,{newState:0,oldState:0}),me=It(Bi),oa=[9,13,27,32],xl=_e&&"CompositionEvent"in window,ol=null
_e&&"documentMode"in document&&(ol=document.documentMode)
var rn=_e&&"TextEvent"in window&&!ol,on=_e&&(!xl||ol&&8<ol&&11>=ol),Tu=" ",wf=!1
function Qf(t,e){switch(t){case"keyup":return oa.indexOf(e.keyCode)!==-1
case"keydown":return e.keyCode!==229
case"keypress":case"mousedown":case"focusout":return!0
default:return!1}}function Vf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hn=!1
function Td(t,e){switch(t){case"compositionend":return Vf(e)
case"keypress":return e.which!==32?null:(wf=!0,Tu)
case"textInput":return t=e.data,t===Tu&&wf?null:t
default:return null}}function Ed(t,e){if(Hn)return t==="compositionend"||!xl&&Qf(t,e)?(t=Rl(),bl=rl=Me=null,Hn=!1,t):null
switch(t){case"paste":return null
case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char
if(e.which)return String.fromCharCode(e.which)}return null
case"compositionend":return on&&e.locale!=="ko"?null:e.data
default:return null}}var jd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0}
function Zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase()
return e==="input"?!!jd[t.type]:e==="textarea"}function Kf(t,e,l,a){Ht?_t?_t.push(a):_t=[a]:Ht=a,e=fi(e,"onChange"),0<e.length&&(l=new sn("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Eu=null,ju=null
function zd(t){Ch(t,0)}function xc(t){var e=Oe(t)
if(O(e))return t}function Jf(t,e){if(t==="change")return e}var kf=!1
if(_e){var Gi
if(_e){var Yi="oninput"in document
if(!Yi){var Ff=document.createElement("div")
Ff.setAttribute("oninput","return
"),Yi=typeof Ff.oninput=="function"}Gi=Yi}else Gi=!1
kf=Gi&&(!document.documentMode||9<document.documentMode)}function $f(){Eu&&(Eu.detachEvent("onpropertychange",Wf),ju=Eu=null)}function Wf(t){if(t.propertyName==="value"&&xc(ju)){var e=[]
Kf(e,ju,t,Wt(t)),Ol(zd,e)}}function Nd(t,e,l){t==="focusin"?($f(),Eu=e,ju=l,Eu.attachEvent("onpropertychange",Wf)):t==="focusout"&&$f()}function Cd(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xc(ju)}function Od(t,e){if(t==="click")return xc(e)}function Rd(t,e){if(t==="input"||t==="change")return xc(e)}function Dd(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ml=typeof Object.is=="function"?Object.is:Dd
function zu(t,e){if(Ml(t,e))return!0
if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1
var l=Object.keys(t),a=Object.keys(e)
if(l.length!==a.length)return!1
for(a=0
a<l.length
a++){var n=l[a]
if(!Nn.call(e,n)||!Ml(t[n],e[n]))return!1}return!0}function If(t){for(
t&&t.firstChild
)t=t.firstChild
return t}function Pf(t,e){var l=If(t)
t=0
for(var a
l
){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t}
t=a}t:{for(
l
){if(l.nextSibling){l=l.nextSibling
break t}l=l.parentNode}l=void 0}l=If(l)}}function tr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function er(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window
for(var e=Y(t.document)
e instanceof t.HTMLIFrameElement
){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow
else break
e=Y(t.document)}return e}function Li(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase()
return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var _d=_e&&"documentMode"in document&&11>=document.documentMode,Bn=null,Xi=null,Nu=null,wi=!1
function lr(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument
wi||Bn==null||Bn!==Y(a)||(a=Bn,"selectionStart"in a&&Li(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Nu&&zu(Nu,a)||(Nu=a,a=fi(Xi,"onSelect"),0<a.length&&(e=new sn("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Bn)))}function hn(t,e){var l={}
return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Gn={animationend:hn("Animation","AnimationEnd"),animationiteration:hn("Animation","AnimationIteration"),animationstart:hn("Animation","AnimationStart"),transitionrun:hn("Transition","TransitionRun"),transitionstart:hn("Transition","TransitionStart"),transitioncancel:hn("Transition","TransitionCancel"),transitionend:hn("Transition","TransitionEnd")},Qi={},ar={}
_e&&(ar=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition)
function dn(t){if(Qi[t])return Qi[t]
if(!Gn[t])return t
var e=Gn[t],l
for(l in e)if(e.hasOwnProperty(l)&&l in ar)return Qi[t]=e[l]
return t}var nr=dn("animationend"),ur=dn("animationiteration"),cr=dn("animationstart"),Ud=dn("transitionrun"),qd=dn("transitionstart"),Hd=dn("transitioncancel"),ir=dn("transitionend"),sr=new Map,Vi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ")
Vi.push("scrollEnd")
function Zl(t,e){sr.set(t,e),Re(e,[t])}var Mc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t})
if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t)
return}console.error(t)},_l=[],Yn=0,Zi=0
function Ac(){for(var t=Yn,e=Zi=Yn=0
e<t
){var l=_l[e]
_l[e++]=null
var a=_l[e]
_l[e++]=null
var n=_l[e]
_l[e++]=null
var u=_l[e]
if(_l[e++]=null,a!==null&&n!==null){var c=a.pending
c===null?n.next=n:(n.next=c.next,c.next=n),a.pending=n}u!==0&&fr(l,n,u)}}function Tc(t,e,l,a){_l[Yn++]=t,_l[Yn++]=e,_l[Yn++]=l,_l[Yn++]=a,Zi|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Ki(t,e,l,a){return Tc(t,e,l,a),Ec(t)}function mn(t,e){return Tc(t,null,null,e),Ec(t)}function fr(t,e,l){t.lanes|=l
var a=t.alternate
a!==null&&(a.lanes|=l)
for(var n=!1,u=t.return
u!==null
)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(n=!0)),t=u,u=u.return
return t.tag===3?(u=t.stateNode,n&&e!==null&&(n=31-fe(l),t=u.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),u):null}function Ec(t){if(50<$u)throw $u=0,ef=null,Error(g(185))
for(var e=t.return
e!==null
)t=e,e=t.return
return t.tag===3?t.stateNode:null}var Ln={}
function Bd(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Al(t,e,l,a){return new Bd(t,e,l,a)}function Ji(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ha(t,e){var l=t.alternate
return l===null?(l=Al(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function rr(t,e){t.flags&=65011714
var l=t.alternate
return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function jc(t,e,l,a,n,u){var c=0
if(a=t,typeof t=="function")Ji(t)&&(c=1)
else if(typeof t=="string")c=wm(t,l,K.current)?26:t==="html"||t==="head"||t==="body"?27:5
else t:switch(t){case Ye:return t=Al(31,l,e,n),t.elementType=Ye,t.lanes=u,t
case Lt:return yn(l.children,n,u,e)
case le:c=8,n|=24
break
case gt:return t=Al(12,l,e,n|2),t.elementType=gt,t.lanes=u,t
case St:return t=Al(13,l,e,n),t.elementType=St,t.lanes=u,t
case _:return t=Al(19,l,e,n),t.elementType=_,t.lanes=u,t
default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bt:c=10
break t
case et:c=9
break t
case mt:c=11
break t
case U:c=14
break t
case J:c=16,a=null
break t}c=29,l=Error(g(130,t===null?"null":typeof t,"")),a=null}return e=Al(c,l,e,n),e.elementType=t,e.type=a,e.lanes=u,e}function yn(t,e,l,a){return t=Al(7,t,a,e),t.lanes=l,t}function ki(t,e,l){return t=Al(6,t,null,e),t.lanes=l,t}function or(t){var e=Al(18,null,null,0)
return e.stateNode=t,e}function Fi(t,e,l){return e=Al(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var hr=new WeakMap
function Ul(t,e){if(typeof t=="object"&&t!==null){var l=hr.get(t)
return l!==void 0?l:(e={value:t,source:e,stack:fc(e)},hr.set(t,e),e)}return{value:t,source:e,stack:fc(e)}}var Xn=[],wn=0,zc=null,Cu=0,ql=[],Hl=0,_a=null,Il=1,Pl=""
function da(t,e){Xn[wn++]=Cu,Xn[wn++]=zc,zc=t,Cu=e}function dr(t,e,l){ql[Hl++]=Il,ql[Hl++]=Pl,ql[Hl++]=_a,_a=t
var a=Il
t=Pl
var n=32-fe(a)-1
a&=~(1<<n),l+=1
var u=32-fe(e)+n
if(30<u){var c=n-n%5
u=(a&(1<<c)-1).toString(32),a>>=c,n-=c,Il=1<<32-fe(e)+n|l<<n|a,Pl=u+t}else Il=1<<u|l<<n|a,Pl=t}function $i(t){t.return!==null&&(da(t,1),dr(t,1,0))}function Wi(t){for(
t===zc
)zc=Xn[--wn],Xn[wn]=null,Cu=Xn[--wn],Xn[wn]=null
for(
t===_a
)_a=ql[--Hl],ql[Hl]=null,Pl=ql[--Hl],ql[Hl]=null,Il=ql[--Hl],ql[Hl]=null}function mr(t,e){ql[Hl++]=Il,ql[Hl++]=Pl,ql[Hl++]=_a,Il=e.id,Pl=e.overflow,_a=t}var Fe=null,he=null,Rt=!1,Ua=null,Bl=!1,Ii=Error(g(519))
function qa(t){var e=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""))
throw Ou(Ul(e,t)),Ii}function yr(t){var e=t.stateNode,l=t.type,a=t.memoizedProps
switch(e[Ce]=t,e[Xe]=a,l){case"dialog":zt("cancel",e),zt("close",e)
break
case"iframe":case"object":case"embed":zt("load",e)
break
case"video":case"audio":for(l=0
l<Iu.length
l++)zt(Iu[l],e)
break
case"source":zt("error",e)
break
case"img":case"image":case"link":zt("error",e),zt("load",e)
break
case"details":zt("toggle",e)
break
case"input":zt("invalid",e),D(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0)
break
case"select":zt("invalid",e)
break
case"textarea":zt("invalid",e),Kt(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||_h(e.textContent,l)?(a.popover!=null&&(zt("beforetoggle",e),zt("toggle",e)),a.onScroll!=null&&zt("scroll",e),a.onScrollEnd!=null&&zt("scrollend",e),a.onClick!=null&&(e.onclick=yt),e=!0):e=!1,e||qa(t,!0)}function vr(t){for(Fe=t.return
Fe
)switch(Fe.tag){case 5:case 31:case 13:Bl=!1
return
case 27:case 3:Bl=!0
return
default:Fe=Fe.return}}function Qn(t){if(t!==Fe)return!1
if(!Rt)return vr(t),Rt=!0,!1
var e=t.tag,l
if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||gf(t.type,t.memoizedProps)),l=!l),l&&he&&qa(t),vr(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(g(317))
he=wh(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(g(317))
he=wh(t)}else e===27?(e=he,Fa(t.type)?(t=Mf,Mf=null,he=t):he=e):he=Fe?Yl(t.stateNode.nextSibling):null
return!0}function vn(){he=Fe=null,Rt=!1}function Pi(){var t=Ua
return t!==null&&(yl===null?yl=t:yl.push.apply(yl,t),Ua=null),t}function Ou(t){Ua===null?Ua=[t]:Ua.push(t)}var ts=d(null),gn=null,ma=null
function Ha(t,e,l){H(ts,e._currentValue),e._currentValue=l}function ya(t){t._currentValue=ts.current,z(ts)}function es(t,e,l){for(
t!==null
){var a=t.alternate
if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break
t=t.return}}function ls(t,e,l,a){var n=t.child
for(n!==null&&(n.return=t)
n!==null
){var u=n.dependencies
if(u!==null){var c=n.child
u=u.firstContext
t:for(
u!==null
){var s=u
u=n
for(var r=0
r<e.length
r++)if(s.context===e[r]){u.lanes|=l,s=u.alternate,s!==null&&(s.lanes|=l),es(u.return,l,t),a||(c=null)
break t}u=s.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(g(341))
c.lanes|=l,u=c.alternate,u!==null&&(u.lanes|=l),es(c,l,t),c=null}else c=n.child
if(c!==null)c.return=n
else for(c=n
c!==null
){if(c===t){c=null
break}if(n=c.sibling,n!==null){n.return=c.return,c=n
break}c=c.return}n=c}}function Vn(t,e,l,a){t=null
for(var n=e,u=!1
n!==null
){if(!u){if((n.flags&524288)!==0)u=!0
else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate
if(c===null)throw Error(g(387))
if(c=c.memoizedProps,c!==null){var s=n.type
Ml(n.pendingProps.value,c.value)||(t!==null?t.push(s):t=[s])}}else if(n===xt.current){if(c=n.alternate,c===null)throw Error(g(387))
c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(ac):t=[ac])}n=n.return}t!==null&&ls(e,t,l,a),e.flags|=262144}function Nc(t){for(t=t.firstContext
t!==null
){if(!Ml(t.context._currentValue,t.memoizedValue))return!0
t=t.next}return!1}function pn(t){gn=t,ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function $e(t){return gr(gn,t)}function Cc(t,e){return gn===null&&pn(t),gr(t,e)}function gr(t,e){var l=e._currentValue
if(e={context:e,memoizedValue:l,next:null},ma===null){if(t===null)throw Error(g(308))
ma=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ma=ma.next=e
return l}var Gd=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}}
this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Yd=L.unstable_scheduleCallback,Ld=L.unstable_NormalPriority,qe={$$typeof:bt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0}
function as(){return{controller:new Gd,data:new Map,refCount:0}}function Ru(t){t.refCount--,t.refCount===0&&Yd(Ld,function(){t.controller.abort()})}var Du=null,ns=0,Zn=0,Kn=null
function Xd(t,e){if(Du===null){var l=Du=[]
ns=0,Zn=sf(),Kn={status:"pending",value:void 0,then:function(a){l.push(a)}}}return ns++,e.then(pr,pr),e}function pr(){if(--ns===0&&Du!==null){Kn!==null&&(Kn.status="fulfilled")
var t=Du
Du=null,Zn=0,Kn=null
for(var e=0
e<t.length
e++)(0,t[e])()}}function wd(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}}
return t.then(function(){a.status="fulfilled",a.value=e
for(var n=0
n<l.length
n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0
n<l.length
n++)(0,l[n])(void 0)}),a}var br=T.S
T.S=function(t,e){ah=Le(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Xd(t,e),br!==null&&br(t,e)}
var bn=d(null)
function us(){var t=bn.current
return t!==null?t:ae.pooledCache}function Oc(t,e){e===null?H(bn,bn.current):H(bn,e.pool)}function Sr(){var t=us()
return t===null?null:{parent:qe._currentValue,pool:t}}var Jn=Error(g(460)),cs=Error(g(474)),Rc=Error(g(542)),Dc={then:function(){}}
function xr(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mr(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(yt,yt),e=l),e.status){case"fulfilled":return e.value
case"rejected":throw t=e.reason,Tr(t),t
default:if(typeof e.status=="string")e.then(yt,yt)
else{if(t=ae,t!==null&&100<t.shellSuspendCounter)throw Error(g(482))
t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e
n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e
n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value
case"rejected":throw t=e.reason,Tr(t),t}throw xn=e,Jn}}function Sn(t){try{var e=t._init
return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(xn=l,Jn):l}}var xn=null
function Ar(){if(xn===null)throw Error(g(459))
var t=xn
return xn=null,t}function Tr(t){if(t===Jn||t===Rc)throw Error(g(483))}var kn=null,_u=0
function _c(t){var e=_u
return _u+=1,kn===null&&(kn=[]),Mr(kn,t,e)}function Uu(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Uc(t,e){throw e.$$typeof===G?Error(g(525)):(t=Object.prototype.toString.call(e),Error(g(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Er(t){function e(m,h){if(t){var v=m.deletions
v===null?(m.deletions=[h],m.flags|=16):v.push(h)}}function l(m,h){if(!t)return null
for(
h!==null
)e(m,h),h=h.sibling
return null}function a(m){for(var h=new Map
m!==null
)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling
return h}function n(m,h){return m=ha(m,h),m.index=0,m.sibling=null,m}function u(m,h,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<h?(m.flags|=67108866,h):v):(m.flags|=67108866,h)):(m.flags|=1048576,h)}function c(m){return t&&m.alternate===null&&(m.flags|=67108866),m}function s(m,h,v,j){return h===null||h.tag!==6?(h=ki(v,m.mode,j),h.return=m,h):(h=n(h,v),h.return=m,h)}function r(m,h,v,j){var lt=v.type
return lt===Lt?A(m,h,v.props.children,j,v.key):h!==null&&(h.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===J&&Sn(lt)===h.type)?(h=n(h,v.props),Uu(h,v),h.return=m,h):(h=jc(v.type,v.key,v.props,null,m.mode,j),Uu(h,v),h.return=m,h)}function p(m,h,v,j){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Fi(v,m.mode,j),h.return=m,h):(h=n(h,v.children||[]),h.return=m,h)}function A(m,h,v,j,lt){return h===null||h.tag!==7?(h=yn(v,m.mode,j,lt),h.return=m,h):(h=n(h,v),h.return=m,h)}function N(m,h,v){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=ki(""+h,m.mode,v),h.return=m,h
if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ot:return v=jc(h.type,h.key,h.props,null,m.mode,v),Uu(v,h),v.return=m,v
case Bt:return h=Fi(h,m.mode,v),h.return=m,h
case J:return h=Sn(h),N(m,h,v)}if(sl(h)||Ve(h))return h=yn(h,m.mode,v,null),h.return=m,h
if(typeof h.then=="function")return N(m,_c(h),v)
if(h.$$typeof===bt)return N(m,Cc(m,h),v)
Uc(m,h)}return null}function S(m,h,v,j){var lt=h!==null?h.key:null
if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return lt!==null?null:s(m,h,""+v,j)
if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ot:return v.key===lt?r(m,h,v,j):null
case Bt:return v.key===lt?p(m,h,v,j):null
case J:return v=Sn(v),S(m,h,v,j)}if(sl(v)||Ve(v))return lt!==null?null:A(m,h,v,j,null)
if(typeof v.then=="function")return S(m,h,_c(v),j)
if(v.$$typeof===bt)return S(m,h,Cc(m,v),j)
Uc(m,v)}return null}function x(m,h,v,j,lt){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return m=m.get(v)||null,s(h,m,""+j,lt)
if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ot:return m=m.get(j.key===null?v:j.key)||null,r(h,m,j,lt)
case Bt:return m=m.get(j.key===null?v:j.key)||null,p(h,m,j,lt)
case J:return j=Sn(j),x(m,h,v,j,lt)}if(sl(j)||Ve(j))return m=m.get(v)||null,A(h,m,j,lt,null)
if(typeof j.then=="function")return x(m,h,v,_c(j),lt)
if(j.$$typeof===bt)return x(m,h,v,Cc(h,j),lt)
Uc(h,j)}return null}function F(m,h,v,j){for(var lt=null,Gt=null,W=h,pt=h=0,Ct=null
W!==null&&pt<v.length
pt++){W.index>pt?(Ct=W,W=null):Ct=W.sibling
var Yt=S(m,W,v[pt],j)
if(Yt===null){W===null&&(W=Ct)
break}t&&W&&Yt.alternate===null&&e(m,W),h=u(Yt,h,pt),Gt===null?lt=Yt:Gt.sibling=Yt,Gt=Yt,W=Ct}if(pt===v.length)return l(m,W),Rt&&da(m,pt),lt
if(W===null){for(
pt<v.length
pt++)W=N(m,v[pt],j),W!==null&&(h=u(W,h,pt),Gt===null?lt=W:Gt.sibling=W,Gt=W)
return Rt&&da(m,pt),lt}for(W=a(W)
pt<v.length
pt++)Ct=x(W,m,pt,v[pt],j),Ct!==null&&(t&&Ct.alternate!==null&&W.delete(Ct.key===null?pt:Ct.key),h=u(Ct,h,pt),Gt===null?lt=Ct:Gt.sibling=Ct,Gt=Ct)
return t&&W.forEach(function(tn){return e(m,tn)}),Rt&&da(m,pt),lt}function ut(m,h,v,j){if(v==null)throw Error(g(151))
for(var lt=null,Gt=null,W=h,pt=h=0,Ct=null,Yt=v.next()
W!==null&&!Yt.done
pt++,Yt=v.next()){W.index>pt?(Ct=W,W=null):Ct=W.sibling
var tn=S(m,W,Yt.value,j)
if(tn===null){W===null&&(W=Ct)
break}t&&W&&tn.alternate===null&&e(m,W),h=u(tn,h,pt),Gt===null?lt=tn:Gt.sibling=tn,Gt=tn,W=Ct}if(Yt.done)return l(m,W),Rt&&da(m,pt),lt
if(W===null){for(
!Yt.done
pt++,Yt=v.next())Yt=N(m,Yt.value,j),Yt!==null&&(h=u(Yt,h,pt),Gt===null?lt=Yt:Gt.sibling=Yt,Gt=Yt)
return Rt&&da(m,pt),lt}for(W=a(W)
!Yt.done
pt++,Yt=v.next())Yt=x(W,m,pt,Yt.value,j),Yt!==null&&(t&&Yt.alternate!==null&&W.delete(Yt.key===null?pt:Yt.key),h=u(Yt,h,pt),Gt===null?lt=Yt:Gt.sibling=Yt,Gt=Yt)
return t&&W.forEach(function(Pm){return e(m,Pm)}),Rt&&da(m,pt),lt}function ee(m,h,v,j){if(typeof v=="object"&&v!==null&&v.type===Lt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ot:t:{for(var lt=v.key
h!==null
){if(h.key===lt){if(lt=v.type,lt===Lt){if(h.tag===7){l(m,h.sibling),j=n(h,v.props.children),j.return=m,m=j
break t}}else if(h.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===J&&Sn(lt)===h.type){l(m,h.sibling),j=n(h,v.props),Uu(j,v),j.return=m,m=j
break t}l(m,h)
break}else e(m,h)
h=h.sibling}v.type===Lt?(j=yn(v.props.children,m.mode,j,v.key),j.return=m,m=j):(j=jc(v.type,v.key,v.props,null,m.mode,j),Uu(j,v),j.return=m,m=j)}return c(m)
case Bt:t:{for(lt=v.key
h!==null
){if(h.key===lt)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){l(m,h.sibling),j=n(h,v.children||[]),j.return=m,m=j
break t}else{l(m,h)
break}else e(m,h)
h=h.sibling}j=Fi(v,m.mode,j),j.return=m,m=j}return c(m)
case J:return v=Sn(v),ee(m,h,v,j)}if(sl(v))return F(m,h,v,j)
if(Ve(v)){if(lt=Ve(v),typeof lt!="function")throw Error(g(150))
return v=lt.call(v),ut(m,h,v,j)}if(typeof v.then=="function")return ee(m,h,_c(v),j)
if(v.$$typeof===bt)return ee(m,h,Cc(m,v),j)
Uc(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,h!==null&&h.tag===6?(l(m,h.sibling),j=n(h,v),j.return=m,m=j):(l(m,h),j=ki(v,m.mode,j),j.return=m,m=j),c(m)):l(m,h)}return function(m,h,v,j){try{_u=0
var lt=ee(m,h,v,j)
return kn=null,lt}catch(W){if(W===Jn||W===Rc)throw W
var Gt=Al(29,W,null,m.mode)
return Gt.lanes=j,Gt.return=m,Gt}}}var Mn=Er(!0),jr=Er(!1),Ba=!1
function is(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ss(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ya(t,e,l){var a=t.updateQueue
if(a===null)return null
if(a=a.shared,(Qt&2)!==0){var n=a.pending
return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=Ec(t),fr(t,null,l),e}return Tc(t,a,e,l),Ec(t)}function qu(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes
a&=t.pendingLanes,l|=a,e.lanes=l,Rn(t,l)}}function fs(t,e){var l=t.updateQueue,a=t.alternate
if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null
if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null}
u===null?n=u=c:u=u.next=c,l=l.next}while(l!==null)
u===null?n=u=e:u=u.next=e}else n=u=e
l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l
return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var rs=!1
function Hu(){if(rs){var t=Kn
if(t!==null)throw t}}function Bu(t,e,l,a){rs=!1
var n=t.updateQueue
Ba=!1
var u=n.firstBaseUpdate,c=n.lastBaseUpdate,s=n.shared.pending
if(s!==null){n.shared.pending=null
var r=s,p=r.next
r.next=null,c===null?u=p:c.next=p,c=r
var A=t.alternate
A!==null&&(A=A.updateQueue,s=A.lastBaseUpdate,s!==c&&(s===null?A.firstBaseUpdate=p:s.next=p,A.lastBaseUpdate=r))}if(u!==null){var N=n.baseState
c=0,A=p=r=null,s=u
do{var S=s.lane&-536870913,x=S!==s.lane
if(x?(Nt&S)===S:(a&S)===S){S!==0&&S===Zn&&(rs=!0),A!==null&&(A=A.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null})
t:{var F=t,ut=s
S=e
var ee=l
switch(ut.tag){case 1:if(F=ut.payload,typeof F=="function"){N=F.call(ee,N,S)
break t}N=F
break t
case 3:F.flags=F.flags&-65537|128
case 0:if(F=ut.payload,S=typeof F=="function"?F.call(ee,N,S):F,S==null)break t
N=R({},N,S)
break t
case 2:Ba=!0}}S=s.callback,S!==null&&(t.flags|=64,x&&(t.flags|=8192),x=n.callbacks,x===null?n.callbacks=[S]:x.push(S))}else x={lane:S,tag:s.tag,payload:s.payload,callback:s.callback,next:null},A===null?(p=A=x,r=N):A=A.next=x,c|=S
if(s=s.next,s===null){if(s=n.shared.pending,s===null)break
x=s,s=x.next,x.next=null,n.lastBaseUpdate=x,n.shared.pending=null}}while(!0)
A===null&&(r=N),n.baseState=r,n.firstBaseUpdate=p,n.lastBaseUpdate=A,u===null&&(n.shared.lanes=0),Va|=c,t.lanes=c,t.memoizedState=N}}function zr(t,e){if(typeof t!="function")throw Error(g(191,t))
t.call(e)}function Nr(t,e){var l=t.callbacks
if(l!==null)for(t.callbacks=null,t=0
t<l.length
t++)zr(l[t],e)}var Fn=d(null),qc=d(0)
function Cr(t,e){t=Ta,H(qc,t),H(Fn,e),Ta=t|e.baseLanes}function os(){H(qc,Ta),H(Fn,Fn.current)}function hs(){Ta=qc.current,z(Fn),z(qc)}var Tl=d(null),Gl=null
function La(t){var e=t.alternate
H(je,je.current&1),H(Tl,t),Gl===null&&(e===null||Fn.current!==null||e.memoizedState!==null)&&(Gl=t)}function ds(t){H(je,je.current),H(Tl,t),Gl===null&&(Gl=t)}function Or(t){t.tag===22?(H(je,je.current),H(Tl,t),Gl===null&&(Gl=t)):Xa()}function Xa(){H(je,je.current),H(Tl,Tl.current)}function El(t){z(Tl),Gl===t&&(Gl=null),z(je)}var je=d(0)
function Hc(t){for(var e=t
e!==null
){if(e.tag===13){var l=e.memoizedState
if(l!==null&&(l=l.dehydrated,l===null||Sf(l)||xf(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child
continue}if(e===t)break
for(
e.sibling===null
){if(e.return===null||e.return===t)return null
e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var va=0,vt=null,Pt=null,He=null,Bc=!1,$n=!1,An=!1,Gc=0,Gu=0,Wn=null,Qd=0
function be(){throw Error(g(321))}function ms(t,e){if(e===null)return!1
for(var l=0
l<e.length&&l<t.length
l++)if(!Ml(t[l],e[l]))return!1
return!0}function ys(t,e,l,a,n,u){return va=u,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,T.H=t===null||t.memoizedState===null?mo:Os,An=!1,u=l(a,n),An=!1,$n&&(u=Dr(e,l,a,n)),Rr(t),u}function Rr(t){T.H=Xu
var e=Pt!==null&&Pt.next!==null
if(va=0,He=Pt=vt=null,Bc=!1,Gu=0,Wn=null,e)throw Error(g(300))
t===null||Be||(t=t.dependencies,t!==null&&Nc(t)&&(Be=!0))}function Dr(t,e,l,a){vt=t
var n=0
do{if($n&&(Wn=null),Gu=0,$n=!1,25<=n)throw Error(g(301))
if(n+=1,He=Pt=null,t.updateQueue!=null){var u=t.updateQueue
u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}T.H=yo,u=e(l,a)}while($n)
return u}function Vd(){var t=T.H,e=t.useState()[0]
return e=typeof e.then=="function"?Yu(e):e,t=t.useState()[0],(Pt!==null?Pt.memoizedState:null)!==t&&(vt.flags|=1024),e}function vs(){var t=Gc!==0
return Gc=0,t}function gs(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function ps(t){if(Bc){for(t=t.memoizedState
t!==null
){var e=t.queue
e!==null&&(e.pending=null),t=t.next}Bc=!1}va=0,He=Pt=vt=null,$n=!1,Gu=Gc=0,Wn=null}function il(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null}
return He===null?vt.memoizedState=He=t:He=He.next=t,He}function ze(){if(Pt===null){var t=vt.alternate
t=t!==null?t.memoizedState:null}else t=Pt.next
var e=He===null?vt.memoizedState:He.next
if(e!==null)He=e,Pt=t
else{if(t===null)throw vt.alternate===null?Error(g(467)):Error(g(310))
Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},He===null?vt.memoizedState=He=t:He=He.next=t}return He}function Yc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yu(t){var e=Gu
return Gu+=1,Wn===null&&(Wn=[]),t=Mr(Wn,t,e),e=vt,(He===null?e.memoizedState:He.next)===null&&(e=e.alternate,T.H=e===null||e.memoizedState===null?mo:Os),t}function Lc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Yu(t)
if(t.$$typeof===bt)return $e(t)}throw Error(g(438,String(t)))}function bs(t){var e=null,l=vt.updateQueue
if(l!==null&&(e=l.memoCache),e==null){var a=vt.alternate
a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Yc(),vt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0
a<t
a++)l[a]=gl
return e.index++,l}function ga(t,e){return typeof e=="function"?e(t):e}function Xc(t){var e=ze()
return Ss(e,Pt,t)}function Ss(t,e,l){var a=t.queue
if(a===null)throw Error(g(311))
a.lastRenderedReducer=l
var n=t.baseQueue,u=a.pending
if(u!==null){if(n!==null){var c=n.next
n.next=u.next,u.next=c}e.baseQueue=n=u,a.pending=null}if(u=t.baseState,n===null)t.memoizedState=u
else{e=n.next
var s=c=null,r=null,p=e,A=!1
do{var N=p.lane&-536870913
if(N!==p.lane?(Nt&N)===N:(va&N)===N){var S=p.revertLane
if(S===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),N===Zn&&(A=!0)
else if((va&S)===S){p=p.next,S===Zn&&(A=!0)
continue}else N={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(s=r=N,c=u):r=r.next=N,vt.lanes|=S,Va|=S
N=p.action,An&&l(u,N),u=p.hasEagerState?p.eagerState:l(u,N)}else S={lane:N,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(s=r=S,c=u):r=r.next=S,vt.lanes|=N,Va|=N
p=p.next}while(p!==null&&p!==e)
if(r===null?c=u:r.next=s,!Ml(u,t.memoizedState)&&(Be=!0,A&&(l=Kn,l!==null)))throw l
t.memoizedState=u,t.baseState=c,t.baseQueue=r,a.lastRenderedState=u}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function xs(t){var e=ze(),l=e.queue
if(l===null)throw Error(g(311))
l.lastRenderedReducer=t
var a=l.dispatch,n=l.pending,u=e.memoizedState
if(n!==null){l.pending=null
var c=n=n.next
do u=t(u,c.action),c=c.next
while(c!==n)
Ml(u,e.memoizedState)||(Be=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,a]}function _r(t,e,l){var a=vt,n=ze(),u=Rt
if(u){if(l===void 0)throw Error(g(407))
l=l()}else l=e()
var c=!Ml((Pt||n).memoizedState,l)
if(c&&(n.memoizedState=l,Be=!0),n=n.queue,Ts(Hr.bind(null,a,n,t),[t]),n.getSnapshot!==e||c||He!==null&&He.memoizedState.tag&1){if(a.flags|=2048,In(9,{destroy:void 0},qr.bind(null,a,n,l,e),null),ae===null)throw Error(g(349))
u||(va&127)!==0||Ur(a,e,l)}return l}function Ur(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=vt.updateQueue,e===null?(e=Yc(),vt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function qr(t,e,l,a){e.value=l,e.getSnapshot=a,Br(e)&&Gr(t)}function Hr(t,e,l){return l(function(){Br(e)&&Gr(t)})}function Br(t){var e=t.getSnapshot
t=t.value
try{var l=e()
return!Ml(t,l)}catch{return!0}}function Gr(t){var e=mn(t,2)
e!==null&&vl(e,t,2)}function Ms(t){var e=il()
if(typeof t=="function"){var l=t
if(t=l(),An){Zt(!0)
try{l()}finally{Zt(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},e}function Yr(t,e,l,a){return t.baseState=l,Ss(t,Pt,typeof a=="function"?a:ga)}function Zd(t,e,l,a,n){if(Vc(t))throw Error(g(485))
if(t=e.action,t!==null){var u={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){u.listeners.push(c)}}
T.T!==null?l(!0):u.isTransition=!1,a(u),l=e.pending,l===null?(u.next=e.pending=u,Lr(e,u)):(u.next=l.next,e.pending=l.next=u)}}function Lr(t,e){var l=e.action,a=e.payload,n=t.state
if(e.isTransition){var u=T.T,c={}
T.T=c
try{var s=l(n,a),r=T.S
r!==null&&r(c,s),Xr(t,e,s)}catch(p){As(t,e,p)}finally{u!==null&&c.types!==null&&(u.types=c.types),T.T=u}}else try{u=l(n,a),Xr(t,e,u)}catch(p){As(t,e,p)}}function Xr(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){wr(t,e,a)},function(a){return As(t,e,a)}):wr(t,e,l)}function wr(t,e,l){e.status="fulfilled",e.value=l,Qr(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Lr(t,l)))}function As(t,e,l){var a=t.pending
if(t.pending=null,a!==null){a=a.next
do e.status="rejected",e.reason=l,Qr(e),e=e.next
while(e!==a)}t.action=null}function Qr(t){t=t.listeners
for(var e=0
e<t.length
e++)(0,t[e])()}function Vr(t,e){return e}function Zr(t,e){if(Rt){var l=ae.formState
if(l!==null){t:{var a=vt
if(Rt){if(he){e:{for(var n=he,u=Bl
n.nodeType!==8
){if(!u){n=null
break e}if(n=Yl(n.nextSibling),n===null){n=null
break e}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){he=Yl(n.nextSibling),a=n.data==="F!"
break t}}qa(a)}a=!1}a&&(e=l[0])}}return l=il(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:e},l.queue=a,l=ro.bind(null,vt,a),a.dispatch=l,a=Ms(!1),u=Cs.bind(null,vt,!1,a.queue),a=il(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=Zd.bind(null,vt,n,u,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function Kr(t){var e=ze()
return Jr(e,Pt,t)}function Jr(t,e,l){if(e=Ss(t,e,Vr)[0],t=Xc(ga)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Yu(e)}catch(c){throw c===Jn?Rc:c}else a=e
e=ze()
var n=e.queue,u=n.dispatch
return l!==e.memoizedState&&(vt.flags|=2048,In(9,{destroy:void 0},Kd.bind(null,n,l),null)),[a,u,t]}function Kd(t,e){t.action=e}function kr(t){var e=ze(),l=Pt
if(l!==null)return Jr(e,l,t)
ze(),e=e.memoizedState,l=ze()
var a=l.queue.dispatch
return l.memoizedState=t,[e,a,!1]}function In(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=vt.updateQueue,e===null&&(e=Yc(),vt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Fr(){return ze().memoizedState}function wc(t,e,l,a){var n=il()
vt.flags|=t,n.memoizedState=In(1|e,{destroy:void 0},l,a===void 0?null:a)}function Qc(t,e,l,a){var n=ze()
a=a===void 0?null:a
var u=n.memoizedState.inst
Pt!==null&&a!==null&&ms(a,Pt.memoizedState.deps)?n.memoizedState=In(e,u,l,a):(vt.flags|=t,n.memoizedState=In(1|e,u,l,a))}function $r(t,e){wc(8390656,8,t,e)}function Ts(t,e){Qc(2048,8,t,e)}function Jd(t){vt.flags|=4
var e=vt.updateQueue
if(e===null)e=Yc(),vt.updateQueue=e,e.events=[t]
else{var l=e.events
l===null?e.events=[t]:l.push(t)}}function Wr(t){var e=ze().memoizedState
return Jd({ref:e,nextImpl:t}),function(){if((Qt&2)!==0)throw Error(g(440))
return e.impl.apply(void 0,arguments)}}function Ir(t,e){return Qc(4,2,t,e)}function Pr(t,e){return Qc(4,4,t,e)}function to(t,e){if(typeof e=="function"){t=t()
var l=e(t)
return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function eo(t,e,l){l=l!=null?l.concat([t]):null,Qc(4,4,to.bind(null,e,t),l)}function Es(){}function lo(t,e){var l=ze()
e=e===void 0?null:e
var a=l.memoizedState
return e!==null&&ms(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function ao(t,e){var l=ze()
e=e===void 0?null:e
var a=l.memoizedState
if(e!==null&&ms(e,a[1]))return a[0]
if(a=t(),An){Zt(!0)
try{t()}finally{Zt(!1)}}return l.memoizedState=[a,e],a}function js(t,e,l){return l===void 0||(va&1073741824)!==0&&(Nt&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=uh(),vt.lanes|=t,Va|=t,l)}function no(t,e,l,a){return Ml(l,e)?l:Fn.current!==null?(t=js(t,l,a),Ml(t,e)||(Be=!0),t):(va&42)===0||(va&1073741824)!==0&&(Nt&261930)===0?(Be=!0,t.memoizedState=l):(t=uh(),vt.lanes|=t,Va|=t,e)}function uo(t,e,l,a,n){var u=w.p
w.p=u!==0&&8>u?u:8
var c=T.T,s={}
T.T=s,Cs(t,!1,e,l)
try{var r=n(),p=T.S
if(p!==null&&p(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var A=wd(r,a)
Lu(t,e,A,Nl(t))}else Lu(t,e,a,Nl(t))}catch(N){Lu(t,e,{then:function(){},status:"rejected",reason:N},Nl())}finally{w.p=u,c!==null&&s.types!==null&&(c.types=s.types),T.T=c}}function kd(){}function zs(t,e,l,a){if(t.tag!==5)throw Error(g(476))
var n=co(t).queue
uo(t,n,e,it,l===null?kd:function(){return io(t),l(a)})}function co(t){var e=t.memoizedState
if(e!==null)return e
e={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:it},next:null}
var l={}
return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function io(t){var e=co(t)
e.next===null&&(e=t.alternate.memoizedState),Lu(t,e.next.queue,{},Nl())}function Ns(){return $e(ac)}function so(){return ze().memoizedState}function fo(){return ze().memoizedState}function Fd(t){for(var e=t.return
e!==null
){switch(e.tag){case 24:case 3:var l=Nl()
t=Ga(l)
var a=Ya(e,t,l)
a!==null&&(vl(a,e,l),qu(a,e,l)),e={cache:as()},t.payload=e
return}e=e.return}}function $d(t,e,l){var a=Nl()
l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Vc(t)?oo(e,l):(l=Ki(t,e,l,a),l!==null&&(vl(l,t,a),ho(l,e,a)))}function ro(t,e,l){var a=Nl()
Lu(t,e,l,a)}function Lu(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null}
if(Vc(t))oo(e,n)
else{var u=t.alternate
if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var c=e.lastRenderedState,s=u(c,l)
if(n.hasEagerState=!0,n.eagerState=s,Ml(s,c))return Tc(t,e,n,0),ae===null&&Ac(),!1}catch{}if(l=Ki(t,e,n,a),l!==null)return vl(l,t,a),ho(l,e,a),!0}return!1}function Cs(t,e,l,a){if(a={lane:2,revertLane:sf(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vc(t)){if(e)throw Error(g(479))}else e=Ki(t,l,a,2),e!==null&&vl(e,t,2)}function Vc(t){var e=t.alternate
return t===vt||e!==null&&e===vt}function oo(t,e){$n=Bc=!0
var l=t.pending
l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function ho(t,e,l){if((l&4194048)!==0){var a=e.lanes
a&=t.pendingLanes,l|=a,e.lanes=l,Rn(t,l)}}var Xu={readContext:$e,use:Lc,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be}
Xu.useEffectEvent=be
var mo={readContext:$e,use:Lc,useCallback:function(t,e){return il().memoizedState=[t,e===void 0?null:e],t},useContext:$e,useEffect:$r,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,wc(4194308,4,to.bind(null,e,t),l)},useLayoutEffect:function(t,e){return wc(4194308,4,t,e)},useInsertionEffect:function(t,e){wc(4,2,t,e)},useMemo:function(t,e){var l=il()
e=e===void 0?null:e
var a=t()
if(An){Zt(!0)
try{t()}finally{Zt(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=il()
if(l!==void 0){var n=l(e)
if(An){Zt(!0)
try{l(e)}finally{Zt(!1)}}}else n=e
return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=$d.bind(null,vt,t),[a.memoizedState,t]},useRef:function(t){var e=il()
return t={current:t},e.memoizedState=t},useState:function(t){t=Ms(t)
var e=t.queue,l=ro.bind(null,vt,e)
return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Es,useDeferredValue:function(t,e){var l=il()
return js(l,t,e)},useTransition:function(){var t=Ms(!1)
return t=uo.bind(null,vt,t.queue,!0,!1),il().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=vt,n=il()
if(Rt){if(l===void 0)throw Error(g(407))
l=l()}else{if(l=e(),ae===null)throw Error(g(349))
(Nt&127)!==0||Ur(a,e,l)}n.memoizedState=l
var u={value:l,getSnapshot:e}
return n.queue=u,$r(Hr.bind(null,a,u,t),[t]),a.flags|=2048,In(9,{destroy:void 0},qr.bind(null,a,u,l,e),null),l},useId:function(){var t=il(),e=ae.identifierPrefix
if(Rt){var l=Pl,a=Il
l=(a&~(1<<32-fe(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=Gc++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=Qd++,e="_"+e+"r_"+l.toString(32)+"_"
return t.memoizedState=e},useHostTransitionStatus:Ns,useFormState:Zr,useActionState:Zr,useOptimistic:function(t){var e=il()
e.memoizedState=e.baseState=t
var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null}
return e.queue=l,e=Cs.bind(null,vt,!0,l),l.dispatch=e,[t,e]},useMemoCache:bs,useCacheRefresh:function(){return il().memoizedState=Fd.bind(null,vt)},useEffectEvent:function(t){var e=il(),l={impl:t}
return e.memoizedState=l,function(){if((Qt&2)!==0)throw Error(g(440))
return l.impl.apply(void 0,arguments)}}},Os={readContext:$e,use:Lc,useCallback:lo,useContext:$e,useEffect:Ts,useImperativeHandle:eo,useInsertionEffect:Ir,useLayoutEffect:Pr,useMemo:ao,useReducer:Xc,useRef:Fr,useState:function(){return Xc(ga)},useDebugValue:Es,useDeferredValue:function(t,e){var l=ze()
return no(l,Pt.memoizedState,t,e)},useTransition:function(){var t=Xc(ga)[0],e=ze().memoizedState
return[typeof t=="boolean"?t:Yu(t),e]},useSyncExternalStore:_r,useId:so,useHostTransitionStatus:Ns,useFormState:Kr,useActionState:Kr,useOptimistic:function(t,e){var l=ze()
return Yr(l,Pt,t,e)},useMemoCache:bs,useCacheRefresh:fo}
Os.useEffectEvent=Wr
var yo={readContext:$e,use:Lc,useCallback:lo,useContext:$e,useEffect:Ts,useImperativeHandle:eo,useInsertionEffect:Ir,useLayoutEffect:Pr,useMemo:ao,useReducer:xs,useRef:Fr,useState:function(){return xs(ga)},useDebugValue:Es,useDeferredValue:function(t,e){var l=ze()
return Pt===null?js(l,t,e):no(l,Pt.memoizedState,t,e)},useTransition:function(){var t=xs(ga)[0],e=ze().memoizedState
return[typeof t=="boolean"?t:Yu(t),e]},useSyncExternalStore:_r,useId:so,useHostTransitionStatus:Ns,useFormState:kr,useActionState:kr,useOptimistic:function(t,e){var l=ze()
return Pt!==null?Yr(l,Pt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:bs,useCacheRefresh:fo}
yo.useEffectEvent=Wr
function Rs(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:R({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Ds={enqueueSetState:function(t,e,l){t=t._reactInternals
var a=Nl(),n=Ga(a)
n.payload=e,l!=null&&(n.callback=l),e=Ya(t,n,a),e!==null&&(vl(e,t,a),qu(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals
var a=Nl(),n=Ga(a)
n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=Ya(t,n,a),e!==null&&(vl(e,t,a),qu(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals
var l=Nl(),a=Ga(l)
a.tag=2,e!=null&&(a.callback=e),e=Ya(t,a,l),e!==null&&(vl(e,t,l),qu(e,t,l))}}
function vo(t,e,l,a,n,u,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,c):e.prototype&&e.prototype.isPureReactComponent?!zu(l,a)||!zu(n,u):!0}function go(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Ds.enqueueReplaceState(e,e.state,null)}function Tn(t,e){var l=e
if("ref"in e){l={}
for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=R({},l))
for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function po(t){Mc(t)}function bo(t){console.error(t)}function So(t){Mc(t)}function Zc(t,e){try{var l=t.onUncaughtError
l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function xo(t,e,l){try{var a=t.onCaughtError
a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function _s(t,e,l){return l=Ga(l),l.tag=3,l.payload={element:null},l.callback=function(){Zc(t,e)},l}function Mo(t){return t=Ga(t),t.tag=3,t}function Ao(t,e,l,a){var n=l.type.getDerivedStateFromError
if(typeof n=="function"){var u=a.value
t.payload=function(){return n(u)},t.callback=function(){xo(e,l,a)}}var c=l.stateNode
c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){xo(e,l,a),typeof n!="function"&&(Za===null?Za=new Set([this]):Za.add(this))
var s=a.stack
this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function Wd(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Vn(e,l,n,!0),l=Tl.current,l!==null){switch(l.tag){case 31:case 13:return Gl===null?ai():l.alternate===null&&Se===0&&(Se=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Dc?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),nf(t,a,n)),!1
case 22:return l.flags|=65536,a===Dc?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),nf(t,a,n)),!1}throw Error(g(435,l.tag))}return nf(t,a,n),ai(),!1}if(Rt)return e=Tl.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Ii&&(t=Error(g(422),{cause:a}),Ou(Ul(t,l)))):(a!==Ii&&(e=Error(g(423),{cause:a}),Ou(Ul(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=Ul(a,l),n=_s(t.stateNode,a,n),fs(t,n),Se!==4&&(Se=2)),!1
var u=Error(g(520),{cause:a})
if(u=Ul(u,l),Fu===null?Fu=[u]:Fu.push(u),Se!==4&&(Se=2),e===null)return!0
a=Ul(a,l),l=e
do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=_s(l.stateNode,a,t),fs(l,t),!1
case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Za===null||!Za.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Mo(n),Ao(n,t,l,a),fs(l,n),!1}l=l.return}while(l!==null)
return!1}var Us=Error(g(461)),Be=!1
function We(t,e,l,a){e.child=t===null?jr(e,null,l,a):Mn(e,t.child,l,a)}function To(t,e,l,a,n){l=l.render
var u=e.ref
if("ref"in a){var c={}
for(var s in a)s!=="ref"&&(c[s]=a[s])}else c=a
return pn(e),a=ys(t,e,l,c,u,n),s=vs(),t!==null&&!Be?(gs(t,e,n),pa(t,e,n)):(Rt&&s&&$i(e),e.flags|=1,We(t,e,a,n),e.child)}function Eo(t,e,l,a,n){if(t===null){var u=l.type
return typeof u=="function"&&!Ji(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,jo(t,e,u,a,n)):(t=jc(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!ws(t,n)){var c=u.memoizedProps
if(l=l.compare,l=l!==null?l:zu,l(c,a)&&t.ref===e.ref)return pa(t,e,n)}return e.flags|=1,t=ha(u,a),t.ref=e.ref,t.return=e,e.child=t}function jo(t,e,l,a,n){if(t!==null){var u=t.memoizedProps
if(zu(u,a)&&t.ref===e.ref)if(Be=!1,e.pendingProps=a=u,ws(t,n))(t.flags&131072)!==0&&(Be=!0)
else return e.lanes=t.lanes,pa(t,e,n)}return qs(t,e,l,a,n)}function zo(t,e,l,a){var n=a.children,u=t!==null?t.memoizedState:null
if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0
a!==null
)n=n|a.lanes|a.childLanes,a=a.sibling
a=n&~u}else a=0,e.child=null
return No(t,e,u,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Oc(e,u!==null?u.cachePool:null),u!==null?Cr(e,u):os(),Or(e)
else return a=e.lanes=536870912,No(t,e,u!==null?u.baseLanes|l:l,l,a)}else u!==null?(Oc(e,u.cachePool),Cr(e,u),Xa(),e.memoizedState=null):(t!==null&&Oc(e,null),os(),Xa())
return We(t,e,n,l),e.child}function wu(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function No(t,e,l,a,n){var u=us()
return u=u===null?null:{parent:qe._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&Oc(e,null),os(),Or(e),t!==null&&Vn(t,e,a,!0),e.childLanes=n,null}function Kc(t,e){return e=kc({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Co(t,e,l){return Mn(e,t.child,null,l),t=Kc(e,e.pendingProps),t.flags|=2,El(e),e.memoizedState=null,t}function Id(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0
if(e.flags&=-129,t===null){if(Rt){if(a.mode==="hidden")return t=Kc(e,a),e.lanes=536870912,wu(null,t)
if(ds(e),(t=he)?(t=Xh(t,Bl),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:_a!==null?{id:Il,overflow:Pl}:null,retryLane:536870912,hydrationErrors:null},l=or(t),l.return=e,e.child=l,Fe=e,he=null)):t=null,t===null)throw qa(e)
return e.lanes=536870912,null}return Kc(e,a)}var u=t.memoizedState
if(u!==null){var c=u.dehydrated
if(ds(e),n)if(e.flags&256)e.flags&=-257,e=Co(t,e,l)
else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null
else throw Error(g(558))
else if(Be||Vn(t,e,l,!1),n=(l&t.childLanes)!==0,Be||n){if(a=ae,a!==null&&(c=hc(a,l),c!==0&&c!==u.retryLane))throw u.retryLane=c,mn(t,c),vl(a,t,c),Us
ai(),e=Co(t,e,l)}else t=u.treeContext,he=Yl(c.nextSibling),Fe=e,Rt=!0,Ua=null,Bl=!1,t!==null&&mr(e,t),e=Kc(e,a),e.flags|=4096
return e}return t=ha(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Jc(t,e){var l=e.ref
if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816)
else{if(typeof l!="function"&&typeof l!="object")throw Error(g(284))
(t===null||t.ref!==l)&&(e.flags|=4194816)}}function qs(t,e,l,a,n){return pn(e),l=ys(t,e,l,a,void 0,n),a=vs(),t!==null&&!Be?(gs(t,e,n),pa(t,e,n)):(Rt&&a&&$i(e),e.flags|=1,We(t,e,l,n),e.child)}function Oo(t,e,l,a,n,u){return pn(e),e.updateQueue=null,l=Dr(e,a,l,n),Rr(t),a=vs(),t!==null&&!Be?(gs(t,e,u),pa(t,e,u)):(Rt&&a&&$i(e),e.flags|=1,We(t,e,l,u),e.child)}function Ro(t,e,l,a,n){if(pn(e),e.stateNode===null){var u=Ln,c=l.contextType
typeof c=="object"&&c!==null&&(u=$e(c)),u=new l(a,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ds,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=a,u.state=e.memoizedState,u.refs={},is(e),c=l.contextType,u.context=typeof c=="object"&&c!==null?$e(c):Ln,u.state=e.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(Rs(e,l,c,a),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(c=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),c!==u.state&&Ds.enqueueReplaceState(u,u.state,null),Bu(e,a,u,n),Hu(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){u=e.stateNode
var s=e.memoizedProps,r=Tn(l,s)
u.props=r
var p=u.context,A=l.contextType
c=Ln,typeof A=="object"&&A!==null&&(c=$e(A))
var N=l.getDerivedStateFromProps
A=typeof N=="function"||typeof u.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,A||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s||p!==c)&&go(e,u,a,c),Ba=!1
var S=e.memoizedState
u.state=S,Bu(e,a,u,n),Hu(),p=e.memoizedState,s||S!==p||Ba?(typeof N=="function"&&(Rs(e,l,N,a),p=e.memoizedState),(r=Ba||vo(e,l,r,a,S,p,c))?(A||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=p),u.props=a,u.state=p,u.context=c,a=r):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{u=e.stateNode,ss(t,e),c=e.memoizedProps,A=Tn(l,c),u.props=A,N=e.pendingProps,S=u.context,p=l.contextType,r=Ln,typeof p=="object"&&p!==null&&(r=$e(p)),s=l.getDerivedStateFromProps,(p=typeof s=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c!==N||S!==r)&&go(e,u,a,r),Ba=!1,S=e.memoizedState,u.state=S,Bu(e,a,u,n),Hu()
var x=e.memoizedState
c!==N||S!==x||Ba||t!==null&&t.dependencies!==null&&Nc(t.dependencies)?(typeof s=="function"&&(Rs(e,l,s,a),x=e.memoizedState),(A=Ba||vo(e,l,A,a,S,x,r)||t!==null&&t.dependencies!==null&&Nc(t.dependencies))?(p||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,x,r),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,x,r)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||c===t.memoizedProps&&S===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&S===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=x),u.props=a,u.state=x,u.context=r,a=A):(typeof u.componentDidUpdate!="function"||c===t.memoizedProps&&S===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&S===t.memoizedState||(e.flags|=1024),a=!1)}return u=a,Jc(t,e),a=(e.flags&128)!==0,u||a?(u=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&a?(e.child=Mn(e,t.child,null,n),e.child=Mn(e,null,l,n)):We(t,e,l,n),e.memoizedState=u.state,t=e.child):t=pa(t,e,n),t}function Do(t,e,l,a){return vn(),e.flags|=256,We(t,e,l,a),e.child}var Hs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null}
function Bs(t){return{baseLanes:t,cachePool:Sr()}}function Gs(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=zl),t}function _o(t,e,l){var a=e.pendingProps,n=!1,u=(e.flags&128)!==0,c
if((c=u)||(c=t!==null&&t.memoizedState===null?!1:(je.current&2)!==0),c&&(n=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,t===null){if(Rt){if(n?La(e):Xa(),(t=he)?(t=Xh(t,Bl),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:_a!==null?{id:Il,overflow:Pl}:null,retryLane:536870912,hydrationErrors:null},l=or(t),l.return=e,e.child=l,Fe=e,he=null)):t=null,t===null)throw qa(e)
return xf(t)?e.lanes=32:e.lanes=536870912,null}var s=a.children
return a=a.fallback,n?(Xa(),n=e.mode,s=kc({mode:"hidden",children:s},n),a=yn(a,n,l,null),s.return=e,a.return=e,s.sibling=a,e.child=s,a=e.child,a.memoizedState=Bs(l),a.childLanes=Gs(t,c,l),e.memoizedState=Hs,wu(null,a)):(La(e),Ys(e,s))}var r=t.memoizedState
if(r!==null&&(s=r.dehydrated,s!==null)){if(u)e.flags&256?(La(e),e.flags&=-257,e=Ls(t,e,l)):e.memoizedState!==null?(Xa(),e.child=t.child,e.flags|=128,e=null):(Xa(),s=a.fallback,n=e.mode,a=kc({mode:"visible",children:a.children},n),s=yn(s,n,l,null),s.flags|=2,a.return=e,s.return=e,a.sibling=s,e.child=a,Mn(e,t.child,null,l),a=e.child,a.memoizedState=Bs(l),a.childLanes=Gs(t,c,l),e.memoizedState=Hs,e=wu(null,a))
else if(La(e),xf(s)){if(c=s.nextSibling&&s.nextSibling.dataset,c)var p=c.dgst
c=p,a=Error(g(419)),a.stack="",a.digest=c,Ou({value:a,source:null,stack:null}),e=Ls(t,e,l)}else if(Be||Vn(t,e,l,!1),c=(l&t.childLanes)!==0,Be||c){if(c=ae,c!==null&&(a=hc(c,l),a!==0&&a!==r.retryLane))throw r.retryLane=a,mn(t,a),vl(c,t,a),Us
Sf(s)||ai(),e=Ls(t,e,l)}else Sf(s)?(e.flags|=192,e.child=t.child,e=null):(t=r.treeContext,he=Yl(s.nextSibling),Fe=e,Rt=!0,Ua=null,Bl=!1,t!==null&&mr(e,t),e=Ys(e,a.children),e.flags|=4096)
return e}return n?(Xa(),s=a.fallback,n=e.mode,r=t.child,p=r.sibling,a=ha(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&65011712,p!==null?s=ha(p,s):(s=yn(s,n,l,null),s.flags|=2),s.return=e,a.return=e,a.sibling=s,e.child=a,wu(null,a),a=e.child,s=t.child.memoizedState,s===null?s=Bs(l):(n=s.cachePool,n!==null?(r=qe._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=Sr(),s={baseLanes:s.baseLanes|l,cachePool:n}),a.memoizedState=s,a.childLanes=Gs(t,c,l),e.memoizedState=Hs,wu(t.child,a)):(La(e),l=t.child,t=l.sibling,l=ha(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=l,e.memoizedState=null,l)}function Ys(t,e){return e=kc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function kc(t,e){return t=Al(22,t,null,e),t.lanes=0,t}function Ls(t,e,l){return Mn(e,t.child,null,l),t=Ys(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Uo(t,e,l){t.lanes|=e
var a=t.alternate
a!==null&&(a.lanes|=e),es(t.return,e,l)}function Xs(t,e,l,a,n,u){var c=t.memoizedState
c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:u}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=l,c.tailMode=n,c.treeForkCount=u)}function qo(t,e,l){var a=e.pendingProps,n=a.revealOrder,u=a.tail
a=a.children
var c=je.current,s=(c&2)!==0
if(s?(c=c&1|2,e.flags|=128):c&=1,H(je,c),We(t,e,a,l),a=Rt?Cu:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child
t!==null
){if(t.tag===13)t.memoizedState!==null&&Uo(t,l,e)
else if(t.tag===19)Uo(t,l,e)
else if(t.child!==null){t.child.return=t,t=t.child
continue}if(t===e)break t
for(
t.sibling===null
){if(t.return===null||t.return===e)break t
t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null
l!==null
)t=l.alternate,t!==null&&Hc(t)===null&&(n=l),l=l.sibling
l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),Xs(e,!1,n,l,u,a)
break
case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null
n!==null
){if(t=n.alternate,t!==null&&Hc(t)===null){e.child=n
break}t=n.sibling,n.sibling=l,l=n,n=t}Xs(e,!0,l,null,u,a)
break
case"together":Xs(e,!1,null,null,void 0,a)
break
default:e.memoizedState=null}return e.child}function pa(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Va|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Vn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null
if(t!==null&&e.child!==t.child)throw Error(g(153))
if(e.child!==null){for(t=e.child,l=ha(t,t.pendingProps),e.child=l,l.return=e
t.sibling!==null
)t=t.sibling,l=l.sibling=ha(t,t.pendingProps),l.return=e
l.sibling=null}return e.child}function ws(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Nc(t)))}function Pd(t,e,l){switch(e.tag){case 3:xe(e,e.stateNode.containerInfo),Ha(e,qe,t.memoizedState.cache),vn()
break
case 27:case 5:aa(e)
break
case 4:xe(e,e.stateNode.containerInfo)
break
case 10:Ha(e,e.type,e.memoizedProps.value)
break
case 31:if(e.memoizedState!==null)return e.flags|=128,ds(e),null
break
case 13:var a=e.memoizedState
if(a!==null)return a.dehydrated!==null?(La(e),e.flags|=128,null):(l&e.child.childLanes)!==0?_o(t,e,l):(La(e),t=pa(t,e,l),t!==null?t.sibling:null)
La(e)
break
case 19:var n=(t.flags&128)!==0
if(a=(l&e.childLanes)!==0,a||(Vn(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return qo(t,e,l)
e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),H(je,je.current),a)break
return null
case 22:return e.lanes=0,zo(t,e,l,e.pendingProps)
case 24:Ha(e,qe,t.memoizedState.cache)}return pa(t,e,l)}function Ho(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Be=!0
else{if(!ws(t,l)&&(e.flags&128)===0)return Be=!1,Pd(t,e,l)
Be=(t.flags&131072)!==0}else Be=!1,Rt&&(e.flags&1048576)!==0&&dr(e,Cu,e.index)
switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps
if(t=Sn(e.elementType),e.type=t,typeof t=="function")Ji(t)?(a=Tn(t,a),e.tag=1,e=Ro(null,e,t,a,l)):(e.tag=0,e=qs(null,e,t,a,l))
else{if(t!=null){var n=t.$$typeof
if(n===mt){e.tag=11,e=To(null,e,t,a,l)
break t}else if(n===U){e.tag=14,e=Eo(null,e,t,a,l)
break t}}throw e=Je(t)||t,Error(g(306,e,""))}}return e
case 0:return qs(t,e,e.type,e.pendingProps,l)
case 1:return a=e.type,n=Tn(a,e.pendingProps),Ro(t,e,a,n,l)
case 3:t:{if(xe(e,e.stateNode.containerInfo),t===null)throw Error(g(387))
a=e.pendingProps
var u=e.memoizedState
n=u.element,ss(t,e),Bu(e,a,null,l)
var c=e.memoizedState
if(a=c.cache,Ha(e,qe,a),a!==u.cache&&ls(e,[qe],l,!0),Hu(),a=c.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Do(t,e,a,l)
break t}else if(a!==n){n=Ul(Error(g(424)),e),Ou(n),e=Do(t,e,a,l)
break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,he=Yl(t.firstChild),Fe=e,Rt=!0,Ua=null,Bl=!0,l=jr(e,null,a,l),e.child=l
l
)l.flags=l.flags&-3|4096,l=l.sibling
else{if(vn(),a===n){e=pa(t,e,l)
break t}We(t,e,a,l)}e=e.child}return e
case 26:return Jc(t,e),t===null?(l=Jh(e.type,null,e.pendingProps,null))?e.memoizedState=l:Rt||(l=e.type,t=e.pendingProps,a=ri(ht.current).createElement(l),a[Ce]=e,a[Xe]=t,Ie(a,l,t),ge(a),e.stateNode=a):e.memoizedState=Jh(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null
case 27:return aa(e),t===null&&Rt&&(a=e.stateNode=Vh(e.type,e.pendingProps,ht.current),Fe=e,Bl=!0,n=he,Fa(e.type)?(Mf=n,he=Yl(a.firstChild)):he=n),We(t,e,e.pendingProps.children,l),Jc(t,e),t===null&&(e.flags|=4194304),e.child
case 5:return t===null&&Rt&&((n=a=he)&&(a=Cm(a,e.type,e.pendingProps,Bl),a!==null?(e.stateNode=a,Fe=e,he=Yl(a.firstChild),Bl=!1,n=!0):n=!1),n||qa(e)),aa(e),n=e.type,u=e.pendingProps,c=t!==null?t.memoizedProps:null,a=u.children,gf(n,u)?a=null:c!==null&&gf(n,c)&&(e.flags|=32),e.memoizedState!==null&&(n=ys(t,e,Vd,null,null,l),ac._currentValue=n),Jc(t,e),We(t,e,a,l),e.child
case 6:return t===null&&Rt&&((t=l=he)&&(l=Om(l,e.pendingProps,Bl),l!==null?(e.stateNode=l,Fe=e,he=null,t=!0):t=!1),t||qa(e)),null
case 13:return _o(t,e,l)
case 4:return xe(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Mn(e,null,a,l):We(t,e,a,l),e.child
case 11:return To(t,e,e.type,e.pendingProps,l)
case 7:return We(t,e,e.pendingProps,l),e.child
case 8:return We(t,e,e.pendingProps.children,l),e.child
case 12:return We(t,e,e.pendingProps.children,l),e.child
case 10:return a=e.pendingProps,Ha(e,e.type,a.value),We(t,e,a.children,l),e.child
case 9:return n=e.type._context,a=e.pendingProps.children,pn(e),n=$e(n),a=a(n),e.flags|=1,We(t,e,a,l),e.child
case 14:return Eo(t,e,e.type,e.pendingProps,l)
case 15:return jo(t,e,e.type,e.pendingProps,l)
case 19:return qo(t,e,l)
case 31:return Id(t,e,l)
case 22:return zo(t,e,l,e.pendingProps)
case 24:return pn(e),a=$e(qe),t===null?(n=us(),n===null&&(n=ae,u=as(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),e.memoizedState={parent:a,cache:n},is(e),Ha(e,qe,n)):((t.lanes&l)!==0&&(ss(t,e),Bu(e,null,null,l),Hu()),n=t.memoizedState,u=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Ha(e,qe,a)):(a=u.cache,Ha(e,qe,a),a!==n.cache&&ls(e,[qe],l,!0))),We(t,e,e.pendingProps.children,l),e.child
case 29:throw e.pendingProps}throw Error(g(156,e.tag))}function ba(t){t.flags|=4}function Qs(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192
else if(fh())t.flags|=8192
else throw xn=Dc,cs}else t.flags&=-16777217}function Bo(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217
else if(t.flags|=16777216,!Ih(e))if(fh())t.flags|=8192
else throw xn=Dc,cs}function Fc(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?ia():536870912,t.lanes|=e,lu|=e)}function Qu(t,e){if(!Rt)switch(t.tailMode){case"hidden":e=t.tail
for(var l=null
e!==null
)e.alternate!==null&&(l=e),e=e.sibling
l===null?t.tail=null:l.sibling=null
break
case"collapsed":l=t.tail
for(var a=null
l!==null
)l.alternate!==null&&(a=l),l=l.sibling
a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function de(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0
if(e)for(var n=t.child
n!==null
)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling
else for(n=t.child
n!==null
)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling
return t.subtreeFlags|=a,t.childLanes=l,e}function tm(t,e,l){var a=e.pendingProps
switch(Wi(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(e),null
case 1:return de(e),null
case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ya(qe),se(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Qn(e)?ba(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Pi())),de(e),null
case 26:var n=e.type,u=e.memoizedState
return t===null?(ba(e),u!==null?(de(e),Bo(e,u)):(de(e),Qs(e,n,null,a,l))):u?u!==t.memoizedState?(ba(e),de(e),Bo(e,u)):(de(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&ba(e),de(e),Qs(e,n,t,a,l)),null
case 27:if(na(e),l=ht.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&ba(e)
else{if(!a){if(e.stateNode===null)throw Error(g(166))
return de(e),null}t=K.current,Qn(e)?yr(e):(t=Vh(n,a,l),e.stateNode=t,ba(e))}return de(e),null
case 5:if(na(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&ba(e)
else{if(!a){if(e.stateNode===null)throw Error(g(166))
return de(e),null}if(u=K.current,Qn(e))yr(e)
else{var c=ri(ht.current)
switch(u){case 1:u=c.createElementNS("http://www.w3.org/2000/svg",n)
break
case 2:u=c.createElementNS("http://www.w3.org/1998/Math/MathML",n)
break
default:switch(n){case"svg":u=c.createElementNS("http://www.w3.org/2000/svg",n)
break
case"math":u=c.createElementNS("http://www.w3.org/1998/Math/MathML",n)
break
case"script":u=c.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild)
break
case"select":u=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size)
break
default:u=typeof a.is=="string"?c.createElement(n,{is:a.is}):c.createElement(n)}}u[Ce]=e,u[Xe]=a
t:for(c=e.child
c!==null
){if(c.tag===5||c.tag===6)u.appendChild(c.stateNode)
else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child
continue}if(c===e)break t
for(
c.sibling===null
){if(c.return===null||c.return===e)break t
c=c.return}c.sibling.return=c.return,c=c.sibling}e.stateNode=u
t:switch(Ie(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus
break t
case"img":a=!0
break t
default:a=!1}a&&ba(e)}}return de(e),Qs(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null
case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&ba(e)
else{if(typeof a!="string"&&e.stateNode===null)throw Error(g(166))
if(t=ht.current,Qn(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Fe,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[Ce]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||_h(t.nodeValue,l)),t||qa(e,!0)}else t=ri(t).createTextNode(a),t[Ce]=e,e.stateNode=t}return de(e),null
case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=Qn(e),l!==null){if(t===null){if(!a)throw Error(g(318))
if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(g(557))
t[Ce]=e}else vn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4
de(e),t=!1}else l=Pi(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0
if(!t)return e.flags&256?(El(e),e):(El(e),null)
if((e.flags&128)!==0)throw Error(g(558))}return de(e),null
case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Qn(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(g(318))
if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317))
n[Ce]=e}else vn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4
de(e),n=!1}else n=Pi(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0
if(!n)return e.flags&256?(El(e),e):(El(e),null)}return El(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),Fc(e,e.updateQueue),de(e),null)
case 4:return se(),t===null&&hf(e.stateNode.containerInfo),de(e),null
case 10:return ya(e.type),de(e),null
case 19:if(z(je),a=e.memoizedState,a===null)return de(e),null
if(n=(e.flags&128)!==0,u=a.rendering,u===null)if(n)Qu(a,!1)
else{if(Se!==0||t!==null&&(t.flags&128)!==0)for(t=e.child
t!==null
){if(u=Hc(t),u!==null){for(e.flags|=128,Qu(a,!1),t=u.updateQueue,e.updateQueue=t,Fc(e,t),e.subtreeFlags=0,t=l,l=e.child
l!==null
)rr(l,t),l=l.sibling
return H(je,je.current&1|2),Rt&&da(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&Le()>ti&&(e.flags|=128,n=!0,Qu(a,!1),e.lanes=4194304)}else{if(!n)if(t=Hc(u),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Fc(e,t),Qu(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!Rt)return de(e),null}else 2*Le()-a.renderingStartTime>ti&&l!==536870912&&(e.flags|=128,n=!0,Qu(a,!1),e.lanes=4194304)
a.isBackwards?(u.sibling=e.child,e.child=u):(t=a.last,t!==null?t.sibling=u:e.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Le(),t.sibling=null,l=je.current,H(je,n?l&1|2:l&1),Rt&&da(e,a.treeForkCount),t):(de(e),null)
case 22:case 23:return El(e),hs(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(de(e),e.subtreeFlags&6&&(e.flags|=8192)):de(e),l=e.updateQueue,l!==null&&Fc(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&z(bn),null
case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ya(qe),de(e),null
case 25:return null
case 30:return null}throw Error(g(156,e.tag))}function em(t,e){switch(Wi(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null
case 3:return ya(qe),se(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null
case 26:case 27:case 5:return na(e),null
case 31:if(e.memoizedState!==null){if(El(e),e.alternate===null)throw Error(g(340))
vn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null
case 13:if(El(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(g(340))
vn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null
case 19:return z(je),null
case 4:return se(),null
case 10:return ya(e.type),null
case 22:case 23:return El(e),hs(),t!==null&&z(bn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null
case 24:return ya(qe),null
case 25:return null
default:return null}}function Go(t,e){switch(Wi(e),e.tag){case 3:ya(qe),se()
break
case 26:case 27:case 5:na(e)
break
case 4:se()
break
case 31:e.memoizedState!==null&&El(e)
break
case 13:El(e)
break
case 19:z(je)
break
case 10:ya(e.type)
break
case 22:case 23:El(e),hs(),t!==null&&z(bn)
break
case 24:ya(qe)}}function Vu(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null
if(a!==null){var n=a.next
l=n
do{if((l.tag&t)===t){a=void 0
var u=l.create,c=l.inst
a=u(),c.destroy=a}l=l.next}while(l!==n)}}catch(s){Ft(e,e.return,s)}}function wa(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null
if(n!==null){var u=n.next
a=u
do{if((a.tag&t)===t){var c=a.inst,s=c.destroy
if(s!==void 0){c.destroy=void 0,n=e
var r=l,p=s
try{p()}catch(A){Ft(n,r,A)}}}a=a.next}while(a!==u)}}catch(A){Ft(e,e.return,A)}}function Yo(t){var e=t.updateQueue
if(e!==null){var l=t.stateNode
try{Nr(e,l)}catch(a){Ft(t,t.return,a)}}}function Lo(t,e,l){l.props=Tn(t.type,t.memoizedProps),l.state=t.memoizedState
try{l.componentWillUnmount()}catch(a){Ft(t,e,a)}}function Zu(t,e){try{var l=t.ref
if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode
break
case 30:a=t.stateNode
break
default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){Ft(t,e,n)}}function ta(t,e){var l=t.ref,a=t.refCleanup
if(l!==null)if(typeof a=="function")try{a()}catch(n){Ft(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Ft(t,e,n)}else l.current=null}function Xo(t){var e=t.type,l=t.memoizedProps,a=t.stateNode
try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus()
break t
case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Ft(t,t.return,n)}}function Vs(t,e,l){try{var a=t.stateNode
Am(a,t.type,l,e),a[Xe]=e}catch(n){Ft(t,t.return,n)}}function wo(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function Zs(t){t:for(

){for(
t.sibling===null
){if(t.return===null||wo(t.return))return null
t=t.return}for(t.sibling.return=t.return,t=t.sibling
t.tag!==5&&t.tag!==6&&t.tag!==18
){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t
t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ks(t,e,l){var a=t.tag
if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=yt))
else if(a!==4&&(a===27&&Fa(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Ks(t,e,l),t=t.sibling
t!==null
)Ks(t,e,l),t=t.sibling}function $c(t,e,l){var a=t.tag
if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t)
else if(a!==4&&(a===27&&Fa(t.type)&&(l=t.stateNode),t=t.child,t!==null))for($c(t,e,l),t=t.sibling
t!==null
)$c(t,e,l),t=t.sibling}function Qo(t){var e=t.stateNode,l=t.memoizedProps
try{for(var a=t.type,n=e.attributes
n.length
)e.removeAttributeNode(n[0])
Ie(e,a,l),e[Ce]=t,e[Xe]=l}catch(u){Ft(t,t.return,u)}}var Sa=!1,Ge=!1,Js=!1,Vo=typeof WeakSet=="function"?WeakSet:Set,Ke=null
function lm(t,e){if(t=t.containerInfo,yf=gi,t=er(t),Li(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd}
else t:{l=(l=t.ownerDocument)&&l.defaultView||window
var a=l.getSelection&&l.getSelection()
if(a&&a.rangeCount!==0){l=a.anchorNode
var n=a.anchorOffset,u=a.focusNode
a=a.focusOffset
try{l.nodeType,u.nodeType}catch{l=null
break t}var c=0,s=-1,r=-1,p=0,A=0,N=t,S=null
e:for(

){for(var x
N!==l||n!==0&&N.nodeType!==3||(s=c+n),N!==u||a!==0&&N.nodeType!==3||(r=c+a),N.nodeType===3&&(c+=N.nodeValue.length),(x=N.firstChild)!==null
)S=N,N=x
for(

){if(N===t)break e
if(S===l&&++p===n&&(s=c),S===u&&++A===a&&(r=c),(x=N.nextSibling)!==null)break
N=S,S=N.parentNode}N=x}l=s===-1||r===-1?null:{start:s,end:r}}else l=null}l=l||{start:0,end:0}}else l=null
for(vf={focusedElem:t,selectionRange:l},gi=!1,Ke=e
Ke!==null
)if(e=Ke,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ke=t
else for(
Ke!==null
){switch(e=Ke,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0
l<t.length
l++)n=t[l],n.ref.impl=n.nextImpl
break
case 11:case 15:break
case 1:if((t&1024)!==0&&u!==null){t=void 0,l=e,n=u.memoizedProps,u=u.memoizedState,a=l.stateNode
try{var F=Tn(l.type,n)
t=a.getSnapshotBeforeUpdate(F,u),a.__reactInternalSnapshotBeforeUpdate=t}catch(ut){Ft(l,l.return,ut)}}break
case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)bf(t)
else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bf(t)
break
default:t.textContent=""}}break
case 5:case 26:case 27:case 6:case 4:case 17:break
default:if((t&1024)!==0)throw Error(g(163))}if(t=e.sibling,t!==null){t.return=e.return,Ke=t
break}Ke=e.return}}function Zo(t,e,l){var a=l.flags
switch(l.tag){case 0:case 11:case 15:Ma(t,l),a&4&&Vu(5,l)
break
case 1:if(Ma(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(c){Ft(l,l.return,c)}else{var n=Tn(l.type,e.memoizedProps)
e=e.memoizedState
try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(c){Ft(l,l.return,c)}}a&64&&Yo(l),a&512&&Zu(l,l.return)
break
case 3:if(Ma(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode
break
case 1:e=l.child.stateNode}try{Nr(t,e)}catch(c){Ft(l,l.return,c)}}break
case 27:e===null&&a&4&&Qo(l)
case 26:case 5:Ma(t,l),e===null&&a&4&&Xo(l),a&512&&Zu(l,l.return)
break
case 12:Ma(t,l)
break
case 31:Ma(t,l),a&4&&ko(t,l)
break
case 13:Ma(t,l),a&4&&Fo(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=om.bind(null,l),Rm(t,l))))
break
case 22:if(a=l.memoizedState!==null||Sa,!a){e=e!==null&&e.memoizedState!==null||Ge,n=Sa
var u=Ge
Sa=a,(Ge=e)&&!u?Aa(t,l,(l.subtreeFlags&8772)!==0):Ma(t,l),Sa=n,Ge=u}break
case 30:break
default:Ma(t,l)}}function Ko(t){var e=t.alternate
e!==null&&(t.alternate=null,Ko(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&bu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ye=null,hl=!1
function xa(t,e,l){for(l=l.child
l!==null
)Jo(t,e,l),l=l.sibling}function Jo(t,e,l){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(B,l)}catch{}switch(l.tag){case 26:Ge||ta(l,e),xa(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l))
break
case 27:Ge||ta(l,e)
var a=ye,n=hl
Fa(l.type)&&(ye=l.stateNode,hl=!1),xa(t,e,l),tc(l.stateNode),ye=a,hl=n
break
case 5:Ge||ta(l,e)
case 6:if(a=ye,n=hl,ye=null,xa(t,e,l),ye=a,hl=n,ye!==null)if(hl)try{(ye.nodeType===9?ye.body:ye.nodeName==="HTML"?ye.ownerDocument.body:ye).removeChild(l.stateNode)}catch(u){Ft(l,e,u)}else try{ye.removeChild(l.stateNode)}catch(u){Ft(l,e,u)}break
case 18:ye!==null&&(hl?(t=ye,Yh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),ru(t)):Yh(ye,l.stateNode))
break
case 4:a=ye,n=hl,ye=l.stateNode.containerInfo,hl=!0,xa(t,e,l),ye=a,hl=n
break
case 0:case 11:case 14:case 15:wa(2,l,e),Ge||wa(4,l,e),xa(t,e,l)
break
case 1:Ge||(ta(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Lo(l,e,a)),xa(t,e,l)
break
case 21:xa(t,e,l)
break
case 22:Ge=(a=Ge)||l.memoizedState!==null,xa(t,e,l),Ge=a
break
default:xa(t,e,l)}}function ko(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated
try{ru(t)}catch(l){Ft(e,e.return,l)}}}function Fo(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ru(t)}catch(l){Ft(e,e.return,l)}}function am(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode
return e===null&&(e=t.stateNode=new Vo),e
case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Vo),e
default:throw Error(g(435,t.tag))}}function Wc(t,e){var l=am(t)
e.forEach(function(a){if(!l.has(a)){l.add(a)
var n=hm.bind(null,t,a)
a.then(n,n)}})}function dl(t,e){var l=e.deletions
if(l!==null)for(var a=0
a<l.length
a++){var n=l[a],u=t,c=e,s=c
t:for(
s!==null
){switch(s.tag){case 27:if(Fa(s.type)){ye=s.stateNode,hl=!1
break t}break
case 5:ye=s.stateNode,hl=!1
break t
case 3:case 4:ye=s.stateNode.containerInfo,hl=!0
break t}s=s.return}if(ye===null)throw Error(g(160))
Jo(u,c,n),ye=null,hl=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child
e!==null
)$o(e,t),e=e.sibling}var Kl=null
function $o(t,e){var l=t.alternate,a=t.flags
switch(t.tag){case 0:case 11:case 14:case 15:dl(e,t),ml(t),a&4&&(wa(3,t,t.return),Vu(3,t),wa(5,t,t.return))
break
case 1:dl(e,t),ml(t),a&512&&(Ge||l===null||ta(l,l.return)),a&64&&Sa&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))))
break
case 26:var n=Kl
if(dl(e,t),ml(t),a&512&&(Ge||l===null||ta(l,l.return)),a&4){var u=l!==null?l.memoizedState:null
if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n
e:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[nn]||u[Ce]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),Ie(u,a,l),u[Ce]=t,ge(u),a=u
break t
case"link":var c=$h("link","href",n).get(a+(l.href||""))
if(c){for(var s=0
s<c.length
s++)if(u=c[s],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(s,1)
break e}}u=n.createElement(a),Ie(u,a,l),n.head.appendChild(u)
break
case"meta":if(c=$h("meta","content",n).get(a+(l.content||""))){for(s=0
s<c.length
s++)if(u=c[s],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(s,1)
break e}}u=n.createElement(a),Ie(u,a,l),n.head.appendChild(u)
break
default:throw Error(g(468,a))}u[Ce]=t,ge(u),a=u}t.stateNode=a}else Wh(n,t.type,t.stateNode)
else t.stateNode=Fh(n,a,t.memoizedProps)
else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?Wh(n,t.type,t.stateNode):Fh(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Vs(t,t.memoizedProps,l.memoizedProps)}break
case 27:dl(e,t),ml(t),a&512&&(Ge||l===null||ta(l,l.return)),l!==null&&a&4&&Vs(t,t.memoizedProps,l.memoizedProps)
break
case 5:if(dl(e,t),ml(t),a&512&&(Ge||l===null||ta(l,l.return)),t.flags&32){n=t.stateNode
try{ie(n,"")}catch(F){Ft(t,t.return,F)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,Vs(t,n,l!==null?l.memoizedProps:n)),a&1024&&(Js=!0)
break
case 6:if(dl(e,t),ml(t),a&4){if(t.stateNode===null)throw Error(g(162))
a=t.memoizedProps,l=t.stateNode
try{l.nodeValue=a}catch(F){Ft(t,t.return,F)}}break
case 3:if(di=null,n=Kl,Kl=oi(e.containerInfo),dl(e,t),Kl=n,ml(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{ru(e.containerInfo)}catch(F){Ft(t,t.return,F)}Js&&(Js=!1,Wo(t))
break
case 4:a=Kl,Kl=oi(t.stateNode.containerInfo),dl(e,t),ml(t),Kl=a
break
case 12:dl(e,t),ml(t)
break
case 31:dl(e,t),ml(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Wc(t,a)))
break
case 13:dl(e,t),ml(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Pc=Le()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Wc(t,a)))
break
case 22:n=t.memoizedState!==null
var r=l!==null&&l.memoizedState!==null,p=Sa,A=Ge
if(Sa=p||n,Ge=A||r,dl(e,t),Ge=A,Sa=p,ml(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||r||Sa||Ge||En(t)),l=null,e=t

){if(e.tag===5||e.tag===26){if(l===null){r=l=e
try{if(u=r.stateNode,n)c=u.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"
else{s=r.stateNode
var N=r.memoizedProps.style,S=N!=null&&N.hasOwnProperty("display")?N.display:null
s.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(F){Ft(r,r.return,F)}}}else if(e.tag===6){if(l===null){r=e
try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(F){Ft(r,r.return,F)}}}else if(e.tag===18){if(l===null){r=e
try{var x=r.stateNode
n?Lh(x,!0):Lh(r.stateNode,!1)}catch(F){Ft(r,r.return,F)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child
continue}if(e===t)break t
for(
e.sibling===null
){if(e.return===null||e.return===t)break t
l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Wc(t,l))))
break
case 19:dl(e,t),ml(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Wc(t,a)))
break
case 30:break
case 21:break
default:dl(e,t),ml(t)}}function ml(t){var e=t.flags
if(e&2){try{for(var l,a=t.return
a!==null
){if(wo(a)){l=a
break}a=a.return}if(l==null)throw Error(g(160))
switch(l.tag){case 27:var n=l.stateNode,u=Zs(t)
$c(t,u,n)
break
case 5:var c=l.stateNode
l.flags&32&&(ie(c,""),l.flags&=-33)
var s=Zs(t)
$c(t,s,c)
break
case 3:case 4:var r=l.stateNode.containerInfo,p=Zs(t)
Ks(t,p,r)
break
default:throw Error(g(161))}}catch(A){Ft(t,t.return,A)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Wo(t){if(t.subtreeFlags&1024)for(t=t.child
t!==null
){var e=t
Wo(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ma(t,e){if(e.subtreeFlags&8772)for(e=e.child
e!==null
)Zo(t,e.alternate,e),e=e.sibling}function En(t){for(t=t.child
t!==null
){var e=t
switch(e.tag){case 0:case 11:case 14:case 15:wa(4,e,e.return),En(e)
break
case 1:ta(e,e.return)
var l=e.stateNode
typeof l.componentWillUnmount=="function"&&Lo(e,e.return,l),En(e)
break
case 27:tc(e.stateNode)
case 26:case 5:ta(e,e.return),En(e)
break
case 22:e.memoizedState===null&&En(e)
break
case 30:En(e)
break
default:En(e)}t=t.sibling}}function Aa(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child
e!==null
){var a=e.alternate,n=t,u=e,c=u.flags
switch(u.tag){case 0:case 11:case 15:Aa(n,u,l),Vu(4,u)
break
case 1:if(Aa(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){Ft(a,a.return,p)}if(a=u,n=a.updateQueue,n!==null){var s=a.stateNode
try{var r=n.shared.hiddenCallbacks
if(r!==null)for(n.shared.hiddenCallbacks=null,n=0
n<r.length
n++)zr(r[n],s)}catch(p){Ft(a,a.return,p)}}l&&c&64&&Yo(u),Zu(u,u.return)
break
case 27:Qo(u)
case 26:case 5:Aa(n,u,l),l&&a===null&&c&4&&Xo(u),Zu(u,u.return)
break
case 12:Aa(n,u,l)
break
case 31:Aa(n,u,l),l&&c&4&&ko(n,u)
break
case 13:Aa(n,u,l),l&&c&4&&Fo(n,u)
break
case 22:u.memoizedState===null&&Aa(n,u,l),Zu(u,u.return)
break
case 30:break
default:Aa(n,u,l)}e=e.sibling}}function ks(t,e){var l=null
t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Ru(l))}function Fs(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ru(t))}function Jl(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child
e!==null
)Io(t,e,l,a),e=e.sibling}function Io(t,e,l,a){var n=e.flags
switch(e.tag){case 0:case 11:case 15:Jl(t,e,l,a),n&2048&&Vu(9,e)
break
case 1:Jl(t,e,l,a)
break
case 3:Jl(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ru(t)))
break
case 12:if(n&2048){Jl(t,e,l,a),t=e.stateNode
try{var u=e.memoizedProps,c=u.id,s=u.onPostCommit
typeof s=="function"&&s(c,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(r){Ft(e,e.return,r)}}else Jl(t,e,l,a)
break
case 31:Jl(t,e,l,a)
break
case 13:Jl(t,e,l,a)
break
case 23:break
case 22:u=e.stateNode,c=e.alternate,e.memoizedState!==null?u._visibility&2?Jl(t,e,l,a):Ku(t,e):u._visibility&2?Jl(t,e,l,a):(u._visibility|=2,Pn(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&ks(c,e)
break
case 24:Jl(t,e,l,a),n&2048&&Fs(e.alternate,e)
break
default:Jl(t,e,l,a)}}function Pn(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child
e!==null
){var u=t,c=e,s=l,r=a,p=c.flags
switch(c.tag){case 0:case 11:case 15:Pn(u,c,s,r,n),Vu(8,c)
break
case 23:break
case 22:var A=c.stateNode
c.memoizedState!==null?A._visibility&2?Pn(u,c,s,r,n):Ku(u,c):(A._visibility|=2,Pn(u,c,s,r,n)),n&&p&2048&&ks(c.alternate,c)
break
case 24:Pn(u,c,s,r,n),n&&p&2048&&Fs(c.alternate,c)
break
default:Pn(u,c,s,r,n)}e=e.sibling}}function Ku(t,e){if(e.subtreeFlags&10256)for(e=e.child
e!==null
){var l=t,a=e,n=a.flags
switch(a.tag){case 22:Ku(l,a),n&2048&&ks(a.alternate,a)
break
case 24:Ku(l,a),n&2048&&Fs(a.alternate,a)
break
default:Ku(l,a)}e=e.sibling}}var Ju=8192
function tu(t,e,l){if(t.subtreeFlags&Ju)for(t=t.child
t!==null
)Po(t,e,l),t=t.sibling}function Po(t,e,l){switch(t.tag){case 26:tu(t,e,l),t.flags&Ju&&t.memoizedState!==null&&Qm(l,Kl,t.memoizedState,t.memoizedProps)
break
case 5:tu(t,e,l)
break
case 3:case 4:var a=Kl
Kl=oi(t.stateNode.containerInfo),tu(t,e,l),Kl=a
break
case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=Ju,Ju=16777216,tu(t,e,l),Ju=a):tu(t,e,l))
break
default:tu(t,e,l)}}function th(t){var e=t.alternate
if(e!==null&&(t=e.child,t!==null)){e.child=null
do e=t.sibling,t.sibling=null,t=e
while(t!==null)}}function ku(t){var e=t.deletions
if((t.flags&16)!==0){if(e!==null)for(var l=0
l<e.length
l++){var a=e[l]
Ke=a,lh(a,t)}th(t)}if(t.subtreeFlags&10256)for(t=t.child
t!==null
)eh(t),t=t.sibling}function eh(t){switch(t.tag){case 0:case 11:case 15:ku(t),t.flags&2048&&wa(9,t,t.return)
break
case 3:ku(t)
break
case 12:ku(t)
break
case 22:var e=t.stateNode
t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ic(t)):ku(t)
break
default:ku(t)}}function Ic(t){var e=t.deletions
if((t.flags&16)!==0){if(e!==null)for(var l=0
l<e.length
l++){var a=e[l]
Ke=a,lh(a,t)}th(t)}for(t=t.child
t!==null
){switch(e=t,e.tag){case 0:case 11:case 15:wa(8,e,e.return),Ic(e)
break
case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Ic(e))
break
default:Ic(e)}t=t.sibling}}function lh(t,e){for(
Ke!==null
){var l=Ke
switch(l.tag){case 0:case 11:case 15:wa(8,l,e)
break
case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool
a!=null&&a.refCount++}break
case 24:Ru(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ke=a
else t:for(l=t
Ke!==null
){a=Ke
var n=a.sibling,u=a.return
if(Ko(a),a===l){Ke=null
break t}if(n!==null){n.return=u,Ke=n
break t}Ke=u}}}var nm={getCacheForType:function(t){var e=$e(qe),l=e.data.get(t)
return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return $e(qe).controller.signal}},um=typeof WeakMap=="function"?WeakMap:Map,Qt=0,ae=null,jt=null,Nt=0,kt=0,jl=null,Qa=!1,eu=!1,$s=!1,Ta=0,Se=0,Va=0,jn=0,Ws=0,zl=0,lu=0,Fu=null,yl=null,Is=!1,Pc=0,ah=0,ti=1/0,ei=null,Za=null,Qe=0,Ka=null,au=null,Ea=0,Ps=0,tf=null,nh=null,$u=0,ef=null
function Nl(){return(Qt&2)!==0&&Nt!==0?Nt&-Nt:T.T!==null?sf():V()}function uh(){if(zl===0)if((Nt&536870912)===0||Rt){var t=Ne
Ne<<=1,(Ne&3932160)===0&&(Ne=262144),zl=t}else zl=536870912
return t=Tl.current,t!==null&&(t.flags|=32),zl}function vl(t,e,l){(t===ae&&(kt===2||kt===9)||t.cancelPendingCommit!==null)&&(nu(t,0),Ja(t,Nt,zl,!1)),sa(t,l),((Qt&2)===0||t!==ae)&&(t===ae&&((Qt&2)===0&&(jn|=l),Se===4&&Ja(t,Nt,zl,!1)),ea(t))}function ch(t,e,l){if((Qt&6)!==0)throw Error(g(327))
var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||ke(t,e),n=a?sm(t,e):af(t,e,!0),u=a
do{if(n===0){eu&&!a&&Ja(t,e,0,!1)
break}else{if(l=t.current.alternate,u&&!cm(l)){n=af(t,e,!1),u=!1
continue}if(n===2){if(u=e,t.errorRecoveryDisabledLanes&u)var c=0
else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0
if(c!==0){e=c
t:{var s=t
n=Fu
var r=s.current.memoizedState.isDehydrated
if(r&&(nu(s,c).flags|=256),c=af(s,c,!1),c!==2){if($s&&!r){s.errorRecoveryDisabledLanes|=u,jn|=u,n=4
break t}u=yl,yl=n,u!==null&&(yl===null?yl=u:yl.push.apply(yl,u))}n=c}if(u=!1,n!==2)continue}}if(n===1){nu(t,0),Ja(t,e,0,!0)
break}t:{switch(a=t,u=n,u){case 0:case 1:throw Error(g(345))
case 4:if((e&4194048)!==e)break
case 6:Ja(a,e,zl,!Qa)
break t
case 2:yl=null
break
case 3:case 5:break
default:throw Error(g(329))}if((e&62914560)===e&&(n=Pc+300-Le(),10<n)){if(Ja(a,e,zl,!Qa),tl(a,0,!0)!==0)break t
Ea=e,a.timeoutHandle=Bh(ih.bind(null,a,l,yl,ei,Is,e,zl,jn,lu,Qa,u,"Throttled",-0,0),n)
break t}ih(a,l,yl,ei,Is,e,zl,jn,lu,Qa,u,null,-0,0)}}break}while(!0)
ea(t)}function ih(t,e,l,a,n,u,c,s,r,p,A,N,S,x){if(t.timeoutHandle=-1,N=e.subtreeFlags,N&8192||(N&16785408)===16785408){N={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yt},Po(e,u,N)
var F=(u&62914560)===u?Pc-Le():(u&4194048)===u?ah-Le():0
if(F=Vm(N,F),F!==null){Ea=u,t.cancelPendingCommit=F(yh.bind(null,t,e,u,l,a,n,c,s,r,A,N,null,S,x)),Ja(t,u,c,!p)
return}}yh(t,e,u,l,a,n,c,s,r)}function cm(t){for(var e=t

){var l=e.tag
if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0
a<l.length
a++){var n=l[a],u=n.getSnapshot
n=n.value
try{if(!Ml(u(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l
else{if(e===t)break
for(
e.sibling===null
){if(e.return===null||e.return===t)return!0
e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ja(t,e,l,a){e&=~Ws,e&=~jn,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes
for(var n=e
0<n
){var u=31-fe(n),c=1<<u
a[u]=-1,n&=~c}l!==0&&oc(t,l,e)}function li(){return(Qt&6)===0?(Wu(0),!1):!0}function lf(){if(jt!==null){if(kt===0)var t=jt.return
else t=jt,ma=gn=null,ps(t),kn=null,_u=0,t=jt
for(
t!==null
)Go(t.alternate,t),t=t.return
jt=null}}function nu(t,e){var l=t.timeoutHandle
l!==-1&&(t.timeoutHandle=-1,jm(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Ea=0,lf(),ae=t,jt=l=ha(t.current,null),Nt=e,kt=0,jl=null,Qa=!1,eu=ke(t,e),$s=!1,lu=zl=Ws=jn=Va=Se=0,yl=Fu=null,Is=!1,(e&8)!==0&&(e|=e&32)
var a=t.entangledLanes
if(a!==0)for(t=t.entanglements,a&=e
0<a
){var n=31-fe(a),u=1<<n
e|=t[n],a&=~u}return Ta=e,Ac(),l}function sh(t,e){vt=null,T.H=Xu,e===Jn||e===Rc?(e=Ar(),kt=3):e===cs?(e=Ar(),kt=4):kt=e===Us?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,jl=e,jt===null&&(Se=1,Zc(t,Ul(e,t.current)))}function fh(){var t=Tl.current
return t===null?!0:(Nt&4194048)===Nt?Gl===null:(Nt&62914560)===Nt||(Nt&536870912)!==0?t===Gl:!1}function rh(){var t=T.H
return T.H=Xu,t===null?Xu:t}function oh(){var t=T.A
return T.A=nm,t}function ai(){Se=4,Qa||(Nt&4194048)!==Nt&&Tl.current!==null||(eu=!0),(Va&134217727)===0&&(jn&134217727)===0||ae===null||Ja(ae,Nt,zl,!1)}function af(t,e,l){var a=Qt
Qt|=2
var n=rh(),u=oh()
(ae!==t||Nt!==e)&&(ei=null,nu(t,e)),e=!1
var c=Se
t:do try{if(kt!==0&&jt!==null){var s=jt,r=jl
switch(kt){case 8:lf(),c=6
break t
case 3:case 2:case 9:case 6:Tl.current===null&&(e=!0)
var p=kt
if(kt=0,jl=null,uu(t,s,r,p),l&&eu){c=0
break t}break
default:p=kt,kt=0,jl=null,uu(t,s,r,p)}}im(),c=Se
break}catch(A){sh(t,A)}while(!0)
return e&&t.shellSuspendCounter++,ma=gn=null,Qt=a,T.H=n,T.A=u,jt===null&&(ae=null,Nt=0,Ac()),c}function im(){for(
jt!==null
)hh(jt)}function sm(t,e){var l=Qt
Qt|=2
var a=rh(),n=oh()
ae!==t||Nt!==e?(ei=null,ti=Le()+500,nu(t,e)):eu=ke(t,e)
t:do try{if(kt!==0&&jt!==null){e=jt
var u=jl
e:switch(kt){case 1:kt=0,jl=null,uu(t,e,u,1)
break
case 2:case 9:if(xr(u)){kt=0,jl=null,dh(e)
break}e=function(){kt!==2&&kt!==9||ae!==t||(kt=7),ea(t)},u.then(e,e)
break t
case 3:kt=7
break t
case 4:kt=5
break t
case 7:xr(u)?(kt=0,jl=null,dh(e)):(kt=0,jl=null,uu(t,e,u,7))
break
case 5:var c=null
switch(jt.tag){case 26:c=jt.memoizedState
case 5:case 27:var s=jt
if(c?Ih(c):s.stateNode.complete){kt=0,jl=null
var r=s.sibling
if(r!==null)jt=r
else{var p=s.return
p!==null?(jt=p,ni(p)):jt=null}break e}}kt=0,jl=null,uu(t,e,u,5)
break
case 6:kt=0,jl=null,uu(t,e,u,6)
break
case 8:lf(),Se=6
break t
default:throw Error(g(462))}}fm()
break}catch(A){sh(t,A)}while(!0)
return ma=gn=null,T.H=a,T.A=n,Qt=l,jt!==null?0:(ae=null,Nt=0,Ac(),Se)}function fm(){for(
jt!==null&&!Ca()
)hh(jt)}function hh(t){var e=Ho(t.alternate,t,Ta)
t.memoizedProps=t.pendingProps,e===null?ni(t):jt=e}function dh(t){var e=t,l=e.alternate
switch(e.tag){case 15:case 0:e=Oo(l,e,e.pendingProps,e.type,void 0,Nt)
break
case 11:e=Oo(l,e,e.pendingProps,e.type.render,e.ref,Nt)
break
case 5:ps(e)
default:Go(l,e),e=jt=rr(e,Ta),e=Ho(l,e,Ta)}t.memoizedProps=t.pendingProps,e===null?ni(t):jt=e}function uu(t,e,l,a){ma=gn=null,ps(e),kn=null,_u=0
var n=e.return
try{if(Wd(t,n,e,l,Nt)){Se=1,Zc(t,Ul(l,t.current)),jt=null
return}}catch(u){if(n!==null)throw jt=n,u
Se=1,Zc(t,Ul(l,t.current)),jt=null
return}e.flags&32768?(Rt||a===1?t=!0:eu||(Nt&536870912)!==0?t=!1:(Qa=t=!0,(a===2||a===9||a===3||a===6)&&(a=Tl.current,a!==null&&a.tag===13&&(a.flags|=16384))),mh(e,t)):ni(e)}function ni(t){var e=t
do{if((e.flags&32768)!==0){mh(e,Qa)
return}t=e.return
var l=tm(e.alternate,e,Ta)
if(l!==null){jt=l
return}if(e=e.sibling,e!==null){jt=e
return}jt=e=t}while(e!==null)
Se===0&&(Se=5)}function mh(t,e){do{var l=em(t.alternate,t)
if(l!==null){l.flags&=32767,jt=l
return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){jt=t
return}jt=t=l}while(t!==null)
Se=6,jt=null}function yh(t,e,l,a,n,u,c,s,r){t.cancelPendingCommit=null
do ui()
while(Qe!==0)
if((Qt&6)!==0)throw Error(g(327))
if(e!==null){if(e===t.current)throw Error(g(177))
if(u=e.lanes|e.childLanes,u|=Zi,zi(t,l,u,c,s,r),t===ae&&(jt=ae=null,Nt=0),au=e,Ka=t,Ea=l,Ps=u,tf=n,nh=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,dm(On,function(){return Sh(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=T.T,T.T=null,n=w.p,w.p=2,c=Qt,Qt|=4
try{lm(t,e,l)}finally{Qt=c,w.p=n,T.T=a}}Qe=1,vh(),gh(),ph()}}function vh(){if(Qe===1){Qe=0
var t=Ka,e=au,l=(e.flags&13878)!==0
if((e.subtreeFlags&13878)!==0||l){l=T.T,T.T=null
var a=w.p
w.p=2
var n=Qt
Qt|=4
try{$o(e,t)
var u=vf,c=er(t.containerInfo),s=u.focusedElem,r=u.selectionRange
if(c!==s&&s&&s.ownerDocument&&tr(s.ownerDocument.documentElement,s)){if(r!==null&&Li(s)){var p=r.start,A=r.end
if(A===void 0&&(A=p),"selectionStart"in s)s.selectionStart=p,s.selectionEnd=Math.min(A,s.value.length)
else{var N=s.ownerDocument||document,S=N&&N.defaultView||window
if(S.getSelection){var x=S.getSelection(),F=s.textContent.length,ut=Math.min(r.start,F),ee=r.end===void 0?ut:Math.min(r.end,F)
!x.extend&&ut>ee&&(c=ee,ee=ut,ut=c)
var m=Pf(s,ut),h=Pf(s,ee)
if(m&&h&&(x.rangeCount!==1||x.anchorNode!==m.node||x.anchorOffset!==m.offset||x.focusNode!==h.node||x.focusOffset!==h.offset)){var v=N.createRange()
v.setStart(m.node,m.offset),x.removeAllRanges(),ut>ee?(x.addRange(v),x.extend(h.node,h.offset)):(v.setEnd(h.node,h.offset),x.addRange(v))}}}}for(N=[],x=s
x=x.parentNode
)x.nodeType===1&&N.push({element:x,left:x.scrollLeft,top:x.scrollTop})
for(typeof s.focus=="function"&&s.focus(),s=0
s<N.length
s++){var j=N[s]
j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}gi=!!yf,vf=yf=null}finally{Qt=n,w.p=a,T.T=l}}t.current=e,Qe=2}}function gh(){if(Qe===2){Qe=0
var t=Ka,e=au,l=(e.flags&8772)!==0
if((e.subtreeFlags&8772)!==0||l){l=T.T,T.T=null
var a=w.p
w.p=2
var n=Qt
Qt|=4
try{Zo(t,e.alternate,e)}finally{Qt=n,w.p=a,T.T=l}}Qe=3}}function ph(){if(Qe===4||Qe===3){Qe=0,ua()
var t=Ka,e=au,l=Ea,a=nh
(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Qe=5:(Qe=0,au=Ka=null,bh(t,t.pendingLanes))
var n=t.pendingLanes
if(n===0&&(Za=null),gu(l),e=e.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(B,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=T.T,n=w.p,w.p=2,T.T=null
try{for(var u=t.onRecoverableError,c=0
c<a.length
c++){var s=a[c]
u(s.value,{componentStack:s.stack})}}finally{T.T=e,w.p=n}}(Ea&3)!==0&&ui(),ea(t),n=t.pendingLanes,(l&261930)!==0&&(n&42)!==0?t===ef?$u++:($u=0,ef=t):$u=0,Wu(0)}}function bh(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ru(e)))}function ui(){return vh(),gh(),ph(),Sh()}function Sh(){if(Qe!==5)return!1
var t=Ka,e=Ps
Ps=0
var l=gu(Ea),a=T.T,n=w.p
try{w.p=32>l?32:l,T.T=null,l=tf,tf=null
var u=Ka,c=Ea
if(Qe=0,au=Ka=null,Ea=0,(Qt&6)!==0)throw Error(g(331))
var s=Qt
if(Qt|=4,eh(u.current),Io(u,u.current,c,l),Qt=s,Wu(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(B,u)}catch{}return!0}finally{w.p=n,T.T=a,bh(t,e)}}function xh(t,e,l){e=Ul(l,e),e=_s(t.stateNode,e,2),t=Ya(t,e,2),t!==null&&(sa(t,2),ea(t))}function Ft(t,e,l){if(t.tag===3)xh(t,t,l)
else for(
e!==null
){if(e.tag===3){xh(e,t,l)
break}else if(e.tag===1){var a=e.stateNode
if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Za===null||!Za.has(a))){t=Ul(l,t),l=Mo(2),a=Ya(e,l,2),a!==null&&(Ao(l,a,e,t),sa(a,2),ea(a))
break}}e=e.return}}function nf(t,e,l){var a=t.pingCache
if(a===null){a=t.pingCache=new um
var n=new Set
a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n))
n.has(l)||($s=!0,n.add(l),t=rm.bind(null,t,e,l),e.then(t,t))}function rm(t,e,l){var a=t.pingCache
a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,ae===t&&(Nt&l)===l&&(Se===4||Se===3&&(Nt&62914560)===Nt&&300>Le()-Pc?(Qt&2)===0&&nu(t,0):Ws|=l,lu===Nt&&(lu=0)),ea(t)}function Mh(t,e){e===0&&(e=ia()),t=mn(t,e),t!==null&&(sa(t,e),ea(t))}function om(t){var e=t.memoizedState,l=0
e!==null&&(l=e.retryLane),Mh(t,l)}function hm(t,e){var l=0
switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState
n!==null&&(l=n.retryLane)
break
case 19:a=t.stateNode
break
case 22:a=t.stateNode._retryCache
break
default:throw Error(g(314))}a!==null&&a.delete(e),Mh(t,l)}function dm(t,e){return Na(t,e)}var ci=null,cu=null,uf=!1,ii=!1,cf=!1,ka=0
function ea(t){t!==cu&&t.next===null&&(cu===null?ci=cu=t:cu=cu.next=t),ii=!0,uf||(uf=!0,ym())}function Wu(t,e){if(!cf&&ii){cf=!0
do for(var l=!1,a=ci
a!==null
){if(t!==0){var n=a.pendingLanes
if(n===0)var u=0
else{var c=a.suspendedLanes,s=a.pingedLanes
u=(1<<31-fe(42|t)+1)-1,u&=n&~(c&~s),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,jh(a,u))}else u=Nt,u=tl(a,a===ae?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||ke(a,u)||(l=!0,jh(a,u))
a=a.next}while(l)
cf=!1}}function mm(){Ah()}function Ah(){ii=uf=!1
var t=0
ka!==0&&Em()&&(t=ka)
for(var e=Le(),l=null,a=ci
a!==null
){var n=a.next,u=Th(a,e)
u===0?(a.next=null,l===null?ci=n:l.next=n,n===null&&(cu=l)):(l=a,(t!==0||(u&3)!==0)&&(ii=!0)),a=n}Qe!==0&&Qe!==5||Wu(t),ka!==0&&(ka=0)}function Th(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,u=t.pendingLanes&-62914561
0<u
){var c=31-fe(u),s=1<<c,r=n[c]
r===-1?((s&l)===0||(s&a)!==0)&&(n[c]=ca(s,e)):r<=e&&(t.expiredLanes|=s),u&=~s}if(e=ae,l=Nt,l=tl(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(kt===2||kt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&en(a),t.callbackNode=null,t.callbackPriority=0
if((l&3)===0||ke(t,l)){if(e=l&-l,e===t.callbackPriority)return e
switch(a!==null&&en(a),gu(l)){case 2:case 8:l=Cn
break
case 32:l=On
break
case 268435456:l=mu
break
default:l=On}return a=Eh.bind(null,t),l=Na(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&en(a),t.callbackPriority=2,t.callbackNode=null,2}function Eh(t,e){if(Qe!==0&&Qe!==5)return t.callbackNode=null,t.callbackPriority=0,null
var l=t.callbackNode
if(ui()&&t.callbackNode!==l)return null
var a=Nt
return a=tl(t,t===ae?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(ch(t,a,e),Th(t,Le()),t.callbackNode!=null&&t.callbackNode===l?Eh.bind(null,t):null)}function jh(t,e){if(ui())return null
ch(t,e,!0)}function ym(){zm(function(){(Qt&6)!==0?Na(du,mm):Ah()})}function sf(){if(ka===0){var t=Zn
t===0&&(t=al,al<<=1,(al&261888)===0&&(al=256)),ka=t}return ka}function zh(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:rt(""+t)}function Nh(t,e){var l=e.ownerDocument.createElement("input")
return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function vm(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var u=zh((n[Xe]||null).action),c=a.submitter
c&&(e=(e=c[Xe]||null)?zh(e.formAction):c.getAttribute("formAction"),e!==null&&(u=e,c=null))
var s=new sn("action","action",null,a,n)
t.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ka!==0){var r=c?Nh(n,c):new FormData(n)
zs(l,{pending:!0,data:r,method:n.method,action:u},null,r)}}else typeof u=="function"&&(s.preventDefault(),r=c?Nh(n,c):new FormData(n),zs(l,{pending:!0,data:r,method:n.method,action:u},u,r))},currentTarget:n}]})}}for(var ff=0
ff<Vi.length
ff++){var rf=Vi[ff],gm=rf.toLowerCase(),pm=rf[0].toUpperCase()+rf.slice(1)
Zl(gm,"on"+pm)}Zl(nr,"onAnimationEnd"),Zl(ur,"onAnimationIteration"),Zl(cr,"onAnimationStart"),Zl("dblclick","onDoubleClick"),Zl("focusin","onFocus"),Zl("focusout","onBlur"),Zl(Ud,"onTransitionRun"),Zl(qd,"onTransitionStart"),Zl(Hd,"onTransitionCancel"),Zl(ir,"onTransitionEnd"),ul("onMouseEnter",["mouseout","mouseover"]),ul("onMouseLeave",["mouseout","mouseover"]),ul("onPointerEnter",["pointerout","pointerover"]),ul("onPointerLeave",["pointerout","pointerover"]),Re("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Re("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Re("onBeforeInput",["compositionend","keypress","textInput","paste"]),Re("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Re("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Re("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "))
var Iu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Iu))
function Ch(t,e){e=(e&4)!==0
for(var l=0
l<t.length
l++){var a=t[l],n=a.event
a=a.listeners
t:{var u=void 0
if(e)for(var c=a.length-1
0<=c
c--){var s=a[c],r=s.instance,p=s.currentTarget
if(s=s.listener,r!==u&&n.isPropagationStopped())break t
u=s,n.currentTarget=p
try{u(n)}catch(A){Mc(A)}n.currentTarget=null,u=r}else for(c=0
c<a.length
c++){if(s=a[c],r=s.instance,p=s.currentTarget,s=s.listener,r!==u&&n.isPropagationStopped())break t
u=s,n.currentTarget=p
try{u(n)}catch(A){Mc(A)}n.currentTarget=null,u=r}}}}function zt(t,e){var l=e[pu]
l===void 0&&(l=e[pu]=new Set)
var a=t+"__bubble"
l.has(a)||(Oh(e,t,2,!1),l.add(a))}function of(t,e,l){var a=0
e&&(a|=4),Oh(l,t,a,e)}var si="_reactListening"+Math.random().toString(36).slice(2)
function hf(t){if(!t[si]){t[si]=!0,Ra.forEach(function(l){l!=="selectionchange"&&(bm.has(l)||of(l,!1,t),of(l,!0,t))})
var e=t.nodeType===9?t:t.ownerDocument
e===null||e[si]||(e[si]=!0,of("selectionchange",!1,e))}}function Oh(t,e,l,a){switch(ud(e)){case 2:var n=Jm
break
case 8:n=km
break
default:n=zf}l=n.bind(null,e,l,t),n=void 0,!cn||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function df(t,e,l,a,n){var u=a
if((e&1)===0&&(e&2)===0&&a!==null)t:for(

){if(a===null)return
var c=a.tag
if(c===3||c===4){var s=a.stateNode.containerInfo
if(s===n)break
if(c===4)for(c=a.return
c!==null
){var r=c.tag
if((r===3||r===4)&&c.stateNode.containerInfo===n)return
c=c.return}for(
s!==null
){if(c=Q(s),c===null)return
if(r=c.tag,r===5||r===6||r===26||r===27){a=u=c
continue t}s=s.parentNode}}a=a.return}Ol(function(){var p=u,A=Wt(l),N=[]
t:{var S=sr.get(t)
if(S!==void 0){var x=sn,F=t
switch(t){case"keypress":if(Wl(l)===0)break t
case"keydown":case"keyup":x=Di
break
case"focusin":F="focus",x=Ut
break
case"focusout":F="blur",x=Ut
break
case"beforeblur":case"afterblur":x=Ut
break
case"click":if(l.button===2)break t
case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Te
break
case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Mu
break
case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=bc
break
case nr:case ur:case cr:x=Ee
break
case ir:x=qi
break
case"scroll":case"scrollend":x=Ci
break
case"wheel":x=Hi
break
case"copy":case"cut":case"paste":x=ra
break
case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Da
break
case"toggle":case"beforetoggle":x=me}var ut=(e&4)!==0,ee=!ut&&(t==="scroll"||t==="scrollend"),m=ut?S!==null?S+"Capture":null:S
ut=[]
for(var h=p,v
h!==null
){var j=h
if(v=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||v===null||m===null||(j=De(h,m),j!=null&&ut.push(Pu(h,j,v))),ee)break
h=h.return}0<ut.length&&(S=new x(S,F,null,l,A),N.push({event:S,listeners:ut}))}}if((e&7)===0){t:{if(S=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",S&&l!==$t&&(F=l.relatedTarget||l.fromElement)&&(Q(F)||F[Fl]))break t
if((x||S)&&(S=A.window===A?A:(S=A.ownerDocument)?S.defaultView||S.parentWindow:window,x?(F=l.relatedTarget||l.toElement,x=p,F=F?Q(F):null,F!==null&&(ee=At(F),ut=F.tag,F!==ee||ut!==5&&ut!==27&&ut!==6)&&(F=null)):(x=null,F=p),x!==F)){if(ut=Te,j="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(ut=Da,j="onPointerLeave",m="onPointerEnter",h="pointer"),ee=x==null?S:Oe(x),v=F==null?S:Oe(F),S=new ut(j,h+"leave",x,l,A),S.target=ee,S.relatedTarget=v,j=null,Q(A)===p&&(ut=new ut(m,h+"enter",F,l,A),ut.target=v,ut.relatedTarget=ee,j=ut),ee=j,x&&F)e:{for(ut=Sm,m=x,h=F,v=0,j=m
j
j=ut(j))v++
j=0
for(var lt=h
lt
lt=ut(lt))j++
for(
0<v-j
)m=ut(m),v--
for(
0<j-v
)h=ut(h),j--
for(
v--
){if(m===h||h!==null&&m===h.alternate){ut=m
break e}m=ut(m),h=ut(h)}ut=null}else ut=null
x!==null&&Rh(N,S,x,ut,!1),F!==null&&ee!==null&&Rh(N,ee,F,ut,!0)}}t:{if(S=p?Oe(p):window,x=S.nodeName&&S.nodeName.toLowerCase(),x==="select"||x==="input"&&S.type==="file")var Gt=Jf
else if(Zf(S))if(kf)Gt=Rd
else{Gt=Cd
var W=Nd}else x=S.nodeName,!x||x.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?p&&at(p.elementType)&&(Gt=Jf):Gt=Od
if(Gt&&(Gt=Gt(t,p))){Kf(N,Gt,l,A)
break t}W&&W(t,S,p),t==="focusout"&&p&&S.type==="number"&&p.memoizedProps.value!=null&&X(S,"number",S.value)}switch(W=p?Oe(p):window,t){case"focusin":(Zf(W)||W.contentEditable==="true")&&(Bn=W,Xi=p,Nu=null)
break
case"focusout":Nu=Xi=Bn=null
break
case"mousedown":wi=!0
break
case"contextmenu":case"mouseup":case"dragend":wi=!1,lr(N,l,A)
break
case"selectionchange":if(_d)break
case"keydown":case"keyup":lr(N,l,A)}var pt
if(xl)t:{switch(t){case"compositionstart":var Ct="onCompositionStart"
break t
case"compositionend":Ct="onCompositionEnd"
break t
case"compositionupdate":Ct="onCompositionUpdate"
break t}Ct=void 0}else Hn?Qf(t,l)&&(Ct="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(Ct="onCompositionStart")
Ct&&(on&&l.locale!=="ko"&&(Hn||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&Hn&&(pt=Rl()):(Me=A,rl="value"in Me?Me.value:Me.textContent,Hn=!0)),W=fi(p,Ct),0<W.length&&(Ct=new vc(Ct,t,null,l,A),N.push({event:Ct,listeners:W}),pt?Ct.data=pt:(pt=Vf(l),pt!==null&&(Ct.data=pt)))),(pt=rn?Td(t,l):Ed(t,l))&&(Ct=fi(p,"onBeforeInput"),0<Ct.length&&(W=new vc("onBeforeInput","beforeinput",null,l,A),N.push({event:W,listeners:Ct}),W.data=pt)),vm(N,t,p,l,A)}Ch(N,e)})}function Pu(t,e,l){return{instance:t,listener:e,currentTarget:l}}function fi(t,e){for(var l=e+"Capture",a=[]
t!==null
){var n=t,u=n.stateNode
if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=De(t,l),n!=null&&a.unshift(Pu(t,n,u)),n=De(t,e),n!=null&&a.push(Pu(t,n,u))),t.tag===3)return a
t=t.return}return[]}function Sm(t){if(t===null)return null
do t=t.return
while(t&&t.tag!==5&&t.tag!==27)
return t||null}function Rh(t,e,l,a,n){for(var u=e._reactName,c=[]
l!==null&&l!==a
){var s=l,r=s.alternate,p=s.stateNode
if(s=s.tag,r!==null&&r===a)break
s!==5&&s!==26&&s!==27||p===null||(r=p,n?(p=De(l,u),p!=null&&c.unshift(Pu(l,p,r))):n||(p=De(l,u),p!=null&&c.push(Pu(l,p,r)))),l=l.return}c.length!==0&&t.push({event:e,listeners:c})}var xm=/\r\n?/g,Mm=/\u0000|\uFFFD/g
function Dh(t){return(typeof t=="string"?t:""+t).replace(xm,`
`).replace(Mm,"")}function _h(t,e){return e=Dh(e),Dh(t)===e}function te(t,e,l,a,n,u){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ie(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ie(t,""+a)
break
case"className":_n(t,"class",a)
break
case"tabIndex":_n(t,"tabindex",a)
break
case"dir":case"role":case"viewBox":case"width":case"height":_n(t,l,a)
break
case"style":ft(t,a,u)
break
case"data":if(e!=="object"){_n(t,"data",a)
break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l)
break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l)
break}a=rt(""+a),t.setAttribute(l,a)
break
case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')")
break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&te(t,e,"name",n.name,n,null),te(t,e,"formEncType",n.formEncType,n,null),te(t,e,"formMethod",n.formMethod,n,null),te(t,e,"formTarget",n.formTarget,n,null)):(te(t,e,"encType",n.encType,n,null),te(t,e,"method",n.method,n,null),te(t,e,"target",n.target,n,null)))
if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l)
break}a=rt(""+a),t.setAttribute(l,a)
break
case"onClick":a!=null&&(t.onclick=yt)
break
case"onScroll":a!=null&&zt("scroll",t)
break
case"onScrollEnd":a!=null&&zt("scrollend",t)
break
case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(g(61))
if(l=a.__html,l!=null){if(n.children!=null)throw Error(g(60))
t.innerHTML=l}}break
case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol"
break
case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol"
break
case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break
case"autoFocus":break
case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href")
break}l=rt(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l)
break
case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l)
break
case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l)
break
case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l)
break
case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l)
break
case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a)
break
case"popover":zt("beforetoggle",t),zt("toggle",t),un(t,"popover",a)
break
case"xlinkActuate":Et(t,"http://www.w3.org/1999/xlink","xlink:actuate",a)
break
case"xlinkArcrole":Et(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a)
break
case"xlinkRole":Et(t,"http://www.w3.org/1999/xlink","xlink:role",a)
break
case"xlinkShow":Et(t,"http://www.w3.org/1999/xlink","xlink:show",a)
break
case"xlinkTitle":Et(t,"http://www.w3.org/1999/xlink","xlink:title",a)
break
case"xlinkType":Et(t,"http://www.w3.org/1999/xlink","xlink:type",a)
break
case"xmlBase":Et(t,"http://www.w3.org/XML/1998/namespace","xml:base",a)
break
case"xmlLang":Et(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a)
break
case"xmlSpace":Et(t,"http://www.w3.org/XML/1998/namespace","xml:space",a)
break
case"is":un(t,"is",a)
break
case"innerText":case"textContent":break
default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=qt.get(l)||l,un(t,l,a))}}function mf(t,e,l,a,n,u){switch(l){case"style":ft(t,a,u)
break
case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(g(61))
if(l=a.__html,l!=null){if(n.children!=null)throw Error(g(60))
t.innerHTML=l}}break
case"children":typeof a=="string"?ie(t,a):(typeof a=="number"||typeof a=="bigint")&&ie(t,""+a)
break
case"onScroll":a!=null&&zt("scroll",t)
break
case"onScrollEnd":a!=null&&zt("scrollend",t)
break
case"onClick":a!=null&&(t.onclick=yt)
break
case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break
case"innerText":case"textContent":break
default:if(!Vl.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),u=t[Xe]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n)
break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):un(t,l,a)}}}function Ie(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break
case"img":zt("error",t),zt("load",t)
var a=!1,n=!1,u
for(u in l)if(l.hasOwnProperty(u)){var c=l[u]
if(c!=null)switch(u){case"src":a=!0
break
case"srcSet":n=!0
break
case"children":case"dangerouslySetInnerHTML":throw Error(g(137,e))
default:te(t,e,u,c,l,null)}}n&&te(t,e,"srcSet",l.srcSet,l,null),a&&te(t,e,"src",l.src,l,null)
return
case"input":zt("invalid",t)
var s=u=c=n=null,r=null,p=null
for(a in l)if(l.hasOwnProperty(a)){var A=l[a]
if(A!=null)switch(a){case"name":n=A
break
case"type":c=A
break
case"checked":r=A
break
case"defaultChecked":p=A
break
case"value":u=A
break
case"defaultValue":s=A
break
case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(g(137,e))
break
default:te(t,e,a,A,l,null)}}D(t,u,s,r,p,c,n,!1)
return
case"select":zt("invalid",t),a=c=u=null
for(n in l)if(l.hasOwnProperty(n)&&(s=l[n],s!=null))switch(n){case"value":u=s
break
case"defaultValue":c=s
break
case"multiple":a=s
default:te(t,e,n,s,l,null)}e=u,l=c,t.multiple=!!a,e!=null?ce(t,!!a,e,!1):l!=null&&ce(t,!!a,l,!0)
return
case"textarea":zt("invalid",t),u=n=a=null
for(c in l)if(l.hasOwnProperty(c)&&(s=l[c],s!=null))switch(c){case"value":a=s
break
case"defaultValue":n=s
break
case"children":u=s
break
case"dangerouslySetInnerHTML":if(s!=null)throw Error(g(91))
break
default:te(t,e,c,s,l,null)}Kt(t,a,n,u)
return
case"option":for(r in l)l.hasOwnProperty(r)&&(a=l[r],a!=null)&&(r==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":te(t,e,r,a,l,null))
return
case"dialog":zt("beforetoggle",t),zt("toggle",t),zt("cancel",t),zt("close",t)
break
case"iframe":case"object":zt("load",t)
break
case"video":case"audio":for(a=0
a<Iu.length
a++)zt(Iu[a],t)
break
case"image":zt("error",t),zt("load",t)
break
case"details":zt("toggle",t)
break
case"embed":case"source":case"link":zt("error",t),zt("load",t)
case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in l)if(l.hasOwnProperty(p)&&(a=l[p],a!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,e))
default:te(t,e,p,a,l,null)}return
default:if(at(e)){for(A in l)l.hasOwnProperty(A)&&(a=l[A],a!==void 0&&mf(t,e,A,a,l,void 0))
return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&te(t,e,s,a,l,null))}function Am(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break
case"input":var n=null,u=null,c=null,s=null,r=null,p=null,A=null
for(x in l){var N=l[x]
if(l.hasOwnProperty(x)&&N!=null)switch(x){case"checked":break
case"value":break
case"defaultValue":r=N
default:a.hasOwnProperty(x)||te(t,e,x,null,a,N)}}for(var S in a){var x=a[S]
if(N=l[S],a.hasOwnProperty(S)&&(x!=null||N!=null))switch(S){case"type":u=x
break
case"name":n=x
break
case"checked":p=x
break
case"defaultChecked":A=x
break
case"value":c=x
break
case"defaultValue":s=x
break
case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(g(137,e))
break
default:x!==N&&te(t,e,S,x,a,N)}}Ze(t,c,s,r,p,A,u,n)
return
case"select":x=c=s=S=null
for(u in l)if(r=l[u],l.hasOwnProperty(u)&&r!=null)switch(u){case"value":break
case"multiple":x=r
default:a.hasOwnProperty(u)||te(t,e,u,null,a,r)}for(n in a)if(u=a[n],r=l[n],a.hasOwnProperty(n)&&(u!=null||r!=null))switch(n){case"value":S=u
break
case"defaultValue":s=u
break
case"multiple":c=u
default:u!==r&&te(t,e,n,u,a,r)}e=s,l=c,a=x,S!=null?ce(t,!!l,S,!1):!!a!=!!l&&(e!=null?ce(t,!!l,e,!0):ce(t,!!l,l?[]:"",!1))
return
case"textarea":x=S=null
for(s in l)if(n=l[s],l.hasOwnProperty(s)&&n!=null&&!a.hasOwnProperty(s))switch(s){case"value":break
case"children":break
default:te(t,e,s,null,a,n)}for(c in a)if(n=a[c],u=l[c],a.hasOwnProperty(c)&&(n!=null||u!=null))switch(c){case"value":S=n
break
case"defaultValue":x=n
break
case"children":break
case"dangerouslySetInnerHTML":if(n!=null)throw Error(g(91))
break
default:n!==u&&te(t,e,c,n,a,u)}Dt(t,S,x)
return
case"option":for(var F in l)S=l[F],l.hasOwnProperty(F)&&S!=null&&!a.hasOwnProperty(F)&&(F==="selected"?t.selected=!1:te(t,e,F,null,a,S))
for(r in a)S=a[r],x=l[r],a.hasOwnProperty(r)&&S!==x&&(S!=null||x!=null)&&(r==="selected"?t.selected=S&&typeof S!="function"&&typeof S!="symbol":te(t,e,r,S,a,x))
return
case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ut in l)S=l[ut],l.hasOwnProperty(ut)&&S!=null&&!a.hasOwnProperty(ut)&&te(t,e,ut,null,a,S)
for(p in a)if(S=a[p],x=l[p],a.hasOwnProperty(p)&&S!==x&&(S!=null||x!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(g(137,e))
break
default:te(t,e,p,S,a,x)}return
default:if(at(e)){for(var ee in l)S=l[ee],l.hasOwnProperty(ee)&&S!==void 0&&!a.hasOwnProperty(ee)&&mf(t,e,ee,void 0,a,S)
for(A in a)S=a[A],x=l[A],!a.hasOwnProperty(A)||S===x||S===void 0&&x===void 0||mf(t,e,A,S,a,x)
return}}for(var m in l)S=l[m],l.hasOwnProperty(m)&&S!=null&&!a.hasOwnProperty(m)&&te(t,e,m,null,a,S)
for(N in a)S=a[N],x=l[N],!a.hasOwnProperty(N)||S===x||S==null&&x==null||te(t,e,N,S,a,x)}function Uh(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0
default:return!1}}function Tm(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0
a<l.length
a++){var n=l[a],u=n.transferSize,c=n.initiatorType,s=n.duration
if(u&&s&&Uh(c)){for(c=0,s=n.responseEnd,a+=1
a<l.length
a++){var r=l[a],p=r.startTime
if(p>s)break
var A=r.transferSize,N=r.initiatorType
A&&Uh(N)&&(r=r.responseEnd,c+=A*(r<s?1:(s-p)/(r-p)))}if(--a,e+=8*(u+c)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var yf=null,vf=null
function ri(t){return t.nodeType===9?t:t.ownerDocument}function qh(t){switch(t){case"http://www.w3.org/2000/svg":return 1
case"http://www.w3.org/1998/Math/MathML":return 2
default:return 0}}function Hh(t,e){if(t===0)switch(e){case"svg":return 1
case"math":return 2
default:return 0}return t===1&&e==="foreignObject"?0:t}function gf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pf=null
function Em(){var t=window.event
return t&&t.type==="popstate"?t===pf?!1:(pf=t,!0):(pf=null,!1)}var Bh=typeof setTimeout=="function"?setTimeout:void 0,jm=typeof clearTimeout=="function"?clearTimeout:void 0,Gh=typeof Promise=="function"?Promise:void 0,zm=typeof queueMicrotask=="function"?queueMicrotask:typeof Gh<"u"?function(t){return Gh.resolve(null).then(t).catch(Nm)}:Bh
function Nm(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function Yh(t,e){var l=e,a=0
do{var n=l.nextSibling
if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),ru(e)
return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++
else if(l==="html")tc(t.ownerDocument.documentElement)
else if(l==="head"){l=t.ownerDocument.head,tc(l)
for(var u=l.firstChild
u
){var c=u.nextSibling,s=u.nodeName
u[nn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=c}}else l==="body"&&tc(t.ownerDocument.body)
l=n}while(l)
ru(e)}function Lh(t,e){var l=t
t=0
do{var a=l.nextSibling
if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break
t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++
l=a}while(l)}function bf(t){var e=t.firstChild
for(e&&e.nodeType===10&&(e=e.nextSibling)
e
){var l=e
switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":bf(l),bu(l)
continue
case"SCRIPT":case"STYLE":continue
case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Cm(t,e,l,a){for(
t.nodeType===1
){var n=l
if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[nn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break
return t
case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break
if(u!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break
return t
case"style":if(t.hasAttribute("data-precedence"))break
return t
case"script":if(u=t.getAttribute("src"),(u!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break
return t
default:return t}}else if(e==="input"&&t.type==="hidden"){var u=n.name==null?null:""+n.name
if(n.type==="hidden"&&t.getAttribute("name")===u)return t}else return t
if(t=Yl(t.nextSibling),t===null)break}return null}function Om(t,e,l){if(e==="")return null
for(
t.nodeType!==3
)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Yl(t.nextSibling),t===null))return null
return t}function Xh(t,e){for(
t.nodeType!==8
)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Yl(t.nextSibling),t===null))return null
return t}function Sf(t){return t.data==="$?"||t.data==="$~"}function xf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Rm(t,e){var l=t.ownerDocument
if(t.data==="$~")t._reactRetry=e
else if(t.data!=="$?"||l.readyState!=="loading")e()
else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)}
l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Yl(t){for(
t!=null
t=t.nextSibling){var e=t.nodeType
if(e===1||e===3)break
if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break
if(e==="/$"||e==="/&")return null}}return t}var Mf=null
function wh(t){t=t.nextSibling
for(var e=0
t
){if(t.nodeType===8){var l=t.data
if(l==="/$"||l==="/&"){if(e===0)return Yl(t.nextSibling)
e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function Qh(t){t=t.previousSibling
for(var e=0
t
){if(t.nodeType===8){var l=t.data
if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t
e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function Vh(t,e,l){switch(e=ri(l),t){case"html":if(t=e.documentElement,!t)throw Error(g(452))
return t
case"head":if(t=e.head,!t)throw Error(g(453))
return t
case"body":if(t=e.body,!t)throw Error(g(454))
return t
default:throw Error(g(451))}}function tc(t){for(var e=t.attributes
e.length
)t.removeAttributeNode(e[0])
bu(t)}var Ll=new Map,Zh=new Set
function oi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ja=w.d
w.d={f:Dm,r:_m,D:Um,C:qm,L:Hm,m:Bm,X:Ym,S:Gm,M:Lm}
function Dm(){var t=ja.f(),e=li()
return t||e}function _m(t){var e=Ql(t)
e!==null&&e.tag===5&&e.type==="form"?io(e):ja.r(t)}var iu=typeof document>"u"?null:document
function Kh(t,e,l){var a=iu
if(a&&typeof e=="string"&&e){var n=k(e)
n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Zh.has(n)||(Zh.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),Ie(e,"link",t),ge(e),a.head.appendChild(e)))}}function Um(t){ja.D(t),Kh("dns-prefetch",t,null)}function qm(t,e){ja.C(t,e),Kh("preconnect",t,e)}function Hm(t,e,l){ja.L(t,e,l)
var a=iu
if(a&&t&&e){var n='link[rel="preload"][as="'+k(e)+'"]'
e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+k(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+k(l.imageSizes)+'"]')):n+='[href="'+k(t)+'"]'
var u=n
switch(e){case"style":u=su(t)
break
case"script":u=fu(t)}Ll.has(u)||(t=R({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ll.set(u,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(ec(u))||e==="script"&&a.querySelector(lc(u))||(e=a.createElement("link"),Ie(e,"link",t),ge(e),a.head.appendChild(e)))}}function Bm(t,e){ja.m(t,e)
var l=iu
if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+k(a)+'"][href="'+k(t)+'"]',u=n
switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=fu(t)}if(!Ll.has(u)&&(t=R({rel:"modulepreload",href:t},e),Ll.set(u,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(lc(u)))return}a=l.createElement("link"),Ie(a,"link",t),ge(a),l.head.appendChild(a)}}}function Gm(t,e,l){ja.S(t,e,l)
var a=iu
if(a&&t){var n=Oa(a).hoistableStyles,u=su(t)
e=e||"default"
var c=n.get(u)
if(!c){var s={loading:0,preload:null}
if(c=a.querySelector(ec(u)))s.loading=5
else{t=R({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ll.get(u))&&Af(t,l)
var r=c=a.createElement("link")
ge(r),Ie(r,"link",t),r._p=new Promise(function(p,A){r.onload=p,r.onerror=A}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,hi(c,e,a)}c={type:"stylesheet",instance:c,count:1,state:s},n.set(u,c)}}}function Ym(t,e){ja.X(t,e)
var l=iu
if(l&&t){var a=Oa(l).hoistableScripts,n=fu(t),u=a.get(n)
u||(u=l.querySelector(lc(n)),u||(t=R({src:t,async:!0},e),(e=Ll.get(n))&&Tf(t,e),u=l.createElement("script"),ge(u),Ie(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Lm(t,e){ja.M(t,e)
var l=iu
if(l&&t){var a=Oa(l).hoistableScripts,n=fu(t),u=a.get(n)
u||(u=l.querySelector(lc(n)),u||(t=R({src:t,async:!0,type:"module"},e),(e=Ll.get(n))&&Tf(t,e),u=l.createElement("script"),ge(u),Ie(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Jh(t,e,l,a){var n=(n=ht.current)?oi(n):null
if(!n)throw Error(g(446))
switch(t){case"meta":case"title":return null
case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=su(l.href),l=Oa(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null}
case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=su(l.href)
var u=Oa(n).hoistableStyles,c=u.get(t)
if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,c),(u=n.querySelector(ec(t)))&&!u._p&&(c.instance=u,c.state.loading=5),Ll.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ll.set(t,l),u||Xm(n,t,l,c.state))),e&&a===null)throw Error(g(528,""))
return c}if(e&&a!==null)throw Error(g(529,""))
return null
case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=fu(l),l=Oa(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null}
default:throw Error(g(444,t))}}function su(t){return'href="'+k(t)+'"'}function ec(t){return'link[rel="stylesheet"]['+t+"]"}function kh(t){return R({},t,{"data-precedence":t.precedence,precedence:null})}function Xm(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Ie(e,"link",l),ge(e),t.head.appendChild(e))}function fu(t){return'[src="'+k(t)+'"]'}function lc(t){return"script[async]"+t}function Fh(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+k(l.href)+'"]')
if(a)return e.instance=a,ge(a),a
var n=R({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null})
return a=(t.ownerDocument||t).createElement("style"),ge(a),Ie(a,"style",n),hi(a,l.precedence,t),e.instance=a
case"stylesheet":n=su(l.href)
var u=t.querySelector(ec(n))
if(u)return e.state.loading|=4,e.instance=u,ge(u),u
a=kh(l),(n=Ll.get(n))&&Af(a,n),u=(t.ownerDocument||t).createElement("link"),ge(u)
var c=u
return c._p=new Promise(function(s,r){c.onload=s,c.onerror=r}),Ie(u,"link",a),e.state.loading|=4,hi(u,l.precedence,t),e.instance=u
case"script":return u=fu(l.src),(n=t.querySelector(lc(u)))?(e.instance=n,ge(n),n):(a=l,(n=Ll.get(u))&&(a=R({},l),Tf(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),ge(n),Ie(n,"link",a),t.head.appendChild(n),e.instance=n)
case"void":return null
default:throw Error(g(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,hi(a,l.precedence,t))
return e.instance}function hi(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,c=0
c<a.length
c++){var s=a[c]
if(s.dataset.precedence===e)u=s
else if(u!==n)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Af(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Tf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var di=null
function $h(t,e,l){if(di===null){var a=new Map,n=di=new Map
n.set(l,a)}else n=di,a=n.get(l),a||(a=new Map,n.set(l,a))
if(a.has(t))return a
for(a.set(t,null),l=l.getElementsByTagName(t),n=0
n<l.length
n++){var u=l[n]
if(!(u[nn]||u[Ce]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var c=u.getAttribute(e)||""
c=t+c
var s=a.get(c)
s?s.push(u):a.set(c,[u])}}return a}function Wh(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function wm(t,e,l){if(l===1||e.itemProp!=null)return!1
switch(t){case"meta":case"title":return!0
case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break
return!0
case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break
return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0
case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Ih(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Qm(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=su(a.href),u=e.querySelector(ec(n))
if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=mi.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=u,ge(u)
return}u=e.ownerDocument||e,a=kh(a),(n=Ll.get(n))&&Af(a,n),u=u.createElement("link"),ge(u)
var c=u
c._p=new Promise(function(s,r){c.onload=s,c.onerror=r}),Ie(u,"link",a),l.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=mi.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var Ef=0
function Vm(t,e){return t.stylesheets&&t.count===0&&vi(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&vi(t,t.stylesheets),t.unsuspend){var u=t.unsuspend
t.unsuspend=null,u()}},6e4+e)
0<t.imgBytes&&Ef===0&&(Ef=62500*Tm())
var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&vi(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend
t.unsuspend=null,u()}},(t.imgBytes>Ef?50:800)+e)
return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function mi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vi(this,this.stylesheets)
else if(this.unsuspend){var t=this.unsuspend
this.unsuspend=null,t()}}}var yi=null
function vi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,yi=new Map,e.forEach(Zm,t),yi=null,mi.call(t))}function Zm(t,e){if(!(e.state.loading&4)){var l=yi.get(t)
if(l)var a=l.get(null)
else{l=new Map,yi.set(t,l)
for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0
u<n.length
u++){var c=n[u]
(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}n=e.instance,c=n.getAttribute("data-precedence"),u=l.get(c)||a,u===a&&l.set(null,n),l.set(c,n),this.count++,a=mi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var ac={$$typeof:bt,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0}
function Km(t,e,l,a,n,u,c,s,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yu(0),this.hiddenUpdates=yu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Ph(t,e,l,a,n,u,c,s,r,p,A,N){return t=new Km(t,e,l,c,r,p,A,N,s),e=1,u===!0&&(e|=24),u=Al(3,null,null,e),t.current=u,u.stateNode=t,e=as(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:e},is(u),t}function td(t){return t?(t=Ln,t):Ln}function ed(t,e,l,a,n,u){n=td(n),a.context===null?a.context=n:a.pendingContext=n,a=Ga(e),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=Ya(t,a,e),l!==null&&(vl(l,t,e),qu(l,t,e))}function ld(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane
t.retryLane=l!==0&&l<e?l:e}}function jf(t,e){ld(t,e),(t=t.alternate)&&ld(t,e)}function ad(t){if(t.tag===13||t.tag===31){var e=mn(t,67108864)
e!==null&&vl(e,t,67108864),jf(t,67108864)}}function nd(t){if(t.tag===13||t.tag===31){var e=Nl()
e=vu(e)
var l=mn(t,e)
l!==null&&vl(l,t,e),jf(t,e)}}var gi=!0
function Jm(t,e,l,a){var n=T.T
T.T=null
var u=w.p
try{w.p=2,zf(t,e,l,a)}finally{w.p=u,T.T=n}}function km(t,e,l,a){var n=T.T
T.T=null
var u=w.p
try{w.p=8,zf(t,e,l,a)}finally{w.p=u,T.T=n}}function zf(t,e,l,a){if(gi){var n=Nf(a)
if(n===null)df(t,e,a,pi,l),cd(t,a)
else if($m(n,t,e,l,a))a.stopPropagation()
else if(cd(t,a),e&4&&-1<Fm.indexOf(t)){for(
n!==null
){var u=Ql(n)
if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var c=re(u.pendingLanes)
if(c!==0){var s=u
for(s.pendingLanes|=2,s.entangledLanes|=2
c
){var r=1<<31-fe(c)
s.entanglements[1]|=r,c&=~r}ea(u),(Qt&6)===0&&(ti=Le()+500,Wu(0))}}break
case 31:case 13:s=mn(u,2),s!==null&&vl(s,u,2),li(),jf(u,2)}if(u=Nf(a),u===null&&df(t,e,a,pi,l),u===n)break
n=u}n!==null&&a.stopPropagation()}else df(t,e,a,null,l)}}function Nf(t){return t=Wt(t),Cf(t)}var pi=null
function Cf(t){if(pi=null,t=Q(t),t!==null){var e=At(t)
if(e===null)t=null
else{var l=e.tag
if(l===13){if(t=ue(e),t!==null)return t
t=null}else if(l===31){if(t=Tt(e),t!==null)return t
t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null
t=null}else e!==t&&(t=null)}}return pi=t,null}function ud(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2
case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8
case"message":switch(rc()){case du:return 2
case Cn:return 8
case On:case ln:return 32
case mu:return 268435456
default:return 32}default:return 32}}var Of=!1,$a=null,Wa=null,Ia=null,nc=new Map,uc=new Map,Pa=[],Fm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ")
function cd(t,e){switch(t){case"focusin":case"focusout":$a=null
break
case"dragenter":case"dragleave":Wa=null
break
case"mouseover":case"mouseout":Ia=null
break
case"pointerover":case"pointerout":nc.delete(e.pointerId)
break
case"gotpointercapture":case"lostpointercapture":uc.delete(e.pointerId)}}function cc(t,e,l,a,n,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},e!==null&&(e=Ql(e),e!==null&&ad(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function $m(t,e,l,a,n){switch(e){case"focusin":return $a=cc($a,t,e,l,a,n),!0
case"dragenter":return Wa=cc(Wa,t,e,l,a,n),!0
case"mouseover":return Ia=cc(Ia,t,e,l,a,n),!0
case"pointerover":var u=n.pointerId
return nc.set(u,cc(nc.get(u)||null,t,e,l,a,n)),!0
case"gotpointercapture":return u=n.pointerId,uc.set(u,cc(uc.get(u)||null,t,e,l,a,n)),!0}return!1}function id(t){var e=Q(t.target)
if(e!==null){var l=At(e)
if(l!==null){if(e=l.tag,e===13){if(e=ue(l),e!==null){t.blockedOn=e,kl(t.priority,function(){nd(l)})
return}}else if(e===31){if(e=Tt(l),e!==null){t.blockedOn=e,kl(t.priority,function(){nd(l)})
return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null
return}}}t.blockedOn=null}function bi(t){if(t.blockedOn!==null)return!1
for(var e=t.targetContainers
0<e.length
){var l=Nf(t.nativeEvent)
if(l===null){l=t.nativeEvent
var a=new l.constructor(l.type,l)
$t=a,l.target.dispatchEvent(a),$t=null}else return e=Ql(l),e!==null&&ad(e),t.blockedOn=l,!1
e.shift()}return!0}function sd(t,e,l){bi(t)&&l.delete(e)}function Wm(){Of=!1,$a!==null&&bi($a)&&($a=null),Wa!==null&&bi(Wa)&&(Wa=null),Ia!==null&&bi(Ia)&&(Ia=null),nc.forEach(sd),uc.forEach(sd)}function Si(t,e){t.blockedOn===e&&(t.blockedOn=null,Of||(Of=!0,L.unstable_scheduleCallback(L.unstable_NormalPriority,Wm)))}var xi=null
function fd(t){xi!==t&&(xi=t,L.unstable_scheduleCallback(L.unstable_NormalPriority,function(){xi===t&&(xi=null)
for(var e=0
e<t.length
e+=3){var l=t[e],a=t[e+1],n=t[e+2]
if(typeof a!="function"){if(Cf(a||l)===null)continue
break}var u=Ql(l)
u!==null&&(t.splice(e,3),e-=3,zs(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function ru(t){function e(r){return Si(r,t)}$a!==null&&Si($a,t),Wa!==null&&Si(Wa,t),Ia!==null&&Si(Ia,t),nc.forEach(e),uc.forEach(e)
for(var l=0
l<Pa.length
l++){var a=Pa[l]
a.blockedOn===t&&(a.blockedOn=null)}for(
0<Pa.length&&(l=Pa[0],l.blockedOn===null)
)id(l),l.blockedOn===null&&Pa.shift()
if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0
a<l.length
a+=3){var n=l[a],u=l[a+1],c=n[Xe]||null
if(typeof u=="function")c||fd(l)
else if(c){var s=null
if(u&&u.hasAttribute("formAction")){if(n=u,c=u[Xe]||null)s=c.formAction
else if(Cf(n)!==null)continue}else s=c.action
typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),fd(l)}}}function rd(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var u=navigation.currentEntry
u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null
return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function Rf(t){this._internalRoot=t}Mi.prototype.render=Rf.prototype.render=function(t){var e=this._internalRoot
if(e===null)throw Error(g(409))
var l=e.current,a=Nl()
ed(l,a,t,e,null,null)},Mi.prototype.unmount=Rf.prototype.unmount=function(){var t=this._internalRoot
if(t!==null){this._internalRoot=null
var e=t.containerInfo
ed(t.current,2,null,t,null,null),li(),e[Fl]=null}}
function Mi(t){this._internalRoot=t}Mi.prototype.unstable_scheduleHydration=function(t){if(t){var e=V()
t={blockedOn:null,target:t,priority:e}
for(var l=0
l<Pa.length&&e!==0&&e<Pa[l].priority
l++)
Pa.splice(l,0,t),l===0&&id(t)}}
var od=o.version
if(od!=="19.2.4")throw Error(g(527,od,"19.2.4"))
w.findDOMNode=function(t){var e=t._reactInternals
if(e===void 0)throw typeof t.render=="function"?Error(g(188)):(t=Object.keys(t).join(","),Error(g(268,t)))
return t=b(e),t=t!==null?E(t):null,t=t===null?null:t.stateNode,t}
var Im={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.4"}
if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__
if(!Ai.isDisabled&&Ai.supportsFiber)try{B=Ai.inject(Im),wt=Ai}catch{}}return sc.createRoot=function(t,e){if(!ct(t))throw Error(g(299))
var l=!1,a="",n=po,u=bo,c=So
return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError)),e=Ph(t,1,!1,null,null,l,a,null,n,u,c,rd),t[Fl]=e.current,hf(t),new Rf(e)},sc.hydrateRoot=function(t,e,l){if(!ct(t))throw Error(g(299))
var a=!1,n="",u=po,c=bo,s=So,r=null
return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(r=l.formState)),e=Ph(t,1,!0,e,l??null,a,n,r,u,c,s,rd),e.context=td(null),l=e.current,a=Nl(),a=vu(a),n=Ga(a),n.callback=null,Ya(l,n,a),l=a,e.current.lanes=l,sa(e,l),ea(e),t[Fl]=e.current,hf(t),new Mi(e)},sc.version="19.2.4",sc}var xd
function f0(){if(xd)return Uf.exports
xd=1
function L(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L)}catch(o){console.error(o)}}return L(),Uf.exports=s0(),Uf.exports}var r0=f0(),Gf={exports:{}},Md
function o0(){return Md||(Md=1,(function(L){var o=(function(){var ot=String.fromCharCode,g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",ct="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",At={}
function ue(C,b){if(!At[C]){At[C]={}
for(var E=0
E<C.length
E++)At[C][C.charAt(E)]=E}return At[C][b]}var Tt={compressToBase64:function(C){if(C==null)return""
var b=Tt._compress(C,6,function(E){return g.charAt(E)})
switch(b.length%4){default:case 0:return b
case 1:return b+"==="
case 2:return b+"=="
case 3:return b+"="}},decompressFromBase64:function(C){return C==null?"":C==""?null:Tt._decompress(C.length,32,function(b){return ue(g,C.charAt(b))})},compressToUTF16:function(C){return C==null?"":Tt._compress(C,15,function(b){return ot(b+32)})+" "},decompressFromUTF16:function(C){return C==null?"":C==""?null:Tt._decompress(C.length,16384,function(b){return C.charCodeAt(b)-32})},compressToUint8Array:function(C){for(var b=Tt.compress(C),E=new Uint8Array(b.length*2),R=0,G=b.length
R<G
R++){var Ot=b.charCodeAt(R)
E[R*2]=Ot>>>8,E[R*2+1]=Ot%256}return E},decompressFromUint8Array:function(C){if(C==null)return Tt.decompress(C)
for(var b=new Array(C.length/2),E=0,R=b.length
E<R
E++)b[E]=C[E*2]*256+C[E*2+1]
var G=[]
return b.forEach(function(Ot){G.push(ot(Ot))}),Tt.decompress(G.join(""))},compressToEncodedURIComponent:function(C){return C==null?"":Tt._compress(C,6,function(b){return ct.charAt(b)})},decompressFromEncodedURIComponent:function(C){return C==null?"":C==""?null:(C=C.replace(/ /g,"+"),Tt._decompress(C.length,32,function(b){return ue(ct,C.charAt(b))}))},compress:function(C){return Tt._compress(C,16,function(b){return ot(b)})},_compress:function(C,b,E){if(C==null)return""
var R,G,Ot={},Bt={},Lt="",le="",gt="",et=2,bt=3,mt=2,St=[],_=0,U=0,J
for(J=0
J<C.length
J+=1)if(Lt=C.charAt(J),Object.prototype.hasOwnProperty.call(Ot,Lt)||(Ot[Lt]=bt++,Bt[Lt]=!0),le=gt+Lt,Object.prototype.hasOwnProperty.call(Ot,le))gt=le
else{if(Object.prototype.hasOwnProperty.call(Bt,gt)){if(gt.charCodeAt(0)<256){for(R=0
R<mt
R++)_=_<<1,U==b-1?(U=0,St.push(E(_)),_=0):U++
for(G=gt.charCodeAt(0),R=0
R<8
R++)_=_<<1|G&1,U==b-1?(U=0,St.push(E(_)),_=0):U++,G=G>>1}else{for(G=1,R=0
R<mt
R++)_=_<<1|G,U==b-1?(U=0,St.push(E(_)),_=0):U++,G=0
for(G=gt.charCodeAt(0),R=0
R<16
R++)_=_<<1|G&1,U==b-1?(U=0,St.push(E(_)),_=0):U++,G=G>>1}et--,et==0&&(et=Math.pow(2,mt),mt++),delete Bt[gt]}else for(G=Ot[gt],R=0
R<mt
R++)_=_<<1|G&1,U==b-1?(U=0,St.push(E(_)),_=0):U++,G=G>>1
et--,et==0&&(et=Math.pow(2,mt),mt++),Ot[le]=bt++,gt=String(Lt)}if(gt!==""){if(Object.prototype.hasOwnProperty.call(Bt,gt)){if(gt.charCodeAt(0)<256){for(R=0
R<mt
R++)_=_<<1,U==b-1?(U=0,St.push(E(_)),_=0):U++
for(G=gt.charCodeAt(0),R=0
R<8
R++)_=_<<1|G&1,U==b-1?(U=0,St.push(E(_)),_=0):U++,G=G>>1}else{for(G=1,R=0
R<mt
R++)_=_<<1|G,U==b-1?(U=0,St.push(E(_)),_=0):U++,G=0
for(G=gt.charCodeAt(0),R=0
R<16
R++)_=_<<1|G&1,U==b-1?(U=0,St.push(E(_)),_=0):U++,G=G>>1}et--,et==0&&(et=Math.pow(2,mt),mt++),delete Bt[gt]}else for(G=Ot[gt],R=0
R<mt
R++)_=_<<1|G&1,U==b-1?(U=0,St.push(E(_)),_=0):U++,G=G>>1
et--,et==0&&(et=Math.pow(2,mt),mt++)}for(G=2,R=0
R<mt
R++)_=_<<1|G&1,U==b-1?(U=0,St.push(E(_)),_=0):U++,G=G>>1
for(

)if(_=_<<1,U==b-1){St.push(E(_))
break}else U++
return St.join("")},decompress:function(C){return C==null?"":C==""?null:Tt._decompress(C.length,32768,function(b){return C.charCodeAt(b)})},_decompress:function(C,b,E){var R=[],G=4,Ot=4,Bt=3,Lt="",le=[],gt,et,bt,mt,St,_,U,J={val:E(0),position:b,index:1}
for(gt=0
gt<3
gt+=1)R[gt]=gt
for(bt=0,St=Math.pow(2,2),_=1
_!=St
)mt=J.val&J.position,J.position>>=1,J.position==0&&(J.position=b,J.val=E(J.index++)),bt|=(mt>0?1:0)*_,_<<=1
switch(bt){case 0:for(bt=0,St=Math.pow(2,8),_=1
_!=St
)mt=J.val&J.position,J.position>>=1,J.position==0&&(J.position=b,J.val=E(J.index++)),bt|=(mt>0?1:0)*_,_<<=1
U=ot(bt)
break
case 1:for(bt=0,St=Math.pow(2,16),_=1
_!=St
)mt=J.val&J.position,J.position>>=1,J.position==0&&(J.position=b,J.val=E(J.index++)),bt|=(mt>0?1:0)*_,_<<=1
U=ot(bt)
break
case 2:return""}for(R[3]=U,et=U,le.push(U)

){if(J.index>C)return""
for(bt=0,St=Math.pow(2,Bt),_=1
_!=St
)mt=J.val&J.position,J.position>>=1,J.position==0&&(J.position=b,J.val=E(J.index++)),bt|=(mt>0?1:0)*_,_<<=1
switch(U=bt){case 0:for(bt=0,St=Math.pow(2,8),_=1
_!=St
)mt=J.val&J.position,J.position>>=1,J.position==0&&(J.position=b,J.val=E(J.index++)),bt|=(mt>0?1:0)*_,_<<=1
R[Ot++]=ot(bt),U=Ot-1,G--
break
case 1:for(bt=0,St=Math.pow(2,16),_=1
_!=St
)mt=J.val&J.position,J.position>>=1,J.position==0&&(J.position=b,J.val=E(J.index++)),bt|=(mt>0?1:0)*_,_<<=1
R[Ot++]=ot(bt),U=Ot-1,G--
break
case 2:return le.join("")}if(G==0&&(G=Math.pow(2,Bt),Bt++),R[U])Lt=R[U]
else if(U===Ot)Lt=et+et.charAt(0)
else return null
le.push(Lt),R[Ot++]=et+Lt.charAt(0),G--,et=Lt,G==0&&(G=Math.pow(2,Bt),Bt++)}}}
return Tt})()
L!=null?L.exports=o:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return o})})(Gf)),Gf.exports}var h0=o0()
const Ad=t0(h0),ne={RAINBOW:0,BW:1,KALEIDOSCOPE:2,BLUE:3,GOLDEN:4,FRAGMENTED:5,HOLOGRAPHIC:6,SILK:7,SILK_INVERSE:8},la={DIV10:4,DIV5:5,X1:1,X2:2},za={ORIGINAL:"Linkage (Original Math)",CYMATICS:"Cymatics (Chladni Plate)"},Yf={mode:za.ORIGINAL,acceleration:73,rotorRPM:4,baseoffsx:0,baseoffsy:-385,handdist:351,soundEnabled:!1,lrpm:2,larma:0,larm1:105,larm2:316,rrpm:-3,rarm1:95,rarm2:371,rarmext:53,penStyle:ne.RAINBOW,brightnessMode:la.X1,lineWidth:1,glow:!1,symmetry:1,autoEvolve:!1,particlesEnabled:!1,showArms:!1,mouseInteraction:!1,showFinishPoint:!1,zoom:1,lensEnabled:!1,strobeEnabled:!1,theme:"space",synthWaveform:"sine",synthScale:"chromatic",synthDelay:.3,synthFeedback:.4,synthReverb:.5,synthCutoff:800,synthResonance:1,synthTranspose:0,synthComplexity:1,synthDrive:0,synthLFOFreq:2,synthLFOAmount:0,synthArpSpeed:0,synthArpRange:1,synthMelodyVol:.3,synthChordVol:.5,livedraw:!0,cutpixels:!0,autoStop:!0,cymaticsN:3,cymaticsM:2,cymaticsSensitivity:1.5,cymaticsParticleCount:15e3,cymaticsFriction:.95,cymaticsSpeed:.5,cymaticsFieldMode:!1,cymaticsRainbowMode:!0,cymaticsGhostMode:!1,cymaticsOilMode:!1,cymaticsSpin:0,cymaticsZoom:0,cymaticsCircular:!1,cymaticsRippleMode:!0}
function d0(){const L=q.useRef(null),[o,ot]=q.useState(Yf),[g,ct]=q.useState(!1),[At,ue]=q.useState(0),[Tt]=q.useState({width:2400,height:1800}),[C,b]=q.useState(1),[E,R]=q.useState({name:"-",octave:0,freq:0}),[G,Ot]=q.useState({name:"C",scale:[0,2,4,5,7,9,11],mode:"major"}),[Bt,Lt]=q.useState(!1),[le,gt]=q.useState(null),[et,bt]=q.useState({quickRandom:!1,viewExport:!0,coreEngine:!1,armBase:!0,genArtEngine:!0,viewControls:!0,leftMechanism:!0,rightMechanism:!0,penStyle:!1,spiroSynth:!0,sonicEQ:!0,genPerf:!0,gallery:!1,cymaticsLab:!1}),[mt,St]=q.useState(!0),_=q.useRef(null),[U,J]=q.useState({x:0,y:0}),Ye=q.useRef(),gl=q.useRef(),Pe=q.useRef([]),Ve=q.useRef(0),pl=q.useRef(g),Je=q.useRef(0),sl=q.useRef(0),T=5e4,w=16,it=1e6,Xt=q.useRef(0),Vt=q.useRef(6+Math.random()*2),d=q.useRef([]),z=q.useRef(null),H=q.useRef(null),K=q.useRef(null),st=q.useRef(0),ht=q.useRef(0),xt=q.useRef([]),xe=q.useRef([.1,.1,.1,.1,.1,.1,.1]),se=q.useRef(null),aa=q.useRef([]),na=q.useRef(!1),zn=q.useRef(new Array(7).fill(0)),ou=q.useRef(0),[Xl,hu]=q.useState(null),[Cl,Ti]=q.useState(0),[fc,Nn]=q.useState(0),[Na,en]=q.useState(!1),Ca=q.useRef(!1)
q.useEffect(()=>{if(!Na)return
const f=setInterval(()=>{if(B.current&&Ca.current){const y=B.current.currentTime-st.current,M=Math.max(0,y%(Cl||1))
Nn(M)}},250)
return()=>clearInterval(f)},[Na,Cl]),q.useEffect(()=>{pl.current=g},[g])
const[ua,Le]=q.useState([]),[rc,du]=q.useState(!1),[Cn,On]=q.useState(!1),ln=q.useRef(null),mu=q.useRef(0),Ei=f=>{const y=(O,Y)=>{for(O=Math.abs(O),Y=Math.abs(Y)
Y
)O%=Y,[O,Y]=[Y,O]
return O},M=(O,Y)=>O*Y/y(O,Y),Z=[f.rotorRPM,f.lrpm,f.rrpm].filter(O=>Math.abs(O)>1e-4).map(O=>Math.round(Math.abs(O)*1e3))
if(Z.length<1)return 1/0
try{const O=Z.map(P=>1e3/y(P,1e3))
let Y=O[0]
for(let P=1
P<O.length
P++)if(Y=M(Y,O[P]),Y>5e3)return 1/0
return Y*Math.PI*2}catch{return 1/0}}
q.useEffect(()=>{(async()=>{if(window.api){let y=await window.api.getPresets()
if(!y||y.length===0){const M=localStorage.getItem("spiro_gallery")
if(M)y=JSON.parse(M),console.log("Migrating from LocalStorage")
else{const Z=await window.api.scanOldPresets()
if(Z&&Z.length>0){const O=new Set
y=Z.filter(Y=>{const P=JSON.stringify(Y.params)
return O.has(P)?!1:(O.add(P),!0)}),alert(`🎉 We found and restored ${y.length} lost presets!`)}}}y&&y.length>0&&Le(y),du(!0)}else{const y=localStorage.getItem("spiro_gallery")
y&&Le(JSON.parse(y)),du(!0)}})()},[]),q.useEffect(()=>{rc&&(window.api?window.api.savePresets(ua):localStorage.setItem("spiro_gallery",JSON.stringify(ua)))},[ua,rc])
const ji=async()=>{if(window.api){const f=await window.api.getPresets()
f&&Le(f)}}
q.useEffect(()=>{const f=setTimeout(()=>{St(!1)},2500)
return()=>clearTimeout(f)},[])
const B=q.useRef(null),wt=q.useRef(null),Zt=q.useRef(null),fe=q.useRef(null),ve=q.useRef(null),ll=q.useRef(null),fl=q.useRef(null),al=q.useRef(null),Ne=q.useRef(null),nl=q.useRef(null),re=q.useRef(null),tl=q.useRef(null),ke=q.useRef(null),ca=q.useRef({index:0,tick:0}),ia=()=>{const f=window.AudioContext||window.webkitAudioContext
B.current=new f,wt.current=B.current.createOscillator(),wt.current.type=o.synthWaveform,Zt.current=B.current.createGain(),Zt.current.gain.value=o.synthMelodyVol,fe.current=B.current.createStereoPanner(),ve.current=B.current.createDelay(),ve.current.delayTime.value=o.synthDelay,ll.current=B.current.createGain(),ll.current.gain.value=o.synthFeedback,re.current=B.current.createBiquadFilter(),re.current.type="lowpass",re.current.frequency.value=o.synthCutoff,re.current.Q.value=o.synthResonance,tl.current=B.current.createWaveShaper(),(Y=>{const k=new Float32Array(44100),Ze=Math.PI/180
for(let D=0
D<44100
++D){const X=D*2/44100-1
k[D]=(3+Y)*X*20*Ze/(Math.PI+Y*Math.abs(X))}tl.current.curve=k})(o.synthDrive),tl.current.oversampling="4x"
const M=B.current.createGain()
M.gain.value=.8,ke.current=B.current.createGain(),ke.current.gain.value=o.synthChordVol,re.current.connect(tl.current),tl.current.connect(M),M.connect(B.current.destination),fl.current=B.current.createConvolver(),al.current=B.current.createGain(),al.current.gain.value=o.synthReverb
const Z=B.current.sampleRate*3,O=B.current.createBuffer(2,Z,B.current.sampleRate)
for(let Y=0
Y<2
Y++){const P=O.getChannelData(Y)
for(let k=0
k<Z
k++)P[k]=(Math.random()*2-1)*Math.exp(-k/(B.current.sampleRate*1.5))}fl.current.buffer=O,fe.current.connect(B.current.destination),fe.current.connect(ve.current),ve.current.connect(ll.current),ll.current.connect(ve.current),ve.current.connect(B.current.destination),Ne.current=B.current.createOscillator(),nl.current=B.current.createGain(),Ne.current.frequency.value=o.synthLFOFreq,nl.current.gain.value=o.synthLFOAmount,Ne.current.type="sine",Ne.current.connect(nl.current),nl.current.connect(Zt.current.gain),re.current.connect(fl.current),fl.current.connect(al.current),al.current.connect(B.current.destination),re.current.connect(ve.current),ve.current.connect(ll.current),ll.current.connect(ve.current),ve.current.connect(B.current.destination),Ne.current.start(),wt.current.start()},yu=async()=>{if(B.current)try{Zt.current&&(Zt.current.gain.cancelScheduledValues(B.current.currentTime),Zt.current.gain.setValueAtTime(0,B.current.currentTime),Zt.current.disconnect()),ll.current&&(ll.current.gain.setValueAtTime(0,B.current.currentTime),ll.current.disconnect()),ve.current&&ve.current.disconnect(),fl.current&&fl.current.disconnect(),al.current&&al.current.disconnect(),re.current&&re.current.disconnect(),tl.current&&tl.current.disconnect(),fe.current&&fe.current.disconnect(),Ne.current&&Ne.current.disconnect(),nl.current&&nl.current.disconnect(),ke.current&&ke.current.disconnect(),wt.current&&wt.current.stop(),Ne.current&&Ne.current.stop(),await B.current.close()}catch(f){console.warn("Audio Context Close error:",f)}B.current=null,wt.current=null,Zt.current=null,fe.current=null,ve.current=null,ll.current=null,fl.current=null,al.current=null,Ne.current=null,nl.current=null,re.current=null,tl.current=null,ke.current=null,setTimeout(()=>{ia()},100)},sa=(f=0)=>{if(!K.current||!B.current)return
if(H.current)try{H.current.stop()}catch{}const y=B.current.createBufferSource()
y.buffer=K.current,y.loop=!0
const M=B.current.createAnalyser()
M.fftSize=256,z.current=M,y.connect(M),M.connect(B.current.destination),y.start(0,f%K.current.duration),H.current=y,st.current=B.current.currentTime-f,en(!0),Ca.current=!0},zi=()=>{if(!(!H.current||!Ca.current)){ht.current=B.current.currentTime-st.current
try{H.current.stop()}catch{}H.current=null,en(!1),Ca.current=!1}},oc=()=>{if(H.current){try{H.current.stop()}catch{}H.current=null}ht.current=0,en(!1),Ca.current=!1,ct(!1)},Rn=f=>{ht.current=f,Nn(f),Ca.current&&sa(f)},hc=()=>{const f=Math.floor(2+Math.random()*14),y=Math.floor(2+Math.random()*14)
if(ot(M=>({...M,cymaticsN:f,cymaticsM:y})),d.current&&Xe.current){const{width:M,height:Z}=Xe.current
d.current.forEach(O=>{O.x=Math.random()*M,O.y=Math.random()*Z,O.vx=0,O.vy=0,O.band=Math.floor(Math.random()*7)})}},vu=()=>{const f=L.current
if(!f)return
const y=document.createElement("a"),M=new Date().toISOString().replace(/[:.]/g,"-")
y.download=`amuse-cymatics-art-${M}.png`,y.href=f.toDataURL("image/png"),y.click()},gu=async f=>{const y=f.target.files[0]
if(!y)return
if(B.current||ia(),B.current.state==="suspended"&&B.current.resume(),H.current){try{H.current.stop()}catch{}H.current=null}const M=await y.arrayBuffer(),Z=await B.current.decodeAudioData(M)
K.current=Z,ht.current=0,hu(y.name.replace(/\.[^.]+$/,"")),Ti(Z.duration)
const O=Z.getChannelData(0),Y=200,P=Math.floor(O.length/Y),k=[]
for(let Ze=0
Ze<Y
Ze++){let D=0
for(let X=0
X<P
X++){const ce=Math.abs(O[Ze*P+X])
ce>D&&(D=ce)}k.push(D)}aa.current=k,Q("mode",za.CYMATICS),ct(!0),sa(0)}
q.useEffect(()=>{if(B.current){if(wt.current&&(wt.current.type=o.synthWaveform),ve.current&&ve.current.delayTime.setTargetAtTime(o.synthDelay,B.current.currentTime,.1),ll.current&&ll.current.gain.setTargetAtTime(o.synthFeedback,B.current.currentTime,.1),al.current&&al.current.gain.setTargetAtTime(o.synthReverb,B.current.currentTime,.1),Ne.current&&Ne.current.frequency.setTargetAtTime(o.synthLFOFreq,B.current.currentTime,.1),nl.current&&nl.current.gain.setTargetAtTime(o.synthLFOAmount,B.current.currentTime,.1),Zt.current){const f=o.mode===za.CYMATICS?0:o.synthMelodyVol
Zt.current.gain.setTargetAtTime(f,B.current.currentTime,.1)}if(ke.current){const f=o.mode===za.CYMATICS?0:o.synthChordVol
ke.current.gain.setTargetAtTime(f,B.current.currentTime,.1)}if(re.current&&(re.current.frequency.setTargetAtTime(o.synthCutoff,B.current.currentTime,.05),re.current.Q.setTargetAtTime(o.synthResonance,B.current.currentTime,.05)),tl.current){const f=o.synthDrive,y=44100,M=new Float32Array(y),Z=Math.PI/180
for(let O=0
O<y
++O){const Y=O*2/y-1
M[O]=(3+f)*Y*20*Z/(Math.PI+f*Math.abs(Y))}tl.current.curve=M}}},[o.synthWaveform,o.synthDelay,o.synthFeedback,o.synthReverb,o.synthLFOFreq,o.synthLFOAmount,o.synthCutoff,o.synthResonance,o.synthDrive,o.synthMelodyVol,o.synthChordVol])
const V=q.useRef({crot:0,lrot:0,rrot:0,lx:null,ly:null,totalLength:0,startPoint:null,startFrame:0,debugArms:null}),kl=q.useRef([]),wl=q.useRef(o),Ce=q.useRef(U),Xe=q.useRef(Tt)
q.useEffect(()=>{wl.current=o},[o]),q.useEffect(()=>{Ce.current=U},[U]),q.useEffect(()=>{Xe.current=Tt},[Tt]),q.useEffect(()=>{const y=new URLSearchParams(window.location.search).get("p")
if(y)try{const M=Ad.decompressFromEncodedURIComponent(y)
if(M){const Z=JSON.parse(M),O={...Yf,...Z}
ot(O),Lt(!0),setTimeout(()=>an(O),500)}}catch(M){console.error("Failed to parse shared link",M)}},[]),q.useEffect(()=>{const f=()=>{const y=window.location.hash
if(!y)return
const M=y.substring(1).split(",")
if(M.length<18)return
let Z=0
const O=()=>Number(M[Z++])
O()
const Y=O(),P=O(),k=O()===1,Ze=O(),D=O(),X=O(),ce=O(),Dt=O(),Kt=O(),ie=O(),$=O(),tt=O(),ft=O(),at=O(),qt=O(),Mt=O()
ot(rt=>({...rt,acceleration:Y,penStyle:P,cutpixels:k,brightnessMode:Ze,rotorRPM:D,baseoffsx:X,baseoffsy:ce,handdist:Dt,lrpm:Kt,larm1:ie,larm2:$,rrpm:tt,rarm1:ft,rarm2:at,rarmext:qt,larma:Mt}))}
return f(),window.addEventListener("hashchange",f),()=>window.removeEventListener("hashchange",f)},[])
const Fl=()=>{if(!pl.current)return
const f=L.current
if(!f)return
if(Je.current++,Je.current>it){console.warn("Max frames reached, stopping animation"),ct(!1)
return}kl.current.length>T&&(kl.current=kl.current.slice(-T/2))
const y=f.getContext("2d"),M=wl.current,Z=Ce.current,O=Xe.current,Y=O.width/2,P=O.height/2,k=Math.PI/180,Ze=Math.min(M.acceleration||1,500)
if(M.mode===za.CYMATICS){const D=M.cymaticsParticleCount||1e4
if(d.current.length!==D){const $=Math.min(O.width,O.height)/2
d.current=Array.from({length:D},(tt,ft)=>{let at,qt
if(M.cymaticsCircular){const Mt=Math.random()*Math.PI*2,rt=Math.sqrt(Math.random())*$
at=Y+Math.cos(Mt)*rt,qt=P+Math.sin(Mt)*rt}else at=Math.random()*O.width,qt=Math.random()*O.height
return{x:at,y:qt,vx:0,vy:0,band:ft%7}})}let X=[]
const ce=M.cymaticsSensitivity||1.5
if(M.cymaticsFriction,M.cymaticsSpeed,z.current&&pl.current){const $=new Uint8Array(z.current.frequencyBinCount)
z.current.getByteFrequencyData($),X=[{s:1,e:4,color:"#8b0000",weight:1.2},{s:4,e:10,color:"#ff0000",weight:1.1},{s:10,e:25,color:"#ff8c00",weight:1},{s:25,e:50,color:"#00ff00",weight:.9},{s:50,e:100,color:"#00ffff",weight:.8},{s:100,e:180,color:"#0000ff",weight:.7},{s:180,e:250,color:"#8b00ff",weight:.6}].map((ft,at)=>{let qt=0,Mt=0
for(let De=ft.s
De<ft.e
De++)$[De]>qt&&(qt=$[De],Mt=De)
const rt=qt/255,yt=zn.current[at],Ht=rt>yt?yt+(rt-yt)*.4:yt-(yt-rt)*.15
zn.current[at]=Ht
const _t=Math.max(0,rt-yt),I=Ht*ft.weight*ce,oe=xe.current[at]
if(_t>oe&&_t>.05){if(xe.current[at]=_t,M.cymaticsRippleMode){const De=1+Math.floor(_t*5)
for(let _e=0
_e<De
_e++)xt.current.push({radius:0,speed:(4+_t*30)*(1-_e*.2),alpha:.9*_t*4,color:ft.color,thickness:2+_t*10})}}else xe.current[at]*=.92,xe.current[at]<.08&&(xe.current[at]=.08)
return{n:1+Mt%(5+at*2)+Ht*2,m:1+Math.floor(Mt/4)%(4+at*2)+Ht*2,amp:I,transient:_t,env:Ht,color:ft.color}})}if(!M.cymaticsOilMode&&(M.cymaticsGhostMode||!0)){const $=M.cymaticsOilMode?0:M.cymaticsGhostMode?.04:.15
y.fillStyle=M.theme==="noir"?`rgba(0,0,0,${$})`:`rgba(5,5,8,${$})`,y.fillRect(0,0,O.width,O.height)}if(M.cymaticsCircular){y.save(),y.beginPath()
const $=Math.min(O.width,O.height)*.48
y.arc(Y,P,$,0,Math.PI*2),y.clip()}M.cymaticsSpin!==0&&(ou.current+=M.cymaticsSpin*.01,y.save(),y.translate(Y,P),y.rotate(ou.current),y.translate(-Y,-P))
const Dt=($,tt,ft)=>{const at=X[ft]||{n:M.cymaticsN,m:M.cymaticsM,amp:1}
return at.amp*(Math.cos(at.n*Math.PI*$)*Math.cos(at.m*Math.PI*tt)-Math.cos(at.m*Math.PI*$)*Math.cos(at.n*Math.PI*tt))},Kt=($,tt)=>{let ft=0
return X.length>0?X.forEach((at,qt)=>ft+=Dt($,tt,qt)):ft=Math.cos(M.cymaticsN*Math.PI*$)*Math.cos(M.cymaticsM*Math.PI*tt)-Math.cos(M.cymaticsM*Math.PI*$)*Math.cos(M.cymaticsN*Math.PI*tt),ft},ie=($,tt)=>{const ft=X[$.band]||{env:1},at=tt!==void 0?tt:.4+ft.env*.6
if(M.cymaticsRainbowMode&&X[$.band])return`${X[$.band].color}${Math.floor(Math.min(1,at)*255).toString(16).padStart(2,"0")}`
const qt=$.x/O.width,Mt=$.y/O.height
switch(M.penStyle){case ne.RAINBOW:return`hsla(${(qt+Mt)*360+Je.current}, 70%, 60%, ${at})`
case ne.BLUE:return`rgba(0, ${150+qt*105}, 255, ${.4+at*.6})`
case ne.GOLDEN:return`rgba(255, ${150+Mt*105}, 0, ${.4+at*.6})`
case ne.BW:return`rgba(255, 255, 255, ${.1+at*.9})`
case ne.HOLOGRAPHIC:return`hsla(${(qt-Mt)*360}, 100%, 75%, ${.5*at})`
default:return`rgba(255, 255, 255, ${at})`}}
if(y.shadowBlur=0,M.cymaticsRippleMode&&xt.current.length>0&&(y.save(),xt.current.length>40&&(xt.current=xt.current.slice(-40)),xt.current=xt.current.filter($=>$.alpha>.01),xt.current.forEach($=>{$.radius+=$.speed,$.alpha*=.94,y.beginPath(),y.strokeStyle=$.color,y.globalAlpha=Math.min(1,$.alpha),y.lineWidth=$.thickness*$.alpha,y.arc(Y,P,$.radius,0,Math.PI*2),y.stroke()}),y.restore()),M.cymaticsFieldMode){const tt=Math.ceil(O.height/18),ft=Math.ceil(O.width/18),at=(Math.min(O.width,O.height)*.48)**2
for(let qt=0
qt<=tt
qt++)for(let Mt=0
Mt<=ft
Mt++){const rt=Mt*18,yt=qt*18
if(M.cymaticsCircular){const I=rt-Y,oe=yt-P
if(I*I+oe*oe>at)continue}const $t=rt/O.width-.5,Wt=yt/O.height-.5,Ht=Kt($t,Wt),_t=Math.abs(Ht)
_t>.05&&(y.fillStyle=ie({band:0},Math.min(1,_t*2)),y.beginPath(),y.arc(rt,yt,_t*4,0,6.28),y.fill())}}else{const $=Math.min(O.width,O.height)*.48,tt=$*$,ft=M.cymaticsZoom*.01,at=M.cymaticsOilMode?.98:M.cymaticsFriction||.95,qt=M.cymaticsSpeed||.5
for(let Mt=0
Mt<7
Mt++){const rt=X[Mt]||{env:0,transient:0},yt=M.cymaticsOilMode?.1+rt.transient*2:qt+rt.transient*15,$t=M.cymaticsOilMode?.1:.3+rt.transient*5,Wt=M.cymaticsOilMode?3+rt.env*6:1.5+rt.env*1.5,Ht=M.cymaticsRainbowMode&&X[Mt]
Ht&&(y.fillStyle=ie({band:Mt},void 0)),M.cymaticsOilMode&&(y.globalAlpha=.3),d.current.filter(I=>Mt===I.band).forEach(I=>{const oe=I.x/O.width-.5,Ol=I.y/O.height-.5,De=M.cymaticsRainbowMode?Dt(oe,Ol,Mt):Kt(oe,Ol),_e=.01,cn=(M.cymaticsRainbowMode?Dt(oe+_e,Ol,Mt):Kt(oe+_e,Ol))-De,$l=(M.cymaticsRainbowMode?Dt(oe,Ol+_e,Mt):Kt(oe,Ol+_e))-De
if(I.vx=I.vx*at+(cn>0?-1:1)*Math.abs(De)*yt+(Math.random()-.5)*$t,I.vy=I.vy*at+($l>0?-1:1)*Math.abs(De)*yt+(Math.random()-.5)*$t,I.x+=I.vx,I.y+=I.vy,ft!==0){const Me=I.x-Y,rl=I.y-P
I.x+=Me*ft,I.y+=rl*ft
const bl=Me*Me+rl*rl
if(ft>0&&bl>tt*2.5)I.x=Y+(Math.random()-.5)*40,I.y=P+(Math.random()-.5)*40,I.vx=0,I.vy=0
else if(ft<0&&bl<100){const Rl=Math.random()*6.28
I.x=Y+Math.cos(Rl)*$,I.y=P+Math.sin(Rl)*$,I.vx=0,I.vy=0}}if(M.cymaticsCircular){const Me=I.x-Y,rl=I.y-P,bl=Me*Me+rl*rl
if(bl>tt){const Rl=Math.sqrt(bl),Wl=Me/Rl,Sl=rl/Rl
I.x=Y+Wl*$*.99,I.y=P+Sl*$*.99,I.vx*=-.3,I.vy*=-.3}}else I.x<0?I.x=O.width:I.x>O.width&&(I.x=0),I.y<0?I.y=O.height:I.y>O.height&&(I.y=0)
Ht||(y.fillStyle=ie(I)),M.cymaticsOilMode?(y.beginPath(),y.arc(I.x,I.y,Wt,0,6.28),y.fill()):y.fillRect(I.x,I.y,Wt,Wt)}),y.globalAlpha=1}}if((M.cymaticsSpin!==0||M.cymaticsCircular)&&y.restore(),se.current&&aa.current.length>0){const $=se.current,tt=$.getContext("2d"),ft=$.width,at=$.height,qt=aa.current,Mt=Cl>0&&B.current?Math.max(0,B.current.currentTime-st.current)%Cl/Cl:0
tt.clearRect(0,0,ft,at),tt.fillStyle="rgba(0,0,0,0.5)",tt.fillRect(0,0,ft,at)
const rt=ft/qt.length,yt=Mt*ft
for(let $t=0
$t<qt.length
$t++){const Wt=$t*rt,Ht=qt[$t]*at*.9,_t=(at-Ht)/2
Wt<yt?tt.fillStyle="rgba(0,240,255,0.85)":tt.fillStyle="rgba(255,255,255,0.18)",tt.fillRect(Wt+.5,_t,Math.max(1,rt-1),Ht)}tt.strokeStyle="#ff00ff",tt.lineWidth=2,tt.shadowColor="#ff00ff",tt.shadowBlur=6,tt.beginPath(),tt.moveTo(yt,0),tt.lineTo(yt,at),tt.stroke(),tt.shadowBlur=0}pl.current&&(Ye.current=requestAnimationFrame(Fl))
return}for(let D=0
D<Ze
D++){let X={...M}
if(M.autoEvolve){Ve.current+=1e-4
const nt=Ve.current
X.larm2+=Math.sin(nt*3)*50,X.rarm2+=Math.cos(nt*2)*50,X.handdist+=Math.sin(nt*1.5)*30}const ce=Y+X.baseoffsx,Dt=P+X.baseoffsy,Kt=ce-X.handdist/2,ie=Dt,$=ce+X.handdist/2,tt=Dt,ft=Math.cos((V.current.lrot+X.larma)*k)*X.larm1+Kt,at=Math.sin((V.current.lrot+X.larma)*k)*X.larm1+ie,qt=Math.cos(V.current.rrot*k)*X.rarm1+$,Mt=Math.sin(V.current.rrot*k)*X.rarm1+tt,rt=qt-ft,yt=Mt-at,$t=Math.max(.1,Math.sqrt(rt*rt+yt*yt)),Wt=Math.max(1,X.rarm2),Ht=Math.max(1,X.larm2),_t=2*Wt*Ht,I=(Wt*Wt+Ht*Ht-$t*$t)/_t,oe=Math.acos(Math.max(-1,Math.min(1,I))),Ol=Wt/($t/Math.sin(oe||.001)),De=Math.asin(Math.max(-1,Math.min(1,Ol))),_e=Ht/($t/Math.sin(oe||.001)),cn=Math.asin(Math.max(-1,Math.min(1,_e))),$l=Math.asin(Math.max(-1,Math.min(1,yt/$t)))
let Me
Ht>Wt?Me=Math.PI-(Math.PI-De-oe-$l):Me=Math.PI-(cn-$l)
const rl=qt+Math.cos(Me)*(Wt+X.rarmext),bl=Mt+Math.sin(Me)*(Wt+X.rarmext),Rl=rl-Y,Wl=bl-P,Sl=Math.sqrt(Rl*Rl+Wl*Wl)
let fa=Sl===0?0:Math.asin(Wl/Sl)
Rl<0&&(fa=Math.PI-fa),fa+=V.current.crot*k
let It=Y+Math.cos(fa)*Sl,we=P+Math.sin(fa)*Sl
if(M.mouseInteraction){const nt=Z.x-It,Ut=Z.y-we,Jt=Math.sqrt(nt*nt+Ut*Ut)
if(Jt<300){const Ee=(1-Jt/300)*.5
It+=nt*Ee,we+=Ut*Ee}}D===Ze-1&&M.showArms&&(V.current.debugArms={h1x:Kt,h1y:ie,h2x:$,h2y:tt,h1arm1x:ft,h1arm1y:at,h2arm1x:qt,h2arm1y:Mt,ext_x:rl,ext_y:bl,fx:It,fy:we,na:fa,nd:Sl})
let sn=0
if(V.current.lx!==null){const nt=It-V.current.lx,Ut=we-V.current.ly
sn=2*Math.sqrt(nt*nt+Ut*Ut)}let Dl=1
const Ci=M.brightnessMode<4?M.brightnessMode:1,Su=Math.sqrt(sn/Ci)*1.8
let Ue,pe,Ae,Te
switch(Te=1,M.penStyle){case ne.RAINBOW:{const nt=Math.sin(k*V.current.lrot+Math.PI*.666)*127+127,Ut=Math.sin(k*V.current.lrot+Math.PI*.333)*127+127,Jt=Math.sin(k*V.current.lrot)*127+127,Ee=Math.sin(k*V.current.rrot+Math.PI*.666)*127+127,Un=Math.sin(k*V.current.rrot+Math.PI*.333)*127+127,ra=Math.sin(k*V.current.rrot)*127+127
Ue=Math.floor((nt+Ee)/2),pe=Math.floor((Ut+Un)/2),Ae=Math.floor((Jt+ra)/2),Te=1
break}case ne.BW:{Ue=pe=Ae=255,Te=.3+Math.abs(Math.sin(k*V.current.lrot*2))*.7
break}case ne.KALEIDOSCOPE:{const nt=Math.abs(V.current.lrot+V.current.rrot)%360/360,Ut=Math.sin(nt*Math.PI*2)*127+127,Jt=Math.sin((nt+.33)*Math.PI*2)*127+127,Ee=Math.sin((nt+.66)*Math.PI*2)*127+127
Ue=Math.floor(Ut),pe=Math.floor(Jt),Ae=Math.floor(Ee),Te=.8
break}case ne.BLUE:{const nt=Math.sin(k*V.current.lrot)*50+50
Ue=Math.floor(nt*.2),pe=Math.floor(Math.sin(k*V.current.rrot)*100+155),Ae=255,Te=.7
break}case ne.GOLDEN:{const nt=Math.sin(k*(V.current.lrot+V.current.rrot))*.5+.5
Ue=255,pe=Math.floor(180+nt*75),Ae=Math.floor(nt*50),Te=.8
break}case ne.FRAGMENTED:{const nt=Math.sin(k*V.current.lrot+Math.PI*.666)*127+127,Ut=Math.sin(k*V.current.lrot+Math.PI*.333)*127+127,Jt=Math.sin(k*V.current.lrot)*127+127
Ue=Math.floor(nt),pe=Math.floor(Ut),Ae=Math.floor(Jt),Te=1
break}case ne.HOLOGRAPHIC:{const nt=(V.current.lrot+V.current.rrot)*.5,Ut=Math.sin(k*nt)*100+155,Jt=Math.sin(k*nt+Math.PI*.5)*100+155,Ee=Math.sin(k*nt+Math.PI)*100+200
Ue=Math.floor(Ut),pe=Math.floor(Jt),Ae=Math.floor(Math.min(255,Ee)),Te=.4+Math.abs(Math.sin(k*V.current.lrot))*.6
break}case ne.SILK:{const nt=(V.current.lrot+V.current.rrot)*.5,Ut=Math.sin(k*nt)*100+155,Jt=Math.sin(k*nt+Math.PI*.5)*100+155,Ee=Math.sin(k*nt+Math.PI)*100+200
Ue=Math.floor(Ut),pe=Math.floor(Jt),Ae=Math.floor(Math.min(255,Ee)),Te=.25,Dl=.4
break}case ne.SILK_INVERSE:{const nt=(V.current.lrot+V.current.rrot)*.5,Ut=255-(Math.sin(k*nt)*100+155),Jt=255-(Math.sin(k*nt+Math.PI*.5)*100+155),Ee=255-(Math.sin(k*nt+Math.PI)*100+200)
Ue=Math.floor(Ut+200),pe=Math.floor(Jt+100),Ae=Math.floor(Ee+50),Ue=Math.min(255,Ue),pe=Math.min(255,pe),Ae=Math.min(255,Ae),Te=.25,Dl=.4
break}default:Ue=255,pe=255,Ae=255,Te=1}M.penStyle===ne.RAINBOW&&(Dl=Math.max(1,Math.min(5,15/(Su||1)))/2),Dl*=M.lineWidth
let xu=!0
if(M.penStyle===ne.FRAGMENTED?(xu=Math.sin(V.current.lrot*10)*Math.sin(V.current.rrot*10)>-.2,Zt.current&&B.current&&Zt.current.gain.setTargetAtTime(xu?.3:0,B.current.currentTime,.01)):Zt.current&&B.current&&M.soundEnabled,M.brightnessMode>3&&(Te/=5*(M.brightnessMode-2)),Te=Math.max(0,Math.min(1,Te)),M.soundEnabled&&B.current){B.current.state==="suspended"&&B.current.resume()
const nt=Ue/255,Ut=pe/255,Jt=Ae/255,Ee=Math.max(nt,Ut,Jt),Un=Math.min(nt,Ut,Jt)
let ra=0
if(Ee!==Un){const me=Ee-Un
switch(Ee){case nt:ra=(Ut-Jt)/me+(Ut<Jt?6:0)
break
case Ut:ra=(Jt-nt)/me+2
break
case Jt:ra=(nt-Ut)/me+4
break}ra/=6}const fn=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],vc={C:261.63,"C#":277.18,D:293.66,"D#":311.13,E:329.63,F:349.23,"F#":369.99,G:392,"G#":415.3,A:440,"A#":466.16,B:493.88},Oi=Math.floor(ra*12)%12,gc=((me,oa)=>{const xl=fn.indexOf(oa.name),ol=(me-xl+12)%12,rn=oa.scale.reduce((on,Tu)=>Math.abs(Tu-ol)<Math.abs(on-ol)?Tu:on)
return(xl+rn)%12})(Oi,G),Ri=fn[gc],Au=Math.max(0,Math.min(1,1-Sl/1200)),Di=Au>.6,_i=Au<=.6
let Da=3+Math.floor(Au*2),qn=Ri,bc=0
if(M.synthArpSpeed>0){if(ca.current.tick++,ca.current.tick>=21-M.synthArpSpeed){ca.current.tick=0
const rn=[0,2,4,2,4,6,4,2]
ca.current.index=(ca.current.index+1)%rn.length}const me=[0,2,4,2,4,6,4,2][ca.current.index],oa=G.scale[me%G.scale.length],xl=Math.floor(me/G.scale.length)*12
bc=oa+xl
const ol=(fn.indexOf(G.name)+bc)%12
qn=fn[ol]}if(_i){const me=Math.floor(It/O.width*3),xl=[0,4,7][me],ol=(gc+xl)%12
qn=fn[ol],Da=Math.max(3,Da-1)}const Ui=vc[qn],qi=M.synthTranspose||0,Sc=Ui*Math.pow(2,Da-4+qi/12),Hi=Math.abs(Da-4),Bi=Math.exp(-Math.pow(Hi,2)/2.5)
try{(!wt.current||wt.current.context.state!=="running")&&(console.log("Restarting audio..."),ia())
const me=B.current.currentTime
wt.current.frequency.cancelScheduledValues(me),wt.current.frequency.setValueAtTime(wt.current.frequency.value,me),wt.current.frequency.exponentialRampToValueAtTime(Math.max(20,Sc),me+.01)
const oa=(It-Y)/Y
fe.current.pan.cancelScheduledValues(me),fe.current.pan.setValueAtTime(fe.current.pan.value,me),fe.current.pan.linearRampToValueAtTime(Math.max(-1,Math.min(1,oa)),me+.01)
let xl=.03
if(V.current.lx!==null){const on=Math.sqrt(Math.pow(It-V.current.lx,2)+Math.pow(we-V.current.ly,2))
xl=Math.min(.25,on/50)}const ol=Di?1:.4,rn=xl*Te*(.2+Bi*.8)*ol
Zt.current.gain.cancelScheduledValues(me),Zt.current.gain.setValueAtTime(Zt.current.gain.value,me),Zt.current.gain.linearRampToValueAtTime(Math.max(0,rn),me+.01),D===Ze-1&&(R({name:qn,octave:Da,freq:Math.round(Sc)}),Ot(G))}catch(me){console.error("Audio error:",me),ia()}}if(V.current.lx!==null&&xu){const nt=M.symmetry,Ut=Math.PI*2/nt
for(let Jt=0
Jt<nt
Jt++){const Ee=Jt*Ut
y.save(),y.translate(Y,P),y.rotate(Ee),y.strokeStyle=`rgba(${Ue},${pe},${Ae},${Te})`,y.lineWidth=Dl,y.beginPath(),y.moveTo(V.current.lx-Y,V.current.ly-P),y.lineTo(It-Y,we-P),y.stroke(),M.particlesEnabled&&Math.random()>.9&&Pe.current.push({x:It-Y,y:we-P,vx:(Math.random()-.5)*2,vy:(Math.random()-.5)*2,age:0,maxAge:50+Math.random()*50,color:`rgba(${Ue},${pe},${Ae},0.5)`,angle:Ee}),y.restore(),Jt===0&&kl.current.length<5e4&&kl.current.push({x1:V.current.lx,y1:V.current.ly,x2:It,y2:we,color:`rgba(${Ue},${pe},${Ae},${Te})`,alpha:Te,lw:Dl,sym:nt})}}V.current.lx=It,V.current.ly=we
const Mu=.01666666*6
if(V.current.crot+=X.rotorRPM*Mu,V.current.lrot+=X.lrpm*Mu,V.current.rrot+=X.rrpm*Mu,X.autoStop){if(V.current.startPoint===null)V.current.startPoint={x:It,y:we},V.current.startFrame=Je.current
else if(Je.current>V.current.startFrame+300){const nt=It-V.current.startPoint.x,Ut=we-V.current.startPoint.y
nt*nt+Ut*Ut<16&&(console.log("Geometric cycle complete!"),ct(!1),V.current.startPoint=null)}}V.current.frameCount=(V.current.frameCount||0)+1}if(M.soundEnabled&&B.current){const D=Date.now()/1e3
if(D-Xt.current>=Vt.current){const ce=(Kt=>{const ie=Math.floor(Math.random()*Kt.scale.length),$=Kt.scale[ie],tt=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],at=(tt.indexOf(Kt.name)+$)%12
return tt[at]})(G),Dt=Math.random()>.5?3:4
Et(ce,Dt),Xt.current=D,Vt.current=6+Math.random()*2}}if(Pe.current.length>0&&Pe.current.forEach((D,X)=>{D.age++,D.x+=D.vx,D.y+=D.vy,D.vy+=.01
const ce=1-D.age/D.maxAge
if(ce<=0){Pe.current.splice(X,1)
return}y.save(),y.translate(Y,P),y.rotate(D.angle),y.fillStyle=D.color.replace("0.5",(ce*.5).toString()),y.beginPath(),y.arc(D.x,D.y,1,0,Math.PI*2),y.fill(),y.restore()}),gl.current){const D=gl.current.getContext("2d")
if(D.clearRect(0,0,O.width,O.height),M.showArms&&V.current.debugArms){const X=V.current.debugArms
D.lineWidth=1,D.setLineDash([5,5]),D.strokeStyle="rgba(0, 240, 255, 0.4)",D.beginPath(),D.arc(X.h1x,X.h1y,4,0,Math.PI*2),D.arc(X.h2x,X.h2y,4,0,Math.PI*2),D.stroke(),D.strokeStyle="rgba(255, 255, 255, 0.2)",D.beginPath(),D.moveTo(X.h1x,X.h1y),D.lineTo(X.h1arm1x,X.h1arm1y),D.moveTo(X.h2x,X.h2y),D.lineTo(X.h2arm1x,X.h2arm1y),D.stroke(),D.strokeStyle="rgba(0, 240, 255, 0.3)",D.beginPath(),D.moveTo(X.h1arm1x,X.h1arm1y),D.lineTo(X.ext_x,X.ext_y),D.moveTo(X.h2arm1x,X.h2arm1y),D.lineTo(X.ext_x,X.ext_y),D.stroke(),D.strokeStyle="rgba(255, 0, 255, 0.2)",D.beginPath(),D.moveTo(Y,P),D.lineTo(X.fx,X.fy),D.stroke(),D.setLineDash([])}if(M.showFinishPoint&&V.current.lx!==null){const X=V.current.lx,ce=V.current.ly
D.save(),D.translate(Y,P)
const Dt=M.symmetry,Kt=Math.PI*2/Dt
for(let ie=0
ie<Dt
ie++){D.save(),D.rotate(ie*Kt)
const $=X-Y,tt=ce-P
D.strokeStyle="#fff",D.lineWidth=2,D.setLineDash([]),D.beginPath(),D.moveTo($-10,tt),D.lineTo($+10,tt),D.moveTo($,tt-10),D.lineTo($,tt+10),D.stroke(),D.beginPath(),D.arc($,tt,15,0,Math.PI*2),D.strokeStyle="rgba(255, 255, 255, 0.3)",D.stroke(),D.restore()}D.restore()}if(M.lensEnabled){const Dt=Z.x,Kt=Z.y
D.save(),D.beginPath(),D.arc(Dt,Kt,150/2,0,Math.PI*2),D.clip(),D.drawImage(L.current,Dt-150/2/2,Kt-150/2/2,150/2,150/2,Dt-150/2,Kt-150/2,150,150),D.strokeStyle="rgba(255, 255, 255, 0.5)",D.lineWidth=3,D.beginPath(),D.arc(Dt,Kt,150/2,0,Math.PI*2),D.stroke(),D.fillStyle="rgba(255, 255, 255, 0.05)",D.fill(),D.restore()}}pl.current&&(Ye.current=requestAnimationFrame(Fl))}
q.useEffect(()=>(g?Ye.current=requestAnimationFrame(Fl):cancelAnimationFrame(Ye.current),()=>cancelAnimationFrame(Ye.current)),[g]),q.useEffect(()=>{if(!_.current)return
const f=()=>{if(!_.current)return
const{width:y,height:M}=_.current.getBoundingClientRect(),Z=Math.min(y/2400,M/1800)*.98
b(Z)}
return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]),q.useEffect(()=>{const f=L.current
if(!f)return
f.width=Tt.width,f.height=Tt.height,gl.current&&(gl.current.width=Tt.width,gl.current.height=Tt.height)
const y=f.getContext("2d")
y.fillStyle=o.theme==="noir"?"#000000":"#050508",y.fillRect(0,0,f.width,f.height),V.current.lx=null,V.current.ly=null},[o.theme,Tt])
const pu=f=>{const y=performance.now()
if(y-sl.current<w)return
sl.current=y
const M=f.target.getBoundingClientRect(),Z=(f.clientX-M.left)*(2400/M.width),O=(f.clientY-M.top)*(1800/M.height)
J({x:Z,y:O})}
q.useEffect(()=>{(!o.soundEnabled||!g)&&Zt.current&&B.current&&Zt.current.gain.setTargetAtTime(0,B.current.currentTime,.1)},[o.soundEnabled,g]),q.useEffect(()=>{const f=setInterval(()=>{V.current.lastNote&&R(V.current.lastNote)},100)
return()=>clearInterval(f)},[])
const Dn=()=>{const f=L.current
if(!f)return
const y=f.getContext("2d")
y.fillStyle=o.theme==="noir"?"#000000":"#050508",y.fillRect(0,0,f.width,f.height),V.current={crot:0,lrot:0,rrot:0,lx:null,ly:null,totalLength:0,startPoint:null,startFrame:0,debugArms:null},kl.current=[],Je.current=0,ct(!1)},dc=()=>{if(ct(!1),Ye.current&&(cancelAnimationFrame(Ye.current),Ye.current=null),B.current)try{wt.current&&(wt.current.stop(),wt.current=null),Ne.current&&(Ne.current.stop(),Ne.current=null),B.current.close(),B.current=null}catch(y){console.log("Audio cleanup error:",y)}Zt.current=null,fe.current=null,ve.current=null,ll.current=null,fl.current=null,al.current=null,nl.current=null,re.current=null,tl.current=null,ke.current=null
const f=L.current
if(f){const y=f.getContext("2d")
y.fillStyle="#050508",y.fillRect(0,0,f.width,f.height)}V.current={crot:0,lrot:0,rrot:0,lx:null,ly:null,totalLength:0,startPoint:null,startFrame:0,debugArms:null},kl.current=[],Je.current=0,Ve.current=0,Pe.current=[],ca.current={index:0,tick:0},ot({mode:za.ORIGINAL,acceleration:73,rotorRPM:4,baseoffsx:0,baseoffsy:-385,handdist:351,soundEnabled:!1,lrpm:2,larma:0,larm1:105,larm2:316,rrpm:-3,rarm1:95,rarm2:371,rarmext:53,penStyle:ne.RAINBOW,brightnessMode:la.X1,lineWidth:1,glow:!1,symmetry:1,autoEvolve:!1,particlesEnabled:!1,showArms:!1,mouseInteraction:!1,showFinishPoint:!1,zoom:1,lensEnabled:!1,strobeEnabled:!1,theme:"space",synthWaveform:"sine",synthScale:"chromatic",synthDelay:.3,synthFeedback:.4,synthReverb:.5,synthCutoff:800,synthResonance:1,synthTranspose:0,synthComplexity:1,synthDrive:0,synthLFOFreq:2,synthLFOAmount:0,synthArpSpeed:0,synthArpRange:1,synthMelodyVol:.3,synthChordVol:.5,livedraw:!0,cutpixels:!0}),R({name:"-",octave:0,freq:0}),Ot({name:"C",scale:[0,2,4,5,7,9,11],mode:"major"}),console.log("App fully reset")},an=(f=null)=>{o.soundEnabled&&!B.current&&ia(),mu.current=0,V.current.startPoint=null,V.current.startFrame=0,ln.current=Ei(f||o),ue(0),ct(!0)},nn=()=>{g?ct(!1):o.autoStop&&ln.current!==1/0&&ln.current>0&&Math.abs(mu.current)>=ln.current-.1?an():ct(!0)},bu=()=>{Dn(),an()},Q=(f,y)=>{ot(M=>({...M,[f]:y}))},Ql=f=>{Dn()
const y=(O,Y)=>Math.random()*(Y-O)+O,M=()=>(Math.random()>.5?1:-1)*y(.01,50)
let Z={...o}
f==="A"?Z.symmetry=6:f==="B"&&(Z.symmetry=1),Z.rotorRPM=M()/4,Z.lrpm=M(),Z.rrpm=M(),Z.baseoffsx=y(-200,200),Z.baseoffsy=y(-500,-100),Z.handdist=y(50,500),Z.larm1=y(20,200),Z.rarm1=y(20,200),Z.larm2=y(100,400),Z.rarm2=y(100,400),Z.rarmext=y(0,150),Z.larma=y(0,360),ot(Z)},Oe=f=>{bt(y=>({...y,[f]:!y[f]}))},Oa=f=>{const y={}
return Object.keys(f).forEach(M=>{const Z=f[M],O=Yf[M]
typeof Z=="number"&&typeof O=="number"?Math.abs(Z-O)>1e-4&&(y[M]=Z):Z!==O&&(y[M]=Z)}),y},ge=f=>{const y=Oa(f),M=JSON.stringify(y),Z=Ad.compressToEncodedURIComponent(M)
return`${window.location.origin}${window.location.pathname}?p=${Z}`},[Ra,Vl]=q.useState(""),[Re,ul]=q.useState(!1),cl=q.useRef(!1)
q.useEffect(()=>{if(le){const f=ge(le.params)
if(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"){Vl(f),ul(!1),cl.current=!1
return}ul(!0),cl.current=!0,Vl("")
const y=(Y,P)=>{Y&&Y.parentNode&&document.body.removeChild(Y),window[P]&&delete window[P]},M=()=>{const Y="tinyurl_callback_"+Math.round(1e5*Math.random()),P=document.createElement("script")
window[Y]=k=>{cl.current&&(k&&k.tinyurl?(Vl(k.tinyurl),ul(!1),cl.current=!1):(Vl(f),ul(!1),cl.current=!1)),y(P,Y)},P.src=`https://tinyurl.com/api-create.php?url=${encodeURIComponent(f)}&callback=${Y}`,P.onerror=()=>{cl.current&&(Vl(f),ul(!1),cl.current=!1),y(P,Y)},document.body.appendChild(P)}
(()=>{const Y="isgd_callback_"+Math.round(1e5*Math.random()),P=document.createElement("script")
window[Y]=k=>{cl.current&&(k&&k.shorturl?(Vl(k.shorturl),ul(!1),cl.current=!1):(console.warn("is.gd failed, trying TinyURL..."),M())),y(P,Y)},P.src=`https://is.gd/create.php?callback=${Y}&format=json&url=${encodeURIComponent(f)}`,P.onerror=()=>{console.warn("is.gd error, trying TinyURL..."),M(),y(P,Y)},document.body.appendChild(P)})()
const O=setTimeout(()=>{cl.current&&(console.warn("Shortening timeout, using long URL"),Vl(f),ul(!1),cl.current=!1)},1e4)
return()=>{clearTimeout(O),cl.current=!1}}else Vl(""),ul(!1),cl.current=!1},[le])
const mc=f=>i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"formula-container",children:[i.jsx("span",{className:"math-symbol",children:"Ψ"}),i.jsx("span",{className:"math-op",children:"="}),i.jsx("span",{className:"math-val",children:"Sym"}),i.jsx("span",{className:"math-symbol",children:"("}),i.jsx("span",{className:"math-val",children:"S"}),i.jsx("span",{className:"math-symbol",children:")"}),i.jsx("span",{className:"math-op",children:"·"}),i.jsx("span",{className:"math-symbol",children:"∫"}),i.jsx("span",{className:"math-symbol",children:"("}),i.jsx("span",{className:"math-val",children:"ℒ"}),i.jsx("span",{className:"math-symbol",children:"("}),i.jsx("span",{className:"math-val",children:"ω₁"}),i.jsx("span",{className:"math-symbol",children:")"}),i.jsx("span",{className:"math-op",children:"+"}),i.jsx("span",{className:"math-val",children:"ℛ"}),i.jsx("span",{className:"math-symbol",children:"("}),i.jsx("span",{className:"math-val",children:"ω₂"}),i.jsx("span",{className:"math-symbol",children:")"}),i.jsx("span",{className:"math-symbol",children:")"}),i.jsx("span",{className:"math-symbol",children:"dt"})]}),i.jsxs("div",{className:"formula-data",children:[i.jsxs("div",{className:"data-item",children:[i.jsx("span",{className:"data-label",children:"SYMMETRY (S)"}),i.jsxs("span",{className:"data-value",children:[f.symmetry,"x"]})]}),i.jsxs("div",{className:"data-item",children:[i.jsx("span",{className:"data-label",children:"LEFT RPM (ω₁)"}),i.jsx("span",{className:"data-value",children:f.lrpm.toFixed(3)})]}),i.jsxs("div",{className:"data-item",children:[i.jsx("span",{className:"data-label",children:"RIGHT RPM (ω₂)"}),i.jsx("span",{className:"data-value",children:f.rrpm.toFixed(3)})]}),i.jsxs("div",{className:"data-item",children:[i.jsx("span",{className:"data-label",children:"ZOOM"}),i.jsxs("span",{className:"data-value",children:[f.zoom.toFixed(1),"x"]})]})]})]}),yc=()=>{Lt(!1),dc(),window.history.pushState({},document.title,window.location.pathname)},Ni=()=>{const f=L.current
if(!f)return
const y=document.createElement("canvas")
y.width=160,y.height=120,y.getContext("2d").drawImage(f,0,0,y.width,y.height)
const Z=y.toDataURL("image/jpeg",.7),O={id:Date.now(),params:{...o},thumbnail:Z,date:new Date().toLocaleString()}
Le([O,...ua])},un=f=>{Dn()
const y={...o,...f.params}
ot(y),an(y)},_n=f=>{Le(ua.filter(y=>y.id!==f))},Et=(f,y)=>{if(!B.current||!o.soundEnabled)return
const Z={C:261.63,"C#":277.18,D:293.66,"D#":311.13,E:329.63,F:349.23,"F#":369.99,G:392,"G#":415.3,A:440,"A#":466.16,B:493.88}[f]
if(!Z)return
const O={major:[0,4,7],minor:[0,3,7],sus2:[0,2,7],sus4:[0,5,7],maj7:[0,4,7,11],min7:[0,3,7,10],dom7:[0,4,7,10],add9:[0,4,7,14],min9:[0,3,7,10,14]},Y=rt=>O[{C:"maj7","C#":"dom7",D:"sus2","D#":"min7",E:"min9",F:"major","F#":"sus4",G:"add9","G#":"min7",A:"min7","A#":"dom7",B:"minor"}[rt]||"major"],P=o.synthTranspose||0,k=Z*Math.pow(2,Math.min(y,3)-4+P/12),Ze=o.synthComplexity||1,X=Y(f).map(rt=>rt*Ze).map(rt=>k*Math.pow(2,rt/12)),ce=k*.5,Dt=B.current.currentTime,Kt=.5,ie=1,$=1.5
let tt=null
if(o.synthDrive>0){tt=B.current.createWaveShaper()
const rt=44100,yt=new Float32Array(rt),$t=o.synthDrive,Wt=Math.PI/180
for(let Ht=0
Ht<rt
++Ht){const _t=Ht*2/rt-1
yt[Ht]=(3+$t)*_t*20*Wt/(Math.PI+$t*Math.abs(_t))}tt.curve=yt,tt.oversampling="4x"}const ft=B.current.createBiquadFilter()
ft.type="lowpass"
const at=o.synthCutoff||800,qt=o.synthResonance||1
ft.frequency.setValueAtTime(at,Dt),ft.frequency.exponentialRampToValueAtTime(at*.6,Dt+Kt+ie),ft.Q.value=qt,tt?(ft.connect(tt),tt.connect(B.current.destination),fl.current&&tt.connect(fl.current),ve.current&&tt.connect(ve.current)):(ft.connect(B.current.destination),fl.current&&ft.connect(fl.current),ve.current&&ft.connect(ve.current))
const Mt=(rt,yt,$t=0,Wt="sine",Ht=0)=>{const _t=B.current.createOscillator(),I=B.current.createGain(),oe=B.current.createStereoPanner()
_t.type=Wt,_t.frequency.setValueAtTime(rt,Dt),_t.detune.setValueAtTime($t,Dt),oe.pan.setValueAtTime(Ht,Dt),I.gain.setValueAtTime(0,Dt),I.gain.linearRampToValueAtTime(yt,Dt+Kt),I.gain.setValueAtTime(yt,Dt+Kt+ie),I.gain.exponentialRampToValueAtTime(.001,Dt+Kt+ie+$),_t.connect(I),I.connect(oe),ke.current?(oe.connect(ke.current),ke.current.connect(re.current||B.current.destination)):re.current?oe.connect(re.current):oe.connect(B.current.destination),_t.start(Dt),_t.stop(Dt+Kt+ie+$)}
Mt(ce,.08,0,"triangle",0),X.forEach((rt,yt)=>{const $t=(yt%2===0?-.5:.5)*(yt/X.length),Wt=.15/X.length
Mt(rt,Wt,5,"sine",$t),Mt(rt,Wt,-5,"sine",-$t),yt===0&&Mt(rt*2,.02,10,"sine",.2)})}
return q.useEffect(()=>{if(!o.soundEnabled)return
const f={a:{note:"C",octave:3},s:{note:"D",octave:3},d:{note:"E",octave:3},f:{note:"F",octave:3},g:{note:"G",octave:3},h:{note:"A",octave:3},j:{note:"B",octave:3},k:{note:"C",octave:4},l:{note:"D",octave:4},"
":{note:"E",octave:4},"'":{note:"F",octave:4},w:{note:"C#",octave:3},e:{note:"D#",octave:3},t:{note:"F#",octave:3},y:{note:"G#",octave:3},u:{note:"A#",octave:3},o:{note:"C#",octave:4},p:{note:"D#",octave:4},"[":{note:"F#",octave:4},"]":{note:"G#",octave:4}},y=M=>{if(M.repeat)return
const Z=f[M.key.toLowerCase()]
Z&&(M.preventDefault(),Et(Z.note,Z.octave))}
return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[o.soundEnabled,o.synthWaveform]),i.jsxs("div",{className:`app-container theme-${o.theme}`,children:[mt&&i.jsx("div",{className:"splash-screen",children:i.jsxs("div",{className:"splash-content",children:[i.jsx("div",{className:"splash-logo",children:i.jsx("div",{className:"spiro-loader"})}),i.jsx("h1",{children:"AMUSE"}),i.jsx("p",{children:"Generative Art & Sound Synthesis"}),i.jsx("p",{style:{fontSize:"12px",marginTop:"15px",opacity:.6,letterSpacing:"2px",fontFamily:"'Orbitron', sans-serif"},children:"created by Van Lax"}),i.jsx("div",{className:"loading-bar-container",children:i.jsx("div",{className:"loading-bar-progress"})})]})}),i.jsxs("div",{className:"canvas-container",ref:_,children:[i.jsxs("div",{className:"canvas-wrapper",style:{transform:`scale(${C*o.zoom})`,transition:"transform 0.2s ease-out"},children:[i.jsx("canvas",{ref:L,style:{filter:o.glow?"brightness(1.2) contrast(1.1) drop-shadow(0 0 10px rgba(0, 240, 255, 0.3))":"none"}}),i.jsx("canvas",{ref:gl,className:"debug-canvas",onMouseMove:pu})]}),i.jsxs("div",{className:"stats",children:["Amuse v3.2 | Immersive Art Machine | ",o.soundEnabled?"🔊 SONIC SYNTH ACTIVE":"VISUAL MODE"]}),o.soundEnabled&&i.jsx("div",{className:"piano-container",children:i.jsxs("div",{className:"piano-keyboard",children:[i.jsxs("div",{className:"piano-octave",children:[i.jsx("button",{className:`piano-key white ${E.name==="C"&&E.octave===3?"active":""}`,onMouseDown:()=>Et("C",3),children:i.jsx("span",{children:"C3"})}),i.jsx("button",{className:`piano-key black ${E.name==="C#"&&E.octave===3?"active":""}`,onMouseDown:()=>Et("C#",3)}),i.jsx("button",{className:`piano-key white ${E.name==="D"&&E.octave===3?"active":""}`,onMouseDown:()=>Et("D",3),children:i.jsx("span",{children:"D3"})}),i.jsx("button",{className:`piano-key black ${E.name==="D#"&&E.octave===3?"active":""}`,onMouseDown:()=>Et("D#",3)}),i.jsx("button",{className:`piano-key white ${E.name==="E"&&E.octave===3?"active":""}`,onMouseDown:()=>Et("E",3),children:i.jsx("span",{children:"E3"})}),i.jsx("button",{className:`piano-key white ${E.name==="F"&&E.octave===3?"active":""}`,onMouseDown:()=>Et("F",3),children:i.jsx("span",{children:"F3"})}),i.jsx("button",{className:`piano-key black ${E.name==="F#"&&E.octave===3?"active":""}`,onMouseDown:()=>Et("F#",3)}),i.jsx("button",{className:`piano-key white ${E.name==="G"&&E.octave===3?"active":""}`,onMouseDown:()=>Et("G",3),children:i.jsx("span",{children:"G3"})}),i.jsx("button",{className:`piano-key black ${E.name==="G#"&&E.octave===3?"active":""}`,onMouseDown:()=>Et("G#",3)}),i.jsx("button",{className:`piano-key white ${E.name==="A"&&E.octave===3?"active":""}`,onMouseDown:()=>Et("A",3),children:i.jsx("span",{children:"A3"})}),i.jsx("button",{className:`piano-key black ${E.name==="A#"&&E.octave===3?"active":""}`,onMouseDown:()=>Et("A#",3)}),i.jsx("button",{className:`piano-key white ${E.name==="B"&&E.octave===3?"active":""}`,onMouseDown:()=>Et("B",3),children:i.jsx("span",{children:"B3"})})]}),i.jsxs("div",{className:"piano-octave",children:[i.jsx("button",{className:`piano-key white ${E.name==="C"&&E.octave===4?"active":""}`,onMouseDown:()=>Et("C",4),children:i.jsx("span",{children:"C4"})}),i.jsx("button",{className:`piano-key black ${E.name==="C#"&&E.octave===4?"active":""}`,onMouseDown:()=>Et("C#",4)}),i.jsx("button",{className:`piano-key white ${E.name==="D"&&E.octave===4?"active":""}`,onMouseDown:()=>Et("D",4),children:i.jsx("span",{children:"D4"})}),i.jsx("button",{className:`piano-key black ${E.name==="D#"&&E.octave===4?"active":""}`,onMouseDown:()=>Et("D#",4)}),i.jsx("button",{className:`piano-key white ${E.name==="E"&&E.octave===4?"active":""}`,onMouseDown:()=>Et("E",4),children:i.jsx("span",{children:"E4"})}),i.jsx("button",{className:`piano-key white ${E.name==="F"&&E.octave===4?"active":""}`,onMouseDown:()=>Et("F",4),children:i.jsx("span",{children:"F4"})}),i.jsx("button",{className:`piano-key black ${E.name==="F#"&&E.octave===4?"active":""}`,onMouseDown:()=>Et("F#",4)}),i.jsx("button",{className:`piano-key white ${E.name==="G"&&E.octave===4?"active":""}`,onMouseDown:()=>Et("G",4),children:i.jsx("span",{children:"G4"})}),i.jsx("button",{className:`piano-key black ${E.name==="G#"&&E.octave===4?"active":""}`,onMouseDown:()=>Et("G#",4)}),i.jsx("button",{className:`piano-key white ${E.name==="A"&&E.octave===4?"active":""}`,onMouseDown:()=>Et("A",4),children:i.jsx("span",{children:"A4"})}),i.jsx("button",{className:`piano-key black ${E.name==="A#"&&E.octave===4?"active":""}`,onMouseDown:()=>Et("A#",4)}),i.jsx("button",{className:`piano-key white ${E.name==="B"&&E.octave===4?"active":""}`,onMouseDown:()=>Et("B",4),children:i.jsx("span",{children:"B4"})})]}),i.jsx("div",{className:"piano-octave",children:i.jsx("button",{className:`piano-key white ${E.name==="C"&&E.octave===5?"active":""}`,onMouseDown:()=>Et("C",5),children:i.jsx("span",{children:"C5"})})})]})})]}),!Bt&&i.jsx("button",{className:"mobile-toggle",onClick:()=>On(!Cn),"aria-label":"Toggle Menu",children:Cn?"✕":"⚙️"}),i.jsxs("div",{className:`controls-panel ${Cn?"mobile-open":""}`,style:Bt?{display:"none"}:{},children:[i.jsxs("div",{children:[i.jsx("h1",{children:"Amuse"}),i.jsx("p",{style:{fontSize:"11px",color:"var(--text-secondary)"},children:"Generative Art & Sound Synthesis"}),i.jsx("p",{style:{fontSize:"9px",color:"var(--accent-primary)",marginTop:"5px",opacity:.8,letterSpacing:"1px",textTransform:"uppercase"},children:"Created by Van Lax"})]}),i.jsx("div",{className:`section-title ${et.quickRandom?"collapsed":""}`,onClick:()=>Oe("quickRandom"),children:"Quick Randomizers"}),i.jsx("div",{className:`section-content ${et.quickRandom?"collapsed":""}`,children:i.jsxs("div",{className:"button-group grid-2",style:{marginBottom:"20px"},children:[i.jsx("button",{onClick:()=>Ql("A"),children:"🎲 Rand A (Sym)"}),i.jsx("button",{onClick:()=>Ql("B"),children:"🎲 Rand B (Chaos)"}),i.jsx("button",{onClick:()=>Ql("C"),children:"🎲 Rand C (Flow)"}),i.jsx("button",{onClick:()=>Ql("D"),children:"🎲 Rand D (Deep)"})]})}),i.jsxs("div",{className:"button-group grid-4",style:{marginBottom:"20px"},children:[i.jsx("button",{className:g?"running":"primary",onClick:nn,style:g?{background:"rgba(255, 100, 100, 0.2)",borderColor:"#ff6464",position:"relative"}:{},children:g?i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",lineHeight:"1.2"},children:[i.jsx("span",{children:"⏸ Stop"}),i.jsx("small",{style:{fontSize:"9px",opacity:.7},children:ln.current===1/0?"Endless ∞":`Cycle: ${Math.round(At)}%`})]}):"▶ Run"}),i.jsx("button",{onClick:bu,children:"🔄 Redraw"}),i.jsx("button",{onClick:Dn,children:"🗑 Clear"}),i.jsx("button",{style:{background:"rgba(255, 50, 50, 0.3)",borderColor:"#ff3333",color:"#ff6666"},onClick:dc,title:"Full reset - stops everything and resets all parameters",children:"⚠️ Reset"})]}),i.jsx("div",{className:`section-title ${et.viewExport?"collapsed":""}`,onClick:()=>Oe("viewExport"),children:"View & Export"}),i.jsxs("div",{className:`section-content ${et.viewExport?"collapsed":""}`,children:[i.jsxs("div",{className:"control-group",children:[i.jsx("label",{children:"Zoom"}),i.jsx("input",{type:"range",min:"0.5",max:"4.0",step:"0.1",value:o.zoom,onChange:f=>Q("zoom",parseFloat(f.target.value))})]}),i.jsxs("div",{className:"button-group grid-2",children:[i.jsx("button",{className:o.showArms?"active":"",onClick:()=>Q("showArms",!o.showArms),children:"🦾 Arms"}),i.jsx("button",{className:o.lensEnabled?"active":"",onClick:()=>Q("lensEnabled",!o.lensEnabled),children:"🔍 Lens"})]}),i.jsx("div",{className:"button-group grid-1",style:{marginTop:"10px"},children:i.jsx("button",{className:"primary",onClick:()=>gt({id:"current",params:{...o},thumbnail:L.current?L.current.toDataURL():""}),style:{background:"linear-gradient(135deg, #00f0ff 0%, #0077ff 100%)",color:"black",fontWeight:"bold"},children:"🔗 SHARE UNIVERSE"})})]}),i.jsx("div",{className:`section-title ${et.coreEngine?"collapsed":""}`,onClick:()=>Oe("coreEngine"),children:"Core Engine"}),i.jsxs("div",{className:`section-content ${et.coreEngine?"collapsed":""}`,children:[i.jsxs("div",{className:"control-group",children:[i.jsx("label",{children:"Rendering Mode"}),i.jsxs("select",{value:o.mode,onChange:f=>Q("mode",f.target.value),children:[i.jsx("option",{value:za.ORIGINAL,children:"Linkage (Spirograph)"}),i.jsx("option",{value:za.CYMATICS,children:"Cymatics (Chladni Plate)"})]})]}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Acceleration ",i.jsx("span",{children:o.acceleration})]}),i.jsx("input",{type:"range",min:"1",max:"500",value:o.acceleration,onChange:f=>Q("acceleration",parseInt(f.target.value))})]}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Rotor RPM",i.jsx("input",{type:"number",step:"0.001",value:o.rotorRPM,onChange:f=>Q("rotorRPM",parseFloat(f.target.value)||0)})]}),i.jsx("input",{type:"range",min:"-50",max:"50",step:"0.001",value:o.rotorRPM,onChange:f=>Q("rotorRPM",parseFloat(f.target.value))})]}),i.jsx("div",{className:"control-group",style:{marginTop:"10px"},children:i.jsxs("button",{className:o.autoStop?"active":"",onClick:()=>Q("autoStop",!o.autoStop),style:{width:"100%",fontSize:"11px",padding:"10px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsx("span",{children:o.autoStop?"🏁 Geometric Auto-Stop":"🔄 Endless Rotation"}),i.jsx("span",{style:{opacity:.6},children:o.autoStop?"ON":"OFF"})]})})]}),o.mode===za.CYMATICS&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:`section-title ${et.cymaticsLab?"collapsed":""}`,onClick:()=>Oe("cymaticsLab"),children:"Cymatics Lab 🌊"}),i.jsxs("div",{className:`section-content ${et.cymaticsLab?"collapsed":""}`,children:[i.jsxs("div",{className:"control-group",children:[i.jsx("input",{type:"file",accept:"audio/*",onChange:gu,id:"audio-upload",style:{display:"none"}}),i.jsxs("button",{onClick:()=>document.getElementById("audio-upload").click(),style:{width:"100%",background:"linear-gradient(135deg, #00f0ff 0%, #ff00ff 100%)",color:"#000",fontWeight:"bold",letterSpacing:"0.5px"},children:["🎵 ",Xl?"Change Track":"Upload & Visualize"]})]}),Xl&&i.jsxs("div",{className:"cymatics-player",children:[i.jsxs("div",{className:"cymatics-track-name",children:["♪ ",Xl]}),i.jsx("canvas",{ref:se,className:"cymatics-waveform",width:220,height:60,style:{cursor:"pointer"},onMouseDown:f=>{na.current=!0
const y=f.currentTarget.getBoundingClientRect(),M=(f.clientX-y.left)/y.width
Rn(Math.max(0,Math.min(1,M))*Cl)},onMouseMove:f=>{if(!na.current)return
const y=f.currentTarget.getBoundingClientRect(),M=(f.clientX-y.left)/y.width
Rn(Math.max(0,Math.min(1,M))*Cl)},onMouseUp:()=>{na.current=!1},onMouseLeave:()=>{na.current=!1}}),i.jsx("div",{className:"cymatics-timer",children:(()=>{const f=y=>`${Math.floor(y/60).toString().padStart(2,"0")}:${Math.floor(y%60).toString().padStart(2,"0")}`
return`${f(fc)} / ${f(Cl)}`})()}),i.jsxs("div",{className:"cymatics-controls",children:[i.jsx("button",{className:"cymatics-ctrl-btn",onClick:()=>{ht.current=0,Rn(0)},title:"Restart",children:"⏮"}),i.jsx("button",{className:"cymatics-ctrl-btn cymatics-play-btn",onClick:()=>Na?zi():sa(ht.current),children:Na?"⏸":"▶"}),i.jsx("button",{className:"cymatics-ctrl-btn",onClick:oc,title:"Stop",children:"⏹"})]})]}),i.jsxs("div",{className:"button-group grid-2",style:{marginTop:"12px"},children:[i.jsx("button",{className:o.cymaticsFieldMode?"active":"",onClick:()=>Q("cymaticsFieldMode",!o.cymaticsFieldMode),style:{fontSize:"10px"},children:o.cymaticsFieldMode?"💠 Grid Field":"⏳ Particle Sand"}),i.jsx("button",{className:o.cymaticsRainbowMode?"active":"",onClick:()=>Q("cymaticsRainbowMode",!o.cymaticsRainbowMode),style:{fontSize:"10px"},children:o.cymaticsRainbowMode?"🌈 Spectral":"⚪ Static"}),i.jsx("button",{className:o.cymaticsGhostMode?"active":"",onClick:()=>Q("cymaticsGhostMode",!o.cymaticsGhostMode),style:{fontSize:"10px"},children:o.cymaticsGhostMode?"👻 Ghost ON":"👻 Ghost OFF"}),i.jsx("button",{className:o.cymaticsOilMode?"active":"",onClick:()=>Q("cymaticsOilMode",!o.cymaticsOilMode),style:{fontSize:"10px"},children:o.cymaticsOilMode?"🖼️ Art Freeze ON":"🖼️ Art Freeze OFF"}),i.jsx("button",{className:o.cymaticsCircular?"active":"",onClick:()=>Q("cymaticsCircular",!o.cymaticsCircular),style:{fontSize:"10px"},children:o.cymaticsCircular?"⚪ Circle ON":"⬜ Circle OFF"}),i.jsx("button",{className:o.cymaticsRippleMode?"active":"",onClick:()=>Q("cymaticsRippleMode",!o.cymaticsRippleMode),style:{fontSize:"10px"},children:o.cymaticsRippleMode?"🔘 Ripple Waves ON":"🔘 Ripple Waves OFF"}),i.jsx("button",{onClick:hc,style:{fontSize:"10px",background:"rgba(255,255,255,0.1)"},children:"🎲 Shuffle"}),i.jsx("button",{onClick:vu,style:{fontSize:"10px",background:"rgba(0,255,150,0.2)",color:"#00ffaa",border:"1px solid rgba(0,255,150,0.3)"},children:"💾 Save Art"})]}),i.jsxs("div",{className:"control-group",style:{marginTop:"12px"},children:[i.jsxs("label",{children:["Sensitivity ",i.jsx("span",{children:o.cymaticsSensitivity.toFixed(1)})]}),i.jsx("input",{type:"range",min:"0.1",max:"5.0",step:"0.1",value:o.cymaticsSensitivity,onChange:f=>Q("cymaticsSensitivity",parseFloat(f.target.value))})]}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["N Parameter ",i.jsx("span",{children:o.cymaticsN})]}),i.jsx("input",{type:"range",min:"1",max:"20",step:"1",value:o.cymaticsN,onChange:f=>Q("cymaticsN",parseInt(f.target.value))})]}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["M Parameter ",i.jsx("span",{children:o.cymaticsM})]}),i.jsx("input",{type:"range",min:"1",max:"20",step:"1",value:o.cymaticsM,onChange:f=>Q("cymaticsM",parseInt(f.target.value))})]}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Particle Count ",i.jsx("span",{children:o.cymaticsParticleCount})]}),i.jsx("input",{type:"range",min:"1000",max:"30000",step:"1000",value:o.cymaticsParticleCount,onChange:f=>Q("cymaticsParticleCount",parseInt(f.target.value))})]}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Spin Speed ",i.jsx("span",{children:o.cymaticsSpin.toFixed(2)})]}),i.jsx("input",{type:"range",min:"-2.0",max:"2.0",step:"0.01",value:o.cymaticsSpin,onChange:f=>Q("cymaticsSpin",parseFloat(f.target.value))})]}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Flight Speed (Zoom) ",i.jsx("span",{children:o.cymaticsZoom.toFixed(2)})]}),i.jsx("input",{type:"range",min:"-5.0",max:"5.0",step:"0.05",value:o.cymaticsZoom,onChange:f=>Q("cymaticsZoom",parseFloat(f.target.value))})]})]})]}),i.jsx("div",{className:`section-title ${et.armBase?"collapsed":""}`,onClick:()=>Oe("armBase"),children:"Arm Base"}),i.jsxs("div",{className:`section-content ${et.armBase?"collapsed":""}`,children:[i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Offset X ",i.jsx("span",{children:o.baseoffsx})]}),i.jsx("input",{type:"range",min:"-500",max:"500",value:o.baseoffsx,onChange:f=>Q("baseoffsx",parseInt(f.target.value))})]}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Offset Y ",i.jsx("span",{children:o.baseoffsy})]}),i.jsx("input",{type:"range",min:"-1000",max:"0",value:o.baseoffsy,onChange:f=>Q("baseoffsy",parseInt(f.target.value))})]}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Hand Distance ",i.jsx("span",{children:o.handdist})]}),i.jsx("input",{type:"range",min:"0",max:"1000",value:o.handdist,onChange:f=>Q("handdist",parseInt(f.target.value))})]})]}),i.jsx("div",{className:`section-title ${et.genArtEngine?"collapsed":""}`,onClick:()=>Oe("genArtEngine"),children:"Generative Art Engine"}),i.jsxs("div",{className:`section-content ${et.genArtEngine?"collapsed":""}`,children:[i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Kaleidoscope Symmetry ",i.jsxs("span",{children:[o.symmetry,"x Axis"]})]}),i.jsx("div",{className:"button-group grid-3",style:{marginTop:"8px"},children:[1,2,4,6,8,12].map(f=>i.jsx("button",{className:o.symmetry===f?"active":"",onClick:()=>Q("symmetry",f),children:f===1?"Off":f+"x"},f))})]}),i.jsxs("div",{className:"button-group grid-2",style:{marginTop:"10px"},children:[i.jsx("button",{className:o.autoEvolve?"active":"",onClick:()=>Q("autoEvolve",!o.autoEvolve),children:o.autoEvolve?"🧬 Evolve: On":"🧬 Evolve: Off"}),i.jsx("button",{className:o.glow?"active":"",onClick:()=>Q("glow",!o.glow),children:o.glow?"✨ Glow: On":"✨ Glow: Off"})]})]}),i.jsx("div",{className:`section-title ${et.viewControls?"collapsed":""}`,onClick:()=>Oe("viewControls"),children:"Immersive & View Controls"}),i.jsxs("div",{className:`section-content ${et.viewControls?"collapsed":""}`,children:[i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["View Zoom ",i.jsxs("span",{children:[(o.zoom*100).toFixed(0),"%"]})]}),i.jsx("input",{type:"range",min:"0.5",max:"4.0",step:"0.1",value:o.zoom,onChange:f=>Q("zoom",parseFloat(f.target.value))})]}),i.jsxs("div",{className:"button-group",children:[i.jsx("button",{className:o.showArms?"active":"",onClick:()=>Q("showArms",!o.showArms),children:o.showArms?"🦾 Mechanisms: On":"🦾 Mechanisms: Off"}),i.jsx("button",{className:o.lensEnabled?"active":"",onClick:()=>Q("lensEnabled",!o.lensEnabled),children:o.lensEnabled?"🔍 Lens: Active":"🔍 Enable Lens"})]}),i.jsxs("div",{className:"button-group",style:{marginTop:"10px"},children:[i.jsx("button",{className:o.mouseInteraction?"active":"",onClick:()=>Q("mouseInteraction",!o.mouseInteraction),children:o.mouseInteraction?"🖱️ Distort: On":"🖱️ Distort: Off"}),i.jsx("button",{className:o.showFinishPoint?"active":"",onClick:()=>Q("showFinishPoint",!o.showFinishPoint),children:o.showFinishPoint?"🎯 Finish Point: On":"🎯 Finish Point: Off"})]})]}),i.jsx("div",{className:`section-title ${et.leftMechanism?"collapsed":""}`,onClick:()=>Oe("leftMechanism"),children:"Left Mechanism"}),i.jsxs("div",{className:`section-content ${et.leftMechanism?"collapsed":""}`,children:[i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["RPM",i.jsx("input",{type:"number",step:"0.001",value:o.lrpm,onChange:f=>Q("lrpm",parseFloat(f.target.value)||0)})]}),i.jsx("input",{type:"range",min:"-100",max:"100",step:"0.001",value:o.lrpm,onChange:f=>Q("lrpm",parseFloat(f.target.value))})]}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{children:"Arm Lengths (1 & 2)"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[i.jsx("input",{type:"range",min:"0",max:"500",value:o.larm1,onChange:f=>Q("larm1",parseInt(f.target.value))}),i.jsx("input",{type:"range",min:"0",max:"800",value:o.larm2,onChange:f=>Q("larm2",parseInt(f.target.value))})]})]})]}),i.jsx("div",{className:`section-title ${et.rightMechanism?"collapsed":""}`,onClick:()=>Oe("rightMechanism"),children:"Right Mechanism"}),i.jsxs("div",{className:`section-content ${et.rightMechanism?"collapsed":""}`,children:[i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["RPM",i.jsx("input",{type:"number",step:"0.001",value:o.rrpm,onChange:f=>Q("rrpm",parseFloat(f.target.value)||0)})]}),i.jsx("input",{type:"range",min:"-100",max:"100",step:"0.001",value:o.rrpm,onChange:f=>Q("rrpm",parseFloat(f.target.value))})]}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{children:"Arm Lengths (1 & 2)"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[i.jsx("input",{type:"range",min:"0",max:"500",value:o.rarm1,onChange:f=>Q("rarm1",parseInt(f.target.value))}),i.jsx("input",{type:"range",min:"0",max:"800",value:o.rarm2,onChange:f=>Q("rarm2",parseInt(f.target.value))})]})]}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Extension ",i.jsx("span",{children:o.rarmext})]}),i.jsx("input",{type:"range",min:"-200",max:"400",value:o.rarmext,onChange:f=>Q("rarmext",parseInt(f.target.value))})]})]}),i.jsx("div",{className:`section-title ${et.penStyle?"collapsed":""}`,onClick:()=>Oe("penStyle"),children:"Pen & Style"}),i.jsxs("div",{className:`section-content ${et.penStyle?"collapsed":""}`,children:[i.jsx("div",{className:"control-group",children:i.jsxs("select",{value:o.penStyle,onChange:f=>Q("penStyle",parseInt(f.target.value)),children:[i.jsx("option",{value:ne.RAINBOW,children:"🌈 Rainbow"}),i.jsx("option",{value:ne.BW,children:"🌓 Black & White"}),i.jsx("option",{value:ne.KALEIDOSCOPE,children:"💠 Kaleidoscope"}),i.jsx("option",{value:ne.BLUE,children:"🌊 Deep Blue"}),i.jsx("option",{value:ne.GOLDEN,children:"✨ Golden Gradient"}),i.jsx("option",{value:ne.FRAGMENTED,children:"⚡ Fragmented (Glitch)"}),i.jsx("option",{value:ne.HOLOGRAPHIC,children:"💎 Holographic 3D omni"}),i.jsx("option",{value:ne.SILK,children:"🕸️ Fine Silk (Ultra)"}),i.jsx("option",{value:ne.SILK_INVERSE,children:"✨ Ethereal Silk (Inverse)"})]})}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Line Width ",i.jsx("span",{children:o.lineWidth.toFixed(1)})]}),i.jsx("input",{type:"range",min:"0.1",max:"5.0",step:"0.1",value:o.lineWidth,onChange:f=>Q("lineWidth",parseFloat(f.target.value))})]}),i.jsxs("div",{className:"button-group grid-4",style:{marginTop:"10px"},children:[i.jsx("button",{className:o.brightnessMode===la.DIV10?"active":"",onClick:()=>Q("brightnessMode",la.DIV10),children:"/10"}),i.jsx("button",{className:o.brightnessMode===la.DIV5?"active":"",onClick:()=>Q("brightnessMode",la.DIV5),children:"/5"}),i.jsx("button",{className:o.brightnessMode===la.X1?"active":"",onClick:()=>Q("brightnessMode",la.X1),children:"1x"}),i.jsx("button",{className:o.brightnessMode===la.X2?"active":"",onClick:()=>Q("brightnessMode",la.X2),children:"2x"})]})]}),i.jsx("div",{className:`section-title ${et.spiroSynth?"collapsed":""}`,onClick:()=>Oe("spiroSynth"),children:"Spiro-Synth 2.0"}),i.jsx("div",{className:`section-content ${et.spiroSynth?"collapsed":""}`,children:i.jsxs("div",{className:"control-group",children:[i.jsxs("div",{className:"note-display",children:[i.jsxs("div",{className:"note-label",children:[o.synthScale," Scale"]}),i.jsxs("div",{className:"note-value",children:[E.name,i.jsx("sub",{children:E.octave})]}),i.jsxs("div",{className:"note-freq",children:[E.freq," Hz"]})]}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{children:"Waveform"}),i.jsxs("div",{className:"button-group grid-4",style:{marginTop:"5px"},children:[i.jsx("button",{className:o.synthWaveform==="sine"?"active":"",onClick:()=>Q("synthWaveform","sine"),children:"~"}),i.jsx("button",{className:o.synthWaveform==="triangle"?"active":"",onClick:()=>Q("synthWaveform","triangle"),children:"△"}),i.jsx("button",{className:o.synthWaveform==="sawtooth"?"active":"",onClick:()=>Q("synthWaveform","sawtooth"),children:"N"}),i.jsx("button",{className:o.synthWaveform==="square"?"active":"",onClick:()=>Q("synthWaveform","square"),children:"∏"})]})]}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{children:"Musical Scale"}),i.jsxs("select",{value:o.synthScale,onChange:f=>Q("synthScale",f.target.value),children:[i.jsx("option",{value:"chromatic",children:"Chromatic"}),i.jsx("option",{value:"major",children:"Major"}),i.jsx("option",{value:"minor",children:"Minor"}),i.jsx("option",{value:"pentatonic",children:"Pentatonic"}),i.jsx("option",{value:"blues",children:"Blues"})]})]}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{children:"FX: Delay / Feedback / Reverb"}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"8px"},children:[i.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:o.synthDelay,onChange:f=>Q("synthDelay",parseFloat(f.target.value))}),i.jsx("input",{type:"range",min:"0",max:"0.9",step:"0.05",value:o.synthFeedback,onChange:f=>Q("synthFeedback",parseFloat(f.target.value))}),i.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:o.synthReverb,onChange:f=>Q("synthReverb",parseFloat(f.target.value))})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"8px",fontSize:"9px",textAlign:"center",marginTop:"4px",color:"var(--text-tertiary)"},children:[i.jsx("span",{children:"Delay"}),i.jsx("span",{children:"Feedback"}),i.jsx("span",{children:"Reverb"})]})]})]})}),i.jsx("div",{className:`section-title ${et.sonicEQ?"collapsed":""}`,onClick:()=>Oe("sonicEQ"),children:"Sonic Modeling & EQ"}),i.jsxs("div",{className:`section-content ${et.sonicEQ?"collapsed":""}`,children:[i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Transposition ",i.jsxs("span",{children:[o.synthTranspose>0?"+":"",o.synthTranspose]})]}),i.jsx("input",{type:"range",min:"-12",max:"12",step:"1",value:o.synthTranspose,onChange:f=>Q("synthTranspose",parseInt(f.target.value))})]}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Filter Cutoff (EQ) ",i.jsxs("span",{children:[o.synthCutoff,"Hz"]})]}),i.jsx("input",{type:"range",min:"200",max:"5000",step:"10",value:o.synthCutoff,onChange:f=>Q("synthCutoff",parseInt(f.target.value))})]}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Resonance (Q) ",i.jsx("span",{children:o.synthResonance})]}),i.jsx("input",{type:"range",min:"1",max:"20",step:"0.1",value:o.synthResonance,onChange:f=>Q("synthResonance",parseFloat(f.target.value))})]}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Harmonic Complexity ",i.jsxs("span",{children:[o.synthComplexity.toFixed(2),"x"]})]}),i.jsx("input",{type:"range",min:"0.5",max:"2.5",step:"0.1",value:o.synthComplexity,onChange:f=>Q("synthComplexity",parseFloat(f.target.value))})]}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Drive (Saturation) ",i.jsx("span",{children:o.synthDrive})]}),i.jsx("input",{type:"range",min:"0",max:"100",step:"1",value:o.synthDrive,onChange:f=>Q("synthDrive",parseInt(f.target.value))})]})]}),i.jsx("div",{className:`section-title ${et.genPerf?"collapsed":""}`,onClick:()=>Oe("genPerf"),children:"Generative Performance"}),i.jsxs("div",{className:`section-content ${et.genPerf?"collapsed":""}`,children:[i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Rhythmic Pulse (LFO) ",i.jsxs("span",{children:["Spd: ",o.synthLFOFreq,"Hz | Amt: ",Math.round(o.synthLFOAmount*100),"%"]})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[i.jsx("input",{type:"range",min:"0",max:"10",step:"0.1",value:o.synthLFOFreq,onChange:f=>Q("synthLFOFreq",parseFloat(f.target.value))}),i.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:o.synthLFOAmount,onChange:f=>Q("synthLFOAmount",parseFloat(f.target.value))})]})]}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Micro-Arpeggiator ",i.jsx("span",{children:o.synthArpSpeed===0?"Off":`Speed: ${o.synthArpSpeed}`})]}),i.jsx("input",{type:"range",min:"0",max:"20",step:"1",value:o.synthArpSpeed,onChange:f=>Q("synthArpSpeed",parseInt(f.target.value))})]}),i.jsxs("div",{className:"control-group",children:[i.jsxs("label",{children:["Mix: Melody / Chords ",i.jsxs("span",{children:[Math.round(o.synthMelodyVol*100),"% | ",Math.round(o.synthChordVol*100),"%"]})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"},children:[i.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:o.synthMelodyVol,onChange:f=>Q("synthMelodyVol",parseFloat(f.target.value))}),i.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:o.synthChordVol,onChange:f=>Q("synthChordVol",parseFloat(f.target.value))})]})]}),i.jsxs("div",{className:"button-group grid-2",style:{marginTop:"10px"},children:[i.jsx("button",{className:o.soundEnabled?"active primary":"",onClick:()=>{B.current||ia(),Q("soundEnabled",!o.soundEnabled)},style:{width:"100%"},children:o.soundEnabled?"🔊 Audio ON":"🔈 Enable Audio"}),i.jsx("button",{onClick:yu,style:{width:"100%",background:"rgba(255, 100, 100, 0.1)",borderColor:"rgba(255, 100, 100, 0.3)"},title:"Panic button: fixes audio hang/feedback",children:"♻️ Reset Engine"})]})]}),!Bt&&i.jsx("div",{className:`section-title ${et.gallery?"collapsed":""}`,onClick:()=>Oe("gallery"),children:"Gallery & Presets"}),!Bt&&i.jsxs("div",{className:`section-content ${et.gallery?"collapsed":""}`,children:[i.jsxs("div",{className:"button-group grid-2",style:{marginBottom:"15px"},children:[i.jsx("button",{className:"primary",onClick:Ni,children:"⭐ Save Preset"}),i.jsx("button",{onClick:ji,style:{fontSize:"11px"},children:"🔄 Reload"})]}),i.jsxs("div",{className:"gallery-grid",children:[ua.map(f=>i.jsxs("div",{className:"gallery-item",children:[i.jsx("img",{src:f.thumbnail,alt:"Saved spirograph",onClick:()=>un(f)}),i.jsxs("div",{className:"gallery-item-actions",children:[i.jsx("button",{className:"small-btn",onClick:()=>un(f),children:"▶ Load"}),i.jsx("button",{className:"small-btn",onClick:()=>gt(f),children:"🔗 Share"}),i.jsx("button",{className:"small-btn delete",onClick:()=>_n(f.id),children:"🗑"})]})]},f.id)),ua.length===0&&i.jsx("p",{style:{gridColumn:"span 2",textAlign:"center",fontSize:"11px",color:"var(--text-tertiary)"},children:"Your saved configurations will appear here."})]})]})]}),Bt&&i.jsx("div",{style:{position:"fixed",bottom:"40px",left:"50%",transform:"translateX(-50%)",zIndex:1e3,textAlign:"center",width:"100%"},children:i.jsx("button",{className:"primary",style:{padding:"15px 30px",fontSize:"18px",fontFamily:"'Orbitron', sans-serif",background:"rgba(0,0,0,0.8)",color:"#00f0ff",boxShadow:"0 0 20px rgba(0,240,255,0.4)",border:"1px solid rgba(0,240,255,0.5)",borderRadius:"30px",cursor:"pointer"},onClick:yc,children:"✨ Хочу создать свою вселенную"})}),le&&i.jsx("div",{className:"share-overlay",onClick:()=>gt(null),children:i.jsxs("div",{className:"share-modal",onClick:f=>f.stopPropagation(),children:[i.jsx("button",{className:"modal-close-btn",onClick:()=>gt(null),children:"×"}),i.jsx("h2",{children:"Share Universe"}),i.jsxs("div",{className:"share-content-wrapper",children:[i.jsx("div",{className:"share-preview-wrapper",children:i.jsx("img",{src:le.thumbnail,alt:"Shared Preview",className:"share-preview-img"})}),i.jsxs("div",{className:"share-details-wrapper",children:[mc(le.params),i.jsxs("div",{className:"url-row-container",children:[i.jsx("div",{className:"url-label",children:"Unique Universe Link"}),i.jsxs("div",{className:"url-row",children:[i.jsx("div",{className:"url-text-mask",children:(()=>{const f=ge(le.params),y=f.split("?p=")
return y.length===2?`${y[0]}?p=${y[1].substring(0,8)}...`:f})()}),i.jsx("button",{className:"copy-btn-icon",onClick:()=>{navigator.clipboard.writeText(Ra||ge(le.params)).then(()=>alert("Link copied to clipboard!"))},children:"COPY"})]})]}),i.jsxs("div",{className:"share-grid",children:[i.jsxs("button",{className:"share-btn telegram",disabled:Re,onClick:()=>{window.open(`https://t.me/share/url?url=${encodeURIComponent(Ra)}`,"_blank")},children:[!Re&&i.jsx("span",{children:"✈️"}),Re?"Preparing...":"Telegram"]}),i.jsxs("button",{className:"share-btn vk",disabled:Re,onClick:()=>{window.open(`https://vk.com/share.php?url=${encodeURIComponent(Ra)}&title=${encodeURIComponent("Amuse — Посмотреть шедевр")}`,"_blank")},children:[!Re&&i.jsx("span",{children:"💙"}),Re?"Preparing...":"VK"]}),i.jsxs("button",{className:"share-btn whatsapp",disabled:Re,onClick:()=>{window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent("Amuse — Посмотреть шедевр: "+Ra)}`,"_blank")},children:[!Re&&i.jsx("span",{children:"💬"}),Re?"Preparing...":"WhatsApp"]}),i.jsxs("button",{className:"share-btn wechat",disabled:Re,onClick:()=>{navigator.clipboard.writeText(Ra).then(()=>alert("Link for WeChat copied! Open WeChat and paste to share."))},children:[!Re&&i.jsx("span",{children:"🟢"}),Re?"Preparing...":"WeChat"]})]})]})]})]})})]})}r0.createRoot(document.getElementById("root")).render(i.jsx(q.StrictMode,{children:i.jsx(d0,{})}))

