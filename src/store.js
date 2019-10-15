import Vue from 'vue';
import Vuex from 'vuex';
import dictionary from '@/components/autocomplete/dictionary';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    API_KEY: '12967020-a3deecfacc5cfa367f6aefde8',
    images: [],
    favoriteImages: [],
    queriesDictionary: dictionary
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
    updateDictionary(state, word) {
      state.queriesDictionary.push({
        title: word,
        isActive: false
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
    async fetchData(state, [query, type, page]) {
      this.state.images.length = 0;
      await fetch(`https://pixabay.com/api/?key=${this.state.API_KEY}&q=${query}&image_type=${type}&pretty=true&page=${page}`)
        .then(responce => {
          return responce.json();
        })
        .then(data => {
          for (let i = 0; i < data.hits.length; i++) {
            this.commit('updateData', data.hits[i]);
            // console.log(data);
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
