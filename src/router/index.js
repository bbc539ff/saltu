import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import PostDetail from '@/components/PostDetail'
import Timeline from '@/components/Timeline'
import Profile from '@/components/Profile'
import Home from '@/components/Home'
import Follow from '@/components/Follow'
import LikePost from '@/components/LikePost'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/home',
        name: 'timeline',
        component: Timeline
      },
      {
        path: '/post/:post_id',
        name: 'PostDetail',
        component: PostDetail
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: '/follower',
        name: 'Follower',
        component: Follow
      },
      {
        path: '/following',
        name: 'Following',
        component: Follow
      },
      {
        path: '/like',
        name: 'LikePost',
        component: LikePost
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
