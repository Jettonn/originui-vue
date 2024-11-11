<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import { ChevronDown, ChevronUp } from 'lucide-vue-next'

const count = ref(235)
</script>

<template>
  <div class="inline-flex -space-x-px rounded-full shadow-sm shadow-black/5 rtl:space-x-reverse">
    <Button
      class="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
      size="icon"
      aria-label="Upvote"
      @click="count++"
    >
      <ChevronUp :size="16" :stroke-width="2" aria-hidden="true" />
    </Button>
    <span
      class="flex items-center justify-center bg-primary px-1 text-sm font-medium text-primary-foreground w-11"
    >
      {{ count }}
    </span>
    <Button
      class="rounded-none shadow-none first:rounded-s-full last:rounded-e-full focus-visible:z-10"
      size="icon"
      aria-label="Downvote"
      @click="count--"
    >
      <ChevronDown :size="16" :stroke-width="2" aria-hidden="true" />
    </Button>
  </div>
</template>
