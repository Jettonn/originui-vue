<script setup lang="ts">
import Input from '../ui/Input.vue'
import Label from '../ui/Label.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-02"> Required input <span class="text-destructive">*</span> </Label>
    <Input id="input-02" placeholder="Email" type="email" required />
  </div>
</template>
