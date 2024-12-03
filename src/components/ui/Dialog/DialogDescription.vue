<script setup lang="ts">
import { DialogDescription } from 'radix-vue';
import { cn } from '@/lib/utils';

defineProps({
  className: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <DialogDescription :class="cn('text-sm text-muted-foreground', className)" v-bind="$attrs">
    <slot />
  </DialogDescription>
</template>
