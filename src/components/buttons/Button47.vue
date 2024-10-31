<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'
import Button from '../ui/Button.vue'
</script>

<template>
  <Button variant="link">
    <ChevronLeft class="me-1 opacity-60" :size="16" :stroke-width="2" aria-hidden="true" />
    Go back
  </Button>
</template>
