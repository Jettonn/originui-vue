<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { ArrowLeft } from 'lucide-vue-next'
</script>

<template>
  <Button class="group" variant="ghost">
    <ArrowLeft
      class="-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5"
      :size="16"
      :stroke-width="2"
      aria-hidden="true"
    />
    Button
  </Button>
</template>
