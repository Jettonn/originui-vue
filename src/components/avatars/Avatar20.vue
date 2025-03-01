<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <div class="flex -space-x-3">
    <img
      class="ring-background rounded-full ring-2 size-10"
      src="/avatar-80-03.jpg"
      :width="40"
      :height="40"
      alt="Avatar 01"
    />
    <img
      class="ring-background rounded-full ring-2 size-10"
      src="/avatar-80-04.jpg"
      :width="40"
      :height="40"
      alt="Avatar 02"
    />
    <img
      class="ring-background rounded-full ring-2 size-10"
      src="/avatar-80-05.jpg"
      :width="40"
      :height="40"
      alt="Avatar 03"
    />
    <img
      class="ring-background rounded-full ring-2 size-10"
      src="/avatar-80-06.jpg"
      :width="40"
      :height="40"
      alt="Avatar 04"
    />
    <Button
      variant="secondary"
      class="bg-secondary text-muted-foreground ring-background hover:bg-secondary hover:text-foreground flex size-10 items-center justify-center rounded-full text-xs ring-2"
      size="icon"
    >
      +3
    </Button>
  </div>
</template>
