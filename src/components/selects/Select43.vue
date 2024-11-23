<script setup lang="ts">
import { Check, ChevronDown } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { cn } from '@/lib/utils'
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

type TimezoneOption = {
  value: string
  label: string
  numericOffset: number
}

const open = ref(false)
const selectedValue = ref('Europe/London')

// @ts-expect-error: Intl.supportedValuesOf is not supported in all browsers
const timezones = Intl.supportedValuesOf('timeZone')

const formattedTimezones = computed(() => {
  return timezones
    .map((timezone: string) => {
      const formatter = new Intl.DateTimeFormat('en', {
        timeZone: timezone,
        timeZoneName: 'shortOffset'
      })
      const parts = formatter.formatToParts(new Date())
      const offset = parts.find(part => part.type === 'timeZoneName')?.value || ''
      const modifiedOffset = offset === 'GMT' ? 'GMT+0' : offset

      return {
        value: timezone,
        label: `(${modifiedOffset}) ${timezone.replace(/_/g, ' ')}`,
        numericOffset: parseInt(offset.replace('GMT', '').replace('+', '') || '0')
      }
    })
    .sort((a: TimezoneOption, b: TimezoneOption) => a.numericOffset - b.numericOffset)
})

const selectedTimezone = computed(
  () =>
    formattedTimezones.value.find(
      (timezone: TimezoneOption) => timezone.value === selectedValue.value
    )?.label
)

const handleSelect = (currentValue: { key: string; value: string }) => {
  const value = currentValue.value
  selectedValue.value = value === selectedValue.value ? '' : value
  open.value = false
}

const filterFn = (value: string, search: string) => {
  const normalizedValue = value.toLowerCase()
  const normalizedSearch = search.toLowerCase().replace(/\s+/g, '')
  return normalizedValue.includes(normalizedSearch) ? 1 : 0
}
</script>

<template>
  <div class="space-y-2">
    <Label for="select-43">Timezone select with search</Label>
    <Popover v-model:open="open">
      <PopoverTrigger as-child>
        <Button
          id="select-43"
          variant="outline"
          role="combobox"
          :aria-expanded="open"
          class="w-full justify-between bg-background px-3 font-normal hover:bg-background"
        >
          <span :class="cn('truncate', !selectedValue && 'text-muted-foreground')">
            {{ selectedTimezone || 'Select timezone' }}
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
        <Command :filter="filterFn">
          <CommandInput placeholder="Search timezone..." />
          <CommandList>
            <CommandEmpty>No timezone found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                v-for="timezone in formattedTimezones"
                :key="timezone.value"
                :data-value="timezone.value"
                @select="handleSelect"
              >
                {{ timezone.label }}
                <Check
                  :class="
                    cn('ml-auto', selectedValue === timezone.value ? 'opacity-100' : 'opacity-0')
                  "
                />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>
</template>
