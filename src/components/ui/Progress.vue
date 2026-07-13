<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ProgressRoot, ProgressIndicator } from 'reka-ui'

const props = withDefaults(
  defineProps<{ modelValue?: number | null; class?: string }>(),
  { modelValue: 0 }
)
</script>

<template>
  <ProgressRoot
    :model-value="props.modelValue"
    :class="cn('relative h-2 w-full overflow-hidden rounded-full bg-primary/20', props.class)"
  >
    <ProgressIndicator
      class="size-full flex-1 bg-primary transition-transform duration-500 ease-out"
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%)`"
    />
  </ProgressRoot>
</template>
