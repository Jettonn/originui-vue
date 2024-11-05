<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Textarea from '@/components/ui/Textarea.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="textarea-18">Read-only textarea</Label>
    <Textarea
      id="textarea-18"
      class="read-only:bg-muted"
      value="This is a read-only textarea"
      readonly
      placeholder="Leave a comment"
    />
  </div>
</template>
