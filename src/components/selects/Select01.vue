<script setup lang="ts">
import { ref } from 'vue'
import Label from '../ui/Label.vue'
import SelectNative from '../ui/SelectNative.vue'

const selectedOption = ref('s1')
</script>

<template>
  <div class="space-y-2">
    <Label for="select-01">Simple select (native)</Label>
    <SelectNative v-model="selectedOption" id="select-01">
      <option value="s1">Vue</option>
      <option value="s2">React</option>
      <option value="s3">Next.js</option>
      <option value="s4">Nuxt</option>
    </SelectNative>
  </div>
</template>
