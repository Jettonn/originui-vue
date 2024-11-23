<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
import { ref } from 'vue'

const value = ref([3])

const emojis = ['😡', '🙁', '😐', '🙂', '😍']
const labels = ['Awful', 'Poor', 'Okay', 'Good', 'Amazing']
</script>

<template>
  <div class="space-y-3">
    <Label>Rate your experience</Label>
    <div class="flex items-center gap-2">
      <Slider
        v-model="value"
        :min="1"
        :max="5"
        :show-tooltip="true"
        :tooltip-content="value => labels[value - 1]"
        aria-label="Rate your experience"
      />
      <span class="text-2xl">{{ emojis[value[0] - 1] }}</span>
    </div>
  </div>
</template>
