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
    <Label for="input-57">Input with inner tags</Label>

    <TagsInputRoot
      v-model="modelValue"
      class="flex flex-row flex-wrap items-center w-full border text-xs file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-input rounded-lg bg-background shadow-sm shadow-black/[.04] ring-offset-background transition-shadow focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2 p-1 gap-1"
    >
      <TagsInputItem
        v-for="item in modelValue"
        :key="item"
        :value="item"
        class="transition-all border inline-flex items-center pl-2 text-secondary-foreground disabled:cursor-not-allowed disabled:opacity-50 border-solid cursor-default animate-fadeIn relative h-7 bg-background hover:bg-background rounded-md font-medium text-xs ps-2"
      >
        <TagsInputItemText class="text-xs" />
        <TagsInputItemDelete
          class="items-center justify-center whitespace-nowrap rounded-md text-xs font-medium disabled:pointer-events-none disabled:opacity-50 hover:bg-transparent p-0 rounded-e-lg flex size-7 border border-transparent ring-offset-background transition-colors focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 text-muted-foreground/80 hover:text-foreground"
        >
          <X :size="16" :stroke-width="2" aria-hidden="true" />
        </TagsInputItemDelete>
      </TagsInputItem>
      <TagsInputInput
        id="input-57"
        placeholder="Add a tag"
        class="flex rounded-md border-input py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 flex-1 w-full min-w-[80px] focus-visible:outline-none shadow-none px-2 h-7"
      />
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
