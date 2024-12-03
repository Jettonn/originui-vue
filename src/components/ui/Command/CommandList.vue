<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'
import { Command } from 'vue-command-palette'

const props = defineProps<{
  class?: string
}>()

const classes = computed(() => cn('max-h-80 overflow-y-auto overflow-x-hidden', props.class))
</script>

<template>
  <div command-dialog-body="">
    <Command.List :class="classes" v-bind="$attrs">
      <slot />
    </Command.List>
  </div>
</template>
