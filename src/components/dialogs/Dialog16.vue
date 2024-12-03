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
import Checkbox from '@/components/ui/Checkbox.vue'
import { Wallet, CreditCard } from 'lucide-vue-next'
import { ref } from 'vue'

const cardNumberMask = '#### #### #### ####'
const expiryDateMask = '##/##'
const cvcMask = '####'

const nameOnCard = ref('')
const cardNumber = ref('')
const expiryDate = ref('')
const cvc = ref('')
const isPrimaryCard = ref(false)
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Card details</Button>
    </DialogTrigger>
    <DialogContent>
      <div class="flex flex-col gap-2">
        <div
          class="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
          aria-hidden="true"
        >
          <Wallet class="opacity-80" size="16" stroke-width="2" />
        </div>
        <DialogHeader>
          <DialogTitle class="text-left">Update your card</DialogTitle>
          <DialogDescription class="text-left">
            Your new card will replace your current card.
          </DialogDescription>
        </DialogHeader>
      </div>

      <form class="space-y-5">
        <div class="space-y-4">
          <div class="space-y-2">
            <Label for="nameOnCard">Name on card</Label>
            <Input
              id="nameOnCard"
              v-model="nameOnCard"
              type="text"
              required
            />
          </div>
          <div class="space-y-2">
            <Label for="cardNumber_input">Card Number</Label>
            <div class="relative">
              <Input
                id="cardNumber_input"
                v-model="cardNumber"
                class="peer pe-9 [direction:inherit]"
                placeholder="Card Number"
                v-mask="cardNumberMask"
              />
              <div
                class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50"
              >
                <CreditCard size="16" stroke-width="2" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-1 space-y-2">
              <Label for="expiryDate_input">Expiry date</Label>
              <Input
                id="expiryDate_input"
                v-model="expiryDate"
                class="[direction:inherit]"
                placeholder="MM/YY"
                v-mask="expiryDateMask"
              />
            </div>
            <div class="flex-1 space-y-2">
              <Label for="cvc_input">CVC</Label>
              <Input
                id="cvc_input"
                v-model="cvc"
                class="[direction:inherit]"
                placeholder="CVC"
                v-mask="cvcMask"
              />
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox id="card-primary" v-model="isPrimaryCard" />
          <Label for="card-primary" class="font-normal text-muted-foreground">
            Set as default payment method
          </Label>
        </div>
        <Button type="button" class="w-full">Update card</Button>
      </form>
    </DialogContent>
  </Dialog>
</template>
