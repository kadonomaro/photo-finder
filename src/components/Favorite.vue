<template>
  <div class="favorite-image">
    <div v-for="(image, index) in favoriteImage" :key="index">{{ image }}</div>
    <button @click="filterImage">Click</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      favoriteImage: []
    }
  },
  methods: {
    filterImage(){
      console.log(this.$store.getters.favoriteImages);
    }
  }
};
</script>

<style lang="scss">

</style>
