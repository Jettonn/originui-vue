<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'
</script>

<template>
  <div
    class="[--ring:var(--color-indigo-300)] *:not-first:mt-2 in-[.dark]:[--ring:var(--color-indigo-900)]"
  >
    <Label for="input-05">Input with colored border and ring</Label>
    <Input id="input-05" placeholder="Email" type="email" />
  </div>
</template>
