let J=!1,Dt=!1;function sn(){J=!0}const fn=2,on="[",an="]",_n={},cn=Symbol(),tt=!1,g=2,st=4,Q=8,ft=16,A=32,N=64,P=128,w=256,j=512,h=1024,D=2048,k=4096,q=8192,U=16384,Rt=32768,Ot=65536,vn=1<<17,kt=1<<19,ot=1<<20,nt=Symbol("$state"),pn=Symbol("legacy props");var et,vt,pt,hn=Array.isArray,Nt=Array.prototype.indexOf,dn=Array.from,wn=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,Ft=Object.getOwnPropertyDescriptors,yn=Object.prototype,En=Array.prototype,St=Object.getPrototypeOf;function gn(n){return n()}function xn(n){for(var t=0;t<n.length;t++)n[t]()}function at(n){return n===this.v}function bt(n,t){return n!=n?t==t:n!==t||null!==n&&"object"==typeof n||"function"==typeof n}function Ct(n){return!bt(n,this.v)}function It(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Pt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function jt(n){throw new Error("https://svelte.dev/e/effect_orphan")}function qt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Tn(){throw new Error("https://svelte.dev/e/hydration_failed")}function mn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function An(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Yt(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Ht(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Lt(n,t){return{f:0,v:n,reactions:null,equals:at,rv:0,wv:0}}function Dn(n,t){return null!==f&&!E&&K()&&18&f.f&&(null===R||!R.includes(n))&&Ht(),Bt(n,t)}function Bt(n,t){return n.equals(t)||(n.v,n.v=t,n.wv=dt(),it(n,D),K()&&null!==o&&o.f&h&&!(96&o.f)&&(null===x?Kt([n]):x.push(n))),t}function it(n,t){var l=n.reactions;if(null!==l)for(var r=K(),e=l.length,f=0;f<e;f++){var u=l[f],a=u.f;a&D||!r&&u===o||(T(u,t),a&(h|w)&&(2&a?it(u,k):X(u)))}}function Mt(n){var t=2|D,l=null!==f&&2&f.f?f:null;return null===o||null!==l&&l.f&w?t|=w:o.f|=ot,{ctx:c,deps:null,effects:null,equals:at,f:t,fn:n,reactions:null,rv:0,v:null,wv:0,parent:l??o}}function Rn(n){const t=Mt(n);return t.equals=Ct,t}function _t(n){var t=n.effects;if(null!==t){n.effects=null;for(var l=0;l<t.length;l+=1)O(t[l])}}function Ut(n){for(var t=n.parent;null!==t;){if(!(2&t.f))return t;t=t.parent}return null}function Vt(n){var t,l=o;L(Ut(n));try{_t(n),t=yt(n)}finally{L(l)}return t}function ct(n){var t=Vt(n);T(n,(m||n.f&w)&&null!==n.deps?k:h),n.equals(t)||(n.v=t,n.wv=dt())}function On(){if(void 0===et){et=window;var n=Element.prototype,t=Node.prototype;vt=rt(t,"firstChild").get,pt=rt(t,"nextSibling").get,n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function kn(n=""){return document.createTextNode(n)}function Nn(n){return vt.call(n)}function Gt(n){return pt.call(n)}function Fn(n){n.textContent=""}let b=!1,$=!1,Y=null,C=!1,W=!1;function lt(n){W=n}let I=[],f=null,E=!1;function H(n){f=n}let o=null;function L(n){o=n}let R=null,_=null,p=0,x=null;function Kt(n){x=n}let ht=1,B=0,m=!1;function dt(){return++ht}function V(n){var t=n.f;if(t&D)return!0;if(t&k){var l=n.deps,r=!!(t&w);if(null!==l){var e,f,u=!!(t&j),a=r&&null!==o&&!m,i=l.length;if(u||a){var s=n,c=s.parent;for(e=0;e<i;e++)f=l[e],(u||!f?.reactions?.includes(s))&&(f.reactions??=[]).push(s);u&&(s.f^=j),a&&null!==c&&!(c.f&w)&&(s.f^=w)}for(e=0;e<i;e++)if(V(f=l[e])&&ct(f),f.wv>n.wv)return!0}(!r||null!==o&&!m)&&T(n,h)}return!1}function $t(n,t){for(var l=t;null!==l;){if(l.f&P)try{return void l.fn(n)}catch{l.f^=P}l=l.parent}throw b=!1,n}function zt(n){return!(n.f&U||null!==n.parent&&n.parent.f&P)}function G(n,t,l,r){if(b){if(null===l&&(b=!1),zt(t))throw n}else null!==l&&(b=!0),$t(n,t)}function wt(n,t,l=!0){var r=n.reactions;if(null!==r)for(var e=0;e<r.length;e++){var f=r[e];2&f.f?wt(f,t,!1):t===f&&(l?T(f,D):f.f&h&&T(f,k),X(f))}}function yt(n){var t=_,l=p,r=x,e=f,o=m,u=R,a=c,i=E,s=n.f;_=null,p=0,x=null,m=!!(s&w)&&(E||!C||null===f),f=96&s?null:n,R=null,ut(n.ctx),E=!1,B++;try{var v=(0,n.fn)(),h=n.deps;if(null!==_){var d;if(M(n,p),null!==h&&p>0)for(h.length=p+_.length,d=0;d<_.length;d++)h[p+d]=_[d];else n.deps=h=_;if(!m)for(d=p;d<h.length;d++)(h[d].reactions??=[]).push(n)}else null!==h&&p<h.length&&(M(n,p),h.length=p);if(K()&&null!==x&&!E&&null!==h&&!(6146&n.f))for(d=0;d<x.length;d++)wt(x[d],n);return null!==e&&B++,v}finally{_=t,p=l,x=r,f=e,m=o,R=u,ut(a),E=i}}function Jt(n,t){let l=t.reactions;if(null!==l){var r=Nt.call(l,n);if(-1!==r){var e=l.length-1;0===e?l=t.reactions=null:(l[r]=l[e],l.pop())}}null===l&&2&t.f&&(null===_||!_.includes(t))&&(T(t,k),768&t.f||(t.f^=j),_t(t),M(t,0))}function M(n,t){var l=n.deps;if(null!==l)for(var r=t;r<l.length;r++)Jt(n,l[r])}function Z(n){var t=n.f;if(!(t&U)){T(n,h);var l=o,r=c,e=C;o=n,C=!0;try{16&t?en(n):Tt(n),xt(n);var f=yt(n);n.teardown="function"==typeof f?f:null,n.wv=ht;n.deps}catch(t){G(t,n,l,r||n.ctx)}finally{C=e,o=l}}}function Qt(){try{qt()}catch(n){if(null===Y)throw n;G(n,Y,null)}}function Wt(){try{for(var n=0;I.length>0;){n++>1e3&&Qt();var t=I,l=t.length;I=[];for(var r=0;r<l;r++){var e=t[r];e.f&h||(e.f^=h),Zt(Xt(e))}}}finally{$=!1,Y=null}}function Zt(n){var t=n.length;if(0!==t)for(var l=0;l<t;l++){var r=n[l];if(!(r.f&(U|q)))try{V(r)&&(Z(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown?mt(r):r.fn=null))}catch(n){G(n,r,null,r.ctx)}}}function X(n){$||($=!0,queueMicrotask(Wt));for(var t=Y=n;null!==t.parent;){var l=(t=t.parent).f;if(96&l){if(!(l&h))return;t.f^=h}}I.push(t)}function Xt(n){for(var t=[],l=n.first;null!==l;){var r=l.f,e=!!(r&A);if(!(e&&!!(r&h)||r&q)){if(4&r)t.push(l);else if(e)l.f^=h;else{var o=f;try{f=l,V(l)&&Z(l)}catch(n){G(n,l,null,l.ctx)}finally{f=o}}var u=l.first;if(null!==u){l=u;continue}}var a=l.parent;for(l=l.next;null===l&&null!==a;)l=a.next,a=a.parent}return t}function Sn(n){var t=!!(2&n.f);if(null===f||E){if(t&&null===n.deps&&null===n.effects){var l=n,r=l.parent;null!==r&&!(r.f&w)&&(l.f^=w)}}else{null!==R&&R.includes(n)&&Yt();var e=f.deps;n.rv<B&&(n.rv=B,null===_&&null!==e&&e[p]===n?p++:null===_?_=[n]:(!m||!_.includes(n))&&_.push(n))}return t&&(V(l=n)&&ct(l)),n.v}function bn(n){var t=E;try{return E=!0,n()}finally{E=t}}const tn=-7169;function T(n,t){n.f=n.f&tn|t}function Cn(n){if("object"==typeof n&&n&&!(n instanceof EventTarget))if(nt in n)z(n);else if(!Array.isArray(n))for(let t in n){const l=n[t];"object"==typeof l&&l&&nt in l&&z(l)}}function z(n,t=new Set){if(!("object"!=typeof n||null===n||n instanceof EventTarget||t.has(n))){t.add(n),n instanceof Date&&n.getTime();for(let l in n)try{z(n[l],t)}catch{}const l=St(n);if(l!==Object.prototype&&l!==Array.prototype&&l!==Map.prototype&&l!==Set.prototype&&l!==Date.prototype){const t=Ft(l);for(let l in t){const r=t[l].get;if(r)try{r.call(n)}catch{}}}}}function Et(n){null===o&&null===f&&jt(),null!==f&&f.f&w&&null===o&&Pt(),W&&It()}function nn(n,t){var l=t.last;null===l?t.last=t.first=n:(l.next=n,n.prev=l,t.last=n)}function F(n,t,l,r=!0){var e=!!(n&N),u=o,a={ctx:c,deps:null,nodes_start:null,nodes_end:null,f:n|D,first:null,fn:t,last:null,next:null,parent:e?null:u,prev:null,teardown:null,transitions:null,wv:0};if(l)try{Z(a),a.f|=Rt}catch(n){throw O(a),n}else null!==t&&X(a);if(!(l&&null===a.deps&&null===a.first&&null===a.nodes_start&&null===a.teardown&&!(a.f&(ot|P)))&&!e&&r&&(null!==u&&nn(a,u),null!==f&&2&f.f)){var i=f;(i.effects??=[]).push(a)}return a}function In(n){const t=F(8,null,!1);return T(t,h),t.teardown=n,t}function Pn(n){if(Et(),!(null!==o&&!!(o.f&A)&&null!==c&&!c.m))return gt(n);var t=c;(t.e??=[]).push({fn:n,effect:o,reaction:f})}function jn(n){return Et(),rn(n)}function qn(n){const t=F(N,n,!0);return(n={})=>new Promise((l=>{n.outro?ln(t,(()=>{O(t),l(void 0)})):(O(t),l(void 0))}))}function gt(n){return F(4,n,!1)}function rn(n){return F(8,n,!0)}function Yn(n,t=!0){return F(40,n,!0,t)}function xt(n){var t=n.teardown;if(null!==t){const n=W,l=f;lt(!0),H(null);try{t.call(null)}finally{lt(n),H(l)}}}function Tt(n,t=!1){var l=n.first;for(n.first=n.last=null;null!==l;){var r=l.next;O(l,t),l=r}}function en(n){for(var t=n.first;null!==t;){var l=t.next;t.f&A||O(t),t=l}}function O(n,t=!0){var l=!1;if((t||n.f&kt)&&null!==n.nodes_start){for(var r=n.nodes_start,e=n.nodes_end;null!==r;){var f=r===e?null:Gt(r);r.remove(),r=f}l=!0}Tt(n,t&&!l),M(n,0),T(n,U);var o=n.transitions;if(null!==o)for(const n of o)n.stop();xt(n);var u=n.parent;null!==u&&null!==u.first&&mt(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function mt(n){var t=n.parent,l=n.prev,r=n.next;null!==l&&(l.next=r),null!==r&&(r.prev=l),null!==t&&(t.first===n&&(t.first=r),t.last===n&&(t.last=l))}function ln(n,t){var l=[];At(n,l,!0),un(l,(()=>{O(n),t&&t()}))}function un(n,t){var l=n.length;if(l>0){var r=()=>--l||t();for(var e of n)e.out(r)}else t()}function At(n,t,l){if(!(n.f&q)){if(n.f^=q,null!==n.transitions)for(const r of n.transitions)(r.is_global||l)&&t.push(r);for(var r=n.first;null!==r;){var e=r.next;At(r,t,!!(!!(r.f&Ot)||!!(r.f&A))&&l),r=e}}}let c=null;function ut(n){c=n}function Hn(n,t=!1,l){c={p:c,c:null,e:null,m:!1,s:n,x:null,l:null},J&&!t&&(c.l={s:null,u:null,r1:[],r2:Lt(!1)})}function Ln(n){const t=c;if(null!==t){const n=t.e;if(null!==n){var l=o,r=f;t.e=null;try{for(var e=0;e<n.length;e++){var u=n[e];L(u.effect),H(u.reaction),gt(u.fn)}}finally{L(l),H(r)}}c=t.p,t.m=!0}return{}}function K(){return!J||null!==c&&null===c.l}export{wn as A,H as B,L as C,f as D,On as E,Nn as F,on as G,_n as H,an as I,Tn as J,Fn as K,vn as L,dn as M,qn as N,kn as O,fn as P,Yn as Q,In as R,nt as S,cn as U,Pn as a,bn as b,c,gn as d,sn as e,Cn as f,Sn as g,Mt as h,rt as i,Rn as j,pn as k,J as l,Ln as m,Gt as n,yn as o,Hn as p,En as q,xn as r,Lt as s,An as t,jn as u,Dn as v,o as w,mn as x,St as y,hn as z};