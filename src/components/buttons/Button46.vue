<script setup lang="ts">
import { ref } from 'vue'
import Button from '../ui/Button.vue'
import { ChevronUp, ChevronDown } from 'lucide-vue-next'

const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <Button
    variant="ghost"
    @click="toggleExpand"
    :aria-expanded="isExpanded"
    aria-controls="expandable-content"
  >
    {{ isExpanded ? 'Show less' : 'Show more' }}
    <ChevronUp
      v-if="isExpanded"
      class="-me-1 ms-1"
      :size="16"
      :stroke-width="2"
      aria-hidden="true"
    />
    <ChevronDown v-else class="-me-1 ms-1" :size="16" :stroke-width="2" aria-hidden="true" />
  </Button>
</template>
