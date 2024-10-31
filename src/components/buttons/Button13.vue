<script setup lang="ts">
import { LoaderCircle } from 'lucide-vue-next'
import Button from '../ui/Button.vue'
</script>

<template>
  <Button disabled>
    <LoaderCircle class="-ms-1 me-2 animate-spin" :size="16" :strokeWidth="2" aria-hidden="true" />
    Button
  </Button>
</template>
