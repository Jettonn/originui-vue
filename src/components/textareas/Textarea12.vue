<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Label from '@/components/ui/Label.vue'
import Textarea from '@/components/ui/Textarea.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="textarea-12">Textarea with button</Label>
    <Textarea id="textarea-12" placeholder="Leave a comment" />
    <Button variant="outline" class="w-full">Send</Button>
  </div>
</template>
