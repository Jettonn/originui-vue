<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'
import { Icon } from '@iconify/vue'

const items = [
  { icon: 'ri:apple-line', id: 'radio-12-cc', label: 'Card', value: 'cc' },
  { icon: 'ri:bank-card-line', id: 'radio-12-paypal', label: 'PayPal', value: 'paypal' },
  { icon: 'ri:paypal-line', id: 'radio-12-apple-pay', label: 'Apple Pay', value: 'apple-pay' }
]

const selectedValue = ref('cc')
</script>

<template>
  <RadioGroup class="grid grid-cols-3 gap-2" v-model="selectedValue">
    <label
      v-for="item in items"
      :key="item.id"
      class="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/[.04] ring-offset-background transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/70 has-[:focus-visible]:ring-offset-2"
    >
      <RadioGroupItem
        :id="item.id"
        :value="item.value"
        class="sr-only after:absolute after:inset-0"
      />
      <Icon :icon="item.icon" class="opacity-60" width="20" height="20" aria-hidden="true" />
      <p class="text-xs font-medium leading-none text-foreground">{{ item.label }}</p>
    </label>
  </RadioGroup>
</template>
