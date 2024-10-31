<script setup lang="ts">
import { Mail } from 'lucide-vue-next'
import Input from '../ui/Input.vue'
import Label from '../ui/Label.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-10">Input with end icon</Label>
    <div class="relative">
      <Input id="input-10" class="peer pe-9" placeholder="Email" type="email" />
      <div
        class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50"
      >
        <Mail :size="16" :stroke-width="2" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>
