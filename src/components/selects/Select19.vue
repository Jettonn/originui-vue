<script setup lang="ts">
import Label from '../ui/Label.vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
</script>

<template>
  <div class="space-y-2" :style="{ '--ring': '234 89% 74%' }">
    <Label for="select-19">Select with colored border and ring</Label>
    <Select default-value="s1">
      <SelectTrigger id="select-19">
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="s1">React</SelectItem>
        <SelectItem value="s2">Next.js</SelectItem>
        <SelectItem value="s3">Astro</SelectItem>
        <SelectItem value="s4">Gatsby</SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
