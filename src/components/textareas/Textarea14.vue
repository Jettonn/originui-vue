<script setup lang="ts">
import Textarea from '@/components/ui/Textarea.vue'
</script>

<template>
  <div class="group relative">
    <label
      for="textarea-14"
      class="has-[+textarea:not(:placeholder-shown)):-translate-y-1/2 origin-start absolute top-0 block translate-y-2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:top-0 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium has-[+textarea:not(:placeholder-shown)]:text-foreground"
    >
      <span class="inline-flex bg-background px-2">Textarea with label animation</span>
    </label>
    <Textarea id="textarea-14" placeholder="" />
  </div>
</template>
