<script setup lang="ts">
import Button from '../ui/Button.vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/Tooltip'
import { Globe } from 'lucide-vue-next'
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline" size="sm">W/ icon</Button>
      </TooltipTrigger>
      <TooltipContent class="dark py-3">
        <div class="flex gap-3">
          <Globe
            class="mt-0.5 shrink-0 opacity-60"
            :size="16"
            :stroke-width="2"
            aria-hidden="true"
          />
          <div class="space-y-1">
            <p class="text-[13px] font-medium">Tooltip with title and icon</p>
            <p class="text-xs text-muted-foreground">
              Tooltips are made to be highly customizable, with features like dynamic placement,
              rich content, and a robust API.
            </p>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
