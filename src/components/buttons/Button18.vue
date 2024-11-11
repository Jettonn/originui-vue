<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { ChevronDown } from 'lucide-vue-next'
</script>

<template>
  <Button variant="ghost" class="h-auto p-0 hover:bg-transparent">
    <img
      class="size-[40px] rounded-full"
      src="@/assets/avatar.png"
      alt="Profile image"
      loading="lazy"
      aria-hidden="true"
    />

    <ChevronDown :size="16" :stroke-width="2" class="ms-2 opacity-60" aria-hidden="true" />
  </Button>
</template>
