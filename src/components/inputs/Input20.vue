<script setup lang="ts">
import { Download } from 'lucide-vue-next'
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-20">Input with end icon button</Label>
    <div class="flex rounded-lg shadow-sm shadow-black/[.04]">
      <Input
        id="input-20"
        class="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
        placeholder="Email"
        type="email"
      />
      <button
        class="inline-flex w-9 items-center justify-center rounded-e-lg border border-input bg-background text-sm text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Subscribe"
      >
        <Download :size="16" :stroke-width="2" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
