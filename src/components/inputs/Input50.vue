<script setup lang="ts">
import { CreditCard } from 'lucide-vue-next'
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'

const cardNumber = '#### #### #### ####'
const expiryDate = '##/##'
const cvc = '####'
</script>

<template>
  <div class="space-y-2">
    <Label class="text-sm font-medium text-foreground">Card Details</Label>
    <div class="rounded-lg shadow-sm shadow-black/[.04]">
      <div class="relative focus-within:z-10">
        <Input
          id="cardNumber"
          class="peer rounded-b-none pe-9 shadow-none [direction:inherit]"
          placeholder="Card Number"
          v-mask="cardNumber"
        />
        <div
          class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50"
        >
          <CreditCard :size="16" :strokeWidth="2" aria-hidden="true" />
        </div>
      </div>
      <div class="-mt-px flex">
        <div class="w-1/2 min-w-0 flex-1 focus-within:z-10">
          <Input
            id="expiryDate"
            class="rounded-e-none rounded-t-none shadow-none [direction:inherit]"
            placeholder="MM/YY"
            v-mask="expiryDate"
          />
        </div>
        <div class="-ms-px w-1/2 min-w-0 flex-1 focus-within:z-10">
          <Input
            id="cvc"
            class="rounded-s-none rounded-t-none shadow-none [direction:inherit]"
            placeholder="CVC"
            v-mask="cvc"
          />
        </div>
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
