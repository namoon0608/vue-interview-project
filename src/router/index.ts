// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue'),
      meta: { requiresAuth: true }, // 需要驗證
    },
    {
      path: '/',
      redirect: '/dashboard',
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  const isAuthenticated = !!authStore.accountId

  const authRequired = to.meta.requiresAuth

  if (authRequired && !isAuthenticated) {
    console.warn('未登入，跳轉至 Login')
    return next('/login')
  }

  if (to.path === '/login' && isAuthenticated) {
    return next('/dashboard')
  }

  next()
})

export default router
