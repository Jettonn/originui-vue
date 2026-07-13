<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { TabsRootEmits, TabsRootProps } from 'reka-ui'
import { TabsRoot, useForwardPropsEmits } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const emits = defineEmits<TabsRootEmits>()
const props = defineProps<TabsRootProps & { class?: HTMLAttributes['class'] }>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TabsRoot v-bind="forwarded" :class="cn('flex flex-col gap-2', props.class)">
    <slot />
  </TabsRoot>
</template>
