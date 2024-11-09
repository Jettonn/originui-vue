<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Props>()

const labelClass = computed(() => {
  return cn('text-sm font-medium leading-none text-foreground', props.class)
})
</script>

<template>
  <label :class="labelClass">
    <slot></slot>
  </label>
</template>
