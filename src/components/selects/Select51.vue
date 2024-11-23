<script setup lang="ts">
import { ref } from 'vue'
import { ListboxRoot, ListboxItem } from 'radix-vue'
import Label from '@/components/ui/Label.vue'

const selected = ref(['lettuce', 'tuna'])
</script>

<template>
  <div class="space-y-2">
    <Label>Listbox with option groups</Label>
    <div class="overflow-hidden rounded-lg border border-input">
      <ListboxRoot
        v-model="selected"
        class="max-h-72 min-h-20 space-y-2 overflow-auto bg-background p-1 text-sm shadow-sm shadow-black/5 transition-shadow"
        aria-label="Select some foods"
        multiple
      >
        <div class="space-y-1">
          <div class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Veggies</div>
          <ListboxItem
            value="lettuce"
            class="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
          >
            Lettuce
          </ListboxItem>
          <ListboxItem
            value="tomato"
            class="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
          >
            Tomato
          </ListboxItem>
          <ListboxItem
            value="onion"
            class="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
          >
            Onion
          </ListboxItem>
        </div>
        <div class="-mx-1 my-1 h-px bg-border" />
        <div class="space-y-1">
          <div class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Protein</div>
          <ListboxItem
            value="ham"
            class="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
          >
            Ham
          </ListboxItem>
          <ListboxItem
            value="tuna"
            class="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
          >
            Tuna
          </ListboxItem>
          <ListboxItem
            value="tofu"
            class="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
          >
            Tofu
          </ListboxItem>
        </div>
        <div class="-mx-1 my-1 h-px bg-border" />
        <div class="space-y-1">
          <div class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Condiments</div>
          <ListboxItem
            value="mayo"
            class="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
          >
            Mayonaise
          </ListboxItem>
          <ListboxItem
            value="mustard"
            class="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
          >
            Mustard
          </ListboxItem>
          <ListboxItem
            value="ranch"
            class="relative rounded-md px-2 py-1.5 data-[disabled]:cursor-not-allowed data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring/70"
          >
            Ranch
          </ListboxItem>
        </div>
      </ListboxRoot>
    </div>
    <p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
      Built with
      <a
        class="underline hover:text-foreground"
        href="https://www.radix-vue.com/components/listbox.html"
        target="_blank"
        rel="noopener nofollow"
      >
        Radix Vue Listbox
      </a>
    </p>
  </div>
</template>
