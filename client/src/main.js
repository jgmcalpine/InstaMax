import Vue from 'vue';
import Feed from './Feed.vue';
import Login from './Login.vue';
import Container from './Container.vue';
import store from './overvue/store';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login },
  { path: '/feed', component: Feed },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

// Removed state as subscribe parameter, was undefined
store.createStateStream().subscribe(() => console.log('Initial State'));

const app = new Vue({
  el: '#App',
  store,
  router,
  render: h => h(Container),
});
