<script setup lang="ts">
import { PopoverRoot } from 'reka-ui'

defineOptions({
  name: 'Popover'
})
</script>

<template>
  <PopoverRoot>
    <slot />
  </PopoverRoot>
</template>
