<script setup lang="ts">
import { FlipHorizontal, FlipVertical } from 'lucide-vue-next'
import Button from '../ui/Button.vue'
</script>

<template>
  <div class="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse">
    <Button
      class="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
      variant="outline"
      size="icon"
      aria-label="Flip Horizontal"
    >
      <FlipHorizontal :size="16" :stroke-width="2" aria-hidden="true" />
    </Button>
    <Button
      class="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
      variant="outline"
      size="icon"
      aria-label="Flip Vertical"
    >
      <FlipVertical :size="16" :stroke-width="2" aria-hidden="true" />
    </Button>
  </div>
</template>
