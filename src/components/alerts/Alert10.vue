<script setup lang="ts">
import { ArrowRight, TriangleAlert } from 'lucide-vue-next'
</script>

<template>
  <div class="rounded-lg border border-amber-500/50 px-4 py-3 text-amber-600">
    <div class="flex gap-3">
      <TriangleAlert
        class="mt-0.5 shrink-0 opacity-60"
        :size="16"
        stroke-width="2"
        aria-hidden="true"
      />
      <div class="flex grow justify-between gap-3">
        <p class="text-sm">Some information is missing!</p>
        <a href="#" class="group whitespace-nowrap text-sm font-medium">
          Link
          <ArrowRight
            class="-mt-0.5 ms-1 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
            :size="16"
            stroke-width="2"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  </div>
</template>
