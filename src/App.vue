<template>
  <div id="app">
		<div class="container">
			<app-header></app-header>
			<router-view/>
		</div>
    <app-footer></app-footer>
    <modals-container/>
  </div>

</template>

<script>

export default {

}
</script>

<style lang="scss">
.container {
  flex-grow: 1;
  width: 100%;
	max-width: 1600px;
	margin: 0 auto;
  padding: 20px 10px;
  box-sizing: border-box;
}
#app {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;
	padding-top: 100px;
  color: #303030;
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f3f3f3;
  overflow: hidden;
  box-sizing: border-box;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -120px;
    right: -200px;
    width: 50%;
    padding-bottom: 50%;
    background-image: url('./assets/background/background-1.svg');
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.5;
  }
  .image-modal {

    img {
      display: block;
      // max-width: 100%;
      width: 100%;
      // height: 700px;
    }
    &__image {

    }
    &__footer {

    }
    &__button {

    }
  }
}
</style>

