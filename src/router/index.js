import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Member from '@/components/Member'
import Home from '@/components/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/member',
    name: 'member',
    component: Member
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
