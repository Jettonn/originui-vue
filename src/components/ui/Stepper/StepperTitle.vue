<script setup lang="ts">
import { cn } from '@/lib/utils'
import { reactiveOmit } from '@vueuse/core'
import { StepperTitle, type StepperTitleProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<StepperTitleProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <StepperTitle
    v-bind="delegatedProps"
    :class="cn('text-sm font-medium text-foreground', props.class)"
  >
    <slot />
  </StepperTitle>
</template>
