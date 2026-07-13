<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <th
    :class="
      cn(
        'h-10 px-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pe-0',
        props.class
      )
    "
  >
    <slot />
  </th>
</template>
