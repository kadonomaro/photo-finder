<template>
  <footer class="footer">
    <div class="footer__row">
      <div class="footer__col">
        <logo class="footer__logo" :theme="logoTheme"></logo>
        <div class="footer__text">
          <p>
            This site uses the free api to search for images <a href="https://pixabay.com" class="">pixabay.com</a>
          </p>
        </div>
      </div>
      <div class="footer__col">

      </div>
      <div class="footer__col">

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      logoTheme: "light"
    };
  }
};
</script>

<style lang="scss">
  .footer {
    padding: 20px 10px;
    background-color: #cccccc;
    &__row {
      display: flex;
      flex-wrap: wrap;
    }
    &__col {
      flex-basis: 33.3333%;
    }
  }
</style>
