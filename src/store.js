import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    API_KEY: '12967020-a3deecfacc5cfa367f6aefde8',
    images: [],
    favoriteImages: []
  },
  mutations: {
    updateData(state, data) {
      state.images.push({
        id: data.id,
        previewImageSource: data.webformatURL,
        largeImageSource: data.largeImageURL,
        imageTags: data.tags,
        isFavorite: false
      });
    },
    toggleFavorite(state, id) {
      const image = state.images.find(img => img.id === id);
      image.isFavorite = !image.isFavorite;

      if (!state.favoriteImages.includes(image)) {
        state.favoriteImages.push(image);
      } else {
        state.favoriteImages = state.favoriteImages.filter(img => img !== image);
      }

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
            // console.log(data.hits);
          }

        });
    }
  },
  getters: {
    favoriteImages: state => {
      return state.favoriteImages;
    }
  }

});
