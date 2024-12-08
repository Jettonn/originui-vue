<script setup lang="ts">
import { CircleCheck, X } from 'lucide-vue-next'
import Button from '../ui/Button.vue'
</script>

<template>
  <div
    class="z-[100] max-w-[400px] rounded-lg border border-border bg-background px-4 py-3 shadow-lg shadow-black/5"
  >
    <div class="flex items-center gap-2">
      <div class="flex grow items-center gap-3">
        <CircleCheck
          class="mt-0.5 shrink-0 text-emerald-500"
          :size="16"
          stroke-width="2"
          aria-hidden="true"
        />
        <div class="flex grow items-center justify-between gap-12">
          <p class="text-sm">You&lsquo;ve made changes!</p>
          <Button size="sm">Undo</Button>
        </div>
      </div>
      <Button
        variant="ghost"
        class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
        aria-label="Close banner"
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
