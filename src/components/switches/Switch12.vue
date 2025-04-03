<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import Switch from '@/components/ui/Switch.vue'
import { Moon, Sun } from 'lucide-vue-next'

const checked = ref(false)
</script>

<template>
  <div>
    <div class="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium">
      <Switch
        id="switch-12"
        v-model="checked"
        class="peer absolute inset-0 h-[inherit] w-auto data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full"
      />
      <span
        class="pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center peer-data-[state=checked]:text-muted-foreground/70"
      >
        <Moon :size="16" stroke-width="2" aria-hidden="true" />
      </span>
      <span
        class="pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center peer-data-[state=unchecked]:text-muted-foreground/70"
      >
        <Sun :size="16" stroke-width="2" aria-hidden="true" />
      </span>
    </div>
    <Label for="switch-12" class="sr-only">Labeled switch</Label>
  </div>
</template>
