<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Textarea from '@/components/ui/Textarea.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="textarea-17">Textarea with no resize</Label>
    <Textarea id="textarea-17" class="[resize:none]" placeholder="Leave a comment" />
  </div>
</template>
