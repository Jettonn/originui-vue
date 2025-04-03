<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/Dialog'
import Button from '@/components/ui/Button.vue'
import Label from '@/components/ui/Label.vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'
import Textarea from '@/components/ui/Textarea.vue'
import { ref } from 'vue'

const ratings = Array.from({ length: 9 }, (_, i) => i)
const selectedRating = ref<string>('')
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Rating</Button>
    </DialogTrigger>
    <DialogContent class="flex flex-col gap-0 p-0 [&>button:last-child]:top-3.5">
      <DialogHeader class="contents space-y-0 text-left">
        <DialogTitle class="border-b border-border px-6 py-4 text-base">
          Help us improve
        </DialogTitle>
      </DialogHeader>
      <div class="px-6 py-4">
        <form class="space-y-5">
          <div class="space-y-4">
            <div>
              <fieldset class="space-y-4">
                <legend class="text-lg font-semibold leading-none text-foreground">
                  How hard was it to set up your account?
                </legend>
                <RadioGroup
                  class="flex gap-0 -space-x-px rounded-lg shadow-xs shadow-black/5"
                  v-model="selectedRating"
                >
                  <template v-for="number in ratings" :key="number">
                    <label
                      class="relative flex size-9 flex-1 cursor-pointer flex-col items-center justify-center gap-3 border border-input text-center text-sm outline-offset-2 transition-colors first:rounded-s-lg last:rounded-e-lg has-data-[state=checked]:z-10 has-data-disabled:cursor-not-allowed has-data-[state=checked]:border-ring has-data-[state=checked]:bg-accent has-data-disabled:opacity-50 has-focus-visible:outline has-focus-visible:outline-2 has-focus-visible:outline-ring/70"
                    >
                      <RadioGroupItem
                        :id="`radio-17-r${number}`"
                        :value="number.toString()"
                        class="sr-only after:absolute after:inset-0"
                      />
                      {{ number }}
                    </label>
                  </template>
                </RadioGroup>
              </fieldset>
              <div class="mt-2 flex justify-between text-xs text-muted-foreground">
                <p>Very easy</p>
                <p>Very difficult</p>
              </div>
            </div>

            <div class="space-y-2">
              <Label for="feedback">Why did you give this rating?</Label>
              <Textarea
                id="feedback"
                placeholder="How can we improve Origin UI?"
                aria-label="Send feedback"
              />
            </div>
          </div>
          <Button type="button" class="w-full">Send feedback</Button>
        </form>
      </div>
    </DialogContent>
  </Dialog>
</template>
