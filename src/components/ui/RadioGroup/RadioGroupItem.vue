<template>
  <RadioItem :value="value" :class="classes">
    <RadioGroupIndicator class="flex items-center justify-center text-current">
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="currentcolor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3" cy="3" r="3" />
      </svg>
    </RadioGroupIndicator>
  </RadioItem>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { RadioGroupIndicator, RadioGroupItem as RadioItem } from 'radix-vue'
import { computed } from 'vue'

interface Props {
  value: string
  class?: string
}

const props = defineProps<Props>()

const classes = computed(() => {
  return cn(
    'aspect-square size-4 rounded-full border border-input shadow-sm shadow-black/[.04] ring-offset-background transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
    props.class
  )
})
</script>
