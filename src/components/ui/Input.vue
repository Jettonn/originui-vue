<template>
  <input
    :value="modelValue"
    @input="onInput"
    :class="computedClass"
    :type="type"
    v-bind="$attrs"
    data-slot="input"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

interface InputProps {
  modelValue?: string
  class?: string
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'file'
}

const emit = defineEmits<{
  'update:modelValue': [string]
  input: [Event]
}>()

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  value: ''
})

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
  emit('input', event)
}

const computedClass = computed(() => {
  return cn(
    'border-input file:text-foreground placeholder:text-muted-foreground/70 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
    props.type === 'search' &&
      '[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none',
    props.type === 'file' &&
      'text-muted-foreground/70 file:border-input file:text-foreground p-0 pr-3 italic file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic',
    props.class
  )
})
</script>
