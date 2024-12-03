<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/Dialog'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip'
import { ref, nextTick } from 'vue'
import { Check, Copy, UserPlus2 } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const emails = ref(['mark@yourcompany.com', 'jane@yourcompany.com', ''])
const copied = ref(false)
const inputRef = ref<HTMLElement | null>(null)
const lastInputRef = ref<HTMLInputElement>()

const addEmail = () => {
  emails.value.push('')
}

const handleEmailChange = (index: number, value: string | null) => {
  emails.value[index] = value ?? ''
}

const handleCopy = async () => {
  if (inputRef.value) {
    await navigator.clipboard.writeText((inputRef.value as HTMLInputElement).value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 1500)
  }
}

const handleFocus = () => {
  nextTick(() => lastInputRef.value?.focus())
}
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Invite members</Button>
    </DialogTrigger>
    <DialogContent @open-auto-focus.prevent="handleFocus()">
      <div class="flex flex-col gap-2">
        <div
          class="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
          aria-hidden="true"
        >
          <UserPlus2 class="opacity-80" :size="16" stroke-width="2" />
        </div>
        <DialogHeader>
          <DialogTitle class="text-left">Invite team members</DialogTitle>
          <DialogDescription class="text-left">
            Invite teammates to earn free components.
          </DialogDescription>
        </DialogHeader>
      </div>

      <form class="space-y-5">
        <div class="space-y-4">
          <div class="space-y-2">
            <Label>Invite via email</Label>
            <div class="space-y-3">
              <div v-for="(email, index) in emails" :key="index">
                <Input
                  :id="`team-email-${index + 1}`"
                  placeholder="hi@yourcompany.com"
                  type="email"
                  :value="email"
                  @input="
                    (e: Event) => handleEmailChange(index, (e.target as HTMLInputElement)?.value)
                  "
                  :ref="index === emails.length - 1 ? 'lastInputRef' : undefined"
                />
              </div>
            </div>
          </div>
          <button type="button" @click="addEmail" class="text-sm underline hover:no-underline">
            + Add another
          </button>
        </div>
        <Button type="button" class="w-full">Send invites</Button>
      </form>

      <hr class="my-1 border-t border-border" />

      <div class="space-y-2">
        <Label for="input-53">Invite via magic link</Label>
        <div class="relative">
          <Input
            ref="inputRef"
            id="input-53"
            class="pe-9"
            type="text"
            value="https://originui.com/refer/87689"
            readonly
          />
          <TooltipProvider :delay-duration="0">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  @click="handleCopy"
                  class="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed"
                  :aria-label="copied ? 'Copied' : 'Copy to clipboard'"
                  :disabled="copied"
                >
                  <div
                    :class="
                      cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')
                    "
                  >
                    <Check
                      class="stroke-emerald-500"
                      :size="16"
                      stroke-width="2"
                      aria-hidden="true"
                    />
                  </div>
                  <div
                    :class="
                      cn(
                        'absolute transition-all',
                        copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                      )
                    "
                  >
                    <Copy :size="16" stroke-width="2" aria-hidden="true" />
                  </div>
                </button>
              </TooltipTrigger>
              <TooltipContent
                class="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground"
              >
                Copy to clipboard
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
