import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: { title: 'coss-ui-vue/home' }
    },
    {
      path: '/inputs',
      name: 'inputs',
      component: () => import('@/views/Inputs.vue'),
      meta: { title: 'coss-ui-vue/inputs' }
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('@/views/Buttons.vue'),
      meta: { title: 'coss-ui-vue/buttons' }
    },
    {
      path: '/avatars',
      name: 'avatars',
      component: () => import('@/views/Avatars.vue'),
      meta: { title: 'coss-ui-vue/avatars' }
    },
    {
      path: '/badges',
      name: 'badges',
      component: () => import('@/views/Badge.vue'),
      meta: { title: 'coss-ui-vue/badges' }
    },
    {
      path: '/check-radio-switches',
      name: 'check-radio-switches',
      component: () => import('@/views/CheckRadioSwitches.vue'),
      meta: { title: 'coss-ui-vue/check-radio-switches' }
    },
    {
      path: '/selects',
      name: 'selects',
      component: () => import('@/views/Selects.vue'),
      meta: { title: 'coss-ui-vue/selects' }
    },
    {
      path: '/sliders',
      name: 'sliders',
      component: () => import('@/views/Sliders.vue'),
      meta: { title: 'coss-ui-vue/sliders' }
    },
    {
      path: '/alerts-notifications-banners',
      name: 'alerts-notifications-banners',
      component: () => import('@/views/AlertsNotificationsBanners.vue'),
      meta: { title: 'coss-ui-vue/alerts-notifications-banners' }
    },
    {
      path: '/dialogs',
      name: 'dialogs',
      component: () => import('@/views/Dialogs.vue'),
      meta: { title: 'coss-ui-vue/dialogs' }
    },
    {
      path: '/accordions',
      name: 'accordions',
      component: () => import('@/views/Accordions.vue'),
      meta: { title: 'coss-ui-vue/accordions' }
    },
    {
      path: '/tooltips',
      name: 'tooltips',
      component: () => import('@/views/Tooltips.vue'),
      meta: { title: 'coss-ui-vue/tooltips' }
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: () => import('@/views/Tabs.vue'),
      meta: { title: 'coss-ui-vue/tabs' }
    },
    {
      path: '/breadcrumbs',
      name: 'breadcrumbs',
      component: () => import('@/views/Breadcrumbs.vue'),
      meta: { title: 'coss-ui-vue/breadcrumbs' }
    },
    {
      path: '/progress',
      name: 'progress',
      component: () => import('@/views/Progress.vue'),
      meta: { title: 'coss-ui-vue/progress' }
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: () => import('@/views/Pagination.vue'),
      meta: { title: 'coss-ui-vue/pagination' }
    },
    {
      path: '/dropdowns',
      name: 'dropdowns',
      component: () => import('@/views/Dropdowns.vue'),
      meta: { title: 'coss-ui-vue/dropdowns' }
    },
    {
      path: '/tables',
      name: 'tables',
      component: () => import('@/views/Tables.vue'),
      meta: { title: 'coss-ui-vue/tables' }
    },
    {
      path: '/steppers',
      name: 'steppers',
      component: () => import('@/views/Steppers.vue'),
      meta: { title: 'coss-ui-vue/steppers' }
    },
    {
      path: '/navigation-menus',
      name: 'navigation-menus',
      component: () => import('@/views/NavigationMenus.vue'),
      meta: { title: 'coss-ui-vue/navigation-menus' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router
