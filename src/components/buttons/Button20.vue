<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { Plus } from 'lucide-vue-next'
</script>

<template>
  <Button class="rounded-full" variant="outline" size="icon" aria-label="Add new item">
    <Plus :size="16" :stroke-width="2" aria-hidden="true" />
  </Button>
</template>
