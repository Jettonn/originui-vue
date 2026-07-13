<script setup lang="ts">
import {
  Stepper,
  StepperItem,
  StepperIndicator,
  StepperSeparator,
  StepperTitle,
  StepperTrigger
} from '@/components/ui/Stepper'
import Button from '@/components/ui/Button.vue'
import { Check as CheckIcon } from 'lucide-vue-next'
import { ref } from 'vue'

const steps = [
  { step: 1, title: 'Account' },
  { step: 2, title: 'Profile' },
  { step: 3, title: 'Confirm' }
]

const current = ref(1)
</script>

<template>
  <div class="flex w-full max-w-md flex-col gap-6">
    <Stepper v-model="current">
      <StepperItem
        v-for="item in steps"
        :key="item.step"
        :step="item.step"
        class="flex-1 last:flex-initial"
      >
        <StepperTrigger>
          <StepperIndicator>
            <CheckIcon class="hidden size-4 group-data-[state=completed]/step:block" />
            <span class="group-data-[state=completed]/step:hidden">{{ item.step }}</span>
          </StepperIndicator>
          <StepperTitle class="hidden sm:block">{{ item.title }}</StepperTitle>
        </StepperTrigger>
        <StepperSeparator v-if="item.step !== steps.length" />
      </StepperItem>
    </Stepper>

    <div class="flex justify-between gap-2">
      <Button
        variant="outline"
        :disabled="current === 1"
        @click="current = Math.max(1, current - 1)"
      >
        Previous
      </Button>
      <Button
        :disabled="current === steps.length"
        @click="current = Math.min(steps.length, current + 1)"
      >
        Next
      </Button>
    </div>
  </div>
</template>
