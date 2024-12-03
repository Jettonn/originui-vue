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
import { OTPInput } from 'vue-input-otp'
import { ref } from 'vue'
import { cn } from '@/lib/utils'

const CORRECT_CODE = '6548'
const input = ref('')
const hasGuessed = ref<undefined | boolean>(undefined)
const closeButtonRef = ref<HTMLElement>()

async function onSubmit() {
  await new Promise((resolve) => setTimeout(resolve, 100))

  hasGuessed.value = input.value === CORRECT_CODE
  input.value = ''
}
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">OTP code</Button>
    </DialogTrigger>
    <DialogContent>
      <div class="flex flex-col items-center gap-2">
        <div
          class="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
          aria-hidden="true"
        >
          <svg class="stroke-vue" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
            <circle cx="16" cy="16" r="13" fill="none" stroke-width="2"></circle>
            <circle cx="16" cy="16" r="9" fill="none" stroke-width="2"></circle>
          </svg>
        </div>
        <DialogHeader>
          <DialogTitle class="sm:text-center">
            {{ hasGuessed ? 'Code verified!' : 'Enter confirmation code' }}
          </DialogTitle>
          <DialogDescription class="sm:text-center">
            {{ hasGuessed
            ? 'Your code has been successfully verified.'
            : `Check your email and enter the code - Try ${CORRECT_CODE}` }}
          </DialogDescription>
        </DialogHeader>
      </div>

      <template v-if="hasGuessed">
        <div class="text-center">
          <DialogClose asChild ref="closeButtonRef">
            <Button type="button">Close</Button>
          </DialogClose>
        </div>
      </template>
      <template v-else>
        <div class="space-y-4">
          <div class="flex justify-center">
            <OTPInput v-slot="{ slots }" v-model="input" :maxlength="4" @complete="onSubmit">
              <div class="flex gap-2">
                <div
                  v-for="(slot, idx) in slots"
                  :key="idx"
                  :class="
                    cn(
                      'flex size-9 items-center justify-center rounded-lg border border-input bg-background font-medium text-foreground shadow-sm shadow-black/[.04] ring-offset-background transition-all',
                      { 'z-10 border border-ring ring-2 ring-ring/30 ring-offset-2': slot.isActive }
                    )
                  "
                >
                  {{ slot.char }}
                </div>
              </div>
            </OTPInput>
          </div>
          <template v-if="hasGuessed === false">
            <p
              class="text-center text-xs text-muted-foreground"
              role="alert"
              aria-live="polite"
            >
              Invalid code. Please try again.
            </p>
          </template>
          <p class="text-center text-sm">
            <a class="underline hover:no-underline" href="#">Resend code</a>
          </p>
        </div>
      </template>
    </DialogContent>
  </Dialog>
</template>
