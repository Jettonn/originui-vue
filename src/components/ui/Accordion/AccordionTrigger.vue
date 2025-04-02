<script setup lang="ts">
import { AccordionHeader, AccordionTrigger } from 'reka-ui'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      :class="
        cn(
          'flex flex-1 items-center justify-between py-4 text-left font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          props.class
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDown
          :size="16"
          :stroke-width="2"
          class="shrink-0 opacity-60 transition-transform duration-200"
          aria-hidden="true"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
