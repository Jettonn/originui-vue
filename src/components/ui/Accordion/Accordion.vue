<script setup lang="ts">
import { AccordionRoot } from 'reka-ui'

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
