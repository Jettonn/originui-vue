<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Label from '@/components/ui/Label.vue'

const checked = ref(true)
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox v-model="checked" id="checkbox-01" />
    <Label for="checkbox-01">Simple checkbox</Label>
  </div>
</template>
