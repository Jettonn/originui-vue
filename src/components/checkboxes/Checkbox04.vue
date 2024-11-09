<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '../ui/Checkbox.vue'
import Label from '../ui/Label.vue'

const checked = ref(true)
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox v-model="checked" id="checkbox-04" disabled />
    <Label for="checkbox-04">Disabled checkbox</Label>
  </div>
</template>
