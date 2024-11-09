<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupItem } from '../ui/RadioGroup'

const selectedValue = ref('r1')
const items = [
  { id: 'radio-13-r1', label: '2 CPU', value: 'r1' },
  { id: 'radio-13-r2', label: '4 CPU', value: 'r2' },
  { id: 'radio-13-r3', label: '6 CPU', value: 'r3' },
  { id: 'radio-13-r4', label: '8 CPU', value: 'r4' },
  { id: 'radio-13-r5', label: '12 CPU', value: 'r5' },
  { disabled: true, id: 'radio-13-r6', label: '16 CPU', value: 'r6' }
]
</script>

<template>
  <fieldset class="space-y-4">
    <legend class="text-sm font-medium leading-none text-foreground">CPU Cores</legend>
    <RadioGroup v-model="selectedValue" class="grid grid-cols-3 gap-2">
      <label
        v-for="item in items"
        :key="item.id"
        class="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/[.04] ring-offset-background transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[[data-disabled]]:opacity-50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/70 has-[:focus-visible]:ring-offset-2"
      >
        <RadioGroupItem
          :id="item.id"
          :value="item.value"
          class="sr-only after:absolute after:inset-0"
          :disabled="item.disabled"
        />
        <p class="text-sm font-medium leading-none text-foreground">{{ item.label }}</p>
      </label>
    </RadioGroup>
  </fieldset>
</template>
