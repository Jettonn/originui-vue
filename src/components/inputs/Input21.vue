<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-21">Input with end button</Label>
    <div class="flex rounded-lg shadow-xs shadow-black/[.04]">
      <Input
        id="input-21"
        class="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
        placeholder="Email"
        type="email"
      />
      <button
        class="inline-flex items-center rounded-e-lg border border-input bg-background px-3 text-sm font-medium text-foreground ring-offset-background transition-shadow hover:bg-accent hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
      >
        Send
      </button>
    </div>
  </div>
</template>
