<script setup lang="ts">
import { ref } from 'vue'
import Label from '../ui/Label.vue'
import SelectNative from '../ui/SelectNative.vue'

const selectedOption = ref('')
</script>

<template>
  <div class="space-y-2">
    <Label for="select-02">Select with placeholder (native)</Label>
    <SelectNative v-model="selectedOption" id="select-02">
      <option value="" disabled>Please select a value</option>
      <option value="s1">1 to 5</option>
      <option value="s2">5 to 10</option>
      <option value="s3">More than 10</option>
    </SelectNative>
  </div>
</template>
