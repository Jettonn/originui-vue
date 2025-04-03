<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import Switch from '@/components/ui/Switch.vue'

const checked = ref(true)
</script>

<template>
  <div
    class="inline-flex items-center gap-2 [--primary:var(--color-indigo-300)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-900)] in-[.dark]:[--ring:var(--color-indigo-900)]"
  >
    <Switch v-model="checked" id="switch-03" />
    <Label for="switch-03" class="sr-only">Colored switch</Label>
  </div>
</template>
