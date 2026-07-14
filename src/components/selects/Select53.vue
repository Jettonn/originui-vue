<script setup lang="ts">
import Label from '../ui/Label.vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
</script>

<template>
  <div class="space-y-2">
    <Label for="select-53">Large select</Label>
    <Select default-value="s1">
      <SelectTrigger id="select-53" size="lg">
        <SelectValue placeholder="Select a framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="s1">Vue</SelectItem>
        <SelectItem value="s2">React</SelectItem>
        <SelectItem value="s3">Svelte</SelectItem>
        <SelectItem value="s4">Angular</SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
