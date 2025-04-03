<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
</script>

<template>
  <div class="group relative">
    <label
      for="input-31"
      class="absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background px-2 text-xs font-medium text-foreground group-has-disabled:opacity-50"
    >
      Input with overlapping label
    </label>
    <Input id="input-31" class="h-10" placeholder="Email" type="email" />
  </div>
</template>
