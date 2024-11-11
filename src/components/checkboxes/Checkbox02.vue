<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Label from '@/components/ui/Label.vue'

const checked = ref<'indeterminate' | boolean>('indeterminate')
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox id="checkbox-02" v-model="checked" />
    <Label for="checkbox-02">Indeterminate checkbox</Label>
  </div>
</template>
