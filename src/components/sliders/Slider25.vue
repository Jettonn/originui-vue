<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
import { RotateCcw } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'

const resetFunctions = ref<(() => void)[]>([])

const resetAll = () => {
  resetFunctions.value.forEach(resetFn => resetFn())
}

const registerResetFunction = (resetFn: () => void, index: number) => {
  resetFunctions.value[index] = resetFn
}

const sliders = [
  { label: 'X', initialValue: [-2], defaultValue: [0] },
  { label: 'Y', initialValue: [4], defaultValue: [0] },
  { label: 'Z', initialValue: [2], defaultValue: [0] }
]

const sliderValues = ref(sliders.map(s => [...s.initialValue]))
const inputValues = ref(sliders.map(s => s.initialValue.map(v => v.toString())))

const validateAndUpdateValue = (value: string, sliderIndex: number, valueIndex: number) => {
  const numValue = parseFloat(value)
  if (!isNaN(numValue) && numValue >= -10 && numValue <= 10) {
    sliderValues.value[sliderIndex][valueIndex] = numValue
    inputValues.value[sliderIndex][valueIndex] = numValue.toString()
  } else {
    inputValues.value[sliderIndex][valueIndex] =
      sliderValues.value[sliderIndex][valueIndex].toString()
  }
}

const handleInputChange = (e: Event, sliderIndex: number, valueIndex: number) => {
  const target = e.target as HTMLInputElement
  inputValues.value[sliderIndex][valueIndex] = target.value
}

const handleSliderChange = (value: number[], sliderIndex: number) => {
  sliderValues.value[sliderIndex] = value
  inputValues.value[sliderIndex] = value.map(v => v.toString())
}

const resetSlider = (sliderIndex: number) => {
  sliderValues.value[sliderIndex] = [...sliders[sliderIndex].defaultValue]
  inputValues.value[sliderIndex] = sliders[sliderIndex].defaultValue.map(v => v.toString())
}

onMounted(() => {
  sliders.forEach((_, index) => {
    registerResetFunction(() => resetSlider(index), index)
  })
})
</script>

<template>
  <div class="space-y-4">
    <legend class="text-sm font-medium text-foreground">Object position</legend>
    <div class="space-y-2">
      <div v-for="(slider, index) in sliders" :key="slider.label" class="flex items-center gap-2">
        <Label class="text-xs text-muted-foreground">{{ slider.label }}</Label>
        <Slider
          class="flex-grow [&>:last-child>span]:rounded"
          :model-value="sliderValues[index]"
          @update:model-value="value => handleSliderChange(value, index)"
          :min="-10"
          :max="10"
          :aria-label="slider.label"
        />
        <Input
          class="h-8 w-12 px-2 py-1"
          type="text"
          input-mode="decimal"
          :model-value="inputValues[index][0]"
          @input="e => handleInputChange(e, index, 0)"
          @blur="() => validateAndUpdateValue(inputValues[index][0], index, 0)"
          @keydown="
            (e: KeyboardEvent) => {
              if (e.key === 'Enter') {
                validateAndUpdateValue(inputValues[index][0], index, 0)
              }
            }
          "
          :aria-label="`Enter ${slider.label} value`"
        />
      </div>
    </div>
    <Button class="w-full" variant="outline" @click="resetAll">
      <RotateCcw class="-ms-1 me-2 opacity-60" :size="16" :stroke-width="2" aria-hidden="true" />
      Reset
    </Button>
  </div>
</template>
