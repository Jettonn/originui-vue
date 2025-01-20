import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: { title: 'originui-vue/home' }
    },
    {
      path: '/inputs',
      name: 'inputs',
      component: () => import('@/views/Inputs.vue'),
      meta: { title: 'originui-vue/inputs' }
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('@/views/Buttons.vue'),
      meta: { title: 'originui-vue/buttons' }
    },
    {
      path: '/check-radio-switches',
      name: 'check-radio-switches',
      component: () => import('@/views/CheckRadioSwitches.vue'),
      meta: { title: 'originui-vue/check-radio-switches' }
    },
    {
      path: '/selects',
      name: 'selects',
      component: () => import('@/views/Selects.vue'),
      meta: { title: 'originui-vue/selects' }
    },
    {
      path: '/sliders',
      name: 'sliders',
      component: () => import('@/views/Sliders.vue'),
      meta: { title: 'originui-vue/sliders' }
    },
    {
      path: '/alerts-notifications-banners',
      name: 'alerts-notifications-banners',
      component: () => import('@/views/AlertsNotificationsBanners.vue'),
      meta: { title: 'originui-vue/alerts-notifications-banners' }
    },
    {
      path: '/dialogs',
      name: 'dialogs',
      component: () => import('@/views/Dialogs.vue'),
      meta: { title: 'originui-vue/dialogs' }
    },
    {
      path: '/accordions',
      name: 'accordions',
      component: () => import('@/views/Accordions.vue'),
      meta: { title: 'originui-vue/accordions' }
    },
    {
      path: '/tooltips',
      name: 'tooltips',
      component: () => import('@/views/Tooltips.vue'),
      meta: { title: 'originui-vue/tooltips' }
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
