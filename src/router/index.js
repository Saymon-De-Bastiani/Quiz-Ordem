import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/aviso',
      name: 'aviso',
      component: () => import ('../views/Warning.vue'),
    },
    {
      path: '/teste',
      name: 'teste',
      component: () => import ('../views/Test.vue'),
    },
    {
      path: '/resultado',
      name: 'resultado',
      component: () => import ('../views/Result.vue'),
    },
  ],
})

export default router
