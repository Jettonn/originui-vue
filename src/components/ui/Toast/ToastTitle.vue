<script setup lang="ts">
import { ToastTitle } from 'reka-ui'
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
