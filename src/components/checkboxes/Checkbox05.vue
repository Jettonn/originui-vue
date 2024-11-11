<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Label from '@/components/ui/Label.vue'

const checked = ref(true)
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox v-model="checked" id="checkbox-05" />
    <Label for="checkbox-05" class="peer-data-[state=checked]:line-through">Simple todo item</Label>
  </div>
</template>
