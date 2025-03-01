<script setup lang="ts">
import { Avatar, AvatarFallback } from '@/components/ui/Avatar'
import { UserRoundIcon } from 'lucide-vue-next'
</script>

<template>
  <Avatar size="xs">
    <AvatarFallback>
      <UserRoundIcon class="w-4 h-4 opacity-60" aria-hidden="true" />
    </AvatarFallback>
  </Avatar>
</template>
