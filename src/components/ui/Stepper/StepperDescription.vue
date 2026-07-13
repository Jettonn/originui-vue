<script setup lang="ts">
import { cn } from '@/lib/utils'
import { reactiveOmit } from '@vueuse/core'
import { StepperDescription, type StepperDescriptionProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<StepperDescriptionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <StepperDescription
    v-bind="delegatedProps"
    :class="cn('text-xs text-muted-foreground', props.class)"
  >
    <slot />
  </StepperDescription>
</template>
