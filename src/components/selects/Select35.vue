<script setup lang="ts">
import Label from '../ui/Label.vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="select-35">Options with icon and right indicator</Label>
    <Select default-value="s2">
      <SelectTrigger
        id="select-35"
        class="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0 [&>span_svg]:text-muted-foreground/80"
      >
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2"
      >
        <SelectItem value="s1">
          <Icon icon="ri:reactjs-line" width="16" height="16" aria-hidden="true" />
          <span class="truncate">React</span>
        </SelectItem>
        <SelectItem value="s2">
          <Icon icon="ri:nextjs-line" width="16" height="16" aria-hidden="true" />
          <span class="truncate">Next.js</span>
        </SelectItem>
        <SelectItem value="s3">
          <Icon icon="ri:gatsby-line" width="16" height="16" aria-hidden="true" />
          <span class="truncate">Gatsby</span>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
