<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <footer data-slot="frame-panel-footer" :class="cn('px-5 py-4', props.class)">
    <slot />
  </footer>
</template>
