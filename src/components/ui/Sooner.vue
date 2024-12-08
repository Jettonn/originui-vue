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
      'group-[.toast]:data-[button]:h-8 group-[.toast]:data-[button]:rounded-lg group-[.toast]:data-[button]:px-3 group-[.toast]:data-[button]:text-xs group-[.toast]:data-[button]:font-medium',
    cancelButton:
      'group-[.toast]:data-[button]:h-8 group-[.toast]:data-[button]:rounded-lg group-[.toast]:data-[button]:px-3 group-[.toast]:data-[button]:text-xs group-[.toast]:data-[button]:font-medium'
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
