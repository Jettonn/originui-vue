<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
</script>

<template>
  <div class="space-y-4">
    <Label>Dual range slider</Label>
    <Slider :default-value="[25, 75]" :step="10" aria-label="Dual range slider" />
  </div>
</template>
