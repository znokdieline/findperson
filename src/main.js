// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

import vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; 
import Principal from './components/home.veu';


new Vue({
  render: h => h(App),
}).$mount('#app')

const routes = [
  {
    path:'/',
    nam:'home',
    component: Principal,
  }

]

Vue.config.productionTip = false
Vue.use (VueRouter)

const router = new VueRouter({
 routes
})


