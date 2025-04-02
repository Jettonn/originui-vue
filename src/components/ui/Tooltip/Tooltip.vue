<script setup lang="ts">
import { cn } from '@/lib/utils'
import { TooltipContent, TooltipArrow, TooltipPortal } from 'reka-ui'
import { computed, defineProps } from 'vue'
import type { VNode } from 'vue'

// Define props to handle side offset, class, and children
const props = defineProps<{
  sideOffset?: number
  class?: string
  showArrow?: boolean
  children?: () => VNode
}>()

// Default side offset if not provided
const sideOffset = computed(() => props.sideOffset ?? 4)
const computedClass = computed(() => {
  return cn(
    'relative z-50 max-w-[280px] rounded-lg border border-border bg-popover px-3 py-1.5 text-sm text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    props.class
  )
})
</script>

<template>
  <TooltipPortal>
    <TooltipContent :side-offset="sideOffset" :class="computedClass" v-bind="$attrs">
      <slot />
      <TooltipArrow
        v-if="showArrow"
        class="-my-px text-popover drop-shadow-[0_1px_0_hsl(var(--border))]"
      />
    </TooltipContent>
  </TooltipPortal>
</template>
