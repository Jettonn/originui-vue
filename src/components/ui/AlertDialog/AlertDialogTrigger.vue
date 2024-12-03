<script setup lang="ts">
import { AlertDialogTrigger } from 'radix-vue';
import { cn } from '@/lib/utils';

defineProps({
  className: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <AlertDialogTrigger :class="cn('inline-flex items-center justify-center', className)" v-bind="$attrs">
    <slot />
  </AlertDialogTrigger>
</template>
