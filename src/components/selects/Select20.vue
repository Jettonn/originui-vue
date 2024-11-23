<script setup lang="ts">
import Label from '../ui/Label.vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
</script>

<template>
  <div class="space-y-2 [&_svg]:text-destructive/80">
    <Label for="select-20">Select with error</Label>
    <Select default-value="s1">
      <SelectTrigger
        id="select-20"
        class="border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/30"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="s1">React</SelectItem>
        <SelectItem value="s2">Next.js</SelectItem>
        <SelectItem value="s3">Astro</SelectItem>
        <SelectItem value="s4">Gatsby</SelectItem>
      </SelectContent>
    </Select>
    <p class="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
      Selected option is invalid
    </p>
  </div>
</template>
