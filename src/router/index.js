import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import Search from '@/views/search'
import SearchList from '@/views/search/list'
import Login from '@/views/login'
import Home from '@/views/layout/home'
import Cart from '@/views/layout/cart'
import Catrgory from '@/views/layout/category'
import User from '@/views/layout/user'
import store from '@/store'

const Pay = () => import('@/views/pay')
const ProDetail = () => import('@/views/prodetail')
const MyOrder = () => import('@/views/myorder')

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/search', component: Search },
  { path: '/searchlist', component: SearchList },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/category', component: Catrgory },
      { path: '/cart', component: Cart },
      { path: '/user', component: User }

    ]
  },
  { path: '/prodetail/:id', component: ProDetail },
  { path: '/pay', component: Pay },
  { path: '/myorder', component: MyOrder }

]
const authUrl = ['/pay', '/myorder']

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (!authUrl.includes(to.path)) {
    next()
    console.log('qqqq')

    return false
  }
  if (token) {
    next()
    console.log('wwww')
  } else {
    next('/login')
    console.log('eeee')
  }
})
export default router
