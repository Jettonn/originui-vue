<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Textarea from '@/components/ui/Textarea.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="textarea-02">Required textarea <span class="text-destructive">*</span></Label>
    <Textarea id="textarea-02" placeholder="Leave a message" required />
  </div>
</template>
