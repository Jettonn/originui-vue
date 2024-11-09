<script setup lang="ts">
import { ref } from 'vue'
import Label from '../ui/Label.vue'
import Switch from '../ui/Switch.vue'

const checked = ref(true)
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch
      v-model="checked"
      id="switch-06"
      class="h-3 w-9 border-none [&_span]:border [&_span]:border-input"
    />
    <Label for="switch-06" class="sr-only">M2-style switch</Label>
  </div>
</template>
