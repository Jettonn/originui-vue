<script setup lang="ts">
import Label from '../ui/Label.vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
</script>

<template>
  <div class="space-y-2">
    <Label for="select-18">Select with helper text</Label>
    <Select default-value="s3">
      <SelectTrigger id="select-18">
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="s1">React</SelectItem>
        <SelectItem value="s2">Next.js</SelectItem>
        <SelectItem value="s3">Astro</SelectItem>
        <SelectItem value="s4">Gatsby</SelectItem>
      </SelectContent>
    </Select>
    <p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
      Tell us what's your favorite Select framework
    </p>
  </div>
</template>
