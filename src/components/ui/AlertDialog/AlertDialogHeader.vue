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
  <div :class="cn('flex flex-col space-y-1 text-center sm:text-left', className)" v-bind="$attrs">
    <slot />
  </div>
</template>
