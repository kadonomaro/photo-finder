<template>
  <footer class="footer">
    <div class="footer__row">
      <div class="footer__col">
        <logo class="footer__logo" :theme="logoTheme"></logo>
        <div class="footer__text">
          <p>
            This site uses the free api to search for images – <a class="footer__link" href="https://pixabay.com">pixabay.com</a>
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
    box-shadow: 0 -5px 15px rgba($color: #000000, $alpha: 0.3);
    &__row {
      display: flex;
      flex-wrap: wrap;
    }
    &__col {
      flex-basis: 33.3333%;
    }
    &__link {
      color: inherit;
      font-size: 20px;
      text-decoration: none;
    }
  }
</style>
