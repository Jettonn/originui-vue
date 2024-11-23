<script setup lang="ts">
import { ref } from 'vue'
import Label from '../ui/Label.vue'
import SelectNative from '../ui/SelectNative.vue'

const selectedOption = ref('s1')
</script>

<template>
  <div class="space-y-2 [&_svg]:text-destructive/80">
    <Label for="select-06">Select with error (native)</Label>
    <SelectNative
      v-model="selectedOption"
      id="select-06"
      class="border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/30"
    >
      <option value="s1">React</option>
      <option value="s2">Next.js</option>
      <option value="s3">Astro</option>
      <option value="s4">Gatsby</option>
    </SelectNative>
    <p class="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
      Selected option is invalid
    </p>
  </div>
</template>
