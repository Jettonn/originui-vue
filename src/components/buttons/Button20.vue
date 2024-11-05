<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <Button class="rounded-full" variant="outline" size="icon" aria-label="Add new item">
    <Plus :size="16" :stroke-width="2" aria-hidden="true" />
  </Button>
</template>
