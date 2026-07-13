<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <caption
    data-slot="table-caption"
    :class="cn('in-data-[variant=card]:my-4 mt-4 text-muted-foreground text-sm', props.class)"
  >
    <slot />
  </caption>
</template>
