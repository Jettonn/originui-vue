<script setup lang="ts">
import { cn } from '@/lib/utils'
import { reactiveOmit } from '@vueuse/core'
import { StepperItem, type StepperItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<StepperItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <StepperItem
    v-bind="delegatedProps"
    :class="
      cn(
        'group/step flex items-center gap-3 data-[disabled]:pointer-events-none data-[disabled]:opacity-64',
        props.class
      )
    "
  >
    <slot />
  </StepperItem>
</template>
