<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { ArrowRight, Mail } from 'lucide-vue-next'
</script>

<template>
  <Button class="group" variant="secondary">
    <Mail class="-ms-1 me-2 opacity-60" :size="16" :stroke-width="2" aria-hidden="true" />
    Button
    <ArrowRight
      class="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
      :size="16"
      :stroke-width="2"
      aria-hidden="true"
    />
  </Button>
</template>
