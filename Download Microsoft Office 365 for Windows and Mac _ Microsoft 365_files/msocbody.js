/*! 160368 */!function(e){let n="www.microsoft.com"!==window.location.hostname,i="https://go.microsoft.com/fwlink/p/?LinkID=",t={HERO:".highlight",ME_CONTROL_SIGN_IN:'#mectrl_main_trigger[href*="SignIn"]',SIGN_IN_LINK:'a[data-bi-bhvr="100"]',SIGN_UP_LINK:'a[data-bi-bhvr="210"]',UHF_SIGN_UP:"#c_shellmenu_signupforfree"},o,r=0,s;function a(){let e=document.querySelector(t.ME_CONTROL_SIGN_IN),i=document.querySelector(t.UHF_SIGN_UP);e||e&&i?(o.signIn&&e.setAttribute("href",o.signIn),o.signUp&&i.setAttribute("href",o.signUp),clearInterval(s),n&&console.log("UHF sign-in override loaded after "+r+" iterations.")):r>40&&(clearInterval(s),n&&console.log("UHF sign-in override skipped after "+r+" iterations.")),r++}function l(){(o=function o(){let r=document.querySelector(t.HERO),s,a;if(r){let l=r.querySelector(t.SIGN_IN_LINK),g=r.querySelector(t.SIGN_UP_LINK);l?s=l.getAttribute("href"):n&&console.log("No hero sign in link found."),g?a=g.getAttribute("href"):n&&console.log("No hero sign up link found.")}else n&&console.log("No hero found.");if((!s||!a)&&e.conditionalFwLinks)for(let c=0,I=e.conditionalFwLinks.length;c<I;c++){let f=e.conditionalFwLinks[c];f.pathTest.test(window.location.pathname)&&(f.signInFwLink&&!s&&(s=i+f.signInFwLink),f.signUpFwLink&&!a&&(a=i+f.signUpFwLink))}if(!s&&e.signInFwLink&&(s=i+e.signInFwLink),!s&&!a)return null;{let d={};return s&&(d.signIn=s),a&&(d.signUp=a),d}}())&&(s=setInterval(a,250)),[...document.querySelectorAll("main a[data-bi-tags]")].forEach(e=>{try{let n=JSON.parse(e.dataset.biTags),i=function e(n,i){let t=i.toLowerCase();return n[Object.keys(n).find(e=>e.toLowerCase()===t)]}(n,"bilinkname");i&&(e.dataset.biCn=i)}catch(t){console.error(t)}})}"interactive"===document.readyState||"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",l)}({conditionalFwLinks:[{pathTest:/teams-for-home(?:\/[^\/\s]+)?$/i,signInFwLink:"2148766",signUpFwLink:"2163566",m365SignInFwLink:"2111487"}],signInfwLink:"873020&lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn"});
/*! 183044 */try{(()=>{"use strict";const t="[data-mount='multi-feature-vertical-tab'] .lazyload",n=new CustomEvent("resize");function c(){window.dispatchEvent(n)}!function(){const n=document.querySelectorAll(t);n.length&&n.forEach(t=>t.onload=c)}()})()}catch{}
/*! 154450 */!function(){if(!window.location.pathname.includes("microsoft-365/microsoft-365-for-existing-subscribers"))return;function e(){const e=document.querySelector("#c-uhf-nav-cta");e&&(e.style.display="none")}"complete"===document.readyState||"interactive"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)}();
/*! 190578 */!function(){const e=window.location.pathname,t=".root .universalfooter",o=`${t} #uhf-footer`,c=`${o} .c-uhff-base`,n=`${o} .c-uhff-nav .c-heading-4, .c-uhff-nav a.c-uhff-link`,u=`${o} .c-uhff-base>a.c-uhff-link.c-uhff-lang-selector`,a=`${c} ul.c-list.f-bare`,l="#191919",r="text-light";function d(){e.includes("mixed-reality/windows-mixed-reality")&&(function(){const e=document.querySelector(t);e&&(e.style.backgroundColor=l);const n=document.querySelector(o);n&&(n.style.backgroundColor=l);const u=document.querySelector(c);u&&(u.style.backgroundColor=l)}(),function(){const e=document.querySelectorAll(n);e&&e.length>0&&e.forEach(e=>e.classList.add(r));const t=document.querySelector(u);t&&t.classList.add(r);const o=document.querySelector(a);o&&o.classList.add(r)}())}"interactive"===document.readyState||"complete"===document.readyState?d():document.addEventListener("DOMContentLoaded",d)}();
/*! ?????? */!function(a){if(window.location.pathname.indexOf("/microsoft-365/onedrive")>-1){function b(){let b=document.querySelector(h);b?(b.setAttribute("href",e+(a.fwLink?a.fwLink:a.pageFwLinks[j])),clearInterval(k),d&&console.log("UHF sign-in override loaded after "+l+" iterations.")):l>g&&(clearInterval(k),d&&console.log("UHF sign-in override skipped after "+l+" iterations.")),l++}function c(){(a.fwLink||j in a.pageFwLinks)&&(k=setInterval(b,f))}const d="www.microsoft.com"!==window.location.hostname,e="https://go.microsoft.com/fwlink/p/?LinkID=",f=250,g=40,h='#mectrl_main_trigger[href*="signin"]',i=window.location.pathname.split("/"),j=i[i.length-1];let k,l=0;"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)}}({fwLink:"2119709"});
/*! 199932 */!function(){if(window.location.pathname.includes("/en-us/security/business/solutions/identity-access")){var e=document.querySelector("#feature-oc61b9 .grid-feature-item-1");e.classList.remove("col-md-6"),e.classList.add("col-md")}}();
/*! 160671 */!function(e){let t="www.microsoft.com"!==window.location.hostname,i="https://go.microsoft.com/fwlink/p/?LinkID=",n=window.location.pathname.split("/"),s=n[n.length-1],o=n.length>2?n[2]:"";0==s.length&&(s=n[n.length-2]);let r=0,a;function l(){let n=document.querySelector('#mectrl_main_trigger[href*="signin" i]');n?(s in e.pageFwLinks?n.setAttribute("href",i+e.pageFwLinks[s]):o in e.siteFwLinks?n.setAttribute("href",i+e.siteFwLinks[o]):n.setAttribute("href",i+e.fwLink),n.setAttribute("target","_blank"),clearInterval(a),t&&console.log("UHF sign-in override loaded after "+r+" iterations.")):r>40&&(clearInterval(a),t&&console.log("UHF sign-in override skipped after "+r+" iterations.")),r++}function g(){var t,i=3e3;let n,r;var g=(t=l,n=void 0!==i?i:10,function(){r&&window.clearTimeout(r),r=window.setTimeout(function(){r=null,t()},n)});(e.fwLink||s in e.pageFwLinks||o in e.siteFwLinks)&&(a=setInterval(l,250),window.addEventListener("resize",g))}"interactive"===document.readyState||"complete"===document.readyState?g():document.addEventListener("DOMContentLoaded",g)}({pageFwLinks:{"online-surveys-polls-quizzes":"2115709"},siteFwLinks:{"windows-365":"2168661"}});
/*! 227522 */setTimeout(()=>{document.querySelectorAll("#feature-oceb69 video.w-100").forEach(e=>{e.setAttribute("loop","true"),e.paused?(e.defaultPlaybackRate=.9,e.play(),e.playbackRate=.9):(e.defaultPlaybackRate=.9,e.playbackRate=.9)})},500);
/*! 233045 */!function(){const t="Learn about the new Bing in Windows and more.";if(-1!==window.location.href.indexOf("https://www.microsoft.com/en-us/ai")){const e=document.querySelector("#alert-uid2b22 a.cta");e&&(e.innerText=t,e.setAttribute("aria-label",t),e.setAttribute("href","https://blogs.windows.com/"))}}();
/*! 232011 */!function(){function e(){document.querySelectorAll("li > [id^='c-shellmenu-hidden-'i]").forEach(function(e){e.parentElement.style="display: none!important;"})}"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)}();
/*! 237517 */(()=>{let e="d-none",t="d-md-block",o=o=>{let r=o.querySelectorAll(`.card-footer > .${e}.${t}`);r.forEach(o=>{o.classList.remove(e),o.classList.remove(t)});let l=o.querySelectorAll(".card-body");l.forEach(t=>{t.classList.remove("mb-md-g"),t.classList.add("mb-g");let o=t.querySelectorAll(`.${e}.d-sm-block`);o.forEach(t=>{t.classList.remove(e)})})},r=()=>{let e=document.querySelectorAll(".compare-chart");e.forEach(e=>{let t=e.querySelector("thead:not(.position-sticky)"),r=e.querySelector("tfoot");t&&o(t),r&&o(r)})};"complete"===document.readyState||"interactive"===document.readyState?r():document.addEventListener("DOMContentLoaded",r)})();
/*! 240075 */(()=>{function e(e){if(e&&e.length){let t=!1,o=0;for(const c of e){const e=c.firstElementChild;e&&!e.classList.contains("card-header")&&(t=!0,e.style.height="auto",e.offsetHeight>o&&(o=e.offsetHeight))}if(t)for(const t of e){const e=t.firstElementChild;if(e.classList.contains("card-header")){const c=document.createElement("div");c.classList.add("mb-1"),c.style.height=o+"px",t.insertBefore(c,e)}else e.style.height=o+"px"}}}function t(){const t=window.location.search.indexOf("wcmmode")>-1?".cmp-tabs .tab-panel":".cmp-tabs .cmp-tabs__tabpanel",c=document.querySelectorAll(t);for(const t of c.length?c:[document]){e(t.querySelectorAll("table.compare-chart .card"));o(t.querySelectorAll("table.compare-chart thead .card-header"));o(t.querySelectorAll("table.compare-chart tfoot .card-header"));o(t.querySelectorAll("table.compare-chart thead .card-body"));o(t.querySelectorAll("table.compare-chart tfoot .card-body"));o(t.querySelectorAll("table.compare-chart thead .card-footer"));o(t.querySelectorAll("table.compare-chart tfoot .card-footer"))}}function o(e){if(e&&e.length>1){let t=0;for(const t of e)t.style.height="auto",t.style.flexGrow="0",t.style.flexShrink="0",t.style.flexBasis="auto";for(const o of e)o.offsetHeight>t&&(t=o.offsetHeight);if(t>0)for(const o of e)o.style.height=t+"px"}}function c(){setTimeout(function(){t()},500)}function a(){const e=function(e,t){let o,c=void 0!==t?t:10;return function(){o&&window.clearTimeout(o),o=window.setTimeout(function(){o=null,e()},c)}}(t,100);window.addEventListener("resize",e),t(),function(){const e=document.querySelectorAll(".cmp-tabs .tab-group a[data-cmp-hook-tabs]");for(const t of e)t.addEventListener("click",e=>{c()}),t.addEventListener("keydown",e=>{"Enter"!==e.code&&"Space"!==e.code||c()})}()}"complete"===document.readyState||"interactive"===document.readyState?a():document.addEventListener("DOMContentLoaded",a)})();
/*! 252649 */(()=>{let e=window.location.pathname,i=(window.location.hostname,e.split("/")[1]),t=[`/${i}/ai`,`/${i}/ai/dynamics-365-ai`,`/${i}/startups/ai`],n=`.universalheader,.uhf {letter-spacing: normal !important;line-height: 1.5;}body {font-weight: 400;font-size: 0.875rem;line-height: 1rem;letter-spacing: -0.03em; }@media (min-width: 860px) {body {font-size: 1rem;line-height: 1.5rem; } }.display-1 {font-weight: 600;font-size: 2.98625rem;line-height: 4.5rem;letter-spacing: -0.05em; }@media (min-width: 860px) {.display-1 {font-size: 3.76812rem;line-height: 5rem; } }@media (min-width: 1084px) {.display-1 {font-size: 4.76813rem;line-height: 6rem; } }.display-2 {font-weight: 600;font-size: 2.48813rem;line-height: 3rem;letter-spacing: -0.05em; }@media (min-width: 860px) {.display-2 {font-size: 2.815rem;line-height: 3.5rem; } }@media (min-width: 1084px) {.display-2 {font-size: 3.815rem;line-height: 5rem; } }h1,.h1 {font-weight: 600;font-size: 2.07375rem;line-height: 2.5rem;letter-spacing: -0.05em; }@media (min-width: 860px) {h1,.h1 {font-size: 2.30187rem; } }@media (min-width: 1084px) {h1,.h1 {font-size: 3.05187rem;line-height: 4.5rem; } }h2,.h2 {font-weight: 600;font-size: 1.69125rem;line-height: 2rem;letter-spacing: -0.05em; }@media (min-width: 1084px) {h2,.h2 {font-size: 2.44125rem;line-height: 3.5rem; } }h3,.h3 {font-weight: 600;font-size: 1.45312rem;line-height: 2rem;letter-spacing: -0.05em; }@media (min-width: 1084px) {h3,.h3 {font-size: 1.95312rem;line-height: 2.5rem; } }h4,.h4 {font-weight: 600;font-size: 1.25rem;line-height: 2rem;letter-spacing: -0.05em; }@media (min-width: 860px) {h4,.h4 {line-height: 1.5rem; } }@media (min-width: 1084px) {h4,.h4 {font-size: 1.5625rem;line-height: 2rem; } }h5,.h5 {font-weight: 600;font-size: 1.125rem;line-height: 1.5rem;letter-spacing: -0.03em; }@media (min-width: 860px) {h5,.h5 {font-size: 1rem; } }@media (min-width: 1084px) {h5,.h5 {font-size: 1.25rem;line-height: 1.5rem; } }.lead {font-weight: 400;font-size: 1.5rem;line-height: 1.125rem;letter-spacing: -0.03em; }@media (min-width: 860px) {.lead {font-size: 1rem; } }@media (min-width: 1084px) {.lead {font-size: 1.25rem;line-height: 2rem; } }.base {font-weight: 400;font-size: 0.875rem;line-height: 1rem;letter-spacing: -0.03em; }@media (min-width: 860px) {.base {font-size: 1rem;line-height: 1.5rem; } }.small {font-weight: 400;font-size: 0.875rem;line-height: 1.25rem;letter-spacing: -0.03em; }.x-small {font-weight: 400;font-size: 0.75rem;line-height: 1rem;letter-spacing: -0.03em; }.label-eyebrow {font-weight: 600;font-size: 0.75rem;line-height: 1rem;letter-spacing: 0.08em; }.label-base {font-weight: 600;font-size: 1rem;line-height: 1.5rem; }.label-small {font-weight: 600;font-size: 0.875rem;line-height: 1rem; }.label-x-small {font-weight: 600;font-size: 0.75rem;line-height: 1rem; }.action-trigger,.btn,.cta {letter-spacing: -0.02em; }`,h=e=>t.some(i=>m(e)===i),m=e=>(e=e.replace(".html","")).replace(/\/+$/,""),r=e=>{let i=document.createElement("style");i.setAttribute("id","Static Override 252649"),document.head.appendChild(i),i.appendChild(document.createTextNode(e))},a=()=>!0,$=()=>document.body.classList.contains("reimagine-page"),l=()=>{h(e)&&a()&&!$()&&r(n)};"interactive"===document.readyState||"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",l)})();
/*! 252296 */try{(()=>{const{pathname:e,hostname:t}=window.location,o=["ai","startups","startups/ai"],n=["ai_hp"],a=".cmp-tabs .tab-group [data-cmp-hook-tabs='tab']",r=".ow-m365-video",c="video:not([muted])";function i(){(document.querySelectorAll(a)||[]).forEach(e=>{let t="#"+e.getAttribute("aria-controls"),o=document.querySelector(t),n=null!=o?o.querySelectorAll(r):[];if(n!=[]){e.addEventListener("onHide",function(){n.forEach(e=>{var t;(t=e.querySelector(c))&&!t.paused&&t.pause()})})}})}(function(){const a=e.replace(".html","").toLowerCase().split("/").filter(function(e){return""!==e}),r=a[a.length-1]||"",c=a[a.length-2]||"";return!!(0==o.indexOf(r)||1==o.indexOf(r)||o.indexOf(c+"/"+r)>-1||n.includes(r)&&"sites-author.adobeppe.microsoft.com"===t)})()&&("interactive"===document.readyState||"complete"===document.readyState?i():document.addEventListener("DOMContentLoaded",i,!1))})()}catch(e){console.log(e)}
/*! 254514 */(()=>{let e=window.location.pathname,t=(window.location.hostname,{TABS:".tabs.aem-GridColumn.aem-GridColumn--default--12[data-component-id='15172cf55fd198c73e128a7ebd647612']",BACK_TO_TAB:".btn.btn-link.sr-only-focusable"}),a=["/ai_hp","/ai"],l=["mb-4","mt-n5","mt-lg-n6","mb-lg-5","d-flex","mw-fit-content"],n=e=>a.some(t=>o(e).indexOf(t)>0),o=e=>(e=e.replace(".html","")).replace(/\/+$/,""),d=()=>{let e=document.querySelectorAll(t.TABS);for(let a of e){let n=a.querySelector(t.BACK_TO_TAB);n&&n.classList.add(...l)}},m=()=>!0,c=()=>{n(e)&&m()&&d()};"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)})();
/*! 267416 */(()=>{let e=()=>{let e=["mx-ng","mx-md-0"];document.querySelectorAll('.aem-Grid>.feature [data-mount="m365-feature"] .card').forEach(t=>t.classList.remove(...e))};"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*! 268589 */(()=>{let t=window.location.origin,e=window.location.pathname,o=e.split("/")[1],c="/"+o,r=e.replace(c,"");function s(){return"https://azure.microsoft.com"===t&&null!==r.match(/^\/products/)}function i(){if(!s())return;let t=['[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ISO?"]','[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/security_csa?"]','[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/security_itar?"]','[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/security_cjis?"]','[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/security_hipaa?"]','[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/IRS?"]'];var e=null;for(let o=0;o<t.length;o++){let c=t[o];if(e=document.querySelector(c))break}!function t(e){if(!e)return;let o=e.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;if(!o.classList.contains("col"))return;let c=o.parentNode;c.classList.contains("row","row-cols-md-3")&&(o.style.display="none",c.classList.add("justify-content-center"))}(e)}"interactive"===document.readyState||"complete"===document.readyState?i():document.addEventListener("DOMContentLoaded",i)})();
/*! 270602 */(()=>{const t=()=>{document.location.pathname.indexOf("windows-365/frontline")>0&&setTimeout(function(){var t=document.querySelectorAll(".oc-sku-list-table-component .sr-only.oc-list-price");if(t&&t.length>0)for(var e=0;e<t.length;e++){var n=t[e],o=n.nextElementSibling;o&&o.classList.contains("oc-list-price")&&(o.textContent=n.textContent,n.remove())}},1e3)};"interactive"===document.readyState||"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)})();
/*! 282219 */(()=>{let[e,t]=[window.location.hostname,window.location.pathname],o="/products/ai-services/cognitive-search",i=document.querySelectorAll('.ow-m365-video[data-video-type="inline"] .ow-m365-video-player-ctn:not([data-is-initialized="true"])'),n=function(){let e=document.createElement("script");e.src="https://azure.microsoft.com/etc.clientlibs/onecloud/components/content/onecloud-player/v1/onecloud-player/clientlibs/site.min.ACSHASH1602c90e606d7c8626641fad69febea8.js",document.body.appendChild(e)};"azure.microsoft.com"===e&&(t.endsWith(o)||t.endsWith(o+"/"))&&i.length&&n()})();
/*! 275018 288521 Fix horizontal scroll issue with tables*/(()=>{const pageScope={"www.microsoft.com":{},previews:true};const CUSTOM_STYLE=`
      @media (max-width: 560px) {
        [data-component-id="b77a3c59aec694da566e0bb18c2d7e26"] {
            overflow: auto;
        }
      }
    `;function run(){if(!window.SOUtil.pageIsInScope(pageScope)){return}document.body.insertAdjacentHTML("beforeend",'<style id="static-override-275018">'+CUSTOM_STYLE+"</style>")}if(document.readyState!=="loading"){run()}else{document.addEventListener("DOMContentLoaded",run)}})();
/*! 288501 */(()=>{let e=`
        @media (max-width: 560px) {
            .SO-288501  {
                display: flex !important;
                flex-direction: column-reverse !important;
            }
        
            .SO-288501 .carousel-controls {
                position: relative !important;
                transform: translateX(0) !important;
                left: 0 !important;
                bottom: 0 !important;
                display: grid !important;
                grid-template-rows: repeat(1, 1fr);
                grid-template-columns: repeat(2, 1fr);
            }
            
            .SO-288501 .carousel-controls ol.carousel-indicators {
                flex-wrap: wrap;
                grid-row: 1;
                grid-column-start: 1;
                grid-column-end: 3;
            }
            
            .SO-288501 .carousel-controls .carousel-control-prev {
                grid-row: 2;
                grid-column: 1;
            }
            
            .SO-288501 .carousel-controls .carousel-control-next {
                grid-row: 2;
                grid-column: 2;
                margin-left: auto;
            }
        }
    `;function t(){let t=window.location.href;if(t.includes("https://azure.microsoft.com")&&t.includes("solutions/industries/discrete-manufacturing/iot")){document.body.insertAdjacentHTML("beforeend",'<style id="static-override-286152">'+e+"</style>");document.querySelector("#sneakpeekcontentcardscarousel-uide0e6").querySelector("section div.carousel.slide.carousel-sneak-peek div").classList.add("SO-288501")}}"interactive"===document.readyState||"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)})();
/*!288523 */(()=>{let o=["/microsoft-365/outlook/outlook-for-mac"],a=window.location.pathname,t=n(a),r=`
.material-color-dark.heading-bg-color-layout-container-uid32fd [data-component-id="6bcfe650a6c8d0d6861d5c2318eb410c"] [data-mount="click-group"] button{
  color: #fff !important;
}
.material-color-dark.heading-bg-color-layout-container-uida6fa .ms-rte-link {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-layout-container-uid58414 .ms-rte-link {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-tabs [data-component-id="7d035e44732558122f71f786dbc90344"] .text-primary {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-tabs [data-component-id="7d035e44732558122f71f786dbc90344"] .ms-rte-link {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-tabs [data-component-id="7d035e44732558122f71f786dbc90344"] .link-group .cta {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-tabs [data-component-id="7d035e44732558122f71f786dbc90344"] .link-group .cta {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-tabs [data-component-id="7d035e44732558122f71f786dbc90344"] [data-mount="click-group"] a {
  color: #fff !important;
}
.material-color-dark a.btn-link.sr-only-focusable {
  color: #fff !important;
}
[data-component-id="681246136dd91ef8d8438942a2cc9102"] .btn.btn-link {
  color: #fff !important;
}
[data-component-id="681246136dd91ef8d8438942a2cc9102"] .btn.btn-link.inactive {
  color: #757575 !important;
}
.material-color-dark [data-component-id="5aae1cc391ba1be81238febb88e2ef7b"] .superscript {
  color: #fff !important;
}

`;function e(){return o.some(o=>t.endsWith(o))}function n(o){return o.replace(/\/+$/,"")}function c(){e()&&document.body.insertAdjacentHTML("beforeend",'<style id="static-override-288523">'+r+"</style>")}"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)})();
/*!288510*/(()=>{const e=".horizontal-nav a.bg-transparent",t=()=>{document.querySelectorAll(e).forEach(e=>{e.classList.remove("bg-transparent")})};"complete"===document.readyState||"interactive"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)})();
/*!288704*/(()=>{function e(){let e=document.querySelector("#oc-contact-sales");if(e){let t=e.querySelectorAll("span.btn.glyph-prepend.btn-glyph-only");t.forEach(e=>{e.setAttribute("aria-hidden","true")})}}"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*! 288993 */(()=>{let e=window.location.origin,t="https://sites-author.adobeprod.microsoft.com",r=window.location.pathname,n=r.split("/")[1],o="/"+n,a=r.replace(o,"");function i(){var e,t=document.querySelector(".carousel__controls"),r=document.querySelector(".carousel__arrow-next"),n=document.querySelector(".carousel__arrow-prev"),o=document.querySelectorAll(".carousel__indicators-item"),a=o.length,i=document.createElement("span");i.setAttribute("class","sr-only"),i.setAttribute("aria-live","polite"),t&&t.appendChild(i);for(var u=0;u<o.length;u++)!function(t){let r=o[t];r.setAttribute("role","button");var n=document.createElement("span");n.setAttribute("class","sr-only"),n.innerHTML="Slide "+(t+1),r.appendChild(n),0===t&&(e=r,r.setAttribute("aria-current","true")),r.addEventListener("click",function(){e.removeAttribute("aria-current"),o[t].setAttribute("aria-current","true"),e=o[t],s(t,a,i)})}(u);null!==r&&null!==n&&(r.addEventListener("click",function(){setTimeout(function(){let e=c(o);s(e,a,i)},1e3)}),n.addEventListener("click",function(){setTimeout(function(){let e=c(o);s(e,a,i)},1e3)}))}function c(e){var t=document.querySelector(".carousel__indicators-item.active");return Array.from(e).indexOf(t)}function s(e,t,r){r.innerHTML="Showing "+(e+1)+" of "+t+" items."}function u(){return e===t&&a.startsWith("/azure/acom/en-us/homepage")||e===t&&a.startsWith("/launches/2023/09/12/october_refresh/content/azure/acom/en-us/homepage")||e===t&&a.startsWith("/azure/acom/en-au/homepage")||"https://sites-author.adobeppe.microsoft.com"===e&&a.startsWith("/azure/acom/en-us/homepage")||"https://azure.microsoft.com"===e&&("/"===a||""===a)}function l(){u()&&i()}"interactive"===document.readyState||"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",l)})();
/*! 292632 292948 */(()=>{function e(){let e=window.location.hostname,t=window.location.pathname,o=t.split("/").slice(2).join("/");if(["sites-author.adobeprod.microsoft.com","sites-author.adobeppe.microsoft.com","www.microsoft.com"].includes(e)&&["aiforall","aiforall/","copilot","copilot/","microsoft/bade/en-us/aiforall.html","microsoft/bade/en-us/copilot.html","microsoft/bade/en-us/qa-folder/iss_qa/aiforall_test.html"].includes(o.toLowerCase())){(function e(){let t=`
          .media-control.media-control--override::before {
            display: none;
          }
          .media-control.media-control--override::after {
            display: none;
          }
          .media-control.media-control--override:focus {
            outline: 2px dotted;
          }
          .media-control.media-control--override {
            background-color: transparent;
            color: var(--theme-foreground-accent-strong-normal);
            border: 2px solid var(--theme-foreground-accent-strong-normal);
            box-shadow: none;
            height: 32px;
            width: 32px;
          }
          .media-control.media-control--override .glyph-prepend {
            position: unset;
          }
          
          .hero-media.hero-media--featured-xl.hero-media--campaign .html5-video video {
            object-position: 0% 80%;
          }

          [data-component-id="3d6c0c8bbf28ee24fc5733387b814476"].theme-night .tab-panel .media__slot .btn.btn--icon-only {
            --button-color: #2a446f !important;
            --button-border-color: #2a446f !important;
          }
      `,o=document.querySelectorAll('[data-mount="m365-video"] .media-control');if(0!==o.length)for(let a of(document.body.insertAdjacentHTML("beforeend",'<style id="static-override-293120">'+t+"</style>"),o))a.classList.add("btn","btn--icon-only","btn--secondary","media-control--override")})(),function e(){let t=`
      .interactive-demo.theme-night .tabs .tab {
        border-color: var(--theme-border-special-fade) !important;
      }
      .interactive-demo.theme-night .tabs .tab__item {
        background: var(--theme-background-glass-normal);
      }
      .interactive-demo .tabs .active .tab__item {
        background: var(--theme-background-glass-selected);
      }
      .interactive-demo .tabs .tab__item .badge {
        background-color: var(--theme-background-overlay-full);
        var(--theme-border-special-fade);
      }
      .section-master.theme-night .card {
        background: var(--theme-background-glass-normal);
      }
      .interactive-demo.theme-night .tabs .arrow-next {
        --arrow-background-gradient-start-position: 0%;
        --arrow-background-color: #003259;
      }
      .interactive-demo.theme-night .tabs .arrow-prev {
        --arrow-background-gradient-start-position: 0%;
        --arrow-background-color: var(--root-color-blue-black-700);
      }
      .interactive-demo .block-feature .block-feature__paragraph {
        text-align-last: center;
      }
      .section-master--layout-header-horizontal-alignment-center-focus.section-master--layout-header-horizontal-alignment-center.section-master--alignment-center .accordion {
        width: 100%;
      }
      `;document.body.insertAdjacentHTML("beforeend",'<style id="static-override-dark-theme">'+t+"</style>")}();document.querySelectorAll(".statement-banner .block-heading--campaign").forEach(e=>{e.classList.remove("block-heading--size-xl");let t=e.querySelector(".block-heading__title"),o=t.getAttribute("class");t.removeAttribute("class");let a=t.querySelector("[data-oc-token-text]"),r=t.querySelector("h1")||t.querySelector("h2")||t.querySelector("h3")||t.querySelector("h4")||t.querySelector("h5")||t.querySelector("h6");r?r.setAttribute("class",o):a.setAttribute("class",o)});let a=document.querySelectorAll(".interactive-demo .tabs .block-feature");a.forEach(e=>{let t=document.createElement("div");t.classList.add("layout","layout--focus"),t.appendChild(e.cloneNode(!0)),e.parentNode.replaceChild(t,e)});let r=document.querySelectorAll(".statement-banner .block-heading:not(:has(.text-gradient)");r.forEach(e=>{let t=document.createElement("div");t.classList.add("layout","layout--focus"),t.appendChild(e.cloneNode(!0)),e.parentNode.replaceChild(t,e)});let n=document.querySelector(".statement-banner .block-heading--campaign");n?.classList.add("statement-banner-override-class");let i=document.querySelectorAll(".section-master--layout-header-horizontal-alignment-center-focus");i.forEach(e=>{e.classList.add("section-master--layout-header-horizontal-alignment-center","section-master--alignment-center")})}}"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*!295096*/(()=>{let e=document.querySelectorAll("#oc-contact-sales ul > li > div > button");e.forEach(e=>{"7"!==e.dataset.biBhvr&&(e.dataset.biBhvr="7",e.dataset.biCn+="_Icon")});let t=`#oc-contact-sales ul > li > div > span.glyph-prepend:hover {cursor: default;}`,a=document.createElement("style");a.setAttribute("id","Static Override 295096"),a.appendChild(document.createTextNode(t)),document.head.appendChild(a)})();
/*!295857*/(()=>{let e=window.location.origin,t=window.location.pathname,i=t.split("/")[1],r="/"+i,o=t.replace(r,""),a=["/isv/qa-folder/qa/copilot-for-work","/microsoft-365/copilot-for-work","/microsoft-365/copilot-for-work/"];function n(){for(let t of a)if(o===t)return"https://www.microsoft.com"===e}var l=function(){function e(e){var t=this;e&&e.dataset&&e.dataset.video&&(this.playerContainerElementId=e.getAttribute("id"),this.playerData=JSON.parse(e.dataset.video),this.originalTelemetryDataObject=null,e&&e.dataset&&e.dataset.m&&(this.originalTelemetryDataObject=JSON.parse(e.dataset.m)),this.videoEventsNotBound=!0,this.previousTime=0,this.previousWatchTimePercentage=0,this.playerAPI=function(e){t.videoPlayer=e},this.renderOnePlayer())}return e.prototype.renderOnePlayer=function(){var e=this;window.MsOnePlayer.render(this.playerContainerElementId,this.playerData,function(t){e.playerAPI(t)})},e.prototype.disposeVideoPlayer=function(){this.videoPlayer&&this.videoPlayer.dispose&&this.videoPlayer.dispose()},e}();function s(e){e&&e.length&&e.forEach(function(e){var t=e.querySelector(".ow-m365-video-player-ctn");if(t){var i="m365-video-inline-override-"+d();window&&window.MsOnePlayer&&"true"!==t.dataset.isInitialized&&(t.id=i,new l(t),t.dataset.isInitialized="true")}})}function d(){var e=new Uint32Array(3);return window.crypto.getRandomValues(e),(performance.now().toString(36)+Array.from(e).map(function(e){return e.toString(36)}).join("")).replace(/\./g,"")}function c(){if(!n())return;let e=document.querySelectorAll(".ow-m365-video");e.length&&s(e)}"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)})();
/*!296927*/(()=>{function e(){let e=window.location.hostname;["www.microsoft.com","azure.microsoft.com"].includes(e)&&void 0!=document.querySelector(".testimonial-card__content-media .ocr-img")&&function e(){let t=`
.testimonial-card__content-media .ocr-img {
  --image-width: unset;
}
`;document.body.insertAdjacentHTML("beforeend",'<style id="static-override-296927">'+t+"</style>")}()}"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*!298516*/(()=>{let t=window.location.origin,e=`
.btn.btn--icon-only.btn--sm {
    padding: var(--root-spacing-xs);
}
`;function o(){let t=document.querySelector("body");return t&&t.classList.contains("reimagine-page")}function n(){return"https://www.microsoft.com"===t||"https://azure.microsoft.com"===t||"https://sites-author.adobeprod.microsoft.com"===t||"https://sites-author.adobeprod.microsoft.com"===t}function r(){n()&&o()&&document.body.insertAdjacentHTML("beforeend",'<style id="static-override-298516">'+e+"</style>")}"interactive"===document.readyState||"complete"===document.readyState?r():document.addEventListener("DOMContentLoaded",r)})();
/*!298412*/(()=>{function e(){let e=window.location.href;if(e.includes("https://www.microsoft.com")){let t=document.querySelectorAll('[data-component-id="216141b816281ca36b9f62de1b6844b8"]');t.forEach(e=>{let t=0,r=0,l=0,a=0,c=0,i=0,d=0,o=0,s=0,u=e.querySelectorAll(' [data-component-id="28e00fa935851163f2133f46ebdaa86b"]');u.forEach(e=>{let u=e.querySelector(".card-plan-detail--product .sku__buttons"),n=e.querySelector(".card-plan-detail--product .sku__title"),p=e.querySelector(".card-plan-detail--product .sku__paragraph"),f=e.querySelector(".card-plan-detail--product .sku__note"),h=e.querySelector(".card-plan-detail--product .sku__detail-recurrence"),y=e.querySelector(".card-plan-detail--product .sku__detail-commitment"),m=e.querySelector(".card-plan-detail--product .sku__pricing"),k=e.querySelector(".card-plan-detail--product .sku__footnote");if(n){let g=n.offsetHeight;g>r&&(r=g)}else(n=document.createElement("div")).classList.add("sku__title"),e.querySelector(".sku").insertBefore(n,e.firstChild);if(p){let S=p.offsetHeight;S>l&&(l=S)}else(p=document.createElement("div")).classList.add("sku__paragraph"),n.after(p);if(m){let q=m.querySelector(".sku__pricing-discount"),v=m.querySelector(".sku__pricing-current");if(q){let $=q.offsetHeight;$>o&&(o=$)}else(q=document.createElement("div")).classList.add("sku__pricing-discount"),v?v.before(q):m.appendChild(q);if(v){let E=v.offsetHeight;E>d&&(d=E)}else(v=document.createElement("div")).classList.add("sku__pricing-current"),m.appendChild(v)}if(h){let L=h.offsetHeight;L>a&&(a=L)}else(h=document.createElement("div")).classList.add("sku__detail-recurrence"),m.after(h);if(y){let b=y.offsetHeight;b>c&&(c=b)}else(y=document.createElement("div")).classList.add("sku__detail-commitment"),h.after(y);if(f){let x=f.offsetHeight;x>i&&(i=x)}else(f=document.createElement("div")).classList.add("sku__note"),y.after(f);if(u){let H=u.offsetHeight;H>t&&(t=H)}else(u=document.createElement("div")).classList.add("sku__buttons"),f.after(u);if(k){let _=k.offsetHeight;_>s&&(s=_)}else(k=document.createElement("div")).classList.add("sku__footnote"),u.after(k)}),u.forEach(e=>{let u=e.querySelector(".card-plan-detail--product .sku__buttons"),n=e.querySelector(".card-plan-detail--product .sku__title"),p=e.querySelector(".card-plan-detail--product .sku__paragraph"),f=e.querySelector(".card-plan-detail--product .sku__note"),h=e.querySelector(".card-plan-detail--product .sku__detail-recurrence"),y=e.querySelector(".card-plan-detail--product .sku__pricing"),m=e.querySelector(".card-plan-detail--product .sku__footnote"),k=e.querySelector(".card-plan-detail--product .sku__detail-commitment"),g=y.querySelector(".sku__pricing-discount"),S=y.querySelector(".sku__pricing-current");0===t?u.remove():u.style.height=`${t}px`,0===r?n.remove():n.style.height=`${r}px`,0===l?p.remove():p.style.height=`${l}px`,0===a?h.remove():h.style.height=`${a}px`,0===c?k.remove():k.style.height=`${c}px`,0===i?f.remove():f.style.height=`${i}px`,0===d?S.remove():S.style.height=`${d}px`,0===o?g.remove():g.style.height=`${o}px`,0===s?m.remove():m.style.height=`${s}px`})})}}"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*!298533*/(()=>{let t=window.location.origin,e=window.location.pathname,o=e.split("/")[1],i="/"+o,r=e.replace(i,""),a=["/microsoft/bade/en-us/copilot.html","/launches/2023/11/16/282257-november-21-2023/content/microsoft/bade/en-us/microsoft-cloud.html"],n=["/copilot","/copilot/","/microsoft-cloud","/microsoft-cloud/"],s=`
.section-master.section-master--override298533 {
    @media (min-width: 860px) {
        height: 100vh;
        max-height: 550px;
        display: flex;
        align-items: center;
    }
    @media (min-width: 1440px) {
        max-height: 800px;
    }
}
`;function d(){for(let e of a)if(r.startsWith(e))return"https://sites-author.adobeprod.microsoft.com"===t}function c(){for(let e of n)if(r===e)return"https://www.microsoft.com"===t}function l(){if(!d()&&!c())return;let t=document.querySelectorAll('[data-mount="m365-video"].section-master__video');for(let e of t)e.classList.add("m365-video--control-top-right"),e.parentElement.classList.add("section-master--override298533");document.body.insertAdjacentHTML("beforeend",'<style id="static-override-298533">'+s+"</style>")}"interactive"===document.readyState||"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",l)})();
/*!301626*/(()=>{let e=window.location.origin,t=`
.theme-day {
  --theme-background-background-overlay-fill : var(--root-overlay-day-bg-overlay-fill);
}
.theme-night {
  --theme-background-background-overlay-fill : var(--root-overlay-night-bg-overlay-fill);
}
`;function o(){for(var e=document.querySelectorAll(".carousel__indicators-item__media .media.media--ratio-21-9 .ocr-img.img-fluid.media__asset"),t=0;t<e.length;t++){var o=e[t],r=o.parentElement,a=o.innerHTML;o.remove(),r.innerHTML=a}}function r(){let e=document.querySelector("body");return e&&e.classList.contains("reimagine-page")}function a(){return"https://www.microsoft.com"===e||"https://azure.microsoft.com"===e||"https://sites-author.adobeprod.microsoft.com"===e||"https://sites-author.adobeppe.microsoft.com"===e}function i(){a()&&r()&&(document.body.insertAdjacentHTML("beforeend",'<style id="static-override-301626">'+t+"</style>"),o())}"interactive"===document.readyState||"complete"===document.readyState?i():document.addEventListener("DOMContentLoaded",i)})();
/*!303250*/(()=>{let t=window.location.origin,o=`
.modal--full-screen [data-mount='reimagine-modal'].theme-night .modal-close {
    border-color: #fff;
}
.modal--full-screen [data-mount='reimagine-modal'].theme-night .modal-close .glyph-prepend-cancel {
    color: #fff !important;
}
`;function e(){for(var t=document.querySelectorAll(".media__slot .btn--icon-onlybtn--secondary"),o=0;o<t.length;o++){var e=t[o];e.classList.remove("btn--icon-onlybtn--secondary"),e.classList.add("btn--icon-only","btn--secondary")}}function n(){document.body.insertAdjacentHTML("beforeend",'<style id="static-override-303250">'+o+"</style>")}function r(){let t=document.querySelector("body");return t&&t.classList.contains("reimagine-page")}function a(){return"https://www.microsoft.com"===t||"https://azure.microsoft.com"===t||"https://sites-author.adobeprod.microsoft.com"===t||"https://sites-author.adobeppe.microsoft.com"===t}function c(){a()&&r()&&(e(),n())}"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)})();
/*!293492*/(()=>{let o=window.location.origin,t=window.location.pathname,r=t.split("/")[1],e="/"+r,s=t.replace(e,""),c=["/microsoft/bade/en-us/microsoft-365/homepage-b.html","/microsoft/bade/en-us/microsoft-365/microsoft-365-business.html","/microsoft/bade/en-us/microsoft-365/microsoft-365-enterprise.html","/microsoft/bade/en-us/microsoft-365/copilot-for-work.html","/microsoft/bade/en-us/power-platform.html","/microsoft/bade/en-us/microsoft-365.html"],i=["/microsoft-365/homepage-b","/microsoft-365/homepage-b/","/microsoft-365/microsoft-365-business","/microsoft-365/microsoft-365-business/","/microsoft-365/microsoft-365-enterprise","/microsoft-365/microsoft-365-enterprise/","/microsoft-365/copilot-for-work","/microsoft-365/copilot-for-work/","/power-platform","/power-platform/","/microsoft-365","/microsoft-365/","/power-platform/resources","/power-platform/resources/"],f=["/products/managed-ccf","/products/managed-ccf/"];function m(){for(let t of c)if(s.startsWith(t))return"https://sites-author.adobeprod.microsoft.com"===o}function a(){for(let t of i)if(s===t)return"https://www.microsoft.com"===o}function l(){for(let t of f)if(s===t)return"https://azure.microsoft.com"===o}function n(){if(!m()&&!a()&&!l())return;let o=document.querySelectorAll(".card-grid");for(let t of o){let r=t.querySelectorAll(".card-grid__cards .layout__col");for(let e of r)e.querySelector(".block-feature__paragraph")||(e.style.display="none")}}"interactive"===document.readyState||"complete"===document.readyState?n():document.addEventListener("DOMContentLoaded",n)})();
/*!304410*/(()=>{function e(){let e="block-feature__eyebrow",t=document.querySelector('[data-component-id="88c73f454d3d7e6b4978837690a0c11d"]');if(t){let a=t.querySelector(".dynamic-content__template .card-grid--disable-card-promo .block-feature__headings");if(a){let n=a.getElementsByClassName(e);if(!n||0==n.length){let d=document.createElement("div");d.className=e;let l=document.createElement("h5");l.className="block-feature__label",l.innerText="Label",d.appendChild(l),a.insertBefore(d,a.firstChild);var r=document.createEvent("Event");r.initEvent("DOMContentLoaded",!0,!0),window.document.dispatchEvent(r)}}}}"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*!315749*/(()=>{let t=window.location.origin,e=window.location.pathname,i=e.split("/")[1],o="/"+i,s=e.replace(o,""),r=`
.section-master .section-master__slot .col div.media-block:last-child .media-block__caption {padding-bottom: 0;}
`;function a(){return"https://sites-author.adobeprod.microsoft.com"===t&&s.startsWith("/microsoft/bade/en-us/security/security-insider/")||"https://www.microsoft.com"===t&&s.startsWith("/security/security-insider/")}function c(){a()&&document.body.insertAdjacentHTML("beforeend",'<style id="static-override-315749">'+r+"</style>")}"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)})();
/*!317765*/(()=>{"use strict";(()=>{const t="Success",e=".oc-shared-pricing-data",c="[data-oc-product~='purchase']",r="[data-oc-product~='not-available'] p",o="[data-oc-shared-data='oc-tax-disclaimer'] p",a="[data-oc-shared-data='oc-consumer-tax-disclmr'] p",n="data-oc-product",d="oc-tax-disclaimer",i="oc-consumer-tax-disclmr",u="/etc.clientlibs/onecloud/clientlibs/clientlib-product-pricing.min";function l(){const e=null!==document.querySelector('[data-component-id="3a796505b6c04fa385e30bdb1b3679f7"]'),r=null!==document.querySelector(c);if(!e||!r)return;const o=performance.getEntriesByType("resource").filter(t=>200===t.responseStatus),a=o.some(t=>"script"===t.initiatorType&&t.name.includes(u));o.some(t=>"link"===t.initiatorType&&t.name.includes(u))||function(){const t=document.createElement("style");t.id="static-override-317765",t.textContent='\n            [data-oc-product]:not([data-oc-product*=Success]) > * {\n                display: none;\n            }\n\n            [data-oc-product]:not([data-oc-product*=Success]) [data-oc-product="not-available"],\n            [data-oc-product]:not([data-oc-product*=Success]) [data-oc-product="not-available"] * {\n                display: block !important\n            }\n        ',document.head.appendChild(t)}(),a||(s(),p(),document.addEventListener("onComplete",()=>{document.querySelectorAll("[data-token-text]").forEach(e=>{const c=e.querySelector("[data-oc-product*=purchase][data-oc-product*=main]");if(!c)return;const r=e.querySelectorAll("[data-oc-product*=purchase]:not([data-oc-product*=main])[data-token=m365ProductPrice]");if(!r)return;let o=t;for(const e of r){let c=e.getAttribute(n).split(" ")[1];if(c!==t){o=c;break}}let a=c.getAttribute(n),d=a.split(" ")[2];c.setAttribute(n,a.replace(d,o))}),p(),s()}))}function s(){const t=document.querySelectorAll(c);t&&t.forEach(t=>{const c=t.getAttribute(n).split(" ")[2],u=document.querySelector(e);let l=t.querySelector(o),s=t.querySelector(a),p=t.querySelector(r);u&&(p&&c&&(p.innerHTML=u.getAttribute(c)),l&&(l.innerHTML=u.getAttribute(d)),s&&(s.innerHTML=u.getAttribute(i)))})}function p(){const e=document.querySelectorAll(c);e&&e.forEach(e=>{const c=e.getAttribute(n).split(" ")[2];let d=e.querySelector(o),i=e.querySelector(a),u=e.querySelector(r);c===t?(d&&d.removeAttribute("aria-hidden"),i&&i.removeAttribute("aria-hidden"),u&&u.setAttribute("aria-hidden","true")):(d&&d.setAttribute("aria-hidden","true"),i&&i.setAttribute("aria-hidden","true"),u&&u.removeAttribute("aria-hidden"))})}"interactive"===document.readyState||"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",()=>l())})()})();
/*!329115*/(()=>{let t=document.querySelectorAll("img.card-img"),e=t=>{if("IMG"!==t.tagName)return!1;let e=t.getAttribute("width")||t.getAttribute("height")||t.naturalWidth||t.naturalHeight;if(!e)return!1;let r=Number.parseInt(e);return!isNaN(r)&&!!(r<100)},r=t=>new Promise((e,r)=>{let a=new MutationObserver((t,r)=>{for(let a of t)if("attributes"===a.type&&"class"===a.attributeName){let i=a.target;i.classList.contains("lazyloaded")&&(r.disconnect(),e())}});a.observe(t,{attributes:!0,attributeFilter:["class"]})}),a=t=>{t.classList.remove("card-img")},i=Array.from(t).filter(e);i.forEach(a);let l=document.querySelectorAll("img.card-img.lazyload, img.card-img.lazyloading");l.forEach(t=>{r(t).then(()=>{e(t)&&a(t)})})})();
/*!340602*/(()=>{let e=window.location.origin,t="https://www.microsoft.com",o="https://sites-author.adobeprod.microsoft.com",a=window.location.pathname,l=a.split("/")[1],i="/"+l,r=a.replace(i,""),c=`
        @media (min-width: 1280px) {
            .carousel--type-media-playlist-video .carousel__overlay-content.theme-night .block-feature__label {
                color: var(--root-color-sky-blue-300);
            }
            .carousel--type-media-playlist-video .carousel__overlay-content.theme-night .block-feature__title {
                --block-feature-title-color: var(--root-color-sky-blue-50);
            }
            .carousel--type-media-playlist-video .carousel__overlay-content.theme-night .block-feature__paragraph {
                color: var(--root-color-sky-blue-100);
            }
            .carousel--type-media-playlist-video .carousel__controls.theme-night .list-item__content .label-small {
                --fg-val: var(--root-color-sky-blue-300);
            }
            .carousel--type-media-playlist-video .carousel__controls.theme-night  .list-item__content-title {
                --fg-val: var(--root-color-sky-blue-50);
            }
        }

        @media (max-width: 1279.8px) {
            .carousel--type-media-playlist-video .carousel__controls {
                z-index: 1 !important;
            }
        }
    `;function s(){return e===o&&r.startsWith("/microsoft/bade/en-us/copilot/maximize-impact")||e===t&&r.startsWith("/microsoft-copilot/maximize-impact")||e===o&&r.startsWith("/launches/2024/04/26/328153-may-9-2024/content/microsoft/bade/en-us/copilot/ai-get-ready")||e===t&&r.startsWith("/microsoft-copilot/ai-get-ready")}function n(){s()&&(d(),document.body.insertAdjacentHTML("beforeend",'<style id="static-override-340602">'+c+"</style>"))}function d(){let e=document.querySelectorAll(".interactive-demo__tab .tab");e.length&&e.forEach(e=>{e.addEventListener("click",e=>{let t=document.querySelector(".video-js.vjs-playing");if(t){let o=t.querySelector("video");o.pause()}})})}"interactive"===document.readyState||"complete"===document.readyState?n():document.addEventListener("DOMContentLoaded",n)})();
/*!334365*/(()=>{let e={"www.microsoft.com":{markets:["en-us"]},"azure.microsoft.com":{markets:["en-us"]},previews:!0},t=e=>{let t=location.hostname,o=location.pathname,s=document.documentElement.lang.toLowerCase(),a={"sr-rs":["sr-rs","sr-latn-rs","sr-cyrl-rs"],default:[s]},c=a[s]||a.default,n=c.find(e=>-1!==o.indexOf(e)),l=o.replace(`/${n}`,"").replace(/\/$/,""),i=e.previews&&("sites-author.adobeprod.microsoft.com"===t||"sites-author.adobeppe.microsoft.com"===t),m={"/content/microsoft/bade":"www.microsoft.com","/content/azure/acom":"azure.microsoft.com"},d=t,u=r(),f=l;if(i){let h=o.replace(/\/content\/launches(\/[^\/]+){4}/g,""),p=Object.keys(m).find(e=>h.startsWith(e));if(d=m[p],!p||!d)return!1;f=h.replace(p,"").replace(`/${n}`,"").replace(".html","")}let w=e[d];return!!(w&&(!w.markets||w.markets.includes(u))&&(!w.paths||w.paths.includes(f)))},r=()=>{let e=document.documentElement.lang.toLowerCase(),t=e.split("-")[0],r=new URLSearchParams(location.search).get("market")?.toLowerCase();return r?`${t}-${r}`:e},o=()=>{document.querySelectorAll(".us-hidden").forEach(e=>{let t=new URL(e.href),r=new URLSearchParams(t.search);r.delete("clcid"),r.delete("culture"),r.delete("country"),t.search=r.toString(),e.href=t.toString()})},s=e=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()};t(e)&&s(o)})();
/*!343666*/(()=>{let e={"www.microsoft.com":{markets:["ar","bg-bg","zh-cn","zh-hk","zh-tw","hr-hr","cs-cz","da-dk","nl-nl","nl-be","en","et-ee","fi-fi","fr-be","fr-ca","fr-fr","fr","fr-ch","de-de","de-at","de-ch","el-gr","he-il","hu-hu","id-id","it-it","ja-jp","ko-kr","lv-lv","lt-lt","nb-no","pl-pl","pt-pt","pt-br","ro-ro","ru-ru","sr-latn-rs","sk-sk","sl-si","es-ar","es-cl","es-co","es","es-mx","es-es","sv-se","th-th","tr-tr","uk-ua","vi-vn"],paths:["/microsoft-365/planner/microsoft-planner-plans-and-pricing"]},previews:!0,marketAware:!1},t=e=>{let t=location.hostname,a=location.pathname,s=document.documentElement.lang.toLowerCase(),o={"sr-rs":["sr-rs","sr-latn-rs","sr-cyrl-rs"],default:[s]},n=o[s]||o.default,l=n.find(e=>-1!==a.indexOf(e)),c=a.replace(`/${l}`,"").replace(/\/$/,""),i=e.previews&&("sites-author.adobeprod.microsoft.com"===t||"sites-author.adobeppe.microsoft.com"===t),d={"/content/microsoft/bade":"www.microsoft.com","/content/azure/acom":"azure.microsoft.com"},m=t,p=r(e.marketAware),h=c;if(i){let f=a.replace(/\/content\/launches(\/[^\/]+){4}/g,""),u=Object.keys(d).find(e=>f.startsWith(e));if(m=d[u],!u||!m)return!1;h=f.replace(u,"").replace(`/${l}`,"").replace(".html","")}let w=e[m];return!!(w&&(!w.markets||w.markets.includes(p))&&(!w.paths||w.paths.includes(h)))},r=e=>{let t=document.documentElement.lang.toLowerCase(),r=t.split("-")[0],a=new URLSearchParams(location.search).get("market")?.toLowerCase();return a&&!1!==e?`${r}-${a}`:t},a=()=>{document.querySelectorAll('[data-product-id="CFQ7TTC0HDB1"] .oc-title').forEach(e=>{e.textContent="Planner Plan 1"})},s=e=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()};t(e)&&s(a)})();
/*!345256*/(()=>{let e={"azure.microsoft.com":{},previews:!0},t=e=>{let t=location.hostname,a=location.pathname,o=document.documentElement.lang.toLowerCase(),s={"sr-rs":["sr-rs","sr-latn-rs","sr-cyrl-rs"],default:[o]},n=s[o]||s.default,c=n.find(e=>-1!==a.indexOf(e)),l=a.replace(`/${c}`,"").replace(/\/$/,""),i=e.previews&&("sites-author.adobeprod.microsoft.com"===t||"sites-author.adobeppe.microsoft.com"===t),m={"/content/microsoft/bade":"www.microsoft.com","/content/azure/acom":"azure.microsoft.com"},d=t,p=r(e.marketAware),u=l;if(i){let f=a.replace(/\/content\/launches(\/[^\/]+){4}/g,""),h=Object.keys(m).find(e=>f.startsWith(e));if(d=m[h],!h||!d)return!1;u=f.replace(h,"").replace(`/${c}`,"").replace(".html","")}let w=e[d];return!!(w&&(!w.markets||w.markets.includes(p))&&(!w.paths||w.paths.includes(u)))},r=e=>{let t=document.documentElement.lang.toLowerCase(),r=t.split("-")[0],a=new URLSearchParams(location.search).get("market")?.toLowerCase();return a&&!1!==e?`${r}-${a}`:t},a=()=>{telemetry.appInsightsCore.addTelemetryInitializer(e=>{try{e.ext.web.userConsent=!1}catch(t){console.error(t)}return e})},o=e=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()};t(e)&&o(a)})();
/*! 351594: Fix issue where sticky table header covers too much of viewport in sku-list-table component */
(()=>{const run=()=>{const stickyTableHeaders=document.querySelectorAll(`.sku-list-table thead.position-sticky`);if(!stickyTableHeaders.length||!mwf?.Sticky){return}stickyTableHeaders.forEach(stickyTableHeader=>{stickyTableHeader.classList.remove("position-sticky","top-0");stickyTableHeader.style.display="table-header-group";const stickyTableHeaderComponent=new mwf.Sticky({el:stickyTableHeader})})};if(document.readyState!=="loading"){run()}else{document.addEventListener("DOMContentLoaded",run)}})();
/*! 189677 Outlook deeplink support */
(()=>{if(location.pathname.indexOf("/microsoft-365/outlook/")===-1)return;const doLogging=window.location.hostname!=="www.microsoft.com";const emptyString="";const intervalDelay=250;const maxIterations=40;const queryParamExp=/(?:\?|&)[^\s&]*/g;const dogfoodSignInURL="https://outlook-sdf.live.com/mail/";let signInParams={};const dogfoodSignInParams={cobrandid:"ab0455a0-8d03-46b9-b18b-df2f57b9e44c",nlp:"1"};const pageSignInSelector=`
		[href*="LinkID=2092832" i],
		[href*="LinkID=2105311" i],
		[href*="LinkID=2105416" i],
		[href*="LinkID=2125442" i]
	`;const uhfSignInSelector='#mectrl_main_trigger[href*="signin" i]';let iterations=0;let overrideInterval;let queryParams;const signInFWLink="https://go.microsoft.com/fwlink/p/?LinkID=2125442";let signInHref;function debounce(func,delay){let debounceDelay=delay!==undefined?delay:10;let debounceTimeout;return function(){if(debounceTimeout){window.clearTimeout(debounceTimeout)}debounceTimeout=window.setTimeout(function(){debounceTimeout=null;func()},debounceDelay)}}function getQueryParams(){let queryParams={};let queryParamMatches=window.location.search.match(queryParamExp);if(queryParamMatches&&queryParamMatches.length){queryParamMatches.forEach(function(queryParamMatch){let splitParam=queryParamMatch.split("=");if(splitParam.length===2){queryParams[splitParam[0].slice(1)]=splitParam[1]}})}return queryParams}function tryUpdateUHFSignInHref(){let uhfSignIn=document.querySelector(uhfSignInSelector);if(uhfSignIn){setSignInHref(uhfSignIn);return true}return false}function doCoherenceOverride(){let shouldClearInterval=false;if(tryUpdateUHFSignInHref()){shouldClearInterval=true;if(doLogging){console.log("Outlook UHF sign-in override loaded after "+iterations+" iterations.")}}else if(iterations>=maxIterations){shouldClearInterval=true;if(doLogging){console.log("Outlook UHF sign-in override skipped after "+iterations+" iterations.")}}if(shouldClearInterval){clearInterval(overrideInterval)}iterations++}function setSignInHref(el){el.setAttribute("href",signInHref)}function run(){overrideInterval=setInterval(tryUpdateUHFSignInHref,intervalDelay);window.addEventListener("resize",debounce(doCoherenceOverride,3e3));if(signInParams["deeplink"]||isDogfood){Array.prototype.forEach.call(document.querySelectorAll(pageSignInSelector),setSignInHref);if(doLogging){console.log("Outlook page sign-in override loaded.")}}else if(doLogging){console.log("Outlook page sign-in override skipped.")}}queryParams=getQueryParams();const isDogfood=queryParams["sdf"]==="1";if(queryParams["deeplink"]){signInParams["deeplink"]=decodeURIComponent(queryParams["deeplink"]).replace(/^\//,emptyString)}if(isDogfood){signInParams={...dogfoodSignInParams,...signInParams}}signInHref=isDogfood?dogfoodSignInURL:signInFWLink;const signInUrl=new URL(signInHref);Object.keys(signInParams).forEach(key=>signInUrl.searchParams.append(key,signInParams[key]));signInHref=signInUrl.href;if(document.readyState!=="loading"){run()}else{document.addEventListener("DOMContentLoaded",run)}})();
/*! 356617 UMPs inside of carousels not correctly sized */
(()=>{const pageScope={"www.microsoft.com":{paths:["/qa-folder/iss_qa/ai-get-ready3","/microsoft-365/business/win-with-copilot"],markets:["en-us"]},previews:true};function updateModalCarouselUMPWidths(){let modalCarousels=document.querySelectorAll(".modal .carousel");modalCarousels.forEach(carousel=>{const hasUMP=carousel.querySelector("universal-media-player");if(hasUMP){const carouselContainer=carousel.querySelector(".carousel__container");const carouselSlides=carousel.querySelectorAll(".carousel__slide");const carouselCMP=carousel.querySelectorAll(".cascade-media-player");if(carouselContainer){carouselContainer.classList.add("w-100")}carouselSlides.forEach(slide=>{slide.classList.add("w-100")});carouselCMP.forEach(cmp=>{cmp.classList.add("w-100")})}})}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(updateModalCarouselUMPWidths)}})();
/*! 357382: Add slide-in to Featured Cards */
(()=>{const pageScope={"www.microsoft.com":{paths:["/copilot/meet-copilot","/copilot/ai-get-ready","/microsoft-365/business/ai-get-ready","/microsoft-365/business/meet-copilot"],markets:["en-us"]},previews:true};function addSlideInToFeaturedCards(){let featuredCards=document.querySelectorAll(".featured-cards");featuredCards.forEach(blade=>{let bladeObserver=new IntersectionObserver((entries,observer)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("slide-in-top-3");observer.disconnect()}})});bladeObserver.observe(blade)})}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(addSlideInToFeaturedCards)}})();
/*! 356283: Biz Apps trial links in secondary nav "lock" the page. Remove duplicate trial DOM elements for mobile VPs */
(()=>{const pageScope={"www.microsoft.com":{paths:["/power-platform/products/power-apps","/power-platform/products/power-apps/partners","/power-platform/products/power-pages","/dynamics-365/products/customer-insights","/dynamics-365/products/guides","/dynamics-365/products/field-service","/dynamics-365/products/customer-service","/dynamics-365/products/sales","/dynamics-365/products/contact-center"]},previews:true};function removeDuplicateSecondaryNavBAPButton(){let secondaryNavBAPTrialButton=document.querySelector(".secondary-nav .dropdown [new-trial-web-component-trigger]");let secondaryNavBAPTrial=document.querySelector(".secondary-nav .dropdown new-trial");if(secondaryNavBAPTrialButton&&secondaryNavBAPTrial){secondaryNavBAPTrialButton.remove();secondaryNavBAPTrial.remove()}}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(removeDuplicateSecondaryNavBAPButton)}})();
/*! 359042: Windows 365 GPU sku Variable price */
(()=>{const pageScope={"www.microsoft.com":{paths:["/windows-365/enterprise/compare-plans-pricing"]},previews:true};const locContent={ar:"متغير","bg-bg":"Променлива","cs-cz":"Variabilní","da-dk":"Variable","de-at":"Variabel","de-ch":"Variabel","de-de":"Variabel","el-gr":"Μεταβλητή",en:"Variable","en-au":"Variable","en-ca":"Variable","en-gb":"Variable","en-ie":"Variable","en-in":"Variable","en-my":"Variable","en-nz":"Variable","en-sg":"Variable","en-us":"Variable","en-za":"Variable",es:"Variable","es-ar":"Variable","es-cl":"Variable","es-co":"Variable","es-es":"Variable","es-mx":"Variable","et-ee":"Muutuja","fi-fi":"Vaihtelee",fr:"Variable","fr-be":"Variable","fr-ca":"Variable","fr-ch":"Variable","fr-fr":"Variable","he-il":"משתנה","hr-hr":"Promjenjivo","hu-hu":"Változó","id-id":"Variabel","it-it":"Variable","ja-jp":"変動制","ko-kr":"가변","lt-lt":"Priklauso nuo aplinkybių","lv-lv":"Mainīgais","nb-no":"Variable","nl-be":"Variabele","nl-nl":"Variabele","pl-pl":"Różnie","pt-br":"Variável","pt-pt":"Variável","ro-ro":"Variabilă","ru-ru":"Переменная","sk-sk":"Variabilné","sl-si":"Spremenljivo","sr-rs":"Promenljiva","sv-se":"Varierar","th-th":"ตัวแปร","tr-tr":"Değişken","uk-ua":"Змінна","vi-vn":"Biến","zh-cn":"变量","zh-hk":"變數","zh-tw":"變數"};const locale=document.documentElement.lang.toLowerCase();function setSkuPricing(){const priceSelector='.oc-sku-card-w365 [data-product-id="CFQ7TTC0HHS9"][data-sku-id="0050"] .oc-list-price';document.querySelectorAll(priceSelector).forEach(price=>{price.textContent=locContent[locale]||locContent["en-us"];price.setAttribute("data-product-price-override","true")})}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(setSkuPricing)}})();
/*!313132/332084 Copilot pricing for annual commitment placement */
(()=>{const targetSelector="[data-ocr-skurequest='a0c4p0_pidcfq7ttc0mm8r_skuid0002_r2p1']";const cardPlanDetailListClass="card-plan-detail-list";const cardPlanDetailGridCardSelector=".card-plan-detail--grid-card";const skuPricingSelector=".sku__pricing";const skuParagraphSelector=".sku__paragraph";const skuRecurrenceSelector=".sku__detail-recurrence";const pageScope={"www.microsoft.com":{paths:["/microsoft-365/business/copilot-for-microsoft-365","/microsoft-365/microsoft-copilot","/microsoft-365/enterprise/copilot-for-microsoft-365"]},previews:true};function moveSkuParagraph(){const skus=document.querySelectorAll(targetSelector);skus.forEach(sku=>{const cardPlanDetail=sku.closest(cardPlanDetailGridCardSelector);moveSkuParagraphByElement(sku);moveSkuParagraphByGrid(cardPlanDetail)})}function moveSkuParagraphByElement(sku){if(!sku){return}const skuParagraph=sku.querySelector(skuParagraphSelector);if(!skuParagraph){return}const skuRecurrence=sku.querySelector(skuRecurrenceSelector);if(!skuRecurrence){return}sku.insertBefore(skuParagraph,skuRecurrence.nextSibling)}function moveSkuParagraphByGrid(cardPlanDetail){if(!cardPlanDetail){return}const cardPlanDetailList=cardPlanDetail.parentElement;if(!cardPlanDetailList||!cardPlanDetailList.classList.contains(cardPlanDetailListClass)){return}changeGridElementPosition(cardPlanDetailList,skuPricingSelector,"2");changeGridElementPosition(cardPlanDetailList,skuRecurrenceSelector,"3");changeGridElementPosition(cardPlanDetailList,skuParagraphSelector,"4")}function changeGridElementPosition(cardPlanDetailList,sectionSelector,position){const skuSections=cardPlanDetailList.querySelectorAll(sectionSelector);if(skuSections){skuSections.forEach(skuSection=>skuSection.style.gridRowStart=position)}}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(moveSkuParagraph)}})();
/*! 254637: Add Banner to ACOM and BizApps sites for RU-* locales stating that sales are suspended */
(()=>{const pageScope={"www.microsoft.com":{paths:["/power-platform","/dynamics-365"],allSubpaths:true,markets:["ru-ru"]},"azure.microsoft.com":{markets:["ru-ru"]},previews:true,marketAware:false};function addBannerMarkup(){var isAzurePage=window.location.hostname==="azure.microsoft.com"||window.location.href.includes("https://sites-author.adobeprod.microsoft.com/content/azure/acom/")||window.location.href.includes("https://sites-author.adobeppe.microsoft.com/content/azure/acom/");var isReimagine=document.querySelector("body.reimagine-page")?true:false;var bannerHTML=isReimagine?`<div ocr-component-name="announcement-banner" data-component-id="01dbc0460ff412456ec49899ac06c10e" class="ocr-announcement-banner ${isAzurePage?"theme-night":"theme-day"}">
              <section data-mount="ocr-alert-dismissible" class="announcement-banner">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="announcement-banner__center">
                        <div class="announcement-banner__content" role="alert">
                          <div data-oc-token-text="">Майкрософт приостановил все новые продажи продуктов и услуг в Беларуси и России.</div>
                        </div>
                        <div class="announcement-banner__action">
                          <div ocr-component-name="action" data-component-id="467e35e809075d121962a1d239c316b2" class="action d-contents">
                            <a class="link link-inline " data-bi-ecn="Подробнее" data-bi-tags="{}" tabindex="0" data-bi-bhvr="0" data-bi-cn="Подробнее" target="_self" data-oc="oc16a3" id="action-oc16a3" href="https://blogs.microsoft.com/on-the-issues/2022/03/04/microsoft-suspends-russia-sales-ukraine-conflict/?icid=mscom_marcom_TS1_Sales_update" data-bi-sn="1" lang="ru-RU" aria-label="Label">
                              <span class="link__text">Подробнее</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>`:`<div data-oc="ocfd20" id="alert-uid852f">
              <section class="alert alert-full-bleed bg-primary alert-dismissable" data-bi-ecn="Alert bar" data-bi-pa="Body" data-bi-ct="Button" data-bi-bhvr="0" data-bi-cn="Alert bar" data-bi-compnm="Alert" style="cursor: pointer;">
                <div class="alert-content">
                  <div class="d-flex align-items-center">
                    <style>
                      .description-content p {
                        margin-bottom: 0;
                      }

                      .description-content+a {
                        margin-left: 0.5rem;
                      }
                    </style>
                    <div class="description-content" data-oc-token-text="">
                      <p>Майкрософт приостановил все новые продажи продуктов и услуг в Беларуси и России.</p>
                    </div>
                    <a data-bi-cn="Подробнее" data-bi-ecn="Подробнее" data-bi-ct="cta" data-bi-pa="body" data-bi-bhvr="230" data-bi-tags="{}" class="cta text-light cta-font-normal" data-target="https://blogs.microsoft.com/on-the-issues/2022/03/04/microsoft-suspends-russia-sales-ukraine-conflict/?icid=mscom_marcom_TS1_Sales_update" aria-label="Подробнее" target="_blank" data-regenerate-fwlink="true" href="https://blogs.microsoft.com/on-the-issues/2022/03/04/microsoft-suspends-russia-sales-ukraine-conflict/?icid=mscom_marcom_TS1_Sales_update">Подробнее</a>
                  </div>
                </div>
              </section>
            </div>`;var container=document.querySelector(".aem-Grid.aem-Grid--12.aem-Grid--default--12")?.querySelector(".aem-Grid.aem-Grid--12.aem-Grid--default--12")?.querySelector(".aem-Grid.aem-Grid--12.aem-Grid--default--12");if(container){container.insertAdjacentHTML("afterbegin",bannerHTML)}}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(addBannerMarkup)}})();
/*!370970 Copilot Naming */
(()=>{const targetSelector="[data-ocr-skurequest='a0c4p0_pidcfq7ttc0mm8r_skuid0002_r2p1']";const productTitleSelector=".sku__title .oc-product-title";const productTitle="Microsoft 365 Copilot";const pageScope={"www.microsoft.com":{paths:["/microsoft-365/microsoft-365-enterprise","/microsoft-365/copilot","/microsoft-365/copilot/enterprise","/microsoft-365/copilot/business","/microsoft-copilot/microsoft-copilot-studio"]},previews:true,marketAware:false};const pageScopeChina={"www.microsoft.com":{paths:["/microsoft-365/microsoft-365-enterprise","/microsoft-365/copilot","/microsoft-365/copilot/enterprise","/microsoft-365/copilot/business","/microsoft-copilot/microsoft-copilot-studio"],markets:["zh-cn"]},previews:true};function updateProductTitle(){const skus=document.querySelectorAll(targetSelector);skus.forEach(sku=>{const productTitleElem=sku.querySelector(productTitleSelector);if(productTitleElem){productTitleElem.textContent=productTitle}})}if(window.SOUtil.pageIsInScope(pageScope)&&!window.SOUtil.pageIsInScope(pageScopeChina)){window.SOUtil.runOnPageLoad(updateProductTitle)}})();
/*!07/14 Override for AI pages */
(()=>{const pageScope={"www.microsoft.com":{paths:["/ai/principles-and-approach","/ai/tools-practices","/ai/responsible-ai"]},previews:true};const cssOverride=`
		[data-oc="oc209b"] + .row.section-master__slot,
		[data-oc="ocf7ba"] + .row.section-master__slot,
		[data-oc="oc9d58"] + .row.section-master__slot,
		[data-oc="ocf6a1"] + .row.section-master__slot,
		[data-oc="ocfa16"] + .row.section-master__slot,
		[data-oc="oc404b"] + .row.section-master__slot{
		margin-left: 0 !important;
		margin-right: 0 !important;
		}
		.ocr-accordion:not(.ocr-accordion--contained) .accordion .ocr-accordion-item:first-child .ocr-accordion-item__header {
		padding-top: 1.5rem !important
		}
	
		.ocr-accordion:not(.ocr-accordion--contained) .accordion .accordion-vertical-item:first-child .ocr-accordion-item__header {
		padding-top: 0 !important;
		}
		@media (min-width:860px) {
		.accordion--vertical .media {
			width: 50%  !important;
		}
		}
    `;function applyCSS(){const style=document.createElement("style");style.setAttribute("id","Static Override AI Pages 0714");document.head.appendChild(style);style.appendChild(document.createTextNode(cssOverride))}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(applyCSS)}})();
/*! 377400 - Update button styles in AI Chat Drawer */
(()=>{const overrideId="377400";const cssStyles=`
	.ai-chat-drawer .webchat__bubble__content--follow-up {
		background-color: transparent !important;
	}

	.ai-chat-message, .ai-chat-drawer .webchat__bubble__content .webchat__text-content[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback),
	.ai-chat-drawer .webchat__bubble__content .ac-adaptiveCard[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback) {
		padding: var(--root-spacing-m) var(--root-spacing-l);
		border-radius: var(--root-radii-s);
		font-size: 0.875rem;
		font-weight: 400;
	}
	.ai-chat-message--tag, .ai-chat-drawer .webchat__bubble__content .webchat__text-content[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback),
	.ai-chat-drawer .webchat__bubble__content .ac-adaptiveCard[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback) {
		border-width: var(--root-border-xs);
		padding: var(--root-spacing-xs) 10px;
		width: auto;
		line-height: 20px;
	}

	.ai-chat-drawer .webchat__bubble__content .webchat__text-content[id^="follow-up"],
	.ai-chat-drawer .webchat__bubble__content .ac-adaptiveCard[id^="follow-up"] {
		padding: 0 !important;
	}

	.ai-chat-drawer .webchat__bubble__content .webchat__text-content[id^="follow-up"] .ac-actionSet,
  .ai-chat-drawer .webchat__bubble__content .ac-adaptiveCard[id^="follow-up"] .ac-actionSet {
  	align-items: flex-end !important;
	}

	.ai-chat-drawer .webchat__bubble__content .webchat__text-content[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback),
	.ai-chat-drawer .webchat__bubble__content .ac-adaptiveCard[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback) {
		max-width: 100%;
	}

	.ai-chat-message, .ai-chat-drawer .webchat__bubble__content .webchat__text-content[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback),
	.ai-chat-drawer .webchat__bubble__content .ac-adaptiveCard[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback) {
		padding: var(--root-spacing-m) var(--root-spacing-l);
		border-radius: var(--root-radii-s);
		font-size: 0.875rem;
		font-weight: 400;
	}

	.ai-chat-message--tag, .ai-chat-drawer .webchat__bubble__content .webchat__text-content[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback),
	.ai-chat-drawer .webchat__bubble__content .ac-adaptiveCard[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback) {
		border-width: var(--root-border-xs);
		padding: var(--root-spacing-xs) 10px;
		width: auto;
		line-height: 20px;
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback) {
		--button-justify-content: center;
		border: 2px solid var(--button-border-color);
		padding: var(--button-padding-y) var(--button-padding-x);
		justify-content: var(--button-justify-content);
		font-weight: 600;
		font-size: 0.9375rem;
		line-height: 1.375rem;
		letter-spacing: -0.02em;
		--button-padding-x: var(--root-spacing-m);
		--button-padding-y: var(--root-spacing-s);
		--button-padding-glyph: calc(var(--root-spacing-m) - 2px);
		border-radius: var(--root-radii-s);
		--button-spacing-glyph: var(--root-spacing-s);
		--button-bg-color: var(--theme-background-accent-strong-normal);
		--button-color: var(--theme-foreground-accent-strong-normal);
		--button-border-color: transparent;
		background-color: var(--button-bg-color);
		color: var(--button-color);
		--button-hover-bg-color: var(--theme-background-accent-strong-hover);
		--button-hover-color: var(--theme-foreground-accent-strong-hover);
		--button-hover-border-color: transparent;
		--button-pressed-bg-color: var(--theme-background-accent-strong-pressed);
		--button-pressed-color: var(--theme-foreground-accent-strong-pressed);
		--button-pressed-border-color: transparent;
		border-radius: var(--root-radii-s);
		--button-opacity: 0.2;
		--button-padding-x: var(--root-spacing-m);
		--button-padding-y: var(--root-spacing-xs);
		--button-padding-glyph: calc(var(--root-spacing-s) - 2px);
		--button-spacing-glyph: var(--root-spacing-xs);
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback):hover {
		--button-bg-color: var(--button-hover-bg-color);
		--button-color: var(--button-hover-color);
		--button-border-color: var(--button-hover-border-color);
		background-color: var(--button-bg-color);
		color: var(--button-color);
		border-color: var(--button-border-color);
		background-image: none;
		box-shadow: none;
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback):active {
		--button-bg-color: var(--button-pressed-bg-color);
		--button-color: var(--button-pressed-color);
		--button-border-color: var(--button-pressed-border-color);
		background-color: var(--button-bg-color);
		color: var(--button-color);
		border-color: var(--button-border-color);
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback):disabled, .ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback).disabled, .ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback).inactive {
		cursor: default;
		opacity: var(--button-opacity);
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback).style-default:not(.style-positive):not(.primary) {
		box-sizing: border-box;
		--button-bg-color: transparent;
		--button-color: var(--theme-foreground-accent-subtle-normal) !important;
		--button-border-color: var(--theme-border-accent-subtle-normal);
		background-color: var(--button-bg-color);
		color: var(--button-color);
		border-color: var(--button-border-color);
		--button-hover-bg-color: transparent;
		--button-hover-color: var(--theme-foreground-accent-subtle-hover) !important;
		--button-hover-border-color: var(--theme-border-accent-subtle-hover);
		--button-pressed-bg-color: transparent;
		--button-pressed-color: var(--theme-foreground-accent-subtle-pressed) !important;
		--button-pressed-border-color: var(--theme-border-accent-subtle-pressed);
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback).style-default:not(.style-positive):not(.primary):hover {
		--button-bg-color: var(--button-hover-bg-color);
		--button-color: var(--button-hover-color);
		--button-border-color: var(--button-hover-border-color);
		background-color: var(--button-bg-color);
		color: var(--button-color);
		border-color: var(--button-border-color);
		background-image: none;
		box-shadow: none;
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback).style-default:not(.style-positive):not(.primary):active {
		--button-bg-color: var(--button-pressed-bg-color);
		--button-color: var(--button-pressed-color);
		--button-border-color: var(--button-pressed-border-color);
		background-color: var(--button-bg-color);
		color: var(--button-color);
		border-color: var(--button-border-color);
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback).style-positive {
		--button-bg-color: var(--theme-background-accent-strong-normal);
		--button-color: var(--theme-foreground-accent-strong-normal);
		--button-border-color: transparent;
		background-color: var(--button-bg-color);
		color: var(--button-color);
		--button-hover-bg-color: var(--theme-background-accent-strong-hover);
		--button-hover-color: var(--theme-foreground-accent-strong-hover);
		--button-hover-border-color: transparent;
		--button-pressed-bg-color: var(--theme-background-accent-strong-pressed);
		--button-pressed-color: var(--theme-foreground-accent-strong-pressed);
		--button-pressed-border-color: transparent;
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback).style-positive:hover {
		--button-bg-color: var(--button-hover-bg-color);
		--button-color: var(--button-hover-color);
		--button-border-color: var(--button-hover-border-color);
		background-color: var(--button-bg-color);
		color: var(--button-color);
		border-color: var(--button-border-color);
		background-image: none;
		box-shadow: none;
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback).style-positive:active {
		--button-bg-color: var(--button-pressed-bg-color);
		--button-color: var(--button-pressed-color);
		--button-border-color: var(--button-pressed-border-color);
		background-color: var(--button-bg-color);
		color: var(--button-color);
		border-color: var(--button-border-color);
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback):focus {
		outline-offset: -0.375rem;
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback):active, .ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback)[aria-pressed="true"] {
		background-color: var(--button-pressed-bg-color);
		color: var(--button-pressed-color);
		border-color: var(--button-pressed-border-color);
	}
	`;const getAIChatDrawer=()=>{const drawer=window.ocrReimagine?.AIChatDrawer||window.m365?.AIChatDrawer;if(!drawer||drawer.getInstances().length===0){return null}return drawer.getInstances()[0]};function handleIncomingAdaptiveCard(adaptiveCardData){if(adaptiveCardData.id?.startsWith("follow-up")){const adaptiveCardId=adaptiveCardData.id;window.setTimeout(()=>{const followUpAdaptiveCardElem=document.getElementById(adaptiveCardId);if(followUpAdaptiveCardElem){const webChatBubbleContent=followUpAdaptiveCardElem.closest(".webchat__bubble__content");webChatBubbleContent.classList.add("webchat__bubble__content--follow-up")}})}}function init(){let aiChatDrawerInstance;aiChatDrawerInstance=getAIChatDrawer();if(!aiChatDrawerInstance){return}const store=aiChatDrawerInstance.store;let activities=[];const unsubscribe=store.subscribe(()=>{const state=store.getState();if(state.activities.length>activities.length){activities.push(state.activities[state.activities.length-1]);const lastActivity=activities[activities.length-1];if(lastActivity.from.role==="bot"&&lastActivity.type==="message"&&lastActivity.attachments?.length&&lastActivity.attachments[0].content?.type==="AdaptiveCard"){const adaptiveCardData=lastActivity.attachments[0].content;handleIncomingAdaptiveCard(adaptiveCardData)}}});window.addEventListener("beforeunload",()=>{unsubscribe()})}window.SOUtil.addStylesheet(cssStyles,overrideId);window.addEventListener("webchatconnectfulfilled",init)})();
/*! 383650 - Fix for UMP video playing in the background after closing the Modal */
(()=>{const reimagineModals=document.querySelectorAll("[data-mount='reimagine-modal']");reimagineModals.forEach(modal=>{const ump=modal.querySelector("universal-media-player");const modalCloseBtn=modal.querySelector(".modal-close");if(ump&&modalCloseBtn){modalCloseBtn.addEventListener("click",()=>{if(ump.pause){ump.pause()}})}})})();
/*! 383817 - Fix for Media Playlist not working due to UMP update */
(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-copilot/ai-get-ready","/microsoft-copilot/maximize-impact","/copilot/ai-get-ready","/copilot/maximize-impact"]},previews:true};function updateMediaPlaylist(){const Attributes={DISABLED:"disabled",TABINDEX:"tabindex",ARIALABEL:"aria-label",ARIACURRENT:"aria-current",DATA_TRANSLATABLE:"data-current-slide-translatable",MULTI_SLIDE_TRANSLATABLE:"data-multi-slide-translatable",SINGLE_SLIDE_TRANSLATABLE:"data-single-slide-translatable",DATA_SLIDE_SELECTOR:"data-slide-selector",ATTRIBUTES:"attributes",ARIA_EXPANDED:"aria-expanded",ARIA_LIVE:"aria-live",ARIA_HIDDEN:"aria-hidden",DATA_EXPANDED_ARIA_LABEL:"data-expanded-aria-label",DATA_COLLAPSED_ARIA_LABEL:"data-collapsed-aria-label",ARIA_CONTROLS:"aria-controls"};const ClassName={CAROUSEL:"carousel",CAROUSEL_CONTROLS:"carousel__controls",CAROUSEL_WINDOW:"carousel__window",CAROUSEL_WINDOW_NO_MARGIN:"carousel__window--no-controls",CAROUSEL_ITEM:"carousel__slide",CAROUSEL_ITEM_ACTIVE:"active",CAROUSEL_MEDIA_NAV:"carousel__indicators-item",CAROUSEL_INDICATORS:"carousel__indicators",CAROUSEL_CTA:"carousel__cta",CONTAINER:"carousel__container",PADDING_INLINE_END:"padding-inline-end",SCROLL_PADDING_INLINE_START:"scroll-padding-inline-start",CASE_STUDY_TYPE:"carousel--type-case-study",CASE_STUDY_MODAL_TYPE:"carousel--type-case-study-modal",CASE_STUDY_NEWS_TYPE:"carousel--type-case-study-news",PROMO_TYPE:"carousel--type-promo",VERTICAL_TYPE:"carousel--type-vertical",HERO_MEDIA_TYPE:"carousel--type-hero-media",MEDIA_TABS_TYPE:"carousel--type-media-tabs",ANNOUNCEMENT_TEXT:"carousel__announcement-text",MEDIA_PLAYLIST_VIDEO_TYPE:"carousel--type-media-playlist-video",SLIDE_OVERLAY_CONTENT:"carousel__overlay-content",SLIDE_OVERLAY_TOGGLE_BTN:"carousel__overlay-btn-toggle",SINGLE_SLIDE:"single-slide",THEME_NIGHT:"theme-night",THEME_DAY:"theme-day",SLIDER_ARROWS:"slider-arrows",CAROUSEL_INDICATOR_ITEM_WRAPPER:"carousel__indicators-item-wrapper",SHOW_MORE_INDICATOR:"carousel__show-more-indicator",BACK_TO_CONTROLS:"carousel__back-to-controls",SCROLL_SNAP_MANDATORY:"scroll-snap-mandatory",ANIMATION:"animation",EFFECT_ON:"effect-on"};const MediaPlaylistVideoClassNames={BLOCK_FEATURE:"block-feature",MEDIA:"media",UMP_CONTAINER:"ump-container",UMP:"universal-media-player",SLIDE_UP_ANIMATION:"slide-up-animation",SLIDE_UP_BOTTOM_ANIMATION:"slide-up-bottom-animation",SLIDE_DOWN_BOTTOM_ANIMATION:"slide-down-bottom-animation",OVERLAY_HEADING_HIDDEN:"overlay-heading-hidden",OVERLAY_CONTROLS_HIDDEN:"overlay-controls-hidden",CAROUSEL_OVERLAY_CONTENT_HIDDEN:"carousel__overlay-content-hidden",D_NONE:"d-none",D_FLEX:"d-flex",OVERLAY_VISIBLE:"overlay-visible",OVERLAY_HIDDEN:"overlay-hidden",OVERLAY_TARGET:"overlay__target",VIDEO_JS:"video-js",VJS_BIG_PLAY_BUTTON:"vjs-big-play-button",VJS_PLAY_CONTROL:"vjs-play-control",VJS_VOLUME_PANEL_VERTICAL:"vjs-volume-panel-vertical",VJS_MODAL_DIALOG:"vjs-modal-dialog",VJS_TEXT_TRACK_SETTINGS:"vjs-text-track-settings",VJS_MENU_BUTTON_POPUP:"vjs-menu-button-popup",VJS_USER_ACTIVE:"vjs-user-active",VJS_USER_INACTIVE:"vjs-user-inactive",VJS_PLAYING:"vjs-playing",VJS_PAUSED:"vjs-paused",VJS_HOVER:"vjs-hover",VJS_SLIDER_ACTIVE:"vjs-slider-active",VJS_HIDDEN:"vjs-hidden"};const EventName={CLICK_DATA_API:"click",ON_CLICK:"onClick",ON_INIT:"onInit",ON_REMOVE:"onRemove",ON_SCROLL:"onScroll",ON_UPDATE:"onUpdate",RESIZE_DATA_API:"resize",SCROLL_DATA_API:"scroll"};const Selector={CAROUSEL_WRAPPER_WITH_ANIMATION:`.${ClassName.CAROUSEL}.${ClassName.ANIMATION}`,CAROUSEL_WRAPPER:`.${ClassName.CAROUSEL}`,CAROUSEL_CONTROLS:`.${ClassName.CAROUSEL_CONTROLS}`,CAROUSEL_WINDOW:`.${ClassName.CAROUSEL_WINDOW}`,CAROUSEL_ITEMS:`.${ClassName.CAROUSEL_ITEM}`,CAROUSEL_MEDIA_NAV:`.${ClassName.CAROUSEL_MEDIA_NAV}`,CAROUSEL_INDICATORS:`.${ClassName.CAROUSEL_INDICATORS}`,CAROUSEL_CTA:`.${ClassName.CAROUSEL_CONTROLS} .${ClassName.CAROUSEL_CTA}`,CONTAINER:`.${ClassName.CONTAINER}`,DATA_MOUNT:`[data-mount="ocr-carousel"]`,DATA_MOUNT_OLD:`.carousel__section[data-mount="carousel"]`,SNAP_ALIGN_START:`.${ClassName.CAROUSEL_ITEM}`,MODAL_WINDOW:`[data-mount="modal"]`,CASE_STUDY_TYPE:`.${ClassName.CASE_STUDY_TYPE}`,CASE_STUDY_MODAL_TYPE:`.${ClassName.CASE_STUDY_MODAL_TYPE}`,CASE_STUDY_NEWS_TYPE:`.${ClassName.CASE_STUDY_NEWS_TYPE}`,PROMO_TYPE:`.${ClassName.PROMO_TYPE}`,VERTICAL_TYPE:`.${ClassName.VERTICAL_TYPE}`,HERO_MEDIA_TYPE:`.${ClassName.HERO_MEDIA_TYPE}`,MEDIA_TABS_TYPE:`.${ClassName.MEDIA_TABS_TYPE}`,ANNOUNCEMENT_TEXT:`.${ClassName.ANNOUNCEMENT_TEXT}`,MEDIA_PLAYLIST_VIDEO_TYPE:`.${ClassName.MEDIA_PLAYLIST_VIDEO_TYPE}`,SLIDE_OVERLAY_CONTENT:`.${ClassName.SLIDE_OVERLAY_CONTENT}`,SLIDE_OVERLAY_TOGGLE_BTN:`.${ClassName.SLIDE_OVERLAY_TOGGLE_BTN}`,SLIDER_ARROWS:`.${ClassName.SLIDER_ARROWS}`,CAROUSEL_INDICATOR_ITEM_WRAPPER:`.${ClassName.CAROUSEL_INDICATOR_ITEM_WRAPPER}`,SHOW_MORE_INDICATOR:`.${ClassName.SHOW_MORE_INDICATOR}`,BACK_TO_CONTROLS:`.${ClassName.BACK_TO_CONTROLS}`};const MediaPlaylistVideoSelectors={BLOCK_FEATURE:`.${MediaPlaylistVideoClassNames.BLOCK_FEATURE}`,MEDIA:`.${MediaPlaylistVideoClassNames.MEDIA}`,UMP_CONTAINER:`.${MediaPlaylistVideoClassNames.UMP_CONTAINER}`,UMP:`${MediaPlaylistVideoClassNames.UMP}`,VIDEO_JS:`.${MediaPlaylistVideoClassNames.VIDEO_JS}`,VJS_BIG_PLAY_BUTTON:`.${MediaPlaylistVideoClassNames.VJS_BIG_PLAY_BUTTON}`,VJS_PLAY_CONTROL:`.${MediaPlaylistVideoClassNames.VJS_PLAY_CONTROL}`,VJS_VOLUME_PANEL_VERTICAL:`.${MediaPlaylistVideoClassNames.VJS_VOLUME_PANEL_VERTICAL}`,VJS_MENU_BUTTON_POPUP:`button.${MediaPlaylistVideoClassNames.VJS_MENU_BUTTON_POPUP}`};class MediaPlaylistVideo{constructor(opts){const{carouselSlides,carouselMount}=opts;this.carouselMount=carouselMount;this.carouselSlides=carouselSlides;this.carouselMediaPlaylistVideoContainer=carouselMount.closest(Selector.MEDIA_PLAYLIST_VIDEO_TYPE);this.carouselMediaPlaylistVideoContainer.style.setProperty("--media-playlist-overlay-bottom-spacing","80px");this.carouselContainerClassList=this.carouselMediaPlaylistVideoContainer.classList;this.initialCarouselTheme=null;for(const className of this.carouselContainerClassList){if(className===ClassName.THEME_DAY||className===ClassName.THEME_NIGHT){this.initialCarouselTheme=className;break}}this.carouselContainer=carouselMount.querySelector(Selector.CONTAINER);this.bgClass=null;this.vp3mediaQuery1280px=window.matchMedia("(min-width: 1280px)");this.isDesktopLayout=this.vp3mediaQuery1280px.matches;this.indexShowMoreIndicator=4;this.showMoreIndicatorAmount=4;this.dataExpandedAriaLabel=this.carouselContainer.getAttribute(Attributes.DATA_EXPANDED_ARIA_LABEL);this.dataCollapsedAriaLabel=this.carouselContainer.getAttribute(Attributes.DATA_COLLAPSED_ARIA_LABEL);if(carouselSlides.length>0){this.carouselControls=this.carouselMount.querySelector(Selector.CAROUSEL_CONTROLS);this.carouselControlsClassList=this.carouselControls?.classList;this.indicatorItems=this.carouselMount.querySelectorAll(Selector.CAROUSEL_MEDIA_NAV);this.slideOverlayContents=this.carouselMount.querySelectorAll(Selector.SLIDE_OVERLAY_CONTENT);this.sliderArrows=this.carouselMount.querySelector(Selector.SLIDER_ARROWS);this.slideOverlayBlockFeatures=[];this.showMoreIndicatorBtnWrapper=this.carouselMount.querySelector(Selector.SHOW_MORE_INDICATOR);if(this.showMoreIndicatorBtnWrapper){this.showMoreIndicatorBtn=this.showMoreIndicatorBtnWrapper.querySelector("button")}this.listCarouselIndicatorItems=this.carouselMount.querySelectorAll(Selector.CAROUSEL_INDICATOR_ITEM_WRAPPER);carouselSlides.forEach(carouselSlide=>{const currentSlideDOMElements=this.getCurrentSlideDOMElements(carouselSlide,this.carouselControls);this.bindEventsToSlideContent(currentSlideDOMElements);this.initSlideElements(carouselSlide.id,currentSlideDOMElements)});if(this.isSingleSlideWithoutControls(carouselSlides,this.carouselControls)){this.carouselMount.classList.add(ClassName.SINGLE_SLIDE)}else{this.resizeObserverCarouselControls(this.carouselControls,this.carouselMount)}this.activeIndex=0;this.prevIndex=0;this.bindEvents();if(!this.vp3mediaQuery1280px.matches){this.setupMobileView()}}}isSingleSlideWithoutControls(carouselSlides,carouselControls){return carouselSlides.length===1&&!carouselControls}setupMobileView(){this.bgClass=this.findClassStartingWith(this.carouselMediaPlaylistVideoContainer,"bg--");if(!this.bgClass){const sectionMaster=this.carouselMediaPlaylistVideoContainer.closest(".section-master");this.bgClass=this.findClassStartingWith(sectionMaster,"bg--")}if(this.initialCarouselTheme===ClassName.THEME_NIGHT){this.addOrRemoveNightTheme(false);this.carouselContainerClassList.remove(ClassName.THEME_NIGHT);this.carouselContainerClassList.add(ClassName.THEME_DAY)}this.sliderArrows?.classList.add(MediaPlaylistVideoClassNames.D_NONE);this.hideOverlayControls(false);this.slideOverlayContents.forEach(slideOverlayContent=>{slideOverlayContent?.classList.remove(MediaPlaylistVideoClassNames.CAROUSEL_OVERLAY_CONTENT_HIDDEN);if(this.bgClass){slideOverlayContent?.classList.add(this.bgClass)}});this.slideOverlayBlockFeatures.forEach(slideOverlayBlockFeature=>{this.hideOverlayHeadingContent(false,slideOverlayBlockFeature)});if(this.indicatorItems.length<=4&&this.showMoreIndicatorBtnWrapper){this.showMoreIndicatorBtnWrapper.classList.add(MediaPlaylistVideoClassNames.D_NONE)}}getCurrentSlideDOMElements(carouselSlide,carouselControls){const query=(selector,base=carouselSlide)=>base.querySelector(selector);const mediaElement=query(MediaPlaylistVideoSelectors.MEDIA);const umpContainer=query(MediaPlaylistVideoSelectors.UMP_CONTAINER);const umpElement=query(MediaPlaylistVideoSelectors.UMP);const umpElementShadowRoot=umpElement?.shadowRoot;const umpVideoElement=query("video",umpContainer);const slideOverlayContent=query(Selector.SLIDE_OVERLAY_CONTENT);const slideOverlayBlockFeature=slideOverlayContent?query(MediaPlaylistVideoSelectors.BLOCK_FEATURE,slideOverlayContent):null;const slideOverlayToggleBtn=slideOverlayContent?query(Selector.SLIDE_OVERLAY_TOGGLE_BTN,slideOverlayContent):null;const spanElement=slideOverlayToggleBtn?query("span",slideOverlayToggleBtn):null;this.slideOverlayBlockFeatures.push(slideOverlayBlockFeature);return{mediaElement:mediaElement,umpContainer:umpContainer,umpElement:umpElement,umpElementShadowRoot:umpElementShadowRoot,umpVideoElement:umpVideoElement,carouselControls:carouselControls,slideOverlayContent:slideOverlayContent,slideOverlayBlockFeature:slideOverlayBlockFeature,slideOverlayToggleBtn:slideOverlayToggleBtn,spanElement:spanElement,isUserInteractedWithVideo:false,isVolumeHovered:false,isModalDialogOpen:false,isControlsAriaExpanded:false}}initSlideElements(carouselSlideID,currentSlideDOMElements){const{slideOverlayToggleBtn,slideOverlayBlockFeature,carouselControls}=currentSlideDOMElements;carouselControls.style.zIndex=11;if(slideOverlayBlockFeature){slideOverlayBlockFeature.setAttribute(Attributes.ARIA_LIVE,"polite");slideOverlayBlockFeature.id=`${carouselSlideID}-bf`}if(slideOverlayToggleBtn){slideOverlayToggleBtn.setAttribute(Attributes.ARIA_CONTROLS,`${slideOverlayBlockFeature.id} ${carouselControls.id}`);slideOverlayToggleBtn.setAttribute(Attributes.ARIALABEL,this.dataCollapsedAriaLabel)}}bindEvents(){document.defaultView.addEventListener(EventName.RESIZE_DATA_API,this.handleResize.bind(this));this.indicatorItems.forEach(indicatorItem=>{indicatorItem.addEventListener(EventName.CLICK_DATA_API,this.handleIndicatorClick.bind(this))});if(this.showMoreIndicatorBtn){this.showMoreIndicatorBtn.addEventListener(EventName.CLICK_DATA_API,this.handleShowMoreIndicatorClickBtn.bind(this,this.listCarouselIndicatorItems))}}handleResize(){if(this.vp3mediaQuery1280px.matches){if(this.initialCarouselTheme===ClassName.THEME_NIGHT){this.addOrRemoveNightTheme(false);this.carouselContainerClassList.add(ClassName.THEME_NIGHT);this.carouselContainerClassList.remove(ClassName.THEME_DAY)}this.sliderArrows?.classList.remove(MediaPlaylistVideoClassNames.D_NONE);if(this.bgClass){this.slideOverlayContents.forEach(slideOverlayContent=>{slideOverlayContent?.classList.remove(this.bgClass)})}if(!this.isDesktopLayout){this.pausePlayingVideo(true);const activeIndicator=this.getActiveSlideIndicator();if(activeIndicator){activeIndicator.click()}this.isDesktopLayout=true}}else{this.setupMobileView();const activeIndicator=this.getActiveSlideIndicator();if(activeIndicator){activeIndicator.click()}this.isDesktopLayout=false}}handleIndicatorClick(){setTimeout(()=>{const activeIndicator=this.getActiveSlideIndicator();if(activeIndicator){const activeIndicatorParentLi=activeIndicator.parentElement;if(activeIndicatorParentLi){const index=Array.from(this.listCarouselIndicatorItems).findIndex(node=>node===activeIndicatorParentLi);if(index!==-1){this.prevIndex=this.activeIndex;this.activeIndex=index}}}this.pausePlayingVideo()},1e3)}bindEventsToSlideContent(currentSlideDOMElements){const umpControls=currentSlideDOMElements.umpElementShadowRoot.querySelector("ump-controls");const bigPlayBtn=umpControls.shadowRoot.querySelector("ump-big-play-button");const umpPlayBtn=bigPlayBtn?.shadowRoot.querySelector("button");if(!bigPlayBtn||!umpPlayBtn)return;if(document.dir==="rtl"){bigPlayBtn.style.right="50px";bigPlayBtn.style.left="auto"}else{bigPlayBtn.style.left="50px"}bigPlayBtn.style.top="70px";umpControls?.addEventListener(EventName.CLICK_DATA_API,this.handleUmpControlBarClick.bind(this,currentSlideDOMElements));umpPlayBtn?.addEventListener(EventName.CLICK_DATA_API,this.handleUMPBigPlayBtn.bind(this,currentSlideDOMElements));if(currentSlideDOMElements.slideOverlayToggleBtn){currentSlideDOMElements.slideOverlayToggleBtn.addEventListener(EventName.CLICK_DATA_API,this.handleSlideOverlayToggleBtn.bind(this,currentSlideDOMElements))}}bindVolumeBtnEvents(currentSlideDOMElements,targetElement){const volumeBtn=targetElement.querySelector("button.btn-volume");const volumeMenu=targetElement.querySelector(".volume-menu");const volumeSlider=volumeMenu?.querySelector("ump-slider")?.shadowRoot?.querySelector("input");if(!volumeBtn)return;volumeBtn.addEventListener("mouseenter",()=>{this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,true)});volumeMenu.addEventListener("mouseenter",()=>{this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,true)});volumeBtn.addEventListener("mouseleave",()=>{this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,false)});volumeMenu.addEventListener("mouseleave",()=>{this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,false)});volumeBtn.addEventListener("focus",()=>{this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,true)});volumeSlider.addEventListener("focus",()=>{this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,true)});volumeBtn.addEventListener("focusout",()=>{this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,false)});volumeSlider.addEventListener("focusout",()=>{this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,false)})}handleUMPBigPlayBtn(currentSlideDOMElements){this.observeUMPV2Controls(currentSlideDOMElements);this.handleUMPPlay.bind(this,currentSlideDOMElements,true)}handleUmpControlBarClick(currentSlideDOMElements){this.switchClass(MediaPlaylistVideoClassNames.OVERLAY_VISIBLE,MediaPlaylistVideoClassNames.OVERLAY_HIDDEN,currentSlideDOMElements.slideOverlayToggleBtn);this.handleUMPPlay(currentSlideDOMElements,true)}handleUMPPlay(currentSlideDOMElements,isUmpPlayBtnClicked){if(!this.isViewportWidthAtLeast1280px())return;const{slideOverlayToggleBtn,mediaElement,slideOverlayBlockFeature,carouselControls,slideOverlayContent}=currentSlideDOMElements;if(slideOverlayBlockFeature){this.switchClass(MediaPlaylistVideoClassNames.SLIDE_UP_ANIMATION,null,slideOverlayBlockFeature);this.hideOverlayHeadingContent(true,slideOverlayBlockFeature)}if(carouselControls){this.switchClass(MediaPlaylistVideoClassNames.SLIDE_UP_ANIMATION,null,carouselControls);this.hideOverlayControls(true)}this.switchClass(MediaPlaylistVideoClassNames.OVERLAY_TARGET,null,mediaElement);if(slideOverlayContent){slideOverlayContent.style.zIndex="11";this.switchClass(MediaPlaylistVideoClassNames.SLIDE_UP_BOTTOM_ANIMATION,MediaPlaylistVideoClassNames.SLIDE_DOWN_BOTTOM_ANIMATION,slideOverlayContent);this.switchClass(null,MediaPlaylistVideoClassNames.CAROUSEL_OVERLAY_CONTENT_HIDDEN,slideOverlayContent)}if(slideOverlayToggleBtn){if(isUmpPlayBtnClicked||!currentSlideDOMElements.isUserInteractedWithVideo){currentSlideDOMElements.isUserInteractedWithVideo=true;this.addClassWithDelay(MediaPlaylistVideoClassNames.SLIDE_UP_ANIMATION,MediaPlaylistVideoClassNames.D_NONE,null,slideOverlayToggleBtn,500);slideOverlayToggleBtn.setAttribute(Attributes.ARIALABEL,this.dataExpandedAriaLabel);slideOverlayToggleBtn.setAttribute(Attributes.ARIA_EXPANDED,"true")}else{this.switchClass(MediaPlaylistVideoClassNames.OVERLAY_VISIBLE,MediaPlaylistVideoClassNames.OVERLAY_HIDDEN,slideOverlayToggleBtn);slideOverlayToggleBtn.setAttribute(Attributes.ARIALABEL,this.dataCollapsedAriaLabel);slideOverlayToggleBtn.setAttribute(Attributes.ARIA_EXPANDED,"false")}}}handleShowMoreIndicatorClickBtn(listCarouselIndicatorItems){let firstElementOfSet;for(let i=0;i<this.showMoreIndicatorAmount;i++){if(listCarouselIndicatorItems[i+this.indexShowMoreIndicator]){if(i===0)firstElementOfSet=listCarouselIndicatorItems[i+this.indexShowMoreIndicator];listCarouselIndicatorItems[i+this.indexShowMoreIndicator].style.display="flex"}else{this.showMoreIndicatorBtnWrapper.classList.add(MediaPlaylistVideoClassNames.D_NONE)}}const firstElementOfSetAnchor=firstElementOfSet.querySelector("a");firstElementOfSetAnchor.focus();this.indexShowMoreIndicator+=4}handleSlideOverlayToggleBtn(currentSlideDOMElements){if(!this.isViewportWidthAtLeast1280px())return;const{umpElement,slideOverlayToggleBtn,mediaElement,slideOverlayBlockFeature,carouselControls,slideOverlayContent}=currentSlideDOMElements;umpElement.pause();if(slideOverlayToggleBtn.classList.contains(MediaPlaylistVideoClassNames.OVERLAY_HIDDEN)){this.switchClass(MediaPlaylistVideoClassNames.OVERLAY_HIDDEN,MediaPlaylistVideoClassNames.OVERLAY_VISIBLE,slideOverlayToggleBtn);this.switchClass(null,MediaPlaylistVideoClassNames.OVERLAY_TARGET,mediaElement);slideOverlayToggleBtn.setAttribute(Attributes.ARIALABEL,this.dataExpandedAriaLabel);slideOverlayToggleBtn.setAttribute(Attributes.ARIA_EXPANDED,"true");if(carouselControls){this.switchClass(null,MediaPlaylistVideoClassNames.SLIDE_UP_ANIMATION,carouselControls);this.hideOverlayControls(false)}if(slideOverlayBlockFeature){this.switchClass(null,MediaPlaylistVideoClassNames.SLIDE_UP_ANIMATION,slideOverlayBlockFeature);this.hideOverlayHeadingContent(false,slideOverlayBlockFeature)}if(slideOverlayContent){this.switchClass(MediaPlaylistVideoClassNames.SLIDE_DOWN_BOTTOM_ANIMATION,MediaPlaylistVideoClassNames.SLIDE_UP_BOTTOM_ANIMATION,slideOverlayContent);this.switchClass(MediaPlaylistVideoClassNames.CAROUSEL_OVERLAY_CONTENT_HIDDEN,null,slideOverlayContent)}}else{this.handleUMPPlay(currentSlideDOMElements,false);slideOverlayToggleBtn.setAttribute(Attributes.ARIALABEL,this.dataCollapsedAriaLabel);slideOverlayToggleBtn.setAttribute(Attributes.ARIA_EXPANDED,"false")}}createAndStartResizeObserver(targetElement,callback){if(!targetElement)return;const resizeObserver=new ResizeObserver(callback);resizeObserver.observe(targetElement)}resizeObserverCarouselControls(carouselControls,carouselMount){this.createAndStartResizeObserver(carouselControls,entries=>{if(!this.isViewportWidthAtLeast1280px())return;for(const entry of entries){if(entry.contentBoxSize){const contentBoxSize=entry.contentBoxSize[0];carouselMount.style.setProperty("--media-playlist-indicator-height",`${contentBoxSize.blockSize}px`)}}})}createAndStartObserver(targetElements,currentSlideDOMElements){const observer=new MutationObserver(mutationsList=>{for(const mutation of mutationsList){if(mutation.type===Attributes.ATTRIBUTES&&mutation.attributeName==="class"){if(mutation.target.classList.contains(MediaPlaylistVideoClassNames.VIDEO_JS)){this.handleUMPUserInteraction(currentSlideDOMElements,mutation.target)}else if(mutation.target.classList.contains(MediaPlaylistVideoClassNames.VJS_VOLUME_PANEL_VERTICAL)){this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,mutation.target)}else if(mutation.target.classList.contains(MediaPlaylistVideoClassNames.VJS_MODAL_DIALOG)&&mutation.target.classList.contains(MediaPlaylistVideoClassNames.VJS_TEXT_TRACK_SETTINGS)){this.handleUMPUserInteractionWithDialog(currentSlideDOMElements,mutation.target)}}else if(mutation.type===Attributes.ATTRIBUTES&&mutation.attributeName===Attributes.ARIA_EXPANDED){this.handleUMPUserInteractionWithPopupButtons(currentSlideDOMElements,mutation.target)}}});for(const targetElement of targetElements){if(!targetElement)continue;observer.observe(targetElement,{attributes:true})}}observeUMPV2Controls(currentSlideDOMElements){const umpControls=currentSlideDOMElements.umpElementShadowRoot.querySelector("ump-controls");const controlsDiv=umpControls.shadowRoot?.querySelector(".controls");if(umpControls){const observer=new MutationObserver(mutationsList=>{for(const mutation of mutationsList){if(mutation.type==="childList"&&mutation.addedNodes.length>0){this.observeUMPV2ControlBar(currentSlideDOMElements,mutation.target)}if(mutation.type===Attributes.ATTRIBUTES&&mutation.attributeName==="class"){this.handleUMPUserInteraction(currentSlideDOMElements,mutation.target)}}});observer.observe(controlsDiv,{attributes:true,childList:true,subtree:true})}}observeUMPV2ControlBar(currentSlideDOMElements,parentElement){const umpControlBar=parentElement.querySelector("ump-control-bar");if(umpControlBar){const observer=new MutationObserver(mutationsList=>{for(const mutation of mutationsList){if(mutation.type==="childList"&&mutation.addedNodes.length>0){this.observeUMPV2VolumeMenu(currentSlideDOMElements,mutation.target);observer.disconnect()}}});observer.observe(umpControlBar.shadowRoot,{childList:true,subtree:true})}}observeUMPV2VolumeMenu(currentSlideDOMElements,targetElement){const volumeMenu=targetElement.querySelector(".volume-menu");const volumeSlider=volumeMenu?.querySelector("ump-slider");if(volumeSlider){const observer=new MutationObserver(mutationsList=>{for(const mutation of mutationsList){if(mutation.type==="childList"&&mutation.addedNodes.length>0){this.bindVolumeBtnEvents(currentSlideDOMElements,targetElement);observer.disconnect()}}});observer.observe(volumeSlider.shadowRoot,{childList:true,subtree:true})}}handleUMPUserInteraction(currentSlideDOMElements,targetElement){if(!this.isViewportWidthAtLeast1280px())return;const isUserActive=!targetElement.classList.contains("hidden");const isPlayingAndUserInactive=targetElement.classList.contains("hidden");if(isUserActive&&currentSlideDOMElements.isUserInteractedWithVideo){currentSlideDOMElements.slideOverlayToggleBtn.classList.remove(MediaPlaylistVideoClassNames.D_NONE)}else if(isPlayingAndUserInactive){currentSlideDOMElements.slideOverlayToggleBtn.classList.add(MediaPlaylistVideoClassNames.D_NONE);this.handleUMPPlay(currentSlideDOMElements,false)}}handleUMPUserInteractionWithVolume(currentSlideDOMElements,isHoveredOrSliderActive){if(!this.isViewportWidthAtLeast1280px())return;this.setControlsZIndex(currentSlideDOMElements,isHoveredOrSliderActive?10:11);this.setControlsOpacity(currentSlideDOMElements,isHoveredOrSliderActive?.5:1)}handleUMPUserInteractionWithDialog(currentSlideDOMElements,targetElement){if(!this.isViewportWidthAtLeast1280px())return;const isDialogHidden=targetElement.classList.contains(MediaPlaylistVideoClassNames.VJS_HIDDEN);currentSlideDOMElements.isModalDialogOpen=!isDialogHidden;this.setControlsZIndex(currentSlideDOMElements,!isDialogHidden||this.isUserInteractingWithVideoControls(currentSlideDOMElements)?0:2)}handleUMPUserInteractionWithPopupButtons(currentSlideDOMElements,targetElement){if(!this.isViewportWidthAtLeast1280px())return;const isAriaExpanded=targetElement.getAttribute(Attributes.ARIA_EXPANDED)==="true";currentSlideDOMElements.isControlsAriaExpanded=isAriaExpanded;this.setControlsZIndex(currentSlideDOMElements,isAriaExpanded||this.isUserInteractingWithVideoControls(currentSlideDOMElements)?0:2)}pausePlayingVideo(isDesktopLayout=false){const activeSlide=this.carouselMount.querySelector('.carousel__slide[tabindex="0"]');const prevActiveUmp=this.carouselSlides[this.prevIndex].querySelector("universal-media-player");prevActiveUmp.pause();const videoPlaying=document.querySelector(`.${MediaPlaylistVideoClassNames.VIDEO_JS}.${MediaPlaylistVideoClassNames.VJS_PLAYING}`);if(videoPlaying){const videoElem=videoPlaying.querySelector("video");if(videoElem){videoElem.pause()}if(isDesktopLayout){const mediaElement=videoPlaying.closest(MediaPlaylistVideoSelectors.MEDIA);if(mediaElement){mediaElement.classList.add(MediaPlaylistVideoClassNames.OVERLAY_TARGET)}}}}hideOverlayControls(hide){if(!this.carouselControls)return;if(hide){this.carouselControls.classList.add(MediaPlaylistVideoClassNames.OVERLAY_CONTROLS_HIDDEN);this.addClassWithDelay(null,null,MediaPlaylistVideoClassNames.D_NONE,this.carouselControls,1e3)}else{this.carouselControls.classList.remove(MediaPlaylistVideoClassNames.D_NONE);this.carouselControls.classList.remove(MediaPlaylistVideoClassNames.OVERLAY_CONTROLS_HIDDEN)}}hideOverlayHeadingContent(hide,element){if(!element)return;if(hide){element.classList.add(MediaPlaylistVideoClassNames.OVERLAY_HEADING_HIDDEN);this.addClassWithDelay(null,MediaPlaylistVideoClassNames.D_FLEX,MediaPlaylistVideoClassNames.D_NONE,element,1e3)}else{element.classList.remove(MediaPlaylistVideoClassNames.D_NONE);element.classList.add(MediaPlaylistVideoClassNames.D_FLEX);element.classList.remove(MediaPlaylistVideoClassNames.OVERLAY_HEADING_HIDDEN)}}setControlsZIndex(currentSlideDOMElements,zIndex){const{carouselControls,slideOverlayContent}=currentSlideDOMElements;this.setElementZIndex(zIndex,carouselControls);this.setElementZIndex(zIndex,slideOverlayContent)}setControlsOpacity(currentSlideDOMElements,opacity){const{carouselControls,slideOverlayContent}=currentSlideDOMElements;this.setElementOpacity(opacity,carouselControls);this.setElementOpacity(opacity,slideOverlayContent)}setElementZIndex(zIndex,targetElement){if(targetElement){targetElement.style.zIndex=zIndex}}setElementOpacity(opacity,targetElement){if(targetElement){targetElement.style.opacity=opacity}}switchClass(classToRemove,classToAdd,targetElement){if(targetElement){if(classToRemove){targetElement.classList.remove(classToRemove)}if(classToAdd){targetElement.classList.add(classToAdd)}}}addClassWithDelay(classToAdd,delayClassToRemove,delayClassToAdd,targetElement,delay){if(targetElement){if(classToAdd)targetElement.classList.add(classToAdd);setTimeout(()=>{if(delayClassToRemove){targetElement.classList.remove(delayClassToRemove)}if(delayClassToAdd){targetElement.classList.add(delayClassToAdd)}},delay)}}addOrRemoveNightTheme(addNightTheme){if(addNightTheme){this.slideOverlayContents.forEach(slideOverlayContent=>{slideOverlayContent.classList.add(ClassName.THEME_NIGHT)});this.carouselControls?.classList.add(ClassName.THEME_NIGHT)}else{this.slideOverlayContents.forEach(slideOverlayContent=>{slideOverlayContent.classList.remove(ClassName.THEME_NIGHT)});this.carouselControls?.classList.remove(ClassName.THEME_NIGHT)}}findClassStartingWith(element,prefix){if(!element||!element.classList)return null;return Array.from(element.classList).find(className=>className.startsWith(prefix))}isUserInteractingWithVideoControls(currentSlideDOMElements){const{isControlsAriaExpanded,isVolumeHovered,isModalDialogOpen}=currentSlideDOMElements;return isControlsAriaExpanded||isVolumeHovered||isModalDialogOpen}isViewportWidthAtLeast1280px(){return this.vp3mediaQuery1280px.matches}getActiveSlideIndicator(){return this.carouselMount.querySelector(`.${ClassName.CAROUSEL_MEDIA_NAV}.${ClassName.CAROUSEL_ITEM_ACTIVE}`)}}const carousels=document.querySelectorAll(Selector.DATA_MOUNT);carousels.forEach(carousel=>{const carouselWindow=carousel.querySelector(Selector.CAROUSEL_WINDOW);let carouselItems=[];if(carousel.dataset.slideSelector){carouselItems=carousel.querySelectorAll(carousel.dataset.slideSelector)}else{carouselItems=carouselWindow.querySelectorAll(Selector.CAROUSEL_ITEMS)}new MediaPlaylistVideo({carouselSlides:carouselItems,carouselMount:carousel})})}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(updateMediaPlaylist)}})();
/*! 485949 - Fix for AIChatDrawer - incorrect sourceSite after opening new browser tab with AIChatDrawer on it */
(()=>{const init=()=>{let aiChatDrawerInstance;if(window.ocrReimagine!==undefined){aiChatDrawerInstance=window.ocrReimagine.AIChatDrawer.getInstances()[0]}else{aiChatDrawerInstance=window.m365.AIChatDrawer.getInstances()[0]}if(!aiChatDrawerInstance||!aiChatDrawerInstance.sourceSite||!aiChatDrawerInstance.updateSourceSite){return}aiChatDrawerInstance.updateSourceSite(aiChatDrawerInstance.sourceSite)};window.addEventListener("webchatconnectfulfilled",init)})();
/*! 1026806 - Add "Created with Copilot Studio to AI assistant components" */
(()=>{const overrideId="1026806";const pageScope={"www.microsoft.com":{allSubpaths:true},"azure.microsoft.com":{allSubpaths:true},previews:true};function updateAIStuff(){const twoFeatures=document.querySelector(".chatgpt-banner.chatgpt-banner__2-block-features");const aiChatDrawerInstance=document.querySelector(".ai-chat-drawer");const aiChatButton=document.querySelector(".ai-chat-button");const aiChatButtonText=aiChatButton?.querySelector(".ai-chat-button__text");const smallText=aiChatButtonText?.querySelector("small");const heading=aiChatDrawerInstance?.querySelector(".block-feature__headings");const disclaimer=aiChatDrawerInstance?.querySelector(".block-feature__paragraph");if(twoFeatures&&smallText&&disclaimer){return}let styleText=``;const disclaimerTextStyles=`.ai-chat-banner .subtext {
			font-weight: 400;
			font-size: 12px;
		}`;const smallTextStyles=`.ai-chat-drawer .block-feature__headings p.subtext {
			color: var(--theme-background-accent-strong-selected);
			font-size: var(--root-small-font-size);
			font-weight: var(--root-small-font-weight, 400);
			line-height: var(--root-small-line-height, 1.25rem);
			letter-spacing: var(--root-small-letter-spacing, -0.03em);
			margin-bottom: 0;
		  }`;const twoFeaturesBannerStyles=`
		.ai-chat-banner .block-feature__headings {
			gap: 4px !important;
		}

		.ai-chat-banner .ai-chat-banner__main-text .block-feature {
			gap: 32px !important;
		}

		.ai-chat-banner .block-feature .ocr-icon {
			margin-top: 4px !important;
		}

		.ai-chat-banner .block-feature--xs .block-feature__title {
			white-space: nowrap !important;
			font-size: var(--root-h3-font-size) !important;
			font-weight: 400 !important;
		}

		.ai-chat-banner .ai-chat-banner__main-text .block-feature .block-feature__paragraph {
			font-size: 16px !important;
		}
		`;if(aiChatButtonText&&!smallText){const small=document.createElement("small");small.textContent="Created with Copilot Studio";aiChatButtonText.appendChild(small);styleText+=smallTextStyles}if(heading&&!disclaimer){const drawerSubtext=document.createElement("p");drawerSubtext.textContent="Created with Copilot Studio";drawerSubtext.classList.add("subtext");heading.appendChild(drawerSubtext);styleText+=disclaimerTextStyles}const aiChatBanner=document.querySelector(".ai-chat-banner");let aiChatBannerBlockFeature=aiChatBanner?.querySelector(".block-feature");if(aiChatBannerBlockFeature&&!twoFeatures){const imgSource=aiChatBannerBlockFeature.querySelector(".ocr-img img").src;const headerText=aiChatBannerBlockFeature.querySelector(".block-feature__headings .block-feature__title")?.textContent;const paragraphText=aiChatBannerBlockFeature.querySelector(".block-feature__body .block-feature__paragraph")?.textContent;const HTMLOverrideBlockFeatureForBanner=`
			<div ocr-component-name="block-feature" data-component-id="9290bbb697f35c37e989109584e9d258" class="block-feature d-flex align-items-start block-feature--xs">
				<div class="block-feature__top d-flex flex-row align-items-start">
					<div ocr-component-name="icon" data-component-id="467e35e809075d121962a1d239c316b2" class="ocr-icon d-inline-flex">
					  <div class="ocr-img media__asset"> 
						<img src="${imgSource}" aria-hidden="true" role="presentation" alt="" style="height: 50px;"> 
					  </div> 
					</div> 
					<div class="block-feature__headings d-flex flex-column align-items-start">
						<h2 class="block-feature__title ">${headerText?headerText:"AI-powered assistant"}</h2>
						<span class="subtext">Created with Copilot Studio</span>
					</div>
				</div>
				<div class="block-feature__body d-flex flex-column align-items-start">
					<p class="block-feature__paragraph base block-feature__paragraph">${paragraphText?paragraphText:"Need help finding a product or solution? Try the AI-powered assistant."}</p>
				</div>
			</div>
			`;aiChatBannerBlockFeature.innerHTML=HTMLOverrideBlockFeatureForBanner;styleText+=twoFeaturesBannerStyles}window.SOUtil.addStylesheet(styleText,overrideId)}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(updateAIStuff)}})();
/*! 1036215 - Fix for Product Plan Cards Blades */
(()=>{const adjustMarginBottom=blades=>{blades.forEach(blade=>{const textElement=blade.querySelector(".layout.section-master__layout .section-master__layout-header .block-heading");const buttonElement=blade.querySelector(".pill-bar.pill-bar--selector");if(textElement&&buttonElement){if(window.innerWidth<=859.98){buttonElement.style.marginBottom=`0px`}else{const textHeight=textElement.offsetHeight;const buttonHeight=buttonElement.offsetHeight;const marginBottom=textHeight-buttonHeight;buttonElement.style.marginBottom=`${marginBottom}px`}}})};function debounce(func,delay){let timeout;return function(...args){clearTimeout(timeout);timeout=setTimeout(()=>func.apply(this,args),delay)}}const productPlanCardsBlades=document.querySelectorAll(".section-master.section-master--blade-product-plan-cards");const debouncedResize=debounce(()=>adjustMarginBottom(productPlanCardsBlades),200);adjustMarginBottom(productPlanCardsBlades);if(productPlanCardsBlades.length>0){window.addEventListener("resize",debouncedResize)}})();
/*! 1039278 - Compare Table - Fixes for small viewports / high zoom, so content in columns does not overlap */
(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-365/business/microsoft-365-for-business-support-options","/microsoft-365/enterprise/microsoft365-plans-and-pricing","/microsoft-teams/microsoft-teams-rooms/compare-rooms-plans","/microsoft-teams/compare-microsoft-teams-business-options","/microsoft-365/business/compare-all-microsoft-365-business-products-with-microsoft-365-copilot","/microsoft-teams/compare-microsoft-teams-business-options"],markets:["en-us"]},previews:true};const CUSTOM_STYLE=`
	.compare-chart-4 {
		min-width: 500px;
	}

	@media (max-width: 1083.98px) {
		.compare-chart:not(.compare-chart-2) thead td:first-child {
			padding: 0;
			width: 0%;
		}
	}

	@media (max-width: 859.98px) {
		.compare-chart.compare-chart-2 thead td:first-child {
			padding:0;
			width: 0%
		}
	}
	`;function run(){if(!window.SOUtil.pageIsInScope(pageScope)){return}document.body.insertAdjacentHTML("beforeend",'<style id="static-override-1039278">'+CUSTOM_STYLE+"</style>");setTimeout(()=>{const stickyTheads=document.querySelectorAll(".compare-chart thead.sticky");stickyTheads.forEach(thead=>{thead.style.height="auto"});window.dispatchEvent(new Event("resize"))},50)}if(document.readyState!=="loading"){run()}else{document.addEventListener("DOMContentLoaded",run)}})();
/*! 1058399 - SKU Telemetry - Add data-bi-tags for SKU CTAs */
(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-365/business/microsoft-365-plans-and-pricing","/microsoft-365/business/no-teams-plans-and-pricing","/microsoft-365/business/with-copilot-plans-and-pricing","/microsoft-365/business/nonprofit-plans-and-pricing","/microsoft-365/business/additional-services-plans-and-pricing","/microsoft-365/copilot/pricing","/microsoft-365/copilot/pricing/enterprise","/microsoft-365/copilot/pricing/copilot-studio"],markets:["en-us"]},previews:true};const SELECTORS={SKU:"[data-component-id='29d382aad0139a094d341ff4dd652cd5']",BUTTON_OR_ANCHOR:"a,button",SKU_BUTTON:".sku__buttons",SKU_TITLE:".sku__title .oc-product-title"};const TELEMETRY_ATTRIBUTES={HEADER_NAME:"data-bi-hn",DATA_BI_ENGLISH_HEADER:"data-bi-ehn",DATA_BI_PRODNAME:"data-bi-prod",DATA_BI_SKU:"data-bi-sku",DATA_BI_SKUNAME:"data-bi-subnm",DATA_BI_PRODID:"data-bi-pid",DATA_BI_AREANAME:"data-bi-an",DATA_BI_CONTAINERNAME:"data-bi-view"};const TELEMETRY_BEHAVIOR={ACTION_ADD_TO_CART:"81",ACTION_EMAIL:"124",ACTION_TRIAL_INITIATE:"201"};if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(processSkuTelemetry)}function processSkuTelemetry(){const skus=document.querySelectorAll(SELECTORS.SKU);if(skus.length){skus.forEach(sku=>{const ocrRequest=sku.querySelector(".sku")?.dataset?.ocrSkuRequest;const skuId=ocrRequest?.split("_")[2].split("skuid")[1];const pid=ocrRequest?.split("_")[1].split("pid")[1];const skuTitle=sku.querySelector(SELECTORS.SKU_TITLE)?.textContent;const ACTION_LINKS=sku.querySelectorAll(SELECTORS.SKU_BUTTON+" "+SELECTORS.BUTTON_OR_ANCHOR);ACTION_LINKS.forEach(actionLink=>{if(actionLink.dataset.biBhvr==TELEMETRY_BEHAVIOR.ACTION_ADD_TO_CART||actionLink.dataset.biBhvr==TELEMETRY_BEHAVIOR.ACTION_EMAIL||actionLink.dataset.biBhvr==TELEMETRY_BEHAVIOR.ACTION_TRIAL_INITIATE){if(skuTitle){actionLink.setAttribute(TELEMETRY_ATTRIBUTES.DATA_BI_PRODNAME,skuTitle);actionLink.setAttribute(TELEMETRY_ATTRIBUTES.DATA_BI_SKUNAME,skuTitle)}}if(skuTitle){actionLink.setAttribute(TELEMETRY_ATTRIBUTES.HEADER_NAME,skuTitle);actionLink.setAttribute(TELEMETRY_ATTRIBUTES.DATA_BI_ENGLISH_HEADER,skuTitle)}if(!actionLink.dataset.biAn||!actionLink.dataset.biView){setAreaTags(actionLink,sku)}if(pid){actionLink.setAttribute(TELEMETRY_ATTRIBUTES.DATA_BI_PRODID,pid)}if(skuId){actionLink.setAttribute(TELEMETRY_ATTRIBUTES.DATA_BI_SKU,skuId)}})})}}function setAreaTags(link,sku){const tabPillBarItemId=findTabPillBar(sku.parentElement);if(!tabPillBarItemId)return;const tabPillBarItem=document.getElementById(tabPillBarItemId+"-tab");if(!tabPillBarItem)return;if(tabPillBarItem.dataset?.biAn){link.setAttribute(TELEMETRY_ATTRIBUTES.DATA_BI_AREANAME,tabPillBarItem.dataset.biAn)}if(tabPillBarItem.dataset?.biView){link.setAttribute(TELEMETRY_ATTRIBUTES.DATA_BI_CONTAINERNAME,tabPillBarItem.dataset.biView)}}function findTabPillBar(currentElement){if(!currentElement)return null;if(currentElement.className==="root responsivegrid")return null;if(currentElement.id?.includes("tabs-pill-bar")){return currentElement.id}return findTabPillBar(currentElement.parentElement)}})();
/*! 1060771 - Vidyard player fix for extends beyond viewport */
(()=>{const pageScope={"www.microsoft.com":{},"azure.microsoft.com":{},previews:true};if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(adjustVidyardPlayerSize);window.addEventListener("resize",adjustVidyardPlayerSize)}function adjustVidyardPlayerSize(){let vidyardPlayers=document.querySelectorAll('[data-component-id="53fca94fc232313b34a6e5413212ea93"]');if(!vidyardPlayers||vidyardPlayers.length===0){return}const widthHeightRatio=1.75;const padding=window.innerWidth<860?16:24;vidyardPlayers.forEach(element=>{const parentWidth=parseInt(window.getComputedStyle(element.parentElement)?.getPropertyValue("width"));element.children[0].style.width=parentWidth-2*padding+"px";element.children[0].style.height=(parentWidth-2*padding)/widthHeightRatio+"px"})}})();