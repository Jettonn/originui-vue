<script setup lang="ts">
import { ref } from 'vue'
import SelectNative from '../ui/SelectNative.vue'

const selectedOption = ref('')
</script>

<template>
  <div class="group relative">
    <label
      for="select-13"
      class="absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background px-2 text-xs font-medium text-foreground group-has-[select:disabled]:opacity-50"
    >
      Select with overlapping label (native)
    </label>
    <SelectNative v-model="selectedOption" id="select-13">
      <option value="" disabled>Select framework</option>
      <option value="s1">React</option>
      <option value="s2">Next.js</option>
      <option value="s3">Astro</option>
      <option value="s4">Gatsby</option>
    </SelectNative>
  </div>
</template>
