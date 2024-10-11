/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={633:(t,e,n)=>{var r=n(738).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var e,n={},i=Object.prototype,a=i.hasOwnProperty,s=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",h=c.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,n){return t[e]=n}}function v(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new D(r||[]);return s(i,"_invoke",{value:A(t,n,a)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=v;var p="suspendedStart",y="suspendedYield",m="executing",b="completed",g={};function w(){}function L(){}function k(){}var E={};f(E,u,(function(){return this}));var x=Object.getPrototypeOf,M=x&&x(x(N([])));M&&M!==i&&a.call(M,u)&&(E=M);var T=k.prototype=w.prototype=Object.create(E);function S(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,i,s,c){var u=d(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==r(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var o;s(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function A(t,n,r){var o=p;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===b){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var c=j(s,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var u=d(t,n,r);if("normal"===u.type){if(o=r.done?b:y,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=b,r.method="throw",r.arg=u.arg)}}}function j(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=d(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(t){if(t||""===t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(a.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(r(t)+" is not iterable")}return L.prototype=k,s(T,"constructor",{value:k,configurable:!0}),s(k,"constructor",{value:L,configurable:!0}),L.displayName=f(k,h,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,f(t,h,"GeneratorFunction")),t.prototype=Object.create(T),t},n.awrap=function(t){return{__await:t}},S(O.prototype),f(O.prototype,l,(function(){return this})),n.AsyncIterator=O,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new O(v(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(T),f(T,h,"Generator"),f(T,u,(function(){return this})),f(T,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=N,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},738:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},756:(t,e,n)=>{var r=n(633)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t){var n=function(t){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:n+""}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var a=function(){return i((function e(n,r,o){t(this,e),this.buttonOpen=n,this.buttonClose=r,this.modalContainer=o,this.clickOutside=this.clickOutside.bind(this),this.eventToggleModal=this.eventToggleModal.bind(this)}),[{key:"toggleModal",value:function(){this.modalContainer.classList.toggle("active")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"clickOutside",value:function(t){t.target===this.modalContainer&&this.toggleModal(t)}},{key:"addModalEvent",value:function(){this.buttonOpen.addEventListener("click",this.eventToggleModal),this.buttonClose.addEventListener("click",this.eventToggleModal),this.modalContainer.addEventListener("click",this.clickOutside)}},{key:"init",value:function(){return this.buttonOpen&&this.buttonClose&&this.modalContainer&&this.addModalEvent(),this}}])}(),s=function(){return i((function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this)}),[{key:"onMouseMove",value:function(t){this.tooltipBox.style.top=t.pageY+20+"px",t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=t.pageX+20+"px"}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"createTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipBox=e}},{key:"onMouseOver",value:function(t){var e=t.currentTarget;this.createTooltipBox(e),e.addEventListener("mouseleave",this.onMouseLeave),e.addEventListener("mousemove",this.onMouseMove)}},{key:"addTooltipsEvents",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipsEvents(),this}}])}(),c=function(){return i((function e(n,r){t(this,e),this.tabMenu=n,this.tabContent=r,this.activeClass="ativo"}),[{key:"activeTab",value:function(t){var e=this;this.tabContent.forEach((function(t){t.classList.remove(e.activeClass)}));var n=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,n)}},{key:"addTabNavEvent",value:function(){var t=this;this.tabMenu.forEach((function(e,n){return e.addEventListener("click",(function(){return t.activeTab(n)}))}))}},{key:"init",value:function(){this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent())}}])}();function u(t,e,n){var r=document.documentElement,o="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((function(t){r.removeEventListener(t,i)})),n())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){r.addEventListener(t,i)}))})),t.setAttribute(o,""))}var l=function(){return i((function e(n,r,o){t(this,e),this.events=n||["click","touchstart"],this.menuButton=r,this.active="active",this.menuList=o,this.addMenuMobileEvents=this.addMenuMobileEvents.bind(this)}),[{key:"openMenu",value:function(){var t=this;this.menuList.classList.add(this.active),this.menuButton.classList.add(this.active),u(this.menuList,events,(function(){t.menuList.classList.remove(t.active),t.menuButton.classList.remove(t.active)}))}},{key:"addMenuMobileEvents",value:function(){var t=this;this.events.forEach((function(e){return t.menuButton.addEventListener(e,t.openMenu)}))}},{key:"init",value:function(){if(this.menuButton&&this.menuList)return addMenuMobileEvents(),this}}])}(),h=function(){return i((function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.active="ativo"}),[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.active),t.nextElementSibling.classList.toggle(this.active)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",t.toggleAccordion(e))}))}},{key:"init",value:function(){this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent())}}])}(),f=function(){return i((function e(n,r){t(this,e),this.internalLinks=document.querySelectorAll(n),this.options=void 0===r?{behavior:"smooth",block:"start"}:r,this.scrollToSection=this.scrollToSection.bind(this)}),[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.internalLinks.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.links.length&&this.addLinkEvent(),this}}])}(),v=function(){return i((function e(n,r){t(this,e),this.dropDownMenus=document.querySelectorAll(n),this.events=r||["click","touchstart"],this.active="active",this.addDropdownMenuEvent=this.addDropdownMenuEvent.bind(this)}),[{key:"handleClick",value:function(t){var e=this;t.preventDefault();var n=t.currentTarget;n.classList.toggle(this.active),u(n,this.events,(function(){n.classList.remove(e.active)}))}},{key:"addDropdownMenuEvent",value:function(){var t=this;this.dropDownMenus.forEach((function(e){t.events.forEach((function(n){e.addEventListener(n,t.handleClick)}))}))}},{key:"init",value:function(){if(!(!this.dropDownMenus.length>0))return this.addDropdownMenuEvent(),this}}])}();function d(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}var p=n(756),y=n.n(p),m=function(){return i((function e(n,r,o){t(this,e),this.numbers=document.querySelectorAll(n),this.observerTarget=document.querySelector(r),this.observerClass=o,this.handleMutation=this.handleMutation.bind(this)}),[{key:"animaNumbers",value:function(){var t=this;this.numbers.forEach((function(e){return t.constructor.incrementNumbers(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumbers())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){this.numbers.length&&this.observerTarget&&this.addMutationObserver()}}],[{key:"incrementNumbers",value:function(t){var e=+t.innerText,n=Math.floor(e/100),r=0,o=setInterval((function(){r+=n,t.innerText=r,r>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}}])}();function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var g=function(){return i((function e(n){var r,o;t(this,e),this.sections=document.querySelectorAll(n),this.windowRef=.6*window.innerHeight,this.checkDistance=(r=this.checkDistance.bind(this),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];o&&clearTimeout(o),o=setTimeout((function(){r.apply(void 0,e),o=null}),200)})}),[{key:"getDistance",value:function(){var t,e=this;this.distance=(t=this.sections,function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var n=t.offsetTop;return{element:t,offset:Math.floor(n-e.windowRef)}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}},{key:"init",value:function(){if(this.sections.length)return this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance),this}},{key:"stop",value:function(){window.remove("scroll",this.checkDistance)}}])}();new f('[data-menu="suave"] a[href^="#"]').init(),new h("[data-anime='accordion'] dt").init(),new c('[data-tab="menu"] li','[data-tab="content"] section').init(),new a('[data-modal="open"]','[data-modal="close"]','[data-modal="container"]').init(),new s("[data-tooltip]").init(),new g("[data-anime='scroll']").init(),new v("[data-anime='scroll']").init("[data-dropdown]",["click","touchstart"]),new l("[data-anime='scroll']").init(["click","touchstart"],'[data-menu="button"]','[data-menu="list"]'),function(){var t=document.querySelector(".numeros-grid");function e(e){var n=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.specie,"</h3><span data-number>").concat(t.total,"</span>"),e}(e);t.appendChild(n)}function n(){var t;return t=y().mark((function t(){var n;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://127.0.0.1:5500/JavaScript/automation/modules/animals.json");case 3:return n=t.sent,t.next=6,n.json();case 6:t.sent.forEach((function(t){return e(t)})),(new m).init("[data-number]",".numbers","ativo"),initNumbers(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.warn(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})),n=function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){d(i,r,o,a,s,"next",t)}function s(t){d(i,r,o,a,s,"throw",t)}a(void 0)}))},n.apply(this,arguments)}!function(){n.apply(this,arguments)}()}(),fetch("https://blockchain.info/ticker").then((function(t){if(!t.ok)throw new Error(defaultError);return t.json()})).then((function(t){var e=document.querySelector(".btc-price"),n=(t.BRL.sell/1e3).toLocaleString("pt-br",{style:"currency",currency:"BRL"});e.innerText=n})).catch((function(t){console.warn(t)})),function(){var t=document.querySelector("[data-week]");if(t){var e=t.dataset.week.split(",").map(Number),n=t.dataset.hour.split(",").map(Number),r=new Date,o=r.getDay(),i=r.getHours(),a=-1!==e.indexOf(o);i>=n[0]&&i<n[1]&&a&&t.classList.add("open")}}()})()})();