<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Label from '@/components/ui/Label.vue'
import Textarea from '@/components/ui/Textarea.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="textarea-11">Textarea with right button</Label>
    <Textarea id="textarea-11" placeholder="Leave a comment" />
    <div class="flex justify-end">
      <Button variant="outline">Send</Button>
    </div>
  </div>
</template>
