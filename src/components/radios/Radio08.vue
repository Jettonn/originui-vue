<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'

const selectedValue = ref('r1')
</script>

<template>
  <RadioGroup class="gap-2" v-model="selectedValue">
    <!-- Radio card #1 -->
    <div
      class="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-xs shadow-black/[.04] has-data-[state=checked]:border-ring"
    >
      <RadioGroupItem
        value="r1"
        id="radio-08-r1"
        aria-describedby="radio-08-r1-description"
        class="order-1 after:absolute after:inset-0"
      />
      <div class="grid grow gap-2">
        <Label for="radio-08-r1">
          Label
          <span class="text-xs font-normal leading-[inherit] text-muted-foreground">
            (Sublabel)
          </span>
        </Label>
        <p id="radio-08-r1-description" class="text-xs text-muted-foreground">
          You can use this card with a label and a description.
        </p>
      </div>
    </div>
    <!-- Radio card #2 -->
    <div
      class="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-xs shadow-black/[.04] has-data-[state=checked]:border-ring"
    >
      <RadioGroupItem
        value="r2"
        id="radio-08-r2"
        aria-describedby="radio-08-r2-description"
        class="order-1 after:absolute after:inset-0"
      />
      <div class="grid grow gap-2">
        <Label for="radio-08-r2">
          Label
          <span class="text-xs font-normal leading-[inherit] text-muted-foreground">
            (Sublabel)
          </span>
        </Label>
        <p id="radio-08-r2-description" class="text-xs text-muted-foreground">
          You can use this card with a label and a description.
        </p>
      </div>
    </div>
  </RadioGroup>
</template>
