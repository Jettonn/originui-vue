<script setup lang="ts">
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
</script>

<template>
  <div class="group relative">
    <label
      for="select-28"
      class="absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background px-2 text-xs font-medium text-foreground group-has-disabled:opacity-50"
    >
      Select with overlapping label
    </label>
    <Select>
      <SelectTrigger id="select-28">
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
