import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favoriteImages: []
  },
  mutations: {
    addToFavorite(state, img) {
      state.favoriteImages.push(img);
    }
  },
  actions: {

  },
});
