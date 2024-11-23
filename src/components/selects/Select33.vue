<script setup lang="ts">
import Label from '../ui/Label.vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
</script>

<template>
  <div class="space-y-2">
    <Label for="select-33">Select with left text</Label>
    <Select default-value="s1">
      <SelectTrigger id="select-33">
        <span> Language: <SelectValue placeholder="Select a language" /> </span>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="s1">Javascript</SelectItem>
        <SelectItem value="s2">Bash</SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
