<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import { LoaderCircle } from 'lucide-vue-next'

const isLoading = ref(false)

const handleClick = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
}
</script>

<template>
  <Button
    @click="handleClick"
    :disabled="isLoading"
    :data-loading="isLoading"
    class="group relative disabled:opacity-100"
  >
    <span :class="{ 'text-transparent': isLoading }">Click me</span>
    <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center">
      <LoaderCircle class="animate-spin" :size="16" :stroke-width="2" aria-hidden="true" />
    </div>
  </Button>
</template>
