// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.bus=new Vue();
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new 
移动端开发click 点击300ms延迟的问题
*/
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
//
// router.beforeEach((to, from, next) => {
//                console.log(to);
//                console.log(from)
// 				})
