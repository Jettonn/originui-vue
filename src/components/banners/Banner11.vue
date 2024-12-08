<script setup lang="ts">
import { Download, LoaderCircle } from 'lucide-vue-next'
import Button from '../ui/Button.vue'
import { ref } from 'vue'

const isDownloading = ref<boolean>(false)

function handleDownload() {
  isDownloading.value = true

  setTimeout(() => {
    isDownloading.value = false
  }, 2000)
}
</script>

<template>
  <div class="bg-muted px-4 py-3 md:py-2">
    <div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
      <p class="text-sm">
        <span class="font-medium">v2.1.0</span>
        <span class="mx-2 text-muted-foreground">•</span>
        New features and improvements available
      </p>
      <Button
        size="sm"
        variant="outline"
        :disabled="isDownloading"
        @click="handleDownload"
        class="min-w-24"
      >
        <LoaderCircle
          v-if="isDownloading"
          class="-ms-0.5 me-2 animate-spin"
          :size="16"
          stroke-width="2"
          aria-hidden="true"
        />
        <Download v-else :size="16" class="-ms-0.5 me-2" aria-hidden="true" />
        {{ isDownloading ? 'Updating...' : 'Update now' }}
      </Button>
    </div>
  </div>
</template>
