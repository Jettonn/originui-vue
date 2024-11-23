import { ref, watch } from 'vue'
import type { Ref } from 'vue'

export function useDebounce<T>(value: T, delay: number = 500): Ref<T> {
  const debouncedValue = ref<T>(value)

  let timeout: number

  watch(
    () => value,
    (newValue) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        debouncedValue.value = newValue
      }, delay)
    }
  )

  return debouncedValue.value
}
