<script setup lang="ts">
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'

const expiryDate = '##/##'
</script>

<template>
  <div class="space-y-2">
    <Label for="expiryDate_input">Expiry date</Label>
    <Input
      id="expiryDate_input"
      class="[direction:inherit]"
      placeholder="MM/YY"
      v-mask="expiryDate"
    />
    <p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
      Built with
      <a
        class="underline hover:text-foreground"
        href="https://github.com/vuejs-tips/vue-the-mask"
        target="_blank"
        rel="noopener nofollow"
        >vue-the-mask</a
      >
    </p>
  </div>
</template>
