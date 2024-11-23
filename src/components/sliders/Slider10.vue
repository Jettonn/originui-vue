<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
</script>

<template>
  <div class="space-y-4">
    <Label>Slider with labels and tooltip</Label>
    <div>
      <span
        class="mb-3 flex w-full items-center justify-between gap-2 text-xs font-medium text-muted-foreground"
        aria-hidden="true"
      >
        <span>Low</span>
        <span>High</span>
      </span>
      <Slider
        :default-value="[50]"
        :step="10"
        :show-tooltip="true"
        aria-label="Slider with labels and tooltip"
      />
    </div>
  </div>
</template>
