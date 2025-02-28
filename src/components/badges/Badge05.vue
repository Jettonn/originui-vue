<script setup lang="ts">
import { cn, badgeVariants } from '@/lib/utils'
</script>

<template>
  <a href="#" :class="cn(badgeVariants({ variant: 'default' }), 'hover:bg-primary/80')"> Link </a>
</template>
