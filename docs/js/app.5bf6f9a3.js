(function(t){function e(e){for(var a,n,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&v.push(r[n][0]),r[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,n=1;n<i.length;n++){var o=i[n];0!==r[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=i[0]))}return t}var a={},n={app:0},r={app:0},s=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-4fdc7357":"5789d34b"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.e=function(t){var e=[],i={"chunk-4fdc7357":1};n[t]?e.push(n[t]):0!==n[t]&&i[t]&&e.push(n[t]=new Promise((function(e,i){for(var a="css/"+({}[t]||t)+"."+{"chunk-4fdc7357":"2f9f3d59"}[t]+".css",r=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var v=document.getElementsByTagName("style");for(o=0;o<v.length;o++){l=v[o],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[t],f.parentNode.removeChild(f),i(s)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,i){a=r[t]=[e,i]}));e.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var v=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var i=r[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;v.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",v.name="ChunkLoadError",v.type=a,v.request=n,i[1](v)}r[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(i,a,function(e){return t[e]}.bind(null,a));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/photo-finder/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var v=0;v<l.length;v++)e(l[v]);var f=u;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},3931:function(t,e,i){},"53d7":function(t,e,i){"use strict";var a=i("700b"),n=i.n(a);n.a},5452:function(t,e,i){"use strict";var a=i("b1f6"),n=i.n(a);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"container"},[i("app-header"),i("router-view")],1),i("app-footer")],1)},r=[],s=(i("5c0b"),i("2877")),o={},c=Object(s["a"])(o,n,r,!1,null,null,null),l=c.exports,u=i("8832"),v=i.n(u),f=i("8c4f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"gallery"},[i("gallery-viewer")],1)},d=[],g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gallery-viewer"},[i("div",{staticClass:"gallery-viewer__search"},[i("form",{staticClass:"search",attrs:{action:""}},[i("label",{staticClass:"search__label"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"search__input",attrs:{type:"search",placeholder:"What would you like to find?"},domProps:{value:t.query},on:{input:[function(e){e.target.composing||(t.query=e.target.value)},t.checkDictionary]}}),i("app-autocomplete",{ref:"autocomplete",attrs:{query:t.query},on:{"set-query":t.setQuery}})],1),i("button",{staticClass:"search__button",on:{click:function(e){return e.preventDefault(),t.fetchData(t.query)}}},[t._v("Search")])]),i("div",{staticClass:"gallery-viewer__type"},[i("div",{staticClass:"image-type"},[i("ul",{staticClass:"image-type__list"},t._l(t.imageType,(function(e,a){return i("li",{key:a,staticClass:"image-type__item"},[i("a",{class:["image-type__link",{"image-type__link--active":e.isActive}],attrs:{href:""},on:{click:function(i){return i.preventDefault(),t.setImageType(e)}}},[t._v(t._s(e.type))])])})),0)])])]),i("ul",{staticClass:"gallery-viewer__list"},t._l(t.images,(function(e){return i("app-picture",{key:e.id,staticClass:"gallery-viewer__item",attrs:{previewImage:e.previewImageSource,largeImage:e.largeImageSource,imageTag:e.imageTags,id:e.id,meta:!0,isFavorite:e.isFavorite,type:t.imageType.find((function(t){return t.isActive})).type}})})),1),i("div",{staticClass:"gallery-viewer__pagination"},[i("pagination",{attrs:{"page-count":20,"container-class":"pagination","click-handler":t.changePage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])},m=[],h=(i("ac6a"),i("7514"),!1),_={data:function(){return{page:1,query:"",randomQueries:["flowers","cats","dogs","bubbles","butterfly","peoples","winter","summer"],imageType:[{type:"all",isActive:!1},{type:"photo",isActive:!0},{type:"illustration",isActive:!1},{type:"vector",isActive:!1}],images:this.$store.state.images}},mounted:function(){h||(this.$store.dispatch("fetchData",[this.randomQueries[this.getRandom(0,this.randomQueries.length-1)],this.imageType.find((function(t){return t.isActive})).type]),h=!0)},methods:{fetchData:function(){this.$store.dispatch("fetchData",[this.query,this.imageType.find((function(t){return t.isActive})).type]),this.page=1},getRandom:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},setImageType:function(t){this.imageType.forEach((function(t){t.isActive=!1})),t.isActive=!0},changePage:function(){this.$store.dispatch("fetchData",[this.query,this.imageType.find((function(t){return t.isActive})).type,this.page])},checkDictionary:function(){this.$refs.autocomplete.checkDictionary(this.query)},setQuery:function(t){this.query=t}}},y=_,A=(i("e08c"),Object(s["a"])(y,g,m,!1,null,null,null)),b=A.exports,w={data:function(){return{}}},k=w,C=Object(s["a"])(k,p,d,!1,null,null,null),I=C.exports;a["a"].use(f["a"]);var D=new f["a"]({mode:"history",base:"/photo-finder/",routes:[{path:"/",name:"home",component:I},{path:"/favorite",name:"favorite",component:function(){return i.e("chunk-4fdc7357").then(i.bind(null,"779d"))}}]}),x=(i("96cf"),i("3b8d")),E=(i("6762"),i("2fdb"),i("768b")),T=i("2f62"),j=[{title:"animal",isActive:!1},{title:"cat",isActive:!1},{title:"dog",isActive:!1},{title:"puppy",isActive:!1},{title:"rabbit",isActive:!1},{title:"mouse",isActive:!1},{title:"fish",isActive:!1},{title:"turtle",isActive:!1},{title:"cow",isActive:!1},{title:"duck",isActive:!1},{title:"bird",isActive:!1},{title:"parrot",isActive:!1},{title:"dove",isActive:!1},{title:"chicken",isActive:!1},{title:"horse",isActive:!1},{title:"sheep",isActive:!1},{title:"lion",isActive:!1},{title:"pig",isActive:!1},{title:"panda",isActive:!1},{title:"goat",isActive:!1},{title:"monkey",isActive:!1},{title:"elephant",isActive:!1},{title:"fox",isActive:!1},{title:"frog",isActive:!1},{title:"wolf",isActive:!1},{title:"man",isActive:!1},{title:"woman",isActive:!1},{title:"kids",isActive:!1},{title:"child",isActive:!1},{title:"boy",isActive:!1},{title:"girl",isActive:!1},{title:"winter",isActive:!1},{title:"spring",isActive:!1},{title:"summer",isActive:!1},{title:"autumn",isActive:!1},{title:"forest",isActive:!1},{title:"beach",isActive:!1},{title:"valley",isActive:!1},{title:"flowers",isActive:!1},{title:"road",isActive:!1},{title:"mountains",isActive:!1},{title:"nature",isActive:!1},{title:"tree",isActive:!1},{title:"wood",isActive:!1},{title:"sun",isActive:!1},{title:"sky",isActive:!1},{title:"moon",isActive:!1},{title:"earth",isActive:!1},{title:"rain",isActive:!1},{title:"water",isActive:!1},{title:"food",isActive:!1},{title:"fog",isActive:!1},{title:"air",isActive:!1},{title:"dark",isActive:!1},{title:"light",isActive:!1},{title:"day",isActive:!1},{title:"fruits",isActive:!1},{title:"vegetables",isActive:!1},{title:"berry",isActive:!1},{title:"apple",isActive:!1},{title:"orange",isActive:!1},{title:"tomato",isActive:!1},{title:"cucumber",isActive:!1},{title:"potatoes",isActive:!1},{title:"pepper",isActive:!1},{title:"banana",isActive:!1},{title:"avocado",isActive:!1},{title:"grapefruit",isActive:!1},{title:"grapes",isActive:!1},{title:"lime",isActive:!1},{title:"lemon",isActive:!1},{title:"mango",isActive:!1},{title:"melon",isActive:!1},{title:"nectarine",isActive:!1},{title:"pear",isActive:!1},{title:"pineapple",isActive:!1},{title:"watermelon",isActive:!1},{title:"blueberry",isActive:!1},{title:"blackberry",isActive:!1},{title:"cherry",isActive:!1},{title:"raspberry",isActive:!1},{title:"strawberry",isActive:!1},{title:"cranberry",isActive:!1}];a["a"].use(T["a"]);var O=new T["a"].Store({state:{API_KEY:"12967020-a3deecfacc5cfa367f6aefde8",images:[],favoriteImages:[],queriesDictionary:j},mutations:{updateData:function(t,e){t.images.push({id:e.id,previewImageSource:e.webformatURL,largeImageSource:e.largeImageURL,imageTags:e.tags,isFavorite:!1})},updateDictionary:function(t,e){t.queriesDictionary.push({title:e,isActive:!1})},toggleFavorite:function(t,e){var i=Object(E["a"])(e,2),a=i[0],n=i[1],r=t.images.find((function(t){return t.id===a}))||t.favoriteImages.find((function(t){return t.id===a}));r&&!t.favoriteImages.includes(r)?q(t,r):$(t,n)}},actions:{fetchData:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(e,i){var a,n,r,s,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=Object(E["a"])(i,3),n=a[0],r=a[1],s=a[2],this.state.images.length=0,t.next=4,fetch("https://pixabay.com/api/?key=".concat(this.state.API_KEY,"&q=").concat(n,"&image_type=").concat(r,"&pretty=true&page=").concat(s)).then((function(t){return t.json()})).then((function(t){for(var e=0;e<t.hits.length;e++)o.commit("updateData",t.hits[e])}));case 4:case"end":return t.stop()}}),t,this)})));function e(e,i){return t.apply(this,arguments)}return e}()},getters:{favoriteImages:function(t){return t.favoriteImages}}});function q(t,e){t.favoriteImages.push(e),e.isFavorite=!e.isFavorite}function $(t,e){t.favoriteImages[e].isFavorite=!1,t.favoriteImages.splice(e,1)}i("a589");var F=i("9483");Object(F["a"])("".concat("/photo-finder/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var S=i("0f32"),N=i.n(S);a["a"].directive("scroll",{inserted:function(t,e){var i=function i(a){e.value(a,t)&&window.removeEventListener("scroll",i)};window.addEventListener("scroll",N()(i,300))}}),a["a"].directive("resize",{inserted:function(t,e){var i=function i(a){e.value(a,t)&&window.removeEventListener("resize",i)};window.addEventListener("resize",N()(i,300))}});var P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header"},[i("logo",{staticClass:"header__logo"}),i("app-nav",{staticClass:"header__nav"})],1)},L=[],R={data:function(){return{}},methods:{}},M=R,Q=(i("5452"),Object(s["a"])(M,P,L,!1,null,null,null)),B=Q.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"footer"},[i("div",{staticClass:"footer__row"},[i("div",{staticClass:"footer__col"},[i("logo",{staticClass:"footer__logo",attrs:{theme:t.logoTheme}}),t._m(0)],1),i("div",{staticClass:"footer__col"}),i("div",{staticClass:"footer__col"})])])},z=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer__text"},[i("p",[t._v("\n          This site uses the free api to search for images – "),i("a",{staticClass:"footer__link",attrs:{href:"https://pixabay.com"}},[t._v("pixabay.com")])])])}],K={data:function(){return{logoTheme:"light"}}},U=K,W=(i("53d7"),Object(s["a"])(U,H,z,!1,null,null,null)),J=W.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["logo",{"logo--light":"light"===t.theme}],on:{click:t.gotoHome}},[i("div",{staticClass:"logo__img"}),i("span",{staticClass:"logo__title"},[t._v("Photo Finder")])])},G=[],V=(i("7f7f"),{props:["theme"],data:function(){return{}},methods:{gotoHome:function(){"home"!==this.$router.currentRoute.name&&this.$router.push({path:"/"})}}}),X=V,Z=(i("c4ed"),Object(s["a"])(X,Y,G,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"nav"},[i("button",{staticClass:"nav__toggle",on:{click:t.toggleNav}},[t._v("=")]),i("ul",{class:["nav__list",{"nav__list--active":t.isNavActive}]},[i("li",{staticClass:"nav__item"},[i("router-link",{staticClass:"nav__link",attrs:{to:"/"}},[t._v("Home")])],1),i("li",{staticClass:"nav__item"},[i("router-link",{staticClass:"nav__link",attrs:{to:"/favorite"}},[t._v("Favorite")])],1)])])},it=[],at={data:function(){return{isNavActive:!1}},methods:{toggleNav:function(){this.isNavActive=!this.isNavActive}}},nt=at,rt=(i("d79f"),Object(s["a"])(nt,et,it,!1,null,null,null)),st=rt.exports,ot=i("c494"),ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("li",{staticClass:"picture"},[t.meta?i("div",{staticClass:"picture__tags"},t._l(t.imageTag.split(","),(function(e,a){return i("a",{key:a,staticClass:"picture__link picture__link--tag",on:{click:function(i){return i.preventDefault(),t.fetchData([e,t.type])}}},[t._v(t._s(e))])})),0):t._e(),i("img",{staticClass:"picture__image",attrs:{src:t.previewImage,alt:t.imageTag}}),i("div",{staticClass:"picture__footer"},[i("button",{class:["picture__like",{"picture__like--active":t.isFavorite}],attrs:{"aria-label":"Like picture"},on:{click:function(e){return t.toggleFavorite(t.id,t.index)}}}),i("a",{staticClass:"picture__link",attrs:{href:t.largeImage,target:"_blank"}},[t._v("Download")])])])])},lt=[],ut={props:["id","previewImage","largeImage","imageTag","meta","isFavorite","type","index"],data:function(){return{}},methods:{fetchData:function(t){this.$store.dispatch("fetchData",t)},toggleFavorite:function(t,e){this.$store.commit("toggleFavorite",[t,e])}}},vt=ut,ft=(i("8ec5"),Object(s["a"])(vt,ct,lt,!1,null,null,null)),pt=ft.exports,dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"autocomplete"},[i("ul",{staticClass:"autocomplete__list"},t._l(t.filteredDictionary,(function(e,a){return i("li",{key:a,staticClass:"autocomplete__item",on:{click:function(i){return t.setActiveWord(e.title)}}},[t._v(t._s(e.title))])})),0)])},gt=[],mt=(i("55dd"),{data:function(){return{queriesDictionary:this.$store.state.queriesDictionary.sort((function(t,e){return t.title>e.title?1:e.title>t.title?-1:0})),filteredDictionary:[],isActive:!1}},methods:{checkDictionary:function(t){var e=this;this.queriesDictionary.forEach((function(i){i.title.toLowerCase().includes(t.toLowerCase())&&t?(i.isActive=!0,e.isActive=!0):i.isActive=!1})),this.filteredDictionary=this.queriesDictionary.filter((function(t){return t.isActive}))},setActiveWord:function(t){this.$emit("set-query",t),this.isActive=!1}}}),ht=mt,_t=(i("7dcf"),Object(s["a"])(ht,dt,gt,!1,null,null,null)),yt=_t.exports;a["a"].config.productionTip=!1,a["a"].component("app-header",B),a["a"].component("app-footer",J),a["a"].component("logo",tt),a["a"].component("app-nav",st),a["a"].component("gallery-viewer",b),a["a"].component("favorite-image",ot["a"]),a["a"].component("app-picture",pt),a["a"].component("pagination",v.a),a["a"].component("app-autocomplete",yt),new a["a"]({router:D,store:O,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var a=i("e332"),n=i.n(a);n.a},"700b":function(t,e,i){},"73aa":function(t,e,i){},"7dcf":function(t,e,i){"use strict";var a=i("9d90"),n=i.n(a);n.a},"8ec5":function(t,e,i){"use strict";var a=i("73aa"),n=i.n(a);n.a},"9d90":function(t,e,i){},"9e74":function(t,e,i){},a589:function(t,e,i){},b1c4:function(t,e,i){},b1f6:function(t,e,i){},bbdb:function(t,e,i){"use strict";var a=i("b1c4"),n=i.n(a);n.a},c3b4:function(t,e,i){},c494:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"favorite-image"},t._l(t.favoriteImages,(function(t,e){return i("app-picture",{key:t.id,staticClass:"favorite-image__item",attrs:{previewImage:t.previewImageSource,largeImage:t.largeImageSource,imageTag:t.imageTags,id:t.id,meta:!1,isFavorite:t.isFavorite,index:e}})})),1)},n=[],r={data:function(){return{favoriteImages:[]}},mounted:function(){this.favoriteImages=this.$store.getters.favoriteImages}},s=r,o=(i("bbdb"),i("2877")),c=Object(o["a"])(s,a,n,!1,null,null,null);e["a"]=c.exports},c4ed:function(t,e,i){"use strict";var a=i("3931"),n=i.n(a);n.a},d79f:function(t,e,i){"use strict";var a=i("9e74"),n=i.n(a);n.a},e08c:function(t,e,i){"use strict";var a=i("c3b4"),n=i.n(a);n.a},e332:function(t,e,i){}});
//# sourceMappingURL=app.5bf6f9a3.js.map