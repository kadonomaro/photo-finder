<template>
  <div class="logo">
    <div class="logo__img"></div>
    <h1 class="logo__title">Photo Finder</h1>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
  .logo {
    display: flex;
    align-items: center;
    padding: 5px 15px 5px 5px;
    background-color: #909090;
    border-radius: 40px;
    &__img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      background-image: url('../assets/logo.svg');
      background-repeat: no-repeat;
    }
    &__title {
      margin: 0;
      color: #ffffff;
      font-size: 24px;
    }
  }
</style>
