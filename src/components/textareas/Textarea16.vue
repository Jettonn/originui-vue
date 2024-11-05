<script setup lang="ts">
import { useCharacterLimit } from '@/hooks/useCharacterLimit'
import Label from '@/components/ui/Label.vue'
import Textarea from '@/components/ui/Textarea.vue'

const maxLength = 150
const { text, remainingCharacters } = useCharacterLimit({
  maxLength
})
</script>

<template>
  <div class="space-y-2">
    <Label for="textarea-16">Textarea with characters left</Label>
    <Textarea
      id="textarea-16"
      v-model="text"
      :maxlength="maxLength"
      aria-describedby="characters-left-textarea"
    />
    <p
      id="characters-left-textarea"
      class="mt-2 text-right text-xs text-muted-foreground"
      role="status"
      aria-live="polite"
    >
      <span class="tabular-nums">{{ remainingCharacters }}</span>
      characters left
    </p>
  </div>
</template>
