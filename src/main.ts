import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";

import { mask } from 'vue-the-mask'

import './router';
import { createHead } from '@unhead/vue'

const app = createApp(App);


const googleAnalyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
if (googleAnalyticsId && import.meta.env.PROD) {
  app.use(VueGtag, {
    config: { id: googleAnalyticsId },
  });
}

const head = createHead()

app.use(createPinia());
app.use(router);
app.use(head)
app.directive('mask', mask);

app.mount('#app');
