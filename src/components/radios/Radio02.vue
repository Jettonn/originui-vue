<script setup lang="ts">
import Label from '../ui/Label.vue'
import { RadioGroup, RadioGroupItem } from '../ui/RadioGroup'
import { ref } from 'vue'

const selectedValue = ref('r2')
</script>

<template>
  <RadioGroup
    v-model="selectedValue"
    :style="{ '--primary': '238.7 83.5% 66.7%', '--ring': '238.7 83.5% 66.7%' }"
  >
    <div class="flex items-center gap-2">
      <RadioGroupItem value="r1" id="radio-02-r1" />
      <Label for="radio-02-r1">Option 1</Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="r2" id="radio-02-r2" />
      <Label for="radio-02-r2">Option 2</Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="r3" id="radio-02-r3" />
      <Label for="radio-02-r3">Option 3</Label>
    </div>
  </RadioGroup>
</template>
