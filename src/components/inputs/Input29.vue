<template>
  <div class="space-y-2">
    <Label for="input-29" class="text-sm font-medium text-foreground">
      Number input with chevrons
    </Label>
    <div
      class="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-sm shadow-black/[.04] ring-offset-background transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2"
    >
      <input
        id="input-29"
        type="text"
        @input="handleInput"
        aria-labelledby="input-29"
        autocomplete="off"
        inputmode="decimal"
        autocorrect="off"
        aria-roledescription="Currency input"
        spellcheck="false"
        class="flex-1 bg-background px-3 py-2 tabular-nums text-foreground focus:outline-none"
        v-model="inputValue"
      />
      <div class="flex h-[calc(100%+2px)] flex-col">
        <button
          id="increment-button"
          @click="increment"
          class="-me-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Increase value"
          aria-labelledby="increment-button input-29"
          aria-controls="input-29"
        >
          <ChevronUp :size="12" stroke-width="2" aria-hidden="true" />
        </button>
        <button
          id="decrement-button"
          @click="decrement"
          class="-me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Decrease value"
          aria-labelledby="decrement-button input-29"
          aria-controls="input-29"
        >
          <ChevronDown :size="12" stroke-width="2" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Label from '@/components/ui/Label.vue'
import { ChevronDown, ChevronUp } from 'lucide-vue-next'

const inputValue = ref(99)

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    currencySign: 'accounting'
  }).format(amount)
}

function increment() {
  inputValue.value++
}

function decrement() {
  inputValue.value--
}

function handleInput(event: Event) {
  const input = event.target as HTMLInputElement
  const newValue = parseFloat(input.value.replace(/[^0-9.-]+/g, ''))
  if (!isNaN(newValue)) {
    inputValue.value = newValue
  } else {
    input.value = formatCurrency(inputValue.value)
  }
}

watch(inputValue, newValue => {
  const input = document.getElementById('input-29') as HTMLInputElement
  if (input) {
    input.value = formatCurrency(newValue)
  }
})
</script>
