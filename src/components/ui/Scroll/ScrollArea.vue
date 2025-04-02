<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { ScrollAreaRoot, ScrollAreaViewport, ScrollAreaCorner } from 'reka-ui'
import { cn } from '@/lib/utils'
import { ScrollBar } from './index'

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

const { class: extraClasses } = toRefs(props)

const rootRef = ref(null)
</script>

<template>
  <ScrollAreaRoot ref="rootRef" :class="cn('relative overflow-hidden', extraClasses)">
    <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
      <slot />
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
