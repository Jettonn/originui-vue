<script setup lang="ts">
import { useCharacterLimit } from '@/composables/useCharacterLimit'
import Label from '@/components/ui/Label.vue'
import Input from '@/components/ui/Input.vue'

const maxLength = 50
const {
  text,
  characterCount,
  maxLength: limit
} = useCharacterLimit({
  maxLength
})
</script>

<template>
  <div class="space-y-2">
    <Label for="input-34">Input with character limit</Label>
    <div class="relative">
      <Input
        id="input-34"
        class="peer pe-14"
        type="text"
        v-model="text"
        :maxlength="maxLength"
        aria-describedby="character-count"
      />
      <div
        id="character-count"
        class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-xs tabular-nums text-muted-foreground peer-disabled:opacity-50"
        aria-live="polite"
        role="status"
      >
        {{ characterCount }}/{{ limit }}
      </div>
    </div>
  </div>
</template>
