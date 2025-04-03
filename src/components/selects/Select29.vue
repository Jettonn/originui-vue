<script setup lang="ts">
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
</script>

<template>
  <div
    class="relative rounded-lg border border-input bg-background shadow-xs shadow-black/5 ring-offset-background transition-shadow focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2 has-disabled:cursor-not-allowed has-disabled:opacity-50 [&:has(input:is(:disabled))_*]:pointer-events-none"
  >
    <label for="select-29" class="block px-3 pt-2 text-xs font-medium text-foreground">
      Select with inset label
    </label>
    <Select>
      <SelectTrigger
        id="select-29"
        class="border-none bg-transparent shadow-none focus:ring-0 focus:ring-offset-0"
      >
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
