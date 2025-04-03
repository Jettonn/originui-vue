<script setup lang="ts">
import Label from '../ui/Label.vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
</script>

<template>
  <div class="space-y-2">
    <Label for="select-36">Select with description and right indicator</Label>
    <Select default-value="s2">
      <SelectTrigger id="select-36" class="**:data-desc:hidden">
        <SelectValue placeholder="Choose a plan" />
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2"
      >
        <SelectItem value="s1">
          Standard Plan
          <span class="mt-1 block text-xs text-muted-foreground" data-desc>
            Ideal for individuals
          </span>
        </SelectItem>
        <SelectItem value="s2">
          Pro Plan
          <span class="mt-1 block text-xs text-muted-foreground" data-desc>
            For professional users
          </span>
        </SelectItem>
        <SelectItem value="s3">
          Enterprise Plan
          <span class="mt-1 block text-xs text-muted-foreground" data-desc>
            Built for large teams
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
