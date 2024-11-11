<script setup lang="ts">
import { ref } from 'vue'
import Toggle from '@/components/ui/Toggle/Toggle.vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip'
import { Bookmark } from 'lucide-vue-next'

const bookmarked = ref(false)
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <Toggle
          aria-label="Bookmark this"
          class="group size-9 p-0 hover:bg-indigo-50 hover:text-indigo-500 data-[state=on]:bg-indigo-50 data-[state=on]:text-indigo-500"
          v-model:pressed="bookmarked"
        >
          <Bookmark :size="16" :stroke-width="2" aria-hidden="true" />
        </Toggle>
      </TooltipTrigger>
      <TooltipContent
        class="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground"
      >
        <p>{{ bookmarked ? 'Remove bookmark' : 'Bookmark this' }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
