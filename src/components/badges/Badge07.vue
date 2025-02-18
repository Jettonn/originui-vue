<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import Badge from '@/components/ui/Badge.vue'
</script>

<template>
  <Badge variant="outline" class="gap-1.5">
    <Check class="text-emerald-500" :size="12" :stroke-width="2" aria-hidden="true" />
    Badge
  </Badge>
</template>
