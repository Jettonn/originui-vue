<script setup lang="ts">
import { defineComponent, h, type PropType } from 'vue'
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
import { cn } from '@/lib/utils'

const Square = defineComponent({
  props: {
    className: {
      type: String as PropType<string>,
      default: ''
    }
  },
  setup(props, { slots }) {
    return () =>
      h(
        'span',
        {
          'data-square': true,
          class: cn(
            'flex size-5 items-center justify-center rounded bg-muted text-xs font-medium text-muted-foreground',
            props.className
          ),
          'aria-hidden': 'true'
        },
        slots.default?.()
      )
  }
})
</script>

<template>
  <div class="space-y-2">
    <Label for="select-39">Options with placeholder avatar</Label>
    <Select default-value="s1">
      <SelectTrigger
        id="select-39"
        class="ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_[data-square]]:shrink-0"
      >
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2"
      >
        <SelectGroup>
          <SelectLabel class="ps-2">Impersonate user</SelectLabel>
          <SelectItem value="s1">
            <Square class="bg-indigo-400/20 text-indigo-500">F</Square>
            <span class="truncate">Frank Morris</span>
          </SelectItem>
          <SelectItem value="s2">
            <Square class="bg-purple-400/20 text-purple-500">X</Square>
            <span class="truncate">Xavier Guerra</span>
          </SelectItem>
          <SelectItem value="s3">
            <Square class="bg-rose-400/20 text-rose-500">A</Square>
            <span class="truncate">Anne Kelley</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
