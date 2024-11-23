<script setup lang="ts">
import { Command } from 'vue-command-palette'
</script>

<template>
  <Command.Empty class="py-6 text-center text-sm">
    <slot />
  </Command.Empty>
</template>
