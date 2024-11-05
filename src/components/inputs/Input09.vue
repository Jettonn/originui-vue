<script setup lang="ts">
import { AtSign } from 'lucide-vue-next'
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-09">Input with start icon</Label>
    <div class="relative">
      <Input id="input-09" class="peer ps-9" placeholder="Email" type="email" />
      <div
        class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50"
      >
        <AtSign :size="16" :stroke-width="2" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>
