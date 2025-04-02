<script setup lang="ts">
import { AlertDialogContent } from 'reka-ui'
import { AlertDialogOverlay, AlertDialogPortal } from './index'
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
  <AlertDialogPortal>
    <AlertDialogOverlay
      class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />
    <AlertDialogContent
      :class="
        cn(
          'fixed left-1/2 top-1/2 z-50 grid max-h-[calc(100%-4rem)] w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto rounded-md sm:rounded-xl border bg-background p-6 shadow-lg shadow-black/5 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          extraClasses
        )
      "
      v-bind="$attrs"
    >
      <slot />
    </AlertDialogContent>
  </AlertDialogPortal>
</template>
