<template>
  <button :class="buttonClasses" ref="buttonRef">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, toRefs } from 'vue';
import { cn, buttonVariants } from '@/lib/utils';

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'default',
  },
  className: {
    type: String,
    default: '',
  },
});

const { variant, size, className } = toRefs(props);
const buttonRef = ref<HTMLElement | null>(null);

const buttonClasses = computed(() =>
  cn(buttonVariants({ variant: variant.value, size: size.value }), className.value)
);
</script>
