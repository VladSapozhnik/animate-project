if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let o={};const t=e=>i(e,d),c={module:{uri:d},exports:o,require:t};s[d]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-47f5054b.css",revision:null},{url:"assets/index-fd36561a.js",revision:null},{url:"index.html",revision:"41c46007b8eb90283e5b2313fe660888"},{url:"registerSW.js",revision:"feae375fd8477fd40a8dadbe68c26944"},{url:"assets/images/android-chrome-192x192.png",revision:"abff8ba4c5006910d512672724fb684f"},{url:"assets/images/android-chrome-512x512.png",revision:"683a5c2a104d2cb4b3d367a5dcd358e3"},{url:"assets/images/mstile-150x150.png",revision:"3d3c70689189e625d94dd6307277771a"},{url:"assets/images/favicon-32x32.png",revision:"5b9176e35499e8ce9c53e1aac6d58686"},{url:"assets/images/favicon-16x16.png",revision:"c1f05b03d6724cac72cdcac11d5b5555"},{url:"manifest.webmanifest",revision:"658da3a7f04bfb7029e13b12a887cec3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/backoffice/]}))}));