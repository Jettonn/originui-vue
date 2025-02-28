<script setup lang="ts">
import Badge from '@/components/ui/Badge.vue'
import { X } from 'lucide-vue-next'
import { ref } from 'vue'

const isActive = ref(true)
</script>

<template>
  <Badge v-if="isActive" variant="outline" class="rounded-md px-2 py-1">
    Tag
    <button
      class="-my-px -me-1.5 -ms-px inline-flex size-5 shrink-0 items-center justify-center rounded-[inherit] p-0 opacity-60 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
      @click="isActive = false"
    >
      <X :size="12" :stroke-width="2" aria-hidden="true" />
    </button>
  </Badge>
</template>
