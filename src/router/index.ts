import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/components/HelloWorld.vue')
  }
  // {
  //   path: '/main',
  //   component: () => import('@/components/gg.vue')
  // }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
