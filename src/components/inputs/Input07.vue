<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-07">Input with gray background</Label>
    <Input
      id="input-07"
      class="border-transparent bg-muted shadow-none"
      placeholder="Email"
      type="email"
    />
  </div>
</template>
