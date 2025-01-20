<script setup lang="ts">
import Button from '../ui/Button.vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/Tooltip'
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline" size="sm">W/ title</Button>
      </TooltipTrigger>
      <TooltipContent class="py-3">
        <div class="space-y-1">
          <p class="text-[13px] font-medium">Tooltip with title</p>
          <p class="text-xs text-muted-foreground">
            Tooltips are made to be highly customizable, with features like dynamic placement, rich
            content, and a robust API. You can even use them as a full-featured dropdown menu by
            setting the <code>trigger</code> prop to <code>click</code>.
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
