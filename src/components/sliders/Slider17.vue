<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
import { ref } from 'vue'

const value = ref([3])
const labels = ['Awful', 'Poor', 'Okay', 'Good', 'Amazing']
</script>

<template>
  <div class="space-y-3">
    <div class="flex items-center justify-between gap-2">
      <Label class="leading-6">Rate your experience</Label>
      <span class="text-sm font-medium">{{ labels[value[0] - 1] }}</span>
    </div>
    <div class="flex items-center gap-2">
      <span class="text-2xl">😡</span>
      <Slider v-model="value" :min="1" :max="5" aria-label="Rate your experience" />
      <span class="text-2xl">😍</span>
    </div>
  </div>
</template>
