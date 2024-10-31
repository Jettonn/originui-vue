<template>
  <button :class="buttonClasses" ref="buttonRef">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, toRefs } from 'vue'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

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

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-sm shadow-black/[0.04] hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm shadow-black/[0.04] hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm shadow-black/[0.04] hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm shadow-black/[0.04] hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-lg px-3 text-xs',
        lg: 'h-10 rounded-lg px-8',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

const buttonClasses = computed(() =>
  cn(buttonVariants({ variant: variant.value, size: size.value }), extraClasses.value)
)
</script>
