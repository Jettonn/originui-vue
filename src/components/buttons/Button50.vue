<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Circle } from 'lucide-vue-next'
</script>

<template>
  <div class="inline-grid w-fit grid-cols-3 gap-1">
    <div></div>
    <Button variant="outline" size="icon" aria-label="Pan camera up">
      <ChevronUp :size="16" :stroke-width="2" aria-hidden="true" />
    </Button>
    <div></div>
    <Button variant="outline" size="icon" aria-label="Pan camera left">
      <ChevronLeft :size="16" :stroke-width="2" aria-hidden="true" />
    </Button>
    <div class="flex items-center justify-center" aria-hidden="true">
      <Circle class="opacity-60" :size="16" stroke-width="2" />
    </div>
    <Button variant="outline" size="icon" aria-label="Pan camera right">
      <ChevronRight :size="16" :stroke-width="2" aria-hidden="true" />
    </Button>
    <div></div>
    <Button variant="outline" size="icon" aria-label="Pan camera down">
      <ChevronDown :size="16" :stroke-width="2" aria-hidden="true" />
    </Button>
    <div></div>
  </div>
</template>
