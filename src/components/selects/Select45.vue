<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import { ref } from 'vue'
// import { cn } from '@/lib/utils'
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
import {
  Blocks,
  Brain,
  Cpu,
  Database,
  Globe,
  Layout,
  LineChart,
  Network,
  Search,
  Server
} from 'lucide-vue-next'

const items = [
  {
    value: 'analytics platform',
    label: 'Analytics Platform',
    icon: LineChart,
    number: 2451
  },
  {
    value: 'ai services',
    label: 'AI Services',
    icon: Brain,
    number: 1832
  },
  {
    value: 'database systems',
    label: 'Database Systems',
    icon: Database,
    number: 1654
  },
  {
    value: 'compute resources',
    label: 'Compute Resources',
    icon: Cpu,
    number: 943
  },
  {
    value: 'network services',
    label: 'Network Services',
    icon: Network,
    number: 832
  },
  {
    value: 'web services',
    label: 'Web Services',
    icon: Globe,
    number: 654
  },
  {
    value: 'monitoring tools',
    label: 'Monitoring Tools',
    icon: Search,
    number: 432
  },
  {
    value: 'server management',
    label: 'Server Management',
    icon: Server,
    number: 321
  },
  {
    value: 'infrastructure',
    label: 'Infrastructure',
    icon: Blocks,
    number: 234
  },
  {
    value: 'frontend services',
    label: 'Frontend Services',
    icon: Layout,
    number: 123
  }
]

const open = ref(false)
const selectedValue = ref('')

const handleSelect = (currentValue: { key: string; value: string }) => {
  const value = currentValue.value
  selectedValue.value = value === selectedValue.value ? '' : value
  open.value = false
}
</script>

<template>
  <div class="space-y-2">
    <Label for="select-45">Options with icon and number</Label>
    <Popover v-model:open="open">
      <PopoverTrigger as-child>
        <Button
          id="select-45"
          variant="outline"
          role="combobox"
          :aria-expanded="open"
          class="w-full justify-between bg-background px-3 font-normal hover:bg-background"
        >
          <template v-if="selectedValue">
            <span class="flex min-w-0 items-center gap-2">
              <component
                :is="items.find(item => item.value === selectedValue)?.icon"
                class="h-4 w-4 text-muted-foreground"
              />
              <span class="truncate">
                {{ items.find(item => item.value === selectedValue)?.label }}
              </span>
            </span>
          </template>
          <template v-else>
            <span class="text-muted-foreground">Select service category</span>
          </template>
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
          <CommandInput placeholder="Search services..." />
          <CommandList>
            <CommandEmpty>No service found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                v-for="item in items"
                :key="item.value"
                :data-value="item.value"
                @select="handleSelect"
                class="flex items-center justify-between"
              >
                <div class="flex items-center gap-2">
                  <component :is="item.icon" class="h-4 w-4 text-muted-foreground" />
                  {{ item.label }}
                </div>
                <span class="text-xs text-muted-foreground">
                  {{ item.number.toLocaleString() }}
                </span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>
</template>
