<script setup lang="ts">
import { Radio, X } from 'lucide-vue-next'
import Button from '../ui/Button.vue'
</script>

<template>
  <div
    class="z-100 max-w-[400px] rounded-lg border border-border bg-background p-4 shadow-lg shadow-black/5"
  >
    <div class="flex items-center gap-2">
      <div
        class="flex size-9 shrink-0 items-center justify-center rounded-full border border-border"
        aria-hidden="true"
      >
        <Radio class="opacity-60" :size="16" stroke-width="2" />
      </div>
      <div class="flex grow items-center gap-12">
        <div class="space-y-1">
          <p class="text-sm font-medium">Live in 27 hours</p>
          <p class="text-xs text-muted-foreground">November 20 at 8:00 PM.</p>
        </div>
        <Button size="sm">Notify me</Button>
      </div>
      <Button
        variant="ghost"
        class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
        aria-label="Close notification"
      >
        <X
          :size="16"
          stroke-width="2"
          class="opacity-60 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </Button>
    </div>
  </div>
</template>
