<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <Button class="group">
    Button
    <ArrowRight
      class="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
      :size="16"
      :stroke-width="2"
      aria-hidden="true"
    />
  </Button>
</template>
