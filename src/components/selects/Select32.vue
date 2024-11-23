<script setup lang="ts">
import { defineComponent, h } from 'vue'
import Label from '../ui/Label.vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'

const StatusDot = defineComponent({
  props: {
    class: String
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          width: 8,
          height: 8,
          fill: 'currentColor',
          viewBox: '0 0 8 8',
          xmlns: 'http://www.w3.org/2000/svg',
          class: props.class,
          'aria-hidden': 'true'
        },
        [
          h('circle', {
            cx: 4,
            cy: 4,
            r: 4
          })
        ]
      )
  }
})
</script>

<template>
  <div class="space-y-2">
    <Label for="select-32">Status select</Label>
    <Select default-value="s1">
      <SelectTrigger
        id="select-32"
        class="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0"
      >
        <SelectValue placeholder="Select status" />
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2"
      >
        <SelectItem value="s1">
          <span class="flex items-center gap-2">
            <StatusDot class="text-green-600" />
            <span class="truncate">Completed</span>
          </span>
        </SelectItem>
        <SelectItem value="s2">
          <span class="flex items-center gap-2">
            <StatusDot class="text-blue-500" />
            <span class="truncate">In Progress</span>
          </span>
        </SelectItem>
        <SelectItem value="s3">
          <span class="flex items-center gap-2">
            <StatusDot class="text-yellow-500" />
            <span class="truncate">Pending</span>
          </span>
        </SelectItem>
        <SelectItem value="s4">
          <span class="flex items-center gap-2">
            <StatusDot class="text-gray-500" />
            <span class="truncate">Cancelled</span>
          </span>
        </SelectItem>
        <SelectItem value="s5">
          <span class="flex items-center gap-2">
            <StatusDot class="text-red-500" />
            <span class="truncate">Failed</span>
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
