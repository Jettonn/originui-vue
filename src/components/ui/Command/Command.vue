<script setup lang="ts">
import { Command } from 'vue-command-palette'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <Command
    :class="
      cn(
        'flex h-full w-full flex-col overflow-hidden rounded-lg bg-popover text-popover-foreground',
        props.class
      )
    "
  >
    <slot />
  </Command>
</template>
