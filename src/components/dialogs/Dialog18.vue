<script setup lang="ts">
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/Dialog'
import Button from '@/components/ui/Button.vue'
import Label from '@/components/ui/Label.vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'
import { Check, RefreshCcw } from 'lucide-vue-next'
import { ref } from 'vue'

const selectedPlan = ref('plan-02')
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Change plan</Button>
    </DialogTrigger>
    <DialogContent>
      <div class="flex flex-col gap-2 mb-2">
        <div
          class="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
          aria-hidden="true"
        >
          <RefreshCcw class="opacity-80" size="16" stroke-width="2" />
        </div>
        <DialogHeader>
          <DialogTitle class="text-left">Change your plan</DialogTitle>
          <DialogDescription class="text-left">
            Pick one of the following plans.
          </DialogDescription>
        </DialogHeader>
      </div>

      <form class="space-y-5">
        <RadioGroup class="gap-2" default-value="plan-02" v-model="selectedPlan">
          <div class="relative flex w-full items-center gap-2 rounded-lg border border-input px-4 py-3 shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent">
            <RadioGroupItem
              value="plan-01"
              id="plan-01"
              aria-describedby="plan-01-description"
              class="order-1 after:absolute after:inset-0"
            />
            <div class="grid grow gap-1">
              <Label for="plan-01">Essential</Label>
              <p id="plan-01-description" class="text-xs text-muted-foreground">
                $4 per member/month
              </p>
            </div>
          </div>

          <div class="relative flex w-full items-center gap-2 rounded-lg border border-input px-4 py-3 shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent">
            <RadioGroupItem
              value="plan-02"
              id="plan-02"
              aria-describedby="plan-02-description"
              class="order-1 after:absolute after:inset-0"
            />
            <div class="grid grow gap-1">
              <Label for="plan-02">Standard</Label>
              <p id="plan-02-description" class="text-xs text-muted-foreground">
                $19 per member/month
              </p>
            </div>
          </div>

          <div class="relative flex w-full items-center gap-2 rounded-lg border border-input px-4 py-3 shadow-sm shadow-black/[.04] has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent">
            <RadioGroupItem
              value="plan-03"
              id="plan-03"
              aria-describedby="plan-03-description"
              class="order-1 after:absolute after:inset-0"
            />
            <div class="grid grow gap-1">
              <Label for="plan-03">Enterprise</Label>
              <p id="plan-03-description" class="text-xs text-muted-foreground">
                $32 per member/month
              </p>
            </div>
          </div>
        </RadioGroup>

        <div class="space-y-3">
          <p>
            <strong class="text-sm font-medium">Features include:</strong>
          </p>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li class="flex gap-2">
              <Check
                size="16"
                stroke-width="2"
                class="mt-0.5 shrink-0 text-primary"
                aria-hidden="true"
              />
              Create unlimited projects.
            </li>
            <li class="flex gap-2">
              <Check
                size="16"
                stroke-width="2"
                class="mt-0.5 shrink-0 text-primary"
                aria-hidden="true"
              />
              Remove watermarks.
            </li>
            <li class="flex gap-2">
              <Check
                size="16"
                stroke-width="2"
                class="mt-0.5 shrink-0 text-primary"
                aria-hidden="true"
              />
              Add unlimited users and free viewers.
            </li>
            <li class="flex gap-2">
              <Check
                size="16"
                stroke-width="2"
                class="mt-0.5 shrink-0 text-primary"
                aria-hidden="true"
              />
              Upload unlimited files.
            </li>
            <li class="flex gap-2">
              <Check
                size="16"
                stroke-width="2"
                class="mt-0.5 shrink-0 text-primary"
                aria-hidden="true"
              />
              7-day money back guarantee.
            </li>
            <li class="flex gap-2">
              <Check
                size="16"
                stroke-width="2"
                class="mt-0.5 shrink-0 text-primary"
                aria-hidden="true"
              />
              Advanced permissions.
            </li>
          </ul>
        </div>

        <div class="grid gap-2">
          <Button type="button" class="w-full">
            Change plan
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="ghost" class="w-full">
              Cancel
            </Button>
          </DialogClose>
        </div>
      </form>
    </DialogContent>
  </Dialog>
</template>
