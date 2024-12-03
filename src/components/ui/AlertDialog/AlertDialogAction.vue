<script setup lang="ts">
import { AlertDialogAction } from 'radix-vue';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/lib/utils';
import { toRefs } from 'vue'

const props = defineProps({
  class: {
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

const { variant, size, class: extraClasses } = toRefs(props)
</script>

<template>
  <AlertDialogAction
    :class="cn(buttonVariants({ variant, size }), extraClasses)"
    v-bind="$attrs"
  >
    <slot />
  </AlertDialogAction>
</template>
