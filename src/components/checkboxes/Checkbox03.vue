<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Label from '@/components/ui/Label.vue'

const checked = ref(true)
</script>

<template>
  <div
    class="flex items-center gap-2 [--primary:var(--color-indigo-300)] [--ring:var(--color-indigo-300)] in-[.dark]:[--primary:var(--color-indigo-900)] in-[.dark]:[--ring:var(--color-indigo-900)]"
  >
    <Checkbox v-model="checked" id="checkbox-03" />
    <Label for="checkbox-03">Colored checkbox</Label>
  </div>
</template>
