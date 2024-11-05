<template>
  <input
    ref="inputRef"
    :value="modelValue"
    @input="onInput"
    :class="computedClass"
    :type="type"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { cn } from '@/lib/utils'

interface InputProps {
  inputRef?: HTMLInputElement | null
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

const inputRef = ref<HTMLInputElement | null>(props.inputRef ?? null)

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
  emit('input', event)
}

const computedClass = computed(() => {
  return cn(
    'flex h-9 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/[.04] ring-offset-background transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    props.type === 'search' &&
      '[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none',
    props.type === 'file' &&
      'p-0 pr-3 italic text-muted-foreground/70 file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-foreground',
    props.class
  )
})
</script>
