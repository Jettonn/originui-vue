<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import { computed, ref } from 'vue'

const totalPages = 10
const current = ref(3)
const label = computed(() => `Page ${current.value} of ${totalPages}`)
</script>

<template>
  <nav aria-label="Pagination" class="flex items-center gap-3">
    <Button
      variant="outline"
      size="sm"
      :disabled="current === 1"
      @click="current = Math.max(1, current - 1)"
    >
      <ArrowLeft />
      Previous
    </Button>
    <span class="text-sm text-muted-foreground" aria-live="polite">{{ label }}</span>
    <Button
      variant="outline"
      size="sm"
      :disabled="current === totalPages"
      @click="current = Math.min(totalPages, current + 1)"
    >
      Next
      <ArrowRight />
    </Button>
  </nav>
</template>
