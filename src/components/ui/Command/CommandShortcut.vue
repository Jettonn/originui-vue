<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const classes = computed(() =>
  cn('ml-auto text-xs tracking-widest text-muted-foreground', props.class)
)
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>
