<script setup lang="ts">
import { CircleCheck, X } from 'lucide-vue-next'
import Button from '../ui/Button.vue'
</script>

<template>
  <div
    class="z-[100] max-w-[400px] rounded-lg border border-border bg-background px-4 py-3 shadow-lg shadow-black/5"
  >
    <div class="flex gap-2">
      <p class="grow text-sm">
        <CircleCheck
          class="-mt-0.5 me-3 inline-flex text-emerald-500"
          :size="16"
          stroke-width="2"
          aria-hidden="true"
        />
        Completed successfully!
      </p>
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
