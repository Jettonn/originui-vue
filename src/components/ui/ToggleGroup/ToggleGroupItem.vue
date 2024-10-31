<script setup lang="ts">
import { ToggleGroupItem } from 'radix-vue'
import { cn } from '@/lib/utils'
import { inject } from 'vue'
import { toggleVariants } from '../Toggle'

interface Props {
  value: string
  class?: string
  size?: 'default' | 'sm' | 'lg'
  variant?: 'default' | 'outline'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  variant: 'default'
})

interface ToggleGroupContext {
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm' | 'lg'
}

const toggleGroupContext = inject<ToggleGroupContext>('toggleGroup')
</script>

<template>
  <ToggleGroupItem
    :value="value"
    :class="
      cn(
        toggleVariants({
          variant: toggleGroupContext?.variant || props.variant,
          size: toggleGroupContext?.size || props.size
        }),
        props.class
      )
    "
  >
    <slot />
  </ToggleGroupItem>
</template>
