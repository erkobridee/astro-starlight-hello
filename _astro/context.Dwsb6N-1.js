let st=!1,Bt=!1;function Oe(){st=!0}const Ae=2,Ne="[",ke="]",Fe={},y=Symbol(),pt=!1;var Ut=Array.isArray,Gt=Array.prototype.indexOf,Se=Array.from,Ce=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,Vt=Object.prototype,$t=Array.prototype,Et=Object.getPrototypeOf,dt=Object.isExtensible;function Pe(t){return t()}function Ie(t){for(var e=0;e<t.length;e++)t[e]()}const m=2,xt=4,at=8,mt=16,k=32,j=64,$=128,g=256,z=512,x=1024,R=2048,C=4096,J=8192,tt=16384,zt=32768,Jt=65536,je=1<<17,Wt=1<<19,bt=1<<20,ft=1<<21,H=Symbol("$state"),qe=Symbol("legacy props");function Zt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Xt(t){throw new Error("https://svelte.dev/e/effect_orphan")}function te(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ye(){throw new Error("https://svelte.dev/e/hydration_failed")}function ee(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ne(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function re(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function P(t){if("object"!=typeof t||null===t||H in t)return t;const e=Et(t);if(e!==Vt&&e!==$t)return t;var n=new Map,r=Ut(t),l=O(0),u=c,f=t=>{var e=c;I(u);var n=t();return I(e),n};return r&&n.set("length",O(t.length)),new Proxy(t,{defineProperty(t,e,r){(!("value"in r)||!1===r.configurable||!1===r.enumerable||!1===r.writable)&&ee();var l=n.get(e);return void 0===l?(l=f((()=>O(r.value))),n.set(e,l)):A(l,f((()=>P(r.value)))),!0},deleteProperty(t,e){var u=n.get(e);if(void 0===u)e in t&&n.set(e,f((()=>O(y))));else{if(r&&"string"==typeof e){var o=n.get("length"),i=Number(e);Number.isInteger(i)&&i<o.v&&A(o,i)}A(u,y),ht(l)}return!0},get(e,r,l){if(r===H)return t;var u=n.get(r),o=r in e;if(void 0===u&&(!o||Y(e,r)?.writable)&&(u=f((()=>O(P(o?e[r]:y)))),n.set(r,u)),void 0!==u){var i=G(u);return i===y?void 0:i}return Reflect.get(e,r,l)},getOwnPropertyDescriptor(t,e){var r=Reflect.getOwnPropertyDescriptor(t,e);if(r&&"value"in r){var l=n.get(e);l&&(r.value=G(l))}else if(void 0===r){var u=n.get(e),f=u?.v;if(void 0!==u&&f!==y)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return r},has(t,e){if(e===H)return!0;var r=n.get(e),l=void 0!==r&&r.v!==y||Reflect.has(t,e);if((void 0!==r||null!==p&&(!l||Y(t,e)?.writable))&&(void 0===r&&(r=f((()=>O(l?P(t[e]):y))),n.set(e,r)),G(r)===y))return!1;return l},set(t,e,u,o){var i=n.get(e),a=e in t;if(r&&"length"===e)for(var s=u;s<i.v;s+=1){var c=n.get(s+"");void 0!==c?A(c,y):s in t&&(c=f((()=>O(y))),n.set(s+"",c))}void 0===i?(!a||Y(t,e)?.writable)&&(A(i=f((()=>O(void 0))),f((()=>P(u)))),n.set(e,i)):(a=i.v!==y,A(i,f((()=>P(u)))));var v=Reflect.getOwnPropertyDescriptor(t,e);if(v?.set&&v.set.call(o,u),!a){if(r&&"string"==typeof e){var p=n.get("length"),d=Number(e);Number.isInteger(d)&&d>=p.v&&A(p,d+1)}ht(l)}return!0},ownKeys(t){G(l);var e=Reflect.ownKeys(t).filter((t=>{var e=n.get(t);return void 0===e||e.v!==y}));for(var[r,u]of n)u.v!==y&&!(r in t)&&e.push(r);return e},setPrototypeOf(){ne()}})}function ht(t,e=1){A(t,t.v+e)}var yt,Tt,Dt;function He(){if(void 0===yt){yt=window;var t=Element.prototype,e=Node.prototype,n=Text.prototype;Tt=Y(e,"firstChild").get,Dt=Y(e,"nextSibling").get,dt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),dt(n)&&(n.__t=void 0)}}function Le(t=""){return document.createTextNode(t)}function Me(t){return Tt.call(t)}function le(t){return Dt.call(t)}function Be(t){t.textContent=""}function Rt(t){return t===this.v}function fe(t,e){return t!=t?e==e:t!==e||null!==t&&"object"==typeof t||"function"==typeof t}function ue(t){return!fe(t,this.v)}function ie(t){var e=2|R,n=null!==c&&2&c.f?c:null;return null===p||null!==n&&n.f&g?e|=g:p.f|=bt,{ctx:h,deps:null,effects:null,equals:Rt,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??p}}function Ue(t){const e=ie(t);return e.equals=ue,e}function Ot(t){var e=t.effects;if(null!==e){t.effects=null;for(var n=0;n<e.length;n+=1)S(e[n])}}function se(t){for(var e=t.parent;null!==e;){if(!(2&e.f))return e;e=e.parent}return null}function At(t){var e,n=p;Z(se(t));try{Ot(t),e=Ht(t)}finally{Z(n)}return e}function Nt(t){var e=At(t);T(t,(N||t.f&g)&&null!==t.deps?C:x),t.equals(e)||(t.v=e,t.wv=qt())}function kt(t){null===p&&null===c&&Xt(),null!==c&&!!(c.f&g)&&null===p&&Qt(),B&&Zt()}function ae(t,e){var n=e.last;null===n?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function M(t,e,n,r=!0){var l=p,u={ctx:h,deps:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:e,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(n)try{ot(u),u.f|=zt}catch(t){throw S(u),t}else null!==e&&_t(u);if(!(n&&null===u.deps&&null===u.first&&null===u.nodes_start&&null===u.teardown&&!(u.f&(bt|$)))&&r&&(null!==l&&ae(u,l),null!==c&&2&c.f)){var f=c;(f.effects??=[]).push(u)}return u}function oe(t){const e=M(8,null,!1);return T(e,x),e.teardown=t,e}function Ge(t){if(kt(),!(null!==p&&!!(p.f&k)&&null!==h&&!h.m))return Ft(t);var e=h;(e.e??=[]).push({fn:t,effect:p,reaction:c})}function Ke(t){return kt(),_e(t)}function Ve(t){const e=M(j,t,!0);return(t={})=>new Promise((n=>{t.outro?pe(e,(()=>{S(e),n(void 0)})):(S(e),n(void 0))}))}function Ft(t){return M(4,t,!1)}function _e(t){return M(8,t,!0)}function $e(t,e=!0){return M(40,t,!0,e)}function St(t){var e=t.teardown;if(null!==e){const t=B,n=c;wt(!0),I(null);try{e.call(null)}finally{wt(t),I(n)}}}function Ct(t,e=!1){var n=t.first;for(t.first=t.last=null;null!==n;){var r=n.next;n.f&j?n.parent=null:S(n,e),n=r}}function ce(t){for(var e=t.first;null!==e;){var n=e.next;!(e.f&k)&&S(e),e=n}}function S(t,e=!0){var n=!1;(e||!!(t.f&Wt))&&null!==t.nodes_start&&(ve(t.nodes_start,t.nodes_end),n=!0),Ct(t,e&&!n),X(t,0),T(t,tt);var r=t.transitions;if(null!==r)for(const t of r)t.stop();St(t);var l=t.parent;null!==l&&null!==l.first&&Pt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function ve(t,e){for(;null!==t;){var n=t===e?null:le(t);t.remove(),t=n}}function Pt(t){var e=t.parent,n=t.prev,r=t.next;null!==n&&(n.next=r),null!==r&&(r.prev=n),null!==e&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function pe(t,e){var n=[];It(t,n,!0),de(n,(()=>{S(t),e&&e()}))}function de(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var l of t)l.out(r)}else e()}function It(t,e,n){if(!(t.f&J)){if(t.f^=J,null!==t.transitions)for(const r of t.transitions)(r.is_global||n)&&e.push(r);for(var r=t.first;null!==r;){var l=r.next;It(r,e,!!(!!(r.f&Jt)||!!(r.f&k))&&n),r=l}}}let K=!1,ut=!1,W=null,F=!1,B=!1;function wt(t){B=t}let V=[],c=null,b=!1;function I(t){c=t}let p=null;function Z(t){p=t}let D=null;function he(t){null!==c&&c.f&ft&&(null===D?D=[t]:D.push(t))}let d=null,w=0,E=null;function ye(t){E=t}let jt=1,Q=0,N=!1;function qt(){return++jt}function et(t){var e=t.f;if(e&R)return!0;if(e&C){var n=t.deps,r=!!(e&g);if(null!==n){var l,u,f=!!(e&z),o=r&&null!==p&&!N,i=n.length;if(f||o){var a=t,s=a.parent;for(l=0;l<i;l++)u=n[l],(f||!u?.reactions?.includes(a))&&(u.reactions??=[]).push(a);f&&(a.f^=z),o&&null!==s&&!(s.f&g)&&(a.f^=g)}for(l=0;l<i;l++)if(et(u=n[l])&&Nt(u),u.wv>t.wv)return!0}(!r||null!==p&&!N)&&T(t,x)}return!1}function we(t,e){for(var n=e;null!==n;){if(n.f&$)try{return void n.fn(t)}catch{n.f^=$}n=n.parent}throw K=!1,t}function ge(t){return!(t.f&tt||null!==t.parent&&t.parent.f&$)}function nt(t,e,n,r){if(K){if(null===n&&(K=!1),ge(e))throw t}else null!==n&&(K=!0),we(t,e)}function Yt(t,e,n=!0){var r=t.reactions;if(null!==r)for(var l=0;l<r.length;l++){var u=r[l];D?.includes(t)||(2&u.f?Yt(u,e,!1):e===u&&(n?T(u,R):!!(u.f&x)&&T(u,C),_t(u)))}}function Ht(t){var e=d,n=w,r=E,l=c,u=N,f=D,o=h,i=b,a=t.f;d=null,w=0,E=null,N=!!(a&g)&&(b||!F||null===c),c=96&a?null:t,D=null,gt(t.ctx),b=!1,Q++,t.f|=ft;try{var s=(0,t.fn)(),v=t.deps;if(null!==d){var p;if(X(t,w),null!==v&&w>0)for(v.length=w+d.length,p=0;p<d.length;p++)v[w+p]=d[p];else t.deps=v=d;if(!N)for(p=w;p<v.length;p++)(v[p].reactions??=[]).push(t)}else null!==v&&w<v.length&&(X(t,w),v.length=w);if(rt()&&null!==E&&!b&&null!==v&&!(6146&t.f))for(p=0;p<E.length;p++)Yt(E[p],t);return null!==l&&l!==t&&(Q++,null!==E&&(null===r?r=E:r.push(...E))),s}finally{d=e,w=n,E=r,c=l,N=u,D=f,gt(o),b=i,t.f^=ft}}function Ee(t,e){let n=e.reactions;if(null!==n){var r=Gt.call(n,t);if(-1!==r){var l=n.length-1;0===l?n=e.reactions=null:(n[r]=n[l],n.pop())}}null===n&&2&e.f&&(null===d||!d.includes(e))&&(T(e,C),!(768&e.f)&&(e.f^=z),Ot(e),X(e,0))}function X(t,e){var n=t.deps;if(null!==n)for(var r=e;r<n.length;r++)Ee(t,n[r])}function ot(t){var e=t.f;if(!(e&tt)){T(t,x);var n=p,r=h,l=F;p=t,F=!0;try{16&e?ce(t):Ct(t),St(t);var u=Ht(t);t.teardown="function"==typeof u?u:null,t.wv=jt;t.deps}catch(e){nt(e,t,n,r||t.ctx)}finally{F=l,p=n}}}function xe(){try{te()}catch(t){if(null===W)throw t;nt(t,W,null)}}function me(){var t=F;try{var e=0;for(F=!0;V.length>0;){e++>1e3&&xe();var n=V,r=n.length;V=[];for(var l=0;l<r;l++){be(Te(n[l]))}L.clear()}}finally{ut=!1,F=t,W=null}}function be(t){var e=t.length;if(0!==e)for(var n=0;n<e;n++){var r=t[n];if(!(r.f&(tt|J)))try{et(r)&&(ot(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown?Pt(r):r.fn=null))}catch(t){nt(t,r,null,r.ctx)}}}function _t(t){ut||(ut=!0,queueMicrotask(me));for(var e=W=t;null!==e.parent;){var n=(e=e.parent).f;if(96&n){if(!(n&x))return;e.f^=x}}V.push(e)}function Te(t){for(var e=[],n=t;null!==n;){var r=n.f,l=!!(96&r);if(!(l&&!!(r&x)||r&J)){if(4&r)e.push(n);else if(l)n.f^=x;else{var u=c;try{c=n,et(n)&&ot(n)}catch(t){nt(t,n,null,n.ctx)}finally{c=u}}var f=n.first;if(null!==f){n=f;continue}}var o=n.parent;for(n=n.next;null===n&&null!==o;)n=o.next,o=o.parent}return e}function G(t){var e=!!(2&t.f);if(null===c||b){if(e&&null===t.deps&&null===t.effects){var n=t,r=n.parent;null!==r&&!(r.f&g)&&(n.f^=g)}}else if(!D?.includes(t)){var l=c.deps;t.rv<Q&&(t.rv=Q,null===d&&null!==l&&l[w]===t?w++:null===d?d=[t]:(!N||!d.includes(t))&&d.push(t))}return e&&(et(n=t)&&Nt(n)),B&&L.has(t)?L.get(t):t.v}function ze(t){var e=b;try{return b=!0,t()}finally{b=e}}const De=-7169;function T(t,e){t.f=t.f&De|e}function Je(t){if("object"==typeof t&&t&&!(t instanceof EventTarget))if(H in t)it(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];"object"==typeof n&&n&&H in n&&it(n)}}function it(t,e=new Set){if(!("object"!=typeof t||null===t||t instanceof EventTarget||e.has(t))){e.add(t),t instanceof Date&&t.getTime();for(let n in t)try{it(t[n],e)}catch{}const n=Et(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const e=Kt(n);for(let n in e){const r=e[n].get;if(r)try{r.call(t)}catch{}}}}}const L=new Map;function Lt(t,e){return{f:0,v:t,reactions:null,equals:Rt,rv:0,wv:0}}function O(t,e){const n=Lt(t);return he(n),n}function A(t,e,n=!1){return null!==c&&!b&&rt()&&18&c.f&&!D?.includes(t)&&re(),Re(t,n?P(e):e)}function Re(t,e){if(!t.equals(e)){var n=t.v;B?L.set(t,e):L.set(t,n),t.v=e,!!(2&t.f)&&(!!(t.f&R)&&At(t),T(t,t.f&g?C:x)),t.wv=qt(),Mt(t,R),rt()&&null!==p&&p.f&x&&!(96&p.f)&&(null===E?ye([t]):E.push(t))}return e}function Mt(t,e){var n=t.reactions;if(null!==n)for(var r=rt(),l=n.length,u=0;u<l;u++){var f=n[u],o=f.f;!(o&R)&&(!r&&f===p||(T(f,e),o&(x|g)&&(2&o?Mt(f,C):_t(f))))}}let h=null;function gt(t){h=t}function We(t,e=!1,n){var r=h={p:h,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};st&&!e&&(h.l={s:null,u:null,r1:[],r2:Lt(!1)}),oe((()=>{r.d=!0}))}function Ze(t){const e=h;if(null!==e){const t=e.e;if(null!==t){var n=p,r=c;e.e=null;try{for(var l=0;l<t.length;l++){var u=t[l];Z(u.effect),I(u.reaction),Ft(u.fn)}}finally{Z(n),I(r)}}h=e.p,e.m=!0}return{}}function rt(){return!st||null!==h&&null===h.l}export{ze as A,G as B,Pe as C,Je as D,ie as E,st as F,Y as G,Fe as H,Ue as I,qe as J,je as L,Ae as P,H as S,Z as a,c as b,p as c,Ce as d,He as e,Me as f,le as g,Ne as h,Ut as i,ke as j,Ye as k,Be as l,Se as m,Ve as n,Le as o,$e as p,We as q,h as r,I as s,Ze as t,oe as u,P as v,Oe as w,Ke as x,Ge as y,Ie as z};