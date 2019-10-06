import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "./app.css";
import './registerServiceWorker';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Logo from './components/Logo.vue';
import Nav from './components/Nav.vue';
import GalleryViewer from './components/GalleryViewer';

Vue.config.productionTip = false;

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('logo', Logo);
Vue.component('app-nav', Nav);
Vue.component('gallery-viewer', GalleryViewer);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
