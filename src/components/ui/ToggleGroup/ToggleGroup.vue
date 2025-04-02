<script setup lang="ts">
import { ToggleGroupRoot as ToggleGroupPrimitive } from 'reka-ui'
import { cn } from '@/lib/utils'
import { provide } from 'vue'

interface ToggleVariants {
  size?: 'default' | 'sm' | 'lg'
  variant?: 'default' | 'outline'
}

interface Props extends ToggleVariants {
  modelValue?: string | string[]
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  variant: 'default'
})

const emit = defineEmits(['update:modelValue'])

provide('toggleGroup', {
  variant: props.variant,
  size: props.size
})
</script>

<template>
  <ToggleGroupPrimitive
    :model-value="modelValue"
    @update:model-value="val => emit('update:modelValue', val)"
    :class="cn('flex items-center justify-center gap-1', props.class)"
  >
    <slot />
  </ToggleGroupPrimitive>
</template>
