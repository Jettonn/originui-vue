<script setup lang="ts">
import { AlertDialogDescription } from 'reka-ui'
import { cn } from '@/lib/utils'
import { toRefs } from 'vue'

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

const { class: extraClasses } = toRefs(props)
</script>

<template>
  <AlertDialogDescription
    :class="cn('text-sm text-muted-foreground', extraClasses)"
    v-bind="$attrs"
  >
    <slot />
  </AlertDialogDescription>
</template>
