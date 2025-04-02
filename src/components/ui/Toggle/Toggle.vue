<script setup lang="ts" module>
import { Toggle } from 'reka-ui'
import { type VariantProps } from 'class-variance-authority'
import { computed } from 'vue'
import { toggleVariants } from '.'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ VariantProps<typeof toggleVariants> {
  modelValue?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  modelValue: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const classes = computed(() =>
  cn(toggleVariants({ variant: props.variant, size: props.size, class: props.class }))
)
</script>

<template>
  <Toggle
    :pressed="modelValue"
    @update:pressed="(value: boolean) => emit('update:modelValue', value)"
    :class="classes"
  >
    <slot />
  </Toggle>
</template>
