<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

type TableVariant = 'default' | 'card'

const props = withDefaults(
  defineProps<{ class?: HTMLAttributes['class']; variant?: TableVariant }>(),
  { variant: 'default' }
)
</script>

<template>
  <div
    class="relative w-full overflow-x-auto"
    data-slot="table-container"
    :data-variant="props.variant"
  >
    <table
      data-slot="table"
      :class="
        cn(
          'w-full caption-bottom in-data-[variant=card]:border-separate in-data-[variant=card]:border-spacing-0 text-sm',
          props.class
        )
      "
    >
      <slot />
    </table>
  </div>
</template>
