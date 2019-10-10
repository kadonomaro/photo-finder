import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    API_KEY: '12967020-a3deecfacc5cfa367f6aefde8',
    images: []
  },
  mutations: {
    updateData(state, data) {
      this.state.images.push({
        previewImageSource: data.webformatURL,
        largeImageSource: data.largeImageURL,
        imageTags: data.tags,
        isFavorite: false
      });
    },
    setFavorite(state, id) {
      this.state.images[id].isFavorite = !this.state.images[id].isFavorite;
    }
  },
  actions: {
    async fetchData(state, query) {
      this.state.images.length = 0;

      await fetch(`https://pixabay.com/api/?key=${this.state.API_KEY}&q=${query}&image_type=photo&pretty=true`)
        .then(responce => {
          return responce.json();
        })
        .then(data => {
          for (let i = 0; i < data.hits.length; i++) {
            this.commit('updateData', data.hits[i]);
          }

        });
    }
  },
  getters: {
    favoriteImages(state) {

    }
  }

});
