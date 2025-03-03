<script setup lang="ts">
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
  <div :class="cn('flex flex-col-reverse gap-2 sm:gap-3 sm:flex-row sm:justify-end', extraClasses)">
    <slot />
  </div>
</template>
