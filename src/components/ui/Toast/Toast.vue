<script setup lang="ts">
import { ToastRoot } from 'reka-ui'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'default' | 'destructive'
  class?: string
}>()

const toastVariants = computed(() => {
  return cn(
    'group pointer-events-auto relative flex bg-background w-full items-center justify-between space-x-4 overflow-hidden rounded-lg border p-4 shadow-lg shadow-black/5 transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--reka-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--reka-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-bottom-full',
    {
      'border border-border bg-background text-foreground': props.variant === 'default',
      'destructive group border-destructive bg-destructive text-destructive-foreground':
        props.variant === 'destructive'
    },
    props.class
  )
})
</script>

<template>
  <ToastRoot :class="toastVariants">
    <slot></slot>
  </ToastRoot>
</template>
