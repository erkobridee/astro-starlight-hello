let Q=!1,Nt=!1;function _n(){Q=!0}const cn=1,vn=2,pn="[",hn="]",dn={},yn=Symbol(),rt=!1,y=2,at=4,G=8,it=16,m=32,I=64,j=128,w=256,Y=512,p=1024,x=2048,N=4096,L=8192,F=16384,St=32768,Ft=65536,wn=1<<17,bt=1<<19,_t=1<<20,et=Symbol("$state"),En=Symbol("legacy props");var gn=Array.isArray,Ct=Array.prototype.indexOf,xn=Array.from,Tn=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,It=Object.getOwnPropertyDescriptors,mn=Object.prototype,An=Array.prototype,Pt=Object.getPrototypeOf;function Rn(n){return n()}function Dn(n){for(var t=0;t<n.length;t++)n[t]()}function ct(n){return n===this.v}function qt(n,t){return n!=n?t==t:n!==t||null!==n&&"object"==typeof n||"function"==typeof n}function jt(n){return!qt(n,this.v)}function Yt(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Lt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Mt(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Bt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function On(){throw new Error("https://svelte.dev/e/hydration_failed")}function kn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Nn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ht(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Ut(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Vt(n,t){return{f:0,v:n,reactions:null,equals:ct,rv:0,wv:0}}function Sn(n,t){return null!==f&&!T&&K()&&18&f.f&&(null===O||!O.includes(n))&&Ut(),Gt(n,t)}function Gt(n,t){return n.equals(t)||(n.v,n.v=t,n.wv=yt(),vt(n,x),K()&&null!==o&&o.f&p&&!(96&o.f)&&(null===g?zt([n]):g.push(n))),t}function vt(n,t){var l=n.reactions;if(null!==l)for(var r=K(),e=l.length,f=0;f<e;f++){var u=l[f],a=u.f;a&x||!r&&u===o||(E(u,t),a&(p|w)&&(2&a?vt(u,N):nt(u)))}}function Kt(n){var t=2|x,l=null!==f&&2&f.f?f:null;return null===o||null!==l&&l.f&w?t|=w:o.f|=_t,{ctx:c,deps:null,effects:null,equals:ct,f:t,fn:n,reactions:null,rv:0,v:null,wv:0,parent:l??o}}function Fn(n){const t=Kt(n);return t.equals=jt,t}function Z(n){var t=n.effects;if(null!==t){n.effects=null;for(var l=0;l<t.length;l+=1)k(t[l])}}function Wt(n){for(var t=n.parent;null!==t;){if(!(2&t.f))return t;t=t.parent}return null}function pt(n){var t,l=o;U(Wt(n));try{Z(n),t=Et(n)}finally{U(l)}return t}function ht(n){var t=pt(n);E(n,(D||n.f&w)&&null!==n.deps?N:p),n.equals(t)||(n.v=t,n.wv=yt())}function $t(n){Z(n),C(n,0),E(n,F),n.v=n.deps=n.ctx=n.reactions=null}let q=!1,M=!1,B=null,S=!1,X=!1;function ut(n){S=n}function st(n){X=n}let z=[],b=0,f=null,T=!1;function H(n){f=n}let o=null;function U(n){o=n}let O=null,v=null,d=0,g=null;function zt(n){g=n}let dt=1,V=0,D=!1;function yt(){return++dt}function K(){return!Q||null!==c&&null===c.l}function W(n){var t=n.f;if(t&x)return!0;if(t&N){var l=n.deps,r=!!(t&w);if(null!==l){var e,f,u=!!(t&Y),a=r&&null!==o&&!D,i=l.length;if(u||a){for(e=0;e<i;e++)f=l[e],(u||!f?.reactions?.includes(n))&&(f.reactions??=[]).push(n);u&&(n.f^=Y)}for(e=0;e<i;e++)if(W(f=l[e])&&ht(f),f.wv>n.wv)return!0}(!r||null!==o&&!D)&&E(n,p)}return!1}function Jt(n,t){for(var l=t;null!==l;){if(l.f&j)try{return void l.fn(n)}catch{l.f^=j}l=l.parent}throw q=!1,n}function Qt(n){return!(n.f&F||null!==n.parent&&n.parent.f&j)}function $(n,t,l,r){if(q){if(null===l&&(q=!1),Qt(t))throw n}else null!==l&&(q=!0),Jt(n,t)}function wt(n,t,l=0){var r=n.reactions;if(null!==r)for(var e=0;e<r.length;e++){var f=r[e];2&f.f?wt(f,t,l+1):t===f&&(0===l?E(f,x):f.f&p&&E(f,N),nt(f))}}function Et(n){var t=v,l=d,r=g,e=f,o=D,u=O,a=c,i=T,s=n.f;v=null,d=0,g=null,f=96&s?null:n,D=!!(s&w)&&(!S||(null===e||i)&&null!==n.parent),O=null,ft(n.ctx),T=!1,V++;try{var p=(0,n.fn)(),h=n.deps;if(null!==v){var y;if(C(n,d),null!==h&&d>0)for(h.length=d+v.length,y=0;y<v.length;y++)h[d+y]=v[y];else n.deps=h=v;if(!D)for(y=d;y<h.length;y++)(h[y].reactions??=[]).push(n)}else null!==h&&d<h.length&&(C(n,d),h.length=d);if(K()&&null!==g&&!(6146&n.f))for(y=0;y<g.length;y++)wt(g[y],n);return null!==e&&V++,p}finally{v=t,d=l,g=r,f=e,D=o,O=u,ft(a),T=i}}function Zt(n,t){let l=t.reactions;if(null!==l){var r=Ct.call(l,n);if(-1!==r){var e=l.length-1;0===e?l=t.reactions=null:(l[r]=l[e],l.pop())}}null===l&&2&t.f&&(null===v||!v.includes(t))&&(E(t,N),768&t.f||(t.f^=Y),Z(t),C(t,0))}function C(n,t){var l=n.deps;if(null!==l)for(var r=t;r<l.length;r++)Zt(n,l[r])}function tt(n){var t=n.f;if(!(t&F)){E(n,p);var l=o,r=c;o=n;try{16&t?on(n):Dt(n),Rt(n);var e=Et(n);n.teardown="function"==typeof e?e:null,n.wv=dt;n.deps}catch(t){$(t,n,l,r||n.ctx)}finally{o=l}}}function Xt(){if(b>1e3){b=0;try{Bt()}catch(n){if(null===B)throw n;$(n,B,null)}}b++}function tn(n){var t=n.length;if(0!==t){Xt();var l=S;S=!0;try{for(var r=0;r<t;r++){var e=n[r];e.f&p||(e.f^=p);var f=[];gt(e,f),nn(f)}}finally{S=l}}}function nn(n){var t=n.length;if(0!==t)for(var l=0;l<t;l++){var r=n[l];if(!(r.f&(F|L)))try{W(r)&&(tt(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown?Ot(r):r.fn=null))}catch(n){$(n,r,null,r.ctx)}}}function rn(){if(M=!1,b>1001)return;const n=z;z=[],tn(n),M||(b=0,B=null)}function nt(n){M||(M=!0,queueMicrotask(rn)),B=n;for(var t=n;null!==t.parent;){var l=(t=t.parent).f;if(96&l){if(!(l&p))return;t.f^=p}}z.push(t)}function gt(n,t){var l=n.first,r=[];n:for(;null!==l;){var e=l.f,f=!!(e&m),o=f&&!!(e&p),u=l.next;if(!(o||e&L))if(8&e){if(f)l.f^=p;else try{W(l)&&tt(l)}catch(n){$(n,l,null,l.ctx)}var a=l.first;if(null!==a){l=a;continue}}else 4&e&&r.push(l);if(null===u){let t=l.parent;for(;null!==t;){if(n===t)break n;var i=t.next;if(null!==i){l=i;continue n}t=t.parent}}l=u}for(var s=0;s<r.length;s++)a=r[s],t.push(a),gt(a,t)}function bn(n){var t=n.f,l=!!(2&t);if(l&&t&F){var r=pt(n);return $t(n),r}if(null===f||T){if(l&&null===n.deps&&null===n.effects){var e=n,o=e.parent;null!==o&&(o.f&w||(e.f^=w))}}else{null!==O&&O.includes(n)&&Ht();var u=f.deps;n.rv<V&&(n.rv=V,null===v&&null!==u&&u[d]===n?d++:null===v?v=[n]:v.push(n))}return l&&(W(e=n)&&ht(e)),n.v}function Cn(n){var t=T;try{return T=!0,n()}finally{T=t}}const en=-7169;function E(n,t){n.f=n.f&en|t}function In(n){if("object"==typeof n&&n&&!(n instanceof EventTarget))if(et in n)J(n);else if(!Array.isArray(n))for(let t in n){const l=n[t];"object"==typeof l&&l&&et in l&&J(l)}}function J(n,t=new Set){if(!("object"!=typeof n||null===n||n instanceof EventTarget||t.has(n))){t.add(n),n instanceof Date&&n.getTime();for(let l in n)try{J(n[l],t)}catch{}const l=Pt(n);if(l!==Object.prototype&&l!==Array.prototype&&l!==Map.prototype&&l!==Set.prototype&&l!==Date.prototype){const t=It(l);for(let l in t){const r=t[l].get;if(r)try{r.call(n)}catch{}}}}}var ot,xt,Tt;function Pn(){if(void 0===ot){ot=window;var n=Element.prototype,t=Node.prototype;xt=lt(t,"firstChild").get,Tt=lt(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function qn(n=""){return document.createTextNode(n)}function jn(n){return xt.call(n)}function ln(n){return Tt.call(n)}function Yn(n){n.textContent=""}function mt(n){null===o&&null===f&&Mt(),null!==f&&f.f&w&&null===o&&Lt(),X&&Yt()}function un(n,t){var l=t.last;null===l?t.last=t.first=n:(l.next=n,n.prev=l,t.last=n)}function P(n,t,l,r=!0){var e=!!(n&I),u=o,a={ctx:c,deps:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:e?null:u,prev:null,teardown:null,transitions:null,wv:0};if(l){var i=S;try{ut(!0),tt(a),a.f|=St}catch(n){throw k(a),n}finally{ut(i)}}else null!==t&&nt(a);if(!(l&&null===a.deps&&null===a.first&&null===a.nodes_start&&null===a.teardown&&!(a.f&(_t|j)))&&!e&&r&&(null!==u&&un(a,u),null!==f&&2&f.f)){var s=f;(s.effects??=[]).push(a)}return a}function Ln(n){const t=P(8,null,!1);return E(t,p),t.teardown=n,t}function Mn(n){if(mt(),!(null!==o&&!!(o.f&m)&&null!==c&&!c.m))return At(n);var t=c;(t.e??=[]).push({fn:n,effect:o,reaction:f})}function Bn(n){return mt(),sn(n)}function Hn(n){const t=P(I,n,!0);return(n={})=>new Promise((l=>{n.outro?fn(t,(()=>{k(t),l(void 0)})):(k(t),l(void 0))}))}function At(n){return P(4,n,!1)}function sn(n){return P(8,n,!0)}function Un(n,t=!0){return P(40,n,!0,t)}function Rt(n){var t=n.teardown;if(null!==t){const n=X,l=f;st(!0),H(null);try{t.call(null)}finally{st(n),H(l)}}}function Dt(n,t=!1){var l=n.first;for(n.first=n.last=null;null!==l;){var r=l.next;k(l,t),l=r}}function on(n){for(var t=n.first;null!==t;){var l=t.next;t.f&m||k(t),t=l}}function k(n,t=!0){var l=!1;if((t||n.f&bt)&&null!==n.nodes_start){for(var r=n.nodes_start,e=n.nodes_end;null!==r;){var f=r===e?null:ln(r);r.remove(),r=f}l=!0}Dt(n,t&&!l),C(n,0),E(n,F);var o=n.transitions;if(null!==o)for(const n of o)n.stop();Rt(n);var u=n.parent;null!==u&&null!==u.first&&Ot(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Ot(n){var t=n.parent,l=n.prev,r=n.next;null!==l&&(l.next=r),null!==r&&(r.prev=l),null!==t&&(t.first===n&&(t.first=r),t.last===n&&(t.last=l))}function fn(n,t){var l=[];kt(n,l,!0),an(l,(()=>{k(n),t()}))}function an(n,t){var l=n.length;if(l>0){var r=()=>--l||t();for(var e of n)e.out(r)}else t()}function kt(n,t,l){if(!(n.f&L)){if(n.f^=L,null!==n.transitions)for(const r of n.transitions)(r.is_global||l)&&t.push(r);for(var r=n.first;null!==r;){var e=r.next;kt(r,t,!!(!!(r.f&Ft)||!!(r.f&m))&&l),r=e}}}let c=null;function ft(n){c=n}function Vn(n,t=!1,l){c={p:c,c:null,e:null,m:!1,s:n,x:null,l:null},Q&&!t&&(c.l={s:null,u:null,r1:[],r2:Vt(!1)})}function Gn(n){const t=c;if(null!==t){const n=t.e;if(null!==n){var l=o,r=f;t.e=null;try{for(var e=0;e<n.length;e++){var u=n[e];U(u.effect),H(u.reaction),At(u.fn)}}finally{U(l),H(r)}}c=t.p,t.m=!0}return{}}export{Pt as A,m as B,gn as C,Tn as D,H as E,f as F,Pn as G,dn as H,jn as I,pn as J,hn as K,wn as L,On as M,Yn as N,xn as O,vn as P,Hn as Q,I as R,et as S,qn as T,yn as U,Un as V,Ln as W,Mn as a,Cn as b,c,Rn as d,_n as e,In as f,bn as g,Kt as h,lt as i,En as j,Fn as k,Q as l,o as m,cn as n,Gn as o,Vn as p,ln as q,Dn as r,U as s,mn as t,Bn as u,An as v,Vt as w,kn as x,Sn as y,Nn as z};