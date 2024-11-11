<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'

const selectedValue = ref('')
</script>

<template>
  <fieldset class="space-y-4">
    <legend class="text-sm font-medium leading-none text-foreground">
      How likely are you to recommend us?
    </legend>
    <RadioGroup
      class="flex gap-0 -space-x-px rounded-lg shadow-sm shadow-black/[.04]"
      v-model="selectedValue"
    >
      <label
        v-for="number in [0, 1, 2, 3, 4, 5]"
        :key="number"
        class="relative flex size-9 flex-1 cursor-pointer flex-col items-center justify-center gap-3 border border-input text-center text-sm font-medium ring-offset-background transition-colors first:rounded-s-lg last:rounded-e-lg has-[[data-state=checked]]:z-10 has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[[data-disabled]]:opacity-50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/70 has-[:focus-visible]:ring-offset-2"
      >
        <RadioGroupItem
          :id="`radio-17-r${number}`"
          :value="number.toString()"
          class="sr-only after:absolute after:inset-0"
        />
        {{ number }}
      </label>
    </RadioGroup>
  </fieldset>
  <div class="mt-1 flex justify-between text-xs font-medium">
    <p><span class="text-base">😡</span> Not likely</p>
    <p>Very Likely <span class="text-base">😍</span></p>
  </div>
</template>
