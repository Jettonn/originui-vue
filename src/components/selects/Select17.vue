<script setup lang="ts">
import Label from '../ui/Label.vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
import { Clock } from 'lucide-vue-next'
</script>

<template>
  <div class="space-y-2">
    <Label for="select-17">Select with icon</Label>
    <Select default-value="s1">
      <SelectTrigger id="select-17" class="relative ps-9">
        <div
          class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 group-has-[[disabled]]:opacity-50"
        >
          <Clock :size="16" :stroke-width="2" aria-hidden="true" />
        </div>
        <SelectValue placeholder="Select time" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="s1">00:00 AM - 11:59 PM</SelectItem>
        <SelectItem value="s2">01:00 AM - 12:59 PM</SelectItem>
        <SelectItem value="s3">02:00 AM - 01:59 PM</SelectItem>
        <SelectItem value="s4">03:00 AM - 02:59 PM</SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
