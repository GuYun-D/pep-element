import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Container from '../components/container/src/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        component: Home
      }, {
        path: '/icon-choose',
        component: () => import('../views/IconChoose/index.vue')
      }, {
        path: '/choose-area',
        component: () => import('../views/chooseArea/index.vue')
      }, {
        path: '/trend',
        component: () => import('../views/trend/index.vue')
      }, {
        path: '/notification',
        component: import('../views/notification/index.vue')
      }, {
        path: '/list',
        component: import('../views/list/index.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router