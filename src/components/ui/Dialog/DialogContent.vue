<script setup lang="ts">
import { DialogContent } from 'reka-ui'
import { DialogOverlay, DialogPortal, DialogClose } from './index'
import { X } from 'lucide-vue-next'
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
  <DialogPortal>
    <DialogOverlay />
    <DialogContent
      :class="
        cn(
          'fixed left-1/2 z-50 grid max-h-[calc(100%-4rem)] w-full -translate-x-1/2 gap-4 overflow-y-auto border bg-background p-6 shadow-lg shadow-black/5 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] top-1/2 sm:max-w-[400px] -translate-y-1/2 sm:rounded-xl data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          extraClasses
        )
      "
      v-bind="$attrs"
    >
      <slot />
      <DialogClose
        class="group absolute right-3 top-3 flex size-7 items-center justify-center rounded-lg outline-offset-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none"
      >
        <X
          :size="16"
          :stroke-width="2"
          class="opacity-60 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
