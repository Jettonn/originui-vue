<script setup lang="ts">
import { SelectContent, SelectViewport, SelectPortal } from 'reka-ui'
import { cn } from '@/lib/utils'
import SelectScrollButton from './SelectScrollButton.vue'

const props = withDefaults(
  defineProps<{
    class?: string
    position?: 'item-aligned' | 'popper'
  }>(),
  {
    position: 'popper'
  }
)
</script>

<template>
  <SelectPortal>
    <SelectContent
      :position="position"
      align="start"
      :class="
        cn(
          'relative z-50 max-h-[min(24rem,var(--reka-select-content-available-height))] min-w-[8rem] overflow-hidden rounded-lg border border-input bg-popover text-popover-foreground shadow-lg shadow-black/5 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 [&_[role=group]]:py-1',
          position === 'popper' &&
            'w-full min-w-[var(--reka-select-trigger-width)] data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          props.class
        )
      "
    >
      <SelectScrollButton direction="up" />
      <SelectViewport
        :class="cn('p-1', position === 'popper' && 'h-[var(--reka-select-trigger-height)]')"
      >
        <slot />
      </SelectViewport>
      <SelectScrollButton direction="down" />
    </SelectContent>
  </SelectPortal>
</template>
