<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
</script>

<template>
  <div class="space-y-4">
    <Label>Slider with tiny thumb</Label>
    <Slider
      :default-value="[25]"
      class="[&>:last-child]:h-6 [&>:last-child]:w-2.5 [&>:last-child]:border-[3px] [&>:last-child]:border-background [&>:last-child]:bg-primary [&>:last-child]:ring-offset-0"
      aria-label="Slider with tiny thumb"
    />
  </div>
</template>
