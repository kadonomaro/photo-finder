<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item"><router-link class="nav__link" to="/">Home</router-link></li>
      <li class="nav__item"><router-link class="nav__link" to="/favorite">Favorite</router-link></li>
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

    &__list {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    &__item {
      flex-grow: 1;
      margin: 5px;

    }
    &__link {
      display: block;
      min-width: 60px;
      padding: 6px 10px;
      color: #303030;
      border-radius: 50px;
      text-decoration: none;
      transition: color 0.2s ease-in,background-color 0.2s ease-in;
      &:hover {
        color: #ffffff;
        background-color: #606060;
      }
    }
    &__link.router-link-exact-active {
      color: #ffffff;
      background-color: #909090;
    }
  }
</style>
