<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item"><router-link class="nav__link" to="/">Home</router-link></li>
      <li class="nav__item"><router-link class="nav__link" to="/about">Favorite</router-link></li>
    </ul>
  </nav>
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
  .nav {
    position: fixed;
    z-index: 9;
    top: 0;
    right: 0;
    left: 0;
    padding: 10px 0;
    background-color: #ffffff;
    box-shadow: 0 5px 5px rgba($color: #000000, $alpha: 0.2);
    &__list {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    &__item {
      flex-grow: 1;
      margin: 5px;
      border: 1px solid #606060;
    }
    &__link {
      display: block;
      padding: 8px 4px;
      color: #303030;
      text-decoration: none;
      transition: color 0.2s ease-in,background-color 0.2s ease-in;
      &:hover {
        color: #ffffff;
        background-color: #303030;
      }
    }
  }
</style>
