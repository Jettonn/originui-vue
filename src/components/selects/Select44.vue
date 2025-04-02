<script setup lang="ts">
import { Check, ChevronDown } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/Popover'
import Button from '../ui/Button.vue'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '../ui/Command'
import Label from '../ui/Label.vue'

const countries = [
  {
    continent: 'America',
    items: [
      { value: 'United States', flag: '🇺🇸' },
      { value: 'Canada', flag: '🇨🇦' },
      { value: 'Mexico', flag: '🇲🇽' }
    ]
  },
  {
    continent: 'Africa',
    items: [
      { value: 'South Africa', flag: '🇿🇦' },
      { value: 'Nigeria', flag: '🇳🇬' },
      { value: 'Morocco', flag: '🇲🇦' }
    ]
  },
  {
    continent: 'Asia',
    items: [
      { value: 'China', flag: '🇨🇳' },
      { value: 'Japan', flag: '🇯🇵' },
      { value: 'India', flag: '🇮🇳' }
    ]
  },
  {
    continent: 'Europe',
    items: [
      { value: 'United Kingdom', flag: '🇬🇧' },
      { value: 'France', flag: '🇫🇷' },
      { value: 'Germany', flag: '🇩🇪' }
    ]
  },
  {
    continent: 'Oceania',
    items: [
      { value: 'Australia', flag: '🇦🇺' },
      { value: 'New Zealand', flag: '🇳🇿' }
    ]
  }
]

const open = ref(false)
const selectedValue = ref('')

const selectedCountry = computed(() => {
  return countries.flatMap(group => group.items).find(item => item.value === selectedValue.value)
})

const handleSelect = (currentValue: { key: string; value: string }) => {
  const value = currentValue.value
  selectedValue.value = value === selectedValue.value ? '' : value
  open.value = false
}
</script>

<template>
  <div class="space-y-2">
    <Label for="select-44">Options with flag and search</Label>
    <Popover v-model:open="open">
      <PopoverTrigger as-child>
        <Button
          id="select-44"
          variant="outline"
          role="combobox"
          :aria-expanded="open"
          class="w-full justify-between bg-background px-3 font-normal hover:bg-background"
        >
          <template v-if="selectedValue">
            <span class="flex min-w-0 items-center gap-2">
              <span class="text-lg leading-none">{{ selectedCountry?.flag }}</span>
              <span class="truncate">{{ selectedValue }}</span>
            </span>
          </template>
          <template v-else>
            <span class="text-muted-foreground">Select country</span>
          </template>
          <ChevronDown
            :size="16"
            :stroke-width="2"
            class="shrink-0 text-muted-foreground/80"
            aria-hidden="true"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-full min-w-[var(--reka-popper-anchor-width)] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <template v-for="group in countries" :key="group.continent">
              <CommandGroup :heading="group.continent">
                <CommandItem
                  v-for="country in group.items"
                  :key="country.value"
                  :data-value="country.value"
                  @select="handleSelect"
                >
                  <span class="text-lg leading-none">{{ country.flag }}</span> {{ country.value }}
                  <Check
                    v-if="selectedValue === country.value"
                    :size="16"
                    stroke-width="2"
                    class="ml-auto"
                  />
                </CommandItem>
              </CommandGroup>
            </template>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>
</template>
