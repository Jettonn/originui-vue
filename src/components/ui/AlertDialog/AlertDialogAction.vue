<script setup lang="ts">
import { AlertDialogAction } from 'radix-vue';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/lib/utils';

defineProps({
  className: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'default',
  },
});
</script>

<template>
  <AlertDialogAction
    :class="cn(buttonVariants({ variant, size }), className)"
    v-bind="$attrs"
  >
    <slot />
  </AlertDialogAction>
</template>
