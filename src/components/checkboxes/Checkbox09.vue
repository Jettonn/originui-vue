<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Label from '@/components/ui/Label.vue'

const checked = ref(true)
</script>

<template>
  <div class="flex items-center justify-between gap-2">
    <Checkbox v-model="checked" id="checkbox-09" class="order-1" />
    <Label for="checkbox-09">Right aligned checkbox</Label>
  </div>
</template>
