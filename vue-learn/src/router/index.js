import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // 路由级代码分割 - 这会为此路由生成单独的chunk (About.[hash].js)
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router