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
    'flex min-h-[80px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/[.04] ring-offset-background transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
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
