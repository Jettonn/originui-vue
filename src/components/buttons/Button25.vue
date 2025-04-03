<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import { ChevronDown, ChevronUp } from 'lucide-vue-next'

const count = ref(235)
</script>

<template>
  <div class="inline-flex -space-x-px rounded-lg shadow-xs shadow-black/5 rtl:space-x-reverse">
    <Button
      class="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
      variant="outline"
      size="icon"
      aria-label="Upvote"
      @click="count++"
    >
      <ChevronUp :size="16" :stroke-width="2" aria-hidden="true" />
    </Button>
    <span class="flex items-center border border-input px-3 text-sm font-medium">{{ count }}</span>
    <Button
      class="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
      variant="outline"
      size="icon"
      aria-label="Downvote"
      @click="count--"
    >
      <ChevronDown :size="16" :stroke-width="2" aria-hidden="true" />
    </Button>
  </div>
</template>
