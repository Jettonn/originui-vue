<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'

const selectedValue = ref('r2')
</script>

<template>
  <RadioGroup v-model="selectedValue" disabled>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="r1" id="radio-03-r1" />
      <Label for="radio-03-r1">Option 1</Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="r2" id="radio-03-r2" />
      <Label for="radio-03-r2">Option 2</Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="r3" id="radio-03-r3" />
      <Label for="radio-03-r3">Option 3</Label>
    </div>
  </RadioGroup>
</template>
