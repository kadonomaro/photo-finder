<template>
  <header class="header">
    <logo class="header__logo"></logo>
    <app-nav class="header__nav"></app-nav>
  </header>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style lang="scss">
.header {
  position: fixed;
  z-index: 999;
  top: 20px;
  width: 80%;
  left: 10%;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 100px;
  box-shadow: 0 5px 15px rgba($color: #000000, $alpha: 0.3);
  transition: top 0.3s ease-in;
  &__nav {
    margin-left: auto;
  }

  @media screen and (max-width: 767px) {
    .header {
      &__nav {
        position: absolute;
        left: 10px;
        right: 10px;
      }

    }
  }
}
</style>
