<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'

const selectedValue = ref('small')
</script>

<template>
  <RadioGroup class="gap-6" v-model="selectedValue">
    <div class="flex items-start gap-2">
      <RadioGroupItem
        value="small"
        id="radio-04-small"
        aria-describedby="radio-04-small-description"
      />
      <div class="grid grow gap-2">
        <Label for="radio-04-small">
          Small
          <span class="text-xs font-normal leading-[inherit] text-muted-foreground">
            (Sublabel)
          </span>
        </Label>
        <p id="radio-04-small-description" class="text-xs text-muted-foreground">
          You can use this card with a label and a description.
        </p>
      </div>
    </div>
    <div class="flex items-start gap-2">
      <RadioGroupItem
        value="large"
        id="radio-04-large"
        aria-describedby="radio-04-r2-description"
      />
      <div class="grid grow gap-2">
        <Label for="radio-04-large">
          Large
          <span class="text-xs font-normal leading-[inherit] text-muted-foreground">
            (Sublabel)
          </span>
        </Label>
        <p id="radio-04-large-description" class="text-xs text-muted-foreground">
          You can use this card with a label and a description.
        </p>
      </div>
    </div>
  </RadioGroup>
</template>
