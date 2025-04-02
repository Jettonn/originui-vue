<template>
  <RadioGroupRoot
    :model-value="modelValue"
    @update:model-value="val => emit('update:modelValue', val)"
    :class="classes"
  >
    <slot />
  </RadioGroupRoot>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { RadioGroupRoot } from 'reka-ui'
import { computed } from 'vue'

interface Props {
  modelValue?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: ''
})

const emit = defineEmits(['update:modelValue'])

const classes = computed(() => {
  return cn('grid gap-3', props.class)
})
</script>
