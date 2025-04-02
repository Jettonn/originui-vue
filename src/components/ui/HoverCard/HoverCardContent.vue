<script setup lang="ts">
import { HoverCardContent, HoverCardArrow, HoverCardPortal } from 'reka-ui'
import { cn } from '@/lib/utils'

interface Props {
  align?: 'start' | 'center' | 'end'
  class?: string
  showArrow?: boolean
  sideOffset?: number
}

const props = withDefaults(defineProps<Props>(), {
  align: 'center',
  showArrow: false,
  sideOffset: 4
})
</script>

<template>
  <HoverCardPortal>
    <HoverCardContent
      :side-offset="sideOffset"
      :align="align"
      :class="
        cn(
          'z-50 w-64 rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-lg shadow-black/5 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          props.class
        )
      "
    >
      <slot />
      <HoverCardArrow
        v-if="showArrow"
        class="-my-px text-popover drop-shadow-[0_1px_0_hsl(var(--border))]"
      />
    </HoverCardContent>
  </HoverCardPortal>
</template>
