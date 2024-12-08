<script setup lang="ts">
import { CircleCheck } from 'lucide-vue-next'
</script>

<template>
  <div class="rounded-lg border border-emerald-500/50 px-4 py-3 text-emerald-600">
    <p class="text-sm">
      <CircleCheck
        class="-mt-0.5 me-3 inline-flex opacity-60"
        :size="16"
        stroke-width="2"
        aria-hidden="true"
      />
      Completed successfully!
    </p>
  </div>
</template>
