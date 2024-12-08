<script setup lang="ts">
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from '@/components/ui/Toast'
import { useToast } from '@/composables/useToast'

const { state, dismiss } = useToast()
</script>

<template>
  <ToastProvider>
    <Toast
      v-for="{ id, title, description, action, ...props } in state.toasts"
      :key="id"
      v-bind="props"
      @update:open="open => !open && dismiss(id)"
    >
      <div class="flex w-full justify-between gap-2">
        <div class="flex flex-col gap-3">
          <div class="space-y-1">
            <ToastTitle v-if="title">{{ title }}</ToastTitle>
            <ToastDescription v-if="description">{{ description }}</ToastDescription>
          </div>
          <div>
            <template v-if="typeof action === 'string'">{{ action }}</template>
            <component v-else :is="action" />
          </div>
        </div>
        <div>
          <ToastClose />
        </div>
      </div>
    </Toast>
    <ToastViewport />
  </ToastProvider>
</template>
