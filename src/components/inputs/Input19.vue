<script setup lang="ts">
import { Send } from 'lucide-vue-next'
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-19">Input with end inline button</Label>
    <div class="relative">
      <Input id="input-19" class="pe-9" placeholder="Email" type="email" />
      <button
        class="absolute inset-y-px end-px flex h-full w-9 items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Subscribe"
      >
        <Send :size="16" :stroke-width="2" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
