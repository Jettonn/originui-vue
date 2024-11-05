<script setup lang="ts">
import { Minus, Plus, Volume, Volume1, Volume2, VolumeX } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import { computed, ref } from 'vue'

const volume = ref(0)

const decreaseVolume = () => {
  volume.value--
}

const increaseVolume = () => {
  volume.value++
}

const VolumeIcon = computed(() => {
  if (volume.value === 0) return VolumeX
  if (volume.value < 3) return Volume
  if (volume.value < 5) return Volume1
  return Volume2
})
</script>

<template>
  <div class="inline-flex items-center" role="group" aria-labelledby="volume-control">
    <span id="volume-control" class="sr-only"> Volume Control </span>
    <Button
      class="rounded-full"
      variant="outline"
      size="icon"
      aria-label="Decrease volume"
      @click="decreaseVolume"
      :disabled="volume == 0"
    >
      <Minus :size="16" :stroke-width="2" aria-hidden="true" />
      <span class="sr-only">Decrease</span>
    </Button>
    <div class="flex items-center px-3 text-sm font-medium tabular-nums" aria-live="polite">
      <component
        :is="VolumeIcon"
        class="opacity-60"
        :size="16"
        :stroke-width="2"
        aria-hidden="true"
      />

      <span class="ms-2" :aria-label="`Current volume is ${volume}`">
        {{ volume }}
      </span>
    </div>
    <Button
      class="rounded-full"
      variant="outline"
      size="icon"
      aria-label="Increase volume"
      @click="increaseVolume"
      :disabled="volume == 6"
    >
      <Plus :size="16" :stroke-width="2" aria-hidden="true" />
      <span class="sr-only">Increase</span>
    </Button>
  </div>
</template>
