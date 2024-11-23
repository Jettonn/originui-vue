<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import SelectNative from '@/components/ui/SelectNative.vue'

const selectedOption = ref('s1')
</script>

<template>
  <div class="space-y-2">
    <Label for="select-48">Multiple select (native)</Label>
    <div class="overflow-hidden rounded-lg border border-input">
      <SelectNative
        v-model="selectedOption"
        id="select-48"
        multiple
        class="rounded-none border-none"
      >
        <option value="s1">React</option>
        <option value="s2">Next.js</option>
        <option value="s3">Astro</option>
        <option value="s4">Gatsby</option>
        <option value="s5">Vue</option>
        <option value="s6">Angular</option>
      </SelectNative>
    </div>
  </div>
</template>
