import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";

import { mask } from 'vue-the-mask'

import './router';

const app = createApp(App);


const googleAnalyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
if (googleAnalyticsId && import.meta.env.PROD) {
  app.use(VueGtag, {
    config: { id: googleAnalyticsId },
  });
}

app.use(createPinia());
app.use(router);
app.directive('mask', mask);

app.mount('#app');
