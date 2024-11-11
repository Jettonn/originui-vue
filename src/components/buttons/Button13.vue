<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { LoaderCircle } from 'lucide-vue-next'
</script>

<template>
  <Button disabled>
    <LoaderCircle class="-ms-1 me-2 animate-spin" :size="16" :strokeWidth="2" aria-hidden="true" />
    Button
  </Button>
</template>
