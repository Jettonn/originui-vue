<script setup lang="ts">
import { Eclipse, X } from 'lucide-vue-next'
import Button from '../ui/Button.vue'
import { ref } from 'vue'

const isVisible = ref<boolean>(true)
</script>

<template>
  <div v-if="isVisible" class="dark bg-muted px-4 py-3 text-foreground md:py-2">
    <div class="flex gap-2 md:items-center">
      <div class="flex grow gap-3 md:items-center md:justify-center">
        <Eclipse
          class="shrink-0 opacity-60 max-md:mt-0.5"
          :size="16"
          stroke-width="2"
          aria-hidden="true"
        />
        <div class="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <p class="text-sm">
            It&lsquo;s live and ready to use! Start exploring the latest addition to your toolkit.
          </p>
          <div class="flex gap-2 max-md:flex-wrap">
            <Button size="sm" class="rounded-full"> Learn more </Button>
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
