<template>
  <div class="mb-16 text-center">
    <h1 class="mb-3 text-3xl font-extrabold text-foreground md:text-4xl">{{ title }}</h1>
    <p class="text-muted-foreground">
      <slot></slot>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
