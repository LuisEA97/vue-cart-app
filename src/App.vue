<template>
  <div id="nav">
    <NavBar />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8fafc;
  height: 100vh;
  width: 100%;
  overflow: auto;
}

button {
  border: 0;
  background-color: transparent;
  cursor: pointer;
}
</style>
