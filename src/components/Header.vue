<template>
  <header :class="['header',{'header--narrow': isNarrow}]" @mouseenter="toggleNarrow">
    <logo class="header__logo"></logo>
    <app-nav class="header__nav" v-show="!isNarrow"></app-nav>
  </header>
</template>

<script>
export default {
  data(){
    return {
      isNarrow: false
    }
  },
  methods: {
    toggleNarrow(){
      this.isNarrow = !this.isNarrow;
    },

  }
}
</script>

<style lang="scss">
	.header {
    position: fixed;
    z-index: 9;
    top: 20px;
    width: 80%;
    left: 10%;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 100px;
    box-shadow: 0 5px 15px rgba($color: #000000, $alpha: 0.3);
    transition: box-shadow 0.2s ease-in, width 0.3s ease-in, left 0.3s ease-in;
    &__nav {
      margin-left: auto;
    }
	}
  .header--narrow {
    left: 20px;
    width: 195px;
  }
</style>
