<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Label from '@/components/ui/Label.vue'
import Textarea from '@/components/ui/Textarea.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="textarea-10">Textarea with left button</Label>
    <Textarea id="textarea-10" placeholder="Leave a comment" />
    <Button variant="outline">Send</Button>
  </div>
</template>
