<script setup lang="ts">
import {
  Stepper,
  StepperItem,
  StepperIndicator,
  StepperSeparator,
  StepperTrigger
} from '@/components/ui/Stepper'
import { Check as CheckIcon } from 'lucide-vue-next'

const steps = [1, 2, 3, 4]
</script>

<template>
  <Stepper :default-value="2" class="w-full max-w-xs">
    <StepperItem
      v-for="step in steps"
      :key="step"
      :step="step"
      class="flex-1 last:flex-initial"
    >
      <StepperTrigger>
        <StepperIndicator>
          <CheckIcon
            class="hidden size-4 group-data-[state=completed]/step:block"
          />
          <span class="group-data-[state=completed]/step:hidden">{{ step }}</span>
        </StepperIndicator>
      </StepperTrigger>
      <StepperSeparator v-if="step !== steps.length" />
    </StepperItem>
  </Stepper>
</template>
