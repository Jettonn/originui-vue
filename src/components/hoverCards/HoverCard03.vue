<script setup lang="ts">
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/HoverCard'
</script>

<template>
  <HoverCard>
    <HoverCardTrigger>
      <a class="flex size-16 overflow-hidden rounded-lg p-0" aria-label="My profile" href="#title">
        <img class="size-full object-cover" src="@/assets/dialog-content.png" alt="Content Image" />
      </a>
    </HoverCardTrigger>
    <HoverCardContent class="w-[320px]">
      <div class="space-y-3">
        <div class="space-y-1">
          <h2 class="font-semibold">Building a Design System with Svelte and Tailwind CSS</h2>
          <p class="text-sm text-muted-foreground">
            Learn how to build a comprehensive design system using Tailwind CSS, including component
            architecture, and theme customization.
          </p>
        </div>
        <div class="flex items-center gap-2 text-xs text-muted-foreground">
          <span>8 min read</span>
          <span>·</span>
          <span>Updated 2 days ago</span>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>
