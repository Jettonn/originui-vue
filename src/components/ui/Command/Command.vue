<script setup lang="ts">
import { Command as CommandPrimitive } from 'vue-command-palette'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <CommandPrimitive
    :class="
      cn(
        'flex h-full w-full flex-col overflow-hidden rounded-lg bg-popover text-popover-foreground',
        props.class
      )
    "
  >
    <slot />
  </CommandPrimitive>
</template>
