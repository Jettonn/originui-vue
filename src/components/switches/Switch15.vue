<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import Switch from '@/components/ui/Switch.vue'

const checked = ref(false)
</script>

<template>
  <div
    class="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-xs shadow-black/[.04] has-data-[state=checked]:border-ring"
  >
    <Switch
      id="switch-15"
      v-model="checked"
      class="order-1 h-4 w-6 after:absolute after:inset-0 [&_span]:size-3 data-[state=checked]:[&_span]:translate-x-2 data-[state=checked]:[&_span]:rtl:-translate-x-2"
      aria-describedby="switch-15-description"
    />
    <div class="grid grow gap-2">
      <Label for="switch-15">
        Label
        <span class="text-xs font-normal leading-[inherit] text-muted-foreground">
          (Sublabel)
        </span>
      </Label>
      <p id="switch-15-description" class="text-xs text-muted-foreground">
        A short description goes here.
      </p>
    </div>
  </div>
</template>
