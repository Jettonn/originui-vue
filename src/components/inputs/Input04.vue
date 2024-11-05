<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'
</script>

<template>
  <div>
    <div class="mb-2 flex justify-between gap-1">
      <Label for="input-04" class="mb-0">Input with hint</Label>
      <span class="text-sm text-muted-foreground">Optional</span>
    </div>
    <Input id="input-04" placeholder="Email" type="email" />
  </div>
</template>
