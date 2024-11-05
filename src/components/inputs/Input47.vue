<script setup lang="ts">
import { CreditCard } from 'lucide-vue-next'
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'

const cardNumber = '#### #### #### ####'
</script>

<template>
  <div class="space-y-2">
    <Label for="cardNumber_input">Card Number</Label>
    <div class="relative">
      <Input
        id="cardNumber_input"
        class="peer ps-9 [direction:inherit]"
        placeholder="Card Number"
        v-mask="cardNumber"
      />
      <div
        class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50"
      >
        <CreditCard :size="16" :strokeWidth="2" aria-hidden="true" />
      </div>
    </div>
    <p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
      Built with
      <a
        class="underline hover:text-foreground"
        href="https://github.com/vuejs-tips/vue-the-mask"
        target="_blank"
        rel="noopener nofollow"
        >vue-the-mask</a
      >
    </p>
  </div>
</template>
