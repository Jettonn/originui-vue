<script setup lang="ts">
import { ref } from 'vue'
import ToggleGroup from '../ui/ToggleGroup/ToggleGroup.vue'
import ToggleGroupItem from '../ui/ToggleGroup/ToggleGroupItem.vue'

const options = [
  {
    value: 'left',
    label: 'Left'
  },
  {
    value: 'center',
    label: 'Center'
  },
  {
    value: 'right',
    label: 'Right'
  }
] as const

const value = ref(options[0].value)
</script>

<template>
  <ToggleGroup
    class="flex w-full gap-0 -space-x-px rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse"
    type="single"
    variant="outline"
    v-model="value"
  >
    <ToggleGroupItem
      v-for="option in options"
      :key="option.value"
      class="flex-1 rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
      :value="option.value"
      :aria-label="option.label"
    >
      {{ option.label }}
    </ToggleGroupItem>
  </ToggleGroup>
</template>
