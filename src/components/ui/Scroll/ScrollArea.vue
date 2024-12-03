<script setup lang="ts">
import { ref } from 'vue';
import { ScrollAreaRoot, ScrollAreaViewport, ScrollAreaCorner } from 'radix-vue';
import { cn } from '@/lib/utils';
import { ScrollBar } from './index'

defineProps({
  className: {
    type: String,
    default: '',
  },
});

const rootRef = ref(null);
</script>

<template>
  <ScrollAreaRoot ref="rootRef" :class="cn('relative overflow-hidden', className)">
    <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
      <slot />
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
