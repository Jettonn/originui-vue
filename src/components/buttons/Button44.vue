<script setup lang="ts">
import Button from '../ui/Button.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <Button variant="outline">
      <Icon
        icon="ri:google-fill"
        class="me-3 text-[#DB4437] dark:text-white/60"
        aria-hidden="true"
      />
      Login with Google
    </Button>
    <Button variant="outline">
      <Icon
        icon="ri:twitter-x-fill"
        class="me-3 text-[#14171a] dark:text-white/60"
        aria-hidden="true"
      />
      Login with X
    </Button>
    <Button variant="outline">
      <Icon
        icon="ri:facebook-fill"
        class="me-3 text-[#1877f2] dark:text-white/60"
        aria-hidden="true"
      />
      Login with Facebook
    </Button>
    <Button variant="outline">
      <Icon
        icon="ri:github-fill"
        class="me-3 text-[#333333] dark:text-white/60"
        aria-hidden="true"
      />
      Login with GitHub
    </Button>
  </div>
</template>
