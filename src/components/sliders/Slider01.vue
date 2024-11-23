<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
</script>

<template>
  <div class="space-y-4">
    <Label>Simple slider</Label>
    <Slider :default-value="[25]" aria-label="Simple slider" />
  </div>
</template>
