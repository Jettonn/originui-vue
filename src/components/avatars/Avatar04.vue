<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
</script>

<template>
  <Avatar size="xs" shape="square">
    <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
    <AvatarFallback>KK</AvatarFallback>
  </Avatar>
</template>
