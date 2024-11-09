<script setup lang="ts">
import { ref } from 'vue'
import Label from '../ui/Label.vue'
import Switch from '../ui/Switch.vue'
import { Moon, Sun } from 'lucide-vue-next'

const checked = ref(false)
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <Switch id="switch-10" v-model="checked" aria-label="Toggle switch" />
    <Label for="switch-10">
      <span class="sr-only">Toggle switch</span>
      <Sun v-if="checked" :size="16" stroke-width="2" aria-hidden="true" />
      <Moon v-else :size="16" stroke-width="2" aria-hidden="true" />
    </Label>
  </div>
</template>
