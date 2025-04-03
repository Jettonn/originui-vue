<script setup lang="ts">
import { X } from 'lucide-vue-next'
import Button from '../ui/Button.vue'
</script>

<template>
  <div
    class="z-100 max-w-[400px] rounded-lg border border-border bg-background p-4 shadow-lg shadow-black/5"
  >
    <div class="flex gap-3">
      <img
        class="size-9 rounded-full"
        src="@/assets/avatar-32-01.jpg"
        width="32"
        height="32"
        alt="Mary Palmer"
      />
      <div class="flex grow flex-col gap-3">
        <div class="space-y-1">
          <p class="text-sm text-muted-foreground">
            <a class="font-medium text-foreground hover:underline" href="#"> Mary Palmer </a>
            mentioned you in
            <a class="font-medium text-foreground hover:underline" href="#">
              project-campaign-02
            </a>
            .
          </p>
          <p class="text-xs text-muted-foreground">2 min ago</p>
        </div>
        <div class="flex gap-2">
          <Button size="sm">Accept</Button>
          <Button size="sm" variant="outline"> Decline </Button>
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
</template>
