<script setup lang="ts">
import { AlertDialogAction } from 'reka-ui'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/lib/utils'
import { toRefs, type PropType } from 'vue'

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  variant: {
    type: String as PropType<
      'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
    >,
    default: 'default'
  },
  size: {
    type: String as PropType<'default' | 'sm' | 'lg' | 'icon'>,
    default: 'default'
  }
})

const { variant, size, class: extraClasses } = toRefs(props)
</script>

<template>
  <AlertDialogAction :class="cn(buttonVariants({ variant, size }), extraClasses)" v-bind="$attrs">
    <slot />
  </AlertDialogAction>
</template>
