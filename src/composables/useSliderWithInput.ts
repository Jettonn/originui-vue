import { ref } from 'vue'

type UseSliderWithInputProps = {
  minValue?: number
  maxValue?: number
  initialValue?: number[]
  defaultValue?: number[]
}

export function useSliderWithInput({
  minValue = 0,
  maxValue = 100,
  initialValue = [minValue],
  defaultValue = [minValue],
}: UseSliderWithInputProps) {
  const sliderValue = ref(initialValue)
  const inputValues = ref(initialValue.map((v) => v.toString()))

  const validateAndUpdateValue = (rawValue: string, index: number) => {
    if (rawValue === '' || rawValue === '-') {
      const newInputValues = [...inputValues.value]
      newInputValues[index] = '0'
      inputValues.value = newInputValues

      const newSliderValues = [...sliderValue.value]
      newSliderValues[index] = 0
      sliderValue.value = newSliderValues
      return
    }

    const numValue = parseFloat(rawValue)

    if (isNaN(numValue)) {
      const newInputValues = [...inputValues.value]
      newInputValues[index] = sliderValue.value[index].toString()
      inputValues.value = newInputValues
      return
    }

    let clampedValue = Math.min(maxValue, Math.max(minValue, numValue))

    if (sliderValue.value.length > 1) {
      if (index === 0) {
        clampedValue = Math.min(clampedValue, sliderValue.value[1])
      } else {
        clampedValue = Math.max(clampedValue, sliderValue.value[0])
      }
    }

    const newSliderValues = [...sliderValue.value]
    newSliderValues[index] = clampedValue
    sliderValue.value = newSliderValues

    const newInputValues = [...inputValues.value]
    newInputValues[index] = clampedValue.toString()
    inputValues.value = newInputValues
  }

  const handleInputChange = (e: Event, index: number) => {
    const target = e.target as HTMLInputElement
    const newValue = target.value
    if (newValue === '' || /^-?\d*\.?\d*$/.test(newValue)) {
      const newInputValues = [...inputValues.value]
      newInputValues[index] = newValue
      inputValues.value = newInputValues
    }
  }

  const handleSliderChange = (newValue: number[]) => {
    sliderValue.value = newValue
    inputValues.value = newValue.map((v) => v.toString())
  }

  const resetToDefault = () => {
    sliderValue.value = defaultValue
    inputValues.value = defaultValue.map((v) => v.toString())
  }

  return {
    sliderValue,
    inputValues,
    validateAndUpdateValue,
    handleInputChange,
    handleSliderChange,
    resetToDefault,
  }
}
