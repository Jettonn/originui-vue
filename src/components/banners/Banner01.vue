<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <div class="dark bg-muted px-4 py-3 text-foreground">
    <p class="flex justify-center text-sm">
      <a href="#" class="group">
        <span class="me-1 text-base leading-none">✨</span>
        Introducing transactional and marketing emails
        <ArrowRight
          class="-mt-0.5 ms-2 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
          :size="16"
          :stroke-width="2"
          aria-hidden="true"
        />
      </a>
    </p>
  </div>
</template>
