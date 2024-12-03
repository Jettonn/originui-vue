<script setup lang="ts">
import { cn } from '@/lib/utils';

defineProps({
  className: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div :class="cn('flex flex-col-reverse gap-2 sm:gap-3 sm:flex-row sm:justify-end', className)" v-bind="$attrs">
    <slot />
  </div>
</template>
