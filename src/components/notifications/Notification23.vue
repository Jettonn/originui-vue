<script setup lang="ts">
import Button from '../ui/Button.vue'
</script>

<template>
  <div
    class="z-100 rounded-lg border border-border bg-background px-4 py-3 shadow-lg shadow-black/5"
  >
    <div class="flex flex-col justify-between gap-3 md:flex-row md:items-center">
      <p class="text-sm">
        We use cookies to improve your experience, analyze site usage, and show personalized
        content.
      </p>
      <div class="flex gap-2 max-md:flex-wrap">
        <Button size="sm">Accept</Button>
        <Button variant="outline" size="sm"> Decline </Button>
      </div>
    </div>
  </div>
</template>
