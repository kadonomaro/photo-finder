<template>
  <div id="app">

		<div class="container">

			<app-header></app-header>
			<router-view/>

		</div>

    <app-footer></app-footer>

  </div>
</template>

<style lang="scss">
.container {
	max-width: 1600px;
	margin: 0 auto;
  padding: 20px 10px;
  box-sizing: border-box;
}
#app {
  position: relative;
  z-index: 1;
	padding-top: 100px;
  color: #303030;
  font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f3f3f3;
  overflow: hidden;
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
}
</style>
