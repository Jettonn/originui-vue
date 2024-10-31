<script setup lang="ts">
import Input from '../ui/Input.vue'
import Label from '../ui/Label.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-30">File input</Label>
    <Input id="input-30" class="p-0 pe-3 file:me-3 file:border-0 file:border-e" type="file" />
  </div>
</template>
