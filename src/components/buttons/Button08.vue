<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
import Button from '../ui/Button.vue'
</script>

<template>
  <Button variant="outline">
    <ArrowLeft
      class="-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5"
      :size="16"
      :stroke-width="2"
      aria-hidden="true"
    />
    Button
  </Button>
</template>
