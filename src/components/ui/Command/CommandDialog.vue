<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/Dialog'
import { Command } from './index'
import { VisuallyHidden } from 'radix-vue'

defineProps<{
  modelValue?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <Dialog :open="modelValue" @update:open="val => emit('update:modelValue', val)">
    <DialogContent class="overflow-hidden p-0 sm:max-w-lg [&>button:last-child]:hidden">
      <VisuallyHidden>
        <DialogTitle>Command Dialog</DialogTitle>
        <DialogDescription
          >Use the arrow keys to navigate, and press Enter to select an item.</DialogDescription
        >
      </VisuallyHidden>
      <Command
        class="[&_[command-group-heading]]:px-2 [&_[command-group-heading]]:font-medium [&_[command-group-heading]]:text-muted-foreground [&_[command-group]]:px-2 [&_[command-input]]:h-12 [&_[command-item]]:px-3 [&_[command-item]]:py-2"
      >
        <div command-dialog-wrapper="">
          <slot />
        </div>
      </Command>
    </DialogContent>
  </Dialog>
</template>
