<script setup lang="ts">
import { AlertDialogTitle } from 'reka-ui'
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
  <AlertDialogTitle :class="cn('text-lg font-semibold', extraClasses)">
    <slot />
  </AlertDialogTitle>
</template>
