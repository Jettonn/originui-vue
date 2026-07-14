<script setup lang="ts">
import { SelectTrigger, SelectIcon } from 'reka-ui'
import { ChevronsUpDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const selectTriggerVariants = cva(
  "relative flex w-full items-center justify-between gap-2 rounded-lg border border-input bg-background px-3 text-start text-sm text-foreground shadow-xs shadow-black/5 ring-offset-background transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-disabled:not-focus:before:shadow-[0_1px_rgba(0,0,0,0.04)] dark:not-disabled:not-focus:before:shadow-[0_-1px_rgba(255,255,255,0.06)] focus:border-ring focus:outline-hidden focus:ring-2 focus:ring-ring/30 focus:ring-offset-2 aria-invalid:border-destructive/40 focus:aria-invalid:border-destructive focus:aria-invalid:ring-destructive/20 disabled:cursor-not-allowed disabled:opacity-64 data-placeholder:text-muted-foreground/70 [&>span]:min-w-0 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    defaultVariants: {
      size: 'default'
    },
    variants: {
      size: {
        default: 'min-h-9 py-2 sm:min-h-8',
        sm: 'min-h-8 gap-1.5 px-2.5 py-1.5 sm:min-h-7',
        lg: 'min-h-10 py-2.5 sm:min-h-9'
      }
    }
  }
)

const props = defineProps<{
  class?: string
  size?: VariantProps<typeof selectTriggerVariants>['size']
}>()
</script>

<template>
  <SelectTrigger :class="cn(selectTriggerVariants({ size: props.size }), props.class)">
    <slot />
    <SelectIcon>
      <ChevronsUpDown class="-me-1 h-4 w-4 shrink-0 text-muted-foreground/80" />
    </SelectIcon>
  </SelectTrigger>
</template>
