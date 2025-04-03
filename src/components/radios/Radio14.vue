<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'

const selectedValue = ref('r1')
const items = [
  { id: 'radio-14-r1', label: 'USA', value: 'r1' },
  { id: 'radio-14-r2', label: 'UK', value: 'r2' },
  { id: 'radio-14-r3', label: 'France', value: 'r3' }
]
</script>

<template>
  <fieldset class="space-y-4">
    <legend class="text-sm font-medium leading-none text-foreground">CPU Cores</legend>
    <RadioGroup v-model="selectedValue" class="flex flex-wrap gap-2">
      <div
        v-for="item in items"
        :key="item.id"
        class="relative flex flex-col items-start gap-4 rounded-lg border border-input p-3 shadow-xs shadow-black/[.04] has-data-[state=checked]:border-ring"
      >
        <div class="flex items-center gap-2">
          <RadioGroupItem :id="item.id" :value="item.value" class="after:absolute after:inset-0" />
          <Label :for="item.id">{{ item.label }}</Label>
        </div>
      </div>
    </RadioGroup>
  </fieldset>
</template>
