<script setup lang="ts">
import { ToastDescription } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <ToastDescription :class="cn('text-sm text-muted-foreground', props.class)">
    <slot></slot>
  </ToastDescription>
</template>
