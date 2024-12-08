<script setup lang="ts">
import { Eclipse } from 'lucide-vue-next'
</script>

<template>
  <div class="dark bg-muted px-4 py-3 text-foreground">
    <p class="text-center text-sm">
      <Eclipse
        class="-mt-0.5 me-3 inline-flex opacity-60"
        :size="16"
        :stroke-width="2"
        aria-hidden="true"
      />
      Get the most out of your app with real-time updates and analytics
      <span class="text-muted-foreground">·</span>
      <a href="#" class="font-medium underline hover:no-underline"> Upgrade </a>
    </p>
  </div>
</template>
