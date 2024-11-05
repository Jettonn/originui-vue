<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-03">Input with helper text</Label>
    <Input id="input-03" placeholder="Email" type="email" />
    <p class="text-xs text-muted-foreground" role="region" aria-live="polite">
      We won't share your email with anyone
    </p>
  </div>
</template>
