<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { ChevronLeft } from 'lucide-vue-next'
</script>

<template>
  <Button variant="link">
    <ChevronLeft class="me-1 opacity-60" :size="16" :stroke-width="2" aria-hidden="true" />
    Go back
  </Button>
</template>
