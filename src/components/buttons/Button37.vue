<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { ChevronDown, GitFork } from 'lucide-vue-next'
</script>

<template>
  <div
    class="inline-flex -space-x-px divide-x divide-primary-foreground/30 rounded-lg shadow-xs shadow-black/5 rtl:space-x-reverse"
  >
    <Button
      class="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
    >
      <GitFork class="me-2 opacity-60" :size="16" :stroke-width="2" aria-hidden="true" />
      Fork
      <span
        class="-me-1 ms-3 inline-flex h-5 max-h-full items-center rounded border border-primary-foreground/30 px-1 font-[inherit] text-[0.625rem] font-medium text-primary-foreground/60"
      >
        18
      </span>
    </Button>
    <Button
      class="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
      size="icon"
      aria-label="Options"
    >
      <ChevronDown :size="16" :stroke-width="2" aria-hidden="true" />
    </Button>
  </div>
</template>
