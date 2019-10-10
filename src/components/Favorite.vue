<template>
  <div class="favorite-image">
    <app-picture
      class="favorite-image__item"
      v-for="(image, index) in favoriteImages"
      :key="index"
      :previewImage="image.previewImageSource"
      :largeImage="image.largeImageSource"
      :imageTag="image.imageTags"
      :index="index"
      :meta="false"
    ></app-picture>
  </div>
</template>

<script>
export default {
  data(){
    return {
      favoriteImages: [],
    }
  },
  mounted(){
    this.favoriteImages = this.$store.getters.favoriteImages;
  },
};
</script>

<style lang="scss">
  .favorite-image {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    &__item {
      display: flex;
      flex-basis: calc(25% - 20px);
      min-width: 300px;
      margin: 10px;
    }
  }
</style>
