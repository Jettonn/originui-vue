<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { ChevronLeft } from 'lucide-vue-next'
</script>

<template>
  <Button class="relative ps-12">
    Previous
    <span
      class="pointer-events-none absolute inset-y-0 start-0 flex w-9 items-center justify-center bg-primary-foreground/15"
    >
      <ChevronLeft class="opacity-60" :size="16" :stroke-width="2" aria-hidden="true" />
    </span>
  </Button>
</template>
