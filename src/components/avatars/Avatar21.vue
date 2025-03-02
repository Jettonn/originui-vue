<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <div class="bg-muted flex items-center rounded-full p-0.5">
    <div class="flex -space-x-3">
      <img
        class="ring-muted rounded-full ring-2"
        src="/avatar-80-03.jpg"
        :width="40"
        :height="40"
        alt="Avatar 01"
      />
      <img
        class="ring-muted rounded-full ring-2"
        src="/avatar-80-04.jpg"
        :width="40"
        :height="40"
        alt="Avatar 02"
      />
      <img
        class="ring-muted rounded-full ring-2"
        src="/avatar-80-05.jpg"
        :width="40"
        :height="40"
        alt="Avatar 03"
      />
      <img
        class="ring-muted rounded-full ring-2"
        src="/avatar-80-06.jpg"
        :width="40"
        :height="40"
        alt="Avatar 04"
      />
    </div>
    <Button
      variant="secondary"
      class="text-muted-foreground hover:text-foreground flex items-center justify-center rounded-full bg-transparent px-3 text-xs shadow-none hover:bg-transparent"
    >
      +3
    </Button>
  </div>
</template>
