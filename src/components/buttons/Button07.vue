<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <Button variant="outline">
    Button
    <Sparkles class="-me-1 ms-2 opacity-60" :size="16" :stroke-width="2" aria-hidden="true" />
  </Button>
</template>
