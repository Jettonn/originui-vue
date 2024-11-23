<script setup lang="ts">
import { Command } from 'vue-command-palette'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const classes = computed(() => cn('-mx-1 h-px bg-border', props.class))
</script>

<template>
  <Command.Separator :class="classes" />
</template>
