<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import Badge from '@/components/ui/Badge.vue'
</script>

<template>
  <div class="relative">
    <Avatar size="xs">
      <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
      <AvatarFallback>KK</AvatarFallback>
    </Avatar>
    <Badge class="border-background absolute -top-1.5 left-full min-w-5 -translate-x-3.5 px-1"> 
      6 
    </Badge>
  </div>
</template>
