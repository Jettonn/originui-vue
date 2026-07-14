<script setup lang="ts">
import Label from '../ui/Label.vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
</script>

<template>
  <div class="space-y-2">
    <Label for="select-54">Select with error</Label>
    <Select>
      <SelectTrigger id="select-54" aria-invalid="true">
        <SelectValue placeholder="Select a framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="s1">Vue</SelectItem>
        <SelectItem value="s2">React</SelectItem>
        <SelectItem value="s3">Svelte</SelectItem>
        <SelectItem value="s4">Angular</SelectItem>
      </SelectContent>
    </Select>
    <p class="mt-1 text-xs text-destructive" role="alert">Please select a framework.</p>
  </div>
</template>
