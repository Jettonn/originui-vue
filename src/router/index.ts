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
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

export default router
