<script setup lang="ts">
import { ToastAction } from 'reka-ui'
import { X } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
  asChild?: boolean
}>()
</script>

<template>
  <ToastAction
    :class="
      cn(
        !props.asChild &&
          'group -my-1.5 -me-2 inline-flex size-8 shrink-0 items-center justify-center whitespace-nowrap rounded-lg p-0 text-sm font-medium ring-offset-background transition-colors hover:text-accent-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:text-red-300 hover:group-[.destructive]:text-red-50 focus:group-[.destructive]:ring-red-400 focus:group-[.destructive]:ring-offset-red-600 [&_svg]:pointer-events-none [&_svg]:shrink-0',
        props.class
      )
    "
    altText="Toast close"
    :asChild="props.asChild"
  >
    <slot v-if="props.asChild"></slot>
    <X
      v-else
      :size="16"
      :stroke-width="2"
      class="opacity-60 transition-opacity group-hover:opacity-100"
      aria-hidden="true"
    />
  </ToastAction>
</template>
