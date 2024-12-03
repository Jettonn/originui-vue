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
import { Mail } from 'lucide-vue-next'
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Newsletter</Button>
    </DialogTrigger>
    <DialogContent>
      <div class="flex flex-col items-center gap-2 mb-2">
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
          <DialogTitle class="sm:text-center">Never miss an update</DialogTitle>
          <DialogDescription class="sm:text-center">
            Subscribe to receive news and special offers.
          </DialogDescription>
        </DialogHeader>
      </div>

      <form class="space-y-5">
        <div class="space-y-2">
          <div class="relative">
            <Input id="dialog-09" class="peer ps-9" placeholder="hi@yourcompany.com" type="email" />
            <div
              class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50"
            >
              <Mail :size="16" :stroke-width="2" aria-hidden="true" />
            </div>
          </div>
        </div>
        <Button type="button" class="w-full">
          Subscribe
        </Button>
      </form>

      <p class="text-center text-xs text-muted-foreground">
        By subscribing you agree to our
        <a class="underline hover:no-underline" href="#">
          Privacy Policy
        </a>
      </p>
    </DialogContent>
  </Dialog>
</template>
