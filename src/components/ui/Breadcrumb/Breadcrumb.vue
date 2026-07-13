<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <nav aria-label="breadcrumb" :class="cn(props.class)">
    <slot />
  </nav>
</template>
