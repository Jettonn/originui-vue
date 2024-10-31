import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Inputs from '@/views/Inputs.vue'
import Buttons from '@/views/Buttons.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'originui-vue/home' }
    },
    {
      path: '/inputs',
      name: 'inputs',
      component: Inputs,
      meta: { title: 'originui-vue/inputs' }
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: Buttons,
      meta: { title: 'originui-vue/buttons' }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
