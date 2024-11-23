<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, h } from 'vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Tooltip'
import { cn } from '@/lib/utils'

interface Props {
  showTooltip?: boolean
  tooltipContent?: (value: number) => unknown
  modelValue?: number[]
  defaultValue?: number[]
  orientation?: 'horizontal' | 'vertical'
  class?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showTooltip: false,
  orientation: 'horizontal'
})

const emit = defineEmits(['update:modelValue'])

const showTooltipState = ref(false)
const internalValue = ref<number[]>(props.modelValue || props.defaultValue || [0])

// Watch for external value changes
watch(
  () => props.modelValue,
  newValue => {
    if (newValue !== undefined) {
      internalValue.value = newValue
    }
  }
)

const handleValueChange = (newValue: number[] | undefined) => {
  if (newValue) {
    internalValue.value = newValue
    emit('update:modelValue', newValue)
  }
}

const handlePointerDown = () => {
  if (props.showTooltip) {
    showTooltipState.value = true
  }
}

const handlePointerUp = () => {
  if (props.showTooltip) {
    showTooltipState.value = false
  }
}

// Global pointer up handler
onMounted(() => {
  if (props.showTooltip) {
    document.addEventListener('pointerup', handlePointerUp)
  }
})

onUnmounted(() => {
  if (props.showTooltip) {
    document.removeEventListener('pointerup', handlePointerUp)
  }
})

const renderThumb = (value: number) => {
  const thumb = h(SliderThumb, {
    class: cn(
      'block h-5 w-5 rounded-full border-2 border-primary bg-background transition-colors',
      'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-ring/40',
      'data-[disabled]:cursor-not-allowed'
    ),
    onPointerdown: handlePointerDown
  })

  if (!props.showTooltip) return thumb

  return h(
    TooltipProvider,
    {},
    {
      default: () =>
        h(
          Tooltip,
          { open: showTooltipState.value },
          {
            default: () => [
              h(
                TooltipTrigger,
                { asChild: true },
                {
                  default: () => thumb
                }
              ),
              h(
                TooltipContent,
                {
                  class: 'border border-input bg-popover px-2 py-1 text-xs text-muted-foreground',
                  sideOffset: 8,
                  side: props.orientation === 'vertical' ? 'right' : 'top'
                },
                {
                  default: () =>
                    h(
                      'p',
                      undefined,
                      String(props.tooltipContent ? props.tooltipContent(value) : value)
                    )
                }
              )
            ]
          }
        )
    }
  )
}
</script>

<template>
  <SliderRoot
    :model-value="internalValue"
    @update:model-value="handleValueChange"
    :class="
      cn(
        'relative flex w-full touch-none select-none items-center',
        'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
        'data-[disabled]:opacity-50',
        props.class
      )
    "
    :orientation="orientation"
    :disabled="disabled"
  >
    <SliderTrack
      class="relative grow overflow-hidden rounded-full bg-secondary data-[orientation=horizontal]:h-2 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-2"
    >
      <SliderRange
        class="absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
      />
    </SliderTrack>
    <template v-for="(value, index) in internalValue" :key="index">
      <component :is="renderThumb(value)" />
    </template>
  </SliderRoot>
</template>
