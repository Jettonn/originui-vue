<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import Switch from '@/components/ui/Switch.vue'

const checked = ref(true)
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch
      v-model="checked"
      id="switch-07"
      class="data-[state=unchecked]:border-input data-[state=unchecked]:bg-transparent [&_span]:transition-all data-[state=unchecked]:[&_span]:size-4 data-[state=unchecked]:[&_span]:translate-x-0.5 data-[state=unchecked]:[&_span]:bg-input data-[state=unchecked]:[&_span]:shadow-none data-[state=unchecked]:[&_span]:rtl:-translate-x-0.5"
    />
    <Label for="switch-07" class="sr-only">M3-style switch</Label>
  </div>
</template>
