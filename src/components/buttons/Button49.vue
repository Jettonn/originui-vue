<script setup lang="ts">
import { ref, watch } from 'vue'
import { CircleUserRound, X } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'

const fileInput = ref<HTMLInputElement | null>(null)
const files = ref<FileList | null>(null)
const fileName = ref<string | null>(null)
const previewUrl = ref<string | null>(null)

const handleThumbnailClick = () => {
  fileInput.value?.click()
}

watch(files, newFiles => {
  if (newFiles && newFiles.length > 0) {
    fileName.value = newFiles[0].name
    previewUrl.value = URL.createObjectURL(newFiles[0])
    console.log('File selected:', newFiles[0])
  }
})

const handleRemove = () => {
  fileName.value = null
  previewUrl.value = null
  if (fileInput.value) fileInput.value.value = ''
}
</script>

<template>
  <div>
    <div class="relative inline-flex">
      <Button
        variant="outline"
        class="relative size-16 overflow-hidden"
        @click="handleThumbnailClick"
        :aria-label="previewUrl ? 'Change image' : 'Upload image'"
      >
        <img
          v-if="previewUrl"
          class="absolute inset-0 h-full w-full object-cover"
          :src="previewUrl"
          alt="Preview of uploaded file"
        />
        <div v-else aria-hidden="true">
          <CircleUserRound class="opacity-60" :width="16" :height="16" :stroke-width="2" />
        </div>
      </Button>
      <Button
        v-if="previewUrl"
        @click="handleRemove"
        size="icon"
        variant="destructive"
        class="absolute -right-2 -top-2 size-6 rounded-full border-2 border-background"
        aria-label="Remove image"
      >
        <X :size="16" />
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
    <p
      v-if="fileName"
      class="mt-2 text-xs text-muted-foreground lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100"
    >
      {{ fileName }}
    </p>
    <div class="sr-only" aria-live="polite" role="status">
      {{ previewUrl ? 'Image uploaded and preview available' : 'No image uploaded' }}
    </div>
  </div>
</template>
