<template>
  <div id="app">
		<div class="container">
			<app-header></app-header>
			<!-- <app-nav></app-nav> -->
			<router-view/>
		</div>
  </div>
</template>

<style lang="scss">
body {
	margin: 0;
}

.container {
	max-width: 1600px;
	margin: 0 auto;
}
#app {
	padding-top: 100px;
  color: #303030;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
