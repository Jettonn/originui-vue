<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <Button class="group h-fit gap-4 py-3 text-left" variant="outline">
    <div class="space-y-1">
      <h3>Talent Agency</h3>
      <p class="font-normal text-muted-foreground">Matches for your roster</p>
    </div>
    <ChevronRight
      class="opacity-60 transition-transform group-hover:translate-x-0.5"
      :size="16"
      :stroke-width="2"
      aria-hidden="true"
    />
  </Button>
</template>
