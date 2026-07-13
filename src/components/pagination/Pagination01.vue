<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { ref } from 'vue'

const pages = [1, 2, 3, 4, 5]
const current = ref(1)
</script>

<template>
  <nav aria-label="Pagination" class="flex items-center gap-1">
    <Button
      variant="outline"
      size="icon"
      aria-label="Previous page"
      :disabled="current === 1"
      @click="current = Math.max(1, current - 1)"
    >
      <ChevronLeft />
    </Button>
    <Button
      v-for="page in pages"
      :key="page"
      :variant="page === current ? 'default' : 'outline'"
      size="icon"
      :aria-current="page === current ? 'page' : undefined"
      @click="current = page"
    >
      {{ page }}
    </Button>
    <Button
      variant="outline"
      size="icon"
      aria-label="Next page"
      :disabled="current === pages.length"
      @click="current = Math.min(pages.length, current + 1)"
    >
      <ChevronRight />
    </Button>
  </nav>
</template>
