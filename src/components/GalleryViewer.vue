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
        <button class="search__button" @click.prevent="fetchData(query)">Search</button>
      </form>
    </div>

    <ul class="gallery-viewer__list">
      <app-picture
        class="gallery-viewer__item"
        v-for="image in images"
        :key="image.id"
        :previewImage="image.previewImageSource"
        :largeImage="image.largeImageSource"
        :imageTag="image.imageTags"
        :id="image.id"
        :meta="true"
        :FetchImageData="fetchData"
      ></app-picture>
    </ul>

  </div>
</template>

<script>
const API_KEY = '12967020-a3deecfacc5cfa367f6aefde8';
let isLoaded = false;
export default {
  data(){
    return{
      query: '',
      randomQueries: ['flowers', 'cats', 'dogs', 'bubbles', 'butterfly', 'peoples', 'winter', 'summer'],
      images: this.$store.state.images
    }
  },
  mounted(){
    if (!isLoaded) {
      this.$store.dispatch('fetchData', this.randomQueries[this.getRandom(0, this.randomQueries.length - 1)])
      isLoaded = true;
    }

  },
  methods: {
    fetchData(){
      this.$store.dispatch('fetchData', this.query);
      this.query = '';
    },
    getRandom(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
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

