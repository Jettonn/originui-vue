<script setup lang="ts">
import { ref } from 'vue'
import { Eye, EyeOff } from 'lucide-vue-next'
import Label from '@/components/ui/Label.vue'
import Input from '@/components/ui/Input.vue'

const isVisible = ref(false)
const password = ref('')

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <div class="space-y-2">
    <Label for="input-23">Show/hide password input</Label>
    <div class="relative">
      <Input
        id="input-23"
        v-model="password"
        class="pe-9"
        placeholder="Password"
        :type="isVisible ? 'text' : 'password'"
      />
      <button
        class="absolute inset-y-px end-px flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        type="button"
        @click="toggleVisibility"
        :aria-label="isVisible ? 'Hide password' : 'Show password'"
        :aria-pressed="isVisible"
        aria-controls="password"
      >
        <EyeOff v-if="isVisible" :size="16" :stroke-width="2" aria-hidden="true" />
        <Eye v-else :size="16" :stroke-width="2" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
