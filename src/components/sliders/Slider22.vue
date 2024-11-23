<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
import { ref } from 'vue'

const value = ref([5])
</script>

<template>
  <div class="space-y-4">
    <Label>Vertical slider</Label>
    <div class="flex h-40 justify-center">
      <Slider v-model="value" :max="10" orientation="vertical" aria-label="Vertical slider" />
    </div>
  </div>
</template>
