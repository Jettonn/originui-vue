<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
import { Volume2, VolumeX } from 'lucide-vue-next'
import { ref } from 'vue'

const value = ref([25])
</script>

<template>
  <div class="space-y-3">
    <div class="flex items-center justify-between gap-2">
      <Label class="leading-6">Volume</Label>
      <output class="text-sm font-medium tabular-nums">{{ value[0] }}</output>
    </div>
    <div class="flex items-center gap-2">
      <VolumeX class="shrink-0 opacity-60" :size="16" :stroke-width="2" aria-hidden="true" />
      <Slider v-model="value" aria-label="Volume slider" />
      <Volume2 class="shrink-0 opacity-60" :size="16" :stroke-width="2" aria-hidden="true" />
    </div>
  </div>
</template>
