<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const classes = computed(() =>
  cn(
    '-me-1 ms-auto inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70',
    props.class
  )
)
</script>

<template>
  <kbd :class="classes">
    <slot />
  </kbd>
</template>
