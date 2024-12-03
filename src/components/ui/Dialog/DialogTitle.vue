<script setup lang="ts">
import { DialogTitle } from 'radix-vue';
import { cn } from '@/lib/utils';
import { toRefs } from 'vue'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
});

const { class: extraClasses } = toRefs(props);
</script>

<template>
  <DialogTitle :class="cn('text-lg font-semibold tracking-tight', extraClasses)">
    <slot />
  </DialogTitle>
</template>
