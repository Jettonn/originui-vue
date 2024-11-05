<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Textarea from '@/components/ui/Textarea.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="textarea-08">Shorter textarea</Label>
    <Textarea id="textarea-08" class="min-h-[none]" placeholder="Leave a comment" rows="2" />
  </div>
</template>
