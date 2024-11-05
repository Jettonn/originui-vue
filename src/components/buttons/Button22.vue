<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/Tooltip'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline" size="icon" aria-label="Add new item">
          <Plus :size="16" :stroke-width="2" aria-hidden="true" />
        </Button>
      </TooltipTrigger>
      <TooltipContent
        class="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground"
      >
        Tooltip
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
