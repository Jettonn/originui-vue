<script setup lang="ts">
import { Command } from 'vue-command-palette'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const classes = computed(() =>
  cn(
    'relative flex cursor-default select-none items-center gap-3 rounded-md px-2 py-1.5 text-sm outline-none hover:bg-accent aria-disabled:pointer-events-none aria-selected:bg-accent aria-selected:text-accent-foreground aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
    props.class
  )
)
</script>

<template>
  <Command.Item :class="classes">
    <slot />
  </Command.Item>
</template>
