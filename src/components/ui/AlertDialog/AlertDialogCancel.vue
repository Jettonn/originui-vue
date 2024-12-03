<script setup lang="ts">
import { AlertDialogCancel } from 'radix-vue';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/lib/utils';

defineProps({
  className: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'outline',
  },
  size: {
    type: String,
    default: 'default',
  },
});
</script>

<template>
  <AlertDialogCancel
    :class="cn(buttonVariants({ variant, size }), className)"
    v-bind="$attrs"
  >
    <slot />
  </AlertDialogCancel>
</template>
