<script setup lang="ts">
import { Rocket, X } from 'lucide-vue-next'
import Button from '../ui/Button.vue'
import { ref } from 'vue'

const isVisible = ref<boolean>(true)
</script>

<template>
  <div v-if="isVisible" class="dark bg-muted px-4 py-3 text-foreground">
    <div class="flex gap-2 md:items-center">
      <div class="flex grow gap-3 md:items-center">
        <div
          class="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 max-md:mt-0.5"
          aria-hidden="true"
        >
          <Rocket class="opacity-80" :size="16" stroke-width="2" />
        </div>
        <div class="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
          <div class="space-y-0.5">
            <p class="text-sm font-medium">Boost your experience with Origin UI</p>
            <p class="text-sm text-muted-foreground">
              The new feature is live! Try it out and let us know what you think.
            </p>
          </div>
          <div class="flex gap-2 max-md:flex-wrap">
            <Button size="sm" class="text-sm"> Try now </Button>
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
        aria-label="Close banner"
        @click="isVisible = false"
      >
        <X
          :size="16"
          stroke-width="2"
          class="opacity-60 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </Button>
    </div>
  </div>
</template>
