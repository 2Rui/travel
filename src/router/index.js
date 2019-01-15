import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
    	path:'/city',
    	name:'City',
      component:City
    },{
      path:'/detail/:id',
      name:'Detail',
      component:Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {//d当路由进入一个新页面，页面在最顶部，解决不同页面滚动条的位置
       return { x: 0, y: 0 }
    }
})
