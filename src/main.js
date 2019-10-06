import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import Nav from './components/Nav.vue';
import GalleryViewer from './components/GalleryViewer';

Vue.config.productionTip = false;

Vue.component('app-nav', Nav);
Vue.component('gallery-viewer', GalleryViewer);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
