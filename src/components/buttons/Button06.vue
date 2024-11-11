<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { X } from 'lucide-vue-next'
</script>

<template>
  <Button variant="secondary">
    <X class="-ms-1 me-2 opacity-60" :size="16" :stroke-width="2" aria-hidden="true" />
    Button
  </Button>
</template>
