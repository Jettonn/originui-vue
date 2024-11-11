<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { Printer } from 'lucide-vue-next'
</script>

<template>
  <Button variant="outline">
    <Printer class="-ms-1 me-2 opacity-60" :size="16" :strokeWidth="2" aria-hidden="true" />
    Print
    <kbd
      class="-me-1 ms-3 inline-flex h-5 max-h-full items-center rounded border border-border px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70"
    >
      ⌘P
    </kbd>
  </Button>
</template>
