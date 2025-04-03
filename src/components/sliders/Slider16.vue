<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
import Input from '@/components/ui/Input.vue'
import { ref } from 'vue'

const minValue = 0
const maxValue = 100
const initialValue = [25]

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
</script>

<template>
  <div class="space-y-3">
    <Label>Slider with input</Label>
    <div class="flex items-center gap-4">
      <Slider
        class="grow"
        :model-value="sliderValue"
        @update:model-value="handleSliderChange"
        :min="minValue"
        :max="maxValue"
        aria-label="Slider with input"
      />
      <Input
        class="h-8 w-12 px-2 py-1"
        type="text"
        input-mode="decimal"
        :model-value="inputValues[0]"
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
</template>
