<script setup lang="ts">
import Label from '../ui/Label.vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
</script>

<template>
  <div class="space-y-2">
    <Label for="select-52">Small select</Label>
    <Select default-value="s1">
      <SelectTrigger id="select-52" size="sm">
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
