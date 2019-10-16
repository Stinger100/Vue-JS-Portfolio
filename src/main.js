import Vue from 'vue';
import App from './App.vue';
import VueScroll from 'vue-scrollto';

Vue.use(VueScroll, {
  easing: [.6, .80, .30, 1.9],
  duration: 3000 
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')

