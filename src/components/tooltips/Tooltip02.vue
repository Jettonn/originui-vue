<script setup lang="ts">
import Button from '../ui/Button.vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/Tooltip'
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline" size="sm">Dark</Button>
      </TooltipTrigger>
      <TooltipContent class="dark px-2 py-1 text-xs">
        This tooltip will be always dark
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
