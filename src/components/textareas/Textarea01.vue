<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Textarea from '@/components/ui/Textarea.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="textarea-01">Simple textarea</Label>
    <Textarea id="textarea-01" placeholder="Leave a comment" />
  </div>
</template>
