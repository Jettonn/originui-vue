<script setup lang="ts">
import { ref } from 'vue'
import Label from '../ui/Label.vue'
import Switch from '../ui/Switch.vue'

const checked = ref(true)
</script>

<template>
  <div
    class="inline-flex items-center gap-2"
    :style="{ '--primary': '238.7 83.5% 66.7%', '--ring': '238.7 83.5% 66.7%' }"
  >
    <Switch v-model="checked" id="switch-03" />
    <Label for="switch-03" class="sr-only">Colored switch</Label>
  </div>
</template>
