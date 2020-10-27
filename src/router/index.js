import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '../views/UserList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'User List',
    component: UserList
  },
  {
    path: '/user/:id',
    name: 'User Info',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/UserInfo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
