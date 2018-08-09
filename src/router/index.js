// 路由
import Vue from 'vue'
import Router from 'vue-router'
// 引入login.vue组件
import Login from '@/components/Login'
//引入home.vue组件
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/home',
      name:'home',
      component:Home
    }
  ]
})
