<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
</script>

<template>
  <div class="space-y-4">
    <Label>Slider with solid thumb</Label>
    <Slider
      :default-value="[25]"
      class="[&>:first-child]:opacity-70 [&>:last-child]:bg-primary"
      aria-label="Slider with solid thumb"
    />
  </div>
</template>
