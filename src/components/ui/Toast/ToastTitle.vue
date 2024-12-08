<script setup lang="ts">
import { ToastTitle } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <ToastTitle :class="cn('text-sm font-medium', props.class)">
    <slot></slot>
  </ToastTitle>
</template>
