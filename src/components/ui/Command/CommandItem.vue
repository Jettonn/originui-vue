<script setup lang="ts">
import { Command } from 'vue-command-palette'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const classes = computed(() =>
  cn(
    'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none aria-[disabled=true]:pointer-events-none aria-[selected=true]:bg-accent hover:bg-accent aria-[selected=true]:text-accent-foreground aria-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    props.class
  )
)
</script>

<template>
  <Command.Item :class="classes" v-bind="$attrs">
    <slot />
  </Command.Item>
</template>
