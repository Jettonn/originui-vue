<script setup lang="ts">
import { Info } from 'lucide-vue-next'
</script>

<template>
  <div class="rounded-lg border border-blue-500/50 px-4 py-3 text-blue-600">
    <p class="text-sm">
      <Info
        class="-mt-0.5 me-3 inline-flex opacity-60"
        :size="16"
        stroke-width="2"
        aria-hidden="true"
      />
      Just a quick note!
    </p>
  </div>
</template>
