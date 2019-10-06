<template>
  <header class="header">
    <!-- <div class="header__logo" tabindex="0"><img src="build/img/code.svg" alt="photo finder"></div> -->
    <h1 class="header__title">Photo Finder</h1>
    <app-nav class="header__nav"></app-nav>
  </header>
</template>

<script>
export default {
	name: "Header"
	};
</script>

<style lang="scss">
	.header {
    position: fixed;
    z-index: 9;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #ffffff;
    box-shadow: 0 5px 5px rgba($color: #000000, $alpha: 0.2);
    &__logo {

    }
    &__title {
      margin: 0;
    }
    &__nav {
      margin-left: auto;
    }
	}
</style>
