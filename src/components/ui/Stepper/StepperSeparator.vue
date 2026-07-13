<script setup lang="ts">
import { cn } from '@/lib/utils'
import { reactiveOmit } from '@vueuse/core'
import { StepperSeparator, type StepperSeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<StepperSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <StepperSeparator
    v-bind="delegatedProps"
    :class="
      cn(
        'h-px flex-1 bg-border transition-colors group-data-[state=completed]/step:bg-primary',
        props.class
      )
    "
  />
</template>
