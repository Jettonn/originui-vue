<template>
  <div class="space-y-2">
    <Label for="input-28" class="text-sm font-medium text-foreground">
      Number input with plus/minus buttons
    </Label>
    <div
      class="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-sm shadow-black/[.04] ring-offset-background transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2"
    >
      <button
        id="decrement-button"
        @click="decrement"
        class="-ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-lg border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Decrease value"
        :aria-labelledby="'decrement-button input-28'"
        aria-controls="input-28"
        :disabled="value <= minValue"
      >
        <Minus :size="16" stroke-width="2" aria-hidden="true" />
      </button>
      <Input
        id="input-28"
        type="text"
        v-model="value"
        @input="handleInput"
        aria-labelledby="input-28"
        autocomplete="off"
        inputmode="numeric"
        autocorrect="off"
        aria-roledescription="Number input"
        spellcheck="false"
        :min="minValue"
        class="w-full grow bg-background px-3 py-2 text-center tabular-nums text-foreground focus:outline-none"
      />
      <button
        id="increment-button"
        @click="increment"
        class="-me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-lg border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Increase value"
        :aria-labelledby="'increment-button input-28'"
        aria-controls="input-28"
      >
        <Plus :size="16" stroke-width="2" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Dependencies: pnpm install lucide-vue
import { ref } from 'vue'
import Input from '../ui/Input.vue'
import Label from '../ui/Label.vue'
import { Minus, Plus } from 'lucide-vue-next'

const value = ref(2048)
const minValue = 0

function increment() {
  value.value++
}

function decrement() {
  if (value.value > minValue) {
    value.value--
  }
}

function handleInput(event: Event) {
  const input = event.target as HTMLInputElement
  const newValue = parseInt(input.value, 10)
  if (!isNaN(newValue) && newValue >= minValue) {
    value.value = newValue
  } else {
    input.value = value.value.toString()
  }
}
</script>
