<script setup lang="ts">
import { CircleCheck } from 'lucide-vue-next'
</script>

<template>
  <div class="border-eborder rounded-lg border px-4 py-3">
    <p class="text-sm">
      <CircleCheck
        class="-mt-0.5 me-3 inline-flex text-emerald-500"
        :size="16"
        stroke-width="2"
        aria-hidden="true"
      />
      Completed successfully!
    </p>
  </div>
</template>
