<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Textarea from '@/components/ui/Textarea.vue'
</script>

<template>
  <div class="mb-2 flex items-center justify-between gap-1">
    <Label for="textarea-04" class="mb-0">Textarea with hint</Label>
    <span class="text-sm text-muted-foreground">Optional</span>
  </div>
  <Textarea id="textarea-04" placeholder="Leave a comment" />
</template>
