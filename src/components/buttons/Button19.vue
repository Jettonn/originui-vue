<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <Button variant="outline" class="aspect-square max-sm:p-0">
    <Plus class="opacity-60 sm:-ms-1 sm:me-2" :size="16" :stroke-width="2" aria-hidden="true" />
    <span class="max-sm:sr-only">Add new</span>
  </Button>
</template>
