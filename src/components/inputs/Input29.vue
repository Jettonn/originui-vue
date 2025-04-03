<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import { ChevronDown, ChevronUp } from 'lucide-vue-next'
import {
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot
} from 'reka-ui'

const inputValue = ref(99)
</script>

<template>
  <div class="space-y-2">
    <Label for="input-29" class="text-sm font-medium text-foreground">
      Number input with chevrons
    </Label>
    <NumberFieldRoot
      id="input-29"
      :default-value="inputValue"
      :format-options="{
        style: 'currency',
        currency: 'EUR',
        currencySign: 'accounting'
      }"
    >
      <div
        class="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-xs shadow-black/[.04] ring-offset-background transition-shadow focus-within:border-ring focus-within:outline-hidden focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2"
      >
        <NumberFieldInput
          class="flex-1 bg-background px-3 py-2 tabular-nums text-foreground focus:outline-hidden"
        />
        <div class="flex h-[calc(100%+2px)] flex-col">
          <NumberFieldIncrement
            class="-me-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronUp :size="12" stroke-width="2" aria-hidden="true" />
          </NumberFieldIncrement>
          <NumberFieldDecrement
            class="-me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronDown :size="12" stroke-width="2" aria-hidden="true" />
          </NumberFieldDecrement>
        </div>
      </div>
    </NumberFieldRoot>
  </div>
</template>
