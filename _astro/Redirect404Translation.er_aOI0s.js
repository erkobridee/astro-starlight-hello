import{e as R,u as y,a as v,c as _,b as E,r as g,g as p,d as O,f as I,h as w,l as L,i as B,L as C,B as T,R as A,s as m,P as U,j as $,S as N,k as W,m as F,n as S,o as M,p as k,q as D}from"./runtime.BrVwi4z0.js";const Y="5";function q(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function x(t=!1){const n=_,e=n.l.u;if(!e)return;let o=()=>I(n.s);if(t){let t=0,e={};const s=w((()=>{let o=!1;const s=n.s;for(const t in s)s[t]!==e[t]&&(e[t]=s[t],o=!0);return o&&t++,t}));o=()=>p(s)}e.b.length&&y((()=>{b(n,o),g(e.b)})),v((()=>{const t=E((()=>e.m.map(O)));return()=>{for(const n of t)"function"==typeof n&&n()}})),e.a.length&&v((()=>{b(n,o),g(e.a)}))}function b(t,n){if(t.l.s)for(const n of t.l.s)p(n);n()}function G(t){null===_&&q(),L&&null!==_.l?V(_).m.push(t):v((()=>{const n=E(t);if("function"==typeof n)return n}))}function V(t){var n=t.l;return n.u??={a:[],b:[],m:[]}}typeof window<"u"&&(window.__svelte||={v:new Set}).v.add(Y),R();let u=!1;function j(t){var n=u;try{return u=!1,[t(),u]}finally{u=n}}function H(t){for(var n=S,e=S;null!==n&&!(n.f&(T|A));)n=n.parent;try{return m(n),t()}finally{m(e)}}function J(t,n,e,o){var s=!!(e&M),r=!L||!!(e&U);j((()=>t[n]));B(t,n);var a,i=o,l=!0;if(r)a=()=>{var e=t[n];return void 0===e?(l&&(l=!1,i=o),i):(l=!0,e)};else{var u=H((()=>(s?w:F)((()=>t[n]))));u.f|=C,a=()=>{var t=p(u);return void 0!==t&&(i=void 0),void 0===t?i:t}}return a}const z=(t,n="/astro-starlight-hello")=>{if(t.startsWith("http"))return t;let e=n;const o=t.startsWith("/");if("/"===n)e=o?t:`/${t}`;else{const s=n.endsWith("/");e=`${n}${s||o?"":"/"}${t}`}return e};function Q(t,n){k(n,!1);let e=J(n,"supportedLocales",8);G((()=>{const{lang:t="en"}=document.documentElement,n=window.location.href;let o=t.toLocaleLowerCase();if(e().length>0)for(let t of e())if(n.includes(t)){o=t;break}const s=z(`/${o}/404`);localStorage.setItem("redirect-404",JSON.stringify({prevUrl:n,supportedLocales:e()})),window.location.assign(s)})),x(),D()}export{Q as default};