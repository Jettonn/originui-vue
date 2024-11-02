<script setup lang="ts">
import { OTPInput } from 'vue-input-otp'
import Label from '../ui/Label.vue'
import { cn } from '@/lib/utils'
import { ref } from 'vue'

const input = ref('')
</script>

<template>
  <div className="space-y-2">
    <Label for="input-44">OTP input single</Label>
    <OTPInput v-slot="{ slots }" v-model="input" :maxlength="4">
      <div class="flex">
        <div
          v-for="(slot, idx) in slots"
          :key="idx"
          :class="
            cn(
              'relative flex size-9 items-center justify-center border-y border-e border-input bg-background font-medium text-foreground shadow-sm shadow-black/[.04] ring-offset-background transition-all first:rounded-s-lg first:border-s last:rounded-e-lg',
              { 'z-10 border border-ring ring-2 ring-ring/30 ring-offset-2': slot.isActive }
            )
          "
        >
          {{ slot.char }}
        </div>
      </div>
    </OTPInput>
    <p className="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
      Built with
      <a
        className="underline hover:text-foreground"
        href="https://github.com/wobsoriano/vue-input-otp"
        target="_blank"
        rel="noopener nofollow"
      >
        Vue Input OTP
      </a>
    </p>
  </div>
</template>
