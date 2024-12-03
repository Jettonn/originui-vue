<template>
  <button :class="buttonClasses" ref="buttonRef">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, toRefs } from 'vue'
import type { VariantProps } from 'class-variance-authority'
import { buttonVariants, cn } from '@/lib/utils'

const props = defineProps({
  variant: {
    type: String as () => VariantProps<typeof buttonVariants>['variant'],
    default: 'default'
  },
  size: {
    type: String as () => VariantProps<typeof buttonVariants>['size'],
    default: 'default'
  },
  class: {
    type: String,
    default: ''
  }
})

const { variant, size, class: extraClasses } = toRefs(props)
const buttonRef = ref<HTMLElement | null>(null)

const buttonClasses = computed(() =>
  cn(buttonVariants({ variant: variant.value, size: size.value }), extraClasses.value)
)
</script>
