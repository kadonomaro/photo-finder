import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    API_KEY: '12967020-a3deecfacc5cfa367f6aefde8',
    images: {
      previewImageSource: [],
      largeImageSource: [],
      imageTags: [],
      isFavorite: false
    }
  },
  mutations: {
    updateData(state, data) {
      this.state.images.previewImageSource.push(data.webformatURL);
      this.state.images.largeImageSource.push(data.largeImageURL);
      this.state.images.imageTags.push(data.tags);
      console.log(data.tags);
    }
  },
  actions: {
    async fetchData(state, query) {
      this.state.images.previewImageSource.length = 0;
      this.state.images.largeImageSource.length = 0;
      this.state.images.imageTags.length = 0;
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

});
