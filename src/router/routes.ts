// 常量路由
export const constantRoutes = [
  {
    // 登录页面
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    // 主页面
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'layout',
  },
  {
    // 404页面
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    // 没有匹配到的页面
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]
