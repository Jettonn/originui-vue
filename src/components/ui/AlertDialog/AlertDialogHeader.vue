<script setup lang="ts">
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
  <div :class="cn('flex flex-col space-y-1 text-center sm:text-left', extraClasses)">
    <slot />
  </div>
</template>
