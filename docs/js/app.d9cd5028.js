(function(e){function t(t){for(var a,n,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)n=s[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&f.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,n=1;n<r.length;n++){var s=r[n];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},n={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-4fdc7357":"f0476182"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-4fdc7357":1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({}[e]||e)+"."+{"chunk-4fdc7357":"2f9f3d59"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[e],p.parentNode.removeChild(p),r(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,r[1](f)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/photo-finder/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},3931:function(e,t,r){},"53d7":function(e,t,r){"use strict";var a=r("700b"),n=r.n(a);n.a},5452:function(e,t,r){"use strict";var a=r("b1f6"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container"},[r("app-header"),r("router-view")],1),r("app-footer")],1)},o=[],i=(r("5c0b"),r("2877")),s={},c=Object(i["a"])(s,n,o,!1,null,null,null),u=c.exports,l=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"gallery"},[r("gallery-viewer")],1)},p=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gallery-viewer"},[r("div",{staticClass:"gallery-viewer__search"},[r("form",{staticClass:"search",attrs:{action:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"search__input",attrs:{type:"search",placeholder:"What would you like to find?"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),r("button",{staticClass:"search__button",on:{click:function(t){return t.preventDefault(),e.fetchData(e.query)}}},[e._v("Search")])])]),r("ul",{staticClass:"gallery-viewer__list"},e._l(e.images,(function(e){return r("app-picture",{key:e.id,staticClass:"gallery-viewer__item",attrs:{previewImage:e.previewImageSource,largeImage:e.largeImageSource,imageTag:e.imageTags,id:e.id,meta:!0,isFavorite:e.isFavorite}})})),1)])},m=[],v=!1,g={data:function(){return{query:"",randomQueries:["flowers","cats","dogs","bubbles","butterfly","peoples","winter","summer"],images:this.$store.state.images}},mounted:function(){v||(this.$store.dispatch("fetchData",this.randomQueries[this.getRandom(0,this.randomQueries.length-1)]),v=!0)},methods:{fetchData:function(){this.$store.dispatch("fetchData",this.query),this.query=""},getRandom:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}}},h=g,_=(r("e08c"),Object(i["a"])(h,d,m,!1,null,null,null)),b=_.exports,y={data:function(){return{}}},w=y,C=Object(i["a"])(w,f,p,!1,null,null,null),k=C.exports;a["a"].use(l["a"]);var j=new l["a"]({mode:"history",base:"/photo-finder/",routes:[{path:"/",name:"home",component:k},{path:"/favorite",name:"favorite",component:function(){return r.e("chunk-4fdc7357").then(r.bind(null,"779d"))}}]}),E=(r("96cf"),r("3b8d")),I=(r("7514"),r("2f62"));a["a"].use(I["a"]);var x=new I["a"].Store({state:{API_KEY:"12967020-a3deecfacc5cfa367f6aefde8",images:[],favoriteImages:[]},mutations:{updateData:function(e,t){e.images.push({id:t.id,previewImageSource:t.webformatURL,largeImageSource:t.largeImageURL,imageTags:t.tags,isFavorite:!1})},toggleFavorite:function(e,t){var r=e.images.find((function(e){return e.id===t}));r.isFavorite=!r.isFavorite}},actions:{fetchData:function(){var e=Object(E["a"])(regeneratorRuntime.mark((function e(t,r){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.state.images.length=0,e.next=3,fetch("https://pixabay.com/api/?key=".concat(this.state.API_KEY,"&q=").concat(r,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.hits.length;t++)a.commit("updateData",e.hits[t])}));case 3:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},getters:{favoriteImages:function(e){return e.images.filter((function(e){return e.isFavorite}))}}}),O=(r("a589"),r("9483"));Object(O["a"])("".concat("/photo-finder/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var F=r("0f32"),T=r.n(F);a["a"].directive("scroll",{inserted:function(e,t){var r=function r(a){t.value(a,e)&&window.removeEventListener("scroll",r)};window.addEventListener("scroll",T()(r,300))}});var $=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("logo",{staticClass:"header__logo"}),r("app-nav",{staticClass:"header__nav"})],1)},S=[],D={data:function(){return{}},methods:{}},P=D,q=(r("5452"),Object(i["a"])(P,$,S,!1,null,null,null)),A=q.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"footer__row"},[r("div",{staticClass:"footer__col"},[r("logo",{staticClass:"footer__logo",attrs:{theme:e.logoTheme}}),e._m(0)],1),r("div",{staticClass:"footer__col"}),r("div",{staticClass:"footer__col"})])])},N=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"footer__text"},[r("p",[e._v("\n          This site uses the free api to search for images – "),r("a",{staticClass:"footer__link",attrs:{href:"https://pixabay.com"}},[e._v("pixabay.com")])])])}],R={data:function(){return{logoTheme:"light"}}},M=R,B=(r("53d7"),Object(i["a"])(M,L,N,!1,null,null,null)),H=B.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["logo",{"logo--light":"light"===e.theme}],on:{click:e.gotoHome}},[r("div",{staticClass:"logo__img"}),r("span",{staticClass:"logo__title"},[e._v("Photo Finder")])])},Q=[],U=(r("7f7f"),{props:["theme"],data:function(){return{}},methods:{gotoHome:function(){"home"!==this.$router.currentRoute.name&&this.$router.push({path:"/"})}}}),J=U,Y=(r("c4ed"),Object(i["a"])(J,K,Q,!1,null,null,null)),W=Y.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"nav"},[r("ul",{staticClass:"nav__list"},[r("li",{staticClass:"nav__item"},[r("router-link",{staticClass:"nav__link",attrs:{to:"/"}},[e._v("Home")])],1),r("li",{staticClass:"nav__item"},[r("router-link",{staticClass:"nav__link",attrs:{to:"/favorite"}},[e._v("Favorite")])],1)])])},G=[],V={data:function(){return{}}},X=V,Z=(r("d79f"),Object(i["a"])(X,z,G,!1,null,null,null)),ee=Z.exports,te=r("c494"),re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("li",{staticClass:"picture"},[e.meta?r("div",{staticClass:"picture__tags"},e._l(e.imageTag.split(","),(function(t,a){return r("a",{key:a,staticClass:"picture__link picture__link--tag",on:{click:function(r){return r.preventDefault(),e.fetchData(t)}}},[e._v(e._s(t))])})),0):e._e(),r("img",{staticClass:"picture__image",attrs:{src:e.previewImage,alt:e.imageTag}}),r("div",{staticClass:"picture__footer"},[r("button",{class:["picture__like",{"picture__like--active":e.isFavorite}],attrs:{"aria-label":"Like picture"},on:{click:function(t){return e.toggleFavorite(e.id)}}}),r("a",{staticClass:"picture__link",attrs:{href:e.largeImage}},[e._v("Download")])])])])},ae=[],ne={props:["id","previewImage","largeImage","imageTag","meta","isFavorite"],data:function(){return{}},methods:{fetchData:function(e){this.$store.dispatch("fetchData",e)},toggleFavorite:function(e){this.$store.commit("toggleFavorite",e)}}},oe=ne,ie=(r("8ec5"),Object(i["a"])(oe,re,ae,!1,null,null,null)),se=ie.exports;a["a"].config.productionTip=!1,a["a"].component("app-header",A),a["a"].component("app-footer",H),a["a"].component("logo",W),a["a"].component("app-nav",ee),a["a"].component("gallery-viewer",b),a["a"].component("favorite-image",te["a"]),a["a"].component("app-picture",se),new a["a"]({router:j,store:x,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var a=r("e332"),n=r.n(a);n.a},"700b":function(e,t,r){},"73aa":function(e,t,r){},"8ec5":function(e,t,r){"use strict";var a=r("73aa"),n=r.n(a);n.a},"9e74":function(e,t,r){},a589:function(e,t,r){},b1c4:function(e,t,r){},b1f6:function(e,t,r){},bbdb:function(e,t,r){"use strict";var a=r("b1c4"),n=r.n(a);n.a},c3b4:function(e,t,r){},c494:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"favorite-image"},e._l(e.favoriteImages,(function(e){return r("app-picture",{key:e.id,staticClass:"favorite-image__item",attrs:{previewImage:e.previewImageSource,largeImage:e.largeImageSource,imageTag:e.imageTags,id:e.id,meta:!1,isFavorite:e.isFavorite}})})),1)},n=[],o={data:function(){return{favoriteImages:[]}},mounted:function(){this.favoriteImages=this.$store.getters.favoriteImages}},i=o,s=(r("bbdb"),r("2877")),c=Object(s["a"])(i,a,n,!1,null,null,null);t["a"]=c.exports},c4ed:function(e,t,r){"use strict";var a=r("3931"),n=r.n(a);n.a},d79f:function(e,t,r){"use strict";var a=r("9e74"),n=r.n(a);n.a},e08c:function(e,t,r){"use strict";var a=r("c3b4"),n=r.n(a);n.a},e332:function(e,t,r){}});
//# sourceMappingURL=app.d9cd5028.js.map