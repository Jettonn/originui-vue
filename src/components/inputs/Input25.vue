<script setup lang="ts">
import Input from '../ui/Input.vue'
import Label from '../ui/Label.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-25">Search input with &lt;kbd&gt;</Label>
    <div class="relative">
      <Input id="input-25" class="pe-11" placeholder="Search..." type="search" />
      <div
        class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2 text-muted-foreground"
      >
        <kbd
          class="inline-flex h-5 max-h-full items-center rounded border border-border px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70"
        >
          ⌘K
        </kbd>
      </div>
    </div>
  </div>
</template>
