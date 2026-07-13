<script setup lang="ts">
import { cn } from '@/lib/utils'
import { reactiveOmit } from '@vueuse/core'
import { DropdownMenuSeparator, type DropdownMenuSeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<DropdownMenuSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps: DropdownMenuSeparatorProps = reactiveOmit(props, 'class')
</script>

<template>
  <DropdownMenuSeparator
    v-bind="delegatedProps"
    :class="cn('-mx-1 my-1 h-px bg-border', props.class)"
  />
</template>
