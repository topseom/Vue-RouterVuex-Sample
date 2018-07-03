<template>
  <div id="app">
    <ul>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/about">about</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import router from './Router.vue';
import store from './store/Store.vue';

export default {
  name: 'app',
  router,
  store
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
},
ul {
  list-style: none;
  padding-left: 0;
}
</style>
