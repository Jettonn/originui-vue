<script setup lang="ts">
import { ref } from 'vue'
import { Check, Copy } from 'lucide-vue-next'
import Label from '@/components/ui/Label.vue'
import Input from '@/components/ui/Input.vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip'
import { cn } from '@/lib/utils'

const copied = ref(false)
const inputElement = ref<HTMLInputElement | null>(null)

async function handleCopy() {
  if (!inputElement.value) return
  await navigator.clipboard.writeText(inputElement.value.value)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 1500)
}
</script>

<template>
  <div class="space-y-2">
    <Label for="input-53">Copy to clipboard</Label>
    <div class="relative">
      <Input
        ref="inputElement"
        id="input-53"
        class="pe-9"
        type="text"
        value="pnpm install origin-ui-vue"
        readonly
      />
      <TooltipProvider :delay-duration="0">
        <Tooltip>
          <TooltipTrigger
            @click="handleCopy"
            class="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed"
            :aria-label="copied ? 'Copied' : 'Copy to clipboard'"
            :disabled="copied"
          >
            <div
              :class="cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')"
            >
              <Check class="stroke-emerald-500" :size="16" :stroke-width="2" aria-hidden="true" />
            </div>
            <div
              :class="
                cn(
                  'absolute transition-all',
                  copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                )
              "
            >
              <Copy :size="16" :stroke-width="2" aria-hidden="true" />
            </div>
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
</template>
