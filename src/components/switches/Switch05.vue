<script setup lang="ts">
import { ref } from 'vue'
import Label from '../ui/Label.vue'
import Switch from '../ui/Switch.vue'

const checked = ref(false)
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch v-model="checked" id="switch-05" class="rounded-md [&_span]:rounded" />
    <Label for="switch-05" class="sr-only">Square switch</Label>
  </div>
</template>
