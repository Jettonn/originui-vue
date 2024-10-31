<template>
  <div>
    <link
      rel="preload"
      :href="interVariableWoff2"
      as="font"
      type="font/woff2"
      crossorigin="anonymous"
    />
    <div
      class="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip"
    >
      <Header />
      <Illustration />
      <RouterView />
      <CTA v-if="isNotRootPath" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterView } from 'vue-router'
import interVariableWoff2 from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2'
import Header from './demo/Header.vue'
import Illustration from './demo/Illustration.vue'
import CTA from './demo/CTA.vue'

const route = useRoute()

const isNotRootPath = computed(() => route.path !== '/')
</script>
