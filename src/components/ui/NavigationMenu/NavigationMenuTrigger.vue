<script setup lang="ts">
import { cn } from '@/lib/utils'
import { reactiveOmit } from '@vueuse/core'
import { NavigationMenuTrigger, type NavigationMenuTriggerProps } from 'reka-ui'
import { ChevronDown as ChevronDownIcon } from 'lucide-vue-next'
import type { HTMLAttributes } from 'vue'
import { navigationMenuTriggerStyle } from './style'

const props = defineProps<NavigationMenuTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <NavigationMenuTrigger
    v-bind="delegatedProps"
    :class="cn(navigationMenuTriggerStyle(), 'gap-1', props.class)"
  >
    <slot />
    <ChevronDownIcon
      class="relative top-px size-3.5 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuTrigger>
</template>
