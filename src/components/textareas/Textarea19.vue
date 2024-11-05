<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import Textarea from '@/components/ui/Textarea.vue'

const textareaRef = ref<HTMLTextAreaElement | null>(null)
const defaultRows = 1
const maxRows = undefined

const handleInput = (e: Event) => {
  const textarea = e.target as HTMLTextAreaElement
  textarea.style.height = 'auto'

  const style = window.getComputedStyle(textarea)
  const borderHeight = parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth)
  const paddingHeight = parseInt(style.paddingTop) + parseInt(style.paddingBottom)

  const lineHeight = parseInt(style.lineHeight)
  const maxHeight = maxRows ? lineHeight * maxRows + borderHeight + paddingHeight : Infinity

  const newHeight = Math.min(textarea.scrollHeight + borderHeight, maxHeight)

  textarea.style.height = `${newHeight}px`
}
</script>

<template>
  <div class="space-y-2">
    <Label for="textarea-19">Autogrowing textarea</Label>
    <Textarea
      id="textarea-19"
      placeholder="Leave a comment"
      ref="textareaRef"
      @input="handleInput"
      :rows="defaultRows"
      class="min-h-[0px] resize-none"
    />
  </div>
</template>
