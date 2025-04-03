<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Label from '@/components/ui/Label.vue'
import { Brush, Eraser, Scissors, SwatchBook } from 'lucide-vue-next'

const items = ref([
  { checked: true, Icon: SwatchBook, id: 'checkbox-16-c1', label: 'Palette', value: 'c1' },
  { checked: false, Icon: Brush, id: 'checkbox-16-c2', label: 'Brush', value: 'c2' },
  { checked: false, Icon: Eraser, id: 'checkbox-16-c3', label: 'Eraser', value: 'c3' },
  { checked: false, Icon: Scissors, id: 'checkbox-16-c4', label: 'Cut', value: 'c4' }
])
</script>

<template>
  <div class="grid grid-cols-2 gap-3">
    <label
      v-for="item in items"
      :key="item.id"
      class="relative flex cursor-pointer flex-col gap-4 rounded-lg border border-input p-4 shadow-xs shadow-black/[.04] has-data-[state=checked]:border-ring"
    >
      <div class="flex justify-between gap-2">
        <Checkbox
          :id="item.id"
          class="order-1 h-4 w-4 after:absolute after:inset-0"
          v-model="item.checked"
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
    </label>
  </div>
</template>
