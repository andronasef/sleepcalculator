if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const f=e=>n(e,t),l={module:{uri:t},exports:o,require:f};i[t]=Promise.all(s.map((e=>l[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.30e3af02.js",revision:null},{url:"assets/index.e4036c80.css",revision:null},{url:"index.html",revision:"8160c4fda39af558b81d04a7f4f47717"},{url:"favicon.svg",revision:"635824e8d11d8e8fb7524693e827b4b4"},{url:"pwa-192x192.png",revision:"3449ee69a966b9a1615af24261b290f8"},{url:"pwa-512x512.png",revision:"5e354afee02e9d5baad0852a2eef773e"},{url:"manifest.webmanifest",revision:"9055937f4bc1cea12953e1f2275a921b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
