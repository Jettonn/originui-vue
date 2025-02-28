<script setup lang="ts">
import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { badgeVariants } from '@/lib/utils'

interface Props {
  variant?: VariantProps<typeof badgeVariants>['variant']
}

defineProps<Props>()
</script>

<template>
  <div :class="cn(badgeVariants({ variant }), $attrs.class ?? '')">
    <slot />
  </div>
</template>
