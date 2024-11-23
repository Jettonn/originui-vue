<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { Command } from 'vue-command-palette'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
  modelValue?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const classes = computed(() =>
  cn(
    'flex h-10 w-full rounded-lg bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
    props.class
  )
)
</script>

<template>
  <div class="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search class="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <Command.Input
      :value="modelValue"
      @input="val => emit('update:modelValue', val.toString())"
      :class="classes"
      placeholder="Search..."
    >
      <slot />
    </Command.Input>
  </div>
</template>
