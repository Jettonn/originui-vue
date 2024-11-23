<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'
import { Command } from 'vue-command-palette'

const props = defineProps<{
  class?: string
}>()

const classes = computed(() => cn('max-h-[300px] overflow-y-auto overflow-x-hidden', props.class))
</script>

<template>
  <Command.List :class="classes">
    <slot />
  </Command.List>
</template>
