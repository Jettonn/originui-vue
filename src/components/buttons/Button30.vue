<script setup lang="ts">
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from 'lucide-vue-next'
import { ref } from 'vue'
import { ToggleGroup, ToggleGroupItem } from '../ui/ToggleGroup'

const value = ref('left')
</script>

<template>
  <ToggleGroup
    class="inline-flex gap-0 -space-x-px divide-x divide-background rounded-lg shadow-sm shadow-black/[0.04] rtl:space-x-reverse"
    type="single"
    v-model="value"
  >
    <ToggleGroupItem
      class="rounded-none bg-primary/80 text-primary-foreground shadow-none first:rounded-s-lg last:rounded-e-lg hover:bg-primary focus-visible:z-10 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      aria-label="Align Left"
      value="left"
    >
      <AlignLeft :size="16" :stroke-width="2" aria-hidden="true" />
    </ToggleGroupItem>
    <ToggleGroupItem
      class="rounded-none bg-primary/80 text-primary-foreground shadow-none first:rounded-s-lg last:rounded-e-lg hover:bg-primary focus-visible:z-10 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      aria-label="Align Center"
      value="center"
    >
      <AlignCenter :size="16" :stroke-width="2" aria-hidden="true" />
    </ToggleGroupItem>
    <ToggleGroupItem
      class="rounded-none bg-primary/80 text-primary-foreground shadow-none first:rounded-s-lg last:rounded-e-lg hover:bg-primary focus-visible:z-10 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      aria-label="Align Right"
      value="right"
    >
      <AlignRight :size="16" :stroke-width="2" aria-hidden="true" />
    </ToggleGroupItem>
    <ToggleGroupItem
      class="rounded-none bg-primary/80 text-primary-foreground shadow-none first:rounded-s-lg last:rounded-e-lg hover:bg-primary focus-visible:z-10 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
      aria-label="Align Justify"
      value="justify"
    >
      <AlignJustify :size="16" :stroke-width="2" aria-hidden="true" />
    </ToggleGroupItem>
  </ToggleGroup>
</template>
