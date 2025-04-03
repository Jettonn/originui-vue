<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import { Minus, Plus } from 'lucide-vue-next'
import {
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot
} from 'reka-ui'

const value = ref(2048)
const minValue = 0
</script>

<template>
  <div class="space-y-2">
    <Label for="input-28" class="text-sm font-medium text-foreground">
      Number input with plus/minus buttons
    </Label>
    <NumberFieldRoot id="input-28" :min="minValue" :default-value="value">
      <div
        class="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-xs shadow-black/[.04] ring-offset-background transition-shadow focus-within:border-ring focus-within:outline-hidden focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2"
      >
        <NumberFieldDecrement
          class="-ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-lg border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Minus :size="16" stroke-width="2" aria-hidden="true" />
        </NumberFieldDecrement>
        <NumberFieldInput
          class="w-full grow bg-background px-3 py-2 text-center tabular-nums text-foreground focus:outline-hidden"
        />
        <NumberFieldIncrement
          class="-me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-lg border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Plus :size="16" stroke-width="2" aria-hidden="true" />
        </NumberFieldIncrement>
      </div>
    </NumberFieldRoot>
  </div>
</template>
