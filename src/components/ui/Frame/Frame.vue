<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <div
    data-slot="frame"
    :class="
      cn(
        'relative flex flex-col rounded-2xl bg-muted/72 p-1',
        '*:[[data-slot=frame-panel]+[data-slot=frame-panel]]:mt-1',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
