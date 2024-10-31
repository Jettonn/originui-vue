<script setup lang="ts">
import { Archive } from 'lucide-vue-next'
import Button from '../ui/Button.vue'
</script>

<template>
  <Button>
    <Archive class="-ms-1 me-2 opacity-60" :size="16" :stroke-width="2" aria-hidden="true" />
    Button
  </Button>
</template>
