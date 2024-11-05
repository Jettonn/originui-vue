<script setup lang="ts">
import { ref } from 'vue'
import {
  TagsInputRoot,
  TagsInputItem,
  TagsInputItemText,
  TagsInputItemDelete,
  TagsInputInput
} from 'radix-vue'
import Label from '@/components/ui/Label.vue'
import { X } from 'lucide-vue-next'

const modelValue = ref(['Sport', 'Coding', 'Travel'])
</script>

<template>
  <div class="space-y-2">
    <Label for="input-56">Input with tags</Label>

    <TagsInputRoot v-model="modelValue" class="flex flex-col gap-3">
      <TagsInputInput
        id="input-56"
        placeholder="Add a tag"
        class="inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input bg-background px-3 py-2 pe-9 text-sm shadow-sm shadow-black/[.04] ring-offset-background transition-shadow focus-within:border-ring data-[disabled]:opacity-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2"
      />
      <div class="rounded-md w-full flex flex-wrap gap-1">
        <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
          <div
            class="transition-all border inline-flex items-center pl-2 text-secondary-foreground disabled:cursor-not-allowed disabled:opacity-50 border-solid cursor-default animate-fadeIn relative h-7 bg-background hover:bg-background rounded-md font-medium text-xs ps-2"
          >
            <TagsInputItemText class="text-xs" />
            <TagsInputItemDelete
              class="items-center justify-center whitespace-nowrap rounded-md text-xs font-medium disabled:pointer-events-none disabled:opacity-50 hover:bg-transparent p-0 rounded-e-lg flex size-7 border border-transparent ring-offset-background transition-colors focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 text-muted-foreground/80 hover:text-foreground"
            >
              <X :size="16" :stroke-width="2" aria-hidden="true" />
            </TagsInputItemDelete>
          </div>
        </TagsInputItem>
      </div>
    </TagsInputRoot>

    <p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
      Built with
      <a
        class="underline hover:text-foreground"
        href="https://www.radix-vue.com/components/tags-input"
        target="_blank"
        rel="noopener nofollow"
      >
        Radix Vue Tags Input
      </a>
    </p>
  </div>
</template>
