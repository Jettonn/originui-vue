<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import Switch from '@/components/ui/Switch.vue'

const checked = ref(false)
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch
      v-model="checked"
      id="switch-02"
      class="h-5 w-8 [&_span]:size-4 [&_span]:data-[state=checked]:translate-x-3 rtl:[&_span]:data-[state=checked]:-translate-x-3"
    />
    <Label for="switch-02" class="sr-only">Small switch</Label>
  </div>
</template>
