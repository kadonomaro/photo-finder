<template>
  <section class="favorite">
    <h2 class="favorite__title">Favorite pictures</h2>
    <favorite-image></favorite-image>
  </section>
</template>

<script>
import Favorite from "@/components/Favorite";
export default {
  data() {
    return {

    };
  }
};
</script>

<style lang="scss">

  .favorite {

    &__title {
      margin: 0 0 20px;
      text-align: center;
    }
  }

</style>
