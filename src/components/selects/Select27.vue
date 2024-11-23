<script setup lang="ts">
import Label from '../ui/Label.vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
</script>

<template>
  <div class="space-y-2">
    <Label for="select-27">Select with disabled options</Label>
    <Select default-value="s2">
      <SelectTrigger id="select-27">
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="s1" disabled>React</SelectItem>
        <SelectItem value="s2">Next.js</SelectItem>
        <SelectItem value="s3" disabled>Astro</SelectItem>
        <SelectItem value="s4">Gatsby</SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
