<script setup lang="ts">
import { SelectTrigger, SelectIcon } from 'reka-ui'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <SelectTrigger
    :class="
      cn(
        'flex h-9 w-full items-center justify-between gap-2 rounded-lg border border-input bg-background px-3 py-2 text-start text-sm text-foreground shadow-xs shadow-black/5 ring-offset-background focus:border-ring focus:outline-hidden focus:ring-2 focus:ring-ring/30 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-placeholder:text-muted-foreground/70 [&>span]:min-w-0',
        props.class
      )
    "
  >
    <slot />
    <SelectIcon>
      <ChevronDown class="h-4 w-4 shrink-0 text-muted-foreground/80" />
    </SelectIcon>
  </SelectTrigger>
</template>
