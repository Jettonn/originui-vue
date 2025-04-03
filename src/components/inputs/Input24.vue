<script setup lang="ts">
// Dependencies: pnpm install lucide-vue-next
import { ref } from 'vue'
import { CircleX } from 'lucide-vue-next'
import Label from '@/components/ui/Label.vue'
import Input from '@/components/ui/Input.vue'

const inputValue = ref('Click to clear')
const inputElement = ref<HTMLInputElement | null>(null)

function handleClearInput() {
  inputValue.value = ''
  inputElement.value?.focus()
}
</script>

<template>
  <div class="space-y-2">
    <Label for="input-24">Input with clear button</Label>
    <div class="relative">
      <Input
        id="input-24"
        ref="inputElement"
        v-model="inputValue"
        class="pe-9"
        placeholder="Type something..."
        type="text"
      />
      <button
        v-if="inputValue"
        class="absolute inset-y-px end-px flex h-full w-9 items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 ring-offset-background transition-shadow animate-in fade-in zoom-in-75 hover:text-foreground focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Clear input"
        @click="handleClearInput"
      >
        <CircleX :size="16" :stroke-width="2" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
