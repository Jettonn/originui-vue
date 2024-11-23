<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
</script>

<template>
  <div class="space-y-4">
    <Label>Slider with reference labels</Label>
    <div>
      <Slider :default-value="[15]" :min="5" :max="35" aria-label="Slider with reference labels" />
      <span
        class="mt-4 flex w-full items-center justify-between gap-1 text-xs font-medium text-muted-foreground"
        aria-hidden="true"
      >
        <span>5 GB</span>
        <span>20 GB</span>
        <span>35 GB</span>
      </span>
    </div>
  </div>
</template>
