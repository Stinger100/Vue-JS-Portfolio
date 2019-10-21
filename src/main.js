import Vue from 'vue';
import App from './App.vue';
import VueScroll from 'vue-scrollto';
import axios from 'axios';


Vue.use(VueScroll, {
  easing: [.6, .80, .30, 1.9],
  duration: 3000 
}, axios);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')

