import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Myorder from '@/views/myorder'
import Pay from '@/views/pay'
import ProDetail from '@/views/prodetail'
import Search from '@/views/search/index.vue'
import List from '@/views/search/list.vue'

import Home from '@/views/layout/home.vue'
import Cart from '@/views/layout/cart.vue'
import Category from '@/views/layout/category.vue'
import User from '@/views/layout/user.vue'

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

export default router
