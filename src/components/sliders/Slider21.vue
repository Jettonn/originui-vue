<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
import { ref } from 'vue'

const minPrice = 5
const maxPrice = 1240
const value = ref([minPrice, maxPrice])

const formatPrice = (price: number) => {
  return price === maxPrice ? `$${price.toLocaleString()}+` : `$${price.toLocaleString()}`
}
</script>

<template>
  <div class="space-y-3">
    <Label class="tabular-nums">
      From {{ formatPrice(value[0]) }} to {{ formatPrice(value[1]) }}
    </Label>
    <div class="flex items-center gap-4">
      <Slider v-model="value" :min="minPrice" :max="maxPrice" aria-label="Price range slider" />
      <Button variant="outline">Go</Button>
    </div>
  </div>
</template>
