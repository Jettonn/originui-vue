<script setup lang="ts">
import { ArrowRight, CircleAlert, X } from 'lucide-vue-next'
import Button from '../ui/Button.vue'
</script>

<template>
  <div
    class="z-100 max-w-[400px] rounded-lg border border-border bg-background px-4 py-3 shadow-lg shadow-black/5"
  >
    <div class="flex gap-2">
      <div class="flex grow gap-3">
        <CircleAlert
          class="mt-0.5 shrink-0 text-red-500"
          :size="16"
          stroke-width="2"
          aria-hidden="true"
        />
        <div class="flex grow justify-between gap-12">
          <p class="text-sm">An error occurred!</p>
          <a href="#" class="group whitespace-nowrap text-sm font-medium">
            Link
            <ArrowRight
              class="-mt-0.5 ms-1 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
              :size="16"
              stroke-width="2"
              aria-hidden="true"
            />
          </a>
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
