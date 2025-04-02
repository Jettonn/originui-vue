<script setup lang="ts">
import { AlertDialogCancel } from 'reka-ui'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/lib/utils'
import { toRefs } from 'vue'

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  variant: {
    type: String as () => 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link',
    default: 'outline'
  },
  size: {
    type: String as () => 'default' | 'sm' | 'lg' | 'icon',
    default: 'default'
  }
})

const { variant, size, class: extraClasses } = toRefs(props)
</script>

<template>
  <AlertDialogCancel :class="cn(buttonVariants({ variant, size }), extraClasses)" v-bind="$attrs">
    <slot />
  </AlertDialogCancel>
</template>
