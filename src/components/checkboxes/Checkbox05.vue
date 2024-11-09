<script setup lang="ts">
import Checkbox from '../ui/Checkbox.vue'
import Label from '../ui/Label.vue'
import { ref } from 'vue'

const checked = ref(true)
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox v-model="checked" id="checkbox-05" />
    <Label for="checkbox-05" class="peer-data-[state=checked]:line-through">Simple todo item</Label>
  </div>
</template>
