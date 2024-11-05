<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-18">Input with end select</Label>
    <div class="flex rounded-lg shadow-sm shadow-black/[.04]">
      <Input
        id="input-18"
        class="-me-px rounded-e-none shadow-none focus-visible:z-10"
        placeholder="google"
        type="text"
      />
      <div class="relative">
        <select
          class="peer inline-flex h-full appearance-none items-center rounded-e-lg border border-input bg-background pe-8 ps-3 text-sm text-muted-foreground ring-offset-background transition-shadow hover:bg-accent hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Domain suffix"
        >
          <option>.com</option>
          <option>.org</option>
          <option>.net</option>
        </select>
        <span
          class="pointer-events-none absolute inset-y-0 end-px flex h-full w-9 items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50"
        >
          <ChevronDown :size="16" :stroke-width="2" aria-hidden="true" />
        </span>
      </div>
    </div>
  </div>
</template>
