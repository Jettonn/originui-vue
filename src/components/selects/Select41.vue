<script setup lang="ts">
import { Check, ChevronDown } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { cn } from '@/lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/Popover'
import Button from '../ui/Button.vue'
import Label from '../ui/Label.vue'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '../ui/Command'

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js'
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit'
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js'
  },
  {
    value: 'remix',
    label: 'Remix'
  },
  {
    value: 'astro',
    label: 'Astro'
  },
  {
    value: 'angular',
    label: 'Angular'
  },
  {
    value: 'vue',
    label: 'Vue.js'
  },
  {
    value: 'react',
    label: 'React'
  },
  {
    value: 'ember',
    label: 'Ember.js'
  },
  {
    value: 'gatsby',
    label: 'Gatsby'
  },
  {
    value: 'eleventy',
    label: 'Eleventy'
  },
  {
    value: 'solid',
    label: 'SolidJS'
  },
  {
    value: 'preact',
    label: 'Preact'
  },
  {
    value: 'qwik',
    label: 'Qwik'
  },
  {
    value: 'alpine',
    label: 'Alpine.js'
  },
  {
    value: 'lit',
    label: 'Lit'
  }
]

const open = ref(false)
const selectedValue = ref('')

const selectedFramework = computed(
  () => frameworks.find(framework => framework.value === selectedValue.value)?.label
)

const handleSelect = (currentValue: { key: string; value: string }) => {
  const value = currentValue.value
  selectedValue.value = value === selectedValue.value ? '' : value
  open.value = false
}
</script>

<template>
  <div class="space-y-2">
    <Label for="select-41">Select with search</Label>
    <Popover v-model:open="open">
      <PopoverTrigger as-child>
        <Button
          id="select-41"
          variant="outline"
          role="combobox"
          :aria-expanded="open"
          class="w-full justify-between bg-background px-3 font-normal hover:bg-background"
        >
          <span :class="cn('truncate', !selectedValue && 'text-muted-foreground')">
            {{ selectedFramework || 'Select framework' }}
          </span>
          <ChevronDown
            :size="16"
            :stroke-width="2"
            class="shrink-0 text-muted-foreground/80"
            aria-hidden="true"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-full min-w-[var(--radix-popper-anchor-width)] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                v-for="framework in frameworks"
                :key="framework.value"
                :data-value="framework.value"
                @select="handleSelect"
              >
                {{ framework.label }}
                <Check
                  v-if="selectedValue === framework.value"
                  :size="16"
                  stroke-width="2"
                  class="ml-auto"
                />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>
</template>
