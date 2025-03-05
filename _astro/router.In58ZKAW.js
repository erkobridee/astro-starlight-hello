const y="data-astro-transition-persist",P=new Set;function O(e){const t=e.src?new URL(e.src,location.href).href:e.textContent;return P.has(t)?!0:(P.add(t),!1)}function q(e){for(const t of e.scripts)!t.hasAttribute("data-astro-rerun")&&O(t)&&(t.dataset.astroExec="")}function B(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function W(e){for(const t of Array.from(document.head.children)){const n=V(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function U(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${y}]`)){const o=n.getAttribute(y),r=e.querySelector(`[${y}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&K(n)&&!z(n,r)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const j=()=>{const e=document.activeElement;if(e?.closest(`[${y}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>E({activeElement:e,start:t,end:n})}return()=>E({activeElement:e})}else return()=>E({activeElement:null})},E=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},V=(e,t)=>{const n=e.getAttribute(y),o=n&&t.head.querySelector(`[${y}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},K=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},z=(e,t)=>e.getAttribute("props")===t.getAttribute("props"),G=e=>{q(e),B(e),W(e);const t=j();U(e.body,document.body),t()},J="astro:before-preparation",Q="astro:after-preparation",Z="astro:before-swap",ee="astro:after-swap",te=e=>document.dispatchEvent(new Event(e));class F extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,i,u,a,l,d,c){super(t,n),this.from=o,this.to=r,this.direction=i,this.navigationType=u,this.sourceElement=a,this.info=l,this.newDocument=d,this.signal=c,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class ne extends F{formData;loader;constructor(t,n,o,r,i,u,a,l,d,c){super(J,{cancelable:!0},t,n,o,r,i,u,a,l),this.formData=d,this.loader=c.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class oe extends F{direction;viewTransition;swap;constructor(t,n){super(Z,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>G(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function re(e,t,n,o,r,i,u,a,l){const d=new ne(e,t,n,o,r,i,window.document,u,a,l);return document.dispatchEvent(d)&&(await d.loader(),d.defaultPrevented||(te(Q),d.navigationType!=="traverse"&&R({scrollX,scrollY}))),d}function se(e,t){const n=new oe(e,t);return document.dispatchEvent(n),n.swap(),n}const ie=history.pushState.bind(history),v=history.replaceState.bind(history),R=e=>{history.state&&(history.scrollRestoration="manual",v({...history.state,...e},""))},X=!!document.startViewTransition,x=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),Y=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let f,p,g;const H=e=>document.dispatchEvent(new Event(e)),M=()=>H("astro:page-load"),ae=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},D="data-astro-transition-persist",I="data-astro-transition",S="data-astro-transition-fallback";let k,T=0;history.state?(T=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):x()&&(v({index:T,scrollX,scrollY},""),history.scrollRestoration="manual");async function ce(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function _(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function le(){let e=Promise.resolve();for(const t of document.getElementsByTagName("script")){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const i=new Promise(u=>{o.onload=o.onerror=u});e=e.then(()=>i)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const C=(e,t,n,o,r)=>{const i=Y(t,e),u=document.title;document.title=o;let a=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const l=history.state;v({...n.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",e.href)}else ie({...n.state,index:++T,scrollX:0,scrollY:0},"",e.href);if(document.title=u,g=e,i||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const l=history.state;location.href=e.href,history.state||(v(l,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function ue(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${D}="${n.getAttribute(D)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(i=>o.addEventListener(i,r)),document.head.append(o)}))}return t}async function L(e,t,n,o,r){async function i(l){function d(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const c=document.getAnimations();document.documentElement.setAttribute(S,l);const w=document.getAnimations().filter(h=>!c.includes(h)&&!d(h));return Promise.allSettled(w.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await i("old")}catch{}const u=document.title,a=se(e,n.viewTransition);C(a.to,a.from,t,u,o),H(ee),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?i("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function de(){return f?.controller.abort(),f={controller:new AbortController}}async function $(e,t,n,o,r){const i=de();if(!x()||location.origin!==n.origin){i===f&&(f=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&R({scrollX,scrollY}),Y(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){C(n,t,o,document.title,r),i===f&&(f=void 0);return}const a=await re(t,n,e,u,o.sourceElement,o.info,i.controller.signal,o.formData,l);if(a.defaultPrevented||a.signal.aborted){i===f&&(f=void 0),a.signal.aborted||(location.href=n.href);return}async function l(s){const w=s.to.href,h={signal:s.signal};if(s.formData){h.method="POST";const b=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:s.sourceElement?.closest("form");h.body=t!==void 0&&Reflect.get(HTMLFormElement.prototype,"attributes",b).getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const m=await ce(w,h);if(m===null){s.preventDefault();return}if(m.redirected){const b=new URL(m.redirected);if(b.origin!==s.to.origin){s.preventDefault();return}s.to=b}if(k??=new DOMParser,s.newDocument=k.parseFromString(m.html,m.mediaType),s.newDocument.querySelectorAll("noscript").forEach(b=>b.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const A=ue(s.newDocument);A.length&&!s.signal.aborted&&await Promise.all(A)}async function d(){if(p&&p.viewTransition){try{p.viewTransition.skipTransition()}catch{}try{await p.viewTransition.updateCallbackDone}catch{}}return p={transitionSkipped:!1}}const c=await d();if(a.signal.aborted){i===f&&(f=void 0);return}if(document.documentElement.setAttribute(I,a.direction),X)c.viewTransition=document.startViewTransition(async()=>await L(a,o,c,r));else{const s=(async()=>{await Promise.resolve(),await L(a,o,c,r,_())})();c.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(w=>c.viewTransitionFinished=w),skipTransition:()=>{c.transitionSkipped=!0,document.documentElement.removeAttribute(S)}}}c.viewTransition?.updateCallbackDone.finally(async()=>{await le(),M(),ae()}),c.viewTransition?.finished.finally(()=>{c.viewTransition=void 0,c===p&&(p=void 0),i===f&&(f=void 0),document.documentElement.removeAttribute(I),document.documentElement.removeAttribute(S)});try{await c.viewTransition?.updateCallbackDone}catch(s){const w=s;console.log("[astro]",w.name,w.message,w.stack)}}async function me(e,t){await $("forward",g,new URL(e,location.href),t??{})}function fe(e){if(!x()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>T?"forward":"back";T=n,$(o,g,new URL(location.href),{},t)}const N=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&R({scrollX,scrollY})};{if(X||_()!=="none")if(g=new URL(location.href),addEventListener("popstate",fe),addEventListener("load",M),"onscrollend"in window)addEventListener("scrollend",N);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,N();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state?.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.getElementsByTagName("script"))O(e)}export{Z as T,J as a,me as n,X as s};
