(function(e){function t(t){for(var n,r,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==i[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-4fdc7357":"5789d34b"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-4fdc7357":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-4fdc7357":"2f9f3d59"}[e]+".css",i=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===n||u===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[e],p.parentNode.removeChild(p),a(o)},p.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(p)})).then((function(){r[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",f.name="ChunkLoadError",f.type=n,f.request=r,a[1](f)}i[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/photo-finder/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3931:function(e,t,a){},"53d7":function(e,t,a){"use strict";var n=a("700b"),r=a.n(n);r.a},5452:function(e,t,a){"use strict";var n=a("b1f6"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("app-header"),a("router-view")],1),a("app-footer")],1)},i=[],o=(a("5c0b"),a("2877")),s={},c=Object(o["a"])(s,r,i,!1,null,null,null),l=c.exports,u=a("8832"),f=a.n(u),p=a("8c4f"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"gallery"},[a("gallery-viewer")],1)},g=[],d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"gallery-viewer"},[a("div",{staticClass:"gallery-viewer__search"},[a("form",{staticClass:"search",attrs:{action:""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"search__input",attrs:{type:"search",placeholder:"What would you like to find?"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),a("button",{staticClass:"search__button",on:{click:function(t){return t.preventDefault(),e.fetchData(e.query)}}},[e._v("Search")])]),a("div",{staticClass:"gallery-viewer__type"},[a("div",{staticClass:"image-type"},[a("ul",{staticClass:"image-type__list"},e._l(e.imageType,(function(t,n){return a("li",{key:n,staticClass:"image-type__item"},[a("a",{class:["image-type__link",{"image-type__link--active":t.isActive}],attrs:{href:""},on:{click:function(a){return a.preventDefault(),e.setImageType(t)}}},[e._v(e._s(t.type))])])})),0)])])]),a("ul",{staticClass:"gallery-viewer__list"},e._l(e.images,(function(t){return a("app-picture",{key:t.id,staticClass:"gallery-viewer__item",attrs:{previewImage:t.previewImageSource,largeImage:t.largeImageSource,imageTag:t.imageTags,id:t.id,meta:!0,isFavorite:t.isFavorite,type:e.imageType.find((function(e){return e.isActive})).type}})})),1),a("div",{staticClass:"gallery-viewer__pagination"},[a("pagination",{attrs:{"page-count":20,"container-class":"pagination","click-handler":e.changePage},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}),e._v(e._s(e.page)+"\n  ")],1)])},m=[],h=(a("ac6a"),a("7514"),!1),_={data:function(){return{page:1,query:"",randomQueries:["flowers","cats","dogs","bubbles","butterfly","peoples","winter","summer"],imageType:[{type:"all",isActive:!1},{type:"photo",isActive:!0},{type:"illustration",isActive:!1},{type:"vector",isActive:!1}],images:this.$store.state.images}},mounted:function(){h||(this.$store.dispatch("fetchData",[this.randomQueries[this.getRandom(0,this.randomQueries.length-1)],this.imageType.find((function(e){return e.isActive})).type]),h=!0)},methods:{fetchData:function(){this.$store.dispatch("fetchData",[this.query,this.imageType.find((function(e){return e.isActive})).type]),this.page=1},getRandom:function(e,t){return Math.floor(Math.random()*(t-e+1))+e},setImageType:function(e){this.imageType.forEach((function(e){e.isActive=!1})),e.isActive=!0},changePage:function(){this.$store.dispatch("fetchData",[this.query,this.imageType.find((function(e){return e.isActive})).type,this.page])}}},y=_,b=(a("e08c"),Object(o["a"])(y,d,m,!1,null,null,null)),w=b.exports,C={data:function(){return{}}},k=C,I=Object(o["a"])(k,v,g,!1,null,null,null),T=I.exports;n["a"].use(p["a"]);var E=new p["a"]({mode:"history",base:"/photo-finder/",routes:[{path:"/",name:"home",component:T},{path:"/favorite",name:"favorite",component:function(){return a.e("chunk-4fdc7357").then(a.bind(null,"779d"))}}]}),A=a("768b"),j=(a("96cf"),a("3b8d")),x=(a("6762"),a("2fdb"),a("2f62"));n["a"].use(x["a"]);var O=new x["a"].Store({state:{API_KEY:"12967020-a3deecfacc5cfa367f6aefde8",images:[],favoriteImages:[]},mutations:{updateData:function(e,t){e.images.push({id:t.id,previewImageSource:t.webformatURL,largeImageSource:t.largeImageURL,imageTags:t.tags,isFavorite:!1})},toggleFavorite:function(e,t){var a=e.images.find((function(e){return e.id===t}));a.isFavorite=!a.isFavorite,e.favoriteImages.includes(a)?e.favoriteImages=e.favoriteImages.filter((function(e){return e!==a})):e.favoriteImages.push(a)}},actions:{fetchData:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t,a){var n,r,i,o,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object(A["a"])(a,3),r=n[0],i=n[1],o=n[2],this.state.images.length=0,e.next=4,fetch("https://pixabay.com/api/?key=".concat(this.state.API_KEY,"&q=").concat(r,"&image_type=").concat(i,"&pretty=true&page=").concat(o)).then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.hits.length;t++)s.commit("updateData",e.hits[t]),console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}()},getters:{favoriteImages:function(e){return e.favoriteImages}}}),$=(a("a589"),a("9483"));Object($["a"])("".concat("/photo-finder/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var F=a("0f32"),S=a.n(F);n["a"].directive("scroll",{inserted:function(e,t){var a=function a(n){t.value(n,e)&&window.removeEventListener("scroll",a)};window.addEventListener("scroll",S()(a,300))}}),n["a"].directive("resize",{inserted:function(e,t){var a=function a(n){t.value(n,e)&&window.removeEventListener("resize",a)};window.addEventListener("resize",S()(a,300))}});var D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[a("logo",{staticClass:"header__logo"}),a("app-nav",{staticClass:"header__nav"})],1)},P=[],N={data:function(){return{}},methods:{}},q=N,L=(a("5452"),Object(o["a"])(q,D,P,!1,null,null,null)),R=L.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer__row"},[a("div",{staticClass:"footer__col"},[a("logo",{staticClass:"footer__logo",attrs:{theme:e.logoTheme}}),e._m(0)],1),a("div",{staticClass:"footer__col"}),a("div",{staticClass:"footer__col"})])])},B=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer__text"},[a("p",[e._v("\n          This site uses the free api to search for images – "),a("a",{staticClass:"footer__link",attrs:{href:"https://pixabay.com"}},[e._v("pixabay.com")])])])}],H={data:function(){return{logoTheme:"light"}}},z=H,K=(a("53d7"),Object(o["a"])(z,M,B,!1,null,null,null)),Q=K.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["logo",{"logo--light":"light"===e.theme}],on:{click:e.gotoHome}},[a("div",{staticClass:"logo__img"}),a("span",{staticClass:"logo__title"},[e._v("Photo Finder")])])},J=[],Y=(a("7f7f"),{props:["theme"],data:function(){return{}},methods:{gotoHome:function(){"home"!==this.$router.currentRoute.name&&this.$router.push({path:"/"})}}}),W=Y,G=(a("c4ed"),Object(o["a"])(W,U,J,!1,null,null,null)),V=G.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"nav"},[a("button",{staticClass:"nav__toggle",on:{click:e.toggleNav}},[e._v("=")]),a("ul",{class:["nav__list",{"nav__list--active":e.isNavActive}]},[a("li",{staticClass:"nav__item"},[a("router-link",{staticClass:"nav__link",attrs:{to:"/"}},[e._v("Home")])],1),a("li",{staticClass:"nav__item"},[a("router-link",{staticClass:"nav__link",attrs:{to:"/favorite"}},[e._v("Favorite")])],1)])])},Z=[],ee={data:function(){return{isNavActive:!1}},methods:{toggleNav:function(){this.isNavActive=!this.isNavActive}}},te=ee,ae=(a("d79f"),Object(o["a"])(te,X,Z,!1,null,null,null)),ne=ae.exports,re=a("c494"),ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("li",{staticClass:"picture"},[e.meta?a("div",{staticClass:"picture__tags"},e._l(e.imageTag.split(","),(function(t,n){return a("a",{key:n,staticClass:"picture__link picture__link--tag",on:{click:function(a){return a.preventDefault(),e.fetchData([t,e.type])}}},[e._v(e._s(t))])})),0):e._e(),a("img",{staticClass:"picture__image",attrs:{src:e.previewImage,alt:e.imageTag}}),a("div",{staticClass:"picture__footer"},[a("button",{class:["picture__like",{"picture__like--active":e.isFavorite}],attrs:{"aria-label":"Like picture"},on:{click:function(t){return e.toggleFavorite(e.id)}}}),a("a",{staticClass:"picture__link",attrs:{href:e.largeImage}},[e._v("Download "+e._s(e.type))])])])])},oe=[],se={props:["id","previewImage","largeImage","imageTag","meta","isFavorite","type"],data:function(){return{}},methods:{fetchData:function(e){this.$store.dispatch("fetchData",e)},toggleFavorite:function(e){this.$store.commit("toggleFavorite",e)}}},ce=se,le=(a("8ec5"),Object(o["a"])(ce,ie,oe,!1,null,null,null)),ue=le.exports;n["a"].config.productionTip=!1,n["a"].component("app-header",R),n["a"].component("app-footer",Q),n["a"].component("logo",V),n["a"].component("app-nav",ne),n["a"].component("gallery-viewer",w),n["a"].component("favorite-image",re["a"]),n["a"].component("app-picture",ue),n["a"].component("pagination",f.a),new n["a"]({router:E,store:O,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("e332"),r=a.n(n);r.a},"700b":function(e,t,a){},"73aa":function(e,t,a){},"8ec5":function(e,t,a){"use strict";var n=a("73aa"),r=a.n(n);r.a},"9e74":function(e,t,a){},a589:function(e,t,a){},b1c4:function(e,t,a){},b1f6:function(e,t,a){},bbdb:function(e,t,a){"use strict";var n=a("b1c4"),r=a.n(n);r.a},c3b4:function(e,t,a){},c494:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"favorite-image"},e._l(e.favoriteImages,(function(e){return a("app-picture",{key:e.id,staticClass:"favorite-image__item",attrs:{previewImage:e.previewImageSource,largeImage:e.largeImageSource,imageTag:e.imageTags,id:e.id,meta:!1,isFavorite:e.isFavorite}})})),1)},r=[],i={data:function(){return{favoriteImages:[]}},mounted:function(){this.favoriteImages=this.$store.getters.favoriteImages}},o=i,s=(a("bbdb"),a("2877")),c=Object(s["a"])(o,n,r,!1,null,null,null);t["a"]=c.exports},c4ed:function(e,t,a){"use strict";var n=a("3931"),r=a.n(n);r.a},d79f:function(e,t,a){"use strict";var n=a("9e74"),r=a.n(n);r.a},e08c:function(e,t,a){"use strict";var n=a("c3b4"),r=a.n(n);r.a},e332:function(e,t,a){}});
//# sourceMappingURL=app.d61139b4.js.map