<script setup lang="ts">
import { PopoverRoot } from 'radix-vue'

defineOptions({
  name: 'Popover'
})
</script>

<template>
  <PopoverRoot>
    <slot />
  </PopoverRoot>
</template>
