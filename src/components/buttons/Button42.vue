<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="inline-flex flex-wrap gap-2">
    <Button variant="outline" aria-label="Login with Google" size="icon">
      <Icon icon="ri:google-fill" width="16" height="16" aria-hidden="true" />
    </Button>
    <Button variant="outline" aria-label="Login with Facebook" size="icon">
      <Icon icon="ri:facebook-fill" width="16" height="16" aria-hidden="true" />
    </Button>
    <Button variant="outline" aria-label="Login with X" size="icon">
      <Icon icon="ri:twitter-x-fill" width="16" height="16" aria-hidden="true" />
    </Button>
    <Button variant="outline" aria-label="Login with GitHub" size="icon">
      <Icon icon="ri:github-fill" width="16" height="16" aria-hidden="true" />
    </Button>
  </div>
</template>
