import Vue from 'vue'
import VueRouter from 'vue-router'
import Repos from '../views/Repos.vue'
import Starred from '../views/Starred.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/repos',
    name: 'Repos',
    component: Repos
  },
  {
    path: '/starred',
    name: 'Starred',
    component: Starred
  },
  {
    path: '/',
    redirect: '/repos'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
