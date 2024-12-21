import Vue from 'vue'
import VueRouter from 'vue-router'
// 配置一级路由
import Login from '@/views/login'
import Layout from '@/views/layout'
import Myorder from '@/views/myorder'
import Pay from '@/views/pay'
import ProDetail from '@/views/prodetail'
import Search from '@/views/search/index.vue'
import List from '@/views/search/list.vue'
// 配置二级路由
import Home from '@/views/layout/home.vue'
import Cart from '@/views/layout/cart.vue'
import Category from '@/views/layout/category.vue'
import User from '@/views/layout/user.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/cart', component: Cart },
      { path: '/category', component: Category },
      { path: '/user', component: User }
    ]
  },
  { path: '/myorder', component: Myorder },
  { path: '/pay', component: Pay },
  { path: '/prodetail/:id', component: ProDetail },
  { path: '/search', component: Search },
  { path: '/searchlist', component: List }
]

const router = new VueRouter({
  routes
})

const authUrls = ['/myorder', '/pay']

router.beforeEach((to, from, next) => {
  if (!authUrls.includes(to.path)) {
    // 不是需要登录的页面，直接放行
    next()
    return
  }
  // 需要登录的页面
  const token = store.getters.token
  if (token) {
    // 有 token，放行
    next()
  } else {
    // 没有 token，跳转到登录页面
    next('/login')
  }
})
export default router
