<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Textarea from '@/components/ui/Textarea.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="textarea-06">Textarea with error</Label>
    <Textarea
      id="textarea-06"
      class="border-destructive/80 text-destructive focus-visible:border-destructive/80 focus-visible:ring-destructive/30"
      placeholder="Leave a comment"
      value="Hello!"
    />
    <p class="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
      Message should be at least 10 characters
    </p>
  </div>
</template>
