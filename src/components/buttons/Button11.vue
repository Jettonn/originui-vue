<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <Button>
    Button
    <ChevronDown class="-me-1 ms-2 opacity-60" :size="16" :stroke-width="2" aria-hidden="true" />
  </Button>
</template>
