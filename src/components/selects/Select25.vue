<script setup lang="ts">
import Label from '../ui/Label.vue'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '../ui/Select'
</script>

<template>
  <div class="space-y-2">
    <Label for="select-25">Select with options groups</Label>
    <Select default-value="s1">
      <SelectTrigger id="select-25">
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frontend</SelectLabel>
          <SelectItem value="s1">React</SelectItem>
          <SelectItem value="s2">Vue</SelectItem>
          <SelectItem value="s3">Angular</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Backend</SelectLabel>
          <SelectItem value="s4">Node.js</SelectItem>
          <SelectItem value="s5">Python</SelectItem>
          <SelectItem value="s6">Java</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
