<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip'
import { RotateCcw } from 'lucide-vue-next'
import { ref } from 'vue'

const minValue = 0.0
const maxValue = 2
const initialValue = [1.25]
const defaultValue = [1]

const sliderValue = ref(initialValue)
const inputValues = ref([initialValue[0].toString()])

const validateAndUpdateValue = (value: string, index: number) => {
  const numValue = parseFloat(value)
  if (!isNaN(numValue) && numValue >= minValue && numValue <= maxValue) {
    sliderValue.value[index] = numValue
    inputValues.value[index] = numValue.toString()
  } else {
    inputValues.value[index] = sliderValue.value[index].toString()
  }
}

const handleInputChange = (e: Event, index: number) => {
  const target = e.target as HTMLInputElement
  inputValues.value[index] = target.value
}

const handleSliderChange = (value: number[]) => {
  sliderValue.value = value
  inputValues.value = value.map(v => v.toString())
}

const resetToDefault = () => {
  sliderValue.value = [...defaultValue]
  inputValues.value = defaultValue.map(v => v.toString())
}
</script>

<template>
  <div class="space-y-3">
    <div class="flex items-center justify-between gap-2">
      <Label>Temperature</Label>
      <div class="flex items-center gap-1">
        <TooltipProvider :delay-duration="0">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button
                size="icon"
                variant="ghost"
                class="size-7"
                aria-label="Reset"
                @click="resetToDefault"
              >
                <RotateCcw :size="16" :stroke-width="2" aria-hidden="true" />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              class="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground"
            >
              Reset to default
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Input
          class="h-7 w-12 px-2 py-0"
          type="text"
          input-mode="decimal"
          :value="inputValues[0]"
          @input="e => handleInputChange(e, 0)"
          @blur="() => validateAndUpdateValue(inputValues[0], 0)"
          @keydown="
            (e: KeyboardEvent) => {
              if (e.key === 'Enter') {
                validateAndUpdateValue(inputValues[0], 0)
              }
            }
          "
          aria-label="Enter value"
        />
      </div>
    </div>
    <div class="flex items-center gap-4">
      <Slider
        class="flex-grow"
        :model-value="sliderValue"
        @update:model-value="handleSliderChange"
        :min="minValue"
        :max="maxValue"
        :step="0.01"
        aria-label="Temperature"
      />
    </div>
  </div>
</template>
