<script setup lang="ts">
import Progress from '@/components/ui/Progress.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const value = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    value.value = value.value >= 100 ? 0 : value.value + 10
  }, 800)
})

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="w-full max-w-xs space-y-2">
    <Progress :model-value="value" />
    <p class="text-right text-xs text-muted-foreground">{{ value }}%</p>
  </div>
</template>
