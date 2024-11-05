<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Textarea from '@/components/ui/Textarea.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="textarea-09">Disabled textarea</Label>
    <Textarea id="textarea-09" disabled placeholder="Leave a comment" />
  </div>
</template>
