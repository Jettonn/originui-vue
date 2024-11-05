<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-12">Input with end inline add-on</Label>
    <div class="relative">
      <Input id="input-12" class="peer pe-12" placeholder="google" type="text" />
      <span
        class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm text-muted-foreground peer-disabled:opacity-50"
      >
        .com
      </span>
    </div>
  </div>
</template>
