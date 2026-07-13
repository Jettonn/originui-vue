<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <td
    :class="cn('p-3 align-middle [&:has([role=checkbox])]:pe-0', props.class)"
  >
    <slot />
  </td>
</template>
