<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import { Plus } from 'lucide-vue-next'

const open = ref(false)

const toggleOpen = () => {
  open.value = !open.value
}
</script>

<template>
  <Button
    class="group rounded-full"
    variant="outline"
    size="icon"
    @click="toggleOpen"
    :aria-expanded="open"
    aria-label="Close menu"
  >
    <Plus
      class="transition-transform duration-500 [transition-timing-function:cubic-bezier(0.68,-0.6,0.32,1.6)] group-aria-expanded:rotate-[135deg]"
      :size="16"
      :stroke-width="2"
      aria-hidden="true"
    />
  </Button>
</template>
