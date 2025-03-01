<script setup lang="ts">
import { avatarVariant, cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'
import { AvatarRoot } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

type AvatarVariants = VariantProps<typeof avatarVariant>

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    size?: AvatarVariants['size']
    shape?: AvatarVariants['shape']
  }>(),
  {
    size: 'sm',
    shape: 'circle'
  }
)
</script>

<template>
  <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
    <slot />
  </AvatarRoot>
</template>
