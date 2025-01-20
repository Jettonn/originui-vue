<script setup lang="ts">
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/HoverCard'
</script>

<template>
  <HoverCard>
    <div class="flex items-center gap-3">
      <img
        class="shrink-0 rounded-full"
        src="@/assets/avatar-40-05.jpg"
        width="40"
        height="40"
        alt="Avatar"
      />
      <div class="space-y-0.5">
        <HoverCardTrigger as-child>
          <a class="text-sm font-medium hover:underline" href="#">Keith Kennedy</a>
        </HoverCardTrigger>
        <p class="text-xs text-muted-foreground">@k.kennedy</p>
      </div>
    </div>
    <HoverCardContent>
      <div class="space-y-3">
        <div class="flex items-center gap-3">
          <img
            class="shrink-0 rounded-full"
            src="@/assets/avatar-40-05.jpg"
            width="40"
            height="40"
            alt="Avatar"
          />
          <div class="space-y-0.5">
            <p class="text-sm font-medium">Keith Kennedy</p>
            <p class="text-xs text-muted-foreground">@k.kennedy</p>
          </div>
        </div>
        <p class="text-sm text-muted-foreground">
          Designer at <strong class="font-medium text-foreground">@Origin UI</strong>. Crafting web
          experiences with Tailwind CSS.
        </p>
        <div class="flex items-center gap-2">
          <div class="flex -space-x-1.5">
            <img
              class="rounded-full ring-1 ring-background"
              src="@/assets/avatar-20-04.jpg"
              width="20"
              height="20"
              alt="Friend 01"
            />
            <img
              class="rounded-full ring-1 ring-background"
              src="@/assets/avatar-20-05.jpg"
              width="20"
              height="20"
              alt="Friend 02"
            />
            <img
              class="rounded-full ring-1 ring-background"
              src="@/assets/avatar-20-06.jpg"
              width="20"
              height="20"
              alt="Friend 03"
            />
          </div>
          <div class="text-xs text-muted-foreground">3 mutual friends</div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>
