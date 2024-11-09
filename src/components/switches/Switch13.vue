<script setup lang="ts">
import { ref } from 'vue'
import Switch from '../ui/Switch.vue'
import { Moon, Sun } from 'lucide-vue-next'
import Label from '../ui/Label.vue'

const checked = ref(false)
</script>

<template>
  <div>
    <div class="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium">
      <Switch
        id="switch-13"
        v-model="checked"
        class="peer absolute inset-0 h-[inherit] w-auto data-[state=unchecked]:bg-input/50 [&_span]:z-10 [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:[&_span]:translate-x-full rtl:data-[state=checked]:[&_span]:-translate-x-full"
      />
      <span
        class="pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:invisible peer-data-[state=unchecked]:translate-x-full rtl:peer-data-[state=unchecked]:-translate-x-full"
      >
        <Moon :size="16" stroke-width="2" aria-hidden="true" />
      </span>
      <span
        class="pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] peer-data-[state=unchecked]:invisible peer-data-[state=checked]:-translate-x-full peer-data-[state=checked]:text-background rtl:peer-data-[state=checked]:translate-x-full"
      >
        <Sun :size="16" stroke-width="2" aria-hidden="true" />
      </span>
    </div>
    <Label for="switch-13" class="sr-only">Labeled switch</Label>
  </div>
</template>
