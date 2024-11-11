<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { Trash } from 'lucide-vue-next'
</script>

<template>
  <Button variant="destructive">
    <Trash class="-ms-1 me-2 opacity-60" :size="16" :stroke-width="2" aria-hidden="true" />
    Button
  </Button>
</template>
