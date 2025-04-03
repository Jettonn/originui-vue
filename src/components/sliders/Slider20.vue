<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
import { Minus, Plus } from 'lucide-vue-next'
import { ref } from 'vue'

const minValue = 0
const maxValue = 200
const steps = 5
const value = ref([100])

const decreaseValue = () => {
  value.value = [Math.max(minValue, value.value[0] - steps)]
}

const increaseValue = () => {
  value.value = [Math.min(maxValue, value.value[0] + steps)]
}
</script>

<template>
  <div class="space-y-3">
    <Label class="tabular-nums">{{ value[0] }} credits/mo</Label>
    <div class="flex items-center gap-4">
      <div>
        <Button
          variant="outline"
          size="icon"
          class="size-8"
          aria-label="Decrease value"
          @click="decreaseValue"
          :disabled="value[0] === 0"
        >
          <Minus :size="16" :stroke-width="2" aria-hidden="true" />
        </Button>
      </div>
      <Slider
        class="grow"
        v-model="value"
        :min="minValue"
        :max="maxValue"
        :step="steps"
        aria-label="Dual range slider with buttons"
      />
      <div>
        <Button
          variant="outline"
          size="icon"
          class="size-8"
          aria-label="Increase value"
          @click="increaseValue"
          :disabled="value[0] === 200"
        >
          <Plus :size="16" :stroke-width="2" aria-hidden="true" />
        </Button>
      </div>
    </div>
  </div>
</template>
