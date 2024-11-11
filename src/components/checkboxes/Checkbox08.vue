<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Label from '@/components/ui/Label.vue'

const checkedVue = ref(true)
const checkedNuxt = ref(true)
const checkedNext = ref(true)
</script>

<template>
  <div class="flex gap-6">
    <div class="flex items-center gap-2">
      <Checkbox v-model="checkedVue" id="checkbox-08-a" />
      <Label for="checkbox-08-a">Vue</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox v-model="checkedNuxt" id="checkbox-08-b" />
      <Label for="checkbox-08-b">Nuxt</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox v-model="checkedNext" id="checkbox-08-c" />
      <Label for="checkbox-08-c">Next.js</Label>
    </div>
  </div>
</template>
