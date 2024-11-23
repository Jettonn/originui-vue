<template>
  <Head>
    <title>{{ title }}</title>
    <meta name="description" :content="description" />
  </Head>
  <div class="mb-16 text-center">
    <h1 class="mb-3 text-3xl font-extrabold text-foreground md:text-4xl">{{ heading }}</h1>
    <p class="text-muted-foreground">
      <slot></slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import { Head } from '@unhead/vue/components'

defineProps<{
  title: string
  heading: string
  description: string
}>()
</script>
