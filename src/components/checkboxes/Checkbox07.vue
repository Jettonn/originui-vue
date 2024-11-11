<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Label from '@/components/ui/Label.vue'

const checked = ref(true)
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox v-model="checked" id="checkbox-07" />
    <Label for="checkbox-07">
      I agree to the
      <a
        class="underline"
        href="https://originui-vue.pages.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        terms of service
      </a>
    </Label>
  </div>
</template>
