<script setup lang="ts">
import { AlertDialogOverlay } from 'radix-vue';
import { cn } from '@/lib/utils';

defineProps({
  className: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <AlertDialogOverlay
    :class="cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )"
    v-bind="$attrs"
  >
    <slot />
  </AlertDialogOverlay>
</template>
