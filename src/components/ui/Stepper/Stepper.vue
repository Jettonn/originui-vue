<script setup lang="ts">
import { cn } from '@/lib/utils'
import { reactiveOmit } from '@vueuse/core'
import {
  StepperRoot,
  type StepperRootEmits,
  type StepperRootProps,
  useForwardPropsEmits
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<StepperRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<StepperRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <StepperRoot v-bind="forwarded" :class="cn('flex gap-2', props.class)">
    <slot />
  </StepperRoot>
</template>
