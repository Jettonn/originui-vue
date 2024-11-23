<script setup lang="ts">
import { ref } from 'vue'
import Label from '../ui/Label.vue'
import SelectNative from '../ui/SelectNative.vue'

const selectedOption = ref('s1')
</script>

<template>
  <div class="space-y-2">
    <Label for="select-09">
      Required select (native) <span class="text-destructive">*</span>
    </Label>
    <SelectNative v-model="selectedOption" id="select-09">
      <option value="s1">React</option>
      <option value="s2">Next.js</option>
      <option value="s3">Astro</option>
      <option value="s4">Gatsby</option>
    </SelectNative>
  </div>
</template>
