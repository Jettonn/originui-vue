<script setup lang="ts">
import { ref } from 'vue'
import { Eclipse, ArrowRight, X } from 'lucide-vue-next'
import Button from '../ui/Button.vue'

const isVisible = ref<boolean>(true)
</script>
<template>
  <div v-if="isVisible" class="dark bg-muted px-4 py-3 text-foreground">
    <div class="flex gap-2">
      <div class="flex grow gap-3">
        <Eclipse
          class="mt-0.5 shrink-0 opacity-60"
          :size="16"
          :stroke-width="2"
          aria-hidden="true"
        />
        <div class="flex grow flex-col justify-between gap-2 md:flex-row">
          <p class="text-sm">
            We just added something awesome to make your experience even better.
          </p>
          <a href="#" class="group whitespace-nowrap text-sm font-medium">
            Learn more
            <ArrowRight
              class="-mt-0.5 ms-1 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
              :size="16"
              :stroke-width="2"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
      <Button
        variant="ghost"
        class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
        @click="isVisible = false"
        aria-label="Close banner"
      >
        <X
          :size="16"
          :stroke-width="2"
          class="opacity-60 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </Button>
    </div>
  </div>
</template>
