<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
</script>

<template>
  <div class="space-y-4">
    <Label>Slider with multiple thumbs</Label>
    <Slider
      :default-value="[25, 50, 100]"
      :show-tooltip="true"
      :tooltip-content="value => `${value}%`"
      aria-label="Slider with multiple thumbs"
    />
  </div>
</template>
