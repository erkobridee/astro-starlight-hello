let z=!1,Ot=!1;function sn(){z=!0}const an=1,fn=2,_n="[",cn="]",vn={},pn=Symbol(),tt=!1;var dn=Array.isArray,kt=Array.prototype.indexOf,hn=Array.from,yn=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,Nt=Object.getOwnPropertyDescriptors,wn=Object.prototype,En=Array.prototype,St=Object.getPrototypeOf;function xn(n){return n()}function gn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,ot=4,M=8,st=16,g=32,B=64,G=128,D=256,I=512,d=1024,x=2048,F=4096,P=8192,k=16384,Ft=32768,bt=65536,Tn=1<<17,Ct=1<<19,at=1<<20,rt=Symbol("$state"),mn=Symbol("legacy props");function it(n){return n===this.v}function It(n,t){return n!=n?t==t:n!==t||null!==n&&"object"==typeof n||"function"==typeof n}function Pt(n){return!It(n,this.v)}function qt(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function jt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Yt(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Lt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function An(){throw new Error("https://svelte.dev/e/hydration_failed")}function Rn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Dn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Mt(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Bt(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ht(n,t){return{f:0,v:n,reactions:null,equals:it,rv:0,wv:0}}function On(n,t){return null!==a&&Z()&&18&a.f&&(null===A||!A.includes(n))&&Bt(),Ut(n,t)}function Ut(n,t){return n.equals(t)||(n.v,n.v=t,n.wv=At(),ft(n,x),Z()&&null!==s&&s.f&d&&!(s.f&g)&&(null!==c&&c.includes(n)?(w(s,x),V(s)):null===T?Zt([n]):T.push(n))),t}function ft(n,t){var l=n.reactions;if(null!==l)for(var r=Z(),e=l.length,u=0;u<e;u++){var f=l[u],a=f.f;a&x||!r&&f===s||(w(f,t),a&(d|D)&&(2&a?ft(f,F):V(f)))}}var et,_t,ct;function kn(){if(void 0===et){et=window;var n=Element.prototype,t=Node.prototype;_t=nt(t,"firstChild").get,ct=nt(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function Nn(n=""){return document.createTextNode(n)}function Sn(n){return _t.call(n)}function Vt(n){return ct.call(n)}function Fn(n){n.textContent=""}function Gt(n){var t=2|x;null===s?t|=D:s.f|=at;var l=null!==a&&2&a.f?a:null;const r={children:null,ctx:v,deps:null,equals:it,f:t,fn:n,reactions:null,rv:0,v:null,wv:0,parent:l??s};return null!==l&&(l.children??=[]).push(r),r}function bn(n){const t=Gt(n);return t.equals=Pt,t}function vt(n){var t=n.children;if(null!==t){n.children=null;for(var l=0;l<t.length;l+=1){var r=t[l];2&r.f?J(r):R(r)}}}function Kt(n){for(var t=n.parent;null!==t;){if(!(2&t.f))return t;t=t.parent}return null}function pt(n){var t,l=s;L(Kt(n));try{vt(n),t=Rt(n)}finally{L(l)}return t}function dt(n){var t=pt(n);w(n,(m||n.f&D)&&null!==n.deps?F:d),n.equals(t)||(n.v=t,n.wv=At())}function J(n){vt(n),S(n,0),w(n,k),n.v=n.children=n.deps=n.ctx=n.reactions=null}function ht(n){null===s&&null===a&&Yt(),null!==a&&a.f&D&&jt(),Q&&qt()}function Wt(n,t){var l=t.last;null===l?t.last=t.first=n:(l.next=n,n.prev=l,t.last=n)}function b(n,t,l,r=!0){var e=!!(n&B),u=s,f={ctx:v,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:e?null:u,prev:null,teardown:null,transitions:null,wv:0};if(l){var o=O;try{lt(!0),X(f),f.f|=Ft}catch(n){throw R(f),n}finally{lt(o)}}else null!==t&&V(f);if(!(l&&null===f.deps&&null===f.first&&null===f.nodes_start&&null===f.teardown&&!(f.f&at))&&!e&&r&&(null!==u&&Wt(f,u),null!==a&&2&a.f)){var i=a;(i.children??=[]).push(f)}return f}function Cn(n){const t=b(8,null,!1);return w(t,d),t.teardown=n,t}function In(n){if(ht(),!(null!==s&&!!(s.f&g)&&null!==v&&!v.m))return yt(n);var t=v;(t.e??=[]).push({fn:n,effect:s,reaction:a})}function Pn(n){return ht(),$t(n)}function qn(n){const t=b(B,n,!0);return(n={})=>new Promise((l=>{n.outro?Jt(t,(()=>{R(t),l(void 0)})):(R(t),l(void 0))}))}function yt(n){return b(4,n,!1)}function $t(n){return b(8,n,!0)}function jn(n,t=!0){return b(40,n,!0,t)}function wt(n){var t=n.teardown;if(null!==t){const n=Q,l=a;ut(!0),Y(null);try{t.call(null)}finally{ut(n),Y(l)}}}function Et(n){var t=n.deriveds;if(null!==t){n.deriveds=null;for(var l=0;l<t.length;l+=1)J(t[l])}}function xt(n,t=!1){var l=n.first;for(n.first=n.last=null;null!==l;){var r=l.next;R(l,t),l=r}}function zt(n){for(var t=n.first;null!==t;){var l=t.next;t.f&g||R(t),t=l}}function R(n,t=!0){var l=!1;if((t||n.f&Ct)&&null!==n.nodes_start){for(var r=n.nodes_start,e=n.nodes_end;null!==r;){var u=r===e?null:Vt(r);r.remove(),r=u}l=!0}xt(n,t&&!l),Et(n),S(n,0),w(n,k);var f=n.transitions;if(null!==f)for(const n of f)n.stop();wt(n);var a=n.parent;null!==a&&null!==a.first&&gt(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function gt(n){var t=n.parent,l=n.prev,r=n.next;null!==l&&(l.next=r),null!==r&&(r.prev=l),null!==t&&(t.first===n&&(t.first=r),t.last===n&&(t.last=l))}function Jt(n,t){var l=[];Tt(n,l,!0),Qt(l,(()=>{R(n),t()}))}function Qt(n,t){var l=n.length;if(l>0){var r=()=>--l||t();for(var e of n)e.out(r)}else t()}function Tt(n,t,l){if(!(n.f&P)){if(n.f^=P,null!==n.transitions)for(const r of n.transitions)(r.is_global||l)&&t.push(r);for(var r=n.first;null!==r;){var e=r.next;Tt(r,t,!!(!!(r.f&bt)||!!(r.f&g))&&l),r=e}}}let C=!1,q=!1,j=null,O=!1,Q=!1;function lt(n){O=n}function ut(n){Q=n}let K=[],N=0,a=null;function Y(n){a=n}let s=null;function L(n){s=n}let A=null,c=null,h=0,T=null;function Zt(n){T=n}let mt=1,W=0,m=!1,v=null;function At(){return++mt}function Z(){return!z||null!==v&&null===v.l}function H(n){var t=n.f;if(t&x)return!0;if(t&F){var l=n.deps,r=!!(t&D);if(null!==l){var e,u,f=!!(t&I),a=r&&null!==s&&!m,o=l.length;if(f||a){for(e=0;e<o;e++)u=l[e],(f||!u?.reactions?.includes(n))&&(u.reactions??=[]).push(n);f&&(n.f^=I)}for(e=0;e<o;e++)if(H(u=l[e])&&dt(u),u.wv>n.wv)return!0}(!r||null!==s&&!m)&&w(n,d)}return!1}function Xt(n,t){for(var l=t;null!==l;){if(l.f&G)try{return void l.fn(n)}catch{l.f^=G}l=l.parent}throw C=!1,n}function tn(n){return!(n.f&k||null!==n.parent&&n.parent.f&G)}function U(n,t,l,r){if(C){if(null===l&&(C=!1),tn(t))throw n}else null!==l&&(C=!0),Xt(n,t)}function Rt(n){var t=c,l=h,r=T,e=a,u=m,f=A,o=v,s=n.f;c=null,h=0,T=null,a=96&s?null:n,m=!O&&!!(s&D),A=null,v=n.ctx,W++;try{var i=(0,n.fn)(),d=n.deps;if(null!==c){var p;if(S(n,h),null!==d&&h>0)for(d.length=h+c.length,p=0;p<c.length;p++)d[h+p]=c[p];else n.deps=d=c;if(!m)for(p=h;p<d.length;p++)(d[p].reactions??=[]).push(n)}else null!==d&&h<d.length&&(S(n,h),d.length=h);return i}finally{c=t,h=l,T=r,a=e,m=u,A=f,v=o}}function nn(n,t){let l=t.reactions;if(null!==l){var r=kt.call(l,n);if(-1!==r){var e=l.length-1;0===e?l=t.reactions=null:(l[r]=l[e],l.pop())}}null===l&&2&t.f&&(null===c||!c.includes(t))&&(w(t,F),768&t.f||(t.f^=I),S(t,0))}function S(n,t){var l=n.deps;if(null!==l)for(var r=t;r<l.length;r++)nn(n,l[r])}function X(n){var t=n.f;if(!(t&k)){w(n,d);var l=s,r=v;s=n;try{16&t?zt(n):xt(n),Et(n),wt(n);var e=Rt(n);n.teardown="function"==typeof e?e:null,n.wv=mt;n.deps}catch(t){U(t,n,l,r||n.ctx)}finally{s=l}}}function rn(){if(N>1e3){N=0;try{Lt()}catch(n){if(null===j)throw n;U(n,j,null)}}N++}function en(n){var t=n.length;if(0!==t){rn();var l=O;O=!0;try{for(var r=0;r<t;r++){var e=n[r];e.f&d||(e.f^=d);var u=[];Dt(e,u),ln(u)}}finally{O=l}}}function ln(n){var t=n.length;if(0!==t)for(var l=0;l<t;l++){var r=n[l];if(!(r.f&(k|P)))try{H(r)&&(X(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown?gt(r):r.fn=null))}catch(n){U(n,r,null,r.ctx)}}}function un(){if(q=!1,N>1001)return;const n=K;K=[],en(n),q||(N=0,j=null)}function V(n){q||(q=!0,queueMicrotask(un)),j=n;for(var t=n;null!==t.parent;){var l=(t=t.parent).f;if(96&l){if(!(l&d))return;t.f^=d}}K.push(t)}function Dt(n,t){var l=n.first,r=[];n:for(;null!==l;){var e=l.f,u=!!(e&g),f=u&&!!(e&d),a=l.next;if(!(f||e&P))if(8&e){if(u)l.f^=d;else try{H(l)&&X(l)}catch(n){U(n,l,null,l.ctx)}var o=l.first;if(null!==o){l=o;continue}}else 4&e&&r.push(l);if(null===a){let t=l.parent;for(;null!==t;){if(n===t)break n;var s=t.next;if(null!==s){l=s;continue n}t=t.parent}}l=a}for(var i=0;i<r.length;i++)o=r[i],t.push(o),Dt(o,t)}function Yn(n){var t=n.f,l=!!(2&t);if(l&&t&k){var r=pt(n);return J(n),r}if(null!==a){null!==A&&A.includes(n)&&Mt();var e=a.deps;n.rv<W&&(n.rv=W,null===c&&null!==e&&e[h]===n?h++:null===c?c=[n]:c.push(n),null!==T&&null!==s&&s.f&d&&!(s.f&g)&&T.includes(n)&&(w(s,x),V(s)))}else if(l&&null===n.deps)for(var u=n,f=u.parent,o=u;null!==f;){if(!(2&f.f)){var i=f;i.deriveds?.includes(o)||(i.deriveds??=[]).push(o);break}o=f,f=f.parent}return l&&(H(u=n)&&dt(u)),n.v}function Ln(n){const t=a;try{return a=null,n()}finally{a=t}}const on=-7169;function w(n,t){n.f=n.f&on|t}function Mn(n,t=!1,l){v={p:v,c:null,e:null,m:!1,s:n,x:null,l:null},z&&!t&&(v.l={s:null,u:null,r1:[],r2:Ht(!1)})}function Bn(n){const t=v;if(null!==t){const n=t.e;if(null!==n){var l=s,r=a;t.e=null;try{for(var e=0;e<n.length;e++){var u=n[e];L(u.effect),Y(u.reaction),yt(u.fn)}}finally{L(l),Y(r)}}v=t.p,t.m=!0}return{}}function Hn(n){if("object"==typeof n&&n&&!(n instanceof EventTarget))if(rt in n)$(n);else if(!Array.isArray(n))for(let t in n){const l=n[t];"object"==typeof l&&l&&rt in l&&$(l)}}function $(n,t=new Set){if(!("object"!=typeof n||null===n||n instanceof EventTarget||t.has(n))){t.add(n),n instanceof Date&&n.getTime();for(let l in n)try{$(n[l],t)}catch{}const l=St(n);if(l!==Object.prototype&&l!==Array.prototype&&l!==Map.prototype&&l!==Set.prototype&&l!==Date.prototype){const t=Nt(l);for(let l in t){const r=t[l].get;if(r)try{r.call(n)}catch{}}}}}export{St as A,g as B,dn as C,yn as D,Y as E,a as F,kn as G,vn as H,Sn as I,_n as J,cn as K,Tn as L,An as M,Fn as N,hn as O,fn as P,qn as Q,B as R,rt as S,Nn as T,pn as U,jn as V,Cn as W,In as a,Ln as b,v as c,xn as d,sn as e,Hn as f,Yn as g,Gt as h,nt as i,mn as j,bn as k,z as l,s as m,an as n,Bn as o,Mn as p,Vt as q,gn as r,L as s,wn as t,Pn as u,En as v,Ht as w,Rn as x,On as y,Dn as z};