<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { Toaster as Sonner } from 'vue-sonner'

const isDark = useDark()

const toastOptions = {
  classNames: {
    toast:
      'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:shadow-black/5',
    description: 'group-[.toast]:text-muted-foreground',
    actionButton:
      'data-button:group-[.toast]:h-8 data-button:group-[.toast]:rounded-lg data-button:group-[.toast]:px-3 data-button:group-[.toast]:text-xs data-button:group-[.toast]:font-medium',
    cancelButton:
      'data-button:group-[.toast]:h-8 data-button:group-[.toast]:rounded-lg data-button:group-[.toast]:px-3 data-button:group-[.toast]:text-xs data-button:group-[.toast]:font-medium'
  }
}
</script>

<template>
  <Sonner
    :theme="isDark ? 'dark' : 'light'"
    :position="'top-right'"
    class="toaster group"
    :class-names="toastOptions.classNames"
  />
</template>
