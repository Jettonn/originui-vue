<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'

const items = [
  { icon: '😠', id: 'radio-16-r1', label: 'Angry', value: 'r1' },
  { icon: '🙁', id: 'radio-16-r2', label: 'Sad', value: 'r2' },
  { icon: '😐', id: 'radio-16-r3', label: 'Neutral', value: 'r3' },
  { icon: '🙂', id: 'radio-16-r4', label: 'Happy', value: 'r4' },
  { icon: '😀', id: 'radio-16-r5', label: 'Laughing', value: 'r5' }
]

const selectedValue = ref('r3')
</script>

<template>
  <fieldset class="space-y-4">
    <legend class="text-sm font-medium leading-none text-foreground">How did it go?</legend>
    <RadioGroup class="flex gap-1.5" v-model="selectedValue">
      <label
        v-for="item in items"
        :key="item.id"
        class="relative flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border border-input text-center text-xl shadow-xs shadow-black/[.04] ring-offset-background transition-colors has-data-disabled:cursor-not-allowed has-data-[state=checked]:border-ring has-data-[state=checked]:bg-accent has-data-disabled:opacity-50 has-focus-visible:ring-2 has-focus-visible:ring-ring/70 has-focus-visible:ring-offset-2"
      >
        <RadioGroupItem
          :id="item.id"
          :value="item.value"
          class="sr-only after:absolute after:inset-0"
        />
        {{ item.icon }}
      </label>
    </RadioGroup>
  </fieldset>
</template>
