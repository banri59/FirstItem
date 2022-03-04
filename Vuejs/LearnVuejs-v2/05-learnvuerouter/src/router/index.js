import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect重定向: 重新定义一个方向
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/About',
      component: About
    }
  ],
  mode: 'history',
  // 修改linkActiveClass的具体名称
  linkActiveClass: 'active' 
})
