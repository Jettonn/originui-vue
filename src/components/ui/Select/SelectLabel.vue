<script setup lang="ts">
import { SelectLabel } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <SelectLabel
    :class="cn('py-1.5 pe-2 ps-8 text-xs font-medium text-muted-foreground', props.class)"
  >
    <slot />
  </SelectLabel>
</template>
