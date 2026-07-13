<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Primitive } from 'reka-ui'

const props = withDefaults(
  defineProps<{ class?: string; as?: string; asChild?: boolean; href?: string }>(),
  { as: 'a' }
)
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :href="href"
    :class="cn('transition-colors hover:text-foreground', props.class)"
  >
    <slot />
  </Primitive>
</template>
