<script setup lang="ts">
import { cn } from '@/lib/utils'
import { reactiveOmit } from '@vueuse/core'
import { NavigationMenuList, type NavigationMenuListProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<NavigationMenuListProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <NavigationMenuList
    v-bind="delegatedProps"
    :class="cn('group flex flex-1 list-none items-center justify-center gap-1', props.class)"
  >
    <slot />
  </NavigationMenuList>
</template>
