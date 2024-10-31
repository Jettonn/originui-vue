<script setup lang="ts">
import Input from '../ui/Input.vue'
</script>

<template>
  <div class="group relative">
    <label
      for="input-32"
      class="has-[+input:not(:placeholder-shown)):-translate-y-1/2 origin-start absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm text-muted-foreground/70 transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground"
    >
      <span class="inline-flex bg-background px-2">Input with label animation</span>
    </label>
    <Input id="input-32" type="email" placeholder="" />
  </div>
</template>
