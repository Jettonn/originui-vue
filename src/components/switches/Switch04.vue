<script setup lang="ts">
import { ref } from 'vue'
import Label from '../ui/Label.vue'
import Switch from '../ui/Switch.vue'

const checked = ref(true)
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch v-model="checked" id="switch-04" disabled />
    <Label for="switch-04" class="sr-only">Disabled</Label>
  </div>
</template>
