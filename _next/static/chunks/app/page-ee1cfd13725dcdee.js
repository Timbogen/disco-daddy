(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2506:function(e,s,n){Promise.resolve().then(n.bind(n,1711))},1711:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return _}});var i=n(7437),t=n(3327),a=n.n(t),l=n(1994),r=n(2265),c=n(9467),o=n(2324),d=n.n(o),h=n(3696),u=n(9449);let g=()=>{let[e,s]=(0,r.useState)(!1),[n,t]=(0,c.Z)({loop:!0},[(0,u.Y)()]),a=(0,r.useRef)(0),o=(0,r.useRef)([]),g=(0,r.useCallback)(e=>{o.current=e.slideNodes().map(e=>e.querySelector(".".concat(d().card)))},[]),m=(0,r.useCallback)(e=>{a.current=.3*e.scrollSnapList().length},[]),p=(0,r.useCallback)((e,n)=>{let i=e.internalEngine(),t=e.scrollProgress(),l=e.slidesInView(),r="scroll"===n;e.scrollSnapList().forEach((e,s)=>{let n=e-t;i.slideRegistry[s].forEach(s=>{if(r&&!l.includes(s))return;i.options.loop&&i.slideLooper.loopPoints.forEach(i=>{let a=i.target();if(s===i.index&&0!==a){let s=Math.sign(a);-1===s&&(n=e-(1+t)),1===s&&(n=e+(1-t))}});let c=1-Math.abs(n*a.current),d=(0,h.uZ)(c,0,1),u=o.current[s];u&&(u.style.transform="scale(".concat(d>.5?d:0,")"))})}),s(!0)},[]);return(0,r.useEffect)(()=>{t&&(g(t),m(t),p(t,""),t.on("reInit",g).on("reInit",m).on("reInit",p).on("scroll",p).on("slideFocus",p))},[t,p,g,m]),(0,i.jsx)("div",{className:d().gallery,style:{opacity:e?1:0},children:(0,i.jsx)("div",{ref:n,children:(0,i.jsx)("div",{className:d().container,children:["cool","llama","sheep","beer","dd"].map((e,s)=>(0,i.jsx)("div",{className:d().slide,children:(0,i.jsx)("div",{className:(0,l.Z)(d().card,"glass","blue"),children:(0,i.jsx)("img",{alt:e,src:"/img/".concat(e,".png")})})},s))})})})};var m=n(3632),p=n(3308),f=n.n(p);let x=()=>{let[e,s]=(0,r.useState)(""),[n,t]=(0,r.useState)(""),a=(0,r.useMemo)(()=>!e.trim()||!n.trim(),[e,n]),c=()=>{a||(window.location.href="mailto:contact@discodaddy.de?subject=".concat(e,"&body=").concat(n))};return(0,i.jsxs)("div",{className:(0,l.Z)("glass",f().contactForm),children:[(0,i.jsx)("h4",{children:"Betreff"}),(0,i.jsx)("input",{placeholder:"Hallo DiscoDaddy",onChange:e=>s(e.target.value)}),(0,i.jsx)("h4",{children:"Nachricht"}),(0,i.jsx)("textarea",{placeholder:"Ich wollte dir schon immer sagen...",onChange:e=>t(e.target.value),onKeyDown:e=>"Enter"===e.key?c():void 0}),(0,i.jsx)("button",{disabled:a,onClick:c,children:"E-Mail vorbereiten"})]})},v=(0,n(166).default)(()=>Promise.all([n.e(574),n.e(218)]).then(n.bind(n,9218)),{loadableGenerated:{webpack:()=>[9218]},ssr:!1});function _(){let{progress:e}=(0,m.S)(),[s,n]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{e>=100&&n(!0)},[e]),(0,i.jsxs)("main",{className:(0,l.Z)("page",s?"":a().initialPage),children:[(0,i.jsxs)("section",{className:a().intro,children:[(0,i.jsx)("h1",{children:"Disco Daddy".split("").map((e,s)=>(0,i.jsx)("span",{style:{animationDelay:"".concat(.5+.1*s,"s")},children:e},s))}),(0,i.jsx)("h2",{children:"Der DJ f\xfcr echte Musik"}),(0,i.jsx)(v,{})]}),(0,i.jsxs)("section",{id:"about",className:a().about,children:[(0,i.jsx)("h2",{children:"Daddy?"}),(0,i.jsx)("h2",{children:"Who the fuck is Daddy?"}),(0,i.jsxs)("div",{className:a().grid,children:[(0,i.jsxs)("div",{className:(0,l.Z)("glass",a().description),children:[(0,i.jsx)("h3",{children:"„Darfsch mi au Georg nenna“"}),(0,i.jsxs)("div",{className:a().info,children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#e8eaed",children:(0,i.jsx)("path",{d:"M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"})}),"Georg Schmid, 60, stolzer Vater (\uD83D\uDC67\uD83C\uDFFD\uD83D\uDC66\uD83C\uDFFC)"]}),(0,i.jsxs)("div",{className:a().info,children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#e8eaed",children:(0,i.jsx)("path",{d:"M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"})}),(0,i.jsxs)("div",{children:["Schon in den 80er Jahren verfiel Georg den Kl\xe4ngen von Soul- und Disco-Musik. Gepr\xe4gt von den damals noch als Besatzer stationierten Amerikanern, wurden zahlreiche Kassetten mit Hits sowie Underground-Musik jener Zeit aufgenommen. Die Amerikaner sollten sp\xe4ter ebenso enge Freunde werden wie die geliebte Disco-Musik. W\xe4hrend ihm damals von Gleichaltrigen noch abf\xe4llig gesagt wurde, er solle sich mit seiner seltsamen Musik verziehen, ist heute klar, dass Georg den Klassikern der heutigen Zeit auf der Spur war! An die Plattenteller wagte er sich allerdings erst, als er gemeinsam mit seinem Sohn (",(0,i.jsx)("a",{href:"http://mattleymusic.de",target:"_blank",children:"MattleyMusic"}),") f\xfcr die Eisdisco im Donaubad an den Start ging. Heute ist DiscoDaddy vor allem dann gefragt, wenn es um drei Dinge geht: gute Musik, echte Musik, Disco-Musik!"]})]})]}),(0,i.jsxs)("div",{className:(0,l.Z)("glass",a().third),children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{d:"M9.473 6.57c-1.272.596-2.299 1.623-2.895 2.895l-1.041-.13c.709-1.721 2.084-3.097 3.807-3.807l.129 1.042zm-.26-2.077l-.127-1.019c-2.625.902-4.697 2.978-5.592 5.606l1.02.127c.806-2.174 2.529-3.9 4.699-4.714zm2.787 11.507c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm2-4c0-1.103-.896-2-2-2s-2 .897-2 2 .896 2 2 2 2-.897 2-2zm10 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12c6.63 0 12 5.396 12 12zm-2 0c0-.23-.02-.456-.034-.682-.501 1.729-1.453 3.198-2.361 4.137l-1.438-1.391c1.151-1.19 2.396-3.442 2.115-5.867-.219-1.889-1.344-3.524-3.325-4.871-1.463-.839-3.153-1.326-4.957-1.326-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10zm-7.358 5.267l1.881 1.832 2.639-2.678-1.88-1.834-2.64 2.68z"})}),(0,i.jsx)("h3",{children:"Disco & Dance"}),(0,i.jsx)("p",{children:"Lieblingsgenre"})]}),(0,i.jsxs)("div",{className:(0,l.Z)("glass",a().fourth),children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{d:"M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z"})}),(0,i.jsx)("h3",{children:"Ulm & Umgebung"}),(0,i.jsx)("p",{children:"Tatort"})]}),(0,i.jsx)("div",{className:(0,l.Z)("glass",a().image),children:(0,i.jsx)("div",{children:(0,i.jsx)("img",{alt:"Father And Son",src:"/img/dd.png"})})})]})]}),(0,i.jsxs)("section",{id:"spotify",className:a().spotify,children:[(0,i.jsx)("h2",{children:"DiscoDaddy f\xfcr zu Hause"}),(0,i.jsx)("div",{className:(0,l.Z)("glass",a().panel),children:(0,i.jsx)("iframe",{src:"https://open.spotify.com/embed/playlist/6LgG8julGyEevVhDYiuW12?utm_source=generator&theme=0",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"})})]}),(0,i.jsxs)("section",{id:"gallery",className:a().gallery,children:[(0,i.jsx)("h2",{children:"DiscoDaddy Gallerie"}),(0,i.jsx)(g,{})]}),(0,i.jsxs)("section",{id:"contact",className:a().contact,children:[(0,i.jsx)("h2",{children:"Sag DiscoDaddy „Hallo“"}),(0,i.jsx)(x,{})]})]})}},3696:function(e,s,n){"use strict";n.d(s,{He:function(){return r},UJ:function(){return o},YH:function(){return c},tE:function(){return a},uZ:function(){return l},vB:function(){return t}});var i=n(2265);let t="#f2a7b9",a="#56a1e2",l=(e,s,n)=>Math.min(Math.max(e,s),n),r=e=>{var s,n;return null!==(n=null===(s=document.getElementById(e))||void 0===s?void 0:s.offsetTop)&&void 0!==n?n:0},c=(e,s)=>{let n=0;for(let i of e){if(s>=n&&s<i.end){let e=(s-n)/(i.end-n);i.handler(e);break}n=i.end}},o=()=>{let[e,s]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=()=>{setTimeout(()=>{requestAnimationFrame(()=>s(e=>e+1))})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}},3308:function(e){e.exports={contactForm:"contact_contactForm__VqDB6"}},2324:function(e){e.exports={gallery:"gallery_gallery__SIGNq",container:"gallery_container__0Tjk6",slide:"gallery_slide__9ztSi",card:"gallery_card__LyRSH"}},3327:function(e){e.exports={intro:"page_intro__ej13n",fadeIn:"page_fadeIn__byvCC",about:"page_about__AenLM",grid:"page_grid__BMnHF",image:"page_image__tf7Ji",description:"page_description__fP9fn",info:"page_info__zbM4d",third:"page_third__Mah6D",fourth:"page_fourth__7GyUW",spotify:"page_spotify__X2cou",panel:"page_panel__qJtx9",gallery:"page_gallery__wJS0V",contact:"page_contact__XVGLj",initialPage:"page_initialPage__3A_uI"}}},function(e){e.O(0,[130,689,250,971,117,744],function(){return e(e.s=2506)}),_N_E=e.O()}]);