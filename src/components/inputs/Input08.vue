<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-08">Disabled input</Label>
    <Input id="input-08" placeholder="Email" type="email" disabled />
  </div>
</template>
