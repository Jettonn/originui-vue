<script setup lang="ts">
import Button from '../ui/Button.vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/Tooltip'
import ContentImg from '@/assets/dialog-content.png'
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline" size="sm">W/ image</Button>
      </TooltipTrigger>
      <TooltipContent class="py-3">
        <div class="space-y-2">
          <img class="w-full rounded" :src="ContentImg" alt="Content image" />
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
