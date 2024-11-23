<script setup lang="ts">
import { ref } from 'vue'
import Label from '../ui/Label.vue'
import SelectNative from '../ui/SelectNative.vue'

const selectedOption = ref('s1')
</script>

<template>
  <div class="space-y-2">
    <Label for="select-11">Select with option groups (native)</Label>
    <SelectNative v-model="selectedOption" id="select-11">
      <optgroup label="Frontend">
        <option value="s1">React</option>
        <option value="s2">Vue</option>
        <option value="s3">Angular</option>
      </optgroup>
      <optgroup label="Backend">
        <option value="s4">Node.js</option>
        <option value="s5">Python</option>
        <option value="s6">Java</option>
      </optgroup>
    </SelectNative>
  </div>
</template>
