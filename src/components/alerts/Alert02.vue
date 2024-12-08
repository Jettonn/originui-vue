<script setup lang="ts">
import { TriangleAlert } from 'lucide-vue-next'
</script>

<template>
  <div class="rounded-lg border border-amber-500/50 px-4 py-3 text-amber-600">
    <p class="text-sm">
      <TriangleAlert
        class="-mt-0.5 me-3 inline-flex opacity-60"
        :size="16"
        :stroke-width="2"
        aria-hidden="true"
      />
      Some information is missing!
    </p>
  </div>
</template>
