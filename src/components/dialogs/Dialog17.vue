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
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'
import { Store, CreditCard } from 'lucide-vue-next'
import { ref } from 'vue'

const cardNumberMask = '#### #### #### ####'
const expiryDateMask = '##/##'
const cvcMask = '####'

const paymentPlan = ref('yearly')

const nameOnCard = ref('')
const cardNumber = ref('')
const expiryDate = ref('')
const cvc = ref('')

const showCouponInput = ref(false)
const couponCode = ref('')
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Checkout</Button>
    </DialogTrigger>
    <DialogContent>
      <div class="flex flex-col gap-2 mb-2">
        <div
          class="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
          aria-hidden="true"
        >
          <Store class="opacity-80" :size="16" stroke-width="2" />
        </div>
        <DialogHeader>
          <DialogTitle class="text-left">Confirm and pay</DialogTitle>
          <DialogDescription class="text-left">
            Pay securely and cancel anytime.
          </DialogDescription>
        </DialogHeader>
      </div>

      <form class="space-y-5">
        <div class="space-y-4">
          <RadioGroup class="grid-cols-2" default-value="yearly" v-model="paymentPlan">
            <label
              for="radio-monthly"
              class="relative flex cursor-pointer flex-col gap-1 rounded-lg border border-input px-4 py-3 shadow-sm shadow-black/[.04] outline-offset-2 transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
            >
              <RadioGroupItem
                id="radio-monthly"
                value="monthly"
                class="sr-only after:absolute after:inset-0"
              />
              <p class="text-sm font-medium text-foreground">Monthly</p>
              <p class="text-sm text-muted-foreground">$32/month</p>
            </label>

            <label
              for="radio-yearly"
              class="relative flex cursor-pointer flex-col gap-1 rounded-lg border border-input px-4 py-3 shadow-sm shadow-black/[.04] outline-offset-2 transition-colors has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
            >
              <RadioGroupItem
                id="radio-yearly"
                value="yearly"
                class="sr-only after:absolute after:inset-0"
              />
              <div class="inline-flex items-start justify-between gap-2">
                <p class="text-sm font-medium text-foreground">Yearly</p>
                <div
                  class="inline-flex items-center rounded-full bg-primary px-2 text-xs font-medium leading-5 text-primary-foreground"
                >
                  Popular
                </div>
              </div>
              <p class="text-sm text-muted-foreground">$320/year</p>
            </label>
          </RadioGroup>

          <div class="space-y-2">
            <Label for="nameOnCard">Name on card</Label>
            <Input id="nameOnCard" v-model="nameOnCard" type="text" required />
          </div>

          <div class="space-y-2">
            <Label class="text-sm font-medium text-foreground">Card Details</Label>
            <div class="rounded-lg shadow-sm shadow-black/[.04]">
              <div class="relative focus-within:z-10">
                <Input
                  id="cardNumber"
                  v-model="cardNumber"
                  class="peer rounded-b-none pe-9 shadow-none [direction:inherit]"
                  placeholder="Card Number"
                  v-mask="cardNumberMask"
                />
                <div
                  class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50"
                >
                  <CreditCard :size="16" stroke-width="2" aria-hidden="true" />
                </div>
              </div>
              <div class="-mt-px flex">
                <div class="w-1/2 min-w-0 flex-1 focus-within:z-10">
                  <Input
                    id="expiryDate"
                    v-model="expiryDate"
                    class="rounded-e-none rounded-t-none shadow-none [direction:inherit]"
                    placeholder="MM/YY"
                    v-mask="expiryDateMask"
                  />
                </div>
                <div class="-ms-px w-1/2 min-w-0 flex-1 focus-within:z-10">
                  <Input
                    id="cvc"
                    v-model="cvc"
                    class="rounded-s-none rounded-t-none shadow-none [direction:inherit]"
                    placeholder="CVC"
                    v-mask="cvcMask"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              v-if="!showCouponInput"
              type="button"
              @click="showCouponInput = true"
              class="text-sm underline hover:no-underline"
            >
              + Add coupon
            </button>
            <div v-else class="space-y-2">
              <Label for="coupon">Coupon code</Label>
              <Input id="coupon" placeholder="Enter your code" v-model="couponCode" />
            </div>
          </div>
        </div>
        <Button type="button" class="w-full">Subscribe</Button>
      </form>

      <p class="text-center text-xs text-muted-foreground">
        Payments are non-refundable. Cancel anytime.
      </p>
    </DialogContent>
  </Dialog>
</template>
