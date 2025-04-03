<script setup lang="ts">
import { ref } from 'vue'
import ToggleGroup from '@/components/ui/ToggleGroup/ToggleGroup.vue'
import ToggleGroupItem from '@/components/ui/ToggleGroup/ToggleGroupItem.vue'

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

const value = ref('')
</script>

<template>
  <ToggleGroup
    class="flex gap-0 -space-x-px rounded-lg shadow-xs shadow-black/5 rtl:space-x-reverse"
    type="single"
    variant="outline"
    v-model="value"
  >
    <ToggleGroupItem
      v-for="option in options"
      :key="option.value"
      class="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
      :value="option.value"
    >
      {{ option.label }}
    </ToggleGroupItem>
  </ToggleGroup>
</template>
