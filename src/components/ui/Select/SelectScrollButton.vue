<script setup lang="ts">
import { SelectScrollUpButton, SelectScrollDownButton } from 'reka-ui'
import { ChevronUp, ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps<{
  direction: 'up' | 'down'
  class?: string
}>()
</script>

<template>
  <SelectScrollUpButton
    v-if="direction === 'up'"
    :class="cn('flex cursor-default items-center justify-center py-1', props.class)"
  >
    <ChevronUp class="h-4 w-4" />
  </SelectScrollUpButton>
  <SelectScrollDownButton
    v-else
    :class="cn('flex cursor-default items-center justify-center py-1', props.class)"
  >
    <ChevronDown class="h-4 w-4" />
  </SelectScrollDownButton>
</template>
