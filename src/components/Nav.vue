<template>
  <nav class="nav">
    <button class="nav__toggle" @click="toggleNav">=</button>
    <ul :class="['nav__list', {'nav__list--active': isNavActive}]">
      <li class="nav__item"><router-link class="nav__link" to="/">Home</router-link></li>
      <li class="nav__item"><router-link class="nav__link" to="/favorite">Favorite</router-link></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data(){
      return {
        isNavActive: false
      }
    },
    methods: {
      toggleNav(){
        this.isNavActive = !this.isNavActive;
      },
    }
  }
</script>

<style lang="scss">
  .nav {
    text-align: center;
    &__toggle {
      display: none;
      width: 30px;
      height: 30px;
      color: #ffffff;
      font-size: 24px;
      background-color: #909090;
      border: none;
      border-radius: 50%;
      cursor: pointer;
    }
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
      transition: color 0.2s ease-in, background-color 0.2s ease-in;
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

  @media screen and (max-width: 767px) {
    .nav {
      &__toggle {
        display: block;
        margin-left: auto;
      }
      &__list {
        position: absolute;
        bottom: -120px;
        left: 0;
        display: none;
        flex-direction: column;
        width: 100%;
        background-color: #ffffff;
        border-radius: 20px;
      }
      &__list--active {
        display: block;
      }
    }
  }
</style>
