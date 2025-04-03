<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { FlipHorizontal, FlipVertical } from 'lucide-vue-next'
</script>

<template>
  <div class="inline-flex -space-x-px rounded-lg shadow-xs shadow-black/5 rtl:space-x-reverse">
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
