import '@babel/polyfill';
import 'es6-promise/auto';
import Vue from 'vue';
import App from './App.vue';
import store from './store';

new Vue({
  el: '#App',
  store,
  render: (h) => h(App)
});
