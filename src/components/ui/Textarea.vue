<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed, ref, toRefs } from 'vue'

interface TextareaProps {
  modelValue?: string
  class?: string
}

const props = defineProps<TextareaProps>()
defineEmits(['update:modelValue'])

const { class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(
    'border-input placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex min-h-19.5 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
    extraClasses.value
  )
)

const textarea = ref<HTMLTextAreaElement | null>(null)
</script>

<template>
  <textarea
    ref="textarea"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    :class="classes"
    v-bind="$attrs"
  />
</template>
