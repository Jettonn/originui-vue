<script setup lang="ts">
import { DialogContent, DialogRoot, DialogPortal } from 'radix-vue'
import Command from './Command.vue'

defineProps<{
  modelValue?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <DialogRoot :open="modelValue" @update:open="val => emit('update:modelValue', val)">
    <DialogPortal>
      <DialogContent class="overflow-hidden p-0">
        <Command
          class="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
        >
          <slot />
        </Command>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
