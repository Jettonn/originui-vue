<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'

const items = ref([
  { checked: true, id: 'checkbox-18-c1', label: 'Monday', value: 'c1' },
  { checked: true, id: 'checkbox-18-c2', label: 'Tuesday', value: 'c2' },
  { checked: false, id: 'checkbox-18-c3', label: 'Wednesday', value: 'c3' },
  { checked: true, id: 'checkbox-18-c4', label: 'Thursday', value: 'c4' },
  { checked: true, id: 'checkbox-18-c5', label: 'Friday', value: 'c5' },
  { checked: false, id: 'checkbox-18-c6', label: 'Saturday', value: 'c6' },
  { disabled: true, id: 'checkbox-18-c7', label: 'Sunday', value: 'c7' }
])
</script>

<template>
  <fieldset class="space-y-4">
    <legend class="text-sm font-medium leading-none text-foreground">Days of the week</legend>
    <div class="flex gap-1.5">
      <label
        v-for="item in items"
        :key="item.id"
        class="relative flex size-9 cursor-pointer flex-col items-center justify-center gap-3 rounded-full border border-input text-center shadow-sm shadow-black/[.04] ring-offset-background transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary has-[[data-state=checked]]:text-primary-foreground has-[[data-disabled]]:opacity-50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/70 has-[:focus-visible]:ring-offset-2"
      >
        <Checkbox
          :id="item.id"
          class="sr-only after:absolute after:inset-0"
          v-model="item.checked"
          :disabled="item.disabled"
        />
        <span aria-hidden="true" class="text-sm font-medium">
          {{ item.label[0] }}
        </span>
        <span class="sr-only">{{ item.label }}</span>
      </label>
    </div>
  </fieldset>
</template>
