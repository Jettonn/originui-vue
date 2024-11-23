<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
import { cn } from '@/lib/utils'

const max = 12
const skipInterval = 2 // Set to 1 to allow no text skipping
const ticks = [...Array(max + 1)].map((_, i) => i)
</script>

<template>
  <div class="space-y-4">
    <Label>Slider with ticks</Label>
    <div>
      <Slider :default-value="[5]" :max="max" aria-label="Slider with ticks" />
      <span
        class="mt-3 flex w-full items-center justify-between gap-1 px-2.5 text-xs font-medium text-muted-foreground"
        aria-hidden="true"
      >
        <span
          v-for="(_, i) in ticks"
          :key="i"
          class="flex w-0 flex-col items-center justify-center gap-2"
        >
          <span :class="cn('h-1 w-px bg-muted-foreground/70', i % skipInterval !== 0 && 'h-0.5')" />
          <span :class="cn(i % skipInterval !== 0 && 'opacity-0')">{{ i }}</span>
        </span>
      </span>
    </div>
  </div>
</template>
