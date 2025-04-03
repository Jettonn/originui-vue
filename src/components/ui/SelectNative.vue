<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-vue-next'
import { computed } from 'vue'

interface Props {
  modelValue?: string | number | string[] | number[]
  multiple?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  multiple: false
})

const selectClass = computed(() => {
  return cn(
    'peer inline-flex w-full cursor-pointer appearance-none items-center rounded-lg border border-input bg-background text-sm text-foreground shadow-xs shadow-black/5 transition-shadow focus-visible:border-ring focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 has-[option[disabled]:checked]:text-muted-foreground',
    props.multiple ? 'py-1 *:px-3 *:py-1 [&_option:checked]:bg-accent' : 'h-9 pe-8 ps-3',
    props.class
  )
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="relative">
    <select
      :value="modelValue"
      @input="$event => emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      :class="selectClass"
      v-bind="$attrs"
      :multiple="multiple"
    >
      <slot></slot>
    </select>
    <span
      v-if="!multiple"
      class="pointer-events-none absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50"
    >
      <ChevronDown :size="16" :stroke-width="2" aria-hidden="true" />
    </span>
  </div>
</template>
