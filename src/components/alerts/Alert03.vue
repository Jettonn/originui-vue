<script setup lang="ts">
import { CircleAlert } from 'lucide-vue-next'
</script>

<template>
  <div class="rounded-lg border border-border px-4 py-3">
    <p class="text-sm">
      <CircleAlert
        class="-mt-0.5 me-3 inline-flex text-red-500"
        :size="16"
        :stroke-width="2"
        aria-hidden="true"
      />
      An error occurred!
    </p>
  </div>
</template>
