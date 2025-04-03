<script setup lang="ts">
import { ToastAction } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
  asChild?: boolean
  altText?: string
}>()
</script>

<template>
  <ToastAction
    :altText="altText ?? 'Toast action'"
    :class="
      cn(
        !props.asChild &&
          'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 hover:group-[.destructive]:border-destructive/30 hover:group-[.destructive]:bg-destructive hover:group-[.destructive]:text-destructive-foreground focus:group-[.destructive]:ring-destructive',
        props.class
      )
    "
    :asChild="props.asChild"
  >
    <slot></slot>
  </ToastAction>
</template>
