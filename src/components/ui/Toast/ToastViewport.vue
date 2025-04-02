<script setup lang="ts">
import { ToastViewport } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <ToastViewport
    :class="
      cn(
        'fixed right-0 top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:top-auto sm:flex-col md:max-w-[400px]',
        props.class
      )
    "
  >
    <slot></slot>
  </ToastViewport>
</template>
