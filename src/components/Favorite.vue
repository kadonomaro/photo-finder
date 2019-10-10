<template>
  <div class="favorite-image">
    <app-picture
      class="gallery-viewer__item"
      v-for="(image, index) in favoriteImages"
      :key="index"
      :previewImage="image.previewImageSource"
      :largeImage="image.largeImageSource"
      :imageTag="image.imageTags"
      :index="index"
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

</style>
