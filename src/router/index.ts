import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes.ts'

import Home from '@/views/home/index.vue'

let router = createRouter({
  // 路由模式 hash
  history: createWebHashHistory(),
  routes: [...constantRoutes],
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
