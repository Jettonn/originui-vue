<script setup lang="ts">
import { DialogTitle } from 'radix-vue';
import { cn } from '@/lib/utils';

defineProps({
  className: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <DialogTitle :class="cn('text-lg font-semibold tracking-tight', className)" v-bind="$attrs">
    <slot />
  </DialogTitle>
</template>
