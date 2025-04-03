<script setup lang="ts">
import { PopoverContent, PopoverPortal, type PopoverContentProps } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<{
    align?: PopoverContentProps['align']
    sideOffset?: PopoverContentProps['sideOffset']
    class?: string
  }>(),
  {
    align: 'center',
    sideOffset: 4
  }
)
</script>

<template>
  <PopoverPortal>
    <PopoverContent
      :align="align"
      :sideOffset="sideOffset"
      :class="
        cn(
          'z-50 min-w-[8rem] rounded-lg border border-input bg-popover p-4 text-popover-foreground shadow-lg shadow-black/5 outline-hidden',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-2',
          'data-[side=left]:slide-in-from-right-2',
          'data-[side=right]:slide-in-from-left-2',
          'data-[side=top]:slide-in-from-bottom-2',
          props.class
        )
      "
    >
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>
