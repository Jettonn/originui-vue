<script setup lang="ts">
import Button from '../ui/Button.vue'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/HoverCard'
</script>

<template>
  <HoverCard>
    <HoverCardTrigger>
      <Button
        class="size-auto overflow-hidden rounded-full bg-transparent p-0 hover:bg-transparent"
        aria-label="My profile"
        href="#title"
      >
        <img class="size-10" src="@/assets/avatar-40-04.jpg" alt="Avatar" />
      </Button>
    </HoverCardTrigger>
    <HoverCardContent class="w-[340px]">
      <div class="flex items-start gap-3">
        <div class="shrink-0">
          <img class="size-10 rounded-full" src="@/assets/avatar-40-04.jpg" alt="Avatar" />
        </div>
        <div class="space-y-1">
          <p class="text-sm font-medium">@Origin_UI</p>
          <p class="text-sm text-muted-foreground">
            Beautiful UI components built with Tailwind CSS and Next.js.
          </p>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>
