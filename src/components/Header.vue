<template>
  <header class="header">
    <logo class="header__logo"></logo>
    <app-nav class="header__nav"></app-nav>
  </header>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
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
    box-shadow: 0 5px 15px rgba($color: #000000, $alpha: 0.3);
    transition: box-shadow 0.2s ease-in;
    &__nav {
      margin-left: auto;
    }
	}
</style>
