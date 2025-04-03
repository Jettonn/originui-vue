<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'

const items = [
  { id: 'radio-15-r1', label: 'Hobby', price: '$9/mo', value: 'r1' },
  { id: 'radio-15-r2', label: 'Plus', price: '$29/mo', value: 'r2' },
  { id: 'radio-15-r3', label: 'Team', price: '$49/mo', value: 'r3' },
  { id: 'radio-15-r4', label: 'Enterprise', price: 'Custom', value: 'r4' }
]

const selectedValue = ref('r2')
</script>

<template>
  <fieldset class="space-y-4">
    <legend class="text-sm font-medium leading-none text-foreground">Choose plan</legend>
    <RadioGroup
      v-model="selectedValue"
      class="gap-0 -space-y-px rounded-lg shadow-xs shadow-black/[.04]"
    >
      <div
        v-for="item in items"
        :key="item.id"
        class="relative flex flex-col gap-4 border border-input p-4 first:rounded-t-lg last:rounded-b-lg has-data-[state=checked]:z-10 has-data-[state=checked]:border-ring has-data-[state=checked]:bg-accent"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <RadioGroupItem
              :id="item.id"
              :value="item.value"
              class="after:absolute after:inset-0"
              :aria-describedby="`${item.id}-price`"
            />
            <Label
              class="inline-flex items-start leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              :for="item.id"
            >
              {{ item.label }}
              <span
                v-if="item.value === 'r2'"
                class="-mt-1 ml-2 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-300/15 px-1 py-0.5 text-[10px] font-medium uppercase text-emerald-600"
              >
                Popular
              </span>
            </Label>
          </div>
          <div :id="`${item.id}-price`" class="text-xs leading-[inherit] text-muted-foreground">
            {{ item.price }}
          </div>
        </div>
      </div>
    </RadioGroup>
  </fieldset>
</template>
