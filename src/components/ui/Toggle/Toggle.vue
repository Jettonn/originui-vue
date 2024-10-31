<script setup lang="ts" module>
import { Toggle as RadixToggle } from 'radix-vue'
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
  <RadixToggle
    :pressed="modelValue"
    @update:pressed="value => emit('update:modelValue', value)"
    :class="classes"
  >
    <slot />
  </RadixToggle>
</template>
