<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-11">Input with start inline add-on</Label>
    <div class="relative">
      <Input id="input-11" class="peer ps-16" placeholder="google.com" type="text" />
      <span
        class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm text-muted-foreground peer-disabled:opacity-50"
      >
        https://
      </span>
    </div>
  </div>
</template>
