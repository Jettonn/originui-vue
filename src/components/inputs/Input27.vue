<template>
  <div class="space-y-2">
    <Label for="input-27">Search input with loader</Label>
    <div class="relative">
      <Input
        id="input-27"
        class="peer pe-9 ps-9"
        placeholder="Search..."
        type="search"
        v-model="inputValue"
      />
      <div
        class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50"
      >
        <LoaderCircle
          v-if="isLoading"
          class="animate-spin"
          :size="16"
          :stroke-width="2"
          aria-hidden="true"
          role="presentation"
        />
        <Search v-else :size="16" :stroke-width="2" aria-hidden="true" />
      </div>
      <button
        class="absolute inset-y-px end-px flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Press to speak"
        type="submit"
      >
        <Mic :size="16" :stroke-width="2" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import Label from '@/components/ui/Label.vue'
import Input from '@/components/ui/Input.vue'
import { LoaderCircle, Search } from 'lucide-vue-next'

const inputValue = ref('')
const isLoading = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

watchEffect(() => {
  if (inputValue.value) {
    isLoading.value = true
    timer = setTimeout(() => {
      isLoading.value = false
    }, 500)
  }

  return () => timer && clearTimeout(timer)
})
</script>
