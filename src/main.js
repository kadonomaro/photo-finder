import Vue from 'vue';
import App from './App.vue';
import Pagination from 'vuejs-paginate';
import router from './router';
import store from './store';
import "./app.css";
import './registerServiceWorker';
import './directives';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Logo from './components/Logo.vue';
import Nav from './components/Nav.vue';
import GalleryViewer from './components/GalleryViewer';
import Favorite from './components/Favorite';
import Picture from './components/Picture.vue';

Vue.config.productionTip = false;

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('logo', Logo);
Vue.component('app-nav', Nav);
Vue.component('gallery-viewer', GalleryViewer);
Vue.component('favorite-image', Favorite);
Vue.component('app-picture', Picture);
Vue.component('pagination', Pagination);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
