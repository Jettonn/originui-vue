<script setup lang="ts">
import { Zap } from 'lucide-vue-next'
import Badge from '@/components/ui/Badge.vue'
</script>

<template>
  <Badge class="gap-1">
    <Zap class="-ms-0.5 opacity-60" :size="12" :stroke-width="2" aria-hidden="true" />
    Badge
  </Badge>
</template>
