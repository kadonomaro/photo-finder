<template>
  <div :class="['logo', {'logo--light': theme === 'light'}]">
    <div class="logo__img"></div>
    <h1 class="logo__title">Photo Finder</h1>
  </div>
</template>

<script>
export default {
  props: ['theme']
};
</script>

<style lang="scss">
  .logo {
    display: flex;
    align-items: center;
    padding: 5px 15px 5px 5px;
    color: #ffffff;
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
      font-size: 24px;
    }
  }
  .logo--light {
    color: #909090;
    background-color: #ffffff;
  }
</style>
