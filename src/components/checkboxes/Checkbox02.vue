<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '../ui/Checkbox.vue'
import Label from '../ui/Label.vue'

const checked = ref<'indeterminate' | boolean>('indeterminate')
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox id="checkbox-02" v-model="checked" />
    <Label for="checkbox-02">Indeterminate checkbox</Label>
  </div>
</template>
