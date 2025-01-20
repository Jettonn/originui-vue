<script setup lang="ts">
import Button from '../ui/Button.vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/Tooltip'
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline" size="sm">Tiny</Button>
      </TooltipTrigger>
      <TooltipContent class="px-2 py-1 text-xs"> This is a simple tooltip </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
