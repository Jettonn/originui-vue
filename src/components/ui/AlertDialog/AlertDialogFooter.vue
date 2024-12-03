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
  <div :class="cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3', className)" v-bind="$attrs">
    <slot />
  </div>
</template>
