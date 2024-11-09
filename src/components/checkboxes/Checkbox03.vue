<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '../ui/Checkbox.vue'
import Label from '../ui/Label.vue'

const checked = ref(true)
</script>

<template>
  <div
    class="flex items-center gap-2"
    :style="{ '--primary': '238.7 83.5% 66.7%', '--ring': '238.7 83.5% 66.7%' }"
  >
    <Checkbox v-model="checked" id="checkbox-03" />
    <Label for="checkbox-03">Colored checkbox</Label>
  </div>
</template>
