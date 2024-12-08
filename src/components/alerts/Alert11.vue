<script setup lang="ts">
import { CircleAlert } from 'lucide-vue-next'
</script>

<template>
  <div class="rounded-lg border border-border px-4 py-3">
    <div class="flex gap-3">
      <CircleAlert
        class="mt-0.5 shrink-0 text-red-500 opacity-60"
        :size="16"
        stroke-width="2"
        aria-hidden="true"
      />
      <div class="grow space-y-1">
        <p class="text-sm font-medium">Password does not meet requirements:</p>
        <ul class="list-inside list-disc text-sm text-muted-foreground">
          <li>Minimum 8 characters</li>
          <li>Inlcude a special character</li>
        </ul>
      </div>
    </div>
  </div>
</template>
