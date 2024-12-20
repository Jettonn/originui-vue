<script setup lang="ts">
import { AccordionRoot } from 'radix-vue'

defineProps<{
  type?: 'single'
  collapsible?: boolean
  defaultValue?: string
}>()
</script>

<template>
  <AccordionRoot :type="type" :collapsible="collapsible" :default-value="defaultValue">
    <slot />
  </AccordionRoot>
</template>
