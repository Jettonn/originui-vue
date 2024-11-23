<script setup lang="ts">
import { Check, ChevronDown, Plus } from 'lucide-vue-next'
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
  CommandList,
  CommandSeparator
} from '../ui/Command'
import Label from '../ui/Label.vue'

const organizations = [
  {
    value: 'originui',
    label: 'Origin UI'
  },
  {
    value: 'cruip',
    label: 'Cruip'
  }
]

const open = ref(false)
const selectedValue = ref('originui')

const selectedOrganization = computed(
  () => organizations.find(organization => organization.value === selectedValue.value)?.label
)

const handleSelect = (currentValue: { key: string; value: string }) => {
  const value = currentValue.value
  selectedValue.value = value === selectedValue.value ? '' : value
  open.value = false
}
</script>

<template>
  <div class="space-y-2">
    <Label for="select-42">Select with search and button</Label>
    <Popover v-model:open="open">
      <PopoverTrigger as-child>
        <Button
          id="select-42"
          variant="outline"
          role="combobox"
          :aria-expanded="open"
          class="w-full justify-between bg-background px-3 font-normal hover:bg-background"
        >
          <span :class="cn('truncate', !selectedValue && 'text-muted-foreground')">
            {{ selectedOrganization || 'Select organization' }}
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
          <CommandInput placeholder="Find organization" />
          <CommandList>
            <CommandEmpty>No organization found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                v-for="organization in organizations"
                :key="organization.value"
                :data-value="organization.value"
                @select="handleSelect"
              >
                {{ organization.label }}
                <Check
                  :class="
                    cn(
                      'ml-auto',
                      selectedValue === organization.value ? 'opacity-100' : 'opacity-0'
                    )
                  "
                />
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <Button variant="ghost" class="w-full justify-start font-normal">
                <Plus
                  :size="16"
                  :stroke-width="2"
                  class="-ms-2 me-2 opacity-60"
                  aria-hidden="true"
                />
                New organization
              </Button>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>
</template>
