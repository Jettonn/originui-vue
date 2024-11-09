<script setup lang="ts">
import { ref } from 'vue'
import Label from '../ui/Label.vue'
import Switch from '../ui/Switch.vue'

const checked = ref(false)
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch v-model="checked" id="switch-01" />
    <Label for="switch-01" class="sr-only">Simple switch</Label>
  </div>
</template>
