<script setup lang="ts">
import { AlertDialogDescription } from 'radix-vue';
import { cn } from '@/lib/utils';

defineProps({
  className: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <AlertDialogDescription :class="cn('text-sm text-muted-foreground', className)" v-bind="$attrs">
    <slot />
  </AlertDialogDescription>
</template>
