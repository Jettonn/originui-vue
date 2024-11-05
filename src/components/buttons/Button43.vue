<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Button class="flex-1" variant="outline" aria-label="Login with Google" size="icon">
      <Icon icon="ri:google-fill" class="text-[#DB4437] dark:text-primary" aria-hidden="true" />
    </Button>
    <Button class="flex-1" variant="outline" aria-label="Login with Facebook" size="icon">
      <Icon icon="ri:facebook-fill" class="text-[#1877f2] dark:text-primary" aria-hidden="true" />
    </Button>
    <Button class="flex-1" variant="outline" aria-label="Login with X" size="icon">
      <Icon icon="ri:twitter-x-fill" class="text-[#14171a] dark:text-primary" aria-hidden="true" />
    </Button>
    <Button class="flex-1" variant="outline" aria-label="Login with GitHub" size="icon">
      <Icon icon="ri:github-fill" class="text-black dark:text-primary" aria-hidden="true" />
    </Button>
  </div>
</template>
