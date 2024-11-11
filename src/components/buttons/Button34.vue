<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { QrCode } from 'lucide-vue-next'
</script>

<template>
  <div
    class="inline-flex -space-x-px divide-x divide-primary-foreground/30 rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse"
  >
    <Button
      class="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
      size="icon"
      aria-label="QR code"
    >
      <QrCode :size="16" :stroke-width="2" aria-hidden="true" />
    </Button>
    <Button
      class="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
    >
      Sign in
    </Button>
  </div>
</template>
