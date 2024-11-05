<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Textarea from '@/components/ui/Textarea.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="textarea-07">Textarea with gray background</Label>
    <Textarea
      id="textarea-07"
      class="border-transparent bg-muted shadow-none"
      placeholder="Leave a comment"
    />
  </div>
</template>
