<script setup lang="ts">
import { TriangleAlert } from 'lucide-vue-next'
</script>

<template>
  <div class="rounded-lg border border-border px-4 py-3">
    <p class="text-sm">
      <TriangleAlert
        class="-mt-0.5 me-3 inline-flex text-amber-500"
        :size="16"
        stroke-width="2"
        aria-hidden="true"
      />
      Some information is missing!
    </p>
  </div>
</template>
