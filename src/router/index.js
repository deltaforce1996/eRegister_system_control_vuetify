// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/AppDefault.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        //component: () => import('@/views/UserMgmtPage.vue'),
        component: () => import('@/views/HomePage.vue'),
      },
      {
        path: '/UserManagement',
        name: 'UserManagement',
        component: () => import('@/views//UserManamgent/UserMangementPage.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
