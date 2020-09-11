import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'
import Post from '../Post.vue'
import Portfolio from '../Portfolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Post',
    name: 'Post',
    component: Post
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
