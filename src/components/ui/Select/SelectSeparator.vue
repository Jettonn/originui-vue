<script setup lang="ts">
import { SelectSeparator } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <SelectSeparator :class="cn('-mx-1 my-1 h-px bg-border', props.class)" />
</template>
