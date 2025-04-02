<script setup lang="ts">
import { AccordionItem } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = defineProps<{
  value: string
  class?: string
}>()
</script>

<template>
  <AccordionItem :value="value" :class="cn('border-b border-border', props.class)">
    <slot />
  </AccordionItem>
</template>
