<template>
  <div>
    <div
      class="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip"
    >
      <Header />
      <Illustration />
      <RouterView />
      <CTA v-if="isNotRootPath" />
      <Toaster />
      <Sooner />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterView } from 'vue-router'
import '@fontsource-variable/inter'
import Header from './demo/Header.vue'
import Illustration from './demo/Illustration.vue'
import CTA from './demo/CTA.vue'
import Toaster from './components/ui/Toaster.vue'
import Sooner from './components/ui/Sooner.vue'

const route = useRoute()

const isNotRootPath = computed(() => route.path !== '/')
</script>
