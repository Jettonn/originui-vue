<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Textarea from '@/components/ui/Textarea.vue'
</script>

<template>
  <div
    class="space-y-2 [--ring:var(--color-indigo-300)] in-[.dark]:[--ring:var(--color-indigo-900)]"
  >
    <Label for="textarea-05">Textarea with colored border and ring</Label>
    <Textarea id="textarea-05" placeholder="Leave a comment" />
  </div>
</template>
