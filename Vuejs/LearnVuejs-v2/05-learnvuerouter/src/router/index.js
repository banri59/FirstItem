import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// ES6的懒加载写法
const Home = () => import('../components/Home');
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');

const About = () => import('../components/About');
const User = () => import('../components/User');
const Profile = () => import('../components/Profile')

Vue.use(Router)

// 配置router和组件之间的关系
export default new Router({
  routes: [
    {
      path: '/',
      // redirect重定向: 重新定义一个方向
      redirect: '/Home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      },
      // 嵌套路由
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      },
    },
    {
      path: '/user/:userId', // 动态路由
      component: User,
      meta: {
        title: '用户'
      },
    },
    {
      path: '/profile', // query配置: 1. 普通配置
      component: Profile,
      meta: {
        title: '档案'
      },
    }
  ],
  mode: 'history',
  // 修改linkActiveClass的具体名称
  linkActiveClass: 'active' 
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
})
