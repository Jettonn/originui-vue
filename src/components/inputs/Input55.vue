<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'

const mask = '##:##:##'
</script>

<template>
  <div class="space-y-2">
    <Label for="input-55">Timestamp</Label>
    <Input id="input-55" placeholder="00:00:00" type="text" v-mask="mask" />
    <p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
      Built with
      <a
        class="underline hover:text-foreground"
        href="https://github.com/probil/vue-the-mask"
        target="_blank"
        rel="noopener nofollow"
        >vue-the-mask</a
      >
    </p>
  </div>
</template>
