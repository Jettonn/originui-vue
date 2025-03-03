<script setup lang="ts">
import { AlertDialogTrigger } from 'radix-vue'
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
  <AlertDialogTrigger :class="cn('inline-flex items-center justify-center', extraClasses)">
    <slot />
  </AlertDialogTrigger>
</template>
