<script setup lang="ts">
import Button from '../ui/Button.vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/Tooltip'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Circle } from 'lucide-vue-next'
</script>

<template>
  <div class="inline-grid w-fit grid-cols-3 gap-1">
    <TooltipProvider :delay-duration="0">
      <Tooltip>
        <TooltipTrigger as-child>
          <Button class="col-start-2" variant="outline" size="icon" aria-label="Pan camera up">
            <ChevronUp :size="16" :stroke-width="2" aria-hidden="true" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top" class="px-2 py-1 text-xs">
          Pan top
          <kbd
            class="-me-1 ms-2 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70"
          >
            ⌘T
          </kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <TooltipProvider :delay-duration="0">
      <Tooltip>
        <TooltipTrigger as-child>
          <Button class="col-start-1" variant="outline" size="icon" aria-label="Pan camera left">
            <ChevronLeft :size="16" :stroke-width="2" aria-hidden="true" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" class="px-2 py-1 text-xs">
          Pan left
          <kbd
            class="-me-1 ms-2 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70"
          >
            ⌘L
          </kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <div class="flex items-center justify-center" aria-hidden="true">
      <Circle class="opacity-60" :size="16" :stroke-width="2" />
    </div>
    <TooltipProvider :delay-duration="0">
      <Tooltip>
        <TooltipTrigger as-child>
          <Button variant="outline" size="icon" aria-label="Pan camera right">
            <ChevronRight :size="16" :stroke-width="2" aria-hidden="true" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" class="px-2 py-1 text-xs">
          Pan right
          <kbd
            class="-me-1 ms-2 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70"
          >
            ⌘R
          </kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <TooltipProvider :delay-duration="0">
      <Tooltip>
        <TooltipTrigger as-child>
          <Button class="col-start-2" variant="outline" size="icon" aria-label="Pan camera down">
            <ChevronDown :size="16" :stroke-width="2" aria-hidden="true" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" class="px-2 py-1 text-xs">
          Pan bottom
          <kbd
            class="-me-1 ms-2 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70"
          >
            ⌘B
          </kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>
