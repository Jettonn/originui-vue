<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'
import { Brush, Eraser, Scissors, SwatchBook } from 'lucide-vue-next'

const items = [
  { Icon: SwatchBook, id: 'radio-11-r1', label: 'Palette', value: 'r1' },
  { Icon: Brush, id: 'radio-11-r2', label: 'Brush', value: 'r2' },
  { Icon: Eraser, id: 'radio-11-r3', label: 'Eraser', value: 'r3' },
  { Icon: Scissors, id: 'radio-11-r4', label: 'Cut', value: 'r4' }
]

const selectedValue = ref('r1')
</script>

<template>
  <RadioGroup class="grid grid-cols-2 gap-2" v-model="selectedValue">
    <div
      v-for="item in items"
      :key="item.id"
      class="relative flex flex-col gap-4 rounded-lg border border-input p-4 shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-ring"
    >
      <div class="flex justify-between gap-2">
        <RadioGroupItem
          :id="item.id"
          :value="item.value"
          class="order-1 after:absolute after:inset-0"
        />

        <component
          :is="item.Icon"
          class="opacity-60"
          :size="16"
          :stroke-width="2"
          aria-hidden="true"
        />
      </div>
      <Label :for="item.id">{{ item.label }}</Label>
    </div>
  </RadioGroup>
</template>
