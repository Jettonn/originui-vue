<script setup lang="ts">
import { ref, watch } from 'vue'
import Button from '@/components/ui/Button.vue'
import { CircleUserRound } from 'lucide-vue-next'

const fileInput = ref<HTMLInputElement | null>(null)
const files = ref<FileList | null>(null)
const fileName = ref<string | null>(null)
const previewUrl = ref<string | null>(null)

function handleButtonClick() {
  fileInput.value?.click()
}

watch(files, newFiles => {
  if (newFiles && newFiles.length > 0) {
    fileName.value = newFiles[0].name
    previewUrl.value = URL.createObjectURL(newFiles[0])
  }
})

function handleRemove() {
  fileName.value = null
  previewUrl.value = null
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}
</script>

<template>
  <div>
    <div class="inline-flex items-center space-x-2 rtl:space-x-reverse">
      <div
        class="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-input"
        role="img"
        :aria-label="previewUrl ? 'Preview of uploaded file' : 'Default user avatar'"
      >
        <img
          v-if="previewUrl"
          class="h-full w-full object-cover"
          :src="previewUrl"
          alt="Preview of uploaded file"
          width="32"
          height="32"
        />
        <div v-else aria-hidden="true">
          <CircleUserRound class="opacity-60" :size="16" :stroke-width="2" />
        </div>
      </div>
      <div class="relative inline-block">
        <Button @click="handleButtonClick">
          {{ fileName ? 'Change image' : 'Upload image' }}
        </Button>
        <input
          type="file"
          ref="fileInput"
          @change="(e: Event) => (files = (e.target as HTMLInputElement).files)"
          class="hidden"
          accept="image/*"
          aria-label="Upload image file"
        />
      </div>
    </div>
    <div v-if="fileName" class="mt-2 inline-flex gap-2 text-xs">
      <p class="truncate text-muted-foreground" aria-live="polite">
        {{ fileName }}
      </p>
      <button
        @click="handleRemove"
        class="font-medium text-red-500 hover:underline"
        :aria-label="`Remove ${fileName}`"
      >
        Remove
      </button>
    </div>
    <div class="sr-only" aria-live="polite" role="status">
      {{ previewUrl ? 'Image uploaded and preview available' : 'No image uploaded' }}
    </div>
  </div>
</template>
