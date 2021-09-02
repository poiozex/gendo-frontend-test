<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>

import Header from './views/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: "Open Sans", sans-serif;
  width: 100vw;
  height: 100vh;
  background-color: rgb(192, 192, 248);
  margin: 0;
  padding: 0;
}
</style>
