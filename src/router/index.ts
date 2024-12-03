import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import Inputs from '@/views/Inputs.vue'
import Buttons from '@/views/Buttons.vue'
import CheckRadioSwitches from '@/views/CheckRadioSwitches.vue'
import Selects from '@/views/Selects.vue'
import Sliders from '@/views/Sliders.vue'
import Dialogs from '@/views/Dialogs.vue'

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
    {
      path: '/check-radio-switches',
      name: 'check-radio-switches',
      component: CheckRadioSwitches,
      meta: { title: 'originui-vue/check-radio-switches' }
    },
    {
      path: '/selects',
      name: 'selects',
      component: Selects,
      meta: { title: 'originui-vue/selects' }
    },
    {
      path: '/sliders',
      name: 'sliders',
      component: Sliders,
      meta: { title: 'originui-vue/sliders' }
    },
    {
      path: '/dialogs',
      name: 'dialogs',
      component: Dialogs,
      meta: { title: 'originui-vue/dialogs' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

export default router
