<script setup lang="ts">
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@/components/ui/Command'
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUpRight, CircleFadingPlus, FileInput, FolderPlus, Search } from 'lucide-vue-next'

const open = ref(false)

function toggleDialog() {
  open.value = !open.value
}

onMounted(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      toggleDialog()
    }
  }

  document.addEventListener('keydown', down)
  onUnmounted(() => document.removeEventListener('keydown', down))
})
</script>

<template>
  <div>
    <button
      class="inline-flex h-9 w-fit rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-xs shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-ring/20"
      @click="toggleDialog"
    >
      <span class="flex grow items-center">
        <Search
          class="-ms-1 me-3 text-muted-foreground/80"
          :size="16"
          :stroke-width="2"
          aria-hidden="true"
        />
        <span class="font-normal text-muted-foreground/70">Search</span>
      </span>
      <kbd
        class="-me-1 ms-12 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70"
      >
        ⌘K
      </kbd>
    </button>

    <CommandDialog v-model:open="open">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Quick start">
          <CommandItem data-value="New folder">
            <FolderPlus :size="16" :stroke-width="2" class="opacity-60" aria-hidden="true" />
            <span>New folder</span>
            <CommandShortcut class="justify-center">⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem data-value="Import document">
            <FileInput :size="16" :stroke-width="2" class="opacity-60" aria-hidden="true" />
            <span>Import document</span>
            <CommandShortcut class="justify-center">⌘I</CommandShortcut>
          </CommandItem>
          <CommandItem data-value="Add block">
            <CircleFadingPlus :size="16" :stroke-width="2" class="opacity-60" aria-hidden="true" />
            <span>Add block</span>
            <CommandShortcut class="justify-center">⌘B</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Navigation">
          <CommandItem data-value="Go to dashboard">
            <ArrowUpRight :size="16" :stroke-width="2" class="opacity-60" aria-hidden="true" />
            <span>Go to dashboard</span>
          </CommandItem>
          <CommandItem data-value="Go to apps">
            <ArrowUpRight :size="16" :stroke-width="2" class="opacity-60" aria-hidden="true" />
            <span>Go to apps</span>
          </CommandItem>
          <CommandItem data-value="Go to connections">
            <ArrowUpRight :size="16" :stroke-width="2" class="opacity-60" aria-hidden="true" />
            <span>Go to connections</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </div>
</template>
