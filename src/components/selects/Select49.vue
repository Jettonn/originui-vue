<script setup lang="ts">
import { ref } from 'vue'
import { ListboxRoot, ListboxItem } from 'reka-ui'
import Label from '@/components/ui/Label.vue'

const selected = ref('svelte')
</script>

<template>
  <div class="space-y-2">
    <Label>Listbox with single option</Label>
    <div class="overflow-hidden rounded-lg border border-input">
      <ListboxRoot
        v-model="selected"
        class="space-y-1 bg-background p-1 text-sm shadow-xs shadow-black/5 transition-shadow"
        aria-label="Select framework"
      >
        <ListboxItem
          value="react"
          class="relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-disabled:opacity-50 data-focus-visible:outline data-focus-visible:outline-2 data-focus-visible:outline-ring/70"
        >
          React
        </ListboxItem>
        <ListboxItem
          value="vue"
          class="relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-disabled:opacity-50 data-focus-visible:outline data-focus-visible:outline-2 data-focus-visible:outline-ring/70"
        >
          Vue
        </ListboxItem>
        <ListboxItem
          value="angular"
          class="relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-disabled:opacity-50 data-focus-visible:outline data-focus-visible:outline-2 data-focus-visible:outline-ring/70"
          disabled
        >
          Angular
        </ListboxItem>
        <ListboxItem
          value="svelte"
          class="relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-disabled:opacity-50 data-focus-visible:outline data-focus-visible:outline-2 data-focus-visible:outline-ring/70"
        >
          Svelte
        </ListboxItem>
      </ListboxRoot>
    </div>
    <p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
      Built with
      <a
        class="underline hover:text-foreground"
        href="https://www.reka-ui.com/components/listbox.html"
        target="_blank"
        rel="noopener nofollow"
      >
        Reka UI Listbox
      </a>
    </p>
  </div>
</template>
