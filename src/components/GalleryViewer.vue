<template>
  <div class="gallery-viewer">
    <div class="gallery-viewer__search">
      <form action="" class="search">
        <input
          type="search"
          class="search__input"
          v-model="query"
          placeholder="What would you like to find?"
        >
        <button class="search__button" @click.prevent="fetchImages(query)">Search</button>
      </form>
    </div>

    <ul class="gallery-viewer__list">
      <app-picture
        class="gallery-viewer__item"
        v-for="(image, index) in previewImageSource"
        :key="index"
        :previewImage="image"
        :largeImage="largeImageSource[index]"
        :imageTag="imageTags[index]"
        :FetchImageData="fetchImages"
      ></app-picture>
    </ul>

  </div>
</template>

<script>
const API_KEY = '12967020-a3deecfacc5cfa367f6aefde8';
export default {
  data(){
    return{
      previewImageSource: [],
      largeImageSource: [],
      imageTags: [],
      query: '',
      randomQueries: ['flowers', 'cats', 'dogs', 'bubbles', 'butterfly', 'peoples', 'winter', 'summer',]
    }
  },
  mounted(){
    this.fetchImages(this.randomQueries[this.getRandom(0, this.randomQueries.length - 1)])
  },
  methods: {
    getRandom(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    async fetchImages(query){
      this.query = '';
      this.previewImageSource.length = 0;
      this.largeImageSource.length = 0;
      this.imageTags.length = 0;

      await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&pretty=true`)
      .then(responce=>{
        return responce.json();
      })
      .then(data=>{
        for (let i = 0; i < data.hits.length; i++) {
          this.previewImageSource.push(data.hits[i].webformatURL);
          this.largeImageSource.push(data.hits[i].largeImageURL);
          this.imageTags.push(data.hits[i].tags);
        }
        // console.log(data.hits);
      })
    }
  }
}
</script>

<style lang="scss">
  .gallery-viewer {

    &__search {
      margin-bottom: 20px;
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
      padding: 0;
      list-style-type: none;
    }
    &__item {
      display: flex;
      flex-grow: 1;
      flex-basis: calc(25% - 30px);
      min-width: 250px;
      margin: 15px;
    }
  }

.search {
    display: flex;
    border-radius: 20px;
    box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.2);
    &__input,
    &__button {
      padding: 8px 12px;
      font-size: 18px;
      border: 2px solid transparent;
      outline: none;
      &:hover,
      &:focus {
        border-color: #606060;
      }
    }
    &__input {
      flex-grow: 1;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      border-right-width: 0px;
      transition: border-color 0.2s ease-in;
    }
    &__button {
      min-width: 120px;
      color: #ffffff;
      background-color: #606060;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      transition: background-color 0.2s ease-in, color 0.2s ease-in, border-color 0.2s ease-in;
      cursor: pointer;
      &:hover,
      &:focus {
        color: #303030;
        background-color: #cccccc;
      }
    }
  }
</style>

