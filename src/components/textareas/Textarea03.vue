<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Textarea from '@/components/ui/Textarea.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="textarea-03">Textarea with helper text</Label>
    <Textarea id="textarea-03" placeholder="Leave a comment" />
    <p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
      Please add as many details as you can
    </p>
  </div>
</template>
