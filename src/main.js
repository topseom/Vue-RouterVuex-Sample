import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';

// router
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue(App).$mount('#app');
