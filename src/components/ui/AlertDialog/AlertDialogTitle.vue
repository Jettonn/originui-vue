<script setup lang="ts">
import { AlertDialogTitle } from 'radix-vue';
import { cn } from '@/lib/utils';

defineProps({
  className: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <AlertDialogTitle :class="cn('text-lg font-semibold', className)" v-bind="$attrs">
    <slot />
  </AlertDialogTitle>
</template>
