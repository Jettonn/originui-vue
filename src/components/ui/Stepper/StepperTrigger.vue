<script setup lang="ts">
import { cn } from '@/lib/utils'
import { reactiveOmit } from '@vueuse/core'
import { StepperTrigger, type StepperTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<StepperTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <StepperTrigger
    v-bind="delegatedProps"
    :class="
      cn(
        'inline-flex items-center gap-3 rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none',
        props.class
      )
    "
  >
    <slot />
  </StepperTrigger>
</template>
