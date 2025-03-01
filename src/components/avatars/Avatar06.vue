<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
</script>

<template>
  <div class="relative">
    <Avatar size="xs">
      <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
      <AvatarFallback>KK</AvatarFallback>
    </Avatar>
    <span
      class="border-background bg-muted-foreground absolute -end-0.5 bottom-0.5 size-3 rounded-full border-2"
    >
      <span class="sr-only">Online</span>
    </span>
  </div>
</template>
