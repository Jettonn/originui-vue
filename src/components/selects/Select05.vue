<script setup lang="ts">
import { ref } from 'vue'
import Label from '../ui/Label.vue'
import SelectNative from '../ui/SelectNative.vue'

const selectedOption = ref('s1')
</script>

<template>
  <div class="space-y-2" :style="{ '--ring': '234 89% 74%' }">
    <Label for="select-05">Select with colored border (native)</Label>
    <SelectNative v-model="selectedOption" id="select-05">
      <option value="s1">React</option>
      <option value="s2">Next.js</option>
      <option value="s3">Astro</option>
      <option value="s4">Gatsby</option>
    </SelectNative>
  </div>
</template>
