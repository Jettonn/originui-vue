<script setup lang="ts">
import Checkbox from '../ui/Checkbox.vue'
import Label from '../ui/Label.vue'
import { ref } from 'vue'

const checked = ref(true)
</script>

<template>
  <div class="flex items-center justify-between gap-2">
    <Checkbox v-model="checked" id="checkbox-09" class="order-1" />
    <Label for="checkbox-09">Right aligned checkbox</Label>
  </div>
</template>
