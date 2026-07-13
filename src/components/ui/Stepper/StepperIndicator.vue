<script setup lang="ts">
import { cn } from '@/lib/utils'
import { reactiveOmit } from '@vueuse/core'
import { StepperIndicator, type StepperIndicatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<StepperIndicatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <StepperIndicator
    v-bind="delegatedProps"
    :class="
      cn(
        'relative flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-sm font-medium text-muted-foreground transition-colors group-data-[state=active]/step:border-primary group-data-[state=active]/step:bg-primary group-data-[state=active]/step:text-primary-foreground group-data-[state=completed]/step:border-primary group-data-[state=completed]/step:bg-primary group-data-[state=completed]/step:text-primary-foreground',
        props.class
      )
    "
  >
    <slot />
  </StepperIndicator>
</template>
