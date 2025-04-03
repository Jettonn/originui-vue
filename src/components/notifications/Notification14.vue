<script setup lang="ts">
import { Info, X } from 'lucide-vue-next'
import Button from '../ui/Button.vue'
</script>

<template>
  <div
    class="z-100 max-w-[400px] rounded-lg border border-border bg-background p-4 shadow-lg shadow-black/5"
  >
    <div class="flex gap-2">
      <div class="flex grow gap-3">
        <Info
          class="mt-0.5 shrink-0 text-blue-500"
          :size="16"
          stroke-width="2"
          aria-hidden="true"
        />
        <div class="flex grow flex-col gap-3">
          <div class="space-y-1">
            <p class="text-sm font-medium">Here is some helpful information!</p>
            <p class="text-sm text-muted-foreground">
              It aims to provide clarity or support for better decision-making.
            </p>
          </div>
          <div class="flex gap-2">
            <Button size="sm">Learn more</Button>
          </div>
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
  </div>
</template>
