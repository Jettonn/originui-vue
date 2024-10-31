<script setup lang="ts">
import { useCharacterLimit } from '@/hooks/useCharacterLimit'
import Input from '../ui/Input.vue'
import Label from '../ui/Label.vue'

const maxLength = 8
const { text, remainingCharacters } = useCharacterLimit({
  maxLength
})
</script>

<template>
  <div class="space-y-2">
    <Label for="input-35">Input with characters left</Label>
    <Input
      id="input-35"
      type="text"
      v-model="text"
      :maxlength="maxLength"
      aria-describedby="characters-left"
    />
    <p
      id="characters-left"
      class="mt-2 text-xs text-muted-foreground"
      role="status"
      aria-live="polite"
    >
      <span class="tabular-nums">{{ remainingCharacters }}</span>
      characters left
    </p>
  </div>
</template>
