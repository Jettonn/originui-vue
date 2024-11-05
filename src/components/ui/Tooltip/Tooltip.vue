<script setup lang="ts">
import { cn } from '@/lib/utils'
import { TooltipContent as RadixTooltipContent, TooltipPortal } from 'radix-vue'
import { computed, defineProps } from 'vue'
import type { VNode } from 'vue'

// Define props to handle side offset, class, and children
const props = defineProps<{
  sideOffset?: number
  class?: string
  children?: () => VNode
}>()

// Default side offset if not provided
const sideOffset = computed(() => props.sideOffset ?? 4)
const className = computed(() => {
  return cn(
    'z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    props.class
  )
})
</script>

<template>
  <TooltipPortal>
    <RadixTooltipContent :side-offset="sideOffset" :class="className">
      <slot />
    </RadixTooltipContent>
  </TooltipPortal>
</template>
