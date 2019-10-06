<template>
  <header class="header">
    <div class="header__logo"></div>
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
    top: 20px;
    right: 10%;
    left: 10%;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #ffffff;
    border-radius: 100px;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
    &__logo {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      background-color: #303030;
    }
    &__title {
      margin: 0;
      font-size: 24px;
    }
    &__nav {
      margin-left: auto;
    }
	}
</style>
