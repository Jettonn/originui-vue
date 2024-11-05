<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-52">Read-only input</Label>
    <Input
      id="input-52"
      class="read-only:bg-muted"
      value="This is a read-only input"
      readonly
      placeholder="Email"
      type="email"
    />
  </div>
</template>
