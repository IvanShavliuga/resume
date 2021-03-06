import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'
import Post from '../Post.vue'
import List from '../Postslist.vue'
import En from '../En.vue'
import Ru from '../Ru.vue'
import Portfolio from '../Portfolio.vue'
import Website from '../Website.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/en',
    name: 'En',
    component: En
  },
  {
    path:'/ru',
    name: 'Ru',
    component: Ru
  },
  {
    path: '/Post',
    name: 'Post',
    component: Post
  },
  {
    path: '/List',
    name: 'List',
    component: List
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/Website',
    name: 'Website',
    component: Website
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
