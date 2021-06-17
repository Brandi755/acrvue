<template>
  <div id="app">
    <v-app>
      <MyMenu />
      <!-- ?pour quoi id= page wrap ? -->
      <div id="page-wrap" class="wrap">
        <router-view class="router-wrap" />
      </div>
      <!--  -->
    </v-app>
  </div>
</template>

<script>
import MyMenu from "./components/myMenu.vue";
export default {
  components: {
    MyMenu
  }
};
</script>

<style>
body {
  background-color: #fff !important;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: black;
  height: 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.wrap {
  height: auto;
}
.router-wrap {
  min-height: 100vh;
}
</style>
