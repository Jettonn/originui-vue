<script setup lang="ts">
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog'
import Button from '@/components/ui/Button.vue'
import { ArrowRight } from 'lucide-vue-next'
import { ref, computed } from 'vue'
import DialogImg from '@/assets/dialog-content.png'

const stepContent = [
  {
    title: 'Welcome to Origin UI',
    description:
      'Discover a powerful collection of components designed to enhance your development workflow.',
  },
  {
    title: 'Customizable Components',
    description:
      'Each component is fully customizable and built with modern web standards in mind.',
  },
  {
    title: 'Ready to Start?',
    description:
      'Begin building amazing interfaces with our comprehensive component library.',
  },
  {
    title: 'Get Support',
    description:
      'Access our extensive documentation and community resources to make the most of Origin UI.',
  },
]

const step = ref(1)
const totalSteps = stepContent.length

const currentStep = computed(() => stepContent[step.value - 1])

function handleContinue() {
  if (step.value < totalSteps) {
    step.value += 1
  }
}

function resetStep() {
  step.value = 1
}
</script>

<template>
  <Dialog @openChange="resetStep">
    <DialogTrigger asChild>
      <Button variant="outline">Onboarding</Button>
    </DialogTrigger>
    <DialogContent class="gap-0 p-0 [&>button:last-child]:text-white">
      <div class="p-2">
        <img
          class="w-full rounded-lg"
          :src="DialogImg"
          width="382"
          height="216"
          alt="dialog"
        />
      </div>
      <div class="space-y-6 px-6 pb-6 pt-3">
        <DialogHeader>
          <DialogTitle>{{ currentStep.title }}</DialogTitle>
          <DialogDescription>{{ currentStep.description }}</DialogDescription>
        </DialogHeader>
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div class="flex justify-center space-x-1.5 max-sm:order-1">
            <div
              v-for="index in totalSteps"
              :key="index"
              :class="[
                'h-1.5 w-1.5 rounded-full bg-primary',
                index === step ? 'bg-primary' : 'opacity-20',
              ]"
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Skip
              </Button>
            </DialogClose>
            <Button
              v-if="step < totalSteps"
              class="group"
              type="button"
              @click="handleContinue"
            >
              Next
              <ArrowRight
                class="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                :size="16"
                :strokeWidth="2"
                aria-hidden="true"
              />
            </Button>
            <DialogClose v-else asChild>
              <Button type="button">Okay</Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
