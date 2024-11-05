<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Input from '@/components/ui/Input.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-01">Simple input</Label>
    <Input id="input-01" placeholder="Email" type="email" />
  </div>
</template>
