<template>
  <div class="favorite-image">
    <div v-for="(image, index) in favoriteImage" :key="index">{{ image }}</div>
    <button @click="log">Click</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      favoriteImage: this.$store.state.favoriteImages
    }
  },
  methods: {
    log(){
      console.log(this.favoriteImage);
    }
  }
};
</script>

<style lang="scss">

</style>
