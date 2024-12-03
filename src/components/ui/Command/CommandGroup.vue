<script setup lang="ts">
import { Command } from 'vue-command-palette'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const classes = computed(() =>
  cn(
    'overflow-hidden p-2 text-foreground [&_[command-group-heading]]:px-3 [&_[command-group-heading]]:py-2 [&_[command-group-heading]]:text-xs [&_[command-group-heading]]:font-medium [&_[command-group-heading]]:text-muted-foreground',
    props.class
  )
)
</script>

<template>
  <Command.Group :class="classes">
    <slot />
  </Command.Group>
</template>
