<script setup lang="ts">
import { CircleAlert } from 'lucide-vue-next'
</script>

<template>
  <div class="rounded-lg border border-red-500/50 px-4 py-3 text-red-600">
    <p class="text-sm">
      <CircleAlert
        class="-mt-0.5 me-3 inline-flex opacity-60"
        :size="16"
        stroke-width="2"
        aria-hidden="true"
      />
      An error occurred!
    </p>
  </div>
</template>
